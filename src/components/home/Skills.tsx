import { Section } from "@/components/portfolio/Section";
import { motion } from "framer-motion";

export function Skills() {
  const stacks = [
    {
      label: "FULL STACK ENGINEERING",
      title: "building scalable applications.",
      desc: "I develop end-to-end web applications, REST APIs, and enterprise solutions using modern frontend and backend technologies. From database design to deployment, I focus on building reliable software that solves real-world problems.",
      items: [
        ["LANGUAGES", "Java · JavaScript · TypeScript · SQL"],
        ["FRONTEND", "React.js · Next.js · Angular · React Native · HTML · CSS"],
        ["BACKEND", "Spring Boot · Node.js · NestJs · REST APIs · JWT · Hibernate/JPA"],
        ["DATABASES", "MySQL · PostgreSQL · MongoDB · Firebase Firestore · Supabase"],
        ["TOOLS", "Git · GitHub · Docker · Postman"],
        ["CLOUD", "Firebase · Vercel · AWS (EC2, S3 basics)"],
      ],
    },

  ];
  return (
    <Section id="skills" label="01 // CAPABILITIES" bg="dark">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="ghost-text">SKILLS</div>
        <div className="relative z-10">
          <div className="h-[3px] w-16 bg-primary mb-6" />
          <div className="flex md:flex-row flex-col md:items-center md:justify-between">
            <h2 className="text-display text-5xl md:text-8xl max-w-4xl">
              turning ideas <span className="text-primary">into products.</span>
            </h2>
            {/* <p className="mt-8 max-w-lg text-muted-foreground font-mono text-sm md:text-base">
              I specialize in building modern web applications using React and Spring Boot.
              From crafting responsive user interfaces to developing scalable backend services,
              I enjoy turning ideas into production-ready software.
            </p> */}
          </div>
          <div className="mt-16 grid gap-6">
            {stacks.map((s, index) => (
              <motion.article 
                key={s.label} 
                className="brutal-card p-8 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="label-mono text-primary mb-4">▸ {s.label}</div>
                <h3 className="text-display text-3xl md:text-5xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{s.desc}</p>
                <ul className="divide-y divide-border border-t border-border">
                  {s.items.map(([k, v]) => (
                    <li key={k} className="grid grid-cols-[110px_1fr] gap-4 py-3 text-sm">
                      <span className="label-mono text-primary">{k}</span>
                      <span className="font-mono opacity-90">{v}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl">
            {[

              { n: "12+", l: "PROJECTS BUILT" },
              { n: "2+", l: "YEARS CONSISTENT CODING" },
              { n: "15+", l: "TECHNOLOGIES USED" },

            ].map((s, i) => (
              <motion.div 
                key={s.l} 
                className="border-l border-border pl-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-display text-3xl md:text-5xl text-primary">{s.n}</div>
                <div className="label-mono mt-2 opacity-70">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
