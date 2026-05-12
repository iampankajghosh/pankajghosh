import Image from "next/image";
import Link from "next/link";
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
    <section id="certificates">
      <Row size="lg" className="md:hidden" />

      <Row className="md:border-none">
        <Container className="md:relative">
          <SectionTitle className="text-pink-600 dark:text-pink-500">
            What I&apos;ve Earned
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
          <Heading>Proof of the things I took time to learn.</Heading>
        </Container>
      </Row>

      <Row size="md">
        <Container variant="label">
          <ClassLabel>grid grid-cols-1</ClassLabel>
        </Container>
      </Row>

      <Row>
        <Container>
          <div className="grid grid-cols-1">
            {CERTIFICATES.map((c) => (
              <Link
                key={c.id}
                href={c.link}
                target="_blank"
                className="border-border group block border-b last:border-b-0"
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
                            {c.date}
                          </CardMetadata>
                        </div>
                      </div>

                      <ArrowUpRightIcon className="size-5 translate-x-2 text-neutral-600 transition-[rotate,color] duration-300 ease-in-out group-hover:rotate-45 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-300" />
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
      </Row>
    </section>
  );
}
