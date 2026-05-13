import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SocialLink } from "../social-link";
import { Text } from "../text";
import { Avatar } from "./avatar";
import { HeroBanner } from "./hero-banner";

export function Hero() {
  return (
    <section id="hero">
      <Row size="lg">
        <Container variant="label">
          <ClassLabel>
            <AdaptiveValue sm="size-28" lg="size-35" /> rounded-full
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container className="relative">
          <HeroBanner className="absolute inset-0" />
          <Avatar className="relative z-10" />
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>
            font-4xl <AdaptiveValue sm="font-medium" lg="tracking-tighter" />{" "}
            <AdaptiveValue light="text-neutral-800" dark="text-neutral-200" />
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <Heading as="h1">
            Frontend Engineer.
            <br /> Builds things people actually enjoy using.
          </Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>
            text-base{" "}
            <AdaptiveValue light="text-neutral-600" dark="text-neutral-400" />
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container className="grid grid-cols-1 gap-3">
          <Text>
            Frontend has always felt less like a job and more like a craft to
            me. The kind where you are never really done learning and somehow
            that never gets old.
          </Text>

          <Text>
            I obsess over the details that most people never notice but always
            feel. The 2px misalignment bothers me. That is just how I work.
          </Text>

          <Text>
            If something you are building deserves that kind of attention, it
            would be great to connect. You can find me on{" "}
            <SocialLink href="https://x.com/im_pankajghosh">
              X
              <span className="ml-px inline-block -translate-y-px text-[13.80px]">
                (Twitter)
              </span>
            </SocialLink>
            ,{" "}
            <SocialLink href="https://www.linkedin.com/in/impankajghosh">
              LinkedIn
            </SocialLink>
            , or reach me via{" "}
            <SocialLink href="mailto:work@pankajghosh.in">email</SocialLink>.
          </Text>
        </Container>
      </Row>
    </section>
  );
}
