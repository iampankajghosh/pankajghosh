import Link from "next/link";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import {
  Card,
  CardBanner,
  CardDescription,
  CardHeader,
  CardTitle,
  PreviewImage,
} from "./card";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section id="projects">
      <Row size="lg" className="md:hidden" />

      <Row className="md:border-none">
        <Container className="md:relative">
          <SectionTitle className="text-pink-500 dark:text-pink-400">
            What I&apos;ve Built
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
          <Heading>Things I actually built and shipped.</Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>
            grid <AdaptiveValue sm="grid-cols-1" lg="grid-cols-2" /> gap-10
          </ClassLabel>
        </Container>
      </Row>

      <Row className="after:bg-border before:bg-border relative overflow-x-hidden before:absolute before:inset-0 before:top-1/2 before:h-px before:-translate-y-5 before:content-[''] after:absolute after:inset-0 after:top-1/2 after:h-px after:translate-y-5 after:content-[''] max-sm:before:hidden max-sm:after:hidden">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              href={p.liveUrl}
              target="_blank"
              className="odd:border-border odd:after:bg-border even:after:bg-border even:border-border relative border-y first:border-t-0 last:border-b-0 odd:border-r odd:after:absolute odd:after:top-60 odd:after:right-0 odd:after:h-px odd:after:w-[200vw] odd:after:translate-x-1/2 odd:after:content-[''] even:border-l even:after:absolute even:after:top-62 even:after:left-0 even:after:h-px even:after:w-[200vw] even:after:-translate-x-1/2 even:after:content-[''] max-sm:before:hidden max-sm:after:hidden sm:border-0"
            >
              <Card>
                <CardHeader className="border-border mb-2 border-b sm:border-0">
                  <CardBanner src={p.bannerUrl}>
                    <PreviewImage src={p.previewUrl} />
                  </CardBanner>
                </CardHeader>

                <div className="border-border relative border-t py-2 sm:border-0">
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.tagline}</CardDescription>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </Row>
    </section>
  );
}
