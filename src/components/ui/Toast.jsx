import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function Toast({ message, type = 'info', onClose }) {
  let icon = <Info size={18} color="var(--color-primary)" />;
  let borderLeft = '4px solid var(--color-accent)';

  if (type === 'success') {
    icon = <CheckCircle2 size={18} color="var(--color-success)" />;
    borderLeft = '4px solid var(--color-success)';
  } else if (type === 'error') {
    icon = <AlertCircle size={18} color="var(--color-error)" />;
    borderLeft = '4px solid var(--color-error)';
  }

  return (
    <div
      role="alert"
      style={{
        backgroundColor: '#FFFFFF',
        color: 'var(--color-text-primary)',
        padding: '14px 18px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--color-border-light)',
        borderLeft,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        minWidth: '280px',
        maxWidth: '420px',
        animation: 'toastSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', lineHeight: 1.4 }}>
        {message}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px'
          }}
        >
          <X size={16} />
        </button>
      )}
      <style>{`
        @keyframes toastSlide {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
