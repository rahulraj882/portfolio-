import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";

export default function SummarySection() {
  const { summary } = portfolioData;

  return (
    <SectionWrapper id="summary" title="Professional Summary">
      <p className="text-center text-lg text-muted-foreground leading-relaxed">
        {summary}
      </p>
    </SectionWrapper>
  );
}
