'use client';

import SkillsSection from '@/components/portfolio/skills-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
