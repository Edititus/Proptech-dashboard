import { Outlet } from "react-router-dom";
import { TopHeader } from "../organisms/TopHeader";
import { NavigationTabs } from "../organisms/NavigationTabs";

export function DashboardLayout() {
  return (
    <div className='min-h-screen bg-gray-50 '>
      <TopHeader />

      <NavigationTabs />

      <main className='px-4 sm:px-6 md:px-12 lg:px-16 py-6'>
        <Outlet />
      </main>
    </div>
  );
}
