"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaAward, FaMicrosoft, FaAws } from "react-icons/fa";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      color: "text-orange-400",
      image: null,
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      color: "text-orange-400",
      image: null,
    },
    {
      name: "AWS AI Certified",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      color: "text-orange-400",
      image: null,
    },
    {
      name: "ITIL Certificate",
      issuer: "AXELOS",
      icon: <FaCertificate />,
      color: "text-blue-400",
      image: "itil.jpeg",
    },
    {
      name: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      icon: <FaCertificate />,
      color: "text-cyan-400",
      image: "salesforce.png",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      icon: <FaMicrosoft />,
      color: "text-blue-500",
      image: null,
    },
    {
      name: "CCBA",
      issuer: "IIBA",
      icon: <FaCertificate />,
      color: "text-purple-400",
      image: "ccba.jpeg",
    },
  ];

  const awards = [
    {
      name: "CEO Excellence Awards",
      description: "Won for building first GENAI project in bank on RACO for adverse media screening",
      icon: <FaAward />,
    },
    {
      name: "Excellence Awards",
      description: "Won for building reusable expert AI system and AI agents for E2E dispute journey",
      icon: <FaAward />,
    },
    {
      name: "Spot Award Winner",
      description: "Recognition for exceptional performance and contributions",
      icon: <FaAward />,
    },
    {
      name: "Achieving Excellence",
      description: "Award for consistent high-quality delivery and leadership",
      icon: <FaAward />,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 via-indigo-900/10 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-primary-400">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto" />
        </motion.div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all text-center"
              >
                {cert.image ? (
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={`/images/companies/${cert.image}`}
                        alt={cert.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`text-5xl mb-4 ${cert.color}`}>{cert.icon}</div>
                )}
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-primary-500/10 to-primary-400/10 backdrop-blur-sm p-6 rounded-lg border border-primary-400/30 hover:border-primary-400 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-400 text-4xl">{award.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{award.name}</h4>
                    <p className="text-gray-300 text-sm">{award.description}</p>
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
