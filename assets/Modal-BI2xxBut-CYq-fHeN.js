import{R as c,r as e,e as p}from"./index-Dor_5Dac.js";function u({isOpen:t,onClose:o,title:a,subtitle:l,children:i,maxWidth:d="640px",showClose:n=!0}){return c.useEffect(()=>{const r=s=>{s.key==="Escape"&&(o==null||o())};return t?(document.body.style.overflow="hidden",window.addEventListener("keydown",r)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",r)}},[t,o]),t?e.jsxs("div",{className:"modal-backdrop",onClick:r=>{r.target===r.currentTarget&&(o==null||o())},role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",style:{position:"fixed",inset:0,backgroundColor:"rgba(36, 20, 16, 0.65)",backdropFilter:"blur(4px)",zIndex:9e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",animation:"fadeIn 0.2s ease-out"},children:[e.jsxs("div",{className:"modal-surface",style:{backgroundColor:"var(--color-surface)",borderRadius:"var(--radius-xl)",width:"100%",maxWidth:d,maxHeight:"calc(100vh - 32px)",overflowY:"auto",boxShadow:"var(--shadow-lg)",position:"relative",display:"flex",flexDirection:"column",animation:"slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e.jsx("div",{className:"mobile-drag-handle",style:{display:"none",justifyContent:"center",padding:"10px 0 4px"},children:e.jsx("div",{style:{width:"40px",height:"5px",backgroundColor:"var(--color-border)",borderRadius:"3px"}})}),(a||n)&&e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"24px 28px 16px",borderBottom:"1px solid var(--color-border-light)"},children:[e.jsxs("div",{children:[a&&e.jsx("h3",{id:"modal-title",style:{fontSize:"var(--text-h3)",color:"var(--color-primary)",margin:0},children:a}),l&&e.jsx("p",{style:{fontSize:"var(--text-body-sm)",color:"var(--color-text-secondary)",marginTop:"4px"},children:l})]}),n&&e.jsx("button",{type:"button",onClick:o,"aria-label":"Close modal",style:{background:"none",border:"none",cursor:"pointer",color:"var(--color-text-secondary)",padding:"8px",borderRadius:"var(--radius-pill)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background-color 0.15s, color 0.15s"},onMouseEnter:r=>{r.currentTarget.style.backgroundColor="var(--color-surface-alt)",r.currentTarget.style.color="var(--color-primary)"},onMouseLeave:r=>{r.currentTarget.style.backgroundColor="transparent",r.currentTarget.style.color="var(--color-text-secondary)"},children:e.jsx(p,{size:20})})]}),e.jsx("div",{style:{padding:"24px 28px"},children:i})]}),e.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        
        @media (max-width: 768px) {
          .modal-backdrop {
            padding: 0;
            align-items: flex-end;
          }
          .modal-surface {
            max-width: 100% !important;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            max-height: 92vh;
          }
          .mobile-drag-handle {
            display: flex !important;
          }
        }
      `})]}):null}export{u as y};
