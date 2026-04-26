import Image from "next/image";
import Link from "next/link";
import { Container, Pattern } from "../container";

function Projects() {
  return (
    <section>
      <div className="border-b border-border">
        <Container className="h-15 flex items-end">
          <span className="text-neutral-300 font-ibm-plex-mono text-xs px-2 mb-1 select-none">
            text-3xl leading-6
          </span>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <h1 className="px-2 text-3xl leading-8 font-medium tracking-tighter">
            Projects
          </h1>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-8 flex items-end"></Container>
      </div>

      <div className="border-b border-border relative">
        <div className="h-112 w-px bg-border absolute top-0 left-[calc(50%-20px)]" />
        <div className="h-112 w-px bg-border absolute top-0 left-[calc(50%+19px)]" />

        <Container>
          <div className="flex gap-x-10">
            <Card />
            <Card />
          </div>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-8 flex items-end"></Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <div className="flex gap-x-10">
            <Card />
            <Card />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Projects;

export const Card = () => {
  return (
    <Link
      href="/"
      className="bg-background hover:bg-border cursor-pointer block p-2 border-border flex-1"
    >
      <div className="w-full h-45 border border-neutral-200 bg-neutral-100 rounded-md overflow-hidden mb-3">
        <Image
          src="https://res.cloudinary.com/ddws3mapm/image/upload/v1767903409/preview_qzqaxb.png"
          width={200}
          height={180}
          alt="project banner"
          className="object-cover w-full h-full object-top select-none"
          draggable={false}
        />
      </div>

      <h3 className="text-sm font-medium">Project Name</h3>
    </Link>
  );
};
