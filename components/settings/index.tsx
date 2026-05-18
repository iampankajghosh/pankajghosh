"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import posthog from "posthog-js";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "../button";
import { ArrowTurnBackwardIcon } from "../icons";

type SettingsProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogId: string;
  headingId: string;
};

const SettingsContext = createContext<SettingsProps | null>(null);

export function useSettingsMenu() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettingsMenu must be used within SettingsProvider");
  }

  return context;
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const dialogId = useId();
  const headingId = useId();

  return (
    <SettingsContext.Provider
      value={{
        open,
        setOpen,
        dialogId,
        headingId,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function Settings({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <div className="relative">{children}</div>
    </SettingsProvider>
  );
}

export function SettingsTrigger({ children }: { children: React.ReactNode }) {
  const { open, setOpen, dialogId } = useSettingsMenu();

  return (
    <Button
      variant="ghost"
      size="icon"
      sound
      type="button"
      aria-label="Open settings"
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-controls={dialogId}
      onClick={() => {
        setOpen(true);

        posthog.capture("settings_opened", {
          trigger: "button",
        });
      }}
      disabled={open}
    >
      {children}
    </Button>
  );
}

export function SettingsContent({ children }: { children: React.ReactNode }) {
  const { open, setOpen, dialogId, headingId } = useSettingsMenu();

  const ref = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      if (!open) return;

      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [open, setOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setOpen]);

  useEffect(() => {
    let pressedG = false;

    function handleShortcut(e: KeyboardEvent) {
      const key = e.key.toLowerCase();

      if (key === "g") {
        pressedG = true;

        setTimeout(() => {
          pressedG = false;
        }, 1000);

        return;
      }

      if (pressedG && key === "s") {
        e.preventDefault();

        setOpen(true);

        posthog.capture("settings_opened", {
          trigger: "keyboard_shortcut",
        });

        pressedG = false;
      }
    }

    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, [setOpen]);

  return (
    <motion.div
      id={dialogId}
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      aria-hidden={!open}
      inert={!open ? true : undefined}
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        scale: shouldReduceMotion ? 1 : open ? 1 : 0.3,
        filter: shouldReduceMotion ? "none" : open ? "none" : "blur(10px)",
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.3,
              type: "spring",
              bounce: 0.2,
            }
      }
      style={{
        originX: 1,
        originY: 0,
      }}
      className={cn(
        "absolute -top-1.25 right-0 flex h-86.75 w-70 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl will-change-transform [corner-shape:squircle] dark:border-neutral-700 dark:bg-neutral-800",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {children}
    </motion.div>
  );
}

export function SettingsHeader({ children }: { children: React.ReactNode }) {
  const { setOpen } = useSettingsMenu();

  return (
    <div className="border-border relative flex h-12 items-center justify-between px-2 before:absolute before:right-0 before:bottom-0 before:z-10 before:size-2 before:translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-white before:ring-1 before:ring-neutral-200 before:content-[''] after:absolute after:bottom-0 after:left-0 after:z-10 after:size-2 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-white after:ring-1 after:ring-neutral-200 after:content-[''] dark:before:bg-neutral-900 dark:before:ring-white/20 dark:after:bg-neutral-900 dark:after:ring-white/20">
      {children}

      <Button
        variant="outline"
        size="icon"
        sound
        type="button"
        aria-label="Close settings"
        onClick={() => setOpen(false)}
      >
        <ArrowTurnBackwardIcon aria-hidden="true" className="size-5" />
      </Button>
    </div>
  );
}

export function SettingsHeading({ children }: { children: React.ReactNode }) {
  const { headingId } = useSettingsMenu();

  return (
    <h3 id={headingId} className="font-medium tracking-tight">
      {children}
    </h3>
  );
}

export function SettingsMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-1 bg-white py-1 shadow-sm after:absolute after:-top-px after:h-px after:w-full after:bg-[repeating-linear-gradient(to_left,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] after:content-[''] dark:bg-neutral-900 dark:after:bg-[repeating-linear-gradient(to_left,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)]">
      {children}
    </div>
  );
}

export function SettingsSubMenu({ children }: { children: React.ReactNode }) {
  return <div className="p-2">{children}</div>;
}

export function SettingSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-foreground/60 font-ibm-plex-mono mb-2 text-[10px] tracking-widest uppercase">
      {children}
    </h4>
  );
}
