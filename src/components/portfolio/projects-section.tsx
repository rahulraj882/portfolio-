'use client';

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
import { ArrowRight, Github, Link as LinkIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <Card className="flex flex-col h-full card-3d glass-card overflow-hidden group">
              {/* Top gradient accent */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gradient-static font-bold">{project.title}</CardTitle>
                <CardDescription className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.split(', ').map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {project.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent transition-colors group/link">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText === "Source Code" ? (
                      <Github className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    {project.linkText}
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
