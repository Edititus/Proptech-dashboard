import { useState, useCallback, memo } from "react";
import { ChevronLeftIcon } from "../atoms/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../atoms/icons/ChevronRightIcon";
import { ArrowUpIcon } from "../atoms/icons/ArrowUpIcon";
import { ArrowDownIcon } from "../atoms/icons/ArrowDownIcon";

type TimeFilter = "1 Week" | "1 Month" | "1 Year";

interface ChartDataPoint {
  month: string;
  values: [number, number, number];
}

interface Metric {
  label: string;
  value: string;
  change: number;
  positive: boolean;
  color: string;
}

// Constants
const TIME_FILTERS: TimeFilter[] = ["1 Week", "1 Month", "1 Year"];

const Y_AXIS_LABELS = ["50m", "40m", "30m", "20m", "10m", "0"];

const BAR_COLORS = {
  BLUE: "bg-blue-600",
  GREEN: "bg-green-500",
  RED: "bg-red-500",
} as const;

const CHART_HEIGHT = 220;
const CHART_PADDING_BOTTOM = 24;
const MAX_VALUE = 50;
const ITEMS_PER_PAGE = 6; // Number of months to show at once

// Mock data matching the image
const chartData: ChartDataPoint[] = [
  { month: "Jan", values: [38, 30, 13] },
  { month: "Feb", values: [7, 30, 14] },
  { month: "Mar", values: [18, 10, 4] },
  { month: "Apr", values: [18, 28, 13] },
  { month: "May", values: [13, 8, 8] },
  { month: "Jun", values: [41, 50, 12] },
  { month: "Jul", values: [27, 40, 20] },
  { month: "Aug", values: [28, 11, 20] },
  { month: "Sep", values: [40, 37, 10] },
];

const metrics: Metric[] = [
  {
    label: "Total Inflow",
    value: "120,000,000.00",
    change: 2.5,
    positive: true,
    color: "text-[#4169E1]",
  },
  {
    label: "MRR",
    value: "50,000,000.00",
    change: 2.5,
    positive: true,
    color: "text-[#10B981]",
  },
  {
    label: "Commission Revenue",
    value: "200,000,000.00",
    change: 0.5,
    positive: true,
    color: "text-[#14B8A6]",
  },
  {
    label: "GMV",
    value: "100,000,000.00",
    change: 0.5,
    positive: false,
    color: "text-[#EF4444]",
  },
];

// Utility function
const calculateBarHeight = (value: number): string => {
  return `${(value / MAX_VALUE) * 100}%`;
};

// Sub-components
const SalesHeader = memo(() => (
  <div className='flex flex-col sm:flex-row items-start justify-between gap-3 mb-4'>
    <div className='min-w-0'>
      <h2 className='text-lg sm:text-2xl font-bold text-gray-900 mb-1'>
        Sales Overview
      </h2>
      <p className='text-xs sm:text-sm text-gray-500'>
        Showing overview Jan 2022 - Sep 2022
      </p>
    </div>

    <button className='px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0'>
      View Transactions
    </button>
  </div>
));

SalesHeader.displayName = "SalesHeader";

interface TimeFilterButtonsProps {
  activeFilter: TimeFilter;
  onFilterChange: (filter: TimeFilter) => void;
}

const TimeFilterButtons = memo(
  ({ activeFilter, onFilterChange }: TimeFilterButtonsProps) => (
    <div className='flex justify-end gap-3 sm:gap-4 mb-4 overflow-x-auto scrollbar-hide'>
      {TIME_FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            activeFilter === filter
              ? "bg-gray-100 font-extrabold rounded-lg"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  ),
);

TimeFilterButtons.displayName = "TimeFilterButtons";

const YAxisLabels = memo(() => (
  <div
    className='flex flex-col justify-between text-sm xl:text-base text-gray-400 pt-2'
    style={{ height: `${CHART_HEIGHT}px` }}
  >
    {Y_AXIS_LABELS.map((label) => (
      <span key={label}>{label}</span>
    ))}
  </div>
));

YAxisLabels.displayName = "YAxisLabels";

interface ChartBarProps {
  value: number;
  colorClass: string;
}

const ChartBar = memo(({ value, colorClass }: ChartBarProps) => (
  <div
    className={`w-1 xl:w-1 ${colorClass} transition-all hover:opacity-80 rounded-t`}
    style={{ height: calculateBarHeight(value) }}
  />
));

ChartBar.displayName = "ChartBar";

interface ChartColumnProps {
  data: ChartDataPoint;
}

const ChartColumn = memo(({ data }: ChartColumnProps) => (
  <div className='flex-1 flex flex-col items-center h-full'>
    <div className='w-full flex items-end justify-center gap-1 xl:gap-1.5 h-full'>
      <ChartBar value={data.values[0]} colorClass={BAR_COLORS.BLUE} />
      <ChartBar value={data.values[1]} colorClass={BAR_COLORS.GREEN} />
      <ChartBar value={data.values[2]} colorClass={BAR_COLORS.RED} />
    </div>
    <span className='text-sm xl:text-base text-gray-400 mt-2'>
      {data.month}
    </span>
  </div>
));

ChartColumn.displayName = "ChartColumn";

interface ChartSectionProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  visibleData: ChartDataPoint[];
}

