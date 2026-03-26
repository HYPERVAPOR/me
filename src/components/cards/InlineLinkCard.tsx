import Link from 'next/link';

interface InlineLinkCardProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function InlineLinkCard({ href, icon, children }: InlineLinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2 py-0.5 text-foreground/80 hover:text-[var(--accent-primary)] hover:underline transition-all align-middle rounded border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-white/5"
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
