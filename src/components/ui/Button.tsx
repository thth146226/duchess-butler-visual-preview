/**
 * Button.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Premium button component with variants
 */

import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'tertiary';
  size?: 'default' | 'sm';
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  asLink = false,
  href = '#',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const baseClasses = 'font-sans transition-all duration-300 ease-out';

  const variantClasses = {
    primary:
      'border border-ink bg-ink text-linen hover:bg-transparent hover:text-ink',
    ghost:
      'border border-ink bg-transparent text-ink hover:bg-ink hover:text-linen',
    tertiary: 'bg-transparent text-ink border-b border-gold-soft hover:border-gold',
  };

  const sizeClasses = {
    default: 'px-30 py-14 text-78 letter-spacing-18 uppercase',
    sm: 'px-18 py-10 text-70 letter-spacing-18 uppercase',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (asLink) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
