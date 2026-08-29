import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/buildWhatsAppMessage';

export function WhatsAppFloatButton() {
  const whatsappUrl = getWhatsAppUrl("Hi Aboli Bag Boutique, I'm visiting your website and have an inquiry.");

  return (
    <aside aria-label="WhatsApp quick chat" style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 8900 }}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aboli Bag Boutique on WhatsApp"
        className="whatsapp-float-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'var(--color-whatsapp)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: 'var(--radius-pill)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          fontWeight: 'var(--weight-semibold)',
          fontSize: '15px',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative'
        }}
      >
        {/* Pulsing ring animation */}
        <span
          className="pulse-aura"
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: 'var(--radius-pill)',
            border: '2px solid var(--color-whatsapp)',
            opacity: 0.6,
            animation: 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
            pointerEvents: 'none'
          }}
        />

        <MessageCircle size={22} fill="#FFFFFF" color="transparent" />
        <span className="float-btn-text">Chat Now</span>
      </a>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        .whatsapp-float-btn:hover {
          transform: translateY(-4px) scale(1.04);
          background-color: var(--color-whatsapp-hover) !important;
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6) !important;
        }
        @media (max-width: 640px) {
          .whatsapp-float-btn {
            padding: 14px !important;
            border-radius: var(--radius-pill) !important;
          }
          .float-btn-text {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
