import React from 'react';

export function Button({
  children,
  variant = 'primary', // 'primary', 'cta', 'secondary', 'outline', 'ghost', 'whatsapp', 'danger'
  size = 'md', // 'lg', 'md', 'sm', 'icon'
  type = 'button',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = '',
  style = {},
  ariaLabel,
  ...props
}) {
  const getStyles = () => {
    let bg = 'var(--color-primary)';
    let color = '#FFFFFF';
    let border = 'none';
    let hoverBg = 'var(--color-primary-hover)';

    if (variant === 'cta') {
      bg = 'var(--color-cta)';
      color = '#FFFFFF';
      hoverBg = 'var(--color-cta-hover)';
    } else if (variant === 'whatsapp') {
      bg = 'var(--color-whatsapp)';
      color = '#FFFFFF';
      hoverBg = 'var(--color-whatsapp-hover)';
    } else if (variant === 'secondary' || variant === 'outline') {
      bg = 'transparent';
      color = 'var(--color-primary)';
      border = '1.5px solid var(--color-primary)';
      hoverBg = 'rgba(122, 31, 58, 0.08)';
    } else if (variant === 'ghost') {
      bg = 'transparent';
      color = 'var(--color-primary)';
      hoverBg = 'rgba(122, 31, 58, 0.05)';
    } else if (variant === 'danger') {
      bg = 'var(--color-error)';
      color = '#FFFFFF';
      hoverBg = '#961B14';
    }

    let height = 'var(--button-height-md)';
    let padding = '0 24px';
    let fontSize = 'var(--text-body)';

    if (size === 'lg') {
      height = 'var(--button-height-lg)';
      padding = '0 32px';
      fontSize = 'var(--text-body-lg)';
    } else if (size === 'sm') {
      height = 'var(--button-height-sm)';
      padding = '0 16px';
      fontSize = 'var(--text-body-sm)';
    } else if (size === 'icon') {
      height = '44px';
      padding = '0';
      width = '44px';
    }

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      height,
      minHeight: '44px',
      minWidth: size === 'icon' ? '44px' : undefined,
      width: size === 'icon' ? '44px' : undefined,
      padding: size === 'icon' ? '0' : padding,
      backgroundColor: bg,
      color,
      border,
      borderRadius: size === 'icon' ? 'var(--radius-pill)' : 'var(--radius-md)',
      fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      boxShadow: (variant === 'cta' || variant === 'primary' || variant === 'whatsapp') ? 'var(--shadow-sm)' : 'none',
      userSelect: 'none',
      position: 'relative',
      ...style
    };
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={`boutique-btn ${className}`}
      style={getStyles()}
      {...props}
    >
      {loading ? (
        <span style={{
          display: 'inline-block',
          width: '18px',
          height: '18px',
          border: '2.5px solid rgba(255,255,255,0.3)',
          borderTopColor: '#FFFFFF',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite'
        }} />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 20} aria-hidden="true" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 20} aria-hidden="true" />}
        </>
      )}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .boutique-btn:not(:disabled):hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .boutique-btn:not(:disabled):active {
          transform: scale(0.98);
        }
      `}</style>
    </button>
  );
}
