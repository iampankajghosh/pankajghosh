import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  XIcon,
} from "@/components/icons";
import { getCurrentYear } from "@/lib/date";
import Link from "next/link";
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

      <div className="border-b border-border">
        <Container>
          <SubHeading className="text-center text-sm md:text-base max-w-[90%] sm:max-w-xl mx-auto">
            This portfolio is highly inspired by the{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-ibm-plex-mono text-sky-500 dark:text-sky-400 font-[450]"
            >
              tailwindcss
            </Link>{" "}
            landing page. Designed and developed by{" "}
            <Link
              href="https://x.com/im_pankajghosh"
              target="_blank"
              className="font-ibm-plex-mono text-sky-500 dark:text-sky-400 font-[450]"
            >
              pankajghosh
            </Link>
            . Open source on{" "}
            <Link
              href="https://github.com/iampankajghosh/pankajghosh"
              target="_blank"
              className="font-ibm-plex-mono text-sky-500 dark:text-sky-400 font-[450]"
            >
              github
            </Link>
            .
          </SubHeading>
        </Container>
      </div>

      <ContainerFluid className="h-15" />

      <ContainerFluid className="h-30">
        <Container className="md:flex md:items-center md:justify-between py-6 px-5 h-fit">
          <SubHeading className="text-sm text-center md:text-start mb-5 md:mb-0">
            Copyright © {getCurrentYear()} Pankaj Ghosh.
          </SubHeading>

          <div className="px-2 flex items-center gap-4 justify-center md:justify-end">
            {socials.map((s) => (
              <Link
                key={s.id}
                href={s.link}
                target="_blank"
                className="size-7 flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150 ease-out"
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
