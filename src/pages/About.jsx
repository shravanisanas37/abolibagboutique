import React, { useState } from 'react';
import { Sparkles, Heart, ShieldCheck, Gem, MessageCircle, MapPin, ZoomIn, Store } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { SEO } from '../components/layout/SEO';
import { getWhatsAppUrl } from '../utils/buildWhatsAppMessage';

export function About() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const inStorePhotos = [
    {
      src: '/images/about/interior_bags.jpeg',
      title: 'Bags & Accessories Boutique',
      caption: 'Curated wall-to-wall collection of handcrafted bridal clutches, zardosi potlis, festive batwas, and designer slings inside our Satara boutique.'
    },
    {
      src: '/images/about/interior_jewellery.jpeg',
      title: 'Designer Jewellery Studio',
      caption: 'Extensive in-store display of heritage temple jewellery, Kundan chokers, layered haars, bangles, and bridal accessories at Moti Chowk.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Aboli Bag Boutique &amp; Jewellery — Satara"
        description="Discover the story behind Aboli Bag Boutique &amp; Jewellery in Satara, Maharashtra. Learn about our passion for handcrafted bags, regional Indian craftsmanship, and authentic in-store boutique experience."
      />

      {/* Page Header */}
      <section
        style={{
          backgroundColor: 'var(--color-surface-alt)',
          padding: '56px 0',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">OUR HERITAGE &amp; VALUES</span>
          <h1 style={{ fontSize: 'var(--text-h1)', marginBottom: '12px' }}>About Aboli Bag Boutique &amp; Jewellery</h1>
          <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)' }}>
            Bridging timeless Indian craftsmanship, handcrafted fashion accessories, and authentic heritage jewellery right from the cultural heart of Satara.
          </p>
        </div>
      </section>

      {/* 1. Origin Story Section with Store Interior Showcase */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div
            className="about-story-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Story Text */}
            <div>
              <span className="eyebrow">THE BEGINNING</span>
              <h2 style={{ fontSize: 'var(--text-h2)', marginBottom: '20px' }}>Our Brand Origin Story</h2>

              <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
                <strong>Aboli Bag Boutique &amp; Jewellery Shop</strong> was born out of a deep passion for elegant, handcrafted fashion accessories that define modern Indian womanhood.
              </p>

              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: '28px' }}>
                Founded in Satara, Maharashtra, our journey began with a mission to bring exquisite bridal clutches, zardosi potlis, and handcrafted slings directly to local shoppers without unnecessary luxury markups. By sourcing traditional weaves, intricate pearl-work, and authentic craftsmanship from skilled regional artisans, we expanded our collection to include designer temple jewellery, antique chokers, and festive accessories tailored for every celebration.
              </p>

              {/* Styled Pull-Quote with Left Gold Border */}
              <blockquote
                style={{
                  borderLeft: '4px solid var(--color-accent)',
                  paddingLeft: '24px',
                  margin: '32px 0',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--color-primary)'
                }}
              >
                &ldquo;Aboli is not just about selling products; it is about keeping traditional handicraft alive, making every woman feel regal on her special day.&rdquo;
              </blockquote>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border-light)', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)' }}>
                <Store size={16} color="var(--color-accent)" />
                <span>Visit our Physical Boutique at Moti Chowk, Satara</span>
              </div>
            </div>

            {/* In-Store Photo Gallery (Real Store Interiors) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '-8px' }}>
                <span className="eyebrow" style={{ margin: 0 }}>INSIDE OUR SATARA STORE</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Tap photo to expand</span>
              </div>

              {inStorePhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: 'var(--color-surface)'
                  }}
                  className="about-photo-card"
                >
                  <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <div className="photo-zoom-badge">
                      <ZoomIn size={15} />
                      <span>View Interior</span>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '14px 18px',
                      backgroundColor: 'var(--color-surface)',
                      borderTop: '1px solid var(--color-border-light)'
                    }}
                  >
                    <h4 style={{ fontSize: '15px', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      {photo.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Panel (Dark Plum Background) */}
      <section
        style={{
          backgroundColor: 'var(--color-secondary)',
          color: '#FFFFFF',
          padding: '80px 0'
        }}
      >
        <div className="container">
          <div
            className="mission-vision-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px'
            }}
          >
            {/* Mission */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(201, 162, 39, 0.3)'
              }}
            >
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>OUR PURPOSE</span>
              <h2 style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ color: 'var(--color-footer-text)', fontSize: '16px', lineHeight: 1.8 }}>
                To empower women by providing high-quality, handcrafted fashion bags and exquisite jewellery that combine ethnic heritage with contemporary design, all at affordable pricing.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(201, 162, 39, 0.3)'
              }}
            >
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>OUR ASPIRATION</span>
              <h2 style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Our Vision</h2>
              <p style={{ color: 'var(--color-footer-text)', fontSize: '16px', lineHeight: 1.8 }}>
                To become Satara's most trusted boutique destination for custom styling and gifting accessories, while supporting local artisans and reviving artisanal techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Pillars */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHAT WE STAND FOR</span>
            <h2>Our Brand Pillars</h2>
            <p>Three guiding values that shape everything we curate for our boutique guests.</p>
          </div>

          <div
            className="pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}
          >
            {/* Pillar 1 */}
            <Card style={{ padding: '36px 28px', textAlign: 'center' }}>
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
                  margin: '0 auto 20px',
                  border: '1px solid var(--color-border)'
                }}
              >
                <Gem size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Artisanal Integrity</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                We respect traditional craft techniques — from intricate zardosi hand-embroidery to fine bead setting — working directly with regional artisans.
              </p>
            </Card>

            {/* Pillar 2 */}
            <Card style={{ padding: '36px 28px', textAlign: 'center' }}>
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
                  margin: '0 auto 20px',
                  border: '1px solid var(--color-border)'
                }}
              >
                <Heart size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Customer-Centric Care</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Personalized advice, transparent stock verification before you travel, and honest styling recommendations tailored for your special occasion.
              </p>
            </Card>

            {/* Pillar 3 */}
            <Card style={{ padding: '36px 28px', textAlign: 'center' }}>
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
                  margin: '0 auto 20px',
                  border: '1px solid var(--color-border)'
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Accessible Curation</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                High aesthetic standards made affordable, eliminating arbitrary luxury markups so every woman can experience regal craftsmanship.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Founder WhatsApp CTA */}
      <section style={{ backgroundColor: 'var(--color-surface-alt)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="eyebrow">CUSTOM STYLING &amp; BRIDAL INQUIRIES</span>
          <h2 style={{ fontSize: 'var(--text-h2)', marginBottom: '16px' }}>Have a Special Requirement?</h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 28px' }}>
            Looking for customized bridal bag matches, wedding bulk hampers, or personal styling guidance? Connect directly with our founder on WhatsApp.
          </p>

          <a
            href={getWhatsAppUrl("Hi Aboli Bag Boutique Founder, I would like to inquire about custom styling and gifting.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="whatsapp" size="lg" icon={MessageCircle}>
              Contact Our Founder on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* In-Store Photo Lightbox Modal */}
      {selectedPhoto && (
        <Modal
          isOpen={Boolean(selectedPhoto)}
          onClose={() => setSelectedPhoto(null)}
          title={selectedPhoto.title}
          maxWidth="840px"
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                marginBottom: '16px',
                backgroundColor: 'var(--color-surface-soft)'
              }}
            />
            <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
              {selectedPhoto.caption}
            </p>
            <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <MapPin size={15} color="var(--color-accent)" />
              <span>Shop no 5&amp;6, Laxmi Vishnu Nivas Bldg, Moti Chowk, Satara</span>
            </div>
          </div>
        </Modal>
      )}

      <style>{`
        .about-photo-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-photo-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        .about-photo-card:hover img {
          transform: scale(1.03);
        }
        .photo-zoom-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(36, 20, 16, 0.85);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 12px;
          font-weight: var(--weight-medium);
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
        }
        @media (max-width: 1024px) {
          .about-story-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .mission-vision-grid {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
