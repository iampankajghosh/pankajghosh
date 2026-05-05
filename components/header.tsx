import {
  Settings,
  SettingsContent,
  SettingsHeader,
  SettingsHeading,
  SettingsMenu,
  SettingsSubMenu,
  SettingsTrigger,
  SettingSubHeading,
} from "@/components/settings";
import { Container } from "./container";
import { SettingsIcon } from "./icons";
import { Logo } from "./logo";
import { FontToggle } from "./settings/font-toggle";
import { ModeToggle } from "./settings/mode-toggle";

export function Header() {
  return (
    <header className="border-border bg-background fixed inset-0 z-30 h-14 border-b dark:border-neutral-800">
      <Container>
        <div className="flex h-full items-center justify-between px-4 md:px-2">
          <Logo />

          <Settings>
            <SettingsTrigger>
              <SettingsIcon className="size-5" />
            </SettingsTrigger>

            <SettingsContent>
              <SettingsHeader>
                <SettingsHeading>Settings</SettingsHeading>
              </SettingsHeader>

              <SettingsMenu>
                <SettingsSubMenu>
                  <SettingSubHeading>Font Style</SettingSubHeading>
                  <FontToggle />
                </SettingsSubMenu>

                <SettingsSubMenu>
                  <SettingSubHeading>Choose theme</SettingSubHeading>
                  <ModeToggle />
                </SettingsSubMenu>
              </SettingsMenu>
            </SettingsContent>
          </Settings>
        </div>
      </Container>
    </header>
  );
}
