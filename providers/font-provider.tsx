import { FONT_CONFIG, FontKey } from "@/lib/fonts";
import { cookies } from "next/headers";

export async function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const selectedFont = (cookieStore.get("font")?.value as FontKey) ?? "inter";
  const config = FONT_CONFIG[selectedFont] || FONT_CONFIG.inter;

  return <div className={config.twClass}>{children}</div>;
}
