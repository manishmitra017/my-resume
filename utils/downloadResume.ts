import { jsPDF } from 'jspdf';

export const downloadResumeAsPDF = () => {
  try {
    // Calculate years of experience from June 2007
    const calculateYearsOfExperience = () => {
      const startDate = new Date(2007, 5, 1); // June 2007 (month is 0-indexed)
      const currentDate = new Date();
      const years = currentDate.getFullYear() - startDate.getFullYear();
      const months = currentDate.getMonth() - startDate.getMonth();
      return months < 0 ? years - 1 : years;
    };

    const yearsOfExperience = calculateYearsOfExperience();

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    let currentY = margin;

    // Colors
    const colors = {
      primary: [14, 165, 233] as [number, number, number],
      dark: [26, 26, 26] as [number, number, number],
      gray: [75, 85, 99] as [number, number, number],
      lightGray: [156, 163, 175] as [number, number, number],
    };

    // Page break helper
    const checkPageBreak = (space: number): boolean => {
      if (currentY + space > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
        return true;
      }
      return false;
    };

    // Section divider
    const drawDivider = () => {
      doc.setDrawColor(...colors.lightGray);
      doc.setLineWidth(0.2);
      doc.line(margin, currentY, pageWidth - margin, currentY);
      currentY += 5;
    };

    // ===== HEADER =====
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(...colors.dark);
    doc.text('Manish Mitra', margin, currentY);
    currentY += 9;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(13);
    doc.setTextColor(...colors.primary);
    doc.text('AI Leadership | Senior Engineering Manager', margin, currentY);
    currentY += 10;

    // Contact Info
    doc.setFontSize(9);
    doc.setTextColor(...colors.gray);
    const contacts = [
      ['manishmitra013@gmail.com', 'Melbourne, Victoria, Australia'],
      ['linkedin.com/in/manish-mitra', 'github.com/manishmitra017'],
      ['manishmitra.com', '']
    ];

    contacts.forEach(([left, right]) => {
      if (left === 'manishmitra.com') {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...colors.primary);
        doc.text('Portfolio: manishmitra.com', margin, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...colors.gray);
      } else {
        doc.text(left, margin, currentY);
        if (right) {
          const rightWidth = doc.getTextWidth(right);
          doc.text(right, pageWidth - margin - rightWidth, currentY);
        }
      }
      currentY += 4;
    });

    currentY += 3;
    drawDivider();

    // ===== PROFESSIONAL SUMMARY =====
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('PROFESSIONAL SUMMARY', margin, currentY);
    currentY += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.gray);
    const summary = `Engineering leader with ${yearsOfExperience}+ years of experience. Currently Senior Engineering Manager (Agentic Banking - Gen AI) at Commonwealth Bank. Built the first GENAI project in the bank on RACO for adverse media screening, winning CEO Excellence Awards. Deep expertise in Agentic AI frameworks including Pydantic AI, Google ADK, LangGraph, MCP, ML OPS, and A2A. Previously led 120 people at ANZ building API modernization platform, served as Principal Engineer at Wesfarmers for OnePass, and built AWS Business Banking Engineering Labs at NAB.`;
    const summaryLines = doc.splitTextToSize(summary, pageWidth - 2 * margin);
    doc.text(summaryLines, margin, currentY);
    currentY += (summaryLines.length * 4) + 4;

    // Key Highlights
    currentY += 2;
    const highlights = [
      'Built first GENAI project in bank winning CEO Excellence Awards - reusable AI agents and dialogue templates',
      'Grew team from 4 to 80 members across Melbourne/Sydney/India in Gen AI domain',
      'Led 120 people at ANZ building API modernization platform across APAC, India, Philippines, and Europe',
      'Strong contributor to AIPE projects with campus relationships at Monash/Melbourne University'
    ];

    highlights.forEach((h) => {
      checkPageBreak(6);
      doc.setFillColor(...colors.primary);
      doc.circle(margin + 1.8, currentY - 0.8, 0.7, 'F');
      const lines = doc.splitTextToSize(h, pageWidth - 2 * margin - 6);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...colors.gray);
      doc.text(lines, margin + 5, currentY);
      currentY += (lines.length * 4);
    });

    currentY += 2;
    drawDivider();

    // ===== EXPERIENCE =====
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('PROFESSIONAL EXPERIENCE', margin, currentY);
    currentY += 7;

    const experiences = [
      {
        title: 'Senior Engineering Manager (Agentic Banking - Gen AI)',
        company: 'Commonwealth Bank',
        period: 'October 2023 - Present',
        highlights: [
          'Built first GENAI project in bank on RACO for adverse media screening - won CEO Excellence Awards',
          'Built and released reusable expert AI system and AI agents for E2E dispute journey - won Excellence Awards',
          'Built and experimented with Agentic AI applications for Fraud domain with numerous reusable agents',
          'Grew team from 4 to 80 members in Gen AI domain across Melbourne/Sydney/India',
          'Strong contributor to AIPE projects with campus relationships at Monash/Melbourne University',
          'Working with Pydantic AI, Google ADK, LLMs, Langgraph, ML OPS, A2A, MCP, DevSecOps'
        ]
      },
      {
        title: 'Principal Engineer - OnePass',
        company: 'Wesfarmers OneDigital',
        period: '2022 - 2023',
        highlights: [
          'Built engineering foundations within OnePass delivery - one of most successful ventures within Wesfarmers',
          'Ensured OnePass Program delivered high-quality product across Kmart, Bunnings, Target, Catch, OfficeWorks, Priceline',
          'Built automated test patterns on gRPC/Contract Test using PACT',
          'Improved DORA metrics for the team by reducing time to delivery',
          'Implemented cloud infrastructure testing on AWS with Terraform, Jenkins, and Docker'
        ]
      },
      {
        title: 'Chapter Lead',
        company: 'ANZ',
        period: '2021 - 2022',
        highlights: [
          'Built API modernization platform and led approximately 120 people across geographies',
          'Managed finances/stakeholders and worked with consultancies to deliver projects',
          'Led quality engineering transformation across 37 squads with diverse teams',
          'Built QE pipeline and principles for Business Banking domain',
          'Mentored QE coaches across APAC, India, Philippines, and Europe'
        ]
      },
      {
        title: 'Engineering Manager',
        company: 'NAB',
        period: 'March 2018 - April 2021',
        highlights: [
          'Built and managed foundations of AWS Business Banking Engineering Labs',
          'Built QE platform for Business Banking - Data Lake and API modernization on cloud platform',
          'Liaised and worked with stakeholders to build and deploy solutions on AWS using Terraform and CDK',
          'Led Data Lake quality engineering for AirFlow and data engineering pipelines'
        ]
      },
      {
        title: 'Senior Test Automation Engineer',
        company: 'AIA Australia',
        period: 'August 2017 - March 2018',
        highlights: [
          'Test automation framework development',
          'End-to-end testing implementation',
          'CI/CD pipeline integration'
        ]
      },
      {
        title: 'Business System Consultant',
        company: 'Wells Fargo',
        period: 'April 2014 - July 2017',
        highlights: [
          'Business process automation',
          'System integration testing',
          'Stakeholder collaboration and requirement analysis'
        ]
      },
      {
        title: 'Assistant Manager',
        company: 'Deloitte',
        period: 'February 2011 - April 2014',
        highlights: [
          'Client engagement and project delivery',
          'Quality assurance strategy development',
          'Team leadership and mentoring'
        ]
      },
      {
        title: 'Test Engineer',
        company: 'UnitedHealth Group',
        period: 'April 2010 - April 2011',
        highlights: [
          'Healthcare application testing',
          'Test case development and execution'
        ]
      },
      {
        title: 'Associate QA Engineer',
        company: 'Oracle Corporation',
        period: 'June 2007 - April 2010',
        highlights: [
          'Enterprise software testing',
          'Automated test script development'
        ]
      }
    ];

    experiences.forEach((exp, index) => {
      checkPageBreak(40);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(...colors.dark);
      doc.text(exp.title, margin, currentY);
      currentY += 5;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...colors.primary);
      doc.text(exp.company, margin, currentY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...colors.gray);
      const periodWidth = doc.getTextWidth(exp.period);
      doc.text(exp.period, pageWidth - margin - periodWidth, currentY);
      currentY += 5;

      exp.highlights.forEach((h) => {
        checkPageBreak(6);
        doc.setFillColor(...colors.primary);
        doc.circle(margin + 1.8, currentY - 0.8, 0.7, 'F');
        const lines = doc.splitTextToSize(h, pageWidth - 2 * margin - 6);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...colors.gray);
        doc.text(lines, margin + 5, currentY);
        currentY += (lines.length * 4);
      });

      if (index < experiences.length - 1) {
        currentY += 4;
      }
    });

    currentY += 3;
    drawDivider();

    // ===== SKILLS =====
    checkPageBreak(70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('SKILLS & TECHNOLOGIES', margin, currentY);
    currentY += 7;

    const skills = [
      {
        cat: 'Agentic AI & Frameworks',
        items: ['Model Context Protocol (MCP)', 'OpenAI Agents SDK', 'Google ADK', 'Pydantic AI', 'LangGraph', 'LlamaIndex', 'AutoGen', 'A2A']
      },
      {
        cat: 'LLM & GenAI',
        items: ['OpenAI SDK', 'GPT-4/GPT-4o', 'Anthropic Claude SDK', 'Prompt Engineering', 'RAG Systems', 'Vector Databases', 'Embeddings', 'LLMOps']
      },
      {
        cat: 'AI Evaluation & Observability',
        items: ['LangFuse', 'Agent Evaluation', 'LLM Tracing', 'Prompt Optimization', 'Cost Analytics', 'Performance Monitoring', 'A/B Testing', 'Model Benchmarking']
      },
      {
        cat: 'Programming & APIs',
        items: ['Python (Fast API)', 'TypeScript', 'Next.js', 'REST API', 'gRPC', 'GraphQL', 'GH Actions', 'React']
      },
      {
        cat: 'Cloud & DevOps',
        items: ['AWS (SA + Dev + AI Certified)', 'DevSecOps', 'MLOps', 'DORA Specialist', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
      },
      {
        cat: 'Testing & QE',
        items: ['Playwright', 'Cypress', 'Jest', 'Cucumber', 'Appium', 'PACT Flow', 'TerraTest', 'Kafka Testing']
      }
    ];

    skills.forEach((s) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...colors.dark);
      doc.text(s.cat, margin, currentY);
      currentY += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...colors.gray);
      const skillText = s.items.join(' | ');
      const skillLines = doc.splitTextToSize(skillText, pageWidth - 2 * margin);
      doc.text(skillLines, margin, currentY);
      currentY += (skillLines.length * 4) + 3;
    });

    drawDivider();

    // ===== EDUCATION =====
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('EDUCATION', margin, currentY);
    currentY += 7;

    const education = [
      { degree: "Master's Degree", field: 'Master of Computer Application', institution: 'Indira Gandhi National Open University', period: '2007 - 2010' },
      { degree: "Bachelor's Degree", field: 'Electronics and Computer Science', institution: 'Bhavans Vivekanada College', period: '2004 - 2007' }
    ];

    education.forEach((edu) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...colors.dark);
      doc.text(`${edu.degree} - ${edu.field}`, margin, currentY);
      currentY += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...colors.gray);
      doc.text(edu.institution, margin, currentY);
      const yearWidth = doc.getTextWidth(edu.period);
      doc.text(edu.period, pageWidth - margin - yearWidth, currentY);
      currentY += 6;
    });

    currentY += 1;
    drawDivider();

    // ===== PERSONAL PROJECTS =====
    checkPageBreak(50);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('PERSONAL PROJECTS', margin, currentY);
    currentY += 7;

    const projects = [
      {
        name: 'PentestAI',
        tagline: 'AI-Powered Security Testing Framework',
        description: 'Open-source penetration testing framework built on Google\'s Agent Development Kit (ADK) that automates security assessments through specialized AI agents following PTES methodology.',
        tech: 'Python, Google ADK, Security Tools (Nmap, OWASP ZAP)',
        github: 'github.com/manishmitra017/Pentest-google-adk-agent'
      },
      {
        name: 'BSM Melbourne Website',
        tagline: 'Community Platform for Bengali Diaspora',
        description: 'Full-stack bilingual community platform serving the Bengali Society of Melbourne with event management, membership system, and automated deployments.',
        tech: 'Next.js 15, TypeScript, AWS (ECS Fargate, ALB, Route53), Docker, React 19',
        github: 'github.com/manishmitra017/bsm-website',
        live: 'bsm.org.au'
      },
      {
        name: 'Video-to-SOP Automation',
        tagline: 'AI-Powered Documentation Generator',
        description: 'Intelligent tool that transforms screen recordings into detailed step-by-step user journey documentation using multimodal LLM analysis.',
        tech: 'Python, Google Gemini (Multimodal LLM)',
        github: 'github.com/manishmitra017/video-sop'
      },
      {
        name: 'Cosmic Renewable Energy',
        tagline: 'Green Tech Business Platform',
        description: 'Modern responsive business website for renewable energy company with integrated quote management and service showcase.',
        tech: 'Next.js 15, FastAPI, TypeScript, Tailwind CSS',
        github: 'github.com/manishmitra017/cosmic-renwable'
      }
    ];

    projects.forEach((project) => {
      checkPageBreak(25);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...colors.dark);
      doc.text(project.name, margin, currentY);
      currentY += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...colors.primary);
      const taglineLines = doc.splitTextToSize(project.tagline, pageWidth - 2 * margin);
      doc.text(taglineLines, margin, currentY);
      currentY += (taglineLines.length * 3.5) + 1;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...colors.gray);
      const descLines = doc.splitTextToSize(project.description, pageWidth - 2 * margin);
      doc.text(descLines, margin, currentY);
      currentY += (descLines.length * 3.5) + 2;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(...colors.dark);
      doc.text('Technologies:', margin, currentY);
      currentY += 3;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...colors.gray);
      const techLines = doc.splitTextToSize(project.tech, pageWidth - 2 * margin);
      doc.text(techLines, margin, currentY);
      currentY += (techLines.length * 3.5) + 2;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...colors.primary);
      doc.text(`GitHub: ${project.github}`, margin, currentY);
      currentY += 3;

      if (project.live) {
        doc.text(`Live: ${project.live}`, margin, currentY);
        currentY += 3;
      }

      currentY += 3;
    });

    drawDivider();

    // ===== CERTIFICATIONS =====
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.dark);
    doc.text('CERTIFICATIONS & AWARDS', margin, currentY);
    currentY += 7;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Professional Certifications', margin, currentY);
    currentY += 5;

    const certs = [
      'AWS Certified Solutions Architect',
      'AWS Certified Developer',
      'AWS AI Certified',
      'ITIL Certificate',
      'Salesforce Certified Administrator',
      'Microsoft Azure Fundamentals',
      'CCBA (IIBA)'
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...colors.gray);
    certs.forEach((cert) => {
      checkPageBreak(5);
      doc.setFillColor(...colors.primary);
      doc.circle(margin + 1.8, currentY - 0.8, 0.7, 'F');
      doc.text(cert, margin + 5, currentY);
      currentY += 4.5;
    });

    currentY += 2;
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...colors.dark);
    doc.text('Honors & Awards', margin, currentY);
    currentY += 5;

    const awards = [
      { name: 'CEO Excellence Awards', desc: 'Won for building first GENAI project in bank on RACO for adverse media screening' },
      { name: 'Excellence Awards', desc: 'Won for building reusable expert AI system and AI agents for E2E dispute journey' },
      { name: 'Spot Award Winner', desc: 'Recognition for exceptional performance and contributions' },
      { name: 'Achieving Excellence', desc: 'Award for consistent high-quality delivery and leadership' }
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    awards.forEach((award) => {
      checkPageBreak(8);
      doc.setFillColor(...colors.primary);
      doc.circle(margin + 1.8, currentY - 0.8, 0.7, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...colors.dark);
      doc.text(award.name, margin + 5, currentY);
      currentY += 3.5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...colors.gray);
      const descLines = doc.splitTextToSize(award.desc, pageWidth - 2 * margin - 5);
      doc.text(descLines, margin + 5, currentY);
      currentY += (descLines.length * 3.5) + 2;
    });

    // Footer
    const footerY = pageHeight - 8;
    doc.setFontSize(7);
    doc.setTextColor(...colors.lightGray);
    const footerText = 'Generated with Claude Code';
    const footerWidth = doc.getTextWidth(footerText);
    doc.text(footerText, (pageWidth - footerWidth) / 2, footerY);

    // Page numbers
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(...colors.lightGray);
      const pageText = `Page ${i} of ${pageCount}`;
      const pageWidth2 = doc.getTextWidth(pageText);
      doc.text(pageText, pageWidth - margin - pageWidth2, footerY);
    }

    doc.save('Manish_Mitra_Resume.pdf');
    console.log('PDF generated successfully');

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
