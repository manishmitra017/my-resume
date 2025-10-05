"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      value: "manishmitra013@gmail.com",
      href: "mailto:manishmitra013@gmail.com",
    },
    {
      icon: <FaPhone size={24} />,
      label: "Phone",
      value: "+61 451878193",
      href: "tel:+61451878193",
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: "Location",
      value: "Melbourne, Victoria, Australia",
      href: null,
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/manish-mitra",
      href: "https://www.linkedin.com/in/manish-mitra/",
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      value: "github.com/manishmitra017",
      href: "https://github.com/manishmitra017",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just connecting with fellow professionals in AI and engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: info.href ? 1.03 : 1 }}
                className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all ${
                  info.href ? "cursor-pointer" : ""
                }`}
                onClick={() => info.href && window.open(info.href, "_blank")}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-primary-400">{info.icon}</div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="mailto:manishmitra013@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/50"
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Manish Mitra. Built with{" "}
            <span className="text-primary-400">Next.js</span>,{" "}
            <span className="text-primary-400">TypeScript</span>, and{" "}
            <span className="text-primary-400">Tailwind CSS</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
