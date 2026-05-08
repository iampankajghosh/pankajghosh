"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import { tech } from "./data";

export function Stack() {
  return (
    <section id="stack">
      <Row size="lg" className="md:hidden" />

      <Row className="md:border-none">
        <Container className="md:relative">
          <SectionTitle className="text-fuchsia-500 dark:text-fuchsia-400">
            Tech Stack
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
          <Heading>Tools I reach for without thinking twice.</Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>flex flex-wrap items-center</ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container className="flex flex-wrap items-center gap-2 px-2 py-2 max-sm:px-4">
          {tech.map((t) => (
            <Link
              href={t.link}
              key={t.id}
              target="_blank"
              className="border-border bg-foreground/4 hover:bg-foreground/8 inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 inset-shadow-sm inset-shadow-black/2 transition-colors duration-150 ease-out"
              onClick={() =>
                posthog.capture("stack_tech_link_clicked", {
                  tech_name: t.name,
                  url: t.link,
                })
              }
            >
              <div className="size-3">
                <Image
                  src={t.icon}
                  width={12}
                  height={12}
                  alt=""
                  draggable={false}
                  className="object-cover select-none"
                />
              </div>

              <span className="font-ibm-plex-mono text-xs leading-none">
                {t.name}
              </span>
            </Link>
          ))}
        </Container>
      </Row>
    </section>
  );
}
