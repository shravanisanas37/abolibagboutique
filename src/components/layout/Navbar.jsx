import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { getWhatsAppUrl } from '../../utils/buildWhatsAppMessage';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`boutique-navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'var(--color-background)',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.25s ease',
          height: '84px'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
            aria-label="Aboli Bag Boutique Home"
          >
            <img
              src="/logo.jpg"
              alt="Aboli Bag Boutique Logo"
              style={{
                height: '46px',
                width: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid rgba(212, 160, 23, 0.3)'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--color-primary)',
                lineHeight: 1.1,
                letterSpacing: '0.02em'
              }}>
                Aboli
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: '0.14em',
                color: 'var(--color-accent)',
                textTransform: 'uppercase'
              }}>
                Bag Boutique &amp; Jewellery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                  fontWeight: isActive ? 'var(--weight-bold)' : 'var(--weight-medium)',
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                  position: 'relative',
                  padding: '6px 0',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--color-accent)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Block (Admin Portal + Chat Now CTA) */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link
              to="/admin"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 'var(--weight-medium)',
                color: 'var(--color-text-secondary)',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                transition: 'color 0.2s, background-color 0.2s'
              }}
              title="Catalogue Admin Portal"
              className="admin-nav-link"
            >
              <Shield size={16} />
              <span>Admin</span>
            </Link>

            <a
              href={getWhatsAppUrl("Hi Aboli Bag Boutique, I'm visiting your website and have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="whatsapp"
                size="sm"
                icon={MessageCircle}
                className="chat-now-btn"
              >
                Chat Now
              </Button>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-menu-toggle"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--color-primary)',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(36, 20, 16, 0.6)',
            backdropFilter: 'blur(3px)',
            zIndex: 999,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '82%',
              maxWidth: '320px',
              height: '100%',
              backgroundColor: 'var(--color-background)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 20px',
              animation: 'slideLeft 0.25s ease-out'
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo.jpg" alt="Aboli Logo" style={{ height: '38px', width: '38px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(212, 160, 23, 0.3)' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  Aboli Boutique
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: '4px' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    backgroundColor: isActive ? 'var(--color-surface-alt)' : 'transparent',
                    fontWeight: isActive ? 'var(--weight-bold)' : 'var(--weight-medium)',
                    fontSize: '16px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  })}
                >
                  <span>{link.name}</span>
                  {link.path === '/catalogue' && (
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '10px', backgroundColor: 'var(--color-accent)', color: '#2B1B14', fontWeight: 'bold' }}>
                      Shop
                    </span>
                  )}
                </NavLink>
              ))}

              <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '16px 0' }} />

              <NavLink
                to="/admin"
                style={({ isActive }) => ({
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-secondary)',
                  backgroundColor: isActive ? 'var(--color-surface-alt)' : 'transparent',
                  fontWeight: 'var(--weight-medium)',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                })}
              >
                <Shield size={18} />
                <span>Admin Portal</span>
              </NavLink>
            </nav>

            {/* Mobile Chat Now CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <a
                href={getWhatsAppUrl("Hi Aboli Bag Boutique, I would like to inquire about your collection.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Button variant="whatsapp" size="lg" icon={MessageCircle} style={{ width: '100%' }}>
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: var(--color-primary) !important;
        }
        .admin-nav-link:hover {
          color: var(--color-primary) !important;
          background-color: var(--color-surface-alt);
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .admin-nav-link {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .chat-now-btn span {
            display: none;
          }
          .chat-now-btn {
            padding: 0 12px !important;
          }
        }
      `}</style>
    </>
  );
}
