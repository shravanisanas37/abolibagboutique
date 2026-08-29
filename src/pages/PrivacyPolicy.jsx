import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/layout/SEO';

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Aboli Bag Boutique Satara"
        description="Privacy policy and data practices for Aboli Bag Boutique in Satara, Maharashtra."
      />

      <div className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-narrow">
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldCheck size={28} color="var(--color-primary)" />
              <span className="eyebrow" style={{ margin: 0 }}>CUSTOMER PRIVACY</span>
            </div>

            <h1 style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '24px' }}>
              Privacy Policy
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-primary)' }}>
              <p>
                <strong>Effective Date:</strong> August 2026<br />
                <strong>Aboli Bag Boutique</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the digital showcase website <code>aboli.in</code> for our physical boutique in Satara, Maharashtra, India.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginTop: '8px' }}>1. Offline &amp; WhatsApp Communication</h3>
              <p>
                We do not collect sensitive credit card, debit card, or automated banking details on this website. When you click &ldquo;Order for Delivery on WhatsApp&rdquo; or submit an inquiry, you are voluntarily communicating directly with our boutique staff over WhatsApp. Any delivery address or payment details (such as UPI IDs) shared in chat are used strictly to fulfill and dispatch your specific boutique order.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginTop: '8px' }}>2. Data Protection</h3>
              <p>
                We do not sell, rent, or trade your contact information or messaging history to any third-party advertisers. Your phone number is kept confidential and only utilized for customer service regarding your inquiries or delivery orders.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginTop: '8px' }}>3. Analytics &amp; Cookies</h3>
              <p>
                We may use basic privacy-friendly web analytics to monitor page view trends and popular catalogue categories to improve our boutique inventory. No personally identifiable tracking is performed.
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginTop: '8px' }}>4. Contact Us</h3>
              <p>
                If you have questions regarding our privacy practices, please contact us at our physical store:<br />
                <strong>Aboli Bag Boutique</strong><br />
                Shop no 5&amp;6, Laxmi Vishnu Nivas Bldg, Beside Narkar Jewellers, opp City Centre, Moti Chowk, Satara 415002, Maharashtra, India<br />
                Phone / WhatsApp: +91 90821 40384
              </p>
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--color-border-light)' }}>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)', textDecoration: 'none' }}>
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
