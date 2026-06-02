import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Stats } from "@/components/home/Stats";
import { Journey } from "@/components/home/Journey";
import { Contact } from "@/components/home/Contact";
import { Header } from "@/components/home/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Amanullah Wasti — Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of a software developer building high-performance products.",
      },
      { property: "og:title", content: "Syed Amanullah Wasti — Software Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of a software developer building high-performance products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Stats /> */}
      <Journey />
      <Contact />
    </main>
  );
}

