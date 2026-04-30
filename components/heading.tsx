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
        "md:px-2 px-4 text-2xl leading-7 md:text-3xl md:leading-8 font-medium tracking-tighter",
        as === "h1" && "text-3xl leading-8 md:text-4xl md:leading-9",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
