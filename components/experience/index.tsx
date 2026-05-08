import { getShortDuration } from "@/lib/date";
import {
  AccordionContent,
  AccordionProvider,
  AccordionTrigger,
} from "../accordion";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
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

export function Experience() {
  return (
    <section id="experience">
      <Row size="lg" className="md:hidden" />

      <Row className="md:border-none">
        <Container className="md:relative">
          <SectionTitle className="text-sky-500 dark:text-sky-400">
            Where I&apos;ve Worked
          </SectionTitle>
        </Container>
      </Row>

      <Row size="sm" className="md:hidden" />

      <Row size="lg" className="max-sm:hidden">
        <Container variant="label">
          <ClassLabel>
            font-3xl <AdaptiveValue sm="font-medium" lg="tracking-tighter" />{" "}
            <AdaptiveValue light="text-neutral-800" dark="text-neutral-200" />
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <Heading>I showed up, I learned, I delivered.</Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>
            grid <AdaptiveValue sm="grid-cols-1" lg="grid-cols-13" />
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-13">
            <StackIllustration className="max-sm:hidden md:col-span-3" />

            <GroupCard className="border-border border-l md:col-span-10">
              {experience.map((exp) => (
                <AccordionProvider key={exp.id}>
                  <Card className="group">
                    <CardHeader>
                      <CompanyLogo src={exp.logo} />

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <CardTitle>{exp.company}</CardTitle>
                          <StatusDot date={exp.duration} />
                        </div>
                        <p className="text-foreground/80 text-xs">
                          {exp.location}
                        </p>
                      </div>

                      <AccordionTrigger label={exp.company} />
                    </CardHeader>

                    <CardBody>
                      <div className="mb-5 px-3">
                        <p className="text-sm font-[450]">{exp.designation}</p>

                        <div className="flex items-center gap-3">
                          <p className="text-foreground/80 text-[13px]">
                            {exp.type}
                          </p>

                          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

                          <p className="text-foreground/80 text-[13px]">
                            {exp.duration}
                          </p>

                          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

                          <p className="text-foreground/80 text-[13px]">
                            {getShortDuration(exp.duration)}
                          </p>
                        </div>
                      </div>

                      <AccordionContent className="mb-5">
                        <ul className="px-3">
                          {exp.description.map((d, idx) => (
                            <li key={idx} className="group flex gap-3">
                              <span className="bg-foreground/20 block size-1.5 shrink-0 translate-y-1.75" />
                              <p className="text-foreground/80 mb-2 text-sm text-wrap">
                                {d}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>

                      <div className="mb-2 flex flex-wrap items-center gap-2 px-3">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="border-border bg-foreground/4 font-ibm-plex-mono rounded-md border px-2 py-1 text-xs leading-none inset-shadow-sm inset-shadow-black/2"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </AccordionProvider>
              ))}
            </GroupCard>
          </div>
        </Container>
      </Row>
    </section>
  );
}
