import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import Image from 'next/image';

export default function SummarySection() {
  const { summary } = portfolioData;

  return (
    <SectionWrapper id="summary" title="Professional Summary">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
                 <Image 
                    src="https://picsum.photos/seed/rahul/400/400"
                    width={400}
                    height={400}
                    alt="Rahul Raj"
                    className="rounded-full shadow-lg"
                    data-ai-hint="professional portrait"
                />
            </div>
            <div className="w-full md:w-2/3">
                 <p className="text-lg text-muted-foreground leading-relaxed">
                    {summary}
                </p>
            </div>
        </div>
    </SectionWrapper>
  );
}
