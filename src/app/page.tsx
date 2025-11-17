'use client';

import { portfolioData } from '@/lib/portfolio-data';
import Header from '@/components/layout/header';
import HeroSection from '@/components/portfolio/hero-section';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
