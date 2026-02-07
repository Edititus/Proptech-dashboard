interface HamburgerIconProps {
  isOpen?: boolean;
  className?: string;
}

export function HamburgerIcon({
  isOpen = false,
  className = "w-6 h-6",
}: HamburgerIconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      {isOpen ? (
        // X icon when menu is open
        <>
          <path
            d='M18 6L6 18'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 6L18 18'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      ) : (
        // Hamburger icon when menu is closed
        <>
          <path
            d='M3 12H21'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 6H21'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 18H21'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      )}
    </svg>
  );
}
