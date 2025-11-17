import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-4 mb-12">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
