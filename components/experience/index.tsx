import { getShortDuration } from "@/lib/date";
import {
  AccordionContent,
  AccordionProvider,
  AccordionTrigger,
} from "../accordion";
import { Badge } from "../badge";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import {
  ActiveStatusPulse,
  ExperienceBody,
  ExperienceBullet,
  ExperienceBulletList,
  ExperienceDesignation,
  ExperienceGroup,
  ExperienceHeader,
  ExperienceItem,
  ExperienceLocation,
  ExperienceLogo,
  ExperienceMetadata,
  ExperienceTitle,
  VerticalSeparator,
} from "./card";
import { EXPERIENCE } from "./data";
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
          <div className="grid grid-cols-1 md:grid-cols-14">
            <StackIllustration className="max-sm:hidden md:col-span-3" />

            <ExperienceGroup className="border-border border-l md:col-span-11">
              {EXPERIENCE.map((exp) => (
                <AccordionProvider key={exp.id}>
                  <ExperienceItem>
                    <ExperienceHeader>
                      <ExperienceLogo src={exp.logo} />

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <ExperienceTitle>{exp.company}</ExperienceTitle>
                          <ActiveStatusPulse date={exp.duration} />
                        </div>
                        <ExperienceLocation>{exp.location}</ExperienceLocation>
                      </div>

                      <AccordionTrigger
                        label={exp.company}
                        className="translate-x-2 max-sm:translate-x-0"
                      />
                    </ExperienceHeader>

                    <ExperienceBody>
                      <div className="mb-2 flex justify-between px-3 max-sm:flex-col">
                        <ExperienceDesignation>
                          {exp.designation}
                        </ExperienceDesignation>

                        <div className="flex items-center gap-3">
                          <ExperienceMetadata>{exp.type}</ExperienceMetadata>
                          <VerticalSeparator />
                          <ExperienceMetadata>
                            {exp.duration}
                          </ExperienceMetadata>
                          <VerticalSeparator />
                          <ExperienceMetadata>
                            {getShortDuration(exp.duration)}
                          </ExperienceMetadata>
                        </div>
                      </div>

                      <AccordionContent className="mb-5">
                        <ExperienceBulletList>
                          {exp.description.map((d, idx) => (
                            <ExperienceBullet key={idx}>{d}</ExperienceBullet>
                          ))}
                        </ExperienceBulletList>
                      </AccordionContent>

                      <div className="mb-2 flex flex-wrap items-center gap-2 px-3">
                        {exp.tech.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </ExperienceBody>
                  </ExperienceItem>
                </AccordionProvider>
              ))}
            </ExperienceGroup>
          </div>
        </Container>
      </Row>
    </section>
  );
}
