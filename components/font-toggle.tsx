import { setFont } from "@/actions/setFont";
import { allowedFonts } from "@/app/fonts";

export async function FontToggle() {
  return allowedFonts.map((font) => (
    <form key={font} action={setFont}>
      <button
        name="font"
        value={font}
        className="cursor-pointer bg-neutral-100 px-2 py-0.5 text-sm capitalize"
      >
        {font.split("-").join(" ")}
      </button>
    </form>
  ));
}
