import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import {
  Card,
  CardBanner,
  CardContent,
  CardDescription,
  CardSkeleton,
  CardTitle,
} from "./card";
import { projects } from "./data";
import { Grid, GridContainer } from "./grid";

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

      <Row>
        <GridContainer>
          <Grid>
            {projects.map((project) => (
              <Card key={project.id} href={project.live} title={project.title}>
                <CardSkeleton>
                  <CardBanner src={project.banner} />
                </CardSkeleton>

                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </GridContainer>
      </Row>
    </section>
  );
}
