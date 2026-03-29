'use client';

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  title,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gradient-static pb-2">
              {title}
            </h2>
            <div className="mt-4 mx-auto w-24 glow-line rounded-full" />
          </motion.div>
          {children}
        </div>
      </div>
    </section>
  );
}
