"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import posthog from "posthog-js";
import { useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "../icons";

const themes = [
  {
    icon: <ComputerIcon className="text-foreground size-4.5" />,
    value: "system",
    name: "System",
  },
  {
    icon: <Sun01Icon className="text-foreground size-5" />,
    value: "light",
    name: "Light",
  },
  {
    icon: <MoonIcon className="text-foreground" />,
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
    <div className="flex items-center gap-2 rounded-md bg-neutral-100 p-1 inset-shadow-sm dark:bg-neutral-800">
      {themes.map((t) => (
        <button
          key={t.value}
          className={cn(
            "group hover:text-foreground dark:hover:text-foreground flex h-7 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md px-2 text-neutral-600 transition-colors duration-150 ease-out dark:text-neutral-400",
            theme === t.value &&
              "text-foreground bg-white shadow-sm dark:bg-neutral-900 dark:shadow-none",
          )}
          onClick={() => {
            setTheme(t.value);
            posthog.capture("theme_changed", {
              theme: t.value,
              previous_theme: theme,
            });
          }}
        >
          {t.icon}
          <span className="text-xs leading-none">{t.name}</span>
        </button>
      ))}
    </div>
  );
}
