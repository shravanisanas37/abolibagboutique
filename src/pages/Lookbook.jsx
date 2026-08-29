import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  ShoppingBag, 
  ChevronDown, 
  Eye, 
  Check, 
  MapPin
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { SEO } from '../components/layout/SEO';
import { useProducts } from '../context/ProductContext';
import { getWhatsAppUrl, buildFounderInquiryMessage } from '../utils/buildWhatsAppMessage';

// Official Lookbook data using only the user's provided photography
const OFFICIAL_LOOKS = [
  {
    id: 'look-01',
    lookNumber: '01',
    occasion: 'wedding',
    occasionLabel: 'Wedding Edit',
    title: 'The Bridal Edit',
    tagline: 'Timeless Opulence for the Regal Bride',
    description: 'Statement potlis paired with timeless traditional jewellery for unforgettable wedding moments. Multi-layered ruby and gold coin haar, temple choker, and traditional jhumkas crafted for auspicious celebrations.',
    coverImage: '/images/lookbook/lookbook-bridal.jpg',
    altText: 'Aboli boutique bridal styling in cream and gold saree with burgundy blouse and layered ruby gold jewellery',
    featuredProducts: [
      { name: 'Layered Ruby & Coin Temple Haar', category: 'Designer Jewellery', subcategory: 'Necklace', tag: 'Traditional 22k Finish' },
      { name: 'Embroidered Velvet Bridal Potli', category: 'Bags Boutique', subcategory: 'Potli', tag: 'Handcrafted Zari' },
      { name: 'Heritage Ruby Jhumka Earrings', category: 'Designer Jewellery', subcategory: 'Earrings', tag: 'Matching Pair' }
    ],
    stylingNote: 'Complements rich crimson, marigold, and gold Banarasi silk sarees for wedding rituals.',
    catalogueFilter: 'designer_jewellery'
  },
  {
    id: 'look-02',
    lookNumber: '02',
    occasion: 'traditional',
    occasionLabel: 'Timeless Classic',
    title: 'Timeless Elegance',
    tagline: 'Pure Heritage in Multi-Strand Gold Craft',
    description: 'A tribute to classical Indian grace. Long multi-strand gold bead haar paired with delicate matching jhumkas, radiating quiet luxury and timeless sophistication for auspicious occasions.',
    coverImage: '/images/lookbook/lookbook-timeless.jpg',
    altText: 'Woman in cream silk saree wearing traditional long multi-strand gold necklace and jhumkas',
    featuredProducts: [
      { name: 'Five-Strand Traditional Gold Haar', category: 'Designer Jewellery', subcategory: 'Necklace', tag: 'Heritage Beaded' },
      { name: 'Classic Gold Filigree Jhumkas', category: 'Designer Jewellery', subcategory: 'Earrings', tag: 'Lightweight' },
      { name: 'Ivory Zari Silk Envelope Clutch', category: 'Bags Boutique', subcategory: 'Clutch', tag: 'Satin Lined' }
    ],
    stylingNote: 'Ideal for housewarmings, morning pujas, and traditional family milestone celebrations.',
    catalogueFilter: 'designer_jewellery'
  },
  {
    id: 'look-03',
    lookNumber: '03',
    occasion: 'festive',
    occasionLabel: 'Festive & Heritage',
    title: 'Festive Glamour',
    tagline: 'Maharashtrian Royal Temple Splendour',
    description: 'Rich colours, intricate temple motifs, and green-beaded jewellery that brings every celebration to life. Features an elaborate Goddess Lakshmi pendant, green-bead strands, and traditional kamarbandh styling.',
    coverImage: '/images/lookbook/lookbook-festive.jpg',
    altText: 'Traditional Maharashtrian festive look with gold temple necklace, green beaded haar, maang tikka and jhumkas',
    featuredProducts: [
      { name: 'Goddess Lakshmi Temple Pendant Haar', category: 'Designer Jewellery', subcategory: 'Necklace', tag: 'Green Bead Strands' },
      { name: 'Kundan Floral Choker & Maang Tikka', category: 'Designer Jewellery', subcategory: 'Bridal Set', tag: 'Complete Set' },
      { name: 'Silk Tassel Festive Batwa Pouch', category: 'Bags Boutique', subcategory: 'Batwa', tag: 'Festive Weave' }
    ],
    stylingNote: 'Pairs magnificently with Paithani sarees, Nauvari drapes, and festive silk attire.',
    catalogueFilter: 'designer_jewellery'
  },
  {
    id: 'look-04',
    lookNumber: '04',
    occasion: 'contemporary',
    occasionLabel: 'Contemporary Tradition',
    title: 'Contemporary Tradition',
    tagline: 'Royal Emerald & Pearl Symphony',
    description: 'Make an entrance with contemporary statement jewellery designed to shine. Rich emerald green accents, black-bead strands, and diamond-finish drop motifs paired with opulent evening drapes.',
    coverImage: '/images/lookbook/lookbook-contemporary.jpg',
    altText: 'Woman in royal dark green saree with emerald and pearl statement long necklace and matching chandelier earrings',
    featuredProducts: [
      { name: 'Emerald & Pearl Long Statement Haar', category: 'Designer Jewellery', subcategory: 'Necklace', tag: 'Royal Motif' },
      { name: 'Emerald Cluster Chandelier Earrings', category: 'Designer Jewellery', subcategory: 'Earrings', tag: 'High Sparkle' },
      { name: 'Gold-Trim Silk Evening Box Clutch', category: 'Bags Boutique', subcategory: 'Box Clutch', tag: 'Detachable Chain' }
    ],
    stylingNote: 'Stunning with deep bottle green, midnight blue, or champagne gold reception sarees and lehengas.',
    catalogueFilter: 'designer_jewellery'
  }
];

