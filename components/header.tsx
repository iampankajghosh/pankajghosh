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
import { CursorCompanion } from "./cursor-companion";
import { SettingsIcon } from "./icons";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Pattern } from "./pattern";
import { Row } from "./row";
import { FontToggle } from "./settings/font-toggle";

export function Header() {
  return (
    <header
      className="bg-background fixed top-0 z-50 h-14 w-full"
      role="banner"
    >
      <CursorCompanion spriteImage="https://52zfksbd04lay7w1.public.blob.vercel-storage.com/animated-character/origami-crane-yyFOawV173Q4aDSBU56Kdpsmeo9tCx.png" />

      <Row className="h-full">
        <Container className="relative flex items-center justify-between px-2 max-sm:px-4">
          <Logo />

          <Settings>
            <SettingsTrigger>
              <SettingsIcon
                aria-hidden="true"
                className="size-5 transition-[rotate] duration-350 ease-out group-hover:rotate-120"
              />
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

          <Pattern
            aria-hidden="true"
            className="left-0 w-10 -translate-x-8 lg:-translate-x-10"
          />

          <Pattern
            aria-hidden="true"
            className="right-0 w-10 translate-x-8 lg:translate-x-10"
          />
        </Container>
      </Row>
    </header>
  );
}
