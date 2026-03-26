'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { SocialLink } from '@/components/ui/SocialLink';
import { CONTACT_INFO } from '@/lib/constants';

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-6">
        <SocialLink
          href={CONTACT_INFO.discord}
          icon={FaDiscord}
          label="Discord"
          showLabel={true}
        />
        <SocialLink
          href={CONTACT_INFO.linkedin}
          icon={FaLinkedin}
          label="LinkedIn"
          showLabel={true}
        />
        <SocialLink
          href={CONTACT_INFO.github}
          icon={FaGithub}
          label="GitHub"
          showLabel={true}
        />
      </div>
      <div className="relative">
        <div className="text-foreground/60 text-sm flex items-center gap-2">
          Or mail me at{' '}
          <span className="text-[var(--accent-primary)]">{CONTACT_INFO.email}</span>
          <div className="relative">
            <button
              onClick={handleCopy}
              className="text-foreground/40 hover:text-[var(--accent-primary)] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            {copied && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
                ✓ copied
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
