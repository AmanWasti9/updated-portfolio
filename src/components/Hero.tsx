import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-start px-5 md:px-16 bg-white dark:bg-black overflow-hidden text-center md:text-left">
      <AnimatedBackground />
      <div className="z-10 max-w-3xl">
        <p className="text-[#ea384c] font-mono mb-4 title-animation">
          &lt;hello world /&gt;
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-400 pb-4">
          Syed Amanullah Wasti
        </h1>

        <div className="text-xl md:text-2xl text-[rgba(115, 115, 115, 1)] dark:text-[rgba(163,163,163,1)] h-[60px] font-mono">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Aspiring AI Engineer",
              2000,
              "Backend Specialist",
              2000,
              "Problem Solver",
              2000,
            ]}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <p className="text-lg mb-8 max-w-2xl subtitle-animation text-[rgba(115, 115, 115, 1)] dark:text-[rgba(163,163,163,1)]">
          Crafting exceptional digital experiences through innovative technology
          and elegant design, transforming complex challenges into seamless
          solutions.
        </p>
        <div className="flex gap-4 button-animation">
          <a
            href="#projects"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full md:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-transparent dark:to-zinc-800 to-zinc-100
                px-6 py-2 border dark:border-zinc-800 text-black dark:text-white 
                rounded-lg dark:hover:border-[#ea384c] transition-all duration-300 text-sm font-medium w-full md:w-auto"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 mt-8 social-animation">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
          >
            <Github className="w-5 h-5 hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
          >
            <Linkedin className="w-5 h-5 hover:scale-110" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
          >
            <Twitter className="w-5 h-5 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
