import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-white/15 bg-white/[.04] px-2.5 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[.13em] text-goat-text2',
        className
      )}
      {...props}
    />
  );
}
