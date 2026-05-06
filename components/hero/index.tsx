import Image from "next/image";
import Link from "next/link";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { GithubIcon, Linkedin01Icon, Mail01Icon, XIcon } from "../icons";
import { SubHeading } from "../sub-heading";
import { Avatar } from "./avatar";
import { socials } from "./data";

const getSocialIcon = (name: string) => {
  switch (name) {
    case "linkedin":
      return <Linkedin01Icon className="size-5" />;
    case "github":
      return <GithubIcon className="size-5" />;
    case "x":
      return <XIcon className="size-4.5" />;
    case "email":
      return <Mail01Icon className="size-5" />;
  }
};

export function Hero() {
  return (
    <section>
      <ContainerFluid className="h-15">
        <Container className="flex items-end py-1">
          <ClassNameLabel>size-35 rounded-full</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container className="relative">
          <Avatar />
          <Banner />
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-4xl font-medium tracking-tighter</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Heading as="h1">
            Frontend Engineer.
            <br /> Builds things people actually enjoy using.
          </Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-base text-neutral-600</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <SubHeading className="mb-3">
            Frontend has always felt less like a job and more like a craft to
            me. The kind where you are never really done learning and somehow
            that never gets old.
          </SubHeading>

          <SubHeading className="mb-3">
            I obsess over the details that most people never notice but always
            feel. The 2px misalignment bothers me. That is just how I work.
          </SubHeading>

          <SubHeading>
            If something you are building deserves that kind of attention, it
            would be great to connect.
          </SubHeading>
        </Container>
      </ContainerFluid>

      <ContainerFluid />

      <ContainerFluid>
        <Container>
          <div className="flex items-center px-2 md:justify-end md:px-0">
            {socials.map((s) => (
              <Link
                key={s.id}
                href={s.link}
                target="_blank"
                className="border-border flex size-9 items-center justify-center border-l transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {getSocialIcon(s.name)}
              </Link>
            ))}
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
}

function Banner() {
  return (
    <div className="pointer-events-none absolute top-0 right-2 -z-1 h-full w-full mask-l-to-90% select-none sm:right-0">
      <Image
        src="https://res.cloudinary.com/ddws3mapm/image/upload/v1777739508/20260502_201645_a9ku8d.jpg"
        fill
        sizes="672px"
        className="pointer-events-none object-cover object-bottom select-none"
        alt=""
        draggable={false}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
