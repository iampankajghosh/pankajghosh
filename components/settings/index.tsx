"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { ArrowTurnBackwardIcon } from "../icons";

type SettingsProp = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SettingsContext = createContext<SettingsProp | null>(null);

export function useSettingsMenu() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettingsMenu must be used within a Settings provider");
  }

  return context;
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SettingsContext.Provider value={{ open, setOpen }}>
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
  const { setOpen } = useSettingsMenu();

  return (
    <motion.div initial="rest" whileHover="hover">
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <motion.span
          variants={{
            rest: { rotate: 0 },
            hover: { rotate: 180 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  );
}

export function SettingsContent({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useSettingsMenu();
  const ref = useRef<HTMLDivElement>(null);

  // close menu on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!open) return;

      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  // close menu on escape
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

  // open menu on ctrl + ,
  useEffect(() => {
    function handleShortcut(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === ",") {
        e.preventDefault();
        setOpen(true);
      }
    }

    document.addEventListener("keydown", handleShortcut);
    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, [setOpen]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        scale: open ? 1 : 0.3,
        filter: open ? "none" : "blur(10px)",
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      style={{ originX: 1, originY: 0 }}
      className={cn(
        "absolute -top-0.5 -right-px bg-neutral-100 w-70 h-86.75 overflow-hidden flex flex-col rounded-lg shadow-md border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700",
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
    <div className="h-11 flex items-center justify-between px-2">
      <div className="flex items-center gap-1.5">{children}</div>

      <Button variant="outline" size="icon" onClick={() => setOpen(false)}>
        <ArrowTurnBackwardIcon className="size-5" />
      </Button>
    </div>
  );
}

export function SettingsHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-medium tracking-tight">{children}</h3>;
}

export function SettingsMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white flex-1 rounded-lg shadow-sm border-t border-border border-dashed py-1 dark:bg-neutral-900">
      {children}
    </div>
  );
}

export function SettingsSubMenu({ children }: { children: React.ReactNode }) {
  return <div className="p-2">{children}</div>;
}

export function SettingSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[10px] mb-2 text-foreground/60 uppercase tracking-widest font-ibm-plex-mono">
      {children}
    </h4>
  );
}
