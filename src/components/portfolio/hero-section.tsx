import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  const { name, contact } = portfolioData;

  const socialLinks = [
    {
      href: contact.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Rahulraj711",
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
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">
          {name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Software Development Engineer
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <Button
              key={label}
              variant="outline"
              className="gap-2"
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
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
