import { useState, useMemo } from "react";
import { ChevronLeftIcon } from "../atoms/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../atoms/icons/ChevronRightIcon";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function Calendar({ selectedDate, onDateSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  const { year, month } = useMemo(
    () => ({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    }),
    [currentDate],
  );

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const prevMonthDays = Array.from({ length: startingDayOfWeek }, (_, i) => ({
      day: prevMonthLastDay - startingDayOfWeek + i + 1,
      isCurrentMonth: false,
      date: new Date(
        year,
        month - 1,
        prevMonthLastDay - startingDayOfWeek + i + 1,
      ),
    }));

    // Current month days
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: true,
      date: new Date(year, month, i + 1),
    }));

    // Next month days to fill the grid
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const remainingDays = 42 - totalDays; // 6 rows * 7 days
    const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: false,
      date: new Date(year, month + 1, i + 1),
    }));

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [year, month]);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    onDateSelect?.(date);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getMonthLabel = (date: Date, day: number) => {
    if (day === 1) {
      return `${MONTH_ABBR[date.getMonth()]} ${day}`;
    }
    return day.toString();
  };

  return (
    <div className='w-full h-full flex flex-col bg-[#1a1a1a] text-white'>
      {/* Header with Month/Year and Navigation */}
      <div className='flex items-center justify-between px-6 border-b border-white/10'>
        <button
          onClick={handlePreviousMonth}
          className='p-2 hover:bg-white/10 rounded-lg transition-colors'
          aria-label='Previous month'
        >
          <ChevronLeftIcon className='w-5 h-5 text-white' />
        </button>

        <h2 className='text-lg font-semibold'>
          {MONTHS[month]} {year}
        </h2>

        <button
          onClick={handleNextMonth}
          className='p-2 hover:bg-white/10 rounded-lg transition-colors'
          aria-label='Next month'
        >
          <ChevronRightIcon className='w-5 h-5 text-white' />
        </button>
      </div>

      {/* Days of Week */}
      <div className='grid grid-cols-7 border-b border-white/10'>
        {DAYS.map((day) => (
          <div
            key={day}
            className='text-center text-xs font-medium text-gray-400 py-3 px-2'
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className='grid grid-cols-7 flex-1 overflow-auto'>
        {calendarDays.map((dayInfo, index) => {
          const isCurrentDay = isToday(dayInfo.date);
          const isSelectedDay = isSelected(dayInfo.date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(dayInfo.date)}
              className={`
                relative flex items-center justify-center text-sm
                transition-all duration-200 border-r border-b border-white/5
                min-h-15 sm:min-h-17.5 md:min-h-20
                ${
                  !dayInfo.isCurrentMonth
                    ? "text-gray-600 hover:text-gray-400 hover:bg-white/5"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              <span
                className={`
                  flex items-center justify-center rounded-full
                  w-8 h-4 transition-all
                  ${isCurrentDay && dayInfo.isCurrentMonth ? "bg-blue-600 font-semibold" : ""}
                  ${isSelectedDay && !isCurrentDay ? "bg-white/20" : ""}
                `}
              >
                {getMonthLabel(dayInfo.date, dayInfo.day)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
