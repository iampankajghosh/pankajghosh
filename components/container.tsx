import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

export async function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const cookieStore = await cookies();
  const expanded = cookieStore.get("expanded")?.value ?? "false";

  return (
    <div
      className={cn(
        "mx-auto relative",
        expanded === "true"
          ? "max-w-[calc(100%-80px)]"
          : "md:max-w-xl lg:max-w-2xl",
        className,
      )}
    >
      <Pattern className="-left-10" />
      {children}
      <Pattern className="-right-10" />
    </div>
  );
}

export const Pattern = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "hidden md:block md:absolute md:top-0 md:bottom-0 md:border-x border-border w-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed",
        className,
      )}
    />
  );
};
