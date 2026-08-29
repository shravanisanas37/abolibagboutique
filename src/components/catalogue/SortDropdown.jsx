import React from 'react';
import { ArrowUpDown, ChevronDown } from 'lucide-react';

export function SortDropdown({ value = 'newest', onChange }) {
  const sortOptions = [
    { value: 'newest', label: 'New Arrivals' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'name_asc', label: 'Name: A to Z' }
  ];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minWidth: '200px' }}>
      <label
        htmlFor="catalogue-sort-select"
        style={{
          display: 'none',
          fontSize: 'var(--text-body-sm)',
          color: 'var(--color-text-secondary)',
          whiteSpace: 'nowrap'
        }}
      >
        Sort by:
      </label>

      <div style={{ position: 'relative', width: '100%' }}>
        <select
          id="catalogue-sort-select"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-label="Sort products"
          style={{
            width: '100%',
            height: '44px',
            padding: '0 34px 0 16px',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text-primary)',
            fontSize: '14px',
            fontWeight: 'var(--weight-medium)',
            fontFamily: 'var(--font-body)',
            appearance: 'none',
            outline: 'none',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
          className="boutique-sort-select"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          color="var(--color-text-secondary)"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      <style>{`
        .boutique-sort-select:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(122, 31, 58, 0.12) !important;
        }
      `}</style>
    </div>
  );
}
