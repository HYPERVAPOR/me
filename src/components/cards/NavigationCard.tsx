import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function NavigationCard({ title, description, href, icon }: NavigationCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card p-6 hover-lift cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && <div className="text-[--accent-primary]">{icon}</div>}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-[--accent-primary] transition-colors" />
      </div>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
