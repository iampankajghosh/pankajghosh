"use server";

import { allowedFonts } from "@/lib/fonts";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setFont(formData: FormData) {
  const cookieStore = await cookies();
  const font = formData.get("font");

  if (typeof font !== "string" || !allowedFonts.includes(font)) {
    throw new Error("Invalid font");
  }

  cookieStore.set("font", font);

  revalidatePath("/");
}
