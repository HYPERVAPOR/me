import { Container } from '@/components/layout/Container';

export function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-[var(--glass-border)]">
      <Container>
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Zhening Liu. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
