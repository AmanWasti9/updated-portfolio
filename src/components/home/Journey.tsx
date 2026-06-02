import { motion } from "framer-motion";
import { Section } from "../portfolio/Section";

const timeline = [
  {
    year: "Now",
    title: "Creative Design & Video",
    body: "I’ve been exploring storytelling through motion, design, and product ideas, trying to turn simple concepts into something that feels more alive and expressive.",
  },
  {
    year: "2024",
    title: "Building AI-first Products",
    body: "Worked on projects like Beacon, Cogni AI, and Rate My Professor, experimenting with LLMs and building tools that solve real problems in practical workflows.",
  },
  {
    year: "2023",
    title: "Backend & Cloud Systems",
    body: "Expanded into backend and cloud technologies, working with Node.js, NestJS, Docker, and AWS while building more complete systems.",
  },
  {
    year: "2022",
    title: "Backend & Spring Boot",
    body: "Started diving deeper into backend development and learned Spring Boot at a student level, building a strong foundation in real-world system design basics.",
  },
  {
    year: "2021",
    title: "Getting into Frontend",
    body: "This is when I first started getting interested in frontend development and building things for the web.",
  },
];

export function Journey() {
  return (
    <Section id="journey" label="03 // the journey" bg="dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 md:sticky md:top-[30vh]"
          >
            <h2 className="text-display text-5xl md:text-8xl max-w-4xl">
              my current <span className="text-primary">journey.</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground text-sm md:text-base">
              I’ve recently been exploring creative design and video editing, experimenting with visuals, storytelling, and styles that can bring simple ideas to life in a more engaging way.
            </p>
            <p className="mt-8 max-w-xl text-muted-foreground text-sm md:text-base">
              I’m still learning and improving, focusing on projects that feel meaningful and actually resonate with people.
            </p>
          </motion.div>

          <div className="md:col-span-7 relative">
            <div className="absolute left-[7.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
            <ul className="space-y-10">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative grid grid-cols-[7rem_auto_1fr] gap-6 items-start"
                >
                  <div className="label-mono text-muted-foreground pt-1">
                    {t.year}
                  </div>
                  <div className="relative h-4 w-4 mt-2 bg-primary glow-shadow ring-4 ring-background" />
                  <div>
                    <h3 className="text-display text-2xl md:text-3xl mb-2 text-foreground">
                      {t.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
