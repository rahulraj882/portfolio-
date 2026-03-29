'use client';

import Header from '@/components/layout/header';
import HeroSection from '@/components/portfolio/hero-section';
import SummarySection from '@/components/portfolio/summary-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import EducationSection from '@/components/portfolio/education-section';
import ContactSection from '@/components/portfolio/contact-section';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <SummarySection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
