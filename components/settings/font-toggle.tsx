import { setFont } from "@/actions/setFont";
import { allowedFonts, FONT_CONFIG } from "@/lib/fonts";
import { cookies } from "next/headers";

import { FontButton } from "./font-button";

export async function FontToggle() {
  const cookieStore = await cookies();

  const selectedFont =
    cookieStore.get("font")?.value ?? "inter";

  return (
    <form
      action={setFont}
      className="grid gap-1"
      aria-label="Select font"
    >
      {allowedFonts.map((key) => (
        <FontButton
          key={key}
          fontId={key}
          label={FONT_CONFIG[key].label}
          twClass={FONT_CONFIG[key].twClass}
          isSelected={key === selectedFont}
        />
      ))}
    </form>
  );
}