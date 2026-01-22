"use client";

import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-text-primary/10 dark:border-white/10 shadow-card hover:shadow-card-hover transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <FiMoon className="w-5 h-5 text-navy-500" />
        ) : (
          <FiSun className="w-5 h-5 text-golden-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
