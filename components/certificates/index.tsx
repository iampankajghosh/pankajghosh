"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { AdaptiveValue, ClassLabel } from "../class-label";
import { Container } from "../container";
import { Heading } from "../heading";
import { ArrowUpRightIcon } from "../icons";
import { Row } from "../row";
import { SectionTitle } from "../section-title";
import {
  Card,
  CardBanner,
  CardContent,
  CardDescription,
  CardHeader,
  CardMetadata,
  CardSkeleton,
  CardTitle,
  OrganizationBadge,
  PreviewImage,
  VerticalSeparator,
} from "./card";
import { CERTIFICATES } from "./data";

export function Certificates() {
  return (
    <section id="certificates" aria-labelledby="certificates-heading">
      <Row size="lg" className="lg:hidden" />

      <Row className="lg:border-none">
        <Container className="lg:relative">
          <SectionTitle className="text-pink-600 dark:text-pink-500">
            What I&apos;ve Earned
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
          <Heading id="certificates-heading">
            Proof of the things I took time to learn.
          </Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>grid grid-cols-1</ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <ul role="list" className="grid grid-cols-1">
            {CERTIFICATES.map((c) => (
              <li
                key={c.id}
                className="border-border border-b last:border-none"
              >
                <Link
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${c.name} from ${c.organization.title}`}
                  className="group block transition-colors duration-150 ease-out last:border-b-0 focus-visible:outline-none motion-reduce:transition-none"
                  onClick={() =>
                    posthog.capture("certificate_link_clicked", {
                      certificate_name: c.name,
                      organization: c.organization,
                      url: c.link,
                    })
                  }
                >
                  <Card className="group-hover:bg-neutral-400/10 dark:group-hover:bg-neutral-600/10">
                    <CardSkeleton>
                      <CardBanner src={c.bannerUrl}>
                        <PreviewImage src={c.previewUrl} />
                      </CardBanner>
                    </CardSkeleton>

                    <CardContent>
                      <CardHeader>
                        <div className="mb-3">
                          <CardTitle>{c.name}</CardTitle>

                          <div className="flex items-center gap-3">
                            <OrganizationBadge org={c.organization} />

                            <VerticalSeparator />

                            <CardMetadata className="text-[13px]">
                              <time>{c.date}</time>
                            </CardMetadata>
                          </div>
                        </div>

                        <ArrowUpRightIcon
                          aria-hidden="true"
                          className="size-5 translate-x-2 text-neutral-600 transition-[rotate,color] duration-300 ease-in-out group-hover:rotate-45 group-hover:text-neutral-800 motion-reduce:transition-none dark:text-neutral-400 dark:group-hover:text-neutral-300"
                        />
                      </CardHeader>

                      <CardDescription className="text-foreground/80">
                        {c.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Row>
    </section>
  );
}
