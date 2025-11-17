'use client';

import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import Image from 'next/image';

export default function SummarySection() {
  const { summary } = portfolioData;

  return (
    <SectionWrapper id="summary" title="Professional Summary">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
                 <Image
                    src="/profile-pic.jpeg"
                    width={250}
                    height={250}
                    alt="Rahul Raj"
                    className="rounded-full shadow-lg aspect-square object-cover"
                    data-ai-hint="professional portrait"
                />
            </div>
            <div className="w-full md:w-2/3">
                 <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                    {summary}
                </p>
            </div>
        </div>
    </SectionWrapper>
  );
}
