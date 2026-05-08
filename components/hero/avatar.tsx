import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-border mx-2 size-28 overflow-hidden rounded-full border ring-1 ring-black/10 max-sm:mx-4 md:size-35 dark:ring-white/10",
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
