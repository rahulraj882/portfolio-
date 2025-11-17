export type Contact = {
  phone: string;
  email: string;
  linkedin: string;
};

export type Skills = {
  'Programming Languages': string[];
  'Frontend Technologies': string[];
  Tools: string[];
  'CS Fundamentals': string[];
};

export type Experience = {
  company: string;
  period: string;
  role: string;
  location: string;
  description: string[];
};

export type Project = {
  title: string;
  technologies: string;
  link: string;
  linkText: string;
  description: string[];
};

export type Education = {
  university: string;
  period: string;
  degree: string;
  gpa: string;
  location: string;
};

export type PortfolioData = {
  name: string;
  contact: Contact;
  summary: string;
  skills: Skills;
  certifications: string[];
  experience: Experience[];
  projects: Project[];
  education: Education;
};
