import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full min-h-28 overflow-hidden rounded-md border border-white mask-r-from-black mask-r-to-white/80 mask-r-to-60% mask-luminance transition-[height] duration-150 ease-out max-sm:mx-2 dark:border-black",
        className,
      )}
    >
      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/banners/hero-banner-ytv1F0bgGOoMd4lHomW6MjHdP2HvRE.png"
        alt=""
        className="object-cover select-none"
        fill
        sizes="(max-width: 768px) 409px, 672px"
        draggable={false}
        priority
      />
    </div>
  );
}
