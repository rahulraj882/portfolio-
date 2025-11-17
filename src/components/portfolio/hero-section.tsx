import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, ArrowDown } from "lucide-react";

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
    <section className="py-24 md:py-40">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2">
          {name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Software Development Engineer passionate about building modern, scalable web applications.
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <Button
              key={label}
              variant="outline"
              className="gap-2 rounded-full"
              asChild
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full group">
            <Link href="#contact">
              Get in Touch
              <ArrowDown className="ml-2 h-5 w-5 transform group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
