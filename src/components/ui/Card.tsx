import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-goat border border-goat-line bg-mythic-panel p-6', className)} {...props} />;
}
