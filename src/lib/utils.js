import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind classes safely — used by shadcn/ui components
 * Usage: cn("px-4 py-2", isActive && "bg-primary-500", className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
