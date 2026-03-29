'use client';

import { portfolioData } from '@/lib/portfolio-data';
import SectionWrapper from '@/components/shared/section-wrapper';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin, CheckCircle2, Building2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="space-y-8 perspective-container">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Card className="card-3d glass-card overflow-hidden group">
              {/* Top gradient line */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-gradient-static font-bold">
                      {job.role}
                    </CardTitle>
                    <CardDescription className="font-semibold text-md pt-1.5 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary/60" />
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1.5 text-accent" />
                      {job.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {job.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start group/item"
                    >
                      <div className="relative flex-shrink-0 mt-1.5 mr-3">
                        <CheckCircle2 className="w-5 h-5 text-primary/70 transition-colors duration-300 group-hover/item:text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed text-sm">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
