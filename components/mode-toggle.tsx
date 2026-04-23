"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button
        className="cursor-pointer bg-neutral-100 px-2 py-0.5 text-sm capitalize dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="cursor-pointer bg-neutral-100 px-2 py-0.5 text-sm capitalize dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="cursor-pointer bg-neutral-100 px-2 py-0.5 text-sm capitalize dark:bg-neutral-800 dark:text-neutral-50"
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );
}
