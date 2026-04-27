import { GithubIcon } from "@/app/icons";
import { Button } from "../button";

export function GithubBtn() {
  return (
    <Button variant="ghost" size="icon">
      <GithubIcon className="size-5" />
    </Button>
  );
}
