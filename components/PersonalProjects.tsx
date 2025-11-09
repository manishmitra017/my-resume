"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiPython,
  SiReact,
  SiTailwindcss
} from "react-icons/si";

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      name: "BSM Melbourne Website",
      tagline: "Community Platform for Bengali Diaspora",
      description: "Full-stack bilingual community platform serving the Bengali Society of Melbourne with event management, membership system, and automated deployments.",
      technologies: [
        { name: "Next.js 15", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: SiDocker },
        { name: "React 19", icon: SiReact },
      ],
      features: [
        "Bilingual support (English/Bengali) with Noto Sans Bengali typography",
        "Event management system with photo galleries using Framer Motion",
        "Membership forms with Google Maps API integration",
        "AWS infrastructure: ECS Fargate, ALB, Route53, Certificate Manager",
        "Automated CI/CD with GitHub Actions",
        "Blood donation and tree plantation volunteering coordination",
      ],
      impact: "Active community platform with 2 GitHub stars",
      githubUrl: "https://github.com/manishmitra017/bsm-website",
      liveUrl: "https://bsm.org.au",
      stars: 2,
      category: "Full-Stack Web Development",
      year: "2024",
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      name: "Video-to-SOP Automation",
      tagline: "AI-Powered Documentation Generator",
      description: "Intelligent tool that transforms screen recordings into detailed step-by-step user journey documentation using multimodal LLM analysis.",
      technologies: [
        { name: "Python", icon: SiPython },
      ],
      features: [
        "Automated frame extraction from screen recording videos",
        "Multimodal LLM (Google Gemini) for visual analysis",
        "Incremental journey creation with overlapping chunk analysis",
        "Dual output: detailed logs for AI processing and human-readable summaries",
        "Captures clicks, typing, URL navigation, and on-screen text",
        "Automated Markdown documentation generation",
      ],
      impact: "Automates technical documentation and SOP creation",
      githubUrl: "https://github.com/manishmitra017/video-sop",
      stars: 0,
      category: "AI/ML & Automation",
      year: "2024",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Cosmic Renewable Energy",
      tagline: "Green Tech Business Platform",
      description: "Modern responsive business website for renewable energy company with integrated quote management and service showcase.",
      technologies: [
        { name: "Next.js 15", icon: SiNextdotjs },
        { name: "FastAPI", icon: FaCode },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      features: [
        "Modern, responsive design with Tailwind CSS",
        "FastAPI backend with Pydantic data validation",
        "Contact and quote request forms with validation",
        "Comprehensive service pages and FAQ section",
        "SEO optimized with proper meta tags and semantic HTML",
        "Dual-server architecture with automated startup scripts",
      ],
      impact: "Production-ready business platform for renewable energy sector",
      githubUrl: "https://github.com/manishmitra017/cosmic-renwable",
      stars: 0,
      category: "Full-Stack Development",
      year: "2024",
      gradient: "from-yellow-500/20 to-green-500/20",
    },
  ];


  return (
    <section id="personal-projects" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Personal <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Side projects showcasing full-stack development, AI/ML experimentation, and community impact
          </p>
          <div className="w-20 h-1 bg-primary-400 mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary-400 transition-all hover:shadow-lg hover:shadow-primary-500/20`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.name}
                    </h3>
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-primary-300 font-semibold text-lg mb-2">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full">{project.category}</span>
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full">{project.year}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={techIndex} className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full">
                        <IconComponent className="text-primary-400" />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="text-gray-400 text-sm flex items-start"
                    >
                      <span className="text-primary-400 mr-2 flex-shrink-0">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-primary-300 font-semibold text-sm">
                  Impact: <span className="text-gray-300 font-normal">{project.impact}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/manishmitra017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/20 border border-gray-700 hover:border-primary-400"
          >
            <FaGithub className="text-xl" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalProjects;
