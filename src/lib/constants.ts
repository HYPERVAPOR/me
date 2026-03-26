import type { NavItem } from '@/types/navigation';
import type { ContactInfo } from '@/types/contact';

export const CONTACT_INFO: ContactInfo = {
  email: 'me@hypervapor.org',
  discord: 'https://discord.gg/AdKb7d3r67',
  linkedin: 'https://www.linkedin.com/in/zhening-liu-0a2b79364',
  github: 'https://github.com/HYPERVAPOR',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'me', href: '/me' },
  { label: 'projects', href: '/projects' },
  { label: 'blogs', href: '/blogs' },
  { label: 'tracks', href: '/tracks' },
] as const;
