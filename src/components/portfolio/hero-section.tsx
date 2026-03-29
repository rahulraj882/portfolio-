'use client';

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, Github, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { name, contact } = portfolioData;

  const socialLinks = [
    {
      href: contact.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/rahulraj882",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: `mailto:${contact.email}`,
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
    },
    {
      href: `tel:${contact.phone}`,
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Floating 3D orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 perspective-container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Software Development Engineer</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter pb-2">
              <span className="text-gradient">{name}</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Building scalable, high-performance web applications with
              <span className="text-primary font-semibold"> React.js</span>,
              <span className="text-primary font-semibold"> JavaScript</span> &
              <span className="text-primary font-semibold"> Node.js</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex justify-center md:justify-start items-center flex-wrap gap-3"
            >
              {socialLinks.map(({ href, icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {icon}
                      <span className="hidden sm:inline">{label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <Button asChild size="lg" className="rounded-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 px-8">
                <Link href="/#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />

              {/* Gradient border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary">
                <div className="rounded-full overflow-hidden bg-background p-1">
                  <Image
                    src="/rahul-profile.jpeg"
                    alt="Rahul Raj - Software Development Engineer"
                    width={280}
                    height={280}
                    className="rounded-full object-cover object-top w-56 h-56 md:w-72 md:h-72 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Decorative floating dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary/40 floating" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-accent/40 floating-delayed" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
