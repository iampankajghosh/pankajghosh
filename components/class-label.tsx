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
      {light && <span className="dark:hidden">{light}</span>}
      {dark && <span className="hidden dark:inline">{dark}</span>}
      {sm && <span className="md:hidden">{sm}</span>}
      {lg && <span className="hidden md:inline">{lg}</span>}
    </>
  );
}
