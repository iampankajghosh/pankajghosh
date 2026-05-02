import { getShortDuration } from "@/lib/date";
import {
  AccordionContent,
  AccordionProvider,
  AccordionTrigger,
} from "../accordion";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
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
  return <section>{children}</section>;
}

Experience.Header = function Header() {
  return (
    <>
      <ContainerFluid className="h-15">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-3xl leading-6</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Heading>Experience</Heading>
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
    <GroupCard className="col-span-8 border-l border-border">
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
        <p className="text-xs text-foreground/80">{exp.location}</p>
      </div>

      <AccordionTrigger />
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
      <div className="px-3 mb-5">
        <p className="text-sm font-[450]">{exp.designation}</p>

        <div className="flex gap-3 items-center">
          <p className="text-[13px] text-foreground/80">{exp.type}</p>

          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

          <p className="text-[13px] text-foreground/80">{exp.duration}</p>

          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

          <p className="text-[13px] text-foreground/80">
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
          <li key={idx} className="flex gap-3 group">
            <span className="size-1.5 bg-foreground/20 block shrink-0 translate-y-1.75" />
            <p className="text-foreground/80 text-sm mb-2 text-wrap">{d}</p>
          </li>
        ))}
      </ul>
    </AccordionContent>
  );
};

Experience.Tech = function Tech({ tech }: { tech: string[] }) {
  return (
    <div className="flex items-center gap-2 mb-2 px-3 flex-wrap">
      {tech.map((t) => (
        <span
          key={t}
          className="text-xs border border-border rounded-md px-2 py-1 leading-none bg-foreground/4 inset-shadow-sm inset-shadow-black/2 font-ibm-plex-mono"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

/* =========================
   Usage (Clean & Declarative)
========================= */

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
