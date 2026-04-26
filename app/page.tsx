import Blogs from "@/components/blog";
import Experience from "@/components/experience";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Stack />
      <Blogs />
    </div>
  );
}
