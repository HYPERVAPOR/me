export const SITE = {
  name: 'HYPERVAPOR',
  title: "HYPERVAPOR's Page",
  description: 'Now building Riffpad.ai.',
  // TODO: confirm the canonical domain before deploying (guessed from the email domain).
  url: 'https://hypervapor.org',
  locale: 'en_US',
  themeColor: '#0b0b0c',
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
