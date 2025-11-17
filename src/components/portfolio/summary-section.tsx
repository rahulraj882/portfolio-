'use client';

import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";

export default function SummarySection() {
  const { summary } = portfolioData;

  return (
    <SectionWrapper id="summary" title="Professional Summary">
        <div className="max-w-3xl mx-auto">
             <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {summary}
            </p>
        </div>
    </SectionWrapper>
  );
}
