import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-ibm-plex-mono px-4 text-sm leading-5 font-semibold tracking-widest uppercase md:px-2 md:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}
