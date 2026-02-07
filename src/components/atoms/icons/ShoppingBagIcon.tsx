interface ShoppingBagIconProps {
  className?: string;
}

export function ShoppingBagIcon({ className = 'w-7.75 h-7.75' }: ShoppingBagIconProps) {
  return (
    <svg 
      width="31" 
      height="31" 
      viewBox="0 0 31 31" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M3.87012 14.4258V20.1986C3.87012 25.9715 6.1844 28.2858 11.9573 28.2858H18.8873C24.6601 28.2858 26.9744 25.9715 26.9744 20.1986V14.4258" stroke="#F4F4F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4286 15.4294C17.7815 15.4294 19.5172 13.5137 19.2858 11.1608L18.4372 2.57227H12.4329L11.5715 11.1608C11.3401 13.5137 13.0758 15.4294 15.4286 15.4294Z" stroke="#F4F4F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5415 15.4294C26.1386 15.4294 28.0415 13.3208 27.7843 10.7366L27.4243 7.20084C26.9615 3.85798 25.6757 2.57227 22.3072 2.57227H18.3857L19.2857 11.5851C19.5043 13.7066 21.42 15.4294 23.5415 15.4294Z" stroke="#F4F4F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.25149 15.4294C9.37292 15.4294 11.2886 13.7066 11.4943 11.5851L11.7772 8.74369L12.3943 2.57227H8.47292C5.10434 2.57227 3.81863 3.85798 3.35577 7.20084L3.00863 10.7366C2.75149 13.3208 4.65434 15.4294 7.25149 15.4294Z" stroke="#F4F4F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4282 21.8574C13.281 21.8574 12.2139 22.9246 12.2139 25.0717V28.286H18.6424V25.0717C18.6424 22.9246 17.5753 21.8574 15.4282 21.8574Z" stroke="#F4F4F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
