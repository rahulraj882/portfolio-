'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#summary', label: 'Summary' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Track active section for highlighting
      if (pathname === '/') {
        const sections = ['contact', 'education', 'projects', 'skills', 'experience', 'summary'];
        let found = '';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
              found = id;
              break;
            }
          }
        }
        setActiveSection(found);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace('/#', '');
    if (pathname === '/') {
      return activeSection === id;
    }
    return pathname === `/${id}`;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'border-b border-border/30 glass-card-strong shadow-lg shadow-background/50'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-lg group"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground p-2.5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
            <Code2 className="h-5 w-5" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gradient-static">Rahul Raj</span>
        </Link>
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground px-3 py-2 rounded-lg",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "hover:bg-muted/50"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="glass-card">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card-strong">
              <nav className="grid gap-4 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-muted-foreground transition-all duration-300 hover:text-foreground px-4 py-2 rounded-lg",
                       isActive(link.href) && "text-primary bg-primary/10"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
