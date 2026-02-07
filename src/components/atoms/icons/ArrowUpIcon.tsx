interface ArrowUpIconProps {
  className?: string;
}

export function ArrowUpIcon({ className = "" }: ArrowUpIconProps) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 7.5V2.5M5 2.5L2.5 5M5 2.5L7.5 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
