"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBrain, FaRocket, FaUsers, FaTrophy } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: <FaBrain size={32} />,
      title: "Agentic AI Leadership",
      description: "Built first GENAI project in bank winning CEO Excellence Awards - reusable AI agents and dialogue templates",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Team Growth",
      description: "Grew team from 4 to 80 members across Melbourne/Sydney/India - led 120 people at ANZ",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Innovation & Awards",
      description: "Won Excellence Awards for E2E dispute journey AI agents - DORA specialist",
    },
    {
      icon: <FaTrophy size={32} />,
      title: "Technical Expertise",
      description: "Pydantic AI, Google ADK, MCP, ML OPS, LangGraph - AWS Certified (SA, Developer, AI)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              AI Leader & Engineering Manager
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl text-white font-semibold mb-6">
                Engineering leader with close to 20 years dedicated to developing reusable AI agents and agentic AI capabilities,
                contributing to banking modernization and enhancing human experiences.
              </p>
              <p>
                Currently <span className="text-primary-400 font-semibold">Senior Engineering Manager (Agentic Banking – Gen AI)</span> at
                Commonwealth Bank. Built the <span className="text-white font-semibold">first GENAI project in the bank</span> on RACO for
                adverse media screening, <span className="text-primary-400 font-semibold">winning CEO Excellence Awards</span>. Grew team from{" "}
                <span className="text-white font-semibold">4 to 80 members</span> across Melbourne/Sydney/India.
              </p>
              <p>
                Deep expertise in <span className="text-white font-semibold">Agentic AI frameworks</span> including{" "}
                <span className="text-primary-400 font-semibold">Pydantic AI, Google ADK, LangGraph, MCP, ML OPS, and A2A</span>.
                Built reusable expert AI systems, dialogue agent templates, and AI agents for E2E dispute journey{" "}
                <span className="text-primary-400 font-semibold">winning Excellence Awards</span>.
              </p>
              <p>
                Previously led <span className="text-primary-400 font-semibold">120 people at ANZ</span> building API modernization platform,
                served as <span className="text-white font-semibold">Principal Engineer at Wesfarmers</span> for OnePass (one of most successful ventures),
                and built AWS Business Banking Engineering Labs at NAB.
              </p>
              <p>
                Passionate about engineering excellence, team development, and AI innovation. Strong contributor to AIPE projects with
                campus relationships at Monash/Melbourne University. Completed <span className="text-primary-400 font-semibold">Executive Leadership program at CBA SPARK</span>.
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-colors"
              >
                <div className="text-primary-400 mb-4">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
