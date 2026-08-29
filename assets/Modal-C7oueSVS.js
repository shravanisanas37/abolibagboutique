import{j as r}from"./index-DXa2hVKm.js";import{r as c}from"./vendor-CbJgijs6.js";import{X as p}from"./icons-CnpPi5h8.js";function y({isOpen:t,onClose:a,title:o,subtitle:d,children:l,maxWidth:n="640px",showClose:i=!0}){return c.useEffect(()=>{const e=s=>{s.key==="Escape"&&(a==null||a())};return t?(document.body.style.overflow="hidden",window.addEventListener("keydown",e)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}},[t,a]),t?r.jsxs("div",{className:"modal-backdrop",onClick:e=>{e.target===e.currentTarget&&(a==null||a())},role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",style:{position:"fixed",inset:0,backgroundColor:"rgba(36, 20, 16, 0.65)",backdropFilter:"blur(4px)",zIndex:9e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",animation:"fadeIn 0.2s ease-out"},children:[r.jsxs("div",{className:"modal-surface",style:{backgroundColor:"var(--color-surface)",borderRadius:"var(--radius-xl)",width:"100%",maxWidth:n,maxHeight:"calc(100vh - 32px)",overflowY:"auto",boxShadow:"var(--shadow-lg)",position:"relative",display:"flex",flexDirection:"column",animation:"slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)"},children:[r.jsx("div",{className:"mobile-drag-handle",style:{display:"none",justifyContent:"center",padding:"10px 0 4px"},children:r.jsx("div",{style:{width:"40px",height:"5px",backgroundColor:"var(--color-border)",borderRadius:"3px"}})}),(o||i)&&r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"24px 28px 16px",borderBottom:"1px solid var(--color-border-light)"},children:[r.jsxs("div",{children:[o&&r.jsx("h3",{id:"modal-title",style:{fontSize:"var(--text-h3)",color:"var(--color-primary)",margin:0},children:o}),d&&r.jsx("p",{style:{fontSize:"var(--text-body-sm)",color:"var(--color-text-secondary)",marginTop:"4px"},children:d})]}),i&&r.jsx("button",{type:"button",onClick:a,"aria-label":"Close modal",style:{background:"none",border:"none",cursor:"pointer",color:"var(--color-text-secondary)",padding:"8px",borderRadius:"var(--radius-pill)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background-color 0.15s, color 0.15s"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="var(--color-surface-alt)",e.currentTarget.style.color="var(--color-primary)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent",e.currentTarget.style.color="var(--color-text-secondary)"},children:r.jsx(p,{size:20})})]}),r.jsx("div",{style:{padding:"24px 28px"},children:l})]}),r.jsx("style",{children:`
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
      `})]}):null}export{y as M};
