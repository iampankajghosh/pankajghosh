import { setFont } from "@/actions/setFont";
import { allowedFonts } from "@/app/fonts";

export async function FontToggle() {
  return allowedFonts.map((font) => (
    <form key={font} action={setFont}>
      <button
        name="font"
        value={font}
        className="capitalize text-sm px-2 py-0.5 bg-neutral-100 cursor-pointer"
      >
        {font.split("-").join(" ")}
      </button>
    </form>
  ));
}
