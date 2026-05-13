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
      rel="noopener noreferrer"
      className="font-ibm-plex-mono text-[15px] font-medium text-sky-500 transition-colors duration-200 hover:text-sky-600 focus:outline-none focus-visible:underline dark:text-sky-400 dark:hover:text-sky-300"
      onClick={() =>
        posthog.capture("social_link_clicked", {
          href,
        })
      }
    >
      {children}
    </Link>
  );
}