import { cn } from "@/lib/utils";
import Image from "next/image";
import { OfficeIcon } from "../icons";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("border-b border-border last:border-b-0 py-2", className)}
    >
      {children}
    </div>
  );
}

export function GroupCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export function CompanyLogo({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div className="relative size-8 bg-black/4 dark:bg-white/10 flex items-center justify-center">
      {src && (
        <div
          className={cn(
            "relative select-none pointer-events-none size-full rounded-md overflow-hidden border border-border shadow-sm",
            className,
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="32px"
            draggable={false}
            className="object-cover pointer-events-none"
          />
        </div>
      )}

      {!src && (
        <OfficeIcon className="size-5 text-neutral-600 dark:text-neutral-200" />
      )}

      <DashedLine dir="vertical" className="absolute -left-px h-20" />
      <DashedLine dir="vertical" className="absolute -right-px h-20" />
      <DashedLine className="absolute w-20 -top-px" />
      <DashedLine className="absolute w-20 -bottom-px" />
    </div>
  );
}

export function DashedLine({
  className,
  dir = "horizontal",
}: {
  className?: string;
  dir?: "horizontal" | "vertical";
}) {
  const gradient =
    dir === "horizontal"
      ? "dark:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.3)_0_3px,transparent_3px_6px)] bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.2)_0_3px,transparent_3px_6px)] mask-x-from-70% mask-x-to-90%"
      : "dark:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.3)_0_3px,transparent_3px_6px)] bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0_3px,transparent_3px_6px)] mask-y-from-70% mask-y-to-90%";

  return (
    <span
      className={cn(
        "block",
        gradient,
        dir === "horizontal" ? "h-px w-10" : "h-10 w-px",
        className,
      )}
    />
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="px-5 py-2 flex items-center gap-4">{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-base font-medium tracking-tighter leading-6",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function StatusDot({
  className,
  date,
}: {
  className?: string;
  date: string;
}) {
  const isPresent = date.toLowerCase().includes("present");

  if (!isPresent) return null;

  return (
    <div className="relative flex items-center justify-center">
      <span
        className={cn(
          "size-4 rounded-md bg-blue-500/20 animate-ping block [animation-duration:1.5s]",
          className,
        )}
      />
      <span className="size-2 bg-blue-500 rounded-[3px] block absolute inset-shadow-sm inset-shadow-white/30" />
    </div>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="px-2 py-2">{children}</div>;
}
