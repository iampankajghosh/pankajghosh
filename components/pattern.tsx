import { cn } from "@/lib/utils";

export function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 border-x border-border w-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed z-50 pointer-events-none",
        className,
      )}
    />
  );
}
