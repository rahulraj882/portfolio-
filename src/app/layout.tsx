import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from '@/components/layout/page-transition';

export const metadata: Metadata = {
  title: 'Rahul Raj | Software Development Engineer',
  description: 'Portfolio of Rahul Raj — Software Development Engineer with experience in React.js, JavaScript, Node.js, and modern web technologies at Reliance Jio Platforms Limited.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <div className="fixed inset-0 -z-10 h-full w-full bg-background tech-pattern"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_50%)]"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.08),transparent_50%)]"></div>
        
        <div className="relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
