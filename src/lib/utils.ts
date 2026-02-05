import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getItem(key: string, defaultValue: string) {
  if (typeof window !== "undefined") {
    // check if it is a client component
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
}

export function setItem(key: string, value: string) {
  if (typeof window !== "undefined") {
    // check if it is a client component
    localStorage.setItem(key, value);
  }
}
