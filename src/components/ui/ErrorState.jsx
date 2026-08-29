import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export function ErrorState({
  title = "Couldn't load catalogue",
  message = "Please check your connection and try again.",
  onRetry,
  className = '',
  style = {}
}) {
  return (
    <div
      role="alert"
      className={`boutique-error-state ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 24px',
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        margin: '24px 0',
        ...style
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: 'rgba(179, 38, 30, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-error)',
          marginBottom: '16px'
        }}
      >
        <AlertTriangle size={32} />
      </div>

      <h3 style={{ fontSize: 'var(--text-h3)', color: 'var(--color-primary)', marginBottom: '8px' }}>
        {title}
      </h3>

      <p style={{ maxWidth: '400px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)', marginBottom: onRetry ? '20px' : 0 }}>
        {message}
      </p>

      {onRetry && (
        <Button variant="outline" icon={RefreshCw} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
