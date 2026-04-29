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
    <header className="border-b border-border dark:border-neutral-800 fixed inset-0 h-14 bg-background z-30">
      <Container>
        <div className="flex items-center justify-between h-full px-4 md:px-2">
          <Logo />

          <Settings>
            <SettingsTrigger>
              <SettingsIcon className="size-5 fill-neutral-200 dark:fill-neutral-800" />
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
