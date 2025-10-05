"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaDollarSign, FaUsers, FaRocket, FaChartLine, FaCog, FaTrophy } from "react-icons/fa";

const KeyAchievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      category: "Business Impact",
      icon: <FaDollarSign size={32} />,
      color: "from-green-500 to-emerald-500",
      metrics: [
        { label: "Cost Savings Delivered", value: "$15M+" },
        { label: "Infrastructure Optimization", value: "40% reduction" },
        { label: "Production Uptime", value: "99.95%" },
      ],
    },
    {
      category: "Team Leadership",
      icon: <FaUsers size={32} />,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "Engineering Team Scale", value: "8 → 35+ engineers" },
        { label: "Annual Budget Managed", value: "$8M" },
        { label: "Team Retention Rate", value: "94%" },
      ],
    },
    {
      category: "Technical Delivery",
      icon: <FaRocket size={32} />,
      color: "from-purple-500 to-pink-500",
      metrics: [
        { label: "AI Applications Shipped", value: "12+ products" },
        { label: "Daily Transactions", value: "2M+" },
        { label: "Users Served", value: "5M+" },
      ],
    },
    {
      category: "Platform Engineering",
      icon: <FaCog size={32} />,
      color: "from-orange-500 to-red-500",
      metrics: [
        { label: "AI Inference Cost Reduction", value: "65%" },
        { label: "Deployment Frequency", value: "500+ daily" },
        { label: "Model Deployment Time", value: "6 weeks → 3 days" },
      ],
    },
    {
      category: "Quality & Performance",
      icon: <FaChartLine size={32} />,
      color: "from-indigo-500 to-blue-500",
      metrics: [
        { label: "Production Defect Reduction", value: "73%" },
        { label: "Deployment Success Rate", value: "99.5%" },
        { label: "Test Automation Coverage", value: "95%" },
      ],
    },
    {
      category: "Leadership Impact",
      icon: <FaTrophy size={32} />,
      color: "from-yellow-500 to-orange-500",
      metrics: [
        { label: "Engineers Mentored", value: "50+ professionals" },
        { label: "Promoted to Senior Roles", value: "15+ engineers" },
        { label: "Squads Impacted", value: "37 teams" },
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key <span className="text-primary-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Proven track record of delivering business value through technical excellence and team leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all hover:shadow-lg hover:shadow-primary-500/20"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-lg mr-3`}>
                  <div className="text-white">{achievement.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {achievement.category}
                </h3>
              </div>

              <div className="space-y-3">
                {achievement.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{metric.label}</span>
                    <span className="text-primary-400 font-bold text-lg">
                      {metric.value}
                    </span>
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

export default KeyAchievements;
