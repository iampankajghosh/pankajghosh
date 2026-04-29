import { cookies } from "next/headers";

export const fontClassMap: Record<string, string> = {
  inter: "font-inter",
  geist: "font-geist",
  manrope: "font-manrope",
  "open-sans": "font-open-sans",
  roboto: "font-roboto",
};

export async function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const selectedFont = cookieStore.get("font")?.value ?? "inter";

  return <div className={fontClassMap[selectedFont]}>{children}</div>;
}
