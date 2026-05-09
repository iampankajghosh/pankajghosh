import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-2 size-28 overflow-hidden rounded-full border border-white ring-1 ring-black/10 transition-[height,width] duration-150 ease-out max-sm:mx-4 sm:size-35 dark:border-black dark:ring-white/10",
        className,
      )}
    >
      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/profile/pfp-WjmPdfSLS47tbM10AJqaMH58wM3q1q.png"
        alt="Pankaj Ghosh"
        className="object-cover select-none"
        height={140}
        width={140}
        draggable={false}
        priority
      />
    </div>
  );
}
