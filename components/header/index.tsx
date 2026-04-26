import { Container } from "../container";
import { Logo } from "../logo";
import { SettingsTrigger } from "../settings";
import { GithubBtn } from "./github-btn";
import { MobileNavTrigger, Navbar, NavMenu } from "./navbar";

export function Header() {
  return (
    <header className="border-b border-border dark:border-neutral-800 relative">
      <Container>
        <Navbar>
          <Logo />

          <NavMenu className="flex-1 justify-end" />

          <div className="flex items-center gap-2">
            <GithubBtn />
            <SettingsTrigger />
            <MobileNavTrigger />
          </div>
        </Navbar>
      </Container>
    </header>
  );
}
