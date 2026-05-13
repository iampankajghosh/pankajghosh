"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import posthog from "posthog-js";
import { useCallback, useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "./icons";

const THEME_OPTIONS = [
  { id: "system", label: "System", icon: ComputerIcon },
  { id: "light", label: "Light", icon: Sun01Icon },
  { id: "dark", label: "Dark", icon: MoonIcon },
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return { theme, updateTheme, mounted };
}

export function ModeToggle() {
  const { theme, updateTheme, mounted } = useThemeSync();

  return (
    <div className="flex items-center gap-1 rounded-md bg-neutral-100 p-px dark:bg-neutral-800">
      {THEME_OPTIONS.map((t) => {
        const isActive = mounted && theme === t.id;

        return (
          <button
            key={t.id}
            className={cn(
              "group relative flex h-8 flex-1 cursor-pointer items-center justify-center gap-1.5 px-2 text-neutral-600 transition-colors duration-200 ease-out outline-none dark:text-neutral-400",
              isActive && "text-neutral-800 dark:text-neutral-200",
            )}
            onClick={() => updateTheme(t.id)}
          >
            {isActive && (
              <motion.div
                layoutId="active-theme-pill"
                className="absolute inset-0 rounded-md bg-white shadow-sm inset-shadow-sm inset-shadow-white dark:bg-neutral-900 dark:inset-shadow-white/15"
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              <t.icon className="size-4.5" />
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
    <div className="inline-flex h-fit w-fit gap-0.5 rounded-full bg-gray-100 p-0.5 dark:bg-neutral-900">
      {THEME_OPTIONS.map((mode) => (
        <button
          key={mode.id}
          onClick={() => updateTheme(mode.id)}
          className="relative inline-flex size-7 cursor-pointer items-center justify-center rounded-full outline-none"
        >
          {mounted && theme === mode.id && (
            <motion.div
              layoutId="mini-active-pill"
              className="absolute inset-0 rounded-full bg-white ring-1 ring-gray-950/10 dark:bg-neutral-900 dark:ring-white/10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            />
          )}

          <mode.icon className="relative z-10 size-4.5" />
        </button>
      ))}
    </div>
  );
}
