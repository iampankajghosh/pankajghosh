import { setFont } from "@/actions/setFont";
import { allowedFonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { fontClassMap } from "@/providers/font-provider";
import { cookies } from "next/headers";
import { Tick01Icon } from "../icons";

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
      <button
        name="font"
        value={font}
        className={cn(
          "capitalize cursor-pointer w-full text-start text-foreground/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-md flex items-center justify-between transition-colors duration-150 ease-out hover:text-foreground",
          fontClassMap[font],
          font === selectedFont &&
            "bg-neutral-100 text-foreground dark:bg-neutral-800",
        )}
        disabled={font === selectedFont}
      >
        <span>{font.split("-").join(" ")}</span>

        <Tick01Icon
          className={cn(
            "size-5 translate-x-1 scale-0 transition-transform duration-300 ease-in-out opacity-0",
            font === selectedFont && "scale-100 opacity-100",
          )}
        />
      </button>
    </form>
  );
}
