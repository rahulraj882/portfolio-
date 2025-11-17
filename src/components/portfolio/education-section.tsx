import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <SectionWrapper id="education" title="Education" className="bg-muted">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <GraduationCap className="w-8 h-8" />
            </div>
            <div>
                <CardTitle className="text-xl text-primary">{education.university}</CardTitle>
                <CardDescription className="font-semibold text-md pt-1">
                    {education.degree}
                </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground gap-2">
            <p className="font-medium">GPA: {education.gpa}</p>
            <p>{education.period}</p>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {education.location}
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
