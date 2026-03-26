'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[--accent-primary]'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[--accent-primary] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
