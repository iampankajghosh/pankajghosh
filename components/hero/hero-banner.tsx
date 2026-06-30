import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-full min-h-28 overflow-hidden rounded-lg border border-white transition-[height] duration-300 ease-out max-sm:mx-2 dark:border-black",
        "mask-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.04)_10%,rgba(0,0,0,0.18)_22%,rgba(0,0,0,0.45)_38%,black_58%,black_100%)]",
        "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.04)_10%,rgba(0,0,0,0.18)_22%,rgba(0,0,0,0.45)_38%,black_58%,black_100%)]",
        className,
      )}
    >
      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/banners/hero-banner-4-byNX26JWSDY1Hr9f7Fds7xhyWl6NYT.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        fetchPriority="high"
        draggable={false}
        sizes="(max-width: 640px) calc(100vw - 16px), (max-width: 768px) 409px, 672px"
        className="object-cover select-none"
      />

      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/banners/hero-banner-4-light-x1SglrI6s3az9ayND0xgPMkADmT88B.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        fetchPriority="high"
        draggable={false}
        sizes="(max-width: 640px) calc(100vw - 16px), (max-width: 768px) 409px, 672px"
        className="object-cover transition-opacity duration-1000 ease-out select-none dark:opacity-0"
      />
    </div>
  );
}
