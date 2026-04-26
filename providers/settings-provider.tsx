import { cookies } from "next/headers";

const fontClassMap: Record<string, string> = {
  inter: "font-inter",
  geist: "font-geist",
  manrope: "font-manrope",
  "open-sans": "font-open-sans",
  roboto: "font-roboto",
};

export async function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const selectedFont = cookieStore.get("font")?.value ?? "inter";

  return (
    <div className={`${fontClassMap[selectedFont]} antialiased`}>
      {children}
    </div>
  );
}
