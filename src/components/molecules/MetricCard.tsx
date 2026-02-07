import type { ReactNode } from "react";
import { ChevronRightIcon } from "../atoms/icons/ChevronRightIcon";

export interface MetricCardProps {
  title: string;
  metrics: Array<{
    label: string;
    value: string | number;
  }>;
  icon?: ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
}

export function MetricCard({
  title,
  metrics,
  icon,
  actionLabel,
  onActionClick,
}: MetricCardProps) {
  return (
    <div className='bg-white border border-gray-200 rounded-2xl h-full flex flex-col'>
      <div className='flex items-center justify-between w-full bg-gray-100 p-4 rounded-t-2xl'>
        <div className='flex items-center gap-2'>
          {icon && <div className='text-brand-teal'>{icon}</div>}
          <h3 className='text-base font-semibold text-gray-900'>{title}</h3>
        </div>
        {actionLabel && (
          <button
            onClick={onActionClick}
            className='text-sm text-blue-600 hover:text-blue-700 font-medium flex'
          >
            {actionLabel} <ChevronRightIcon className='text-amber-200' />
          </button>
        )}
      </div>

      <div className='grid grid-cols-3 gap-6 p-4 flex-1 items-center'>
        {metrics.map((metric, index) => (
          <div key={index}>
            <p className='text-sm text-gray-700 mb-1 font-medium'>
              {metric.label}
            </p>
            <p className='text-2xl font-bold text-gray-900'>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
