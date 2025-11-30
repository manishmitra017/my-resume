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
            className="lg:col-span-8 bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-gray-700/50 relative overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <HiSparkles className="text-primary-400" />
                Available for opportunities
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
              >
                <span className="text-white">Manish</span>{" "}
                <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Mitra
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-6"
              >
                <span className="text-primary-400 font-semibold">AI Leadership</span>
                <span className="mx-3 text-gray-600">•</span>
                <span className="font-medium">Senior Engineering Manager</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8"
              >
                Building production{" "}
                <span className="text-white font-medium">Agentic AI systems</span> with
                MCP, OpenAI Agents SDK, LlamaIndex, Google ADK, and Pydantic AI.
                Leading Gen AI innovation at{" "}
                <span className="text-white font-medium">Commonwealth Bank</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 bg-gray-700/50 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-700 border border-gray-600/50"
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
            className="lg:col-span-4 bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl p-2 border border-gray-700/50 relative overflow-hidden"
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
                className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50"
              >
                <SiOpenai className="text-primary-400 text-2xl" />
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
              className="lg:col-span-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-gray-600/50 transition-all hover:bg-gray-800/60 group"
            >
              <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{highlight.icon}</span>
              <span className="text-white font-medium text-sm">{highlight.label}</span>
            </motion.div>
          ))}

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="lg:col-span-12 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 flex items-center justify-center gap-6"
          >
            <span className="text-gray-500 text-sm font-medium hidden sm:block">Connect with me</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-700/50"
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
            className="text-gray-500 hover:text-primary-400 transition-colors"
          >
            <FaArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
