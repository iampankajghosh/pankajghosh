"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import posthog from "posthog-js";
import { useCallback, useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "./icons";

const THEME_OPTIONS = [
  {
    id: "system",
    label: "System",
    icon: ComputerIcon,
  },

  {
    id: "light",
    label: "Light",
    icon: Sun01Icon,
  },

  {
    id: "dark",
    label: "Dark",
    icon: MoonIcon,
  },
];

function useThemeSync() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const updateTheme = useCallback(
    (newTheme: string) => {
      setTheme(newTheme);

      posthog.capture("theme_changed", {
        theme: newTheme,
        previous_theme: theme,
      });
    },
    [setTheme, theme],
  );

  const handleChange = useCallback(
    (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setTheme(e.matches ? "dark" : "light");
      }
    },
    [theme, setTheme],
  );

  const handleShortcut = useCallback(
    (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === "l"
      ) {
        e.preventDefault();

        updateTheme(theme === "dark" ? "light" : "dark");
      }
    },
    [theme, updateTheme],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleChange);

    window.addEventListener("keydown", handleShortcut);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);

      window.removeEventListener("keydown", handleShortcut);
    };
  }, [handleChange, handleShortcut]);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return {
    theme,
    updateTheme,
    mounted,
  };
}

export function ModeToggle() {
  const { theme, updateTheme, mounted } = useThemeSync();

  return (
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className="flex items-center gap-1 rounded-xl bg-neutral-100 p-px [corner-shape:squircle] dark:bg-neutral-800"
    >
      {THEME_OPTIONS.map((t) => {
        const isActive = mounted && theme === t.id;

        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${t.label} theme`}
            className={cn(
              "group relative flex h-8 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 text-neutral-600 transition-colors duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/20 dark:text-neutral-400",
              isActive && "text-neutral-800 dark:text-neutral-200",
            )}
            onClick={() => updateTheme(t.id)}
          >
            {isActive && (
              <motion.div
                layoutId="active-theme-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-white shadow-sm inset-shadow-sm inset-shadow-white [corner-shape:squircle] dark:bg-neutral-900 dark:inset-shadow-white/5"
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 0.4,
                }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              <t.icon aria-hidden="true" className="size-4.5" />

              <span className="text-xs leading-none font-medium">
                {t.label}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function MiniModeToggle() {
  const { theme, updateTheme, mounted } = useThemeSync();

  return (
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className="inline-flex h-fit w-fit gap-0.5 rounded-full bg-gray-100 p-0.5 dark:bg-neutral-900"
    >
      {THEME_OPTIONS.map((mode) => {
        const isActive = mounted && theme === mode.id;

        return (
          <button
            key={mode.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${mode.label} theme`}
            onClick={() => updateTheme(mode.id)}
            className="relative inline-flex size-7 cursor-pointer items-center justify-center rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/20"
          >
            {isActive && (
              <motion.div
                layoutId="mini-active-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-white ring-1 ring-gray-950/10 dark:bg-neutral-900 dark:ring-white/10"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.3,
                }}
              />
            )}

            <mode.icon aria-hidden="true" className="relative z-10 size-4.5" />
          </button>
        );
      })}
    </div>
  );
}
