import Image from "next/image";
import { Button } from "../button";
import { Container } from "../container";

function Hero() {
  return (
    <section>
      <div className="border-b border-border">
        <Container className="h-15 flex items-end">
          <span className="text-neutral-300 font-ibm-plex-mono text-xs px-2 select-none mb-1">
            size-35 rounded-full
          </span>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <div className="bg-neutral-100 size-35 rounded-full overflow-hidden mx-2 select-none border border-border">
            <Image
              src="https://res.cloudinary.com/ddws3mapm/image/upload/v1777185344/file_00000000abe472098fec500e0308cd2e_ybdqwz.png"
              draggable={false}
              width={200}
              height={200}
              alt="PFP"
            />
          </div>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-10 flex items-end">
          <span className="text-neutral-300 font-ibm-plex-mono text-xs px-2 select-none mb-1">
            text-4xl font-medium tracking-tighter
          </span>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <h1 className="px-2 text-4xl leading-9 font-medium tracking-tighter">
            Frontend Engineer.
            <br /> Crafting intuitive digital web experiences.
          </h1>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container className="h-10 flex items-end">
          <span className="text-neutral-300 font-ibm-plex-mono text-xs px-2 select-none mb-1">
            text-base text-neutral-600
          </span>
        </Container>
      </div>

      <div className="border-b border-border">
        <Container>
          <p className="px-2 text-base text-neutral-600 mb-3">
            I'm a frontend engineer with 3+ years of experience building modern,
            scalable web apps using Next.js, React, and Tailwind CSS.
          </p>

          <p className="px-2 text-base text-neutral-600 mb-3">
            I enjoy turning ideas into fast, accessible, and polished
            interfaces, with a strong focus on performance and user experience.
          </p>

          <p className="px-2 text-base text-neutral-600">
            <span className="mr-2">
              Always open to interesting projects, collaborations, or a quick
              chat.
            </span>

            <Button className="text-base font-normal">Message me</Button>
          </p>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
