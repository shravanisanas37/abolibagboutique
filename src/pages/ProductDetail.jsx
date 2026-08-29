import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Check, AlertCircle, ZoomIn, ArrowLeft, ShieldCheck, Truck, Store } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Modal } from '../components/ui/Modal';
import { ProductCard } from '../components/catalogue/ProductCard';
import { SEO } from '../components/layout/SEO';
import { useProducts } from '../context/ProductContext';
import { formatPrice, calculateDiscount } from '../utils/formatPrice';
import { getWhatsAppUrl, buildProductDeliveryMessage } from '../utils/buildWhatsAppMessage';

export function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products, getProductBySlug, loading } = useProducts();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Find product by slug or id
  const product = useMemo(() => {
    return products.find(p => p.slug === slug || p.id === slug);
  }, [products, slug]);

  // Reset active image on product switch
  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  }, [slug]);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && p.main_category === product.main_category && p.availability !== 'sold')
      .slice(0, 4);
  }, [products, product]);

  if (loading) {
    return (
      <div className="container section-py" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container section-py" style={{ textAlign: 'center', maxWidth: '500px' }}>
        <h2 style={{ marginBottom: '16px' }}>Product Not Found</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
          That item is no longer available or the link was mistyped. Here's our full catalogue.
        </p>
        <Link to="/catalogue">
          <Button variant="cta">Browse Full Catalogue</Button>
        </Link>
      </div>
    );
  }

  const isOutOfStock = product.availability === 'out_of_stock';
  const discount = calculateDiscount(product.price, product.original_price);
  const images = product.images && product.images.length > 0 ? product.images : [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
  ];

  const deliveryMessage = buildProductDeliveryMessage(product);
  const deliveryWhatsAppUrl = getWhatsAppUrl(deliveryMessage);

  const breadcrumbs = [
    { label: 'Catalogue', path: '/catalogue' },
    {
      label: product.main_category === 'bags_boutique' ? 'Bags Boutique' : 'Designer Jewellery',
      path: `/catalogue?category=${product.main_category}`
    },
    { label: product.name }
  ];

  // Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: images,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Aboli Bag Boutique'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: isOutOfStock ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
      url: `https://aboli.in/catalogue/${product.slug || product.id}`
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} | Aboli Bag Boutique Satara`}
        description={product.description || `Handcrafted ${product.name} at Aboli Bag Boutique, Satara. Order on WhatsApp or visit in-store.`}
        imageUrl={images[0]}
        schema={productSchema}
      />

      <div className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />

          <div
            className="product-detail-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '48px',
              alignItems: 'flex-start',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border-light)',
              padding: '40px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Left Gallery Column */}
            <div>
              {/* Main Image with Zoom Trigger */}
              <div
                onClick={() => setIsZoomOpen(true)}
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '110%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-alt)',
                  cursor: 'zoom-in',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                <img
                  src={images[activeImageIndex]}
                  alt={`${product.name} - View ${activeImageIndex + 1}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Badge Overlay */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2, display: 'flex', gap: '8px' }}>
                  {product.badge && product.badge !== 'none' && (
                    <Badge variant={product.badge} />
                  )}
                  {discount && (
                    <Badge variant="sale">
                      {discount}% OFF
                    </Badge>
                  )}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    padding: '8px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}
                >
                  <ZoomIn size={18} />
                </div>
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View image ${idx + 1} of ${images.length}`}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: activeImageIndex === idx ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        padding: 0,
                        cursor: 'pointer',
                        flexShrink: 0,
                        opacity: activeImageIndex === idx ? 1 : 0.65,
                        transition: 'all 0.2s'
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Category Subhead */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 'var(--weight-bold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)'
                  }}
                >
                  {product.subcategory || (product.main_category === 'bags_boutique' ? 'Bags Boutique' : 'Designer Jewellery')}
                </span>

                <span style={{ color: 'var(--color-border)' }}>•</span>

                <span style={{ fontSize: '13px', color: isOutOfStock ? 'var(--color-error)' : 'var(--color-success)', fontWeight: 'var(--weight-semibold)' }}>
                  {isOutOfStock ? 'Currently Out of Stock' : 'In Stock at Satara Store'}
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  color: 'var(--color-primary)',
                  lineHeight: 1.2,
                  marginBottom: '16px'
                }}
              >
                {product.name}
              </h1>

              {/* Price and Original Price Discount */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-primary)' }}>
                  {formatPrice(product.price)}
                </span>

                {product.original_price && Number(product.original_price) > Number(product.price) && (
                  <>
                    <span style={{ fontSize: '18px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>
                      {formatPrice(product.original_price)}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--color-cta)', fontWeight: 'var(--weight-bold)' }}>
                      Save {formatPrice(product.original_price - product.price)} ({discount}% OFF)
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Description &amp; Details
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--color-text-primary)' }}>
                  {product.description || 'Exquisitely handcrafted with premium materials, fine finish, and traditional Indian craftsmanship.'}
                </p>
              </div>

              {/* Shopping Assurance Badges */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-soft)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-primary)' }}>
                  <Truck size={18} color="var(--color-accent)" />
                  <span><strong>WhatsApp Delivery Available:</strong> Fast doorstep dispatch across India.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-primary)' }}>
                  <Store size={18} color="var(--color-primary)" />
                  <span><strong>Offline Store Verification:</strong> Try, feel, and buy in person at Moti Chowk, Satara.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-primary)' }}>
                  <ShieldCheck size={18} color="var(--color-cta)" />
                  <span><strong>Artisanal Assurance:</strong> 100% authentic handcrafted quality with honest pricing.</span>
                </div>
              </div>

              {/* Primary and Secondary Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* 1. Primary WhatsApp Delivery Order Action */}
                <a
                  href={deliveryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={MessageCircle}
                    style={{ width: '100%', fontSize: '17px' }}
                  >
                    {isOutOfStock ? 'Notify Me on WhatsApp' : 'Order for Delivery on WhatsApp'}
                  </Button>
                </a>

                {/* 2. Secondary In-Store / Call Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button variant="outline" size="md" icon={MapPin} style={{ width: '100%' }}>
                      Visit Store to Buy
                    </Button>
                  </Link>

                  <a href="tel:+919082140384" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="md" icon={Phone} style={{ width: '100%' }}>
                      Call Store
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like Related Strip */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '64px' }}>
              <div style={{ marginBottom: '28px' }}>
                <span className="eyebrow">CURATED PAIRINGS</span>
                <h2 style={{ fontSize: 'var(--text-h2)' }}>You May Also Like</h2>
              </div>

              <div
                className="related-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px'
                }}
              >
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Zoom */}
      <Modal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        title={product.name}
        maxWidth="840px"
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={images[activeImageIndex]}
            alt={product.name}
            style={{
              width: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)'
            }}
          />
        </div>
      </Modal>

      <style>{`
        @media (max-width: 1024px) {
          .product-detail-layout {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
          .related-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .related-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
