import { cn } from "@/lib/utils";

export function Heading({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "px-2 text-3xl font-medium tracking-tighter text-balance text-neutral-800 max-sm:px-4 dark:text-neutral-200",
        as === "h1" && "text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
