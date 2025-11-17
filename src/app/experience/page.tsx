'use client';

import ExperienceSection from '@/components/portfolio/experience-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
