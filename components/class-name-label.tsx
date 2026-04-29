import { cn } from "@/lib/utils";

export function ClassNameLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-ibm-plex-mono text-xs text-foreground/25 px-4 md:px-2 select-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
