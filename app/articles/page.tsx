"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiClock, FiCalendar, FiTag } from "react-icons/fi";
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
  // Sample data - replace with your actual articles
  {
    id: "1",
    title: "Building Scalable Microservices with AWS Lambda",
    excerpt: "Exploring serverless architecture patterns for modern cloud applications. This article covers best practices for Lambda functions and cost optimization.",
    publishedDate: "2024-03-15",
    readTime: 8,
    source: "Medium",
    sourceUrl: "https://medium.com/@example/article-1",
    tags: ["AWS", "Serverless", "Architecture"],
    featured: true,
  },
  {
    id: "2",
    title: "React Performance Optimization Techniques",
    excerpt: "Deep dive into React performance patterns, memo optimization, and rendering strategies for large-scale applications.",
    publishedDate: "2024-02-20",
    readTime: 6,
    source: "Dev.to",
    sourceUrl: "https://dev.to/example/article-2",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: "3",
    title: "Infrastructure as Code with CDK",
    excerpt: "Learn how to build and deploy cloud infrastructure using AWS CDK with TypeScript for type-safe infrastructure management.",
    publishedDate: "2024-01-10",
    readTime: 10,
    source: "Personal Blog",
    sourceUrl: "https://blog.example.com/article-3",
    tags: ["AWS", "CDK", "DevOps"],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
              Articles & <span className="text-primary-400">Publications</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences from my journey in software engineering
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
              <div className="text-primary-400 text-4xl font-bold mb-2">{articlesData.length}</div>
              <div className="text-gray-400">Published Articles</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-primary-400 text-4xl font-bold mb-2">
                {articlesData.reduce((acc, article) => acc + article.readTime, 0)}
              </div>
              <div className="text-gray-400">Total Read Time (mins)</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-primary-400 text-4xl font-bold mb-2">{allTags.length}</div>
              <div className="text-gray-400">Topics Covered</div>
            </div>
          </motion.div>

          {/* Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedTag === null
                  ? "bg-primary-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              All Articles
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-primary-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10">
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Thumbnail */}
                    {article.thumbnailUrl ? (
                      <div className="h-48 overflow-hidden bg-gradient-to-br from-primary-500/20 to-purple-500/20">
                        <img
                          src={article.thumbnailUrl}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                        <FiTag className="w-16 h-16 text-primary-500/40" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <span>
                            {new Date(article.publishedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-3 h-3" />
                          <span>{article.readTime} min read</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Source & Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <span className="text-sm text-gray-500">{article.source}</span>
                        <div className="flex items-center gap-1 text-primary-400 text-sm font-medium">
                          Read More
                          <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FiTag className="text-gray-600 text-6xl mx-auto mb-4" />
              <p className="text-gray-400 text-xl">
                No articles found for the selected tag.
              </p>
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
            Want to read more?
          </h3>
          <p className="text-gray-400 mb-6">
            Follow me on Medium and other platforms for the latest articles on cloud architecture,
            serverless development, and software engineering best practices.
          </p>
          <a
            href="https://medium.com/@manishmitra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            <FiExternalLink />
            Follow on Medium
          </a>
        </motion.div>
      </section>
    </div>
  );
}
