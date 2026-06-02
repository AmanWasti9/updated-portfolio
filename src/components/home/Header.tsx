import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        padding: isScrolled ? "24px 24px" : "24px 48px",
        backgroundColor: isScrolled ? "rgba(0,0,0,0.6)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderRadius: isScrolled ? "999px" : "0px",
        width: isScrolled ? "80%" : "100%",
        y: isScrolled ? 0 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-between items-center
        ${isScrolled
          ? "top-6 border border-border"
          : "top-0 border-transparent"
        }
      `}
    >
      {/* Brand */}
      <motion.span
        animate={{ scale: isScrolled ? 0.9 : 1 }}
        className="label-mono text-primary font-bold"
      >
        SYSTEM READY // V1.0.0
      </motion.span>

      {/* Nav */}
      <motion.nav
        animate={{
          gap: isScrolled ? "24px" : "32px",
          fontSize: isScrolled ? "12px" : "14px",
        }}
        className="hidden md:flex label-mono opacity-90"
      >
        <a href="#skills" className="hover:text-primary transition">SKILLS</a>
        <a href="#projects" className="hover:text-primary transition">PROJECTS</a>
        <a href="#journey" className="hover:text-primary transition">JOURNEY</a>
        <a href="#contact" className="hover:text-primary transition">CONTACT</a>
      </motion.nav>
    </motion.header>
  );
}