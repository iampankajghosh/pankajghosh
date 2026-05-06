"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import posthog from "posthog-js";
import { useEffect, useState } from "react";
import { ComputerIcon, MoonIcon, Sun01Icon } from "../icons";

const modes = [
  { id: "system", icon: ComputerIcon },
  { id: "light", icon: Sun01Icon },
  { id: "dark", icon: MoonIcon },
];

export function MiniModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-gray-100 p-0.5 dark:bg-neutral-900">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => {
            setTheme(mode.id);
            posthog.capture("theme_changed", {
              theme: mode.id,
              previous_theme: theme,
            });
          }}
          className="relative inline-flex size-7 cursor-pointer items-center justify-center rounded-full outline-none"
        >
          {theme === mode.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-white ring-1 ring-gray-950/10 dark:bg-neutral-900 dark:ring-white/10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            />
          )}

          <mode.icon className="relative z-10" />
        </button>
      ))}
    </div>
  );
}
