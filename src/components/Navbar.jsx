import { useState, useEffect, useContext } from "react";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 md:px-16 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-red-600">
            AW
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-600"
              >
                {item}
              </a>
            ))} */}

            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  const section = document.getElementById(item.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 border border-transparent hover:border-[#ea384c]"
            >
              {darkMode ? (
                <BsSun className="w-5 h-5" />
              ) : (
                <BsMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <BsX /> : <BsList />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer (Separate from Navbar) */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-zinc-800 shadow-lg p-6 flex flex-col gap-6 z-[100]"
        >
          {/* Close Button */}
          <button
            className="self-end text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <BsX />
          </button>

          {/* Menu Links */}
          {/* {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))} */}

          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-red-600 cursor-pointer"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const section = document.getElementById(item.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <BsSun className="w-6 h-6" />
            ) : (
              <BsMoon className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
