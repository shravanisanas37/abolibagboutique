import React from 'react';

export function Card({
  children,
  className = '',
  style = {},
  hoverLift = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`boutique-card ${hoverLift ? 'hover-lift' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border-light)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      {...props}
    >
      {children}
      <style>{`
        @media (hover: hover) {
          .boutique-card.hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--color-border);
          }
        }
      `}</style>
    </div>
  );
}
