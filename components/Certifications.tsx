"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaAward, FaMicrosoft, FaAws } from "react-icons/fa";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      icon: <FaAws size={24} />,
      color: "bg-coral-400",
      image: null,
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      icon: <FaAws size={24} />,
      color: "bg-coral-400",
      image: null,
    },
    {
      name: "AWS AI Certified",
      issuer: "Amazon Web Services",
      icon: <FaAws size={24} />,
      color: "bg-coral-400",
      image: null,
    },
    {
      name: "ITIL Certificate",
      issuer: "AXELOS",
      icon: <FaCertificate size={24} />,
      color: "bg-navy-500",
      image: "itil.jpeg",
    },
    {
      name: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      icon: <FaCertificate size={24} />,
      color: "bg-teal-400",
      image: "salesforce.png",
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      icon: <FaMicrosoft size={24} />,
      color: "bg-navy-500",
      image: null,
    },
    {
      name: "CCBA",
      issuer: "IIBA",
      icon: <FaCertificate size={24} />,
      color: "bg-golden-400",
      image: "ccba.jpeg",
    },
  ];

  const awards = [
    {
      name: "CEO Excellence Awards",
      description:
        "Won for building first GENAI project in bank on RACO for adverse media screening",
      color: "bg-golden-400",
    },
    {
      name: "Excellence Awards",
      description:
        "Won for building reusable expert AI system and AI agents for E2E dispute journey",
      color: "bg-coral-400",
    },
    {
      name: "Spot Award Winner",
      description:
        "Recognition for exceptional performance and contributions",
      color: "bg-teal-400",
    },
    {
      name: "Achieving Excellence",
      description:
        "Award for consistent high-quality delivery and leadership",
      color: "bg-navy-500",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white font-display">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-teal-400 to-navy-500 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-text-secondary dark:text-gray-300 mb-6 font-display">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-2xl border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 hover:shadow-card-hover transition-all duration-300 text-center shadow-card"
              >
                <div className="relative z-10">
                  {cert.image ? (
                    <div className="mb-4 flex justify-center">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-cream-100 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src={`/images/companies/${cert.image}`}
                          alt={cert.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${cert.color} text-white mb-4`}
                    >
                      {cert.icon}
                    </div>
                  )}
                  <h4 className="text-text-primary dark:text-white font-medium text-sm mb-1 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-text-muted dark:text-gray-400 text-xs">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div>
          <h3 className="text-lg font-semibold text-text-secondary dark:text-gray-300 mb-6">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-2xl border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 hover:shadow-card-hover transition-all shadow-card"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${award.color} text-white flex-shrink-0`}
                  >
                    <FaAward size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-text-primary dark:text-white font-semibold mb-1">
                      {award.name}
                    </h4>
                    <p className="text-text-secondary dark:text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
