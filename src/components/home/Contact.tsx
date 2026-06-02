import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="bg-background text-foreground border-t border-border">
      <div className="px-6 md:px-12 pt-8 label-mono opacity-70 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-primary" />
        CONNECTION ESTABLISHED
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-6">
        <motion.div 
          className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-display text-5xl md:text-8xl">
            let's build<br />
            <span className="text-primary">the future.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-8 label-mono text-lg">
            {[
              ["GITHUB", "https://github.com/AmanWasti9"],
              ["LINKEDIN", "https://www.linkedin.com/in/aman-wasti/"],
              ["EMAIL", "mailto:amanwasti5@gmail.com"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                target="_blank"
                className="underline underline-offset-4 hover:text-primary transition"
              >
                {l}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="mx-auto max-w-2xl px-6 md:px-10 py-24 md:py-32"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            Whether it's a startup idea,
            a product redesign, or a creative project,
            I'm always excited to collaborate and build
            something meaningful.
          </p>
          <br />
          <p className="text-lg">
            Currently available for freelance,
            full-time opportunities, and creative collaborations.
          </p>
        </motion.div>

      </div>
      <div className="border-t border-border px-6 md:px-12 py-6 label-mono opacity-60 flex flex-wrap justify-between gap-2">
        <span>© 2026 // Syed Amanullah Wasti. All rights reserved.
        </span>
        <span>CTRL SHIFT ACTION</span>
      </div>
    </section>
  );
}
