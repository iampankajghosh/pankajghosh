import { cn } from "@/lib/utils";

const DOCUMENT_LINES = ["w-full", "w-full", "w-5/6", "w-full", "w-3/4"];

const DOCUMENT_FOOTER_LINES = ["w-full", "w-5/6"];

export function DocumentTray() {
  return (
    <div
      className="group relative flex h-24 w-28 items-end justify-center"
      style={{
        perspective: "900px",
      }}
    >
      <div className="absolute inset-x-2 top-3 h-14 rounded-xl border border-slate-600 bg-linear-to-b from-slate-700 via-slate-800 to-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.25)]" />

      <DocumentCard
        accent="bg-sky-400"
        className="z-10 h-16 translate-x-3 rotate-[5deg] opacity-90 blur-[0.15px] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-5 group-hover:-translate-y-2 group-hover:rotate-[8deg]"
      />

      <DocumentCard
        accent="bg-emerald-400"
        className="z-20 h-16 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-1 group-hover:-translate-y-6 group-hover:rotate-2"
      />

      <DocumentCard
        accent="bg-amber-400"
        className="z-30 h-18 -translate-x-3 -rotate-6 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-8 group-hover:-translate-y-11 group-hover:scale-[1.03] group-hover:rotate-[-16deg]"
      />

      <TrayBody />

      <div
        className="absolute bottom-0 z-40 h-8 w-full rounded-b-xl border-t border-white/10 bg-linear-to-b from-slate-700 to-slate-900 shadow-[0_-1px_0_rgba(255,255,255,0.05)] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
        style={{
          transform: "perspective(400px) rotateX(18deg)",
          transformOrigin: "bottom",
        }}
      >
        <div className="absolute top-1.5 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full border border-slate-800 bg-slate-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
          <div className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-500" />
        </div>
      </div>

      <div className="absolute bottom-0 -z-10 h-2 w-16 rounded-full bg-black/20 blur-md transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-20 group-hover:opacity-80" />
    </div>
  );
}

function TrayBody() {
  return (
    <div
      className="absolute bottom-0 h-12 w-full overflow-hidden rounded-xl border border-slate-500 bg-linear-to-b from-slate-600 via-slate-700 to-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.28)]"
      style={{
        transform: "perspective(400px) rotateX(-8deg)",
        transformOrigin: "bottom",
      }}
    >
      <div className="absolute inset-x-2 top-1 h-px bg-white/20" />
    </div>
  );
}

function DocumentCard({
  className,
  accent,
}: {
  className?: string;
  accent: string;
}) {
  return (
    <div
      className={cn(
        "absolute bottom-3 w-15 origin-bottom rounded-md border border-[#e5e3dc] bg-[#fdfcf9] px-1.5 py-1.5 shadow-[0_2px_3px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:rounded-md before:bg-linear-to-b before:from-black/3 before:to-transparent",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute top-0 right-0 h-full w-0.5 rounded-r-md bg-neutral-100" />

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-300" />

      <div className={cn("relative mb-1 h-1.5 w-full rounded-full", accent)} />

      <div className="relative mb-1 h-0.5 w-4/5 rounded-full bg-neutral-400" />

      <div className="relative space-y-0.5">
        {DOCUMENT_LINES.map((width, index) => (
          <div
            key={index}
            className={cn("h-0.5 rounded-full bg-neutral-200", width)}
          />
        ))}
      </div>

      <div className="relative mt-1 space-y-0.5">
        {DOCUMENT_FOOTER_LINES.map((width, index) => (
          <div
            key={index}
            className={cn("h-0.5 rounded-full bg-neutral-200", width)}
          />
        ))}
      </div>
    </div>
  );
}
