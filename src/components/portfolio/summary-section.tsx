'use client';

import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SummarySection() {
  const { summary } = portfolioData;

  return (
    <SectionWrapper id="summary" title="Professional Summary">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto perspective-container"
      >
        <Card className="card-3d glass-card relative overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          <CardContent className="pt-8 pb-8 px-8">
            <Quote className="w-10 h-10 text-primary/20 mb-4" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
