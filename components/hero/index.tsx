import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../sub-heading";
import { Avatar } from "./avatar";

function Hero() {
  return (
    <section>
      <ContainerFluid className="h-14">
        <Container className="flex items-end py-1">
          <ClassNameLabel>size-35 rounded-full</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Avatar />
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
            <br /> Crafting intuitive digital web experiences.
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
            I'm a frontend engineer with 3+ years of experience building modern,
            scalable web apps using Next.js, React, and Tailwind CSS.
          </SubHeading>

          <SubHeading className="mb-3">
            I enjoy turning ideas into fast, accessible, and polished
            interfaces, with a strong focus on performance and user experience.
          </SubHeading>

          <SubHeading>
            Always open to interesting projects, collaborations, or a quick
            chat.
          </SubHeading>
        </Container>
      </ContainerFluid>
    </section>
  );
}

export default Hero;
