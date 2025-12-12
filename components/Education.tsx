"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master's Degree",
      field: "Master of Computer Application",
      institution: "Indira Gandhi National Open University",
      period: "2007 - 2010",
      icon: <FaGraduationCap size={24} />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      degree: "Bachelor's Degree",
      field: "Electronics and Computer Science",
      institution: "Bhavans Vivekanada College",
      period: "2004 - 2007",
      icon: <FaUniversity size={24} />,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} text-white flex-shrink-0`}
                  >
                    {edu.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-400 font-medium mb-2">
                      {edu.field}
                    </p>
                    <p className="text-gray-300 text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
