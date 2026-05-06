import Image from "next/image";
import Link from "next/link";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { ArrowUpRightIcon } from "../icons";
import { SectionLabel } from "../section-label";
import {
  Card,
  CardBanner,
  CardContent,
  CardDescription,
  CardHeader,
  CardSkeleton,
  CardTitle,
} from "./card";
import { certificates } from "./data";

export function Certificates() {
  return (
    <section className="relative">
      <ContainerFluid className="h-15 md:hidden" />

      <ContainerFluid className="md:pointer-events-none md:absolute md:-z-1 md:w-full md:border-none">
        <Container className="md:relative">
          <SectionLabel className="text-fuchsia-500 md:absolute md:top-29.25 md:-left-30.75 md:-rotate-90 dark:text-fuchsia-400">
            What I&apos;ve Earned
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
          <Heading>Proof of the things I took time to learn.</Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>grid grid-cols-1 md:grid-cols-2</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <div className="grid grid-cols-1">
            {certificates.map((c) => (
              <Link
                key={c.id}
                href={c.link}
                target="_blank"
                className="border-border group block border-b last:border-b-0"
              >
                <Card className="group-hover:bg-neutral-400/10 dark:group-hover:bg-neutral-600/10">
                  <CardSkeleton>
                    <CardBanner>
                      <Image
                        src={c.banner}
                        alt=""
                        className="rounded-xs object-cover object-top"
                        draggable={false}
                        fill
                        sizes="179px"
                      />
                    </CardBanner>
                  </CardSkeleton>
                  <CardContent>
                    <CardHeader>
                      <div>
                        <CardTitle>{c.name}</CardTitle>

                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            <div className="relative size-3 overflow-hidden">
                              <Image
                                src={c.organization.logo}
                                alt=""
                                fill
                                sizes="12px"
                                draggable={false}
                                className="pointer-events-none object-cover"
                              />
                            </div>

                            <CardDescription className="text-[13px]">
                              {c.organization.title}
                            </CardDescription>
                          </div>

                          <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

                          <CardDescription className="text-[13px]">
                            {c.date}
                          </CardDescription>
                        </div>
                      </div>

                      <ArrowUpRightIcon className="size-5 translate-x-2 text-neutral-600 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                    </CardHeader>

                    <CardDescription className="text-foreground/80">
                      {c.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
}
