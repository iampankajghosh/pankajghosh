import { getShortDuration } from "@/lib/date";
import {
  AccordionContent,
  AccordionProvider,
  AccordionTrigger,
} from "../accordion";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { SectionLabel } from "../section-label";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CompanyLogo,
  GroupCard,
  StatusDot,
} from "./card";
import { experience } from "./data";
import { StackIllustration } from "./stack-illustration";

function Experience({ children }: { children: React.ReactNode }) {
  return <section className="relative">{children}</section>;
}

Experience.Header = function Header() {
  return (
    <>
      <ContainerFluid className="h-15 md:hidden" />

      <ContainerFluid className="md:pointer-events-none md:absolute md:-z-1 md:w-full md:border-none">
        <Container className="md:relative">
          <SectionLabel className="text-pink-500 md:absolute md:top-30.25 md:-left-31.75 md:-rotate-90 dark:text-pink-400">
            Where I&apos;ve Worked
          </SectionLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="md:hidden" />

      <ContainerFluid className="hidden h-15 md:block">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-3xl leading-6</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Heading>I showed up, I learned, I delivered.</Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>grid grid-cols-1 md:grid-cols-10</ClassNameLabel>
        </Container>
      </ContainerFluid>
    </>
  );
};

Experience.Body = function Body({ children }: { children: React.ReactNode }) {
  return (
    <ContainerFluid>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-10">{children}</div>
      </Container>
    </ContainerFluid>
  );
};

Experience.Side = function Side() {
  return <StackIllustration className="col-span-2 hidden md:block" />;
};

Experience.List = function List({ children }: { children: React.ReactNode }) {
  return (
    <GroupCard className="border-border col-span-8 border-l">
      {children}
    </GroupCard>
  );
};

Experience.Item = function Item({ exp }: { exp: (typeof experience)[0] }) {
  return (
    <AccordionProvider>
      <Card className="group">
        <Experience.ItemHeader exp={exp} />
        <Experience.ItemBody exp={exp} />
      </Card>
    </AccordionProvider>
  );
};

Experience.ItemHeader = function ItemHeader({
  exp,
}: {
  exp: (typeof experience)[0];
}) {
  return (
    <CardHeader>
      <CompanyLogo src={exp.logo} />

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <CardTitle>{exp.company}</CardTitle>
          <StatusDot date={exp.duration} />
        </div>
        <p className="text-foreground/80 text-xs">{exp.location}</p>
      </div>

      <AccordionTrigger label={exp.company} />
    </CardHeader>
  );
};

Experience.ItemBody = function ItemBody({
  exp,
}: {
  exp: (typeof experience)[0];
}) {
  return (
    <CardBody>
      <div className="mb-5 px-3">
        <p className="text-sm font-[450]">{exp.designation}</p>

        <div className="flex items-center gap-3">
          <p className="text-foreground/80 text-[13px]">{exp.type}</p>

          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

          <p className="text-foreground/80 text-[13px]">{exp.duration}</p>

          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

          <p className="text-foreground/80 text-[13px]">
            {getShortDuration(exp.duration)}
          </p>
        </div>
      </div>

      <Experience.Description description={exp.description} />
      <Experience.Tech tech={exp.tech} />
    </CardBody>
  );
};

Experience.Description = function Description({
  description,
}: {
  description: string[];
}) {
  return (
    <AccordionContent className="mb-5">
      <ul className="px-3">
        {description.map((d, idx) => (
          <li key={idx} className="group flex gap-3">
            <span className="bg-foreground/20 block size-1.5 shrink-0 translate-y-1.75" />
            <p className="text-foreground/80 mb-2 text-sm text-wrap">{d}</p>
          </li>
        ))}
      </ul>
    </AccordionContent>
  );
};

Experience.Tech = function Tech({ tech }: { tech: string[] }) {
  return (
    <div className="mb-2 flex flex-wrap items-center gap-2 px-3">
      {tech.map((t) => (
        <span
          key={t}
          className="border-border bg-foreground/4 font-ibm-plex-mono rounded-md border px-2 py-1 text-xs leading-none inset-shadow-sm inset-shadow-black/2"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <Experience>
      <Experience.Header />

      <Experience.Body>
        <Experience.Side />

        <Experience.List>
          {experience.map((exp) => (
            <Experience.Item key={exp.id} exp={exp} />
          ))}
        </Experience.List>
      </Experience.Body>
    </Experience>
  );
}
