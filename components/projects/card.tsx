import { cn } from "@/lib/utils";
import Image from "next/image";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group touch-manipulation transition-colors duration-150 ease-out hover:bg-neutral-200/50 active:bg-neutral-200/50 dark:hover:bg-neutral-800/50 dark:active:bg-neutral-800/50",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-2 max-sm:px-4", className)}>{children}</div>;
}

export function CardBanner({
  children,
  src,
}: {
  children: React.ReactNode;
  src: string;
}) {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-lg border border-white bg-neutral-100 ring-1 ring-black/6 perspective-distant dark:border-black dark:bg-neutral-900 dark:ring-white/10">
      <Image
        src={src}
        alt=""
        className="object-cover select-none"
        fill
        sizes="300px"
        draggable={false}
      />
      <div>{children}</div>
    </div>
  );
}

export function PreviewImage({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 origin-[center_center] translate-x-1/10 translate-y-1/8 scale-110 rotate-x-10 rotate-y-20 -rotate-z-8 overflow-hidden rounded-md bg-neutral-200 ring-5 ring-black/10 duration-350 ease-out will-change-transform group-hover:rotate-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-active:scale-100 group-active:rotate-0 group-active:rotate-y-0 group-active:rotate-z-0 dark:bg-neutral-800">
      <Image
        src={src}
        alt=""
        className="rounded-md object-cover object-top-left select-none"
        width={672}
        height={504}
        draggable={false}
      />
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="px-2 text-sm/6 font-medium text-neutral-800 max-sm:px-4 dark:text-neutral-200">
      {children}
    </h3>
  );
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2 text-[13px]/6 text-neutral-600 max-sm:px-4 dark:text-neutral-400">
      {children}
    </p>
  );
}
