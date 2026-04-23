import { FontToggle } from "@/components/font-toggle";
import { cookies } from "next/headers";

export async function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const selectedFont = cookieStore.get("font")?.value ?? "inter";

  return (
    <body
      className={`font-${selectedFont} min-h-full flex flex-col antialiased`}
    >
      {children}
      <FontToggle />
    </body>
  );
}
