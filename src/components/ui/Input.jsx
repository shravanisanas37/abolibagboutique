import React from 'react';

export function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  helperText,
  className = '',
  style = {},
  multiline = false,
  rows = 4,
  ...props
}) {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`boutique-form-group ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', ...style }}>
      {label && (
        <label
          htmlFor={inputId}
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

      {multiline ? (
        <textarea
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: 'var(--color-surface-soft)',
            border: error ? '1.5px solid var(--color-error)' : '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--text-body)',
            fontFamily: 'var(--font-body)',
            resize: 'vertical',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
          className="boutique-input"
          {...props}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          style={{
            width: '100%',
            height: 'var(--input-height)',
            padding: '0 16px',
            backgroundColor: 'var(--color-surface-soft)',
            border: error ? '1.5px solid var(--color-error)' : '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--text-body)',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
          className="boutique-input"
          {...props}
        />
      )}

      {error && (
        <span role="alert" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-error)', marginTop: '2px' }}>
          {error}
        </span>
      )}

      {helperText && !error && (
        <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
          {helperText}
        </span>
      )}

      <style>{`
        .boutique-input:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(122, 31, 58, 0.12) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
}
