"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { Badge } from "../badge";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import { TECH } from "./data";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-heading">
      <Row size="lg" className="lg:hidden" />

      <Row className="lg:border-none">
        <Container className="lg:relative">
          <SectionTitle className="text-fuchsia-500 dark:text-fuchsia-400">
            Tech Stack
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
          <Heading id="stack-heading">
            Tools I reach for without thinking twice.
          </Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>flex flex-wrap items-center</ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container className="flex flex-wrap items-center gap-2 px-2 py-2 max-sm:px-4">
          {TECH.map((t) => (
            <Link
              key={t.id}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${t.name} website in a new tab`}
              onClick={() =>
                posthog.capture("stack_tech_link_clicked", {
                  tech_name: t.name,
                  url: t.link,
                })
              }
            >
              <Badge className="hover:bg-neutral-200/90 dark:hover:bg-neutral-800/90">
                <div className="size-3" aria-hidden="true">
                  <Image
                    src={t.icon.light}
                    width={12}
                    height={12}
                    alt=""
                    draggable={false}
                    sizes="12px"
                    className="h-full w-full object-contain select-none dark:hidden"
                  />

                  <Image
                    src={t.icon.default}
                    width={12}
                    height={12}
                    alt=""
                    draggable={false}
                    sizes="12px"
                    className="hidden h-full w-full object-contain select-none dark:block"
                  />
                </div>

                <span className="leading-none">{t.name}</span>
              </Badge>
            </Link>
          ))}
        </Container>
      </Row>
    </section>
  );
}
