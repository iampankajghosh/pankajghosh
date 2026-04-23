import { setContainerExpand } from "@/actions/setContainerExpand";
import { cookies } from "next/headers";

export async function ContainerToggle() {
  const cookieStore = await cookies();
  const expanded = cookieStore.get("expanded")?.value ?? "false";

  return (
    <form action={setContainerExpand}>
      <button
        type="submit"
        name="expanded"
        value={expanded === "true" ? "false" : "true"}
        className="cursor-pointer bg-neutral-100 px-2 py-0.5 text-sm capitalize dark:bg-neutral-800 dark:text-neutral-50"
      >
        Toggle Container
      </button>
    </form>
  );
}
