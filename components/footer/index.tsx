"use client";

import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  XIcon,
} from "@/components/icons";
import { getCurrentYear } from "@/lib/date";
import Link from "next/link";
import posthog from "posthog-js";
import { Container, ContainerFluid } from "../container";
import { SubHeading } from "../sub-heading";
import { socials } from "./data";

const getSocialIcon = (name: string) => {
  switch (name) {
    case "linkedin":
      return <Linkedin01Icon className="size-5" />;
    case "github":
      return <GithubIcon className="size-5" />;
    case "x":
      return <XIcon className="size-5" />;
    case "email":
      return <Mail01Icon className="size-5" />;
  }
};

function Footer() {
  return (
    <footer>
      <ContainerFluid className="h-15" />

      <div className="border-border border-b">
        <Container>
          <SubHeading className="mx-auto max-w-[90%] text-center text-sm sm:max-w-xl md:text-base">
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
        <Container className="h-fit px-5 py-6 md:flex md:items-center md:justify-between">
          <SubHeading className="mb-5 text-center text-sm md:mb-0 md:text-start">
            Copyright © {getCurrentYear()} Pankaj Ghosh.
          </SubHeading>

          <div className="flex items-center justify-center gap-4 px-2 md:justify-end">
            {socials.map((s) => (
              <Link
                key={s.id}
                href={s.link}
                target="_blank"
                className="flex size-7 cursor-pointer items-center justify-center rounded-md transition-colors duration-150 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() =>
                  posthog.capture("social_link_clicked", {
                    platform: s.name,
                    url: s.link,
                  })
                }
              >
                {getSocialIcon(s.name)}
              </Link>
            ))}
          </div>
        </Container>
      </ContainerFluid>
    </footer>
  );
}

export default Footer;
