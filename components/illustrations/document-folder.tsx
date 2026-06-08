import { cn } from "@/lib/utils";
import { memo } from "react";

const DOCUMENT_LINES = Array.from({ length: 12 });

export function DocumentFolder() {
  return (
    <div className="group relative grid h-20 w-24 place-items-center overflow-visible rounded-xl border border-neutral-700 bg-linear-to-b from-neutral-700 via-neutral-800 to-neutral-950 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
      <div className="absolute bottom-5 h-8 w-16 rounded-full bg-black/15 blur-xl transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:h-10 group-hover:w-20 group-hover:bg-black/10" />

      <DocumentSheet className="z-20 -translate-x-3 -translate-y-1.5 -rotate-18 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-7 group-hover:-translate-y-5 group-hover:scale-[1.02] group-hover:-rotate-28" />

      <DocumentSheet className="z-10 -translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-8 group-hover:scale-[1.05]" />

      <DocumentSheet className="translate-x-3 translate-y-0.5 rotate-18 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-6 group-hover:-translate-y-3 group-hover:scale-[1.01] group-hover:rotate-26" />

      <FolderCover />

      <div className="absolute bottom-1 h-2 w-14 rounded-full bg-black/20 blur-md transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-20 group-hover:opacity-60" />
    </div>
  );
}

function FolderCover() {
  return (
    <div
      className="absolute bottom-0 z-30 w-full origin-bottom transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:transform-[translateZ(0)_rotateX(-26deg)]"
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div className="absolute inset-0 -z-10 rounded-xl bg-neutral-950" />

      <div className="absolute -top-3 left-0 h-3 w-12 rounded-t-lg border border-b-0 border-neutral-700 bg-linear-to-b from-neutral-700 to-neutral-900" />

      <div className="flex h-10 w-full items-end rounded-xl rounded-tl-none rounded-tr-lg border border-neutral-700 bg-linear-to-b from-neutral-700 via-neutral-800 to-neutral-950 px-1.5 py-1.25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="font-inter text-[8px] font-medium tracking-wider text-white/90 select-none">
          Documents
        </div>
      </div>
    </div>
  );
}

const DocumentSheet = memo(function DocumentSheet({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        `absolute h-12 w-10 origin-bottom rounded-sm border border-[#e5e3dc] bg-[#fdfcf9] px-0.75 py-1 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:rounded-sm before:bg-linear-to-b before:from-black/3 before:to-transparent`,
        className,
      )}
    >
      <div className="absolute top-0 right-0 h-full w-[1.5px] rounded-r-sm bg-neutral-100" />

      <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-neutral-300" />

      <div className="relative mb-1 h-0.75 w-full rounded-full bg-linear-to-r from-neutral-300 to-neutral-200" />

      <div className="relative grid grid-cols-2 gap-0.5">
        {DOCUMENT_LINES.map((_, index) => (
          <div
            key={index}
            className="h-0.75 w-full rounded-full bg-linear-to-r from-neutral-300 to-neutral-200"
          />
        ))}
      </div>
    </div>
  );
});

DocumentSheet.displayName = "DocumentSheet";
