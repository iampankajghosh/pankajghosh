"use client";

import { cn } from "@/lib/utils";
import posthog from "posthog-js";
import { Tick01Icon } from "../icons";

export function FontButton({
  fontId,
  label,
  twClass,
  isSelected,
}: {
  fontId: string;
  label: string;
  twClass: string;
  isSelected: boolean;
}) {
  return (
    <label
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1 text-start motion-reduce:transition-none",
        twClass,
        !isSelected && "hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40",
        isSelected && "bg-neutral-100 dark:bg-neutral-800",
      )}
    >
      <input
        type="radio"
        name="font"
        value={fontId}
        checked={isSelected}
        onChange={(e) => {
          e.currentTarget.form?.requestSubmit();

          posthog.capture("font_changed", {
            font: fontId,
          });
        }}
        className="sr-only"
        aria-label={`Use ${label} font`}
      />

      <span>{label}</span>

      <Tick01Icon
        aria-hidden="true"
        className={cn(
          "size-5 scale-0 opacity-0 transition-[scale,opacity] duration-300 ease-out motion-reduce:transition-none",
          isSelected && "scale-100 opacity-100",
        )}
      />
    </label>
  );
}
