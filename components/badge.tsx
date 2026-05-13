import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-ibm-plex-mono inline-flex min-h-6 items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-200/50 px-2 text-xs text-neutral-800 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
