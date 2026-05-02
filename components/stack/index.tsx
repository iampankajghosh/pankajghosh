import { SourceCodeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ClassNameLabel } from "../class-name-label";
import { Container, ContainerFluid } from "../container";
import { Heading } from "../heading";
import { tech } from "./data";

function Stack() {
  return (
    <section>
      <ContainerFluid className="h-15">
        <Container className="flex items-end py-1">
          <ClassNameLabel>text-3xl leading-6</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <Heading>Stack</Heading>
        </Container>
      </ContainerFluid>

      <ContainerFluid className="h-10">
        <Container className="flex items-end py-1">
          <ClassNameLabel>flex items-center gap-2 flex-wrap</ClassNameLabel>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <Container>
          <div className="flex items-center gap-2 flex-wrap px-4 md:px-2 py-2">
            {tech.map((t) => (
              <Link
                href={t.link}
                key={t.id}
                target="_blank"
                className="border border-border rounded-md bg-foreground/4 inset-shadow-sm inset-shadow-black/2 inline-flex items-center gap-1.5 px-2 py-1 cursor-pointer hover:bg-foreground/8 transition-colors duration-150 ease-out"
              >
                <Image src={t.icon} alt="" width={12} height={12} />
                <span className="text-xs font-ibm-plex-mono leading-none">
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
