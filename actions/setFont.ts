"use server";

import { allowedFonts, FontKey } from "@/lib/fonts";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setFont(formData: FormData) {
  const cookieStore = await cookies();
  const font = formData.get("font") as string;

  if (!allowedFonts.includes(font as FontKey)) {
    throw new Error("Invalid font");
  }

  cookieStore.set("font", font, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  revalidatePath("/");
}
