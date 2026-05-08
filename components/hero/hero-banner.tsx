import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-28 overflow-hidden mask-r-from-black mask-r-to-white/90 mask-r-to-60% mask-luminance max-sm:mx-2 md:h-35",
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
