export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ibm-plex-mono inline-block rounded-md border border-neutral-200 bg-neutral-200/50 px-2 text-xs/5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-200">
      {children}
    </span>
  );
}
