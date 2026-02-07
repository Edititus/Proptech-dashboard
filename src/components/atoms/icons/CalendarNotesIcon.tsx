interface CalendarNotesIconProps {
  className?: string;
}

export function CalendarNotesIcon({ className = 'w-9 h-9' }: CalendarNotesIconProps) {
  return (
    <svg 
      width="36" 
      height="36" 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path d="M15 33H21C28.5 33 31.5 30 31.5 22.5V13.5C31.5 6 28.5 3 21 3H15C7.5 3 4.5 6 4.5 13.5V22.5C4.5 30 7.5 33 15 33Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.75 11.3691V12.8691C24.75 14.0991 23.745 15.1191 22.5 15.1191H13.5C12.27 15.1191 11.25 14.1141 11.25 12.8691V11.3691C11.25 10.1391 12.255 9.11914 13.5 9.11914H22.5C23.745 9.11914 24.75 10.1241 24.75 11.3691Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2042 21H12.2215" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.9932 21H18.0106" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.7803 21H23.7977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2042 26.25H12.2215" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.9932 26.25H18.0106" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.7803 26.25H23.7977" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
