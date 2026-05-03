"use client";

import { cn } from "@/lib/utils";
import posthog from "posthog-js";
import { Tick01Icon } from "../icons";

export function FontButton({
  font,
  fontClass,
  isSelected,
}: {
  font: string;
  fontClass: string;
  isSelected: boolean;
}) {
  return (
    <button
      name="font"
      value={font}
      className={cn(
        "text-foreground/60 hover:text-foreground flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1 text-start capitalize transition-colors duration-150 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-800",
        fontClass,
        isSelected && "text-foreground bg-neutral-100 dark:bg-neutral-800",
      )}
      disabled={isSelected}
      onClick={() =>
        posthog.capture("font_changed", {
          font,
        })
      }
    >
      <span>{font.split("-").join(" ")}</span>

      <Tick01Icon
        className={cn(
          "size-5 translate-x-1 scale-0 opacity-0 transition-transform duration-300 ease-in-out",
          isSelected && "scale-100 opacity-100",
        )}
      />
    </button>
  );
}
