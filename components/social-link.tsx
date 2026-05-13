"use client";

import Link from "next/link";
import posthog from "posthog-js";

export function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="font-ibm-plex-mono text-[15px] font-medium text-sky-500 dark:text-sky-400"
      onClick={() => posthog.capture("social_link_clicked", { href })}
    >
      {children}
    </Link>
  );
}
