import React from 'react';

export function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--radius-sm)',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`boutique-skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: 'var(--color-surface-alt)',
        backgroundImage: 'linear-gradient(90deg, var(--color-surface-alt) 0%, #EFE1CE 50%, var(--color-surface-alt) 100%)',
        backgroundSize: '200% 100%',
        animation: 'skeletonShimmer 1.5s infinite',
        ...style
      }}
    >
      <style>{`
        @keyframes skeletonShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-border-light)',
      overflow: 'hidden',
      padding: '12px'
    }}>
      <Skeleton width="100%" height="260px" borderRadius="var(--radius-md)" style={{ marginBottom: '12px' }} />
      <Skeleton width="40%" height="14px" style={{ marginBottom: '8px' }} />
      <Skeleton width="85%" height="20px" style={{ marginBottom: '8px' }} />
      <Skeleton width="50%" height="22px" />
    </div>
  );
}
