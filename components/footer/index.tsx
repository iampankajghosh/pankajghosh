import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  XIcon,
} from "@/components/icons";
import Link from "next/link";
import { Button } from "../button";
import { Container } from "../container";

function Footer() {
  return (
    <footer>
      <div className="border-b border-border">
        <Container className="h-15 flex items-end"></Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <p className="px-2 text-neutral-600 text-center font-medium text-base">
            Inspired by Tailwind CSS and modern design systems.
            <br /> Designed and built by{" "}
            <Link href="/" className="font-ibm-plex-mono text-sky-500">
              pankajghosh
            </Link>
            . Open source on{" "}
            <Link href="/" className="font-ibm-plex-mono text-sky-500">
              github
            </Link>
            .
          </p>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-15 flex items-end"></Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-30 flex items-center justify-between">
          <p className="text-sm px-2 text-neutral-600">
            Copyright © 2026 Pankaj Ghosh.
          </p>

          <div className="px-2 flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Mail01Icon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <GithubIcon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Linkedin01Icon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <XIcon />
            </Button>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
