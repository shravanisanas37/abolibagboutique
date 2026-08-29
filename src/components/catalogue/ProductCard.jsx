import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { formatPrice, calculateDiscount } from '../../utils/formatPrice';
import { getWhatsAppUrl, buildProductDeliveryMessage } from '../../utils/buildWhatsAppMessage';

export function ProductCard({ product }) {
  if (!product) return null;

  const isOutOfStock = product.availability === 'out_of_stock';
  const isSold = product.availability === 'sold';
  const discount = calculateDiscount(product.price, product.original_price);
  const coverImage = product.images?.[0] || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80';

  const whatsappMessage = buildProductDeliveryMessage(product);
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <article
      className="boutique-product-card"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border-light)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* Product Image Area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '125%', // 4:5 aspect ratio
          backgroundColor: 'var(--color-surface-alt)',
          overflow: 'hidden'
        }}
      >
        <img
          src={coverImage}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isOutOfStock ? 0.7 : 1,
            transition: 'transform 0.5s ease'
          }}
          className="product-card-img"
        />

        {/* Top-Left Badge Chip */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {product.badge && product.badge !== 'none' && (
            <Badge variant={product.badge} />
          )}
          {discount && (
            <Badge variant="sale">
              {discount}% OFF
            </Badge>
          )}
        </div>

        {/* Availability Ribbon */}
        {isOutOfStock && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2
            }}
          >
            <Badge variant="out_of_stock">Out of Stock</Badge>
          </div>
        )}

        {isSold && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2
            }}
          >
            <Badge variant="out_of_stock">Sold</Badge>
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <div
          className="card-hover-actions"
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            gap: '8px',
            zIndex: 3,
            transition: 'opacity 0.2s, transform 0.2s'
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Order ${product.name} for delivery on WhatsApp`}
            style={{
              flex: 1,
              backgroundColor: 'var(--color-whatsapp)',
              color: '#FFFFFF',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 'var(--weight-semibold)',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <MessageCircle size={16} />
            <span>{isOutOfStock ? 'Notify on WhatsApp' : 'Order via WhatsApp'}</span>
          </a>

          <Link
            to={`/catalogue/${product.slug || product.id}`}
            aria-label={`View details for ${product.name}`}
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: '#FFFFFF',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              textDecoration: 'none'
            }}
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Product Content Details */}
      <Link
        to={`/catalogue/${product.slug || product.id}`}
        style={{
          padding: '16px 14px 18px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          textDecoration: 'none'
        }}
      >
        {/* Subcategory Tag */}
        <span
          style={{
            fontSize: '11px',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '4px'
          }}
        >
          {product.subcategory || (product.main_category === 'bags_boutique' ? 'Bag Boutique' : 'Designer Jewellery')}
        </span>

        {/* Product Title */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '17px',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--color-primary)',
            lineHeight: 1.3,
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.name}
        </h3>

        {/* Pricing Row */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--color-text-primary)'
            }}
          >
            {formatPrice(product.price)}
          </span>

          {product.original_price && Number(product.original_price) > Number(product.price) && (
            <span
              style={{
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                textDecoration: 'line-through'
              }}
            >
              {formatPrice(product.original_price)}
            </span>
          )}
        </div>
      </Link>

      <style>{`
        .boutique-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-border);
        }
        .boutique-product-card:hover .product-card-img {
          transform: scale(1.05);
        }
        @media (min-width: 769px) {
          .card-hover-actions {
            opacity: 0;
            transform: translateY(8px);
          }
          .boutique-product-card:hover .card-hover-actions {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .card-hover-actions {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </article>
  );
}
