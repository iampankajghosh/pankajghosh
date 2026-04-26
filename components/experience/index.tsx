import { SourceCodeIcon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";

function Experience() {
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
            Experience
          </h1>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-8 flex items-end"></Container>
      </div>

      <div className="border-b border-border relative">
        <Container>
          <Card />
        </Container>
      </div>
      <div className="border-b border-border relative">
        <Container>
          <Card />
        </Container>
      </div>
      <div className="border-b border-border relative">
        <Container>
          <Card />
        </Container>
      </div>
    </section>
  );
}

export default Experience;

export const Card = () => {
  return (
    <div className="px-2 py-2 hover:bg-neutral-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="size-5 bg-neutral-100 border border-neutral-200">
          <Image
            src="https://media.licdn.com/dms/image/v2/C510BAQEFq9G1hU3-oA/company-logo_100_100/company-logo_100_100/0/1630571378203?e=1778716800&v=beta&t=9-OsF0Y_y5649wXwKsqHJ3dZ26DPC6yDQr9rxvYJovg"
            width={50}
            height={50}
            alt="company logo"
            className="select-none w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <p className="font-medium tracking-tighter">
          Klizo Solutions Pvt. Ltd.
        </p>

        <div className="relative flex items-center justify-center ml-2">
          <span className="size-2 bg-blue-500/30 inline-block animate-ping" />
          <span className="size-1.5 bg-blue-500 inline-block absolute" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="size-5 bg-neutral-50 flex items-center justify-center border border-neutral-200">
          <SourceCodeIcon />
        </div>
        <p className="tracking-tighter text-sm">Frontend Developer</p>
      </div>

      <div className="flex items-center gap-3 text-xs text-neutral-500 px-7 mb-5">
        <p>Full-Time</p>
        <span className="inline-block h-4 w-px bg-neutral-200" />
        <p>2024 - 2026</p>
        <span className="inline-block h-4 w-px bg-neutral-200" />
        <p>1Y 6M</p>
      </div>

      <div className="flex items-center gap-2 mb-1 px-7">
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          NextJS
        </span>
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          React
        </span>
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          TailwindCSS
        </span>
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          Motion
        </span>
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          JavaScript
        </span>
        <span className="text-[10px] text-sky-600 bg-sky-100 px-2 py-1 border border-sky-300 leading-none uppercase tracking-wider border-dashed">
          TypeScript
        </span>
      </div>
    </div>
  );
};
