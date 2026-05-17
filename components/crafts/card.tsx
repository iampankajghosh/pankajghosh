import { cn } from "@/lib/utils";
import { Pattern } from "../pattern";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group touch-manipulation transition-colors duration-150 ease-out hover:bg-neutral-200/40 active:bg-neutral-200/50 dark:hover:bg-neutral-800/50 dark:active:bg-neutral-800/50",
        className,
      )}
    >
      {children}
    </article>
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

export function CardSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border border-white ring-1 ring-black/6 [corner-shape:squircle] dark:border-black dark:ring-white/10">
      <Pattern className="-z-10 opacity-30" degree={45} />
      <div className="before:absolute before:left-0 before:-z-10 before:h-px before:w-full before:-translate-y-px before:bg-[repeating-linear-gradient(to_left,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] before:content-[''] after:absolute after:left-0 after:-z-10 after:h-px after:w-full after:bg-[repeating-linear-gradient(to_left,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] after:content-[''] dark:before:bg-[repeating-linear-gradient(to_left,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)] dark:after:bg-[repeating-linear-gradient(to_left,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)]">
        <div className="before:absolute before:top-0 before:-z-10 before:h-full before:w-px before:-translate-x-px before:bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] before:content-[''] after:absolute after:top-0 after:-z-10 after:h-full after:w-px after:bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0_4px,transparent_4px_8px)] after:content-[''] dark:before:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)] dark:after:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.1)_0_4px,transparent_4px_8px)]">
          {children}
        </div>
      </div>
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
