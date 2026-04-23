"use server";

import { cookies } from "next/headers";
import { allowedFonts } from "@/app/fonts";
import { revalidatePath } from "next/cache";

export async function setFont(formData: FormData) {
  const cookieStore = await cookies();
  const font = formData.get("font");

  if (typeof font !== "string" || !allowedFonts.includes(font)) {
    throw new Error("Invalid font");
  }

  cookieStore.set("font", font);
}
