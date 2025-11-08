"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaClock } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
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

const CommunityProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/manishmitra017/repos?sort=updated&per_page=100");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        // Filter out stagehand-demo and my-resume
        const filteredRepos = data.filter(
          (repo: Repository) =>
            repo.name !== "stagehand-demo" &&
            repo.name !== "my-resume"
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
      Rust: "#dea584",
      Ruby: "#701516",
      PHP: "#4F5D95",
      Swift: "#ffac45",
      Kotlin: "#A97BFF",
      "C++": "#f34b7d",
      C: "#555555",
      CSS: "#563d7c",
      HTML: "#e34c26",
    };
    return colors[language || ""] || "#8b949e";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-2xl"
          >
            Loading projects...
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-2xl"
          >
            Error: {error}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Community <span className="text-primary-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Open-source projects and community contributions.
              Exploring new technologies, building solutions, and sharing knowledge with the developer community.
            </p>
            <div className="w-24 h-1 bg-primary-400 mx-auto mt-8" />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-primary-400 text-4xl font-bold mb-2">{repos.length}</div>
              <div className="text-gray-400">Active Projects</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-primary-400 text-4xl font-bold mb-2">
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </div>
              <div className="text-gray-400">Total Stars</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-primary-400 text-4xl font-bold mb-2">
                {new Set(repos.map(repo => repo.language).filter(Boolean)).size}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-primary-400 transition-all overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors flex-1">
                      {repo.name}
                    </h3>
                    <FaGithub className="text-gray-400 text-2xl flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                    {repo.description || "No description available"}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-primary-400/10 text-primary-400 text-xs rounded-full border border-primary-400/20"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Language & Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="text-gray-300">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BiGitRepoForked />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Updated Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <FaClock />
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      View Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {repos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaGithub className="text-gray-600 text-6xl mx-auto mb-4" />
              <p className="text-gray-400 text-xl">No community projects found</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-primary-500/10 border border-primary-400/20 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in collaboration?
          </h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="https://github.com/manishmitra017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            <FaGithub />
            Follow on GitHub
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default CommunityProjects;
