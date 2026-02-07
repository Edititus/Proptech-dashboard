import { useState, useCallback, useEffect } from "react";
import {
  ExpertListingFullLogo,
  CalendarNotesIcon,
  CalendarIcon,
  SearchIcon,
  WalletIcon,
  ShoppingBagIcon,
  HamburgerIcon,
} from "../atoms/icons";
import { Drawer } from "../molecules/Drawer";
import { Calendar } from "../molecules/Calendar";
import { Modal } from "../molecules/Modal";
import { BudgetingModal } from "./BudgetingModal";

// Action button configuration
const ACTION_BUTTONS = [
  {
    id: "calendar-notes",
    Icon: CalendarNotesIcon,
    label: "Budgeting",
    size: "w-7 h-7",
    enabled: true,
  },
  {
    id: "calendar",
    Icon: CalendarIcon,
    label: "Calendar",
    size: "w-7 h-7",
    enabled: true,
  },
  {
    id: "search",
    Icon: SearchIcon,
    label: "Search",
    size: "w-6 h-6",
    enabled: false,
  },
  {
    id: "wallet",
    Icon: WalletIcon,
    label: "Wallet",
    size: "w-6 h-6",
    enabled: false,
  },
  {
    id: "shopping",
    Icon: ShoppingBagIcon,
    label: "Shopping",
    size: "w-6 h-6",
    enabled: false,
  },
] as const;

// Icon button sizes for responsive design
const ICON_BUTTON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-lg transition-colors";
const RESPONSIVE_ICON_SIZES =
  "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9";

interface IconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  iconClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function IconButton({
  icon: Icon,
  label,
  iconClassName = RESPONSIVE_ICON_SIZES,
  onClick,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      className={`${ICON_BUTTON_CLASSES} ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/10 cursor-pointer"
      }`}
      aria-label={label}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <Icon className={iconClassName} />
    </button>
  );
}

interface MobileMenuItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  iconSize?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function MobileMenuItem({
  icon: Icon,
  label,
  iconSize = "w-7 h-7",
  onClick,
  disabled = false,
}: MobileMenuItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-white ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/10 cursor-pointer"
      }`}
      aria-label={label}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <Icon className={iconSize} />
      <span className='text-sm font-medium'>{label}</span>
    </button>
  );
}

export function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetingOpen, setIsBudgetingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const openCalendar = useCallback(() => {
    setIsCalendarOpen(true);
    closeMobileMenu();
  }, [closeMobileMenu]);

  const closeCalendar = useCallback(() => {
    setIsCalendarOpen(false);
  }, []);

  const openBudgeting = useCallback(() => {
    setIsBudgetingOpen(true);
    closeMobileMenu();
  }, [closeMobileMenu]);

  const closeBudgeting = useCallback(() => {
    setIsBudgetingOpen(false);
  }, []);

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const handleIconClick = useCallback(
    (id: string) => {
      if (id === "calendar") {
        openCalendar();
      } else if (id === "calendar-notes") {
        openBudgeting();
      }
    },
    [openCalendar, openBudgeting],
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;

    // Lock scroll
    body.style.cssText = `
      position: fixed;
      top: -${scrollY}px;
      width: 100%;
      overflow: hidden;
    `;

    // Cleanup: unlock scroll and restore position
    return () => {
      body.style.cssText = '';
      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className='bg-[#105B48] flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-5'>
        {/* Logo */}
        <ExpertListingFullLogo className='h-5 sm:h-6 md:h-7 w-auto' />

        {/* Desktop Navigation */}
        <nav
          className='hidden md:flex items-center gap-1 sm:gap-2 md:gap-3'
          aria-label='Primary navigation'
        >
          {ACTION_BUTTONS.map(({ id, Icon, label, enabled }) => (
            <IconButton
              key={id}
              icon={Icon}
              label={label}
              onClick={() => handleIconClick(id)}
              disabled={!enabled}
            />
          ))}

          {/* Profile Avatar */}
          <button
            className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white text-[#105B48] flex items-center justify-center font-bold text-xs sm:text-sm md:text-base ml-1 sm:ml-2 shrink-0 hover:opacity-90 transition-opacity'
            aria-label='User profile'
          >
            D
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className='md:hidden w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors'
          onClick={toggleMobileMenu}
          aria-label='Toggle menu'
          aria-expanded={isMobileMenuOpen}
        >
          <HamburgerIcon isOpen={isMobileMenuOpen} className='w-6 h-6' />
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-[#105B48] border-t border-white/10 animate-slideDown h-screen'>
          <nav className='px-4 py-4 space-y-3' aria-label='Mobile navigation'>
            {ACTION_BUTTONS.map(({ id, Icon, label, size, enabled }) => (
              <MobileMenuItem
                key={id}
                icon={Icon}
                label={label}
                iconSize={size}
                onClick={() => handleIconClick(id)}
                disabled={!enabled}
              />
            ))}

            {/* Profile Section */}
            <div className='pt-3 border-t border-white/10'>
              <button
                className='w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors'
                onClick={closeMobileMenu}
                aria-label='View profile'
              >
                <div className='w-10 h-10 rounded-full bg-white text-[#105B48] flex items-center justify-center font-bold text-base shrink-0'>
                  D
                </div>
                <div className='text-white text-left'>
                  <p className='text-sm font-medium'>Profile</p>
                  <p className='text-xs opacity-75'>View your account</p>
                </div>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Calendar Drawer */}
      <Drawer isOpen={isCalendarOpen} onClose={closeCalendar} title='Calendar'>
        <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
      </Drawer>

      {/* Budgeting Modal */}
      <Modal isOpen={isBudgetingOpen} onClose={closeBudgeting}>
        <BudgetingModal />
      </Modal>
    </>
  );
}
