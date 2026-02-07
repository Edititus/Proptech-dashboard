import type { ClassValue } from 'clsx';
import clsx from 'clsx';

/**
 * Utility function to merge class names
 * @param inputs - Class names to merge
 * @returns Merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
