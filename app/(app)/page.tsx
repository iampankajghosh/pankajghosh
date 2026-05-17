import { Certificates } from "@/components/certificates";
import { Crafts } from "@/components/crafts";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-14">
        <Hero />
        <Crafts />
        <Projects />
        <Experience />
        <Stack />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}
