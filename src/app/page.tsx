import { portfolioData } from '@/lib/portfolio-data';
import Header from '@/components/layout/header';
import HeroSection from '@/components/portfolio/hero-section';
import SummarySection from '@/components/portfolio/summary-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import EducationSection from '@/components/portfolio/education-section';
import CertificationsSection from '@/components/portfolio/certifications-section';
import AiPersonalizerSection from '@/components/portfolio/ai-personalizer-section';
import ContactSection from '@/components/portfolio/contact-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  const {
    name,
    contact,
    summary,
    skills,
    experience,
    projects,
    education,
    certifications,
  } = portfolioData;

  const resumeForAI = `
    Resume of ${name}:
    Contact: Email - ${contact.email}, Phone - ${contact.phone}, LinkedIn - ${contact.linkedin}
    
    Professional Summary:
    ${summary}
    
    Technical Skills:
    ${Object.entries(skills)
      .map(([category, skillList]) => `${category}: ${skillList.join(', ')}`)
      .join('\n')}
      
    Experience:
    ${experience
      .map(
        (job) => `
      - ${job.role} at ${job.company} (${job.period}):
        ${job.description.map((item) => `  - ${item}`).join('\n')}
    `
      )
      .join('')}
      
    Projects:
    ${projects
      .map(
        (project) => `
      - ${project.title} (${project.technologies}):
        ${project.description.map((item) => `  - ${item}`).join('\n')}
    `
      )
      .join('')}
      
    Education:
    ${education.degree} from ${education.university} (${education.period}), GPA: ${
    education.gpa
  }
  `;

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <AiPersonalizerSection resumeContent={resumeForAI} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
