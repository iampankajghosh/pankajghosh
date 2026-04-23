"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button
        className="capitalize text-sm px-2 py-0.5 bg-neutral-100 cursor-pointer dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="capitalize text-sm px-2 py-0.5 bg-neutral-100 cursor-pointer dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="capitalize text-sm px-2 py-0.5 bg-neutral-100 cursor-pointer dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );
}
