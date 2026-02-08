import { MetricCard } from "../components/molecules/MetricCard";
import { FeaturedPropertyCard } from "../components/molecules/FeaturedPropertyCard";
import { SalesOverview } from "../components/organisms/SalesOverview";
import { UsersOverviewIcon } from "../components/atoms/icons/UsersOverviewIcon";
import { ListingsOverviewIcon } from "../components/atoms/icons/ListingsOverviewIcon";
import Urban from "../components/atoms/icons/Urban";
import Urban3 from "../components/atoms/icons/Urban3";
import Urban2 from "../components/atoms/icons/Urban2";

export function DashboardPage() {
  return (
    <div className='space-y-6'>
      {/* Welcome Message */}
      <div>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome, Ahmed</h1>
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <SalesOverview />
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex-1'>
            <MetricCard
              title='Listings Overview'
              icon={<ListingsOverviewIcon />}
              metrics={[
                { label: "Total", value: "1.8k" },
                { label: "Active", value: "80" },
                { label: "Archived", value: "1k" },
              ]}
              actionLabel='View all'
            />
          </div>

          {/* Users Overview */}
          <div className='flex-1'>
            <MetricCard
              title='Users Overview'
              icon={<UsersOverviewIcon />}
              metrics={[
                { label: "Total", value: "20.7k" },
                { label: "Riders", value: "8.5k" },
                { label: "Subscribers", value: "7.5k" },
              ]}
              actionLabel='View all'
            />
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className='mt-8 pt-8 border-t border-gray-200'>
        <h2 className='text-xl font-semibold text-gray-900 mb-6'>
          Featured Properties
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <FeaturedPropertyCard
            image={<Urban />}
            badge='MOST CLICKED'
            title='Urban Prime Plaza Premiere'
          />
          <FeaturedPropertyCard
            image={<Urban3 />}
            badge='MOST WATCHLISTED'
            title='Urban Prime Plaza Premiere'
          />
          <FeaturedPropertyCard
            image={<Urban2 />}
            badge='HOTTEST LISTING'
            title='Urban Prime Plaza Premiere'
          />
        </div>
      </div>
    </div>
  );
}
