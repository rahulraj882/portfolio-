'use client';

import EducationSection from '@/components/portfolio/education-section';
import CertificationsSection from '@/components/portfolio/certifications-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <EducationSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
