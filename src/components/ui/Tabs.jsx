import React from 'react';

export function Tabs({ tabs = [], activeTab, onChange }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        gap: '24px',
        borderBottom: '1px solid var(--color-border)',
        marginBottom: '24px',
        overflowX: 'auto'
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
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
              <span
                style={{
                  fontSize: '11px',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'rgba(122, 31, 58, 0.1)' : 'var(--color-surface-alt)',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                }}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
