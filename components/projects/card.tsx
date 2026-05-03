"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

export function Card({
  children,
  className,
  href,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  title?: string;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "bg-background border-border hover:bg-neutral-400/10 sm:border-x md:odd:border-r md:odd:border-l-0 md:even:border-r-0 md:even:border-l",
        className,
      )}
    >
      <Link
        href={href || "#"}
        target="_blank"
        onClick={() =>
          posthog.capture("project_link_clicked", {
            project_title: title,
            url: href,
          })
        }
      >
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
  return <div className={cn("mb-2 p-2", className)}>{children}</div>;
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
        "border-border bg-background pointer-events-none relative h-50 overflow-hidden rounded-xl border select-none",
        className,
      )}
    >
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/v1777546726/site-hero-bg_ca43fy.avif"
        alt=""
        fill
        sizes="297px"
        className="pointer-events-none object-cover select-none"
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
        className="pointer-events-none relative hidden h-full w-full scale-125 overflow-hidden rounded-md border-4 border-black/20 shadow-2xl select-none md:block"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="297px"
          className="rounded object-cover object-top-left select-none"
          draggable={false}
          loading="eager"
        />
      </motion.div>

      <div className="pointer-events-none relative h-full w-full translate-x-15 translate-y-10 scale-125 overflow-hidden rounded-md border-4 border-black/20 shadow-2xl select-none">
        <Image
          src={src}
          alt=""
          fill
          sizes="297px"
          className="rounded object-cover object-top-left select-none"
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
    <p className={cn("text-foreground/80 text-[13px]", className)}>
      {children}
    </p>
  );
}
