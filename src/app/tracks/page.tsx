import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { AmbientBackground } from '@/components/layout/AmbientBackground';

export const metadata: Metadata = {
  title: "Tracks",
  description: "Curated music playlists and audio experiences by Zhening Liu. Discover my favorite tracks and musical journeys.",
  keywords: ["Music", "Playlists", "Tracks", "Audio", "Music Player", "Curated Music"],
  openGraph: {
    title: "Tracks - Zhening Liu",
    description: "Curated music playlists and audio experiences by Zhening Liu. Discover my favorite tracks and musical journeys.",
    url: "https://hypervapor.org/tracks",
    type: "website",
  },
  twitter: {
    title: "Tracks - Zhening Liu",
    description: "Curated music playlists and audio experiences by Zhening Liu. Discover my favorite tracks and musical journeys.",
  },
  alternates: {
    canonical: "https://hypervapor.org/tracks",
  }
};

export default function TracksPage() {
  return (
    <>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 flex-1 pt-24 pb-16">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4 text-foreground/40">Tracks</h1>
            <p className="text-lg text-foreground/30">Coming soon...</p>
          </div>
        </Container>
      </main>
    </>
  );
}
