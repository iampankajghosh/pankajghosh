"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "bg-background hover:bg-neutral-400/10 sm:border-x md:odd:border-r md:odd:border-l-0 md:even:border-l md:even:border-r-0 border-border",
        className,
      )}
    >
      <Link href={href || "#"} target="_blank">
        {children}
      </Link>
    </motion.div>
  );
}

export function CardSkeleton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-2 mb-2", className)}>{children}</div>;
}

export function CardBanner({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-border bg-background overflow-hidden rounded-xl h-50 relative select-none pointer-events-none",
        className,
      )}
    >
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/v1777546726/site-hero-bg_ca43fy.avif"
        alt=""
        fill
        sizes="297px"
        className="object-cover select-none pointer-events-none"
        draggable={false}
        fetchPriority="high"
      />

      <motion.div
        variants={{
          rest: {
            rotateX: 20,
            rotateY: 20,
            rotateZ: -8,
            x: 40,
            y: 30,
          },
          hover: {
            rotateX: 0,
            rotateZ: 0,
            rotateY: 0,
            x: 40,
            y: 30,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="hidden md:block relative w-full h-full rounded-md overflow-hidden shadow-2xl border-4 border-black/20 scale-125 select-none pointer-events-none"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="297px"
          className="object-cover object-top-left select-none rounded"
          draggable={false}
          loading="eager"
        />
      </motion.div>

      <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl border-4 border-black/20 translate-x-15 translate-y-10 select-none pointer-events-none scale-125">
        <Image
          src={src}
          alt=""
          fill
          sizes="297px"
          className="object-cover object-top-left select-none rounded"
          draggable={false}
        />
      </div>
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
  return <div className={cn("p-2", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("font-medium tracking-tighter mb-1", className)}>
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
    <p className={cn("text-[13px] text-foreground/80", className)}>
      {children}
    </p>
  );
}
