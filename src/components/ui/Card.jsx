import React from 'react';

export function Card({
  children,
  className = '',
  hoverEffect = false,
  padding = 'p-6',
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-md hover:-translate-y-1 hover:border-stone-300' : ''
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
