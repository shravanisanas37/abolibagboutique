import React from 'react';
import { PackageOpen, Search, Sparkles } from 'lucide-react';
import { Button } from './Button';

export function EmptyState({
  icon: CustomIcon,
  type = 'general', // 'search', 'catalogue', 'general'
  title,
  description,
  actionLabel,
  onAction,
  className = '',
  style = {}
}) {
  let IconComponent = CustomIcon || PackageOpen;
  let defaultTitle = 'No Products Found';
  let defaultDescription = 'New stock is being added — check back soon or ask us on WhatsApp.';

  if (type === 'search') {
    IconComponent = Search;
    defaultTitle = 'No Matching Items';
    defaultDescription = "We couldn't find matches for your search. Try selecting another category or check your spelling.";
  } else if (type === 'lookbook') {
    IconComponent = Sparkles;
    defaultTitle = 'Styled Looks Coming Soon';
    defaultDescription = 'Our curated editorial styled looks are currently being prepared. Browse our full catalogue in the meantime!';
  }

  return (
    <div
      className={`boutique-empty-state ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '56px 24px',
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px dashed var(--color-border)',
        margin: '24px 0',
        ...style
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: 'var(--color-surface-alt)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary)',
          marginBottom: '20px'
        }}
      >
        <IconComponent size={34} />
      </div>

      <h3 style={{ fontSize: 'var(--text-h3)', color: 'var(--color-primary)', marginBottom: '8px' }}>
        {title || defaultTitle}
      </h3>

      <p style={{ maxWidth: '440px', color: 'var(--color-text-secondary)', fontSize: 'var(--text-body)', marginBottom: actionLabel ? '24px' : 0 }}>
        {description || defaultDescription}
      </p>

      {actionLabel && onAction && (
        <Button variant="cta" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
