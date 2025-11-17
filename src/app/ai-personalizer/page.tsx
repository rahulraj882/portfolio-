'use client';

import AiPersonalizerSection from '@/components/portfolio/ai-personalizer-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { portfolioData } from '@/lib/portfolio-data';


export default function AiPersonalizerPage() {
    const {
        name,
        contact,
        summary,
        skills,
        experience,
        projects,
        education,
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
        <AiPersonalizerSection resumeContent={resumeForAI} />
      </main>
      <Footer />
    </div>
  );
}
