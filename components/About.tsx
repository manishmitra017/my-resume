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
      description: "Built production AI systems serving 5M+ users with Google ADK, Pydantic AI, and MCP",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Team Building",
      description: "Scaled teams from 5 to 35+ engineers, 94% retention, promoted 15+ to senior roles",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Business Impact",
      description: "$20M+ in cost savings and revenue through AI product delivery and optimization",
    },
    {
      icon: <FaTrophy size={32} />,
      title: "Strategic Leadership",
      description: "C-suite partnership, board presentations, $8M budget management",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50" ref={ref}>
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
              <p className="text-xl text-white font-semibold mb-6">
                Strategic engineering leader with 18 years building high-performance teams and delivering AI products at scale.
              </p>
              <p>
                Currently leading <span className="text-primary-400 font-semibold">25-person Gen AI engineering organization</span> at
                Commonwealth Bank, delivering conversational AI platform serving{" "}
                <span className="text-white font-semibold">5M+ customers</span> with{" "}
                <span className="text-primary-400 font-semibold">$12M+ annual cost savings</span>. Managing{" "}
                <span className="text-white font-semibold">$6M engineering budget</span> and strategic partnerships with OpenAI, Anthropic, and Google.
              </p>
              <p>
                Proven track record scaling engineering teams from{" "}
                <span className="text-primary-400 font-semibold">5 to 35+ engineers</span>, managing multi-million dollar budgets,
                and partnering with C-suite on AI strategy and board presentations. Delivered{" "}
                <span className="text-white font-semibold">12+ production AI applications</span> processing{" "}
                <span className="text-primary-400 font-semibold">2M+ daily transactions</span> with 99.95% uptime.
              </p>
              <p>
                Deep expertise in <span className="text-white font-semibold">Agentic AI</span> (MCP, Google ADK, Pydantic AI),
                LLMOps, multi-agent orchestration, and building production ML platforms. Architected AI systems reducing
                inference costs by 65% while improving accuracy and performance at enterprise scale.
              </p>
              <p>
                Passionate about engineering excellence, team development, and delivering measurable business value through
                AI innovation. Mentored <span className="text-primary-400 font-semibold">50+ engineers</span>, promoted{" "}
                <span className="text-white font-semibold">15+ to senior roles</span>, and built quality engineering cultures across 37 squads.
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
