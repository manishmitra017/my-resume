"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaExternalLinkAlt,
  FaClock,
  FaCode,
  FaAws,
} from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import {
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGoogle,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import Navigation from "@/components/Navigation";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  open_issues_count: number;
  size: number;
}

const featuredProjects = [
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
    gradient: "from-blue-500 to-purple-500",
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
    gradient: "from-red-500 to-orange-500",
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
      { name: "Docker", icon: SiDocker },
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
    gradient: "from-green-500 to-emerald-500",
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
    gradient: "from-purple-500 to-pink-500",
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
    category: "Full-Stack Development",
    gradient: "from-yellow-500 to-green-500",
  },
];

const CommunityProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/manishmitra017/repos?sort=updated&per_page=100"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        const filteredRepos = data.filter(
          (repo: Repository) =>
            repo.name !== "stagehand-demo" && repo.name !== "my-resume"
        );
        setRepos(filteredRepos);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      Python: "#3572A5",
      Java: "#b07219",
      Go: "#00ADD8",
      CSS: "#563d7c",
      HTML: "#e34c26",
    };
    return colors[language || ""] || "#8b949e";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-xl"
          >
            Loading projects...
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-xl"
          >
            Error: {error}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Open Source
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Community{" "}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Open-source projects and community contributions. Exploring new
              technologies, building solutions, and sharing with the developer
              community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {repos.length + featuredProjects.length}
              </div>
              <div className="text-gray-500 text-sm">Total Projects</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0) +
                  featuredProjects.reduce((acc, p) => acc + p.stars, 0)}
              </div>
              <div className="text-gray-500 text-sm">Total Stars</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {new Set(repos.map((repo) => repo.language).filter(Boolean)).size}
              </div>
              <div className="text-gray-500 text-sm">Languages</div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-lg font-semibold text-gray-400 mb-6">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                            {project.name}
                          </h3>
                          {project.stars > 0 && (
                            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                              <FaStar size={12} />
                              <span>{project.stars}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-primary-400 text-sm font-medium mb-2">
                          {project.tagline}
                        </p>
                        <span className="inline-block text-xs bg-gray-700/50 text-gray-400 px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg border border-gray-600/50 hover:border-primary-400/50 transition-all text-sm"
                        >
                          <FaGithub />
                          Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-all text-sm"
                          >
                            <FaExternalLinkAlt size={12} />
                            Live
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => {
                        const IconComponent = tech.icon;
                        return (
                          <div
                            key={techIndex}
                            className="flex items-center gap-1.5 bg-gray-700/30 px-2.5 py-1 rounded-lg"
                          >
                            <IconComponent className="text-primary-400" size={14} />
                            <span className="text-xs text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {project.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="text-gray-500 text-xs flex items-start gap-2"
                        >
                          <span className="text-primary-400">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-gray-400 mb-6">
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors flex-1 truncate">
                        {repo.name}
                      </h3>
                      <FaGithub className="text-gray-500 flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
                      {repo.description || "No description available"}
                    </p>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-0.5 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" size={12} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BiGitRepoForked size={12} />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                      <FaClock size={10} />
                      <span>Updated {formatDate(repo.updated_at)}</span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-700/50 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
                    >
                      View Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Interested in collaboration?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to contribute.
            </p>
            <a
              href="https://github.com/manishmitra017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-100"
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
