"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { GithubIcon } from "../icons";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import { ArchiveStack } from "./archive-stack";
import {
  Card,
  CardDescription,
  CardHeader,
  CardSkeleton,
  CardTitle,
} from "./card";
import { DocumentFolder } from "./document-folder";
import { DocumentTray } from "./document-tray";
import { ProjectFolder } from "./project-folder";

const COMPONENTS = [
  {
    id: "document-folder",
    name: "Document Folder",
    tagline: "Documents with a smooth 3D reveal.",
    illustration: <DocumentFolder />,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/illustrations/document-folder.tsx",
  },
  {
    id: "document-tray",
    name: "Document Tray",
    tagline: "Layered documents with playful motion.",
    illustration: <DocumentTray />,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/illustrations/document-tray.tsx",
  },
  {
    id: "project-folder",
    name: "Project Folder",
    tagline: "Project files with subtle depth.",
    illustration: <ProjectFolder />,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/illustrations/project-folder.tsx",
  },
  {
    id: "archive-stack",
    name: "Archive Stack",
    tagline: "Stacked records with gentle motion.",
    illustration: <ArchiveStack />,
    code: "https://github.com/iampankajghosh/pankajghosh.in/tree/main/components/illustrations/archive-stack.tsx",
  },
];

export function Illustrations() {
  return (
    <section id="crafts" aria-labelledby="crafts-heading">
      <Row size="lg" className="lg:hidden" />

      <Row className="lg:border-none">
        <Container className="lg:relative">
          <SectionTitle className="text-pink-600 dark:text-pink-500">
            What I&apos;ve Drawn
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
            UI sketches, drawn entirely in code.
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
                  <CardSkeleton>{c.illustration}</CardSkeleton>
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
                      aria-label={`View ${c.name} source code on GitHub`}
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
