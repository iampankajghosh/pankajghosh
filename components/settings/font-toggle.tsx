import { setFont } from "@/actions/setFont";
import { allowedFonts } from "@/lib/fonts";
import { fontClassMap } from "@/providers/font-provider";
import { cookies } from "next/headers";
import { FontButton } from "./font-button";

export function FontToggle() {
  return (
    <div className="grid gap-1">
      {allowedFonts.map((font) => (
        <FontSelector key={font} font={font} />
      ))}
    </div>
  );
}

export async function FontSelector({ font }: { font: string }) {
  const cookieStore = await cookies();
  const selectedFont = cookieStore.get("font")?.value ?? "inter";

  return (
    <form key={font} action={setFont}>
      <FontButton
        font={font}
        fontClass={fontClassMap[font]}
        isSelected={font === selectedFont}
      />
    </form>
  );
}
