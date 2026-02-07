import { useEffect } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export function Modal({ isOpen, onClose, children, size = "md" }: ModalProps) {
  // Lock body scroll when modal is open
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

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/60 z-50 animate-fadeIn flex items-center justify-center p-2 sm:p-4'
        onClick={onClose}
        aria-hidden='true'
      >
        {/* Modal Content */}
        <div
          className={`relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-scaleIn`}
          onClick={(e) => e.stopPropagation()}
          role='dialog'
          aria-modal='true'
        >
          {children}
        </div>
      </div>
    </>
  );
}
