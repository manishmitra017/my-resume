"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import CompanyLogo from "./CompanyLogo";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: "Commonwealth Bank",
      roles: [
        {
          title: "Senior Engineering Manager (Agentic Banking – Gen AI)",
          period: "October 2023 - Present",
          description: "Building reusable AI agents and agentic AI capabilities for banking modernization",
          highlights: [
            "Built first GENAI project in bank on RACO for adverse media screening - won CEO Excellence Awards",
            "Built and released reusable expert AI system (Dialogue agent template) and AI agents for E2E dispute journey - won Excellence Awards",
            "Built and experimented with Agentic AI applications for Fraud domain with numerous reusable agents",
            "Grew team from 4 to 80 members in Gen AI domain across Melbourne/Sydney/India",
            "Strong contributor to AIPE projects with campus relationships at Monash/Melbourne University",
            "Working with Pydantic AI, Google ADK, LLMs, Langgraph, ML OPS, A2A, MCP, DevSecOps",
          ],
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
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400/50 via-purple-400/50 to-cyan-400/50 rounded-full" />

          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="mb-12">
              {exp.roles.map((role, roleIndex) => (
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: expIndex * 0.2 + roleIndex * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center mb-8 ${
                    expIndex % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 w-full">
                    <div className="glass-strong p-4 md:p-6 rounded-xl border-2 border-gray-600/30 hover:border-transparent hover-glow relative overflow-hidden group transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 md:gap-3 mb-3">
                              <CompanyLogo company={exp.company} size="md" />
                              <h4 className="gradient-text font-semibold text-base md:text-lg truncate">
                                {exp.company}
                              </h4>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                              {role.title}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">{role.period}</p>
                          </div>
                          <FaBriefcase className="text-primary-400 text-xl md:text-2xl flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-gray-300 mb-4 text-sm md:text-base">{role.description}</p>
                        <ul className="space-y-2">
                          {role.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-gray-400 text-xs md:text-sm flex items-start"
                            >
                              <span className="text-primary-400 mr-2 flex-shrink-0">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-primary-400 via-purple-400 to-cyan-400 rounded-full border-4 border-gray-900 shadow-glow animate-pulse-glow" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
