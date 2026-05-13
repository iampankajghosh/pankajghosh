import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-ibm-plex-mono text-sm font-semibold tracking-[0.2em] uppercase",
        "max-lg:px-2 max-sm:px-4",
        "lg:absolute lg:top-15 lg:-left-10 lg:origin-bottom-right lg:-translate-x-full lg:-translate-y-full lg:-rotate-90",
        "lg:text-right lg:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}