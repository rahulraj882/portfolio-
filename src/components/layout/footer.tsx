import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { portfolioData } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { contact } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {year} Rahul Raj. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/rahulraj882" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`mailto:${contact.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`tel:${contact.phone}`} aria-label="Phone">
              <Phone className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
