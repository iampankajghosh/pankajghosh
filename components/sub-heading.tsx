import { cn } from "@/lib/utils";

export function SubHeading({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h3" | "h4" | "h5" | "h6";
}) {
  const Comp = as;
  return (
    <Comp
      className={cn("px-4 md:px-2 text-base text-foreground/80", className)}
    >
      {children}
    </Comp>
  );
}
