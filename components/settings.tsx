import { SettingsIcon } from "@/app/icons";
import { Button } from "./button";

export function SettingsTrigger() {
  return (
    <Button variant="ghost" size="icon">
      <SettingsIcon />
    </Button>
  );
}
