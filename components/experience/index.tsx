import { getShortDuration } from "@/lib/date";
import { Button } from "../button";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { UnfoldMoreIcon } from "../icons";
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

function Experience() {
  return (
    <section>
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

      <ContainerFluid>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10">
            <StackIllustration className="col-span-2 hidden md:block" />
            <GroupCard className="col-span-8 border-l border-border">
              {experience.map((exp) => (
                <Card key={exp.id} className="group">
                  <CardHeader>
                    <CompanyLogo src={exp.logo} />

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle>{exp.company}</CardTitle>
                        <StatusDot date={exp.duration} />
                      </div>
                      <p className="text-xs text-foreground/80">
                        {exp.location}
                      </p>
                    </div>

                    <Button
                      size="icon"
                      variant="outline"
                      className="md:scale-0 md:opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                    >
                      <UnfoldMoreIcon className="size-5 shrink-0" />
                    </Button>
                  </CardHeader>

                  <CardBody>
                    <div className="px-3 mb-5">
                      <p className="text-sm">{exp.designation}</p>

                      <div className="flex gap-3 items-center">
                        <p className="text-[13px] text-foreground/80">
                          {exp.type}
                        </p>

                        <span className="h-4 w-px bg-border" />

                        <p className="text-[13px] text-foreground/80">
                          {exp.duration}
                        </p>

                        <span className="h-4 w-px bg-border md:block hidden" />

                        <p className="text-[13px] text-foreground/80 md:block hidden">
                          {getShortDuration(exp.duration)}
                        </p>
                      </div>
                    </div>

                    <ul className="px-3 mb-5 overflow-hidden h-18 mask-b-from-0% mask-b-to-100%">
                      {exp.description.map((d, idx) => (
                        <li key={idx} className="flex gap-3 group">
                          <span className="size-1.5 bg-foreground/20 block shrink-0 translate-y-2" />
                          <p className="text-foreground/80 text-sm mb-2 text-wrap">
                            {d}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mb-2 px-3 flex-wrap">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs border border-border rounded-md px-2 py-1 leading-none bg-foreground/4 inset-shadow-sm inset-shadow-black/2 font-ibm-plex-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </GroupCard>
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
}

export default Experience;
