import { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import { useEffect, useState } from "react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <nav className="fixed w-full top-0 z-50 bg-white dark:bg-black backdrop-blur-sm">
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-16 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-red-600">SW</div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-red-600">
            About
          </a>
          <a href="#skills" className="hover:text-red-600">
            Skills
          </a>
          <a href="#projects" className="hover:text-red-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-600">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <BsSun className="w-5 h-5" />
            ) : (
              <BsMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;