import { cn } from "@/lib/utils";
import { Container } from "../container";

export function GridContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Container>{children}</Container>

      <HorizontalLine className="-translate-y-105 md:-translate-y-23" />
      <HorizontalLine className="-translate-y-103 md:-translate-y-21" />
      <HorizontalLine className="-translate-y-87 md:-translate-y-5" />
      <HorizontalLine className="-translate-y-77 md:translate-y-5" />
      <HorizontalLine className="-translate-y-23 md:translate-y-59" />
      <HorizontalLine className="-translate-y-21 md:translate-y-61" />

      <HorizontalLine className="-translate-y-5 md:hidden" />
      <HorizontalLine className="translate-y-5 md:hidden" />
      <HorizontalLine className="translate-y-59 md:hidden" />
      <HorizontalLine className="translate-y-61 md:hidden" />
      <HorizontalLine className="translate-y-77 md:hidden" />
      <HorizontalLine className="translate-y-87 md:hidden" />
      <HorizontalLine className="translate-y-141 md:hidden" />
      <HorizontalLine className="translate-y-143 md:hidden" />
    </div>
  );
}

export function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 px-2 md:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HorizontalLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full bg-border absolute left-0 top-1/2 pointer-events-none",
        className,
      )}
    />
  );
}

export function VerticalLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 w-px h-full bg-border pointer-events-none",
        className,
      )}
    />
  );
}
