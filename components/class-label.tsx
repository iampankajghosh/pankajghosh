import { cn } from "@/lib/utils";

export function ClassLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-ibm-plex-mono px-2 text-xs/6 whitespace-pre text-black/20 select-none max-sm:px-4 dark:text-white/25",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AdaptiveValue({
  sm,
  lg,
  dark,
  light,
}: {
  sm?: string;
  lg?: string;
  dark?: string;
  light?: string;
}) {
  return (
    <>
      {light && (
        <span aria-hidden="true" className="dark:hidden">
          {light}
        </span>
      )}

      {dark && (
        <span aria-hidden="true" className="hidden dark:inline">
          {dark}
        </span>
      )}

      {sm && (
        <span aria-hidden="true" className="md:hidden">
          {sm}
        </span>
      )}

      {lg && (
        <span aria-hidden="true" className="hidden md:inline">
          {lg}
        </span>
      )}
    </>
  );
}
