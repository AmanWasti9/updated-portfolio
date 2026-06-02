import keycaps from "@/assets/keycaps.png";
import { Header } from "./Header";

import { useEffect } from "react";
import { useTextAnimation } from "@/hooks/useTextAnimation";


export function Hero() {
  const { setRef, play } = useTextAnimation();

  const code = useTextAnimation();
  const craft = useTextAnimation();
  const ship = useTextAnimation();

  useEffect(() => {
    code.play("typewriter");
    craft.play("blur");
    ship.play("reverseScale");
  }, []);

  return (
    <section className="relative min-h-screen bg-background text-foreground flex flex-col justify-between overflow-hidden  mx-auto max-w-7xl px-6 md:px-10">

      {/* keycaps */}
      <div className="absolute right-[-40px] top-16 md:top-24 w-[260px] md:w-[460px] lg:w-[520px] animate-[float_6s_ease-in-out_infinite] z-20 pointer-events-none">
        <img
          src={keycaps}
          alt=""
          aria-hidden
          width={520}
          height={520}
          className="
            w-full h-full
            select-none
            hover:drop-shadow-[0_20px_60px_rgba(255,61,0,0.35)]
            grayscale
            pointer-events-auto
            hover:grayscale-0
            hover:scale-105
            transition-all duration-500 ease-out
          "
        />
      </div>

      {/* headline */}
      <div className="relative z-10 mt-10 pointer-events-none">
        <div className="pointer-events-auto w-fit">
          {/* <div className="label-mono text-primary">▸ SOFTWARE DEVELOPER × UI/UX DESIGNER</div> */}
          {/* <h1 className="text-display text-[7vw] md:text-[10vw] leading-[0.85]">
            code.<br />
            craft.<br />
            <span className="text-primary">ship.</span>
          </h1> */}
          {/* CODE */}
          <h1 className="text-display text-[7vw] md:text-[10vw] leading-[0.85]">
            {"code.".split("").map((ch, i) => (
              <span key={i} ref={code.setRef} className="inline-block">
                {ch}
              </span>
            ))}
          </h1>

          {/* CRAFT */}
          <h1 className="text-display text-[7vw] md:text-[10vw] leading-[0.85]">
            {"craft.".split("").map((ch, i) => (
              <span key={i} ref={craft.setRef} className="inline-block">
                {ch}
              </span>
            ))}
          </h1>

          {/* SHIP */}
          <h1 className="text-display text-primary text-[7vw] md:text-[10vw] leading-[0.85]">
            {"ship.".split("").map((ch, i) => (
              <span key={i} ref={ship.setRef} className="inline-block">
                {ch}
              </span>
            ))}
          </h1>
          <p className="mt-10 max-w-lg text-sm md:text-base text-muted-foreground">
            I design and build digital products end to end,
            from pixel-perfect interfaces to the systems that power them.
          </p>
        </div>
        <div className="mt-8 flex gap-3 pointer-events-auto w-fit">
          <a href="#projects" className="bg-primary text-primary-foreground px-6 py-3 label-mono font-bold hover:bg-white transition">
            ▸ VIEW PROJECTS
          </a>
          <a href="#contact" className="border border-border px-6 py-3 label-mono font-bold hover:border-primary hover:text-primary transition">
            ▸ GET IN TOUCH
          </a>
        </div>
      </div>

      <div className="flex justify-between items-end pb-6 label-mono opacity-60">
        <span>↓ SCROLL TO ENTER</span>
        <span>CTRL SHIFT ACTION</span>
      </div>

    </section>
  );
}


