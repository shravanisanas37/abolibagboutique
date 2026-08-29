import React from 'react';

export function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Catalogue pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to page ${p}`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-pill)',
              border: isActive ? 'none' : '1px solid var(--color-border)',
              backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
              color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
              fontWeight: isActive ? 'var(--weight-bold)' : 'var(--weight-medium)',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
          >
            {p}
          </button>
        );
      })}
    </nav>
  );
}
