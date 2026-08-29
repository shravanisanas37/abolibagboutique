import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/buildWhatsAppMessage';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
        paddingTop: '64px',
        paddingBottom: '32px',
        marginTop: 'auto',
        borderTop: '3px solid var(--color-accent)'
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" style={{ display: 'inline-block' }} aria-label="Aboli Bag Boutique Home">
              <img
                src="/logo.jpg"
                alt="Aboli Bag Boutique Logo"
                style={{
                  height: '96px',
                  width: '96px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(212, 160, 23, 0.4)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                }}
              />
            </Link>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              color: '#FFFFFF',
              fontSize: '22px',
              fontWeight: 'var(--weight-bold)',
              margin: 0
            }}>
              Aboli Bag Boutique
            </h3>

            <p style={{
              color: 'var(--color-footer-text)',
              fontSize: 'var(--text-body-sm)',
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: '320px'
            }}>
              Exquisite handcrafted bags and designer jewellery tailored for weddings, festivals, and elegant everyday wear.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-accent)',
              fontSize: '13px',
              fontWeight: 'var(--weight-semibold)',
              letterSpacing: '0.04em'
            }}>
              <MapPin size={15} />
              <span>Satara, Maharashtra, India</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 'var(--weight-bold)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
              display: 'inline-block'
            }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/catalogue" className="footer-link">All Products</Link>
              </li>
              <li>
                <Link to="/catalogue?category=bags_boutique" className="footer-link">Bags Boutique</Link>
              </li>
              <li>
                <Link to="/catalogue?category=designer_jewellery" className="footer-link">Designer Jewellery</Link>
              </li>
              <li>
                <Link to="/lookbook" className="footer-link">Lookbook</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Business Model */}
          <div>
            <h4 style={{
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 'var(--weight-bold)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
              display: 'inline-block'
            }}>
              Shopping Info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/faq" className="footer-link">WhatsApp Delivery</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">Offline Verification</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Custom Gifting</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/admin" className="footer-link">Admin Login</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h4 style={{
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: 'var(--weight-bold)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
              display: 'inline-block'
            }}>
              Visit &amp; Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: 'var(--text-body-sm)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: 1.5, opacity: 0.9 }}>
                  Shop no 5&amp;6, Laxmi Vishnu Nivas Bldg, Beside Narkar Jewellers, opp City Centre, Moti Chowk, Satara 415002, Maharashtra
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <a href="tel:+919082140384" className="footer-link">
                  +91 90821 40384
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MessageCircle size={16} color="var(--color-whatsapp)" style={{ flexShrink: 0 }} />
                <a
                  href={getWhatsAppUrl("Hi Aboli Bag Boutique, I'd like to ask a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: 'var(--color-whatsapp)' }}
                >
                  WhatsApp: +91 90821 40384
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span style={{ opacity: 0.9 }}>Daily: 10:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(231, 216, 195, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            opacity: 0.8
          }}
        >
          <div>
            &copy; {currentYear} <strong>Aboli Bag Boutique</strong>. All rights reserved. Satara, Maharashtra.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Handcrafted with</span>
            <Heart size={14} fill="var(--color-cta)" color="var(--color-cta)" />
            <span>in Satara</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--color-footer-text);
          text-decoration: none;
          font-size: var(--text-body-sm);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--color-accent);
          transform: translateX(3px);
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
