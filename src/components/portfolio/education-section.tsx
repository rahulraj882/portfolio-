'use client';

import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <SectionWrapper id="education" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto perspective-container"
      >
        <Card className="card-3d glass-card overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary p-3.5 rounded-xl border border-primary/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-xl text-gradient-static font-bold">
                  {education.university}
                </CardTitle>
                <p className="font-semibold text-muted-foreground pt-1.5">
                  {education.degree}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground gap-3">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                <Award className="w-4 h-4" />
                <span className="font-semibold">GPA: {education.gpa}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/60" />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{education.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
