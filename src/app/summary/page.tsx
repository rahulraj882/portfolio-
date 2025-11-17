'use client';

import SummarySection from '@/components/portfolio/summary-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function SummaryPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <SummarySection />
      </main>
      <Footer />
    </div>
  );
}
