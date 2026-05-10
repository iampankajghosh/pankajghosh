"use client";

import { cn } from "@/lib/utils";
import posthog from "posthog-js";
import { Tick01Icon } from "../icons";

export function FontButton({ fontId, label, twClass, isSelected }: any) {
  return (
    <button
      name="font"
      value={fontId}
      className={cn(
        "text-foreground/60 hover:text-foreground flex w-full items-center justify-between rounded-md px-2 py-1 text-start",
        twClass,
        isSelected && "text-foreground bg-neutral-100 dark:bg-neutral-800",
      )}
      disabled={isSelected}
      onClick={() => posthog.capture("font_changed", { font: fontId })}
    >
      <span>{label}</span>
      {isSelected && <Tick01Icon className="size-5 scale-100 opacity-100" />}
    </button>
  );
}
