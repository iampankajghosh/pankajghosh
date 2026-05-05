"use client";

import { CopyrightIcon } from "@/components/icons";
import { motion } from "motion/react";
import Link from "next/link";

const LOGO_WIDTH = 140;
const TEXT_SHIFT = -60;
const LINK = `/`;

export function Logo() {
  return (
    <BrandLink href={LINK}>
      <LogoIcon>
        <CopyrightIcon className="size-5" />
      </LogoIcon>

      <BrandText>code by pankaj ghosh</BrandText>
    </BrandLink>
  );
}

function BrandLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <motion.div initial="rest" animate="rest" whileHover="hover">
      <Link
        href={href}
        className="font-inter flex items-center gap-1.5 overflow-hidden leading-6 tracking-tight transition-transform duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600/20 active:translate-y-0.5"
        style={{ width: LOGO_WIDTH }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function LogoIcon({ children }: { children?: React.ReactNode }) {
  return (
    <motion.span
      variants={{
        rest: { rotate: 0 },
        hover: { rotate: 360 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center justify-center"
    >
      {children}
    </motion.span>
  );
}

function BrandText({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex -translate-y-px items-center overflow-hidden">
      <motion.span
        className="whitespace-nowrap"
        variants={{
          rest: { x: 0 },
          hover: { x: TEXT_SHIFT },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </div>
  );
}
