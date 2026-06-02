import { Code2, Package, Palette } from "lucide-react";
import { Section } from "../portfolio/Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" label="02 // ABOUT" bg="dark">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-[3px] w-16 bg-primary mb-6" />


            <h2 className="text-display text-5xl md:text-8xl max-w-4xl">
              curious by nature, <span className="text-primary"> builder by craft.</span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-8 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-xl">
              I'm a software engineer who believes the line between product and poetry is thinner than people think. I spend my days writing TypeScript, sketching layouts, and obsessing over the small moments that make a product feel <span className="text-primary italic">alive.</span>
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl pt-4">
              From databases to design systems, I work across the stack and love collaborating with teams who care as much about the comma before a period as the architecture behind it.
            </p>

            {/* <div className="flex flex-wrap gap-8 md:gap-16 pt-12 items-center">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="font-script text-3xl md:text-4xl tracking-wide">Product</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="font-script text-3xl md:text-4xl tracking-wide">Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="font-script text-3xl md:text-4xl tracking-wide">Design</span>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </Section >
  );
}
