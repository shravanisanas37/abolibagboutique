import{j as h,Z as g,r,H as u,C as s,l as f}from"./index-Dor_5Dac.js";import{b as m,s as a,d as l}from"./formatPrice-DpQjGCCB-C6HkKYgF.js";function y({product:o}){var e;if(!o)return null;const t=o.availability==="out_of_stock",n=o.availability==="sold",i=m(o.price,o.original_price),d=((e=o.images)==null?void 0:e[0])||"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",c=h(o),p=g(c);return r.jsxs("article",{className:"boutique-product-card",style:{backgroundColor:"var(--color-surface)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-border-light)",boxShadow:"var(--shadow-sm)",overflow:"hidden",display:"flex",flexDirection:"column",position:"relative",transition:"transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",paddingTop:"125%",backgroundColor:"var(--color-surface-alt)",overflow:"hidden"},children:[r.jsx("img",{src:d,alt:o.name,loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:t?.7:1,transition:"transform 0.5s ease"},className:"product-card-img"}),r.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:2,display:"flex",flexDirection:"column",gap:"4px"},children:[o.badge&&o.badge!=="none"&&r.jsx(a,{variant:o.badge}),i&&r.jsxs(a,{variant:"sale",children:[i,"% OFF"]})]}),t&&r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:2},children:r.jsx(a,{variant:"out_of_stock",children:"Out of Stock"})}),n&&r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:2},children:r.jsx(a,{variant:"out_of_stock",children:"Sold"})}),r.jsxs("div",{className:"card-hover-actions",style:{position:"absolute",bottom:"12px",left:"12px",right:"12px",display:"flex",gap:"8px",zIndex:3,transition:"opacity 0.2s, transform 0.2s"},children:[r.jsxs("a",{href:p,target:"_blank",rel:"noopener noreferrer",onClick:x=>x.stopPropagation(),"aria-label":`Order ${o.name} for delivery on WhatsApp`,style:{flex:1,backgroundColor:"var(--color-whatsapp)",color:"#FFFFFF",height:"38px",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:"13px",fontWeight:"var(--weight-semibold)",textDecoration:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:[r.jsx(u,{size:16}),r.jsx("span",{children:t?"Notify on WhatsApp":"Order via WhatsApp"})]}),r.jsx(s,{to:`/catalogue/${o.slug||o.id}`,"aria-label":`View details for ${o.name}`,style:{width:"38px",height:"38px",backgroundColor:"#FFFFFF",color:"var(--color-primary)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",textDecoration:"none"},children:r.jsx(f,{size:18})})]})]}),r.jsxs(s,{to:`/catalogue/${o.slug||o.id}`,style:{padding:"16px 14px 18px",display:"flex",flexDirection:"column",flex:1,textDecoration:"none"},children:[r.jsx("span",{style:{fontSize:"11px",fontWeight:"var(--weight-semibold)",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--color-accent)",marginBottom:"4px"},children:o.subcategory||(o.main_category==="bags_boutique"?"Bag Boutique":"Designer Jewellery")}),r.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"17px",fontWeight:"var(--weight-bold)",color:"var(--color-primary)",lineHeight:1.3,marginBottom:"8px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.name}),r.jsxs("div",{style:{marginTop:"auto",display:"flex",alignItems:"baseline",gap:"8px"},children:[r.jsx("span",{style:{fontSize:"18px",fontWeight:"var(--weight-bold)",color:"var(--color-text-primary)"},children:l(o.price)}),o.original_price&&Number(o.original_price)>Number(o.price)&&r.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-secondary)",textDecoration:"line-through"},children:l(o.original_price)})]})]}),r.jsx("style",{children:`
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
      `})]})}export{y as w};
