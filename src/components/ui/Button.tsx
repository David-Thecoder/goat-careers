import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'border-goat-gold bg-goat-gold text-goat-background hover:bg-goat-text',
  secondary: 'border-goat-line bg-goat-panel2 text-goat-text hover:border-goat-gold/70 hover:text-goat-gold',
  ghost: 'border-transparent bg-transparent text-goat-text2 hover:bg-white/5 hover:text-goat-text'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-[0.68rem]',
  md: 'px-4 py-2.5 text-xs',
  lg: 'px-5 py-3 text-sm'
};

export function Button({ className, variant = 'secondary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full border font-mono font-bold uppercase tracking-[.16em] transition duration-normal ease-goat focus:outline-none focus:ring-2 focus:ring-goat-gold/60 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
