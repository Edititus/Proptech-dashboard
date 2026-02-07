import { NavLink } from "react-router-dom";
import { cn } from "../../utils";
import {
  DashboardIcon,
  ListingsIcon,
  UsersIcon,
  RequestIcon,
  ApplicationsIcon,
  TasksIcon,
} from "../atoms/icons";

export function NavigationTabs() {
  const tabs = [
    {
      name: "Dashboard",
      path: "/",
      Icon: DashboardIcon,
    },
    {
      name: "Listings",
      path: "/listings",
      Icon: ListingsIcon,
    },
    {
      name: "Users",
      path: "/users",
      Icon: UsersIcon,
    },
    {
      name: "Request",
      path: "/request",
      Icon: RequestIcon,
    },
    {
      name: "Applications",
      path: "/applications",
      Icon: ApplicationsIcon,
    },
    {
      name: "Tasks",
      path: "/tasks",
      Icon: TasksIcon,
    },
  ];

  return (
    <nav className='bg-white border-b border-gray-200 flex py-3 px-4 sm:px-6 md:px-12 lg:px-16 overflow-x-auto scrollbar-hide'>
      <div className='flex justify-between w-full items-center gap-1 sm:gap-2'>
        {tabs.map((tab) => {
          const isDisabled = tab.path !== "/";

          if (isDisabled) {
            return (
              <div
                key={tab.path}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-t-lg text-xs sm:text-sm font-medium whitespace-nowrap",
                  "text-gray-400 cursor-not-allowed opacity-60",
                )}
              >
                <tab.Icon isActive={false} className='w-4 h-4 sm:w-5 sm:h-5' />
                <span className='hidden xs:inline sm:inline'>{tab.name}</span>
              </div>
            );
          }

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap relative",
                  isActive
                    ? "text-[#176D58] rounded-lg border-[#176D58]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      background: "rgba(23, 109, 88, 0.15)",
                      padding: "8px 24px",
                    }
                  : undefined
              }
            >
              {({ isActive }) => (
                <>
                  <tab.Icon
                    isActive={isActive}
                    className='w-4 h-4 sm:w-5 sm:h-5'
                  />
                  <span className='hidden xs:inline sm:inline font-extrabold'>
                    {tab.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
