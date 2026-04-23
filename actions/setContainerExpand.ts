"use server";

import { cookies } from "next/headers";

export async function setContainerExpand(formData: FormData) {
  const cookieStore = await cookies();
  const expanded = formData.get("expanded");

  console.log(expanded);

  if (typeof expanded !== "string" || !["true", "false"].includes(expanded)) {
    throw new Error("Invalid expanded");
  }

  cookieStore.set("expanded", expanded);
}
