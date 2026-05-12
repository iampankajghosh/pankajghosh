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
        "flex w-full items-center justify-between rounded-md px-2 py-1 text-start",
        twClass,
        !isSelected && "hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40",
        isSelected && "bg-neutral-100 dark:bg-neutral-800",
      )}
      disabled={isSelected}
      onClick={() => posthog.capture("font_changed", { font: fontId })}
    >
      <span>{label}</span>
      <Tick01Icon
        className={cn(
          "size-5 scale-0 opacity-0 transition-[scale,opacity] duration-300 ease-out",
          isSelected && "scale-100 opacity-100",
        )}
      />
    </button>
  );
}
