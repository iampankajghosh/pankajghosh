"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { Button as ForgeButton } from "../buttons/forge-button";
import { Button as GildedButton } from "../buttons/gilded-button";
import { Button as PetalButton } from "../buttons/petal-button";
import { Button as PulseButton } from "../buttons/pulse-button";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { GithubIcon } from "../icons";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import {
  Card,
  CardDescription,
  CardHeader,
  CardSkeleton,
  CardTitle,
} from "./card";

const COMPONENTS = [
  {
    id: "gilded-button",
    name: "Gilded Button",
    tagline: "Golden depth with tactile precision.",
    craft: <GildedButton>Unlock Access</GildedButton>,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/buttons/gilded-button.tsx",
  },
  {
    id: "forge-button",
    name: "Forge Button",
    tagline: "Machined layers built for confident clicks.",
    craft: <ForgeButton>Deploy Now</ForgeButton>,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/buttons/forge-button.tsx",
  },
  {
    id: "petal-button",
    name: "Petal Button",
    tagline: "Soft highlights with energetic contrast.",
    craft: <PetalButton>Start Creating</PetalButton>,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/buttons/petal-button.tsx",
  },
  {
    id: "pulse-button",
    name: "Pulse Button",
    tagline: "Electric glow with fluid motion.",
    craft: <PulseButton>Launch Flow</PulseButton>,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/buttons/pulse-button.tsx",
  },
];

export function Crafts() {
  return (
    <section id="crafts" aria-labelledby="crafts-heading">
      <Row size="lg" className="lg:hidden" />

      <Row className="lg:border-none">
        <Container className="lg:relative">
          <SectionTitle className="text-sky-500 dark:text-sky-400">
            What I&apos;ve Crafted
          </SectionTitle>
        </Container>
      </Row>

      <Row size="sm" className="lg:hidden" />

      <Row size="lg" className="max-lg:hidden">
        <Container variant="label">
          <ClassLabel>
            font-3xl <AdaptiveValue sm="font-medium" lg="tracking-tighter" />{" "}
            <AdaptiveValue light="text-neutral-800" dark="text-neutral-200" />
          </ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <Heading id="crafts-heading">
            Reusable pieces, built once, used everywhere.
          </Heading>
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
          {COMPONENTS.map((c) => (
            <div
              key={c.id}
              className="odd:border-border odd:after:bg-border even:after:bg-border even:border-border relative border-y first:border-t-0 last:border-b-0 odd:border-r odd:after:absolute odd:after:top-60 odd:after:right-0 odd:after:h-px odd:after:w-[200vw] odd:after:translate-x-1/2 odd:after:content-[''] even:border-l even:after:absolute even:after:top-62 even:after:left-0 even:after:h-px even:after:w-[200vw] even:after:-translate-x-1/2 even:after:content-[''] focus:outline-none max-sm:before:hidden max-sm:after:hidden sm:border-0"
            >
              <Card>
                <CardHeader className="border-border mb-2 border-b sm:border-0">
                  <CardSkeleton>{c.craft}</CardSkeleton>
                </CardHeader>

                <div className="border-border relative border-t py-2 sm:border-0">
                  <div className="relative">
                    <CardTitle>{c.name}</CardTitle>

                    <Link
                      href={c.code}
                      target="_blank"
                      className="group/icon absolute top-0 right-0 -translate-y-1 p-2 max-sm:mr-2"
                      onClick={() =>
                        posthog.capture("craft_code_viewed", {
                          craft_name: c.name,
                          craft_id: c.id,
                          url: c.code,
                        })
                      }
                    >
                      <GithubIcon className="text-neutral-500 duration-300 group-hover/icon:text-neutral-800 dark:text-neutral-400 dark:group-hover/icon:text-neutral-200" />
                    </Link>
                  </div>

                  <CardDescription>{c.tagline}</CardDescription>
                </div>
              </Card>
            </div>
          ))}
        </Container>
      </Row>
    </section>
  );
}
