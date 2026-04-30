import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
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
    <section>
      <ContainerFluid className="h-15">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-3xl leading-6</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Heading>Projects</Heading>
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
              <Card key={project.id} href={project.live}>
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
