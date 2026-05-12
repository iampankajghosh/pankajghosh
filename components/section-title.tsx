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
        "font-ibm-plex-mono top-15 -left-10 origin-bottom-right text-left text-sm font-semibold tracking-widest uppercase max-lg:px-2 max-sm:px-4 lg:absolute lg:-translate-x-full lg:-translate-y-full lg:-rotate-90 lg:text-right lg:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}
