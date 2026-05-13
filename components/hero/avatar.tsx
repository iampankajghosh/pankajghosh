import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-2 size-28 overflow-hidden rounded-full border border-white ring-1 ring-black/10 transition-[height,width] duration-300 ease-out max-sm:mx-4 sm:size-35 dark:border-black dark:ring-white/10",
        className,
      )}
    >
      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/profile/pfp-WjmPdfSLS47tbM10AJqaMH58wM3q1q.png"
        alt="Pankaj Ghosh"
        height={140}
        width={140}
        draggable={false}
        priority
        className="absolute inset-0 object-cover select-none"
      />

      <Image
        src="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/profile/pfp-light-gBu0Bw3pZmMNBDlLCVRwsmQYVSBY4b.png"
        alt="Pankaj Ghosh"
        height={140}
        width={140}
        draggable={false}
        priority
        className="absolute inset-0 object-cover transition-opacity duration-500 ease-out select-none dark:opacity-0"
      />
    </div>
  );
}
