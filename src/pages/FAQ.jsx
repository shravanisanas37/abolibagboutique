import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';
import { getWhatsAppUrl } from '../utils/buildWhatsAppMessage';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: 'Can I purchase products directly from this website?',
      a: "There is no automated payment gateway checkout directly on the website itself. However, you can easily place an order for home delivery by messaging us on WhatsApp — we will confirm product availability, delivery charges, and payment options (such as UPI or Cash on Delivery) directly in the chat. You are also warmly welcome to visit our physical boutique in Satara to browse, touch the fabrics, and buy in person."
    },
    {
      q: 'Do you offer delivery?',
      a: 'Yes, delivery is available on all our catalogue items across India and is arranged conveniently through WhatsApp. Simply tap "Order for Delivery on WhatsApp" from any product, send the pre-filled message, and our boutique team will promptly confirm shipping timelines, delivery fees, and safe packaging.'
    },
    {
      q: 'Can I check if a product is currently in stock before visiting?',
      a: 'Yes, absolutely! We strongly encourage you to message us on WhatsApp (+91 90821 40384) or call our store before traveling. Our team will verify real-time shelf stock and can even reserve the item for you for same-day in-store pickup.'
    },
    {
      q: 'Where is your boutique located in Satara?',
      a: 'Our boutique is located at: Shop no 5&6, Laxmi Vishnu Nivas Bldg, Beside Narkar Jewellers, opp City Centre, Moti Chowk, Satara 415002, Maharashtra, India. We are right in the heart of Moti Chowk shopping area with convenient accessibility.'
    },
    {
      q: 'What are your boutique hours?',
      a: 'Our Satara boutique is open 7 days a week, Monday through Sunday, from 10:00 AM to 9:00 PM. Festive season timings may extend on special occasions.'
    },
    {
      q: 'Do you offer custom designs for bags and jewelry?',
      a: 'Yes! We specialize in custom bridal gifting hampers, matching potlis for bridesmaid groups, and custom jewellery set styling. Bring or send a photo of your outfit, and our founder will work with you to curate the ideal accessories.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <>
      <SEO
        title="FAQs | Aboli Bag Boutique Satara"
        description="Frequently asked questions about shopping, WhatsApp delivery, in-store offline verification, location, and custom gifting at Aboli Bag Boutique in Satara."
        schema={faqSchema}
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
          <span className="eyebrow">CLARIFICATIONS ABOUT OUR OFFLINE &amp; WHATSAPP MODEL</span>
          <h1 style={{ fontSize: 'var(--text-h1)', marginBottom: '8px' }}>Frequently Asked Questions</h1>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)' }}>
            Everything you need to know about browsing our online catalogue, ordering for delivery via WhatsApp, or visiting our Satara boutique.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-light)',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    style={{
                      width: '100%',
                      padding: '22px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '19px',
                        fontWeight: 'var(--weight-bold)',
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-text-primary)',
                        lineHeight: 1.4
                      }}
                    >
                      {item.q}
                    </span>

                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        flexShrink: 0
                      }}
                    >
                      <ChevronDown size={22} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      style={{
                        padding: '0 28px 24px',
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: 'var(--color-text-primary)',
                        borderTop: '1px solid var(--color-surface-alt)',
                        paddingTop: '16px',
                        animation: 'fadeIn 0.2s ease-out'
                      }}
                    >
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions CTA */}
          <div
            style={{
              marginTop: '48px',
              padding: '36px',
              backgroundColor: 'var(--color-surface-soft)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-whatsapp)',
                marginBottom: '16px'
              }}
            >
              <MessageCircle size={28} />
            </div>

            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Still Have Questions?</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '440px', marginBottom: '24px' }}>
              Can&apos;t find the answer you&apos;re looking for? Our friendly boutique team is always ready to assist you on WhatsApp.
            </p>

            <a
              href={getWhatsAppUrl("Hi Aboli Bag Boutique, I have a question not covered in your FAQ.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="whatsapp" size="lg" icon={MessageCircle}>
                Chat with Us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
