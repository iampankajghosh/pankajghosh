"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { Badge } from "./badge";
import { AdaptiveValue, ClassLabel } from "./class-label";
import { Container } from "./container";
import { Heading } from "./heading";
import { Row } from "./row";
import { SectionTitle } from "./section-title";

export const TECH = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: "react",
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev/",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/",
  },
  {
    id: "nodejs",
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/",
  },
  {
    id: "express",
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    link: "https://expressjs.com/",
  },
  {
    id: "html5",
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com/",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
  },
  {
    id: "css3",
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "motion",
    name: "Motion",
    icon: "https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png",
    link: "https://www.motion.dev/",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    link: "https://redux.js.org/",
  },
  {
    id: "react-router",
    name: "React Router",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    link: "https://reactrouter.com/",
  },
  {
    id: "zod",
    name: "Zod",
    icon: "https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg",
    link: "https://zod.dev/",
  },
  {
    id: "vite",
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    link: "https://vitejs.dev/",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    link: "https://www.markdownguide.org/",
  },
  {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    link: "https://vercel.com/",
  },
  {
    id: "sentry",
    name: "Sentry",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg",
    link: "https://sentry.io/",
  },
  {
    id: "posthog",
    name: "PostHog",
    icon: "https://dl.svgcdn.com/png/logos/posthog-icon-800.png",
    link: "https://posthog.com/",
  },
];

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
          {TECH.map((t) => (
            <Link
              href={t.link}
              key={t.id}
              target="_blank"
              onClick={() =>
                posthog.capture("stack_tech_link_clicked", {
                  tech_name: t.name,
                  url: t.link,
                })
              }
            >
              <Badge className="hover:bg-neutral-200/90 dark:hover:bg-neutral-800/90">
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

                {t.name}
              </Badge>
            </Link>
          ))}
        </Container>
      </Row>
    </section>
  );
}
