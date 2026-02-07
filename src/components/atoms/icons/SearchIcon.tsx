interface SearchIconProps {
  className?: string;
}

export function SearchIcon({ className = 'w-8 h-8' }: SearchIconProps) {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M18.667 6.66602H26.667" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.667 10.666H22.667" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.0003 15.3327C28.0003 22.3327 22.3337 27.9993 15.3337 27.9993C8.33366 27.9993 2.66699 22.3327 2.66699 15.3327C2.66699 8.33268 8.33366 2.66602 15.3337 2.66602" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.3337 29.3327L26.667 26.666" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
