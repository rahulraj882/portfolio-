'use client';

import ContactSection from '@/components/portfolio/contact-section';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
