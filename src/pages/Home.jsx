import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, ArrowRight, ChevronLeft, ChevronRight, Gem, Store, Tag, Palette, Star, MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProductCard } from '../components/catalogue/ProductCard';
import { SEO } from '../components/layout/SEO';
import { useProducts } from '../context/ProductContext';
import { getWhatsAppUrl } from '../utils/buildWhatsAppMessage';

export function Home() {
  const { featuredProducts, testimonials, loading } = useProducts();
  const [heroSlide, setHeroSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: 'EXCLUSIVE HANDBAGS',
      title: 'Statement Clutches & Elegant Potli Bags',
      accentWord: 'Potli Bags',
      subtitle: 'Elevate your festive and formal attire with our exquisite selection of handcrafted clutches, potlis, and slings, designed with eye-catching detail.',
      image: '/images/hero-bags.svg',
      ctaText: 'SHOP BAGS',
      ctaLink: '/catalogue?category=bags_boutique'
    },
    {
      eyebrow: 'HERITAGE JEWELLERY',
      title: 'Regal Temple Chokers',
      subtitle: 'Handcrafted traditional Maharashtrian & bridal jewellery that pairs seamlessly with your festive sarees and reception lehengas.',
      image: '/images/hero-jewellery.svg',
      ctaText: 'SHOP JEWELLERY',
      ctaLink: '/catalogue?category=designer_jewellery'
    },
    {
      eyebrow: 'BRIDAL & FESTIVE',
      title: 'Artisanal Craftsmanship at Honest Prices',
      accentWord: 'Honest Prices',
      subtitle: 'Feel the fabric, verify in person at our Satara boutique, or order for doorstep delivery on WhatsApp. No luxury markups, ever.',
      image: '/images/hero-craft.svg',
      ctaText: 'EXPLORE CATALOGUE',
      ctaLink: '/catalogue'
    }
  ];

  // Auto-advance hero carousel every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Auto-advance testimonials carousel every 7s
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials]);

  const whyChooseUsCards = [
    {
      icon: Gem,
      title: 'Handcrafted Quality',
      description: 'Carefully curated pieces with authentic zardosi embroidery, delicate beadwork, and timeless heritage finishes.'
    },
    {
      icon: Store,
      title: 'Offline Verification',
      description: 'Visit our Satara boutique at Moti Chowk to touch the textures, inspect the craftsmanship, and try before you buy.'
    },
    {
      icon: Tag,
      title: 'Affordable Luxury',
      description: 'Boutique elegance without astronomical luxury brand markups — honest pricing made accessible for every woman.'
    },
    {
      icon: Palette,
      title: 'Custom Gifting & Styling',
      description: 'Need matching sets for a wedding party or custom festive hampers? We offer personalized boutique styling and gift curation.'
    }
  ];

  return (
    <>
      <SEO
        title="Aboli Bag Boutique | Handcrafted Bags & Designer Jewellery in Satara"
        description="Handcrafted clutches, potli bags, and designer jewellery in Satara. Browse online, order for delivery on WhatsApp, or visit our boutique at Moti Chowk."
      />

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          height: '640px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-secondary)'
        }}
        aria-label="Hero Carousel"
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === heroSlide;
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 0.8s ease-in-out, visibility 0.8s',
                zIndex: isActive ? 1 : 0
              }}
            >
              {/* Background Image with Rich Dark Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.85)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(36,20,16,0.92) 0%, rgba(74,37,69,0.75) 50%, rgba(36,20,16,0.3) 100%)'
                }}
              />

              {/* Slide Content */}
              <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '600px', color: '#FFFFFF', padding: '24px 0' }}>
                  <span
                    className="eyebrow"
                    style={{
                      color: 'var(--color-accent)',
                      fontSize: '13px',
                      fontWeight: 'var(--weight-bold)',
                      letterSpacing: '0.18em',
                      marginBottom: '12px'
                    }}
                  >
                    {slide.eyebrow}
                  </span>

                  <h1
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-h1)',
                      color: '#FFFFFF',
                      lineHeight: 1.15,
                      marginBottom: '18px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    style={{
                      fontSize: 'var(--text-body-lg)',
                      color: 'var(--color-background)',
                      lineHeight: 1.6,
                      marginBottom: '32px',
                      opacity: 0.95
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <Link to={slide.ctaLink} style={{ textDecoration: 'none' }}>
                      <Button variant="cta" size="lg" icon={ShoppingBag}>
                        {slide.ctaText}
                      </Button>
                    </Link>

                    <a
                      href={getWhatsAppUrl("Hi Aboli Bag Boutique, I would like to inquire about your festive collection.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button variant="whatsapp" size="lg" icon={MessageCircle}>
                        INQUIRY
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 10
          }}
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHeroSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === heroSlide ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: i === heroSlide ? 'var(--color-accent)' : 'rgba(255,255,255,0.45)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Prev / Next Carousel Buttons */}
        <button
          type="button"
          onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(36,20,16,0.6)',
            color: '#FFFFFF',
            border: '1px solid rgba(201,162,39,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s'
          }}
          className="hero-arrow"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(36,20,16,0.6)',
            color: '#FFFFFF',
            border: '1px solid rgba(201,162,39,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s'
          }}
          className="hero-arrow"
        >
          <ChevronRight size={22} />
        </button>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CRAFTING UNIQUE SHOPPING EXPERIENCES SINCE INCEPTION</span>
            <h2>Why Choose Us</h2>
            <p>
              We blend royal Indian artistry with accessible boutique warmth right here in Satara.
            </p>
          </div>

          <div
            className="why-choose-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}
          >
            {whyChooseUsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  style={{
                    padding: '36px 24px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(122, 31, 58, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      marginBottom: '20px',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: 'var(--color-primary)',
                      marginBottom: '12px'
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6
                    }}
                  >
                    {card.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS STRIP */}
      {featuredProducts.length > 0 && (
        <section
          className="section-py"
          style={{
            backgroundColor: 'var(--color-surface-soft)',
            borderTop: '1px solid var(--color-border-light)',
            borderBottom: '1px solid var(--color-border-light)'
          }}
        >
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <span className="eyebrow">HANDPICKED FOR YOU</span>
                <h2 style={{ fontSize: 'var(--text-h2)' }}>Featured Pieces</h2>
              </div>

              <Link to="/catalogue" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                  View Full Catalogue
                </Button>
              </Link>
            </div>

            <div
              className="featured-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px'
              }}
            >
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. TESTIMONIALS SECTION */}
      {testimonials && testimonials.length > 0 && (
        <section
          style={{
            backgroundColor: 'var(--color-secondary)',
            color: '#FFFFFF',
            padding: '80px 0',
            position: 'relative',
            overflow: 'hidden'
          }}
          aria-label="Customer Testimonials"
        >
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>
                GENUINE REVIEWS FROM OUR BEAUTIFUL COMMUNITY
              </span>
              <h2 style={{ color: '#FFFFFF' }}>What Our Customers Say</h2>
            </div>

            {/* Testimonial Active Quote */}
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              {/* Star Rating Row */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '20px' }}>
                {[...Array(testimonials[testimonialSlide]?.rating || 5)].map((_, i) => (
                  <Star key={i} size={22} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>

              {/* Italic Serif Quote */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                &ldquo;{testimonials[testimonialSlide]?.quote}&rdquo;
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'var(--weight-bold)', color: 'var(--color-accent)' }}>
                  {testimonials[testimonialSlide]?.customer_name}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-footer-text)', letterSpacing: '0.05em' }}>
                  {testimonials[testimonialSlide]?.location}
                </span>
              </div>

              {/* Testimonial Switch Dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTestimonialSlide(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                    style={{
                      width: idx === testimonialSlide ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: idx === testimonialSlide ? 'var(--color-accent)' : 'rgba(255,255,255,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. VISIT OUR BOUTIQUE SECTION */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)', textAlign: 'center' }}>
        <div className="container-narrow">
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              padding: '56px 40px',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(178, 58, 107, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cta)',
                marginBottom: '20px'
              }}
            >
              <MapPin size={32} />
            </div>

            <span className="eyebrow">OFFLINE STORE EXPERIENCE</span>
            <h2 style={{ fontSize: 'var(--text-h2)', marginBottom: '16px' }}>Visit Our Boutique</h2>

            <p style={{ fontSize: '18px', color: 'var(--color-text-primary)', maxWidth: '540px', marginBottom: '8px' }}>
              Feel the texture and try before you buy. Locate us at Moti Chowk, Satara.
            </p>

            <address
              style={{
                fontStyle: 'normal',
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                maxWidth: '520px',
                lineHeight: 1.6,
                marginBottom: '28px'
              }}
            >
              Shop no 5&amp;6, Laxmi Vishnu Nivas Bldg, Beside Narkar Jewellers, opp City Centre, Moti Chowk, Satara 415002, Maharashtra
            </address>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <a
                href="https://maps.google.com/?q=Moti+Chowk+Satara+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="cta" size="lg" icon={MapPin}>
                  FIND US ON MAP
                </Button>
              </a>

              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg">
                  Contact Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-arrow:hover {
          background-color: var(--color-primary) !important;
        }
        @media (max-width: 1024px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
