import type { ReactNode } from 'react';

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-0 mb-2 hidden w-max max-w-64 rounded-xl border border-goat-line bg-goat-panel px-3 py-2 text-xs text-goat-text2 shadow-mythic group-hover:block">
        {label}
      </span>
    </span>
  );
}
