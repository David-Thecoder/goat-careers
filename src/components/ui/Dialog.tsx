import type { ReactNode } from 'react';
import { Button } from './Button';

export function Dialog({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5" role="presentation" onClick={onClose}>
      <section
        className="relative w-full max-w-2xl rounded-goat border border-goat-line bg-goat-panel p-7 text-goat-text shadow-mythic"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <Button className="absolute right-3 top-3 h-9 w-9 p-0 text-lg" variant="ghost" onClick={onClose} aria-label="Close dialog">
          ×
        </Button>
        <h2 className="font-display text-4xl uppercase leading-none">{title}</h2>
        <div className="mt-5 text-goat-text2">{children}</div>
      </section>
    </div>
  );
}
