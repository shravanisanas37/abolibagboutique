import{b as h,g,j as o}from"./index-DvJmTolR.js";import{L as s}from"./vendor-CbJgijs6.js";import{c as m,B as a,f as n}from"./formatPrice-auRRzBIf.js";import{M as f,E as b}from"./icons-CnpPi5h8.js";function w({product:e}){var t;if(!e)return null;const r=e.availability==="out_of_stock",l=e.availability==="sold",i=m(e.price,e.original_price),c=((t=e.images)==null?void 0:t[0])||"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",d=h(e),p=g(d);return o.jsxs("article",{className:"boutique-product-card",style:{backgroundColor:"var(--color-surface)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-border-light)",boxShadow:"var(--shadow-sm)",overflow:"hidden",display:"flex",flexDirection:"column",position:"relative",transition:"transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"},children:[o.jsxs("div",{style:{position:"relative",width:"100%",paddingTop:"125%",backgroundColor:"var(--color-surface-alt)",overflow:"hidden"},children:[o.jsx("img",{src:c,alt:e.name,loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:r?.7:1,transition:"transform 0.5s ease"},className:"product-card-img"}),o.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:2,display:"flex",flexDirection:"column",gap:"4px"},children:[e.badge&&e.badge!=="none"&&o.jsx(a,{variant:e.badge}),i&&o.jsxs(a,{variant:"sale",children:[i,"% OFF"]})]}),r&&o.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:2},children:o.jsx(a,{variant:"out_of_stock",children:"Out of Stock"})}),l&&o.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:2},children:o.jsx(a,{variant:"out_of_stock",children:"Sold"})}),o.jsxs("div",{className:"card-hover-actions",style:{position:"absolute",bottom:"12px",left:"12px",right:"12px",display:"flex",gap:"8px",zIndex:3,transition:"opacity 0.2s, transform 0.2s"},children:[o.jsxs("a",{href:p,target:"_blank",rel:"noopener noreferrer",onClick:x=>x.stopPropagation(),"aria-label":`Order ${e.name} for delivery on WhatsApp`,style:{flex:1,backgroundColor:"var(--color-whatsapp)",color:"#FFFFFF",height:"38px",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:"13px",fontWeight:"var(--weight-semibold)",textDecoration:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:[o.jsx(f,{size:16}),o.jsx("span",{children:r?"Notify on WhatsApp":"Order via WhatsApp"})]}),o.jsx(s,{to:`/catalogue/${e.slug||e.id}`,"aria-label":`View details for ${e.name}`,style:{width:"38px",height:"38px",backgroundColor:"#FFFFFF",color:"var(--color-primary)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",textDecoration:"none"},children:o.jsx(b,{size:18})})]})]}),o.jsxs(s,{to:`/catalogue/${e.slug||e.id}`,style:{padding:"16px 14px 18px",display:"flex",flexDirection:"column",flex:1,textDecoration:"none"},children:[o.jsx("span",{style:{fontSize:"11px",fontWeight:"var(--weight-semibold)",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--color-accent)",marginBottom:"4px"},children:e.subcategory||(e.main_category==="bags_boutique"?"Bag Boutique":"Designer Jewellery")}),o.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"17px",fontWeight:"var(--weight-bold)",color:"var(--color-primary)",lineHeight:1.3,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.name}),o.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"baseline",gap:"8px"},children:[o.jsx("span",{style:{fontSize:"18px",fontWeight:"var(--weight-bold)",color:"var(--color-text-primary)"},children:n(e.price)}),e.original_price&&Number(e.original_price)>Number(e.price)&&o.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-secondary)",textDecoration:"line-through"},children:n(e.original_price)})]})]}),o.jsx("style",{children:`
        .boutique-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-border);
        }
        .boutique-product-card:hover .product-card-img {
          transform: scale(1.05);
        }
        @media (min-width: 769px) {
          .card-hover-actions {
            opacity: 0;
            transform: translateY(8px);
          }
          .boutique-product-card:hover .card-hover-actions {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .card-hover-actions {
            opacity: 1;
            transform: none;
          }
        }
      `})]})}export{w as P};
