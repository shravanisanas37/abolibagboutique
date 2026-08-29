import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Dropdown({
  label,
  id,
  value,
  onChange,
  options = [],
  error,
  required = false,
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`boutique-form-group ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', ...style }}>
      {label && (
        <label
          htmlFor={selectId}
          style={{
            fontSize: 'var(--text-eyebrow)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)'
          }}
        >
          {label} {required && <span style={{ color: 'var(--color-error)' }}>*</span>}
        </label>
      )}

      <div style={{ position: 'relative', width: '100%' }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          style={{
            width: '100%',
            height: 'var(--input-height)',
            padding: '0 40px 0 16px',
            backgroundColor: 'var(--color-surface-soft)',
            border: error ? '1.5px solid var(--color-error)' : '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--text-body)',
            fontFamily: 'var(--font-body)',
            appearance: 'none',
            outline: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
          className="boutique-select"
          {...props}
        >
          {options.map((opt) => {
            const optVal = typeof opt === 'object' ? opt.value : opt;
            const optLabel = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={optVal} value={optVal}>
                {optLabel}
              </option>
            );
          })}
        </select>

        <ChevronDown
          size={18}
          color="var(--color-text-secondary)"
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {error && (
        <span role="alert" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-error)', marginTop: '2px' }}>
          {error}
        </span>
      )}

      <style>{`
        .boutique-select:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(122, 31, 58, 0.12) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
}
