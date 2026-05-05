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
      className={cn("border-border border-b py-2 last:border-b-0", className)}
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
    <div className="relative flex size-8 items-center justify-center bg-black/4 dark:bg-white/10">
      {src && (
        <div
          className={cn(
            "border-border pointer-events-none relative size-full overflow-hidden rounded-md border shadow-sm select-none",
            className,
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="32px"
            draggable={false}
            className="pointer-events-none object-cover"
          />
        </div>
      )}

      {!src && (
        <div className="border-border pointer-events-none flex size-full items-center justify-center overflow-hidden rounded-md border bg-white shadow-sm select-none">
          <OfficeIcon className="size-5 text-neutral-800" />
        </div>
      )}

      <DashedLine dir="vertical" className="absolute -left-px h-20" />
      <DashedLine dir="vertical" className="absolute -right-px h-20" />
      <DashedLine className="absolute -top-px w-20" />
      <DashedLine className="absolute -bottom-px w-20" />
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
  return <div className="flex items-center gap-4 px-5 py-2">{children}</div>;
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
        "text-base leading-6 font-medium tracking-tighter",
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
          "block size-4 animate-ping rounded-md bg-blue-500/20 [animation-duration:1.5s]",
          className,
        )}
      />
      <span className="absolute block size-2 rounded-[3px] bg-blue-500 inset-shadow-sm inset-shadow-white/30" />
    </div>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="px-2 py-2">{children}</div>;
}