const ChartSection = memo(
  ({
    onPrevious,
    onNext,
    canGoPrevious,
    canGoNext,
    visibleData,
  }: ChartSectionProps) => (
    <div className='flex-1 min-w-0'>
      <div className='flex gap-3 sm:gap-6 xl:gap-8'>
        <YAxisLabels />

        <div className='flex-1 relative'>
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-8 xl:-translate-x-10 w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 flex items-center justify-center transition-all z-10 rounded-full hover:bg-gray-100 ${
              !canGoPrevious
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label='Previous chart data'
          >
            <ChevronLeftIcon className='w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8' />
          </button>

          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-8 xl:translate-x-10 w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 flex items-center justify-center transition-all z-10 rounded-full hover:bg-gray-100 ${
              !canGoNext
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label='Next chart data'
          >
            <ChevronRightIcon className='w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8' />
          </button>

          <div
            className='flex items-end justify-between gap-2 sm:gap-3'
            style={{
              height: `${CHART_HEIGHT}px`,
              paddingBottom: `${CHART_PADDING_BOTTOM}px`,
            }}
          >
            {visibleData.map((data, index) => (
              <ChartColumn key={`${data.month}-${index}`} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
);

ChartSection.displayName = "ChartSection";

interface MetricCardProps {
  metric: Metric;
}

// Metric card sub-components
const ChangeIndicator = memo(
  ({ positive, change }: { positive: boolean; change: number }) => {
    const bgColor = positive ? "bg-green-500" : "bg-red-500";
    const textColor = positive ? "text-green-600" : "text-red-600";
    const Icon = positive ? ArrowUpIcon : ArrowDownIcon;

    return (
      <div className={`flex items-center gap-0.5 ${textColor}`}>
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${bgColor}`}
        >
          <Icon />
        </div>
        <span className='text-[11px] sm:text-xs font-semibold'>
          {Math.abs(change)}%
        </span>
      </div>
    );
  },
);

ChangeIndicator.displayName = "ChangeIndicator";

const MetricCard = memo(({ metric }: MetricCardProps) => (
  <div className='bg-white rounded-xl border border-gray-200 p-3 lg:p-4 hover:shadow-md transition-shadow'>
    <p
      className={`font-bold mb-1 text-xs md:text-base text-wrap ${metric.color}`}
    >
      ₦{metric.value}
    </p>
    <div className='flex items-center gap-1.5 flex-wrap'>
      <span className='text-[10px] sm:text-xs lg:text-sm text-gray-600 font-normal'>
        {metric.label}
      </span>
      <ChangeIndicator positive={metric.positive} change={metric.change} />
    </div>
  </div>
));

MetricCard.displayName = "MetricCard";

const MetricsGrid = memo(() => (
  <div className='w-full h-full grid grid-cols-2 gap-3 lg:gap-4'>
    {metrics.map((metric) => (
      <MetricCard key={metric.label} metric={metric} />
    ))}
  </div>
));

MetricsGrid.displayName = "MetricsGrid";

// Main component
export function SalesOverview() {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("1 Year");
  const [currentPage, setCurrentPage] = useState(0);

  const handleFilterChange = useCallback((filter: TimeFilter) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  }, []);

  // Calculate visible data based on current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, chartData.length);
  const visibleData = chartData.slice(startIndex, endIndex);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    const maxPage = Math.ceil(chartData.length / ITEMS_PER_PAGE) - 1;
    setCurrentPage((prev) => Math.min(maxPage, prev + 1));
  }, []);

  // Check if navigation is possible
  const canGoPrevious = currentPage > 0;
  const maxPage = Math.ceil(chartData.length / ITEMS_PER_PAGE) - 1;
  const canGoNext = currentPage < maxPage;

  return (
    <div className='bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm h-full flex flex-col overflow-hidden'>
      <SalesHeader />
      <TimeFilterButtons
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <hr className='text-gray-200 mb-3' />
      <div className='flex flex-col lg:flex-row gap-4 xl:gap-6 flex-1 overflow-hidden'>
        <div className='flex-1 lg:w-1/2'>
          <ChartSection
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            visibleData={visibleData}
          />
        </div>
        <div className='flex-1 lg:w-1/2'>
          <MetricsGrid />
        </div>
      </div>
    </div>
  );
}
