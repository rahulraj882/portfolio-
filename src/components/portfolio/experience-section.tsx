import { portfolioData } from '@/lib/portfolio-data';
import SectionWrapper from '@/components/shared/section-wrapper';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="space-y-8">
        {experience.map((job, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <CardTitle className="text-xl text-primary">{job.role}</CardTitle>
                <div className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full">
                  {job.period}
                </div>
              </div>
              <CardDescription className="font-semibold text-md pt-1">
                {job.company}
              </CardDescription>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
