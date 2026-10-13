import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] rounded-xl cursor-pointer';

  const variants = {
    primary:
      'bg-amber-900 text-white hover:bg-amber-800 shadow-sm hover:shadow-md focus:ring-amber-600',
    secondary:
      'bg-stone-900 text-stone-100 hover:bg-stone-800 shadow-sm hover:shadow-md focus:ring-stone-700',
    outline:
      'border border-stone-300 text-stone-800 hover:bg-stone-100 focus:ring-stone-400 bg-transparent',
    ghost:
      'text-stone-700 hover:bg-stone-100 focus:ring-stone-300 bg-transparent',
    accent:
      'bg-green-950 text-white hover:bg-green-700 shadow-sm hover:shadow-md focus:ring-green-700',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}

export default Button;
