import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUzbekPhone(value: string): string {
  // Cleans and formats Uzbek phone numbers: +998 (90) 123-45-67
  const cleaned = value.replace(/\D/g, "");
  let numbers = cleaned;
  if (numbers.startsWith("998")) {
    numbers = numbers.slice(3);
  }
  numbers = numbers.slice(0, 9);

  if (numbers.length === 0) return "+998";
  if (numbers.length <= 2) return `+998 (${numbers}`;
  if (numbers.length <= 5) return `+998 (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 7) return `+998 (${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5)}`;
  return `+998 (${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5, 7)}-${numbers.slice(7, 9)}`;
}

export function getFormattedCurrentDate(): { date: string; time: string; timestamp: string } {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}`,
    timestamp: now.toISOString(),
  };
}
