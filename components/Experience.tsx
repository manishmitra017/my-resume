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
          title: "Chapter Lead - Senior Engineering Manager (Gen AI)",
          period: "November 2024 - Present",
          description: "Leading 25-person AI engineering organization with $6M annual budget",
          highlights: [
            "Delivered conversational AI platform serving 5M+ customers, processing 500K+ daily interactions with 94% automation rate",
            "Reduced customer service costs by $12M annually while improving CSAT from 72% to 89%",
            "Architected multi-agent RAG system achieving 92% accuracy on complex banking queries using Google ADK and Pydantic AI",
            "Established MLOps pipeline reducing model deployment time from 6 weeks to 3 days",
            "Partnered with C-suite on AI strategy, presenting quarterly to Board of Directors",
          ],
        },
        {
          title: "Senior Staff Engineer - Gen AI",
          period: "October 2023 - December 2024",
          description: "Technical lead for AI platform serving 2M+ daily users",
          highlights: [
            "Built production RAG system reducing query response time by 75% while maintaining 89% accuracy",
            "Optimized LLM inference costs by 65% through prompt engineering and caching strategies",
            "Architected vector database solution handling 10M+ embeddings with sub-100ms latency",
            "Developed chunking and retrieval strategies improving context relevance by 45%",
            "Established AI governance framework and model evaluation pipelines",
          ],
        },
      ],
    },
    {
      company: "Wesfarmers OneDigital",
      roles: [
        {
          title: "Principal Engineer",
          period: "May 2022 - October 2023",
          description: "Principal QE Engineer/Coach for OnePass Program",
          highlights: [
            "Built QE culture across OnePass Program",
            "Playwright & Cucumber with TypeScript for UI automation",
            "Event-Driven Testing on MSK Kafka",
            "Mobile App Testing with Appium and WebdriverIO",
            "GRPC and Consumer Driven Contract Testing (PACT FLOW)",
          ],
        },
      ],
    },
    {
      company: "ANZ",
      roles: [
        {
          title: "Chapter Lead",
          period: "April 2021 - May 2022",
          description: "Testing Chapter Lead for BX Tribe",
          highlights: [
            "Built QE Pipeline/Principles across 37 squads",
            "Mentored QE coaches across continents",
            "Playwright with Cucumber, API testing with Jest",
          ],
        },
      ],
    },
    {
      company: "NAB",
      roles: [
        {
          title: "Manager Quality Engineering",
          period: "October 2020 - April 2021",
          description: "Data Lake Quality Engineering",
          highlights: [
            "Airflow & Data Engineering Pipeline testing",
            "Infrastructure Testing using Python, Boto3",
            "AWS infrastructure automation",
          ],
        },
        {
          title: "Senior Consultant Quality Engineering",
          period: "March 2018 - October 2020",
          description: "Business Banking Engineering Labs",
          highlights: [
            "Built Test Pipeline with Docker and Express",
            "AWS deployment with Terraform",
            "Cypress, Jest, Gatling for testing",
            "Infrastructure testing with TerraTest",
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
    <section id="experience" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-400/30" />

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
                  <div className="md:w-1/2">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-primary-400 transition-all hover:shadow-lg hover:shadow-primary-500/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <CompanyLogo company={exp.company} size="md" />
                            <h4 className="text-primary-400 font-semibold text-lg">
                              {exp.company}
                            </h4>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {role.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{role.period}</p>
                        </div>
                        <FaBriefcase className="text-primary-400 text-2xl flex-shrink-0" />
                      </div>
                      <p className="text-gray-300 mb-4">{role.description}</p>
                      <ul className="space-y-2">
                        {role.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-primary-400 mr-2">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 bg-primary-400 rounded-full border-4 border-gray-900" />
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
