import { cn } from "@/lib/utils";

const DOCUMENT_LINES = ["w-full", "w-full", "w-full"];
const DOCUMENT_SECONDARY_LINES = ["w-3/4", "w-3/4", "w-3/4", "w-3/4"];

export function ProjectFolder() {
  return (
    <div className="group relative flex h-20 w-24 items-end justify-center transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-1 hover:-rotate-2">
      <FolderBody />

      <div className="absolute bottom-4 h-16 w-16 rounded-full bg-amber-300/0 blur-2xl transition-all duration-700 group-hover:bg-amber-300/30" />

      <div className="absolute top-2 left-1/2 h-1 w-1 rounded-full bg-amber-300 opacity-0 transition-all duration-700 group-hover:-translate-y-4 group-hover:opacity-100" />
      <div className="absolute top-4 left-[30%] h-1 w-1 rounded-full bg-yellow-200 opacity-0 transition-all delay-100 duration-700 group-hover:-translate-y-6 group-hover:opacity-100" />
      <div className="absolute top-3 left-[70%] h-1 w-1 rounded-full bg-white opacity-0 transition-all delay-200 duration-700 group-hover:-translate-y-5 group-hover:opacity-100" />

      <ProjectDocument className="z-0 translate-x-5 rotate-14 opacity-90 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-10 group-hover:-translate-y-3 group-hover:rotate-24" />

      <ProjectDocument className="z-0 -translate-x-5 rotate-[-14deg] opacity-90 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-10 group-hover:-translate-y-3 group-hover:rotate-[-24deg]" />

      <ProjectDocument className="z-10 translate-x-3 rotate-[8deg] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:rotate-20" />

      <ProjectDocument className="z-20 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-10 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]" />

      <ProjectDocument className="z-10 -translate-x-3 rotate-[-8deg] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-8 group-hover:-translate-y-4 group-hover:rotate-[-20deg]" />

      <FolderCover />

      <div className="absolute bottom-0 -z-10 h-3 w-14 rounded-full bg-black/15 blur-lg transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:h-4 group-hover:w-24 group-hover:opacity-70" />
    </div>
  );
}

function FolderBody() {
  return (
    <div className="absolute bottom-1 h-14 w-full rounded-lg rounded-tl-none border border-amber-300/50 bg-linear-to-b from-amber-50 via-amber-100 to-amber-200 shadow-[0_8px_20px_rgba(245,158,11,0.10)]">
      <div className="absolute -top-4 -left-px h-4 w-9 rounded-t-lg border border-b-0 border-amber-300/50 bg-amber-100" />
    </div>
  );
}

function FolderCover() {
  return (
    <div className="absolute bottom-0 z-30 h-11 w-full rounded-t-md rounded-b-xl border border-amber-300/60 bg-linear-to-b from-amber-200 via-amber-300 to-amber-400 shadow-[0_12px_24px_rgba(245,158,11,0.18)] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:h-9 group-hover:shadow-[0_18px_40px_rgba(245,158,11,0.28)]">
      <div className="absolute inset-x-3 top-2 mx-auto h-1 w-6 rounded-full bg-white/50" />
      <div className="absolute inset-x-2 bottom-1 h-px bg-amber-500/20" />
    </div>
  );
}

function ProjectDocument({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-2 h-12 w-9 origin-bottom rounded-md border border-slate-200 bg-linear-to-b from-white to-slate-50 px-1 py-1 shadow-[0_8px_18px_rgba(0,0,0,0.08)] before:absolute before:inset-0 before:rounded-md before:bg-linear-to-b before:from-black/2 before:to-transparent",
        className,
      )}
    >
      <div className="absolute top-0 right-0 h-full w-px bg-slate-100" />

      <div className="absolute bottom-0 left-0 h-px w-full bg-slate-300" />

      <div className="mb-1 h-1 w-5 rounded-full bg-sky-400" />

      <div className="space-y-0.5">
        {DOCUMENT_LINES.map((width, index) => (
          <div
            key={index}
            className={cn("h-0.5 rounded-full bg-slate-200", width)}
          />
        ))}
      </div>

      <div className="mt-1 space-y-0.5">
        {DOCUMENT_SECONDARY_LINES.map((width, index) => (
          <div
            key={index}
            className={cn("h-0.5 rounded-full bg-slate-200", width)}
          />
        ))}
      </div>
    </div>
  );
}
