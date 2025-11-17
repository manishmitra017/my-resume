"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiOpenai,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCypress,
  SiJest,
  SiGithub,
} from "react-icons/si";
import { FaRobot, FaCloud, FaCode, FaTools, FaAws } from "react-icons/fa";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: "Agentic AI & Frameworks",
      icon: <FaRobot size={32} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Model Context Protocol (MCP)", icon: <FaRobot /> },
        { name: "OpenAI Agents SDK", icon: <SiOpenai /> },
        { name: "Google ADK", icon: <FaRobot /> },
        { name: "Pydantic AI", icon: <SiPython /> },
        { name: "LangGraph", icon: <FaRobot /> },
        { name: "LlamaIndex", icon: <FaRobot /> },
        { name: "AutoGen", icon: <FaRobot /> },
        { name: "A2A", icon: <FaRobot /> },
      ],
    },
    {
      category: "LLM & GenAI",
      icon: <SiOpenai size={32} />,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "OpenAI SDK", icon: <SiOpenai /> },
        { name: "GPT-4/GPT-4o", icon: <SiOpenai /> },
        { name: "Anthropic Claude SDK", icon: <SiOpenai /> },
        { name: "Prompt Engineering", icon: <FaRobot /> },
        { name: "RAG Systems", icon: <FaRobot /> },
        { name: "Vector Databases", icon: <FaRobot /> },
        { name: "Embeddings", icon: <FaRobot /> },
        { name: "LLMOps", icon: <FaRobot /> },
      ],
    },
    {
      category: "AI Evaluation & Observability",
      icon: <FaRobot size={32} />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "LangFuse", icon: <FaRobot /> },
        { name: "Agent Evaluation", icon: <FaRobot /> },
        { name: "LLM Tracing", icon: <FaRobot /> },
        { name: "Prompt Optimization", icon: <FaRobot /> },
        { name: "Cost Analytics", icon: <FaRobot /> },
        { name: "Performance Monitoring", icon: <FaRobot /> },
        { name: "A/B Testing (AI)", icon: <FaRobot /> },
        { name: "Model Benchmarking", icon: <FaRobot /> },
      ],
    },
    {
      category: "Programming & APIs",
      icon: <FaCode size={32} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python (Fast API)", icon: <SiPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "REST API", icon: <FaCode /> },
        { name: "gRPC", icon: <FaCode /> },
        { name: "GraphQL", icon: <FaCode /> },
        { name: "GH Actions", icon: <SiGithub /> },
        { name: "React", icon: <SiReact /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud size={32} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (SA + Dev + AI Certified)", icon: <FaAws /> },
        { name: "DevSecOps", icon: <FaTools /> },
        { name: "DORA Specialist", icon: <FaTools /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "CI/CD", icon: <SiGithub /> },
      ],
    },
    {
      category: "Testing & QE",
      icon: <FaTools size={32} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Playwright", icon: <FaTools /> },
        { name: "Cypress", icon: <SiCypress /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Cucumber", icon: <FaTools /> },
        { name: "Appium", icon: <FaTools /> },
        { name: "PACT Flow", icon: <FaTools /> },
        { name: "TerraTest", icon: <SiTerraform /> },
        { name: "Kafka Testing", icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-strong p-6 rounded-xl border-2 border-gray-600/30 hover:border-transparent hover-glow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0 shadow-lg`}>
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center space-x-2 bg-gray-900/80 px-3 py-2 rounded-lg border border-gray-700/50 hover:border-primary-400/50 transition-all hover:shadow-glow-primary"
                    >
                      <span className="text-primary-400 flex-shrink-0">{skill.icon}</span>
                      <span className="text-gray-300 text-xs sm:text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
