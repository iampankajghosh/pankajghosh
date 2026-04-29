import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl h-full", className)}>{children}</div>
  );
}

export function ContainerFluid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-border h-full min-h-5", className)}>
      {children}
    </div>
  );
}
