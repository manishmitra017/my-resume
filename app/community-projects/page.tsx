"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaExternalLinkAlt,
  FaCode,
  FaAws,
  FaDatabase,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGoogle,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import Navigation from "@/components/Navigation";
import GeometricShapes from "@/components/GeometricShapes";

type Category = "all" | "ai-ml" | "full-stack";

interface Project {
  name: string;
  tagline: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<{ className?: string; size?: number }> }[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  category: string;
  categoryKey: "ai-ml" | "full-stack";
  color: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "Flowchart Conversational Agent",
    tagline: "AI-Driven Dynamic Questionnaire Engine",
    description:
      "A conversational AI agent built with Google ADK that parses any Mermaid flowchart, drives dynamic conversations following graph logic, handles conditional branching, and persists answers in SQLite for cross-session resumption.",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Google ADK", icon: SiGoogle },
      { name: "SQLite", icon: FaDatabase },
    ],
    features: [
      "Parses any Mermaid flowchart to drive conversations",
      "Conditional branching with yes/no, multiple choice, and free text",
      "SQLite persistence for cross-session answer resumption",
      "Customizable persona, tone, and domain via frontmatter metadata",
    ],
    githubUrl: "https://github.com/manishmitra017/flowchart-project",
    stars: 0,
    category: "AI/ML & Automation",
    categoryKey: "ai-ml",
    color: "bg-teal-400",
    gradient: "from-teal-400/20 to-navy-500/20",
  },
  {
    name: "Voice Guard Rail",
    tagline: "Real-Time Speech Emotion Detection",
    description:
      "AI-powered emotion recognition system achieving 92% accuracy in detecting 7 emotions from speech in real-time, featuring OpenAI Whisper integration for transcription and a modern React + FastAPI architecture.",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "React 19", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "FastAPI", icon: FaCode },
    ],
    features: [
      "92% accuracy across 7 emotions using Whisper-based model",
      "Real-time audio capture and processing from browser",
      "OpenAI Whisper integration for speech transcription",
      "Modern full-stack architecture with React 19 and FastAPI",
    ],
    githubUrl: "https://github.com/manishmitra017/voice_guard_rail",
    stars: 0,
    category: "AI/ML & Real-Time",
    categoryKey: "ai-ml",
    color: "bg-coral-400",
    gradient: "from-coral-400/20 to-golden-400/20",
  },
  {
    name: "PentestAI",
    tagline: "AI-Powered Security Testing Framework",
    description:
      "Open-source penetration testing framework built on Google's Agent Development Kit (ADK) that automates security assessments through specialized AI agents following PTES methodology.",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Google ADK", icon: SiGoogle },
      { name: "Security", icon: MdSecurity },
    ],
    features: [
      "Multi-agent architecture across 5 pentest phases",
      "Integration with established security tools (Nmap, OWASP ZAP)",
      "Human-in-the-loop controls for exploitation phases",
      "Automated professional report generation",
    ],
    githubUrl: "https://github.com/manishmitra017/Pentest-google-adk-agent",
    stars: 0,
    category: "AI/ML & Security",
    categoryKey: "ai-ml",
    color: "bg-navy-500",
    gradient: "from-navy-500/20 to-teal-400/20",
  },
  {
    name: "Video-to-SOP Automation",
    tagline: "AI-Powered Documentation Generator",
    description:
      "Intelligent tool that transforms screen recordings into detailed step-by-step user journey documentation using multimodal LLM analysis.",
    technologies: [{ name: "Python", icon: SiPython }],
    features: [
      "Automated frame extraction from videos",
      "Multimodal LLM (Google Gemini) analysis",
      "Automated Markdown documentation generation",
      "Captures clicks, typing, and URL navigation",
    ],
    githubUrl: "https://github.com/manishmitra017/video-sop",
    stars: 0,
    category: "AI/ML & Automation",
    categoryKey: "ai-ml",
    color: "bg-golden-400",
    gradient: "from-golden-400/20 to-coral-400/20",
  },
  {
    name: "BSM Melbourne Website",
    tagline: "Community Platform for Bengali Diaspora",
    description:
      "Full-stack bilingual community platform serving the Bengali Society of Melbourne with event management, membership system, and automated deployments.",
    technologies: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "AWS", icon: FaAws },
      { name: "React 19", icon: SiReact },
    ],
    features: [
      "Bilingual support (English/Bengali)",
      "Event management with photo galleries",
      "AWS infrastructure: ECS Fargate, ALB, Route53",
      "Automated CI/CD with GitHub Actions",
    ],
    githubUrl: "https://github.com/manishmitra017/bsm-website",
    liveUrl: "https://bsm.org.au",
    stars: 2,
    category: "Full-Stack Web",
    categoryKey: "full-stack",
    color: "bg-teal-400",
    gradient: "from-teal-400/20 to-navy-500/20",
  },
  {
    name: "Wedding Photo Portfolio",
    tagline: "Premium Photo Gallery with AWS CDK Infrastructure",
    description:
      "A premium wedding photo portfolio featuring 103 curated photos across 6 gallery sections, with masonry layouts, parallax dividers, lightbox viewing, and full AWS infrastructure deployed via CDK.",
    technologies: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "AWS CDK", icon: FaAws },
    ],
    features: [
      "Masonry gallery layout with full-screen lightbox viewing",
      "Auto-generated galleries from photo folder structure",
      "AWS S3 + CloudFront with CDK infrastructure-as-code",
      "Parallax dividers with Bengali and English typography",
    ],
    githubUrl: "https://github.com/manishmitra017/marriage-portfolio",
    liveUrl: "https://ritusoumya.in",
    stars: 0,
    category: "Full-Stack Web",
    categoryKey: "full-stack",
    color: "bg-coral-400",
    gradient: "from-coral-400/20 to-golden-400/20",
  },
  {
    name: "Cosmic Renewable Energy",
    tagline: "Green Tech Business Platform",
    description:
      "Modern responsive business website for renewable energy company with integrated quote management and service showcase.",
    technologies: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "FastAPI", icon: FaCode },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    features: [
      "Modern, responsive design with Tailwind CSS",
      "FastAPI backend with Pydantic validation",
      "Contact and quote request forms",
      "SEO optimized with proper meta tags",
    ],
    githubUrl: "https://github.com/manishmitra017/cosmic-renwable",
    stars: 0,
    category: "Full-Stack Web",
    categoryKey: "full-stack",
    color: "bg-golden-400",
    gradient: "from-golden-400/20 to-teal-400/20",
  },
];

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All Projects", icon: <FaCode size={14} /> },
  { key: "ai-ml", label: "AI / ML", icon: <FaRobot size={14} /> },
  { key: "full-stack", label: "Full-Stack", icon: <FaGlobe size={14} /> },
];

