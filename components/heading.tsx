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
        "md:px-2 px-4 text-3xl leading-8 md:text-4xl md:leading-9 font-medium tracking-tighter",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
