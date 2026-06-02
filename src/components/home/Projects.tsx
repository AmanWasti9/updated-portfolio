import { Section } from "@/components/portfolio/Section";
import { motion } from "framer-motion";
import beaconImg from "@/assets/projects/beacon.jpeg";
import nexocardImg from "@/assets/projects/nexocard.jpeg";
import pantryImg from "@/assets/projects/pantry.jpeg";
import pacerImg from "@/assets/projects/pacer2.jpg";
import warqImg from "@/assets/projects/warq.jpeg";
import rateprofImg from "@/assets/projects/rateprof.jpeg";
import cogniImg from "@/assets/projects/cogni.jpeg";

export function Projects() {
  const projects = [
    {
      title: "Beacon",
      tag: "Bloging Platform",
      desc: "Modern AI-powered blogging platform where users create, publish and engage with content through an interactive social experience.",
      stack: ["React.js", "Spring Boot", "MySQL"],
      img: beaconImg,
      role: "ENGINEERING + UI",
    },
    // {
    //   title: "NexoCard",
    //   tag: "EdTech",
    //   desc: "Educational learning platform designed to simplify studying with interactive resources and smart learning tools.",
    //   img: nexocardImg,
    //   stack: ["React", "Node", "MongoDB"],
    // },
    // {
    //   title: "Pantry Tracker",
    //   tag: "AI · Productivity",
    //   desc: "Smart pantry management system that tracks inventory, manages stock, and suggests recipes through an AI assistant.",
    //   img: pantryImg,
    //   stack: ["Next.js", "Firebase", "Gemini"],
    // },
    {
      title: "Pacer",
      tag: "E-commerce",
      desc: "Sleek and responsive e-commerce platform built for seamless online shopping and product management experiences.",
      img: pacerImg,
      stack: ["React.js", "Supabase", "Framer"],
      role: "ENGINEERING + UI",

    },
    {
      title: "Warq",
      tag: "Agency",
      desc: "Modern software agency website showcasing web development, UI/UX design, branding, and digital product services.",
      img: warqImg,
      stack: ["React.js", "TypeScript", "Supabase"],
      role: "Engineering + UI/UX Designer",

    },
    // {
    //   title: "AI Rate My Professor",
    //   tag: "AI · EdTech",
    //   desc: "Student-focused platform to review, compare and rate professors based on teaching quality and experience.",
    //   img: rateprofImg,
    //   stack: ["Next.js", "Pinecone", "OpenAI"],
    // },
    {
      title: "Cogni AI",
      tag: "EduTech Platform · AI Learning",
      desc: "AI-powered educational platform that helps students get instant answers, explanations and personalized learning support.",
      img: cogniImg,
      stack: ["Next.js", "LangChain", "Supabase"],
      role: "Frontend Dev",

    },
  ];
  return (
    <Section id="projects" label="02 // SELECTED PROJECTS" bg="black">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12  mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-display text-5xl md:text-8xl">
          the <span className="text-primary">archive.</span>
        </h2>
        <p className="label-mono opacity-70 max-w-xs">
          ▸ A small selection. Code repos & case studies on request.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6  mx-auto max-w-7xl px-6 md:px-10">
        {projects.map((p, index) => (
          <motion.article 
            key={p.title} 
            className="brutal-card overflow-hidden flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            {p.img ? (
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 
              group-hover:scale-105
              transition-all duration-500 ease-out"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-primary relative overflow-hidden flex items-center justify-center">
                <div className="text-display text-primary-foreground text-7xl md:text-9xl opacity-90">
                  {p.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_46%,rgba(0,0,0,0.15)_50%,transparent_54%)]" />
              </div>
            )}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3 label-mono opacity-80">
                <span>▸ {p.tag}</span>
                <span className="text-primary">{p.role}</span>
              </div>
              <h3 className="text-display text-2xl md:text-3xl mb-3">{p.title}</h3>
              <p className="text-sm mb-6 text-muted-foreground flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 label-mono">
                {p.stack.map((s) => (
                  <span key={s} className="border border-border px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
