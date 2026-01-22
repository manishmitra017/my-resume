"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/community-projects/" },
    { name: "Articles", href: "/articles/" },
    { name: "Hobbies", href: "/hobbies/" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleDownloadCV = () => {
    try {
      const { downloadResumeAsPDF } = require("@/utils/downloadResume");
      downloadResumeAsPDF();
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-text-primary/10 dark:border-white/10 shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold group font-display tracking-tight"
          >
            <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-navy-500 bg-clip-text text-transparent">
              MM
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-text-secondary dark:text-gray-300 hover:text-text-primary dark:hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/50 dark:hover:bg-white/10"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={handleDownloadCV}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="ml-2 inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <FaDownload size={12} />
              CV
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="ml-2"
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary dark:text-gray-300 hover:text-text-primary dark:hover:text-white p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-text-primary/10 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-text-secondary dark:text-gray-300 hover:text-text-primary dark:hover:text-white block px-4 py-3 rounded-lg text-base font-medium hover:bg-cream-200/50 dark:hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  handleDownloadCV();
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-500 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors mt-2"
              >
                <FaDownload size={14} />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
