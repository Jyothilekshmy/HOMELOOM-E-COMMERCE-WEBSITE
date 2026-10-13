import React from 'react';

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide uppercase';

  const variants = {
    default: 'bg-stone-100 text-stone-700 border border-stone-200',
    sale: 'bg-rose-50 text-rose-700 border border-rose-200',
    new: 'bg-amber-50 text-amber-800 border border-amber-200',
    eco: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    dark: 'bg-stone-900 text-stone-100',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 font-semibold',
    md: 'text-xs px-2.5 py-1 font-semibold',
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
