import { cn } from "@/lib/utils";

type PatternProps = {
  className?: string;
  degree?: number;
};

export function Pattern({ className, degree = 315 }: PatternProps) {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--pattern-angle": `${degree}deg`,
        } as React.CSSProperties
      }
      className={cn(
        "border-border pointer-events-none absolute inset-y-0 z-10 h-screen w-full border-x",
        "bg-[repeating-linear-gradient(var(--pattern-angle),var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_1px,transparent_50%)]",
        "bg-size-[10px_10px] bg-fixed",
        className,
      )}
    />
  );
}
