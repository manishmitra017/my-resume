"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCV = () => {
    try {
      const { downloadResumeAsPDF } = require("@/utils/downloadResume");
      downloadResumeAsPDF();
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "manishmitra013@gmail.com",
      href: "mailto:manishmitra013@gmail.com",
      color: "bg-coral-400",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Melbourne, Victoria, Australia",
      href: null,
      color: "bg-teal-400",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/manish-mitra",
      href: "https://www.linkedin.com/in/manish-mitra/",
      color: "bg-navy-500",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "github.com/manishmitra017",
      href: "https://github.com/manishmitra017",
      color: "bg-golden-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white mb-4 font-display">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-teal-400 to-navy-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-text-secondary dark:text-gray-300 text-lg max-w-2xl">
            I&apos;m always open to discussing new opportunities, collaborations,
            or just connecting with fellow professionals in AI and engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => info.href && window.open(info.href, "_blank")}
                className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-2xl border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 hover:shadow-card-hover transition-all duration-300 shadow-card ${info.href ? "cursor-pointer" : ""
                  }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${info.color} text-white mb-4`}
                >
                  {info.icon}
                </div>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-1">{info.label}</p>
                <p className="text-text-primary dark:text-white font-medium text-sm break-all group-hover:text-teal-500 transition-colors">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-teal-400/10 via-coral-400/5 to-golden-400/10 dark:from-teal-400/20 dark:via-coral-400/10 dark:to-golden-400/20 backdrop-blur-sm p-8 rounded-2xl border border-text-primary/5 dark:border-white/5 flex flex-col justify-center relative overflow-hidden group shadow-card"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-coral-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-text-secondary dark:text-gray-300 mb-6">
              Whether you have a project in mind or just want to chat about AI
              and technology, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:manishmitra013@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-navy-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-navy-600"
              >
                Send Email
                <FaArrowRight size={14} />
              </motion.a>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-text-primary dark:text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-cream-100 dark:hover:bg-gray-700 border border-text-primary/10 dark:border-white/10 shadow-card"
              >
                <FaDownload size={14} />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-text-primary/10 dark:border-white/10"
        >
          <p className="text-text-muted dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Manish Mitra. Built with{" "}
            <span className="text-text-secondary dark:text-gray-300">Next.js</span>,{" "}
            <span className="text-text-secondary dark:text-gray-300">TypeScript</span>, and{" "}
            <span className="text-text-secondary dark:text-gray-300">Tailwind CSS</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
