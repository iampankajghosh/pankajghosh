"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "grid grid-cols-1 transition-colors duration-300 ease-in-out md:grid-cols-10",
        className,
      )}
    >
      {children}
    </motion.div>
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
    <div
      className={cn(
        "border-border h-50 w-full px-4 py-2 md:col-span-3 md:h-auto md:border-r md:px-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardBanner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border",
        className,
      )}
    >
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/v1778067213/card-banner_p5hfsz.avif"
        alt=""
        fill
        sizes="179px"
        className="pointer-events-none object-cover select-none"
        draggable={false}
      />

      <motion.div
        variants={{
          rest: {
            y: 20,
          },
          hover: {
            y: 0,
          },
        }}
        className="absolute h-[calc(100%-16px)] w-[calc(100%-24px)] overflow-hidden rounded-md border-3 border-black/20 md:w-[calc(100%-16px)]"
      >
        {children}
      </motion.div>
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

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("mb-1 font-medium tracking-tighter", className)}>
      {children}
    </h3>
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
    <p className={cn("text-foreground/80 text-sm", className)}>{children}</p>
  );
}
