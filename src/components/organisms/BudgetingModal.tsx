import {
  BudgetHeaderIcon,
  SlidersIcon,
  TrendUpIcon,
  BarChartIcon,
} from "../atoms/icons";
import { Button } from "../atoms";

export function BudgetingModal() {
  return (
    <div className='flex flex-col max-h-[90vh]'>
      {/* Header with Browser Window Illustration */}
      <div className='shrink-0 overflow-hidden rounded-t-xl sm:rounded-t-2xl'>
        <BudgetHeaderIcon className='w-full h-auto' />
      </div>

      {/* Content - Scrollable */}
      <div className='p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto'>
        {/* Feature 1 */}
        <div className='flex gap-3 sm:gap-4'>
          <div className='shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center'>
            <SlidersIcon className='w-5 h-5 sm:w-6 sm:h-6' />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-base sm:text-lg font-semibold text-gray-900 mb-1'>
              Set up annual budgets by account category
            </h3>
            <p className='text-xs sm:text-sm text-gray-600'>
              Allocate funds across income and expense lines with full
              visibility.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className='flex gap-3 sm:gap-4'>
          <div className='shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center'>
            <TrendUpIcon className='w-5 h-5 sm:w-6 sm:h-6' />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-base sm:text-lg font-semibold text-gray-900 mb-1'>
              Track actuals vs budget in real time
            </h3>
            <p className='text-xs sm:text-sm text-gray-600'>
              See how your community is performing against plan, month by month.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className='flex gap-3 sm:gap-4'>
          <div className='shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center'>
            <BarChartIcon className='w-5 h-5 sm:w-6 sm:h-6' />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-base sm:text-lg font-semibold text-gray-900 mb-1'>
              Adjust figures and forecast with ease
            </h3>
            <p className='text-xs sm:text-sm text-gray-600'>
              Edit amounts, apply percentage changes, or roll forward last
              year's data—all in one place.
            </p>
          </div>
        </div>

        <Button variant='primary' size='lg' fullWidth className='mt-6 sm:mt-8'>
          Create Budget
        </Button>
      </div>
    </div>
  );
}
