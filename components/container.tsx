import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto h-full max-w-2xl", className)}>{children}</div>
  );
}

export function ContainerFluid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-border h-full min-h-4 border-b", className)}>
      {children}
    </div>
  );
}
