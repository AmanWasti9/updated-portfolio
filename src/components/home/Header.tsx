import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
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
          className="hidden md:block label-mono text-primary font-bold -ml-6 md:ml-0 mt-6 md:mt-0"
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

        {
          isScrolled ? (
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              className="absolute left-1/2 -translate-x-1/2 md:hidden font-mono text-lg text-primary font-bold"
            >
              MENU
            </motion.button>
          ) : (
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden font-mono text-lg text-primary font-bold mt-6 ml-auto mr-auto"
            >
              MENU
            </motion.button>
          )
        }

      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-primary font-mono text-lg font-bold p-4"
            >
              CLOSE
            </button>
            <nav className="flex flex-col items-center gap-12 text-5xl font-mono text-foreground font-bold">
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">SKILLS</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">PROJECTS</a>
              <a href="#journey" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">JOURNEY</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">CONTACT</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}