'use client';

import ProjectsSection from '@/components/portfolio/projects-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
