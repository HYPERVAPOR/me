'use client';

import { type HTMLAttributes, useState } from 'react';

interface SocialLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  showLabel?: boolean;
}

export function SocialLink({
  href,
  icon: Icon,
  label,
  showLabel = true,
  className = '',
  ...props
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-foreground/80 hover:text-[var(--accent-primary)] hover:underline transition-all ${className}`}
      aria-label={label}
      {...props}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      {showLabel && <span className="text-base">{label}</span>}
    </a>
  );
}

interface CopyToClipboardProps {
  email: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function CopyToClipboard({ email, icon: Icon }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="relative flex items-center justify-center w-12 h-12 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 transition-all"
      aria-label={`Copy ${email} to clipboard`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[--accent-primary] text-white text-xs font-medium rounded whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-200">
          Copied!
        </span>
      )}
    </button>
  );
}
