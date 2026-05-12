import { cn } from "@/lib/utils";

export function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-border pointer-events-none absolute top-0 bottom-0 z-100 h-screen w-10 border-x bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed transition-transform duration-150 ease-out",
        className,
      )}
    />
  );
}
