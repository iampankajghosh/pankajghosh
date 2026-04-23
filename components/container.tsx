import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

export async function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cookieStore = await cookies();
  const expanded = cookieStore.get("expanded")?.value ?? "false";

  return (
    <div
      className={cn(
        "mx-auto",
        expanded === "true" ? "w-full" : "max-w-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