const CommunityProjects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  const aiCount = projects.filter((p) => p.categoryKey === "ai-ml").length;
  const fullStackCount = projects.filter((p) => p.categoryKey === "full-stack").length;
  const totalStars = projects.reduce((acc, p) => acc + p.stars, 0);
  const liveCount = projects.filter((p) => p.liveUrl).length;

  return (
    <div className="min-h-screen bg-cream-300 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <GeometricShapes />
      <Navigation />

      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Open Source
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white mb-4 font-display">
              Community{" "}
              <span className="bg-gradient-to-r from-teal-400 to-navy-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-300 text-lg max-w-2xl">
              Open-source projects spanning AI agents, full-stack web platforms,
              and developer tools. Building solutions and sharing with the
              community.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          >
            {[
              { value: projects.length, label: "Projects", color: "from-teal-400 to-navy-500" },
              { value: aiCount, label: "AI / ML", color: "from-coral-400 to-golden-400" },
              { value: fullStackCount, label: "Full-Stack", color: "from-navy-500 to-teal-400" },
              { value: liveCount, label: "Live Sites", color: "from-golden-400 to-coral-400" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-text-primary/5 dark:border-white/5 p-4 text-center shadow-card"
              >
                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-text-muted dark:text-gray-400 text-xs mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex gap-2 mb-10 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-navy-500 text-white shadow-soft"
                    : "bg-white/80 dark:bg-gray-800/80 text-text-secondary dark:text-gray-300 border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-5"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-text-primary/5 dark:border-white/5 hover:border-teal-400/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden shadow-card flex flex-col"
              >
                {/* Color accent bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold text-text-primary dark:text-white group-hover:text-teal-500 transition-colors">
                          {project.name}
                        </h3>
                        {project.stars > 0 && (
                          <div className="flex items-center gap-1 text-golden-500 text-xs">
                            <FaStar size={11} />
                            <span>{project.stars}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-teal-500 text-sm font-medium">
                        {project.tagline}
                      </p>
                    </div>
                    <span
                      className={`inline-block text-[10px] ${project.color} text-white px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-1.5 bg-cream-200/50 dark:bg-gray-700/50 px-2.5 py-1 rounded-lg"
                        >
                          <IconComponent className="text-teal-500" size={13} />
                          <span className="text-xs text-text-secondary dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-1 mb-5 flex-1">
                    {project.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="text-text-muted dark:text-gray-400 text-xs flex items-start gap-2"
                      >
                        <span className="text-teal-500 mt-0.5">&#8226;</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-text-primary/10 dark:border-white/10 hover:border-teal-400/50 transition-all text-sm text-text-primary dark:text-white shadow-card"
                    >
                      <FaGithub />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg transition-all text-sm"
                      >
                        <FaExternalLinkAlt size={11} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-teal-400/10 via-coral-400/5 to-golden-400/10 dark:from-teal-400/20 dark:via-coral-400/10 dark:to-golden-400/20 backdrop-blur-sm rounded-2xl border border-text-primary/5 dark:border-white/5 p-8 text-center shadow-card"
          >
            <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-3">
              Interested in collaboration?
            </h3>
            <p className="text-text-secondary dark:text-gray-300 mb-6 max-w-lg mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to contribute.
            </p>
            <a
              href="https://github.com/manishmitra017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-navy-600"
            >
              <FaGithub />
              Follow on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityProjects;
