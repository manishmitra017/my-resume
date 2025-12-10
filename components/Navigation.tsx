"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "personal-projects", "certifications", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Personal Projects", href: "#personal-projects" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "/community-projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl shadow-2xl shadow-primary-500/10 border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="gradient-text-animated">Manish Mitra</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg border border-primary-400/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                );
              })}
              <motion.button
                onClick={async () => {
                  try {
                    const { downloadResumeAsPDF } = await import("@/utils/downloadResume");
                    await downloadResumeAsPDF();
                  } catch (error) {
                    console.error('Error downloading CV:', error);
                  }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-4 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 hover:from-primary-600 hover:via-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all shadow-neon hover:shadow-neon-strong overflow-hidden group"
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={async () => {
                try {
                  const { downloadResumeAsPDF } = await import("@/utils/downloadResume");
                  await downloadResumeAsPDF();
                  setIsOpen(false);
                } catch (error) {
                  console.error('Error downloading CV:', error);
                  setIsOpen(false);
                }
              }}
              className="bg-primary-500 hover:bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center w-full"
            >
              Download CV
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
