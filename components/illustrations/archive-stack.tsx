import { cn } from "@/lib/utils";

const DOCUMENT_LINES = ["w-full", "w-full", "w-5/6", "w-3/4"];

function ArchiveDocument({
  className,
  accent,
  width = "w-[72px]",
}: {
  className?: string;
  accent?: string;
  width?: string;
}) {
  return (
    <span
      className={cn(
        "absolute h-13 rounded-lg border border-[#e6e3dc] bg-[#fdfcf9] px-2 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.05)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-black/[0.02] before:to-transparent",
        width,
        className,
      )}
    >
      <span className="absolute top-0 right-0 h-full w-px rounded-r-lg bg-neutral-100" />

      <span className="absolute bottom-0 left-0 h-px w-full bg-neutral-300" />

      {accent && (
        <span
          className={cn(
            "absolute top-1.5 right-2 h-2 w-4 rounded-full",
            accent,
          )}
        />
      )}

      <span className="mb-2 block h-1 w-8 rounded-full bg-neutral-400" />

      <div className="space-y-1">
        {DOCUMENT_LINES.map((width, index) => (
          <span
            key={index}
            className={cn("block h-0.5 rounded-full bg-neutral-200", width)}
          />
        ))}
      </div>
    </span>
  );
}

export function ArchiveStack() {
  return (
    <span className="group relative flex h-20 w-24 items-center justify-center">
      <ArchiveDocument
        width="w-[68px]"
        accent="bg-amber-300"
        className="top-[22px] rotate-[1deg] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-y-1 group-hover:rotate-[2deg]"
      />

      <ArchiveDocument
        width="w-[70px]"
        accent="bg-emerald-300"
        className="top-[18px] z-10 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-2 group-hover:rotate-[0.5deg]"
      />

      <ArchiveDocument
        width="w-[72px]"
        accent="bg-sky-300"
        className="top-3 z-20 origin-bottom shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-6 group-hover:scale-[1.01] group-hover:-rotate-[3deg] group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
      />

      <span className="absolute bottom-2 h-2 w-14 rounded-full bg-black/10 blur-md transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-20 group-hover:opacity-60" />
    </span>
  );
}