// Occasion filter tabs
const FILTER_TABS = [
  { key: 'all', label: 'All Looks' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'traditional', label: 'Traditional' },
  { key: 'festive', label: 'Festive' },
  { key: 'contemporary', label: 'Contemporary' }
];

export function Lookbook() {
  const { products } = useProducts();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalLook, setActiveModalLook] = useState(null);

  // Filtered looks based on selected occasion
  const displayedLooks = useMemo(() => {
    if (selectedFilter === 'all') return OFFICIAL_LOOKS;
    return OFFICIAL_LOOKS.filter(look => look.occasion === selectedFilter);
  }, [selectedFilter]);

  // Dynamic / curated pairings connecting live store categories
  const curatedPairings = useMemo(() => {
    const bagItems = products.filter(p => p.main_category === 'bags_boutique' && p.availability !== 'sold');
    const jewelleryItems = products.filter(p => p.main_category === 'designer_jewellery' && p.availability !== 'sold');

    return [
      {
        id: 'pair-1',
        title: 'The Regal Bridal Pairing',
        subtitle: 'Potli + Temple Necklace + Jhumkas',
        tag: 'Bridal & Sangeet',
        items: [
          {
            type: 'Bag',
            name: bagItems[0]?.name || 'Zari Embroidered Potli Bag',
            category: 'Bags Boutique',
            image: bagItems[0]?.images?.[0] || '/images/lookbook/lookbook-bridal.jpg',
            slug: bagItems[0]?.slug || ''
          },
          {
            type: 'Necklace',
            name: jewelleryItems[0]?.name || 'Layered Ruby & Gold Coin Haar',
            category: 'Designer Jewellery',
            image: jewelleryItems[0]?.images?.[0] || '/images/lookbook/lookbook-timeless.jpg',
            slug: jewelleryItems[0]?.slug || ''
          },
          {
            type: 'Earrings',
            name: jewelleryItems[1]?.name || 'Heritage Bell Jhumkas',
            category: 'Designer Jewellery',
            image: jewelleryItems[1]?.images?.[0] || '/images/lookbook/lookbook-festive.jpg',
            slug: jewelleryItems[1]?.slug || ''
          }
        ]
      },
      {
        id: 'pair-2',
        title: 'The Festive Maharashtrian Duo',
        subtitle: 'Silk Batwa + Temple Gold Choker',
        tag: 'Festivals & Puja',
        items: [
          {
            type: 'Bag',
            name: bagItems[1]?.name || 'Silk Tassel Batwa Pouch',
            category: 'Bags Boutique',
            image: bagItems[1]?.images?.[0] || '/images/lookbook/lookbook-festive.jpg',
            slug: bagItems[1]?.slug || ''
          },
          {
            type: 'Jewellery',
            name: jewelleryItems[2]?.name || 'Goddess Lakshmi Temple Set',
            category: 'Designer Jewellery',
            image: jewelleryItems[2]?.images?.[0] || '/images/lookbook/lookbook-contemporary.jpg',
            slug: jewelleryItems[2]?.slug || ''
          }
        ]
      },
      {
        id: 'pair-3',
        title: 'The Royal Emerald Reception Set',
        subtitle: 'Box Clutch + Emerald Chandelier Earrings',
        tag: 'Reception & Evening',
        items: [
          {
            type: 'Clutch',
            name: bagItems[2]?.name || 'Gold-Trim Evening Box Clutch',
            category: 'Bags Boutique',
            image: bagItems[2]?.images?.[0] || '/images/lookbook/lookbook-contemporary.jpg',
            slug: bagItems[2]?.slug || ''
          },
          {
            type: 'Jewellery',
            name: jewelleryItems[3]?.name || 'Emerald & Pearl Long Statement Haar',
            category: 'Designer Jewellery',
            image: jewelleryItems[3]?.images?.[0] || '/images/lookbook/lookbook-bridal.jpg',
            slug: jewelleryItems[3]?.slug || ''
          }
        ]
      }
    ];
  }, [products]);

  const scrollToLooks = () => {
    const el = document.getElementById('editorial-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Editorial Lookbook | Styled Bags & Jewellery | Aboli Satara"
        description="Discover authentic Indian boutique jewellery and bag stylings by Aboli Bag Boutique & Jewellery, Satara. Featuring traditional bridal, Maharashtrian temple, and festive collections."
      />

      <div className="lookbook-page-root">
        {/* =========================================================================
            1. HERO SECTION (Featuring "Timeless Elegance" image)
           ========================================================================= */}
        <section className="lookbook-hero">
          <div className="container lookbook-hero-container">
            <div className="lookbook-hero-content">
              <div className="hero-badge-pill">
                <Sparkles size={14} className="gold-icon" />
                <span>STYLED BY ABOLI</span>
              </div>

              <h1 className="lookbook-hero-title">
                The Aboli Lookbook
              </h1>

              <p className="lookbook-hero-subtitle">
                Curated bags & jewellery styled for weddings, festivities, celebrations and everyday elegance.
              </p>

              <div className="lookbook-hero-actions">
                <button 
                  type="button" 
                  onClick={scrollToLooks}
                  className="editorial-scroll-btn"
                  aria-label="Scroll to curated looks"
                >
                  <span>Explore Looks</span>
                  <ChevronDown size={18} className="scroll-chevron-anim" />
                </button>

                <a
                  href={getWhatsAppUrl(buildFounderInquiryMessage("Lookbook Styling Consultation"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-whatsapp-link"
                >
                  <MessageCircle size={18} color="var(--color-whatsapp)" />
                  <span>Style on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hero Visual using Timeless Elegance image */}
            <div className="lookbook-hero-visual-frame">
              <div className="hero-image-wrapper">
                <img
                  src="/images/lookbook/lookbook-timeless.jpg"
                  alt="Timeless Elegance — Aboli boutique gold jewellery and saree styling"
                  className="hero-lifestyle-img"
                />
                <div className="hero-image-caption-pill">
                  <span>Satara Boutique Styling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. LOOKBOOK INTRO (Editorial Statement)
           ========================================================================= */}
        <section className="lookbook-intro-section">
          <div className="container-narrow text-center">
            <div className="gold-ornament-line">
              <span className="ornament-diamond" />
            </div>

            <p className="editorial-statement-quote">
              “Discover the art of pairing statement bags with timeless jewellery.
              Each Aboli look is thoughtfully curated to complement your occasion,
              your outfit and your personal style.”
            </p>

            <span className="editorial-signature">— ABOLI BOUTIQUE STYLING EDIT</span>
          </div>
        </section>

        {/* =========================================================================
            3. OCCASION FILTER TABS
           ========================================================================= */}
        <section id="editorial-gallery" className="lookbook-filter-section">
          <div className="container">
            <div className="filter-tabs-wrapper" role="tablist" aria-label="Filter looks by occasion">
              {FILTER_TABS.map((tab) => {
                const isActive = selectedFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-tab-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(tab.key)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. FEATURED LOOKS (Using Authentic Uploaded Images)
           ========================================================================= */}
        <section className="featured-looks-section">
          <div className="container">
            <div className="editorial-looks-list">
              {displayedLooks.map((look, index) => {
                const isEven = index % 2 === 1;

                return (
                  <article 
                    key={look.id} 
                    className={`editorial-look-card ${isEven ? 'layout-reverse' : ''}`}
                    data-occasion={look.occasion}
                  >
                    {/* Portrait Image Canvas */}
                    <div className="look-image-col">
                      <div className="look-image-canvas">
                        <img
                          src={look.coverImage}
                          alt={look.altText}
                          loading="lazy"
                          className="look-media"
                        />
                        <div className="look-number-badge">
                          <span>LOOK {look.lookNumber}</span>
                        </div>
                        <div className="look-occasion-pill">
                          <span>{look.occasionLabel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Details */}
                    <div className="look-details-col">
                      <div className="look-meta-header">
                        <span className="look-kicker">{look.tagline}</span>
                        <h2 className="look-title">{look.title}</h2>
                      </div>

                      <p className="look-description">
                        {look.description}
                      </p>

                      {/* Featured Pieces Highlights */}
                      <div className="look-products-box">
                        <span className="look-products-heading">Pieces Featured in this Look:</span>
                        <ul className="look-products-list">
                          {look.featuredProducts.map((prod, pIdx) => (
                            <li key={pIdx} className="look-product-item">
                              <span className="bullet-check">
                                <Check size={13} color="var(--color-primary)" />
                              </span>
                              <div className="product-item-text">
                                <strong className="product-item-name">{prod.name}</strong>
                                <span className="product-item-meta">• {prod.category} ({prod.tag})</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Styling Note */}
                      <div className="look-styling-note">
                        <em>Stylist Note:</em> {look.stylingNote}
                      </div>

                      {/* Actions */}
                      <div className="look-action-row">
                        <Button
                          variant="cta"
                          size="md"
                          icon={Eye}
                          onClick={() => setActiveModalLook(look)}
                          ariaLabel={`Explore ${look.title}`}
                        >
                          Explore This Look
                        </Button>

                        <a
                          href={getWhatsAppUrl(buildFounderInquiryMessage(`Look ${look.lookNumber} (${look.title})`))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="look-whatsapp-quicklink"
                          aria-label={`Inquire about ${look.title} on WhatsApp`}
                        >
                          <MessageCircle size={17} color="var(--color-whatsapp)" />
                          <span>Inquire on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. BRAND EDITORIAL BANNER SECTION (Using Uploaded Aboli Brand Image)
           ========================================================================= */}
        <section className="brand-editorial-section">
          <div className="container">
            <div className="brand-banner-card">
              <div className="brand-banner-visual">
                <img
                  src="/images/lookbook/lookbook-contemporary.jpg"
                  alt="Aboli Bag Boutique & Jewellery signature collection in Satara"
                  className="brand-banner-full-img"
                />
              </div>
              <div className="brand-banner-content">
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>AUTHENTIC BOUTIQUE CRAFTSMANSHIP</span>
                <h3 className="brand-banner-heading">
                  Satara’s Destination for Handcrafted Luxury
                </h3>
                <p className="brand-banner-desc">
                  Every potli, clutch, and jewellery piece at Aboli is personally curated to celebrate heritage Maharashtrian traditions and modern elegance without luxury markups.
                </p>
                <div className="brand-banner-footer-info">
                  <div className="brand-info-item">
                    <strong>Physical Store:</strong> Moti Chowk, Satara
                  </div>
                  <div className="brand-info-item">
                    <strong>Delivery:</strong> Available across India on WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PRODUCT PAIRING SECTION ("Complete the Look")
           ========================================================================= */}
        <section className="product-pairing-section">
          <div className="container">
            <div className="section-header-editorial text-center">
              <span className="eyebrow">STYLING HARMONY</span>
              <h2 className="pairing-section-title">Complete the Look</h2>
              <p className="pairing-section-desc">
                Curated bag and jewellery pairings handcrafted to complement each other in texture, hue, and heritage appeal.
              </p>
            </div>

            <div className="pairings-grid">
              {curatedPairings.map((pair) => (
                <div key={pair.id} className="pairing-card">
                  <div className="pairing-card-header">
                    <div>
                      <span className="pairing-tag">{pair.tag}</span>
                      <h3 className="pairing-card-title">{pair.title}</h3>
                      <p className="pairing-card-subtitle">{pair.subtitle}</p>
                    </div>
                  </div>

                  <div className="pairing-items-row">
                    {pair.items.map((item, idx) => (
                      <div key={idx} className="pairing-item-col">
                        <div className="pairing-item-image-wrapper">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="pairing-item-img"
                          />
                          <span className="pairing-item-type-badge">{item.type}</span>
                        </div>
                        <div className="pairing-item-info">
                          <h4 className="pairing-item-name">{item.name}</h4>
                          <span className="pairing-item-cat">{item.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pairing-card-footer">
                    <Link
                      to="/catalogue"
                      className="pairing-catalogue-link"
                    >
                      <span>View in Catalogue</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHATSAPP CTA SECTION
           ========================================================================= */}
        <section className="lookbook-cta-section">
          <div className="container">
            <div className="lookbook-cta-card">
              <div className="cta-content-wrapper">
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>PERSONALIZED BOUTIQUE EXPERIENCE</span>
                <h2 className="lookbook-cta-heading">Found Your Look?</h2>
                <p className="lookbook-cta-desc">
                  Visit our Satara store or message us on WhatsApp to check availability and reserve your favourites.
                </p>

                <div className="lookbook-cta-buttons">
                  <a
                    href={getWhatsAppUrl(buildFounderInquiryMessage("Lookbook Styling & Availability Check"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="whatsapp" size="lg" icon={MessageCircle}>
                      Chat on WhatsApp
                    </Button>
                  </a>

                  <Link to="/catalogue" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="lg" icon={ShoppingBag}>
                      Explore Catalogue
                    </Button>
                  </Link>
                </div>

                <div className="boutique-location-pill">
                  <MapPin size={15} color="var(--color-accent)" />
                  <span>Shop no 5&6, Laxmi Vishnu Nivas Bldg, Moti Chowk, Satara</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            LOOK DETAIL MODAL (Opens on "Explore This Look")
           ========================================================================= */}
        {activeModalLook && (
          <Modal
            isOpen={Boolean(activeModalLook)}
            onClose={() => setActiveModalLook(null)}
            title={activeModalLook.title}
            subtitle={activeModalLook.tagline}
            maxWidth="680px"
          >
            <div className="modal-look-content">
              <div className="modal-look-img-frame">
                <img
                  src={activeModalLook.coverImage}
                  alt={activeModalLook.altText}
                  className="modal-look-img"
                />
              </div>

              <div className="modal-look-body">
                <p className="modal-look-desc">{activeModalLook.description}</p>

                <div className="modal-pieces-section">
                  <h4 className="modal-pieces-title">Curated Ensemble Details</h4>
                  <div className="modal-pieces-grid">
                    {activeModalLook.featuredProducts.map((p, i) => (
                      <div key={i} className="modal-piece-item">
                        <div className="piece-dot" />
                        <div>
                          <strong>{p.name}</strong>
                          <div className="piece-sub">{p.category} — {p.subcategory} ({p.tag})</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-styling-tip">
                  <strong>Stylist Recommendation:</strong>
                  <p>{activeModalLook.stylingNote}</p>
                </div>

                <div className="modal-footer-actions">
                  <a
                    href={getWhatsAppUrl(buildFounderInquiryMessage(`Look ${activeModalLook.lookNumber}: ${activeModalLook.title}`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-whatsapp-cta"
                  >
                    <MessageCircle size={18} />
                    <span>Inquire About This Ensemble on WhatsApp</span>
                  </a>

                  <Link
                    to={`/catalogue?category=${activeModalLook.catalogueFilter}`}
                    onClick={() => setActiveModalLook(null)}
                    className="modal-catalogue-cta"
                  >
                    <span>Browse Matching Catalogue Items</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>

      {/* =========================================================================
          STYLES (Clean, Uncropped Portrait Ratios, Luxury Boutique Aesthetic)
         ========================================================================= */}
      <style>{`
        /* Root & Base */
        .lookbook-page-root {
          background-color: var(--color-background);
          color: var(--color-text-primary);
          overflow-x: hidden;
        }

        /* 1. HERO SECTION */
        .lookbook-hero {
          position: relative;
          background-color: var(--color-surface-alt);
          padding: 60px 0 68px;
          border-bottom: 1px solid var(--color-border);
        }
        .lookbook-hero-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: rgba(201, 162, 39, 0.12);
          border: 1px solid rgba(201, 162, 39, 0.35);
          border-radius: var(--radius-pill);
          color: #8C6D14;
          font-size: 12px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .lookbook-hero-title {
          font-family: var(--font-heading);
          font-size: 50px;
          line-height: 1.15;
          color: var(--color-primary);
          margin-bottom: 16px;
        }
        .lookbook-hero-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          max-width: 520px;
          margin-bottom: 32px;
        }
        .lookbook-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .editorial-scroll-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid var(--color-primary);
          color: var(--color-primary);
          padding: 12px 24px;
          border-radius: var(--radius-pill);
          font-weight: var(--weight-semibold);
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .editorial-scroll-btn:hover {
          background-color: var(--color-primary);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
        .hero-whatsapp-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-pill);
          background-color: rgba(37, 211, 102, 0.1);
          color: var(--color-text-primary);
          font-weight: var(--weight-semibold);
          font-size: 14px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .hero-whatsapp-link:hover {
          background-color: rgba(37, 211, 102, 0.18);
        }
        .scroll-chevron-anim {
          animation: bounce 2s infinite ease-in-out;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(5px); }
          60% { transform: translateY(3px); }
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          aspect-ratio: 3 / 4;
          max-height: 520px;
          background-color: var(--color-surface-soft);
        }
        .hero-lifestyle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-image-wrapper:hover .hero-lifestyle-img {
          transform: scale(1.03);
        }
        .hero-image-caption-pill {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: var(--weight-semibold);
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }

        /* 2. LOOKBOOK INTRO */
        .lookbook-intro-section {
          padding: 64px 0 48px;
          background-color: var(--color-background);
        }
        .gold-ornament-line {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .gold-ornament-line::before,
        .gold-ornament-line::after {
          content: '';
          height: 1px;
          width: 60px;
          background-color: var(--color-accent);
          opacity: 0.6;
        }
        .ornament-diamond {
          width: 8px;
          height: 8px;
          background-color: var(--color-accent);
          transform: rotate(45deg);
          margin: 0 12px;
        }
        .editorial-statement-quote {
          font-family: var(--font-heading);
          font-size: 24px;
          line-height: 1.6;
          color: var(--color-primary);
          font-style: italic;
          max-width: 780px;
          margin: 0 auto 16px;
        }
        .editorial-signature {
          display: inline-block;
          font-size: 12px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.16em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        /* 3. OCCASION FILTER TABS */
        .lookbook-filter-section {
          padding: 12px 0 36px;
          background-color: var(--color-background);
          position: sticky;
          top: 80px;
          z-index: 20;
        }
        .filter-tabs-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          padding: 6px;
          background-color: rgba(245, 233, 216, 0.85);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border);
          max-width: 620px;
          margin: 0 auto;
        }
        .filter-tab-pill {
          background: transparent;
          border: none;
          padding: 8px 18px;
          border-radius: var(--radius-pill);
          font-size: 14px;
          font-weight: var(--weight-medium);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-tab-pill:hover {
          color: var(--color-primary);
          background-color: rgba(255, 255, 255, 0.6);
        }
        .filter-tab-pill.active {
          background-color: var(--color-primary);
          color: #FFFFFF;
          font-weight: var(--weight-semibold);
          box-shadow: var(--shadow-sm);
        }

        /* 4. FEATURED LOOKS (Magazine Editorial Cards) */
        .featured-looks-section {
          padding: 24px 0 64px;
          background-color: var(--color-background);
        }
        .editorial-looks-list {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .editorial-look-card {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
          background-color: var(--color-surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
          padding: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .editorial-look-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .editorial-look-card.layout-reverse {
          grid-template-columns: 1.15fr 1fr;
        }
        .editorial-look-card.layout-reverse .look-image-col {
          order: 2;
        }
        .editorial-look-card.layout-reverse .look-details-col {
          order: 1;
        }

        .look-image-canvas {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 3 / 4;
          background-color: var(--color-surface-alt);
          box-shadow: var(--shadow-sm);
        }
        .look-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
        }
        .editorial-look-card:hover .look-media {
          transform: scale(1.03);
        }
        .look-number-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(36, 20, 16, 0.85);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          font-size: 11px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.1em;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .look-occasion-pill {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          color: var(--color-primary);
          padding: 5px 14px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: var(--weight-semibold);
          box-shadow: var(--shadow-sm);
        }

        .look-kicker {
          display: block;
          font-size: 12px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 6px;
        }
        .look-title {
          font-family: var(--font-heading);
          font-size: 32px;
          color: var(--color-primary);
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .look-description {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .look-products-box {
          background-color: var(--color-surface-soft);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          padding: 18px 20px;
          margin-bottom: 20px;
        }
        .look-products-heading {
          font-size: 13px;
          font-weight: var(--weight-bold);
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 12px;
        }
        .look-products-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .look-product-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
        }
        .bullet-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: rgba(122, 31, 58, 0.12);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .product-item-text {
          line-height: 1.4;
        }
        .product-item-name {
          color: var(--color-text-primary);
          font-weight: var(--weight-semibold);
          margin-right: 6px;
        }
        .product-item-meta {
          color: var(--color-text-secondary);
          font-size: 13px;
        }

        .look-styling-note {
          font-size: 14px;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
          padding-left: 12px;
          border-left: 2.5px solid var(--color-accent);
          line-height: 1.5;
        }
        .look-styling-note em {
          font-style: normal;
          font-weight: var(--weight-bold);
          color: var(--color-primary);
        }

        .look-action-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .look-whatsapp-quicklink {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: var(--weight-semibold);
          color: var(--color-text-primary);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          transition: background-color 0.2s;
        }
        .look-whatsapp-quicklink:hover {
          background-color: var(--color-surface-alt);
          color: var(--color-primary);
        }

        /* 5. BRAND EDITORIAL BANNER */
        .brand-editorial-section {
          padding: 32px 0 64px;
          background-color: var(--color-background);
        }
        .brand-banner-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
          background-color: var(--color-surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .brand-banner-visual {
          width: 100%;
          height: 100%;
          min-height: 340px;
          background-color: var(--color-surface-soft);
        }
        .brand-banner-full-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .brand-banner-content {
          padding: 36px 40px 36px 0;
        }
        .brand-banner-heading {
          font-family: var(--font-heading);
          font-size: 30px;
          color: var(--color-primary);
          margin: 8px 0 16px;
          line-height: 1.3;
        }
        .brand-banner-desc {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .brand-banner-footer-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
          color: var(--color-text-primary);
          padding-top: 16px;
          border-top: 1px solid var(--color-border-light);
        }

        /* 6. PRODUCT PAIRINGS ("Complete the Look") */
        .product-pairing-section {
          padding: 72px 0 80px;
          background-color: var(--color-surface-alt);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .section-header-editorial {
          max-width: 680px;
          margin: 0 auto 48px;
        }
        .pairing-section-title {
          font-family: var(--font-heading);
          font-size: 38px;
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .pairing-section-desc {
          font-size: 17px;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .pairings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .pairing-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pairing-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .pairing-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 4px;
        }
        .pairing-card-title {
          font-family: var(--font-heading);
          font-size: 20px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .pairing-card-subtitle {
          font-size: 13px;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
        }

        .pairing-items-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
          flex: 1;
        }
        .pairing-item-col {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px;
          background-color: var(--color-surface-soft);
          border-radius: var(--radius-md);
        }
        .pairing-item-image-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          flex-shrink: 0;
          background-color: var(--color-surface);
        }
        .pairing-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .pairing-item-type-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          background: rgba(36, 20, 16, 0.75);
          color: #FFF;
          font-size: 9px;
          font-weight: var(--weight-bold);
          padding: 1px 4px;
          border-radius: 4px;
        }
        .pairing-item-info {
          flex: 1;
          min-width: 0;
        }
        .pairing-item-name {
          font-size: 14px;
          font-weight: var(--weight-semibold);
          color: var(--color-text-primary);
          margin-bottom: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pairing-item-cat {
          font-size: 12px;
          color: var(--color-text-secondary);
        }

        .pairing-card-footer {
          padding-top: 16px;
          border-top: 1px solid var(--color-border-light);
        }
        .pairing-catalogue-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: var(--weight-semibold);
          color: var(--color-primary);
          text-decoration: none;
          padding: 8px 0;
          border-radius: var(--radius-sm);
          transition: gap 0.2s, color 0.2s;
        }
        .pairing-catalogue-link:hover {
          color: var(--color-cta);
          gap: 12px;
        }

        /* 7. WHATSAPP CTA SECTION */
        .lookbook-cta-section {
          padding: 80px 0;
          background-color: var(--color-background);
        }
        .lookbook-cta-card {
          background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-soft) 100%);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          padding: 60px 40px;
          text-align: center;
          max-width: 840px;
          margin: 0 auto;
        }
        .lookbook-cta-heading {
          font-family: var(--font-heading);
          font-size: 40px;
          color: var(--color-primary);
          margin: 12px 0 16px;
        }
        .lookbook-cta-desc {
          font-size: 18px;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }
        .lookbook-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .boutique-location-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--color-text-secondary);
          background-color: var(--color-surface-alt);
          padding: 8px 18px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-light);
        }

        /* MODAL STYLING */
        .modal-look-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .modal-look-img-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          max-height: 360px;
          background-color: var(--color-surface-soft);
          display: flex;
          justify-content: center;
        }
        .modal-look-img {
          width: 100%;
          height: 100%;
          max-height: 360px;
          object-fit: contain;
          object-position: center top;
        }
        .modal-look-desc {
          font-size: 15px;
          color: var(--color-text-primary);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .modal-pieces-section {
          background-color: var(--color-surface-soft);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 16px;
        }
        .modal-pieces-title {
          font-size: 13px;
          color: var(--color-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .modal-pieces-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-piece-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }
        .piece-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-accent);
          flex-shrink: 0;
        }
        .piece-sub {
          font-size: 12px;
          color: var(--color-text-secondary);
        }
        .modal-styling-tip {
          background-color: rgba(201, 162, 39, 0.1);
          border-left: 3px solid var(--color-accent);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--color-text-primary);
          margin-bottom: 20px;
        }
        .modal-footer-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-whatsapp-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: var(--color-whatsapp);
          color: #FFFFFF;
          font-weight: var(--weight-bold);
          font-size: 15px;
          padding: 14px;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .modal-whatsapp-cta:hover {
          background-color: var(--color-whatsapp-hover);
        }
        .modal-catalogue-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: var(--weight-semibold);
          color: var(--color-primary);
          text-decoration: none;
          padding: 8px;
        }
        .modal-catalogue-cta:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .lookbook-hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .lookbook-hero-subtitle {
            margin: 0 auto 28px;
          }
          .lookbook-hero-actions {
            justify-content: center;
          }
          .hero-image-wrapper {
            max-width: 480px;
            margin: 0 auto;
          }
          .editorial-look-card {
            grid-template-columns: 1fr;
            padding: 32px 24px;
            gap: 32px;
          }
          .editorial-look-card.layout-reverse {
            grid-template-columns: 1fr;
          }
          .editorial-look-card.layout-reverse .look-image-col {
            order: 0;
          }
          .editorial-look-card.layout-reverse .look-details-col {
            order: 1;
          }
          .brand-banner-card {
            grid-template-columns: 1fr;
          }
          .brand-banner-content {
            padding: 0 32px 36px;
          }
          .pairings-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .lookbook-hero {
            padding: 44px 0 52px;
          }
          .lookbook-hero-title {
            font-size: 36px;
          }
          .editorial-statement-quote {
            font-size: 20px;
          }
          .look-title {
            font-size: 26px;
          }
          .pairings-grid {
            grid-template-columns: 1fr;
          }
          .filter-tabs-wrapper {
            justify-content: flex-start;
            overflow-x: auto;
            white-space: nowrap;
            padding: 4px;
            max-width: 100%;
          }
          .lookbook-cta-card {
            padding: 40px 20px;
          }
          .lookbook-cta-heading {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}
