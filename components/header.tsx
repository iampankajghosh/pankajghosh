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
import { ModeToggle } from "./mode-toggle";
import { Row } from "./row";
import { FontToggle } from "./settings/font-toggle";

export function Header() {
  return (
    <header className="bg-background fixed top-0 z-50 h-14 w-full">
      <Row>
        <Container className="flex items-center justify-between px-2 max-sm:px-4">
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
        </Container>
      </Row>
    </header>
  );
}
