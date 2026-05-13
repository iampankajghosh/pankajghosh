import { cn } from "@/lib/utils";

export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "px-2 text-base/6 text-neutral-600 text-pretty max-sm:px-4 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}