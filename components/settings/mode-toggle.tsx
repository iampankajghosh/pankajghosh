"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "../icons";

const themes = [
  {
    icon: (
      <ComputerIcon className="fill-neutral-200 dark:fill-neutral-800 size-4.5 text-foreground" />
    ),
    value: "system",
    name: "System",
  },
  {
    icon: (
      <Sun01Icon className="fill-neutral-200 dark:fill-neutral-800 size-5 text-foreground" />
    ),
    value: "light",
    name: "Light",
  },
  {
    icon: (
      <MoonIcon className="fill-neutral-200 dark:fill-neutral-800 text-foreground" />
    ),
    value: "dark",
    name: "Dark",
  },
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-neutral-100 rounded-md flex items-center p-1 inset-shadow-sm gap-2 dark:bg-neutral-800">
      {themes.map((t) => (
        <button
          key={t.value}
          className={cn(
            "group flex items-center gap-1.5 px-2 h-7 rounded-md cursor-pointer transition-colors duration-150 ease-out hover:text-foreground text-neutral-600 flex-1 justify-center dark:text-neutral-400 dark:hover:text-foreground",
            theme === t.value &&
              "bg-white shadow-sm text-foreground dark:bg-neutral-900 dark:shadow-none",
          )}
          onClick={() => setTheme(t.value)}
        >
          {t.icon}
          <span className="leading-none text-xs">{t.name}</span>
        </button>
      ))}
    </div>
  );
}
