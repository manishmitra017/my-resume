"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Master's Degree",
      field: "Master of Computer Application",
      institution: "Indira Gandhi National Open University",
      period: "2007 - 2010",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Bachelor's Degree",
      field: "Electronics and Computer Science",
      institution: "Bhavans Vivekanada College",
      period: "2004 - 2007",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-primary-400 text-3xl md:text-4xl mt-1 flex-shrink-0">{edu.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-2 text-sm md:text-base">
                    {edu.field}
                  </p>
                  <p className="text-gray-300 mb-1 text-sm md:text-base">{edu.institution}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{edu.period}</p>
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
