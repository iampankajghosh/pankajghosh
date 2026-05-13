import { cn } from "@/lib/utils";
import Image from "next/image";

import { OfficeIcon } from "../icons";

export function ExperienceGroup({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="list"
      className={cn("grid grid-cols-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ExperienceItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      role="listitem"
      className={cn(
        "border-border border-b py-2 last:border-b-0",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function ExperienceHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-1">
      {children}
    </div>
  );
}

export function ExperienceLogo({
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div className="relative bg-neutral-400/15 p-px before:absolute before:-bottom-px before:left-1/2 before:h-px before:w-16 before:-translate-x-1/2 before:bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.2)_0_2px,transparent_2px_4px)] before:mask-x-from-60% before:content-[''] after:absolute after:-top-px after:left-1/2 after:h-px after:w-16 after:-translate-x-1/2 after:bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.2)_0_2px,transparent_2px_4px)] after:mask-x-from-60% after:content-[''] dark:before:bg-[repeating-linear-gradient(to_left,rgba(255,255,255,0.3)_0_2px,transparent_2px_4px)] dark:after:bg-[repeating-linear-gradient(to_left,rgba(255,255,255,0.3)_0_2px,transparent_2px_4px)]">
      <div className="flex size-8 items-center justify-center overflow-hidden rounded-md bg-neutral-100 shadow-sm ring-1 inset-shadow-sm ring-black/10 inset-shadow-white before:absolute before:-left-px before:h-16 before:w-px before:bg-[repeating-linear-gradient(to_top,rgba(0,0,0,0.2)_0_2px,transparent_2px_4px)] before:mask-y-from-60% before:content-[''] after:absolute after:-right-px after:h-16 after:w-px after:bg-[repeating-linear-gradient(to_top,rgba(0,0,0,0.2)_0_2px,transparent_2px_4px)] after:mask-y-from-60% after:content-[''] dark:bg-neutral-800 dark:ring-white/20 dark:inset-shadow-white/5 dark:before:bg-[repeating-linear-gradient(to_top,rgba(255,255,255,0.3)_0_2px,transparent_2px_4px)] dark:after:bg-[repeating-linear-gradient(to_top,rgba(255,255,255,0.3)_0_2px,transparent_2px_4px)]">
        {src ? (
          <Image
            src={src}
            alt=""
            aria-hidden="true"
            sizes="32px"
            className="h-full w-full object-cover select-none"
            height={200}
            width={200}
            draggable={false}
          />
        ) : (
          <div
            aria-hidden="true"
            className="select-none"
          >
            <OfficeIcon className="size-5" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-base/5 font-medium text-neutral-800 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function ExperienceLocation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs/5 text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function ActiveStatusPulse({
  className,
  date,
}: {
  className?: string;
  date: string;
}) {
  const isPresent =
    date.toLowerCase().includes("present");

  if (!isPresent) return null;

  return (
    <div
      role="status"
      aria-label="Currently active position"
      className="relative flex items-center justify-center"
    >
      <span
        aria-hidden="true"
        className={cn(
          "block size-4 animate-ping rounded-md bg-blue-500/20 motion-reduce:animate-none [animation-duration:1.5s]",
          className,
        )}
      />

      <span
        aria-hidden="true"
        className="absolute block size-2 rounded-[3px] bg-blue-500 inset-shadow-sm inset-shadow-white/30"
      />
    </div>
  );
}

export function ExperienceBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-2 py-2">{children}</div>;
}

export function ExperienceDesignation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm/6 font-[450] text-neutral-800 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function ExperienceMetadata({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs/6 text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function ExperienceBulletList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="grid grid-cols-1 gap-3">
      {children}
    </ul>
  );
}

export function ExperienceBullet({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "relative ml-4 pr-2 pl-4 text-[13px]/6 text-neutral-600 before:absolute before:-left-1 before:size-1.5 before:translate-y-3 before:bg-neutral-400/60 before:content-[''] sm:before:translate-y-2.5 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </li>
  );
}

export function VerticalSeparator({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-4 w-px bg-black/10 dark:bg-white/10",
        className,
      )}
    />
  );
}