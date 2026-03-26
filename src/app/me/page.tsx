import type { Metadata } from 'next';
import { Rocket, FileText, Music, GraduationCap, Building } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { AmbientBackground } from '@/components/layout/AmbientBackground';
import { NavigationCard } from '@/components/cards/NavigationCard';
import { ContactCard } from '@/components/cards/ContactCard';
import { InlineLinkCard } from '@/components/cards/InlineLinkCard';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Zhening Liu, a full-stack developer and Computer Science postgraduate at SWJTU. Discover my background, skills, and interests.",
  keywords: ["Zhening Liu", "About", "Full-Stack Developer", "SWJTU", "Puppyone AI", "Software Engineer"],
  openGraph: {
    title: "About Me - Zhening Liu",
    description: "Learn more about Zhening Liu, a full-stack developer and Computer Science postgraduate at SWJTU. Discover my background, skills, and interests.",
    url: "https://hypervapor.org/me",
  },
  twitter: {
    title: "About Me - Zhening Liu",
    description: "Learn more about Zhening Liu, a full-stack developer and Computer Science postgraduate at SWJTU. Discover my background, skills, and interests.",
  },
  alternates: {
    canonical: "https://hypervapor.org/me",
  }
};

export default function MePage() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 flex-1 pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <FadeIn delay={0}>
            <section className="mb-12">
              <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hi there!
              </h1>
            </section>
          </FadeIn>

          {/* About Me Section */}
          <FadeIn delay={0.1}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">About me</h2>
              <div className="text-base text-foreground/80 max-w-2xl space-y-2">
                <p>
                  I'm Zhening Liu, a <span className="text-[var(--accent-primary)]">full-stack developer</span> passionate about building elegant web applications.
                </p>
                <p>
                  Postgraduate in Computer Science at <InlineLinkCard href="https://en.swjtu.edu.cn/" icon={<GraduationCap className="w-4 h-4" />}>SWJTU</InlineLinkCard>.
                </p>
                <p>
                  Used to work as an intern at <InlineLinkCard href="https://www.puppyone.ai/en" icon={<Building className="w-4 h-4" />}>Puppyone AI</InlineLinkCard>.
                </p>
              </div>
            </section>
          </FadeIn>

          {/* Find Me On Section */}
          <FadeIn delay={0.2}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Find me on</h2>
              <ContactCard />
            </section>
          </FadeIn>

          {/* Explore More Section */}
          <FadeIn delay={0.3}>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Explore more</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NavigationCard
                  title="Projects"
                  description="Check out my latest projects and work."
                  href="/projects"
                  icon={<Rocket className="w-6 h-6" />}
                />
                <NavigationCard
                  title="Blogs"
                  description="Technical articles, tutorials, and thoughts on software development and design."
                  href="/blogs"
                  icon={<FileText className="w-6 h-6" />}
                />
                <NavigationCard
                  title="Tracks"
                  description="Curated music playlists and audio experiences."
                  href="/tracks"
                  icon={<Music className="w-6 h-6" />}
                />
              </div>
            </section>
          </FadeIn>
        </Container>
      </main>
    </>
  );
}
