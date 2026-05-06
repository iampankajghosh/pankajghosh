"use client";

import { getCurrentYear } from "@/lib/date";
import Link from "next/link";
import { Container, ContainerFluid } from "../container";
import { SubHeading } from "../sub-heading";
import { MiniModeToggle } from "./mini-mode-toggle";

function Footer() {
  return (
    <footer>
      <ContainerFluid className="h-15" />

      <div className="border-border border-b">
        <Container>
          <SubHeading className="mx-auto max-w-xl text-center text-sm md:text-base">
            This portfolio is highly inspired by the{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-ibm-plex-mono font-[450] text-sky-500 dark:text-sky-400"
            >
              tailwindcss
            </Link>{" "}
            landing page. Designed and developed by{" "}
            <Link
              href="https://x.com/im_pankajghosh"
              target="_blank"
              className="font-ibm-plex-mono font-[450] text-sky-500 dark:text-sky-400"
            >
              pankajghosh
            </Link>
            . Open source on{" "}
            <Link
              href="https://github.com/iampankajghosh/pankajghosh"
              target="_blank"
              className="font-ibm-plex-mono font-[450] text-sky-500 dark:text-sky-400"
            >
              github
            </Link>
            .
          </SubHeading>
        </Container>
      </div>

      <ContainerFluid className="h-15" />

      <ContainerFluid className="h-30">
        <Container className="flex h-fit flex-col items-start justify-between gap-4 px-5 py-6 md:flex-row">
          <MiniModeToggle />

          <SubHeading className="px-0">
            Copyright © {getCurrentYear()} Pankaj Ghosh.
          </SubHeading>
        </Container>
      </ContainerFluid>
    </footer>
  );
}

export default Footer;
