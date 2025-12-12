"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBrain, FaRocket, FaUsers, FaTrophy } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate years of experience from June 2007
  const calculateYearsOfExperience = () => {
    const startDate = new Date(2007, 5, 1); // June 2007 (month is 0-indexed)
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();

    // If we haven't passed June yet this year, subtract 1
    return months < 0 ? years - 1 : years;
  };

  const yearsOfExperience = calculateYearsOfExperience();

  const highlights = [
    {
      icon: <FaBrain size={24} />,
      title: "Agentic AI Leadership",
      description: "Built first GENAI project in bank winning CEO Excellence Awards - reusable AI agents and dialogue templates",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Team Growth",
      description: "Grew team from 4 to 80 members across Melbourne/Sydney/India - led 120 people at ANZ",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Innovation & Awards",
      description: "Won Excellence Awards for E2E dispute journey AI agents - DORA specialist",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FaTrophy size={24} />,
      title: "Technical Expertise",
      description: "Pydantic AI, Google ADK, MCP, ML OPS, LangGraph - AWS Certified (SA, Developer, AI)",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Seasoned engineering leader
            </span>{" "}
            driving AI innovation and organizational excellence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently{" "}
              <span className="text-white font-semibold">
                Senior Engineering Manager (Agentic Banking – Gen AI)
              </span>{" "}
              at Commonwealth Bank. Built the first GENAI project in the bank on
              RACO for adverse media screening,{" "}
              <span className="text-primary-400 font-semibold">
                winning CEO Excellence Awards
              </span>
              .
            </p>

            <p className="text-gray-400 leading-relaxed">
              Deep expertise in{" "}
              <span className="text-white font-medium">Agentic AI frameworks</span>{" "}
              including Pydantic AI, Google ADK, LangGraph, MCP, ML OPS, and A2A.
              Built reusable expert AI systems, dialogue agent templates, and AI
              agents for E2E dispute journey winning Excellence Awards.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Previously led{" "}
              <span className="text-primary-400">120 people at ANZ</span> building
              API modernization platform, served as Principal Engineer at Wesfarmers
              for OnePass (one of most successful ventures), and built AWS Business
              Banking Engineering Labs at NAB.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Passionate about engineering excellence, team development, and AI
              innovation. Strong contributor to AIPE projects with campus
              relationships at Monash/Melbourne University. Completed Executive
              Leadership program at CBA SPARK.
            </p>
          </motion.div>

          {/* Right side - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
