"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group grid touch-manipulation grid-cols-1 transition-colors duration-150 ease-out hover:bg-neutral-200/40 active:bg-neutral-200/50 motion-reduce:transition-none sm:grid-cols-10 dark:hover:bg-neutral-800/50 dark:active:bg-neutral-800/50",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function CardSkeleton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("col-span-3 p-2 max-sm:px-4", className)}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-2", className)}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "col-span-7 mb-4 px-6 py-2 md:mb-0 md:px-4 md:py-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm/6 font-medium text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
}

export function CardMetadata({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs/6 text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function VerticalSeparator({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-4 w-px bg-black/10 dark:bg-white/10", className)}
    />
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "pr-2 text-[13px]/6 text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function CardBanner({
  children,
  src,
}: {
  children: React.ReactNode;
  src: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white bg-neutral-100 ring-1 ring-black/6 perspective-distant sm:h-32 dark:border-black dark:bg-neutral-900 dark:ring-white/10">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        sizes="297px"
        className="h-full w-full select-none"
        width={3072}
        height={2048}
        draggable={false}
      />

      <div>{children}</div>
    </div>
  );
}

export function PreviewImage({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 origin-[center_center] scale-70 rotate-x-38 -rotate-y-6 rotate-z-25 touch-manipulation overflow-hidden rounded-md bg-neutral-200 ring-4 ring-black/20 duration-350 ease-out will-change-transform group-hover:scale-90 group-hover:rotate-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-active:scale-80 group-active:rotate-0 group-active:rotate-y-0 group-active:rotate-z-0 motion-reduce:transform-none motion-reduce:transition-none dark:bg-neutral-800">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        sizes="297px"
        className="h-full w-full rounded-md select-none"
        width={1840}
        height={1120}
        draggable={false}
      />
    </div>
  );
}

export function OrganizationBadge({
  org,
}: {
  org: {
    title: string;
    logo: {
      default: string;
      light: string;
    };
  };
}) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="size-3">
        <Image
          src={org.logo.light}
          width={12}
          height={12}
          sizes="12px"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="h-full w-full object-contain select-none dark:hidden"
        />

        <Image
          src={org.logo.default}
          width={12}
          height={12}
          sizes="12px"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="hidden h-full w-full object-contain select-none dark:block"
        />
      </div>

      <CardMetadata className="text-[13px]">{org.title}</CardMetadata>
    </div>
  );
}
