import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Dropdown } from '../components/ui/Dropdown';
import { SEO } from '../components/layout/SEO';
import { useToast } from '../context/ToastContext';
import { getWhatsAppUrl, buildContactFormMessage, openWhatsApp } from '../utils/buildWhatsAppMessage';

export function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    productInterest: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const interestOptions = [
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Bags Boutique (Clutches & Potlis)', label: 'Bags Boutique (Clutches & Potlis)' },
    { value: 'Designer Jewellery (Temple & Kundan)', label: 'Designer Jewellery (Temple & Kundan)' },
    { value: 'Custom Bridal Styling & Bulk Gifting', label: 'Custom Bridal Styling & Bulk Gifting' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Full Name must be at least 2 characters.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please provide a message of at least 5 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const messageText = buildContactFormMessage(formData);
    const whatsappUrl = getWhatsAppUrl(messageText);

    setTimeout(() => {
      setIsSubmitting(false);
      const opened = openWhatsApp(whatsappUrl);
      if (opened) {
        addToast('Redirecting to WhatsApp to send your inquiry...', 'success');
      } else {
        addToast('WhatsApp link prepared. You can also copy the message directly below.', 'info');
      }
    }, 400);
  };

  const handleCopyMessage = () => {
    const messageText = buildContactFormMessage(formData);
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    addToast('Inquiry message copied to clipboard! Paste it to +91 90821 40384 on WhatsApp.', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <SEO
        title="Visit Us in Satara | Aboli Bag Boutique Contact"
        description="Get in touch with Aboli Bag Boutique. Visit our physical store at Moti Chowk, Satara or message us directly on WhatsApp for delivery orders."
      />

      {/* Page Header */}
      <section
        style={{
          backgroundColor: 'var(--color-surface-alt)',
          padding: '56px 0 36px',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">REACH OUT OR VISIT US IN SATARA</span>
          <h1 style={{ fontSize: 'var(--text-h1)', marginBottom: '8px' }}>Get In Touch</h1>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)' }}>
            We would love to welcome you to our Satara boutique or assist you with personal styling on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Contact Columns */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div
            className="contact-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '48px',
              alignItems: 'flex-start'
            }}
          >
            {/* 1. Store Information Block */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span className="eyebrow">STORE DETAILS</span>
              <h2 style={{ fontSize: '26px', marginBottom: '24px' }}>Visit Our Satara Boutique</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(122, 31, 58, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Store Address</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      Shop no 5&amp;6, Laxmi Vishnu Nivas Bldg,<br />
                      Beside Narkar Jewellers, opp City Centre,<br />
                      Moti Chowk, Satara 415002, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Call */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(122, 31, 58, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Call Us Directly</h4>
                    <a href="tel:+919082140384" style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)', textDecoration: 'none' }}>
                      +91 90821 40384
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-whatsapp)',
                    flexShrink: 0
                  }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>WhatsApp Ordering &amp; Inquiries</h4>
                    <a
                      href={getWhatsAppUrl("Hi Aboli Bag Boutique, I'd like to check product availability.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '15px', color: 'var(--color-whatsapp)', fontWeight: 'var(--weight-semibold)', textDecoration: 'none' }}
                    >
                      +91 90821 40384 (Instant Chat)
                    </a>
                  </div>
                </div>

                {/* Boutique Hours */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(122, 31, 58, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Boutique Timings</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      Monday – Sunday: 10:00 AM – 9:00 PM<br />
                      <span style={{ fontSize: '12px', color: 'var(--color-accent)' }}>Open all 7 days during wedding &amp; festival seasons</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Send An Inquiry Form */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span className="eyebrow">FAST WHATSAPP HANDOFF</span>
              <h2 style={{ fontSize: '26px', marginBottom: '8px' }}>Send An Inquiry</h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                Fill in the details below, and we will automatically direct you to WhatsApp to send your inquiry message.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Priya Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />

                <Dropdown
                  label="Product Interest"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  options={interestOptions}
                />

                <Input
                  label="Your Message"
                  required
                  multiline
                  rows={4}
                  placeholder="Tell us what you're looking for, or ask about specific colours, sizes, or stock..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  icon={Send}
                  loading={isSubmitting}
                  style={{ width: '100%', fontSize: '16px' }}
                >
                  Send Inquiry via WhatsApp
                </Button>

                {/* Fallback Copy Option */}
                {formData.name && formData.message && (
                  <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'underline'
                      }}
                    >
                      {copied ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied to clipboard!' : 'Copy message text directly'}</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Embedded Google Map Section */}
          <div style={{ marginTop: '56px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span className="eyebrow">LOCATION MAP</span>
              <h2 style={{ fontSize: 'var(--text-h2)' }}>Find Us at Moti Chowk, Satara</h2>
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                height: '400px',
                width: '100%',
                backgroundColor: 'var(--color-surface-alt)'
              }}
            >
              <iframe
                title="Aboli Bag Boutique Satara Location Map"
                src="https://maps.google.com/maps?q=Moti+Chowk,+Satara,+Maharashtra+415002&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
