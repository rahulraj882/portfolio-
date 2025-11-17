import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import { BadgeCheck } from "lucide-react";

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="flex flex-wrap justify-center gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium"
          >
            <BadgeCheck className="w-5 h-5 mr-2 text-primary" />
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
