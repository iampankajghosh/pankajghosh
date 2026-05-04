"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import posthog from "posthog-js";
import { createContext, useContext, useState } from "react";
import { Button } from "./button";
import { UnfoldLessIcon, UnfoldMoreIcon } from "./icons";

type AccordionProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AccordionContext = createContext<AccordionProps | null>(null);

export function AccordionProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within a Accordion provider");
  }

  return context;
}

export function AccordionTrigger({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  const { open, setOpen } = useAccordion();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        const next = !open;
        setOpen(next);
        if (next) {
          posthog.capture("experience_expanded", { company: label });
        }
      }}
      className={cn(
        "relative transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 md:scale-0 md:opacity-0",
        className,
      )}
    >
      <UnfoldMoreIcon
        className={cn(
          "absolute size-5 shrink-0 fill-neutral-200 transition-transform duration-150 ease-out dark:fill-neutral-800",
          open ? "scale-0" : "scale-100",
        )}
      />
      <UnfoldLessIcon
        className={cn(
          "absolute size-5 shrink-0 fill-neutral-200 transition-transform duration-150 ease-out dark:fill-neutral-800",
          open ? "scale-100" : "scale-0",
        )}
      />
    </Button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useAccordion();

  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 72 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      className={cn(
        "overflow-hidden",
        open ? "mask-none" : "mask-b-from-0% mask-b-to-100%",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
