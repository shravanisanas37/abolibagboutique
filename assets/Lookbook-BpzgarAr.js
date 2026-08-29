import{u as $,j as e,g as c,B as h,a as d}from"./index-DvJmTolR.js";import{r as p,L as b}from"./vendor-CbJgijs6.js";import{M as K}from"./Modal-B2pHoWmg.js";import{S as V}from"./SEO-C-dQ7Ygf.js";import{l as Z,n as Q,M as g,t as X,E as ee,A as H,e as oe,c as ae}from"./icons-CnpPi5h8.js";import"./supabase-BnGCNdwk.js";const G=[{id:"look-01",lookNumber:"01",occasion:"wedding",occasionLabel:"Wedding Edit",title:"The Bridal Edit",tagline:"Timeless Opulence for the Regal Bride",description:"Statement potlis paired with timeless traditional jewellery for unforgettable wedding moments. Multi-layered ruby and gold coin haar, temple choker, and traditional jhumkas crafted for auspicious celebrations.",coverImage:"/images/lookbook/lookbook-bridal.jpg",altText:"Aboli boutique bridal styling in cream and gold saree with burgundy blouse and layered ruby gold jewellery",featuredProducts:[{name:"Layered Ruby & Coin Temple Haar",category:"Designer Jewellery",subcategory:"Necklace",tag:"Traditional 22k Finish"},{name:"Embroidered Velvet Bridal Potli",category:"Bags Boutique",subcategory:"Potli",tag:"Handcrafted Zari"},{name:"Heritage Ruby Jhumka Earrings",category:"Designer Jewellery",subcategory:"Earrings",tag:"Matching Pair"}],stylingNote:"Complements rich crimson, marigold, and gold Banarasi silk sarees for wedding rituals.",catalogueFilter:"designer_jewellery"},{id:"look-02",lookNumber:"02",occasion:"traditional",occasionLabel:"Timeless Classic",title:"Timeless Elegance",tagline:"Pure Heritage in Multi-Strand Gold Craft",description:"A tribute to classical Indian grace. Long multi-strand gold bead haar paired with delicate matching jhumkas, radiating quiet luxury and timeless sophistication for auspicious occasions.",coverImage:"/images/lookbook/lookbook-timeless.jpg",altText:"Woman in cream silk saree wearing traditional long multi-strand gold necklace and jhumkas",featuredProducts:[{name:"Five-Strand Traditional Gold Haar",category:"Designer Jewellery",subcategory:"Necklace",tag:"Heritage Beaded"},{name:"Classic Gold Filigree Jhumkas",category:"Designer Jewellery",subcategory:"Earrings",tag:"Lightweight"},{name:"Ivory Zari Silk Envelope Clutch",category:"Bags Boutique",subcategory:"Clutch",tag:"Satin Lined"}],stylingNote:"Ideal for housewarmings, morning pujas, and traditional family milestone celebrations.",catalogueFilter:"designer_jewellery"},{id:"look-03",lookNumber:"03",occasion:"festive",occasionLabel:"Festive & Heritage",title:"Festive Glamour",tagline:"Maharashtrian Royal Temple Splendour",description:"Rich colours, intricate temple motifs, and green-beaded jewellery that brings every celebration to life. Features an elaborate Goddess Lakshmi pendant, green-bead strands, and traditional kamarbandh styling.",coverImage:"/images/lookbook/lookbook-festive.jpg",altText:"Traditional Maharashtrian festive look with gold temple necklace, green beaded haar, maang tikka and jhumkas",featuredProducts:[{name:"Goddess Lakshmi Temple Pendant Haar",category:"Designer Jewellery",subcategory:"Necklace",tag:"Green Bead Strands"},{name:"Kundan Floral Choker & Maang Tikka",category:"Designer Jewellery",subcategory:"Bridal Set",tag:"Complete Set"},{name:"Silk Tassel Festive Batwa Pouch",category:"Bags Boutique",subcategory:"Batwa",tag:"Festive Weave"}],stylingNote:"Pairs magnificently with Paithani sarees, Nauvari drapes, and festive silk attire.",catalogueFilter:"designer_jewellery"},{id:"look-04",lookNumber:"04",occasion:"contemporary",occasionLabel:"Contemporary Tradition",title:"Contemporary Tradition",tagline:"Royal Emerald & Pearl Symphony",description:"Make an entrance with contemporary statement jewellery designed to shine. Rich emerald green accents, black-bead strands, and diamond-finish drop motifs paired with opulent evening drapes.",coverImage:"/images/lookbook/lookbook-contemporary.jpg",altText:"Woman in royal dark green saree with emerald and pearl statement long necklace and matching chandelier earrings",featuredProducts:[{name:"Emerald & Pearl Long Statement Haar",category:"Designer Jewellery",subcategory:"Necklace",tag:"Royal Motif"},{name:"Emerald Cluster Chandelier Earrings",category:"Designer Jewellery",subcategory:"Earrings",tag:"High Sparkle"},{name:"Gold-Trim Silk Evening Box Clutch",category:"Bags Boutique",subcategory:"Box Clutch",tag:"Detachable Chain"}],stylingNote:"Stunning with deep bottle green, midnight blue, or champagne gold reception sarees and lehengas.",catalogueFilter:"designer_jewellery"}],re=[{key:"all",label:"All Looks"},{key:"wedding",label:"Wedding"},{key:"traditional",label:"Traditional"},{key:"festive",label:"Festive"},{key:"contemporary",label:"Contemporary"}];function de(){const{products:m}=$(),[s,W]=p.useState("all"),[r,x]=p.useState(null),_=p.useMemo(()=>s==="all"?G:G.filter(o=>o.occasion===s),[s]),Y=p.useMemo(()=>{var i,t,n,u,k,f,v,y,w,j,N,S,E,z,B,T,F,C,L,I,A,P,R,O,D,M,q,J;const o=m.filter(l=>l.main_category==="bags_boutique"&&l.availability!=="sold"),a=m.filter(l=>l.main_category==="designer_jewellery"&&l.availability!=="sold");return[{id:"pair-1",title:"The Regal Bridal Pairing",subtitle:"Potli + Temple Necklace + Jhumkas",tag:"Bridal & Sangeet",items:[{type:"Bag",name:((i=o[0])==null?void 0:i.name)||"Zari Embroidered Potli Bag",category:"Bags Boutique",image:((n=(t=o[0])==null?void 0:t.images)==null?void 0:n[0])||"/images/lookbook/lookbook-bridal.jpg",slug:((u=o[0])==null?void 0:u.slug)||""},{type:"Necklace",name:((k=a[0])==null?void 0:k.name)||"Layered Ruby & Gold Coin Haar",category:"Designer Jewellery",image:((v=(f=a[0])==null?void 0:f.images)==null?void 0:v[0])||"/images/lookbook/lookbook-timeless.jpg",slug:((y=a[0])==null?void 0:y.slug)||""},{type:"Earrings",name:((w=a[1])==null?void 0:w.name)||"Heritage Bell Jhumkas",category:"Designer Jewellery",image:((N=(j=a[1])==null?void 0:j.images)==null?void 0:N[0])||"/images/lookbook/lookbook-festive.jpg",slug:((S=a[1])==null?void 0:S.slug)||""}]},{id:"pair-2",title:"The Festive Maharashtrian Duo",subtitle:"Silk Batwa + Temple Gold Choker",tag:"Festivals & Puja",items:[{type:"Bag",name:((E=o[1])==null?void 0:E.name)||"Silk Tassel Batwa Pouch",category:"Bags Boutique",image:((B=(z=o[1])==null?void 0:z.images)==null?void 0:B[0])||"/images/lookbook/lookbook-festive.jpg",slug:((T=o[1])==null?void 0:T.slug)||""},{type:"Jewellery",name:((F=a[2])==null?void 0:F.name)||"Goddess Lakshmi Temple Set",category:"Designer Jewellery",image:((L=(C=a[2])==null?void 0:C.images)==null?void 0:L[0])||"/images/lookbook/lookbook-contemporary.jpg",slug:((I=a[2])==null?void 0:I.slug)||""}]},{id:"pair-3",title:"The Royal Emerald Reception Set",subtitle:"Box Clutch + Emerald Chandelier Earrings",tag:"Reception & Evening",items:[{type:"Clutch",name:((A=o[2])==null?void 0:A.name)||"Gold-Trim Evening Box Clutch",category:"Bags Boutique",image:((R=(P=o[2])==null?void 0:P.images)==null?void 0:R[0])||"/images/lookbook/lookbook-contemporary.jpg",slug:((O=o[2])==null?void 0:O.slug)||""},{type:"Jewellery",name:((D=a[3])==null?void 0:D.name)||"Emerald & Pearl Long Statement Haar",category:"Designer Jewellery",image:((q=(M=a[3])==null?void 0:M.images)==null?void 0:q[0])||"/images/lookbook/lookbook-bridal.jpg",slug:((J=a[3])==null?void 0:J.slug)||""}]}]},[m]),U=()=>{const o=document.getElementById("editorial-gallery");o&&o.scrollIntoView({behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(V,{title:"Editorial Lookbook | Styled Bags & Jewellery | Aboli Satara",description:"Discover authentic Indian boutique jewellery and bag stylings by Aboli Bag Boutique & Jewellery, Satara. Featuring traditional bridal, Maharashtrian temple, and festive collections."}),e.jsxs("div",{className:"lookbook-page-root",children:[e.jsx("section",{className:"lookbook-hero",children:e.jsxs("div",{className:"container lookbook-hero-container",children:[e.jsxs("div",{className:"lookbook-hero-content",children:[e.jsxs("div",{className:"hero-badge-pill",children:[e.jsx(Z,{size:14,className:"gold-icon"}),e.jsx("span",{children:"STYLED BY ABOLI"})]}),e.jsx("h1",{className:"lookbook-hero-title",children:"The Aboli Lookbook"}),e.jsx("p",{className:"lookbook-hero-subtitle",children:"Curated bags & jewellery styled for weddings, festivities, celebrations and everyday elegance."}),e.jsxs("div",{className:"lookbook-hero-actions",children:[e.jsxs("button",{type:"button",onClick:U,className:"editorial-scroll-btn","aria-label":"Scroll to curated looks",children:[e.jsx("span",{children:"Explore Looks"}),e.jsx(Q,{size:18,className:"scroll-chevron-anim"})]}),e.jsxs("a",{href:c(d("Lookbook Styling Consultation")),target:"_blank",rel:"noopener noreferrer",className:"hero-whatsapp-link",children:[e.jsx(g,{size:18,color:"var(--color-whatsapp)"}),e.jsx("span",{children:"Style on WhatsApp"})]})]})]}),e.jsx("div",{className:"lookbook-hero-visual-frame",children:e.jsxs("div",{className:"hero-image-wrapper",children:[e.jsx("img",{src:"/images/lookbook/lookbook-timeless.jpg",alt:"Timeless Elegance — Aboli boutique gold jewellery and saree styling",className:"hero-lifestyle-img"}),e.jsx("div",{className:"hero-image-caption-pill",children:e.jsx("span",{children:"Satara Boutique Styling"})})]})})]})}),e.jsx("section",{className:"lookbook-intro-section",children:e.jsxs("div",{className:"container-narrow text-center",children:[e.jsx("div",{className:"gold-ornament-line",children:e.jsx("span",{className:"ornament-diamond"})}),e.jsx("p",{className:"editorial-statement-quote",children:"“Discover the art of pairing statement bags with timeless jewellery. Each Aboli look is thoughtfully curated to complement your occasion, your outfit and your personal style.”"}),e.jsx("span",{className:"editorial-signature",children:"— ABOLI BOUTIQUE STYLING EDIT"})]})}),e.jsx("section",{id:"editorial-gallery",className:"lookbook-filter-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"filter-tabs-wrapper",role:"tablist","aria-label":"Filter looks by occasion",children:re.map(o=>{const a=s===o.key;return e.jsx("button",{type:"button",role:"tab","aria-selected":a,className:`filter-tab-pill ${a?"active":""}`,onClick:()=>W(o.key),children:o.label},o.key)})})})}),e.jsx("section",{className:"featured-looks-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"editorial-looks-list",children:_.map((o,a)=>{const i=a%2===1;return e.jsxs("article",{className:`editorial-look-card ${i?"layout-reverse":""}`,"data-occasion":o.occasion,children:[e.jsx("div",{className:"look-image-col",children:e.jsxs("div",{className:"look-image-canvas",children:[e.jsx("img",{src:o.coverImage,alt:o.altText,loading:"lazy",className:"look-media"}),e.jsx("div",{className:"look-number-badge",children:e.jsxs("span",{children:["LOOK ",o.lookNumber]})}),e.jsx("div",{className:"look-occasion-pill",children:e.jsx("span",{children:o.occasionLabel})})]})}),e.jsxs("div",{className:"look-details-col",children:[e.jsxs("div",{className:"look-meta-header",children:[e.jsx("span",{className:"look-kicker",children:o.tagline}),e.jsx("h2",{className:"look-title",children:o.title})]}),e.jsx("p",{className:"look-description",children:o.description}),e.jsxs("div",{className:"look-products-box",children:[e.jsx("span",{className:"look-products-heading",children:"Pieces Featured in this Look:"}),e.jsx("ul",{className:"look-products-list",children:o.featuredProducts.map((t,n)=>e.jsxs("li",{className:"look-product-item",children:[e.jsx("span",{className:"bullet-check",children:e.jsx(X,{size:13,color:"var(--color-primary)"})}),e.jsxs("div",{className:"product-item-text",children:[e.jsx("strong",{className:"product-item-name",children:t.name}),e.jsxs("span",{className:"product-item-meta",children:["• ",t.category," (",t.tag,")"]})]})]},n))})]}),e.jsxs("div",{className:"look-styling-note",children:[e.jsx("em",{children:"Stylist Note:"})," ",o.stylingNote]}),e.jsxs("div",{className:"look-action-row",children:[e.jsx(h,{variant:"cta",size:"md",icon:ee,onClick:()=>x(o),ariaLabel:`Explore ${o.title}`,children:"Explore This Look"}),e.jsxs("a",{href:c(d(`Look ${o.lookNumber} (${o.title})`)),target:"_blank",rel:"noopener noreferrer",className:"look-whatsapp-quicklink","aria-label":`Inquire about ${o.title} on WhatsApp`,children:[e.jsx(g,{size:17,color:"var(--color-whatsapp)"}),e.jsx("span",{children:"Inquire on WhatsApp"})]})]})]})]},o.id)})})})}),e.jsx("section",{className:"brand-editorial-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"brand-banner-card",children:[e.jsx("div",{className:"brand-banner-visual",children:e.jsx("img",{src:"/images/lookbook/lookbook-contemporary.jpg",alt:"Aboli Bag Boutique & Jewellery signature collection in Satara",className:"brand-banner-full-img"})}),e.jsxs("div",{className:"brand-banner-content",children:[e.jsx("span",{className:"eyebrow",style:{color:"var(--color-accent)"},children:"AUTHENTIC BOUTIQUE CRAFTSMANSHIP"}),e.jsx("h3",{className:"brand-banner-heading",children:"Satara’s Destination for Handcrafted Luxury"}),e.jsx("p",{className:"brand-banner-desc",children:"Every potli, clutch, and jewellery piece at Aboli is personally curated to celebrate heritage Maharashtrian traditions and modern elegance without luxury markups."}),e.jsxs("div",{className:"brand-banner-footer-info",children:[e.jsxs("div",{className:"brand-info-item",children:[e.jsx("strong",{children:"Physical Store:"})," Moti Chowk, Satara"]}),e.jsxs("div",{className:"brand-info-item",children:[e.jsx("strong",{children:"Delivery:"})," Available across India on WhatsApp"]})]})]})]})})}),e.jsx("section",{className:"product-pairing-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header-editorial text-center",children:[e.jsx("span",{className:"eyebrow",children:"STYLING HARMONY"}),e.jsx("h2",{className:"pairing-section-title",children:"Complete the Look"}),e.jsx("p",{className:"pairing-section-desc",children:"Curated bag and jewellery pairings handcrafted to complement each other in texture, hue, and heritage appeal."})]}),e.jsx("div",{className:"pairings-grid",children:Y.map(o=>e.jsxs("div",{className:"pairing-card",children:[e.jsx("div",{className:"pairing-card-header",children:e.jsxs("div",{children:[e.jsx("span",{className:"pairing-tag",children:o.tag}),e.jsx("h3",{className:"pairing-card-title",children:o.title}),e.jsx("p",{className:"pairing-card-subtitle",children:o.subtitle})]})}),e.jsx("div",{className:"pairing-items-row",children:o.items.map((a,i)=>e.jsxs("div",{className:"pairing-item-col",children:[e.jsxs("div",{className:"pairing-item-image-wrapper",children:[e.jsx("img",{src:a.image,alt:a.name,loading:"lazy",className:"pairing-item-img"}),e.jsx("span",{className:"pairing-item-type-badge",children:a.type})]}),e.jsxs("div",{className:"pairing-item-info",children:[e.jsx("h4",{className:"pairing-item-name",children:a.name}),e.jsx("span",{className:"pairing-item-cat",children:a.category})]})]},i))}),e.jsx("div",{className:"pairing-card-footer",children:e.jsxs(b,{to:"/catalogue",className:"pairing-catalogue-link",children:[e.jsx("span",{children:"View in Catalogue"}),e.jsx(H,{size:15})]})})]},o.id))})]})}),e.jsx("section",{className:"lookbook-cta-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"lookbook-cta-card",children:e.jsxs("div",{className:"cta-content-wrapper",children:[e.jsx("span",{className:"eyebrow",style:{color:"var(--color-accent)"},children:"PERSONALIZED BOUTIQUE EXPERIENCE"}),e.jsx("h2",{className:"lookbook-cta-heading",children:"Found Your Look?"}),e.jsx("p",{className:"lookbook-cta-desc",children:"Visit our Satara store or message us on WhatsApp to check availability and reserve your favourites."}),e.jsxs("div",{className:"lookbook-cta-buttons",children:[e.jsx("a",{href:c(d("Lookbook Styling & Availability Check")),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.jsx(h,{variant:"whatsapp",size:"lg",icon:g,children:"Chat on WhatsApp"})}),e.jsx(b,{to:"/catalogue",style:{textDecoration:"none"},children:e.jsx(h,{variant:"secondary",size:"lg",icon:oe,children:"Explore Catalogue"})})]}),e.jsxs("div",{className:"boutique-location-pill",children:[e.jsx(ae,{size:15,color:"var(--color-accent)"}),e.jsx("span",{children:"Shop no 5&6, Laxmi Vishnu Nivas Bldg, Moti Chowk, Satara"})]})]})})})}),r&&e.jsx(K,{isOpen:!!r,onClose:()=>x(null),title:r.title,subtitle:r.tagline,maxWidth:"680px",children:e.jsxs("div",{className:"modal-look-content",children:[e.jsx("div",{className:"modal-look-img-frame",children:e.jsx("img",{src:r.coverImage,alt:r.altText,className:"modal-look-img"})}),e.jsxs("div",{className:"modal-look-body",children:[e.jsx("p",{className:"modal-look-desc",children:r.description}),e.jsxs("div",{className:"modal-pieces-section",children:[e.jsx("h4",{className:"modal-pieces-title",children:"Curated Ensemble Details"}),e.jsx("div",{className:"modal-pieces-grid",children:r.featuredProducts.map((o,a)=>e.jsxs("div",{className:"modal-piece-item",children:[e.jsx("div",{className:"piece-dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:o.name}),e.jsxs("div",{className:"piece-sub",children:[o.category," — ",o.subcategory," (",o.tag,")"]})]})]},a))})]}),e.jsxs("div",{className:"modal-styling-tip",children:[e.jsx("strong",{children:"Stylist Recommendation:"}),e.jsx("p",{children:r.stylingNote})]}),e.jsxs("div",{className:"modal-footer-actions",children:[e.jsxs("a",{href:c(d(`Look ${r.lookNumber}: ${r.title}`)),target:"_blank",rel:"noopener noreferrer",className:"modal-whatsapp-cta",children:[e.jsx(g,{size:18}),e.jsx("span",{children:"Inquire About This Ensemble on WhatsApp"})]}),e.jsxs(b,{to:`/catalogue?category=${r.catalogueFilter}`,onClick:()=>x(null),className:"modal-catalogue-cta",children:[e.jsx("span",{children:"Browse Matching Catalogue Items"}),e.jsx(H,{size:16})]})]})]})]})})]}),e.jsx("style",{children:`
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
      `})]})}export{de as Lookbook};
