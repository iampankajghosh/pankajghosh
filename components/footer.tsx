"use client";

import { getCurrentYear } from "@/lib/date";
import { Container } from "./container";
import { MiniModeToggle } from "./mode-toggle";
import { Row } from "./row";
import { SocialLink } from "./social-link";
import { Text } from "./text";

export function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer">
      <Row size="lg" />

      <Row>
        <Container>
          <Text className="text-center text-balance">
            This portfolio is highly inspired by the{" "}
            <SocialLink
              href="https://tailwindcss.com"
              aria-label="Visit Tailwind CSS website"
            >
              tailwindcss
            </SocialLink>
            . Designed and developed by{" "}
            <SocialLink
              href="https://x.com/im_pankajghosh"
              aria-label="Visit Pankaj Ghosh profile on X formerly Twitter"
            >
              pankajghosh
            </SocialLink>
            . Open source on{" "}
            <SocialLink
              href="https://github.com/iampankajghosh/pankajghosh"
              aria-label="View portfolio source code on GitHub"
            >
              github
            </SocialLink>
            .
          </Text>
        </Container>
      </Row>

      <Row size="lg" />

      <Row size="2xl">
        <Container className="flex items-center justify-between px-6 py-4 max-sm:px-4 max-sm:py-4">
          <MiniModeToggle />

          <Text className="px-0 max-sm:px-0">
            <span aria-label="Copyright">©</span> {getCurrentYear()} Pankaj
            Ghosh.
          </Text>
        </Container>
      </Row>
    </footer>
  );
}
