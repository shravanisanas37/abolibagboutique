import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({
  value = '',
  onChange,
  placeholder = 'Search bags, jewellery, chokers, potlis...'
}) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Debounce search input by 300ms per PRD §1.7
  useEffect(() => {
    const timer = setTimeout(() => {
      if (internalValue !== value) {
        onChange?.(internalValue);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [internalValue, onChange, value]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <label htmlFor="catalogue-search-input" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
        Search products
      </label>

      <Search
        size={18}
        color="var(--color-text-secondary)"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}
      />

      <input
        id="catalogue-search-input"
        type="text"
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          height: 'var(--input-height)',
          padding: '0 40px 0 46px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-pill)',
          color: 'var(--color-text-primary)',
          fontSize: '15px',
          outline: 'none',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease'
        }}
        className="catalogue-search-input"
      />

      {internalValue && (
        <button
          type="button"
          onClick={() => {
            setInternalValue('');
            onChange?.('');
          }}
          aria-label="Clear search"
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
        >
          <X size={16} />
        </button>
      )}

      <style>{`
        .catalogue-search-input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.2) !important;
        }
      `}</style>
    </div>
  );
}
