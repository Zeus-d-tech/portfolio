export type ProjectCategory = 'All' | 'Web Apps' | 'Emerging Tech' | 'UI Systems';

export type SkillCategory = 'All' | 'Frontend' | 'Backend & Data' | 'Emerging Tech';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  proficiency: string;
  practicalExample: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  repoUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  summary: string;
  image: string;
  imageAlt: string;
  verificationUrl: string;
}

export interface MaintenanceItem {
  cadence: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface PortfolioProfile {
  fullName: string;
  initials: string;
  programAndSection: string;
  institution: string;
  department: string;
  course: string;
  tagline: string;
  heroIntro: string;
  aboutHeadline: string;
  aboutParagraphs: string[];
  location: string;
  email: string;
  githubHandle: string;
  githubUrl: string;
  linkedinHandle: string;
  linkedinUrl: string;
  skills: SkillItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  maintenancePlan: MaintenanceItem[];
}
