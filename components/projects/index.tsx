import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { SectionLabel } from "../section-label";
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

function Projects() {
  return (
    <section className="relative">
      <ContainerFluid className="h-15 md:hidden" />

      <ContainerFluid className="md:pointer-events-none md:absolute md:-z-1 md:w-full md:border-none">
        <Container className="md:relative">
          <SectionLabel className="text-sky-500 md:absolute md:top-28.25 md:-left-29.75 md:-rotate-90 dark:text-sky-400">
            What I&apos;ve Built
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
          <Heading>Things I actually built and shipped.</Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>
            grid grid-cols-1 md:grid-cols-2 gap-10
          </ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
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
      </ContainerFluid>
    </section>
  );
}

export default Projects;
