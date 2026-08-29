import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items = [] }) {
  // items: [{ label: 'Catalogue', path: '/catalogue' }, { label: 'Royal Teal Potli' }]
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '20px' }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '6px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: 'var(--text-body-sm)'
      }}>
        <li style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              color: 'var(--color-text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ChevronRight size={14} color="var(--color-text-secondary)" />
              {isLast || !item.path ? (
                <span style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)' }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} style={{ color: 'var(--color-text-secondary)' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={isActive ? 'page' : undefined}
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
    </div>
  );
}

export function Tabs({ tabs = [], activeTab, onChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: '24px',
      borderBottom: '1px solid var(--color-border)',
      marginBottom: '24px',
      overflowX: 'auto'
    }}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: isActive ? '2.5px solid var(--color-primary)' : '2.5px solid transparent',
              padding: '12px 4px',
              color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              fontWeight: isActive ? 'var(--weight-bold)' : 'var(--weight-medium)',
              fontSize: 'var(--text-body)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s, border-color 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span style={{
                fontSize: '11px',
                padding: '2px 6px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: isActive ? 'rgba(122, 31, 58, 0.1)' : 'var(--color-surface-alt)',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
