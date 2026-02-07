interface CalculatorIconProps {
  className?: string;
}

export function CalculatorIcon({ className = 'w-20 h-20' }: CalculatorIconProps) {
  return (
    <svg
      width='80'
      height='80'
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M33.3333 73.3327H46.6667C63.3333 73.3327 70 66.666 70 49.9994V29.9994C70 13.3327 63.3333 6.66602 46.6667 6.66602H33.3333C16.6667 6.66602 10 13.3327 10 29.9994V49.9994C10 66.666 16.6667 73.3327 33.3333 73.3327Z'
        stroke='white'
        strokeWidth='3.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M55 25.2676V28.6009C55 31.3342 52.7667 33.6009 50 33.6009H30C27.2667 33.6009 25 31.3676 25 28.6009V25.2676C25 22.5342 27.2333 20.2676 30 20.2676H50C52.7667 20.2676 55 22.5009 55 25.2676Z'
        stroke='white'
        strokeWidth='3.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M27.1204 46.6667H27.1589'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M39.9847 46.6667H40.0232'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M52.846 46.6667H52.8845'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M27.1204 58.3327H27.1589'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M39.9847 58.3327H40.0232'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M52.846 58.3327H52.8845'
        stroke='white'
        strokeWidth='4.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
