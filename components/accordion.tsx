"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import posthog from "posthog-js";
import {
  createContext,
  useContext,
  useId,
  useState,
} from "react";

import { Button } from "./button";
import { UnfoldLessIcon, UnfoldMoreIcon } from "./icons";

type AccordionProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  contentId: string;
};

const AccordionContext = createContext<AccordionProps | null>(null);

export function AccordionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <AccordionContext.Provider
      value={{ open, setOpen, contentId }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "useAccordion must be used within AccordionProvider",
    );
  }

  return context;
}

export function AccordionTrigger({
  label,
  className,
}: {
  className?: string;
  label?: string;
}) {
  const { open, setOpen, contentId } = useAccordion();

  return (
    <Button
      size="icon"
      variant="ghost"
      sound
      type="button"
      aria-expanded={open}
      aria-controls={contentId}
      aria-label={open ? "Collapse section" : "Expand section"}
      onClick={() => {
        const next = !open;

        setOpen(next);

        if (next) {
          posthog.capture("experience_expanded", {
            company: label,
          });
        }
      }}
      className={cn(
        "relative motion-reduce:transition-none",
        className,
      )}
    >
      <UnfoldMoreIcon
        aria-hidden="true"
        className={cn(
          "absolute size-5 shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none",
          open ? "scale-0" : "scale-100",
        )}
      />

      <UnfoldLessIcon
        aria-hidden="true"
        className={cn(
          "absolute size-5 shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none",
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
  const { open, contentId } = useAccordion();

  return (
    <motion.div
      id={contentId}
      role="region"
      aria-hidden={!open}
      initial={false}
      animate={{ height: open ? "auto" : 46 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "overflow-hidden motion-reduce:transition-none",
        open ? "mask-none" : "mask-b-to-100%",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}