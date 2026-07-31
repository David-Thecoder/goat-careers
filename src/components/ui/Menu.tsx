import type { ReactNode } from 'react';

export function Menu({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none rounded-full border border-goat-line bg-black/20 px-3.5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[.16em] text-goat-text2 transition hover:text-goat-text">
        {label}
      </summary>
      <div className="absolute right-0 top-11 grid min-w-56 gap-0.5 rounded-2xl border border-goat-line bg-[#0b0b0e] p-2.5 shadow-mythic [&_a]:rounded-xl [&_a]:px-3 [&_a]:py-2.5 [&_a]:text-goat-text2 [&_a]:transition [&_a:hover]:bg-white/[.06] [&_a:hover]:text-goat-text">
        {children}
      </div>
    </details>
  );
}
