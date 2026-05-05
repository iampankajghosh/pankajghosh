"use client";

import { SourceCodeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { SectionLabel } from "../section-label";
import { tech } from "./data";

function Stack() {
  return (
    <section className="relative">
      <ContainerFluid className="h-15 md:hidden" />

      <ContainerFluid className="md:pointer-events-none md:absolute md:-z-1 md:w-full md:border-none">
        <Container className="relative">
          <SectionLabel className="text-sky-500 md:absolute md:top-23 md:-left-24.5 md:-rotate-90 dark:text-sky-400">
            Tech Stack
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
          <Heading>Tools I reach for without thinking twice.</Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>flex items-center gap-2 flex-wrap</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <div className="flex flex-wrap items-center gap-2 px-4 py-2 md:px-2">
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
                <Image
                  src={t.icon}
                  alt=""
                  width={12}
                  height={12}
                  draggable={false}
                  className="pointer-events-none select-none"
                />
                <span className="font-ibm-plex-mono text-xs leading-none">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
}

export default Stack;
