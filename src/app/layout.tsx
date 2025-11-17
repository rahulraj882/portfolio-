import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Rahul Raj | Software Developer',
  description: 'Personal portfolio of Rahul Raj, a Software Developer with experience in React, JavaScript, and modern web technologies.',
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
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_farthest-side_at_50%_100%,hsl(var(--primary)/0.15),transparent)]"></div>
        
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
