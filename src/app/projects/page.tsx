import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { AmbientBackground } from '@/components/layout/AmbientBackground';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Zhening Liu's portfolio of software development projects, web applications, and technical work.",
  keywords: ["Projects", "Portfolio", "Web Development", "Software Projects", "Full-Stack", "Applications"],
  openGraph: {
    title: "Projects - Zhening Liu",
    description: "Explore Zhening Liu's portfolio of software development projects, web applications, and technical work.",
    url: "https://hypervapor.org/projects",
    type: "website",
  },
  twitter: {
    title: "Projects - Zhening Liu",
    description: "Explore Zhening Liu's portfolio of software development projects, web applications, and technical work.",
  },
  alternates: {
    canonical: "https://hypervapor.org/projects",
  }
};

export default function ProjectsPage() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 flex-1 pt-24 pb-16">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4 text-foreground/40">Projects</h1>
            <p className="text-lg text-foreground/30">Coming soon...</p>
          </div>
        </Container>
      </main>
    </>
  );
}
