import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShoppingBag, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Aboli Bag Boutique"
        description="The page you are looking for does not exist on Aboli Bag Boutique."
      />

      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '64px 20px',
          backgroundColor: 'var(--color-background)'
        }}
      >
        <div
          style={{
            maxWidth: '540px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: '56px 36px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(122, 31, 58, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              margin: '0 auto 24px'
            }}
          >
            <Compass size={40} />
          </div>

          <span className="eyebrow">ERROR 404</span>
          <h1 style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '12px' }}>
            This Page Wandered Off
          </h1>

          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
            Let&apos;s get you back to browsing our handcrafted bags, clutches, potlis, and designer jewellery collections.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="cta" icon={Home}>
                Go to Homepage
              </Button>
            </Link>

            <Link to="/catalogue" style={{ textDecoration: 'none' }}>
              <Button variant="outline" icon={ShoppingBag}>
                Explore Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
