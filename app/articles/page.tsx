"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiClock, FiCalendar } from "react-icons/fi";
import Navigation from "@/components/Navigation";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: number;
  source: string;
  sourceUrl: string;
  thumbnailUrl?: string;
  tags: string[];
  featured?: boolean;
}

const articlesData: Article[] = [
  {
    id: "1",
    title: "The Importance of Shift Left Paradigm",
    excerpt:
      "Exploring how shifting testing and quality practices earlier in the development lifecycle leads to better outcomes, reduced costs, and faster delivery.",
    publishedDate: "2023-06-15",
    readTime: 6,
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/pulse/importance-shift-left-paradigm-manish-mitra/",
    tags: ["Testing", "DevOps", "Quality Engineering"],
    featured: true,
  },
  {
    id: "2",
    title: "Why Mentors are Important",
    excerpt:
      "Reflecting on the value of mentorship in professional growth and how the right guidance can accelerate your career journey.",
    publishedDate: "2023-04-20",
    readTime: 5,
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/pulse/why-mentors-important-manish-mitra/",
    tags: ["Career", "Mentorship", "Professional Growth"],
  },
  {
    id: "3",
    title: "Service Virtualization Testing for Microservices",
    excerpt:
      "A comprehensive guide to service virtualization techniques for testing microservices architectures, enabling teams to test in isolation.",
    publishedDate: "2023-02-10",
    readTime: 8,
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/pulse/service-virtualization-testing-microservices-manish-mitra/",
    tags: ["Microservices", "Testing", "Service Virtualization"],
  },
  {
    id: "4",
    title: "My Learnings with AI: Nondeterministic Testing",
    excerpt:
      "Exploring the challenges and strategies for testing AI-powered applications where outputs can be nondeterministic and unpredictable.",
    publishedDate: "2024-01-15",
    readTime: 7,
    source: "Medium",
    sourceUrl:
      "https://medium.com/@manishmitraba/my-learnings-with-ai-nondeterministic-testing-a86e577a0395",
    tags: ["AI", "Testing", "Machine Learning"],
    featured: true,
  },
  {
    id: "5",
    title: "Experiments with Playwright & Axe on Accessibility Testing",
    excerpt:
      "Hands-on experience combining Playwright's browser automation with Axe for comprehensive accessibility testing of web applications.",
    publishedDate: "2024-03-10",
    readTime: 10,
    source: "Medium (Wesfarmers OneDigital)",
    sourceUrl:
      "https://medium.com/wesfarmers-onedigital/experiments-with-playwright-axe-on-accessibility-testing-cc70062525cd",
    tags: ["Accessibility", "Playwright", "Testing", "a11y"],
  },
];

export default function ArticlesPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(articlesData.flatMap((article) => article.tags))
  );

  const filteredArticles = selectedTag
    ? articlesData.filter((article) => article.tags.includes(selectedTag))
    : articlesData;

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
              Knowledge Sharing
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Articles &{" "}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Sharing insights, tutorials, and experiences from my journey in
              software engineering and AI.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {articlesData.length}
              </div>
              <div className="text-gray-500 text-sm">Articles</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {articlesData.reduce((acc, article) => acc + article.readTime, 0)}
              </div>
              <div className="text-gray-500 text-sm">Min Read Time</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {allTags.length}
              </div>
              <div className="text-gray-500 text-sm">Topics</div>
            </div>
          </motion.div>

          {/* Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedTag === null
                  ? "bg-primary-500 text-white"
                  : "bg-gray-800/40 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-primary-500 text-white"
                    : "bg-gray-800/40 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all overflow-hidden relative">
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Gradient Header */}
                    <div className="h-32 bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-cyan-500/20 flex items-center justify-center">
                      <span className="text-4xl opacity-30">
                        {article.source === "Medium" ? "📝" : "💼"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={12} />
                          <span>
                            {new Date(article.publishedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock size={12} />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-700/50 text-gray-400 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <span className="text-xs text-gray-500">
                          {article.source}
                        </span>
                        <div className="flex items-center gap-1 text-primary-400 text-sm font-medium">
                          Read
                          <FiExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">
                No articles found for the selected tag.
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to read more?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Follow me on Medium for the latest articles on AI, cloud
              architecture, and software engineering.
            </p>
            <a
              href="https://medium.com/@manishmitraba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-100"
            >
              Follow on Medium
              <FiExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
