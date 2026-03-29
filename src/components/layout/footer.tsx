'use client';

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { portfolioData } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { contact } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/30">
      <div className="glow-line" />
      <div className="bg-background/50 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {year} Rahul Raj. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
              <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
              <Link href="https://github.com/rahulraj882" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
              <Link href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
              <Link href={`tel:${contact.phone}`} aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
