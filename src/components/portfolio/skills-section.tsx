import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" title="Technical Skills" className="bg-muted">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
