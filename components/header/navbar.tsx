"use client";

import { Menu09Icon } from "@/app/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../button";

const navItems = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Components",
    href: "/components",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export function Navbar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <nav
      className={cn(
        "flex items-center w-full px-2 py-4 gap-6 justify-between",
        className,
      )}
    >
      {children}
    </nav>
  );
}

export function MobileNavTrigger() {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu09Icon />
    </Button>
  );
}

export function NavMenu({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "absolute w-full left-0 top-full bg-background h-[calc(100vh-60px)] md:static md:h-auto md:w-auto md:bg-transparent md:flex md:items-center md:justify-end md:gap-4 border-t md:border-none border-border dark:border-neutral-800 space-y-2 md:space-y-0 py-6 md:py-0",
        className,
      )}
    >
      {navItems.map((item, index) => (
        <li key={index} className="space-y-2">
          <Link href={item.href} className="text-sm block px-4 py-2 md:p-0">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
