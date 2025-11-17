"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/manish-mitra/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/manishmitra017",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:manishmitra013@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Picture with animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)",
                    "0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)",
                    "0 0 30px rgba(6, 182, 212, 0.5), 0 0 50px rgba(14, 165, 233, 0.3)",
                    "0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="rounded-full overflow-hidden border-4 border-transparent w-40 h-40 md:w-48 md:h-48 neon-border"
              >
                <img
                  src="/images/Profile-picture.jpg"
                  alt="Manish Mitra"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -right-2 bg-primary-500 p-3 rounded-full"
              >
                <SiOpenai className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-white">Manish </span>
            <span className="gradient-text-animated">Mitra</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            <span className="text-primary-400 font-semibold">AI Leadership</span> |{" "}
            <span className="font-semibold">Senior Engineering Manager</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl mx-auto px-4"
          >
            Building production{" "}
            <span className="text-primary-400 font-semibold">Agentic AI systems</span> with{" "}
            <span className="text-primary-400">MCP, OpenAI Agents SDK, LlamaIndex, Google ADK</span>, and{" "}
            <span className="text-primary-400">Pydantic AI</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              <span className="font-semibold text-white">CEO Excellence Awards</span> winner •{" "}
              Leading Gen AI at{" "}
              <span className="font-semibold text-white">Commonwealth Bank</span>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              Grew team <span className="text-primary-400">4 to 80 members</span> •{" "}
              <span className="text-primary-400">DORA Specialist</span>
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 hover:from-primary-600 hover:via-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-neon hover:shadow-neon-strong overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-strong hover:bg-gray-700/50 text-white px-8 py-3 rounded-lg font-medium transition-all border-2 border-gray-600/50 hover:border-primary-400/50 hover:shadow-glow"
            >
              View Experience
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
