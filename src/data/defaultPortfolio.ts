import { PortfolioProfile } from '../types/portfolio';

export const DEFAULT_PORTFOLIO: PortfolioProfile = {
  fullName: 'Arzeus Arayata',
  initials: 'AA',
  programAndSection: 'BSCS 3-2',
  institution: 'Cavite State University — Bacoor City Campus',
  department: 'Department of Computer Studies',
  course: 'DCIT 26: Application Dev’t and Emerging Technologies',
  tagline: 'Designing dependable web applications with clarity, speed, and human-centered engineering.',
  heroIntro:
    'I am a third-year Computer Science student at Cavite State University Bacoor City Campus based in Las Piñas City, building accessible full-stack interfaces, data-driven campus utilities, and practical emerging-technology prototypes.',
  aboutHeadline: 'Bridging structured software fundamentals with modern interface craft.',
  aboutParagraphs: [
    'As a Computer Science student under the Department of Computer Studies, I approach software development from both an algorithmic and human perspective. Every system I build begins with clear problem framing, semantic structure, and responsive performance across mobile and desktop viewports.',
    'Through coursework in Application Development and Emerging Technologies (DCIT 26) and independent hands-on builds, I focus on writing maintainable TypeScript, designing clean relational and client-side workflows, and validating usability with real community scenarios across Las Piñas City and Bacoor, Cavite.',
  ],
  location: 'Las Piñas City, Philippines',
  email: 'arzeus.arayata@cvsu.edu.ph',
  githubHandle: 'github.com/arzeusarayata/arzeus-portfolio',
  githubUrl: 'https://github.com/arzeusarayata/arzeus-portfolio',
  linkedinHandle: 'linkedin.com/in/arzeusarayata',
  linkedinUrl: 'https://linkedin.com',
  skills: [
    {
      id: 'skill-react-ts',
      name: 'React & TypeScript',
      category: 'Frontend',
      proficiency: 'Core Stack',
      practicalExample: 'Built the real-time telemetry interface and strongly typed sensor state models for the Coolect smart cooling dashboard.',
    },
    {
      id: 'skill-tailwind',
      name: 'Tailwind CSS, Grid & Flexbox',
      category: 'Frontend',
      proficiency: 'Core Stack',
      practicalExample: 'Engineered responsive multi-breakpoint monitoring layouts and accessible WCAG AA contrast systems for Coolect.',
    },
    {
      id: 'skill-a11y-seo',
      name: 'Semantic HTML5 & Technical SEO',
      category: 'Frontend',
      proficiency: 'Proficient',
      practicalExample: 'Implemented OpenGraph social cards, Schema.org JSON-LD markup, landmark regions, and descriptive image alt text.',
    },
    {
      id: 'skill-node-express',
      name: 'Node.js & REST API Design',
      category: 'Backend & Data',
      proficiency: 'Proficient',
      practicalExample: 'Structured temperature threshold endpoints and cooling-schedule APIs for automated eco-mode adjustments.',
    },
    {
      id: 'skill-sql',
      name: 'Relational Databases (PostgreSQL / MySQL)',
      category: 'Backend & Data',
      proficiency: 'Proficient',
      practicalExample: 'Designed time-series energy logs and ambient thermal history schemas using normalized SQL tables.',
    },
    {
      id: 'skill-iot-telemetry',
      name: 'IoT Telemetry & Sensor Automation',
      category: 'Emerging Tech',
      proficiency: 'Applied Lab',
      practicalExample: 'Integrated ambient temperature, humidity, and occupancy triggers into Coolect to minimize idle power consumption.',
    },
    {
      id: 'skill-eco-analytics',
      name: 'Energy Optimization & SVG Visualization',
      category: 'Emerging Tech',
      proficiency: 'Applied Lab',
      practicalExample: 'Created lightweight SVG cooling load dials and kWh efficiency trend visualizations without heavy chart libraries.',
    },
    {
      id: 'skill-git-deploy',
      name: 'Git Workflow & Cloud Deployment',
      category: 'Backend & Data',
      proficiency: 'Core Stack',
      practicalExample: 'Managed feature branches, automated Vite production builds, and continuous static deployments with custom domains.',
    },
  ],
  projects: [
    {
      id: 'proj-coolect',
      title: 'Coolect: Eco-Friendly Smart Cooling System',
      category: 'Emerging Tech',
      year: '2026',
      role: 'Lead Developer & IoT Systems Architect',
      summary:
        'An eco-friendly smart cooling system that combines ambient temperature sensing, occupancy awareness, and adaptive airflow control to reduce wasted electricity.',
      challenge:
        'Conventional cooling units run at fixed high-power intervals regardless of room occupancy or outdoor ambient shifts, leading to unnecessary energy draw and higher electricity costs.',
      solution:
        'Engineered Coolect with automated eco-cooling schedules, real-time thermal and humidity threshold monitoring, and a responsive web control panel that prioritizes low-power ventilation before engaging active cooling.',
      outcome:
        'Demonstrated measurable idle-power reduction in simulated classroom and home scenarios while maintaining comfortable indoor temperatures.',
      technologies: ['React', 'TypeScript', 'IoT Sensors', 'Tailwind CSS', 'Eco-Automation'],
      image: '/images/project-coolect.svg',
      imageAlt: 'Interface preview of Coolect eco-friendly smart cooling system showing thermal dial, zone sensors, and energy efficiency trend.',
      repoUrl: 'https://github.com/arzeusarayata/arzeus-portfolio',
      liveUrl: '#projects',
      featured: true,
    },
  ],
  certificates: [
    {
      id: 'cert-rwd',
      title: 'Responsive Web Design & Semantic Accessibility',
      issuer: 'freeCodeCamp Developer Curriculum',
      date: 'March 2026',
      credentialId: 'FCC-RWD-2026-8419',
      summary:
        '300-hour certification covering modern CSS Grid, Flexbox architecture, mobile-first media queries, and WCAG accessibility standards.',
      image: '/images/cert-web-design.svg',
      imageAlt: 'Certificate of completion for Responsive Web Design and Semantic Accessibility issued in March 2026.',
      verificationUrl: '#certificates',
    },
    {
      id: 'cert-js-algos',
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp Developer Curriculum',
      date: 'January 2026',
      credentialId: 'FCC-JSAD-2026-3902',
      summary:
        'Validated proficiency in functional programming, algorithmic problem-solving, recursion, and structured data manipulation in ES2022+.',
      image: '/images/cert-js-algorithms.svg',
      imageAlt: 'Certificate of completion for JavaScript Algorithms and Data Structures issued in January 2026.',
      verificationUrl: '#certificates',
    },
    {
      id: 'cert-emerging-tech',
      title: 'Emerging Technologies & Cloud Web Systems Colloquium',
      issuer: 'CvSU Department of Computer Studies',
      date: 'October 2025',
      credentialId: 'CVSU-DCS-2025-114',
      summary:
        'Departmental technical seminar recognizing applied prototyping in modern web frameworks, cloud deployment pipelines, and UI engineering.',
      image: '/images/cert-emerging-tech.svg',
      imageAlt: 'Certificate of participation for Emerging Technologies and Cloud Web Systems Colloquium at CvSU Department of Computer Studies.',
      verificationUrl: '#certificates',
    },
  ],
  maintenancePlan: [
    {
      cadence: 'Monthly',
      title: 'Project & Certificate Additions',
      description:
        'Publish completed laboratory exercises, DCIT 26 capstone milestones, and newly earned technical certifications with full case-study write-ups.',
      deliverable: 'Versioned release notes & updated portfolio entries',
    },
    {
      cadence: 'Quarterly',
      title: 'Performance, SEO & Accessibility Audit',
      description:
        'Run Lighthouse audits across Chrome, Firefox, Edge, and Safari to verify 95+ scores in Performance, Accessibility, Best Practices, and SEO metadata.',
      deliverable: 'Alt-text verification, broken-link scan & bundle check',
    },
    {
      cadence: 'Semi-Annual',
      title: 'Dependency & Security Maintenance',
      description:
        'Update React, TypeScript, and Vite packages via npm audit, refine responsive breakpoints for new devices, and verify clean production builds.',
      deliverable: 'Zero-vulnerability dependency lockfile & tested build',
    },
    {
      cadence: 'Continuous',
      title: 'Domain, Hosting & Backup Integrity',
      description:
        'Maintain automated Git-triggered deployment on HTTPS cloud hosting with clean canonical URLs, OpenGraph tags, and persistent source backups.',
      deliverable: '99.9% uptime URL with automated CI/CD deployment',
    },
  ],
};
