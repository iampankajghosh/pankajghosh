"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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

export function AccordionTrigger({ className }: { className?: string }) {
  const { open, setOpen } = useAccordion();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setOpen(!open)}
      className={cn(
        "md:scale-0 md:opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out relative",
        className,
      )}
    >
      <UnfoldMoreIcon
        className={cn(
          "size-5 shrink-0 absolute transition-transform duration-150 ease-out fill-neutral-200 dark:fill-neutral-800",
          open ? "scale-0" : "scale-100",
        )}
      />
      <UnfoldLessIcon
        className={cn(
          "size-5 shrink-0 absolute transition-transform duration-150 ease-out fill-neutral-200 dark:fill-neutral-800",
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
