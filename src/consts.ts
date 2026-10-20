export const SITE = {
  name: 'HYPERVAPOR',
  title: "HYPERVAPOR's Page",
  description: 'Now building Riffpad.ai.',
  // Canonical domain, bound to this site on Vercel.
  url: 'https://hypervapor.org',
  locale: 'en_US',
  themeColor: '#11111b',
  image: '/og.png',
  author: 'Zhening Liu',
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zhening Liu',
    alternateName: 'HYPERVAPOR',
    url: 'https://hypervapor.org',
    email: 'mailto:me@hypervapor.org',
    sameAs: [
      'https://github.com/HYPERVAPOR',
      'https://www.linkedin.com/in/zhening-liu-0a2b79364',
    ],
  },
} as const;
