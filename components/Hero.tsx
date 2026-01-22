"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/manish-mitra/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/manishmitra017",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:manishmitra013@gmail.com",
      label: "Email",
    },
  ];

  const highlights = [
    { label: "CEO Excellence Awards", icon: "🏆" },
    { label: "Gen AI at CBA", icon: "🤖" },
    { label: "4 → 80 Team Growth", icon: "📈" },
    { label: "DORA Specialist", icon: "⚡" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Main Profile Card - Spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-text-primary/5 dark:border-white/5 shadow-card relative overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-400/10 via-coral-400/5 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <HiSparkles className="text-teal-500" />
                Available for opportunities
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-display"
              >
                <span className="text-text-primary dark:text-white">Manish</span>{" "}
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-navy-500 bg-clip-text text-transparent">
                  Mitra
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 mb-6"
              >
                <span className="text-teal-500 font-semibold">AI Leadership</span>
                <span className="mx-3 text-text-muted dark:text-gray-500">•</span>
                <span className="font-medium text-text-primary dark:text-white">Senior Engineering Manager</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed max-w-2xl mb-8"
              >
                Building production{" "}
                <span className="text-text-primary dark:text-white font-medium">Agentic AI systems</span> with
                MCP, OpenAI Agents SDK, LlamaIndex, Google ADK, and Pydantic AI.
                Leading Gen AI innovation at{" "}
                <span className="text-text-primary dark:text-white font-medium">Commonwealth Bank</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 relative z-20"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-navy-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-navy-600 hover:scale-[1.02] active:scale-[0.98] shadow-soft"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-text-primary dark:text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-cream-100 dark:hover:bg-gray-700 border border-text-primary/10 dark:border-white/10 shadow-card"
                >
                  View Experience
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-gradient-to-br from-teal-400/20 via-coral-400/10 to-golden-400/10 rounded-3xl p-2 border border-text-primary/5 relative overflow-hidden shadow-card"
          >
            <div className="relative w-full h-full min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden">
              <img
                src="/images/Profile-picture.jpg"
                alt="Manish Mitra"
                className="w-full h-full object-cover"
              />
              {/* AI Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-text-primary/5 shadow-card"
              >
                <SiOpenai className="text-teal-500 text-2xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights Row - 4 equal cards */}
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-5 border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 transition-all hover:shadow-card-hover group shadow-card"
            >
              <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{highlight.icon}</span>
              <span className="text-text-primary dark:text-white font-medium text-sm">{highlight.label}</span>
            </motion.div>
          ))}

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="lg:col-span-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-text-primary/5 dark:border-white/5 flex items-center justify-center gap-6 shadow-card"
          >
            <span className="text-text-muted dark:text-gray-400 text-sm font-medium hidden sm:block">Connect with me</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-teal-500 transition-colors p-2 rounded-lg hover:bg-teal-400/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-text-muted dark:text-gray-400 hover:text-teal-500 transition-colors"
          >
            <FaArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
