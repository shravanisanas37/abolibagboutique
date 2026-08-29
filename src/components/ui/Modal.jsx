import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '640px',
  showClose = true
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(36, 20, 16, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div
        className="modal-surface"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth,
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Mobile drag handle */}
        <div className="mobile-drag-handle" style={{ display: 'none', justifyContent: 'center', padding: '10px 0 4px' }}>
          <div style={{ width: '40px', height: '5px', backgroundColor: 'var(--color-border)', borderRadius: '3px' }} />
        </div>

        {/* Modal Header */}
        {(title || showClose) && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '24px 28px 16px',
            borderBottom: '1px solid var(--color-border-light)'
          }}>
            <div>
              {title && (
                <h3 id="modal-title" style={{ fontSize: 'var(--text-h3)', color: 'var(--color-primary)', margin: 0 }}>
                  {title}
                </h3>
              )}
              {subtitle && (
                <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  {subtitle}
                </p>
              )}
            </div>

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text-secondary)',
                  padding: '8px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.15s, color 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-alt)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '24px 28px' }}>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        
        @media (max-width: 768px) {
          .modal-backdrop {
            padding: 0;
            align-items: flex-end;
          }
          .modal-surface {
            max-width: 100% !important;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            max-height: 92vh;
          }
          .mobile-drag-handle {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
