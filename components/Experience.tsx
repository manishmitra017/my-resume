"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTrophy } from "react-icons/fa";
import CompanyLogo from "./CompanyLogo";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      company: "Commonwealth Bank",
      roles: [
        {
          title: "Senior Engineering Manager (Agentic Banking – Gen AI)",
          period: "October 2023 - Present",
          description:
            "Building reusable AI agents and agentic AI capabilities for banking modernization",
          highlights: [
            "Built first GENAI project in bank on RACO for adverse media screening - won CEO Excellence Awards",
            "Built and released reusable expert AI system (Dialogue agent template) and AI agents for E2E dispute journey - won Excellence Awards",
            "Built and experimented with Agentic AI applications for Fraud domain with numerous reusable agents",
            "Grew team from 4 to 80 members in Gen AI domain across Melbourne/Sydney/India",
            "Strong contributor to AIPE projects with campus relationships at Monash/Melbourne University",
            "Working with Pydantic AI, Google ADK, LLMs, Langgraph, ML OPS, A2A, MCP, DevSecOps",
          ],
          featured: true,
        },
      ],
    },
    {
      company: "Wesfarmers OneDigital",
      roles: [
        {
          title: "Principal Engineer - OnePass",
          period: "2022 - 2023",
          description: "Principal QE Engineer/Coach for OnePass Program",
          highlights: [
            "Built engineering foundations within OnePass delivery - one of most successful ventures within Wesfarmers",
            "Ensured OnePass Program delivered high-quality product to customers across Kmart, Bunnings, Target, Catch, OfficeWorks, and Priceline",
            "Built automated test patterns on gRPC/Contract Test using PACT",
            "Improved DORA metrics for the team by reducing time to delivery",
            "Implemented cloud infrastructure testing on AWS with Terraform, Jenkins, and Docker",
          ],
        },
      ],
    },
    {
      company: "ANZ",
      roles: [
        {
          title: "Chapter Lead",
          period: "2021 - 2022",
          description: "Business Banking Domain - API Modernization Platform",
          highlights: [
            "Built API modernization platform and led approximately 120 people across geographies",
            "Managed finances/stakeholders and worked with consultancies to deliver projects",
            "Led quality engineering transformation across 37 squads with diverse teams",
            "Built QE pipeline and principles for Business Banking domain",
            "Mentored QE coaches across APAC, India, Philippines, and Europe",
          ],
        },
      ],
    },
    {
      company: "NAB",
      roles: [
        {
          title: "Engineering Manager",
          period: "March 2018 - April 2021",
          description: "Business Banking and NAB Data Lake",
          highlights: [
            "Built and managed foundations of AWS Business Banking Engineering Labs",
            "Built QE platform for Business Banking - Data Lake and API modernization on cloud platform",
            "Liaised and worked with stakeholders to build and deploy solutions on AWS using Terraform and CDK",
            "Managed stakeholders across various groups and divisions of the bank",
            "Led Data Lake quality engineering for AirFlow and data engineering pipelines",
          ],
        },
      ],
    },
    {
      company: "AIA Australia",
      roles: [
        {
          title: "Senior Test Automation Engineer",
          period: "August 2017 - March 2018",
          description: "Test Automation and Quality Engineering",
          highlights: [
            "Test automation framework development",
            "End-to-end testing implementation",
            "CI/CD pipeline integration",
          ],
        },
      ],
    },
    {
      company: "Wells Fargo",
      roles: [
        {
          title: "Business System Consultant",
          period: "April 2014 - July 2017",
          description: "Business Systems and Quality Engineering",
          highlights: [
            "Business process automation",
            "System integration testing",
            "Stakeholder collaboration and requirement analysis",
          ],
        },
      ],
    },
    {
      company: "Deloitte",
      roles: [
        {
          title: "Assistant Manager",
          period: "February 2011 - April 2014",
          description: "Consulting and Quality Engineering",
          highlights: [
            "Client engagement and project delivery",
            "Quality assurance strategy development",
            "Team leadership and mentoring",
          ],
        },
      ],
    },
    {
      company: "UnitedHealth Group",
      roles: [
        {
          title: "Test Engineer",
          period: "April 2010 - April 2011",
          description: "Healthcare Systems Testing",
          highlights: [
            "Healthcare application testing",
            "Test case development and execution",
            "Defect tracking and reporting",
          ],
        },
      ],
    },
    {
      company: "Oracle Corporation",
      roles: [
        {
          title: "Associate QA Engineer",
          period: "June 2007 - April 2010",
          description: "Quality Assurance Engineering",
          highlights: [
            "Enterprise software testing",
            "Automated test script development",
            "Quality metrics and reporting",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: expIndex * 0.1 }}
            >
              {exp.roles.map((role, roleIndex) => {
                const isExpanded = expandedIndex === expIndex;
                const isFeatured = "featured" in role && role.featured;

                return (
                  <div
                    key={roleIndex}
                    className={`bg-gray-800/40 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden group ${isFeatured
                        ? "border-primary-500/30 ring-1 ring-primary-500/20 shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                        : "border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]"
                      }`}
                  >
                    {/* Card Header - Always Visible */}
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : expIndex)
                      }
                      className="w-full p-6 text-left flex items-center gap-4 hover:bg-gray-700/20 transition-colors"
                    >
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <CompanyLogo company={exp.company} size="md" />
                      </div>

                      {/* Main Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg md:text-xl font-bold text-white truncate">
                            {role.title}
                          </h3>
                          {isFeatured && (
                            <span className="inline-flex items-center gap-1 bg-primary-500/20 text-primary-400 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0">
                              <FaTrophy size={10} />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-primary-400 font-medium">
                            {exp.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {role.period}
                          </span>
                        </div>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className="flex-shrink-0 text-gray-400">
                        {isExpanded ? (
                          <FaChevronUp size={16} />
                        ) : (
                          <FaChevronDown size={16} />
                        )}
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-700/50">
                        <p className="text-gray-300 mb-4">{role.description}</p>

                        <div className="space-y-2">
                          {role.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isExpanded ? { opacity: 1, x: 0 } : {}
                              }
                              transition={{
                                duration: 0.3,
                                delay: hIndex * 0.05,
                              }}
                              className="flex items-start gap-3"
                            >
                              <span className="text-primary-400 mt-1.5 flex-shrink-0">
                                <svg
                                  width="6"
                                  height="6"
                                  viewBox="0 0 6 6"
                                  fill="currentColor"
                                >
                                  <circle cx="3" cy="3" r="3" />
                                </svg>
                              </span>
                              <span className="text-gray-400 text-sm leading-relaxed">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                17+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-gray-700/50 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                9
              </div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div className="h-12 w-px bg-gray-700/50 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                120+
              </div>
              <div className="text-gray-400 text-sm">Team Led</div>
            </div>
            <div className="h-12 w-px bg-gray-700/50 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                3
              </div>
              <div className="text-gray-400 text-sm">Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
