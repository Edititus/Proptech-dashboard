import { useEffect } from "react";
import type { ReactNode } from "react";
import { ChevronLeftIcon } from "../atoms/icons/ChevronLeftIcon";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Drawer({ isOpen, onClose, title, children }: DrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.cssText = `
      position: fixed;
      top: -${scrollY}px;
      width: 100%;
      overflow: hidden;
    `;

    return () => {
      body.style.cssText = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/60 z-40 animate-fadeIn'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Drawer */}
      <div
        className='fixed top-0 right-0 h-full w-full sm:w-96 bg-[#1a1a1a] z-50 shadow-2xl animate-slideInRight flex flex-col'
        role='dialog'
        aria-modal='true'
        aria-labelledby='drawer-title'
      >
        {/* Header */}
        <div className='bg-[#1a1a1a] border-b border-white/10 px-6 py-4 flex items-center justify-between shrink-0'>
          <button
            onClick={onClose}
            className='p-2 hover:bg-white/10 rounded-lg transition-colors -ml-2'
            aria-label='Close drawer'
          >
            <ChevronLeftIcon className='w-6 h-6 text-white' />
          </button>

          <h2
            id='drawer-title'
            className='text-lg font-semibold text-white flex-1 text-center -ml-10'
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className='p-2 hover:bg-white/10 rounded-lg transition-colors'
            aria-label='Close'
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-hidden'>{children}</div>
      </div>
    </>
  );
}
