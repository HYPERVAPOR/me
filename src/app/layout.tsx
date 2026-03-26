import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hypervapor.org'),
  title: {
    default: "Zhening Liu - Full-Stack Developer",
    template: "%s | Zhening Liu"
  },
  description: "Personal website of Zhening Liu, a full-stack developer passionate about building elegant web applications. Explore my blogs, projects, and music playlists.",
  keywords: ["Zhening Liu", "Full-Stack Developer", "Web Development", "Software Engineer", "Portfolio", "Blog", "Tech"],
  authors: [{ name: "Zhening Liu", url: "https://hypervapor.org" }],
  creator: "Zhening Liu",
  publisher: "Zhening Liu",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    url: "https://hypervapor.org",
    title: "Zhening Liu - Full-Stack Developer",
    description: "Personal website of Zhening Liu, a full-stack developer passionate about building elegant web applications.",
    siteName: "Zhening Liu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zhening Liu - Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhening Liu - Full-Stack Developer",
    description: "Personal website of Zhening Liu, a full-stack developer passionate about building elegant web applications.",
    creator: "@hypervapor",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://hypervapor.org",
    languages: {
      'en': 'https://hypervapor.org/en',
      'zh': 'https://hypervapor.org/zh',
    }
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
