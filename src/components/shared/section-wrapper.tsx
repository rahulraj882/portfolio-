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
    <section id={id} className={cn("container py-16 md:py-24", className)}>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl text-primary mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
