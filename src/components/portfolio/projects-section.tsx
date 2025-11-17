import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              <CardDescription>
                <Badge variant="outline">{project.technologies}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkText === "Source Code" ? (
                    <Github className="mr-2 h-4 w-4" />
                  ) : (
                    <LinkIcon className="mr-2 h-4 w-4" />
                  )}
                  {project.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
