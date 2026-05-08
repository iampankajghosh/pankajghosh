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
        "font-ibm-plex-mono top-15 -left-10 origin-bottom-right text-left text-sm font-semibold tracking-widest uppercase max-sm:px-4 sm:text-xs md:absolute md:-translate-x-full md:-translate-y-full md:-rotate-90 md:text-right",
        className,
      )}
    >
      {children}
    </p>
  );
}
