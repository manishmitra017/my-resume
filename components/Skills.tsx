"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiOpenai,
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiCypress,
  SiJest,
  SiGithub,
} from "react-icons/si";
import { FaRobot, FaCloud, FaCode, FaTools, FaAws } from "react-icons/fa";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Agentic AI & Frameworks",
      icon: <FaRobot size={24} />,
      color: "bg-teal-400",
      skills: [
        { name: "Model Context Protocol (MCP)", icon: <FaRobot size={16} /> },
        { name: "OpenAI Agents SDK", icon: <SiOpenai size={16} /> },
        { name: "Google ADK", icon: <FaRobot size={16} /> },
        { name: "Pydantic AI", icon: <SiPython size={16} /> },
        { name: "LangGraph", icon: <FaRobot size={16} /> },
        { name: "LlamaIndex", icon: <FaRobot size={16} /> },
        { name: "AutoGen", icon: <FaRobot size={16} /> },
        { name: "A2A", icon: <FaRobot size={16} /> },
      ],
    },
    {
      category: "LLM & GenAI",
      icon: <SiOpenai size={24} />,
      color: "bg-coral-400",
      skills: [
        { name: "OpenAI SDK", icon: <SiOpenai size={16} /> },
        { name: "GPT-4/GPT-4o", icon: <SiOpenai size={16} /> },
        { name: "Anthropic Claude SDK", icon: <SiOpenai size={16} /> },
        { name: "Prompt Engineering", icon: <FaRobot size={16} /> },
        { name: "RAG Systems", icon: <FaRobot size={16} /> },
        { name: "Vector Databases", icon: <FaRobot size={16} /> },
        { name: "Embeddings", icon: <FaRobot size={16} /> },
        { name: "Machine Learning", icon: <FaRobot size={16} /> },
        { name: "LLMOps", icon: <FaRobot size={16} /> },
      ],
    },
    {
      category: "AI Evaluation & Observability",
      icon: <FaRobot size={24} />,
      color: "bg-navy-500",
      skills: [
        { name: "LangFuse", icon: <FaRobot size={16} /> },
        { name: "Agent Evaluation", icon: <FaRobot size={16} /> },
        { name: "LLM Tracing", icon: <FaRobot size={16} /> },
        { name: "Prompt Optimization", icon: <FaRobot size={16} /> },
        { name: "Cost Analytics", icon: <FaRobot size={16} /> },
        { name: "Performance Monitoring", icon: <FaRobot size={16} /> },
        { name: "A/B Testing (AI)", icon: <FaRobot size={16} /> },
        { name: "Model Benchmarking", icon: <FaRobot size={16} /> },
      ],
    },
    {
      category: "Programming & APIs",
      icon: <FaCode size={24} />,
      color: "bg-golden-400",
      skills: [
        { name: "Python (Fast API)", icon: <SiPython size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> },
        { name: "Next.js", icon: <SiNextdotjs size={16} /> },
        { name: "REST API", icon: <FaCode size={16} /> },
        { name: "gRPC", icon: <FaCode size={16} /> },
        { name: "GraphQL", icon: <FaCode size={16} /> },
        { name: "GH Actions", icon: <SiGithub size={16} /> },
        { name: "React", icon: <SiReact size={16} /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud size={24} />,
      color: "bg-coral-400",
      skills: [
        { name: "AWS (SA + Dev + AI Certified)", icon: <FaAws size={16} /> },
        { name: "DevSecOps", icon: <FaTools size={16} /> },
        { name: "MLOps", icon: <FaTools size={16} /> },
        { name: "DORA Specialist", icon: <FaTools size={16} /> },
        { name: "Terraform", icon: <SiTerraform size={16} /> },
        { name: "Docker", icon: <SiDocker size={16} /> },
        { name: "Kubernetes", icon: <SiKubernetes size={16} /> },
        { name: "Jenkins", icon: <FaTools size={16} /> },
        { name: "CI/CD", icon: <SiGithub size={16} /> },
      ],
    },
    {
      category: "Testing & QE",
      icon: <FaTools size={24} />,
      color: "bg-teal-400",
      skills: [
        { name: "Playwright", icon: <FaTools size={16} /> },
        { name: "Cypress", icon: <SiCypress size={16} /> },
        { name: "Jest", icon: <SiJest size={16} /> },
        { name: "Cucumber", icon: <FaTools size={16} /> },
        { name: "Appium", icon: <FaTools size={16} /> },
        { name: "PACT Flow", icon: <FaTools size={16} /> },
        { name: "TerraTest", icon: <SiTerraform size={16} /> },
        { name: "Kafka Testing", icon: <FaTools size={16} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white font-display">
            Technical{" "}
            <span className="bg-gradient-to-r from-teal-400 to-navy-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden shadow-card"
            >
              {/* Category Header */}
              <div className="p-6 border-b border-text-primary/5 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.color} text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-white">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + skillIndex * 0.03,
                      }}
                      className="inline-flex items-center gap-2 bg-cream-200/50 dark:bg-gray-700/50 hover:bg-cream-300/50 dark:hover:bg-gray-600/50 px-3 py-2 rounded-lg transition-colors group/skill"
                    >
                      <span className="text-teal-500 group-hover/skill:text-teal-600 transition-colors">
                        {skill.icon}
                      </span>
                      <span className="text-text-secondary dark:text-gray-300 text-sm">{skill.name}</span>
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
