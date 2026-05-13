import { cn } from "@/lib/utils";

export function Pattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "border-border pointer-events-none absolute inset-y-0 z-10 h-screen w-10 border-x",
        "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_1px,transparent_50%)]",
        "bg-size-[10px_10px] bg-fixed",
        className,
      )}
    />
  );
}