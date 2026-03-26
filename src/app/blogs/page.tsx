import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { AmbientBackground } from '@/components/layout/AmbientBackground';

export const metadata: Metadata = {
  title: "Blogs",
  description: "Technical articles, tutorials, and thoughts on software development, web technologies, and design by Zhening Liu.",
  keywords: ["Blog", "Technical Articles", "Tutorials", "Web Development", "Software Engineering", "Programming", "Tech Blog"],
  openGraph: {
    title: "Blogs - Zhening Liu",
    description: "Technical articles, tutorials, and thoughts on software development, web technologies, and design by Zhening Liu.",
    url: "https://hypervapor.org/blogs",
    type: "website",
  },
  twitter: {
    title: "Blogs - Zhening Liu",
    description: "Technical articles, tutorials, and thoughts on software development, web technologies, and design by Zhening Liu.",
  },
  alternates: {
    canonical: "https://hypervapor.org/blogs",
  }
};

export default function BlogsPage() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 flex-1 pt-24 pb-16">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4 text-foreground/40">Blogs</h1>
            <p className="text-lg text-foreground/30">Coming soon...</p>
          </div>
        </Container>
      </main>
    </>
  );
}
