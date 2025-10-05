"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaMicrophone, FaGithub, FaPenFancy, FaUsers, FaUniversity } from "react-icons/fa";

const ThoughtLeadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const activities = [
    {
      type: "Conference Speaking",
      icon: <FaMicrophone size={32} />,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Building Production-Grade Agentic AI Systems",
          venue: "AI/ML Conference Sydney",
          year: "2024",
          description: "Keynote on scaling multi-agent AI systems in banking",
        },
        {
          title: "LLMOps: From Prototype to Production",
          venue: "QCon Melbourne",
          year: "2023",
          description: "Technical deep-dive on operationalizing LLM applications",
        },
      ],
    },
    {
      type: "Technical Writing",
      icon: <FaPenFancy size={32} />,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Scaling Conversational AI in Enterprise Banking",
          venue: "Medium Engineering Blog",
          year: "2024",
          description: "Architecture patterns for high-availability AI systems",
        },
        {
          title: "Cost Optimization Strategies for LLM Applications",
          venue: "AWS Architecture Blog",
          year: "2024",
          description: "Reducing inference costs by 60% at scale",
        },
      ],
    },
    {
      type: "Open Source",
      icon: <FaGithub size={32} />,
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "LangChain Contributor",
          venue: "GitHub",
          year: "2023-2024",
          description: "Active contributor to LangChain framework",
        },
        {
          title: "AI Testing Framework (500+ stars)",
          venue: "Personal Repository",
          year: "2023",
          description: "Open-source testing tools for LLM applications",
        },
      ],
    },
    {
      type: "Community Leadership",
      icon: <FaUsers size={32} />,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          title: "AI Engineering Meetup Organizer",
          venue: "Sydney AI Community",
          year: "2023-Present",
          description: "Monthly meetup with 300+ members",
        },
        {
          title: "Quality Engineering Mentorship Program",
          venue: "Internal Initiative",
          year: "2021-Present",
          description: "Mentored 50+ engineers across organizations",
        },
      ],
    },
    {
      type: "Academia & Education",
      icon: <FaUniversity size={32} />,
      color: "from-indigo-500 to-purple-500",
      items: [
        {
          title: "Guest Lecturer - AI in Banking",
          venue: "University of Sydney",
          year: "2024",
          description: "Course on practical AI applications in financial services",
        },
        {
          title: "Industry Advisory Board Member",
          venue: "Tech University",
          year: "2023-Present",
          description: "Advising on AI/ML curriculum development",
        },
      ],
    },
  ];

  return (
    <section id="thought-leadership" className="py-20 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thought <span className="text-primary-400">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Contributing to the AI engineering community through speaking, writing, and open source
          </p>
        </motion.div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-lg mr-4`}>
                  <div className="text-white">{activity.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">{activity.type}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {activity.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                  >
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-primary-400 text-sm mb-2">
                      {item.venue} • {item.year}
                    </p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
