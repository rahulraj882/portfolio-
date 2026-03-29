'use client';

import { portfolioData } from "@/lib/portfolio-data";
import SectionWrapper from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, TestTube, Workflow } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend': <Globe className="w-5 h-5" />,
  'Languages': <Code2 className="w-5 h-5" />,
  'Backend & Data': <Database className="w-5 h-5" />,
  'Tools': <Wrench className="w-5 h-5" />,
  'Testing': <TestTube className="w-5 h-5" />,
  'Practices': <Workflow className="w-5 h-5" />,
};

const categoryGradients: Record<string, string> = {
  'Frontend': 'from-blue-500/20 to-cyan-500/20',
  'Languages': 'from-violet-500/20 to-purple-500/20',
  'Backend & Data': 'from-emerald-500/20 to-green-500/20',
  'Tools': 'from-orange-500/20 to-amber-500/20',
  'Testing': 'from-rose-500/20 to-pink-500/20',
  'Practices': 'from-indigo-500/20 to-sky-500/20',
};

const categoryAccents: Record<string, string> = {
  'Frontend': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'Languages': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'Backend & Data': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Tools': 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  'Testing': 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  'Practices': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
};

const badgeAccents: Record<string, string> = {
  'Frontend': 'border-cyan-500/30 hover:bg-cyan-500/15 hover:border-cyan-500/50',
  'Languages': 'border-violet-500/30 hover:bg-violet-500/15 hover:border-violet-500/50',
  'Backend & Data': 'border-emerald-500/30 hover:bg-emerald-500/15 hover:border-emerald-500/50',
  'Tools': 'border-orange-500/30 hover:bg-orange-500/15 hover:border-orange-500/50',
  'Testing': 'border-rose-500/30 hover:bg-rose-500/15 hover:border-rose-500/50',
  'Practices': 'border-indigo-500/30 hover:bg-indigo-500/15 hover:border-indigo-500/50',
};

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40, rotateX: 8, rotateY: -3 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
            viewport={{ once: true, margin: '-30px' }}
            className="group"
          >
            <Card className="card-3d glass-card h-full relative overflow-hidden">
              {/* Background gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[category] || 'from-primary/20 to-accent/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <CardHeader className="relative z-10 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${categoryAccents[category] || 'text-primary bg-primary/10 border-primary/20'} transition-all duration-300 group-hover:scale-110`}>
                    {categoryIcons[category] || <Code2 className="w-5 h-5" />}
                  </div>
                  <CardTitle className="text-lg font-bold">{category}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className={`text-sm px-3 py-1.5 transition-all duration-300 cursor-default hover:-translate-y-0.5 ${badgeAccents[category] || 'border-primary/30 hover:bg-primary/15'}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
