import { cn } from "@/lib/utils";
import Link from "next/link";

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
    >
      {children}
    </Link>
  );
}
