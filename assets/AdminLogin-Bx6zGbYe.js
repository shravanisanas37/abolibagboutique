import{e as w,c as y,j as a,B as j}from"./index-DUrZHfaB.js";import{i as N,r as o,R as k,L as m}from"./vendor-CbJgijs6.js";import{S}from"./SEO-DRDfWRwO.js";import{y as A,E as z,w as E}from"./icons-CnpPi5h8.js";import"./supabase-BnGCNdwk.js";function D(){const i=N(),{login:p,isAuthenticated:l}=w(),{addToast:x}=y(),[t,g]=o.useState(""),[s,u]=o.useState(""),[e,b]=o.useState(!1),[d,n]=o.useState(""),[h,c]=o.useState(!1);k.useEffect(()=>{l&&i("/admin/dashboard",{replace:!0})},[l,i]);const f=async r=>{if(r.preventDefault(),n(""),!t.trim()||!s){n("Please enter both your admin email and password.");return}c(!0);try{await p(t,s),x("Welcome back to the Admin Dashboard!","success"),i("/admin/dashboard")}catch(v){n(v.message||"Incorrect email or password. Access denied.")}finally{c(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx(S,{title:"Admin Portal | Aboli Bag Boutique",description:"Secure administrative portal for catalogue management at Aboli Bag Boutique."}),a.jsx("div",{className:"admin-login-wrapper",children:a.jsxs("div",{className:"admin-login-card",children:[a.jsx("div",{className:"admin-logo-frame",children:a.jsx(m,{to:"/","aria-label":"Go to Storefront",style:{display:"inline-block"},children:a.jsx("img",{src:"/logo.jpg",alt:"Aboli Boutique Logo",className:"admin-logo-img"})})}),a.jsxs("div",{className:"admin-login-header",children:[a.jsx("span",{className:"admin-eyebrow",children:"SECURE ADMIN PORTAL"}),a.jsx("h1",{className:"admin-title",children:"Catalogue Login"}),a.jsx("p",{className:"admin-subtitle",children:"Sign in with your boutique credentials to manage inventory, products, and prices in real time."})]}),d&&a.jsx("div",{role:"alert",className:"admin-error-box",children:d}),a.jsxs("form",{onSubmit:f,className:"admin-form",children:[a.jsxs("div",{className:"admin-field-group",children:[a.jsxs("label",{htmlFor:"admin-email",className:"admin-label",children:["EMAIL ADDRESS ",a.jsx("span",{className:"req-star",children:"*"})]}),a.jsx("div",{className:"admin-input-wrapper",children:a.jsx("input",{id:"admin-email",type:"email",required:!0,autoComplete:"email",placeholder:"Enter your admin email",value:t,onChange:r=>g(r.target.value),className:"admin-input"})})]}),a.jsxs("div",{className:"admin-field-group",children:[a.jsxs("label",{htmlFor:"admin-password",className:"admin-label",children:["PASSWORD ",a.jsx("span",{className:"req-star",children:"*"})]}),a.jsxs("div",{className:"admin-input-wrapper",children:[a.jsx("input",{id:"admin-password",type:e?"text":"password",required:!0,autoComplete:"current-password",placeholder:"Enter your password",value:s,onChange:r=>u(r.target.value),className:"admin-input password-input"}),a.jsx("button",{type:"button",onClick:()=>b(!e),"aria-label":e?"Hide password":"Show password",className:"password-toggle-btn",children:e?a.jsx(A,{size:18}):a.jsx(z,{size:18})})]})]}),a.jsx(j,{type:"submit",variant:"cta",size:"lg",loading:h,style:{width:"100%",marginTop:"8px",height:"48px",fontSize:"15px"},children:"Access Dashboard"})]}),a.jsx("div",{className:"admin-footer-link",children:a.jsxs(m,{to:"/",className:"storefront-back-btn",children:[a.jsx(E,{size:15}),a.jsx("span",{children:"Back to Storefront"})]})})]})}),a.jsx("style",{children:`
        .admin-login-wrapper {
          min-height: calc(100vh - 160px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
          background-color: var(--color-background);
        }
        .admin-login-card {
          width: 100%;
          max-width: 440px;
          background-color: var(--color-surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: 0 12px 36px rgba(43, 27, 20, 0.08);
          padding: 44px 36px 36px;
          text-align: center;
          box-sizing: border-box;
        }
        .admin-logo-frame {
          margin-bottom: 16px;
        }
        .admin-logo-img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto;
          border: 1.5px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease;
        }
        .admin-logo-img:hover {
          transform: scale(1.04);
        }
        .admin-login-header {
          margin-bottom: 24px;
        }
        .admin-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: var(--weight-bold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 6px;
        }
        .admin-title {
          font-family: var(--font-heading);
          font-size: 30px;
          color: var(--color-primary);
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .admin-subtitle {
          font-size: 13.5px;
          color: var(--color-text-secondary);
          line-height: 1.5;
          max-width: 340px;
          margin: 0 auto;
        }
        .admin-error-box {
          background-color: rgba(179, 38, 30, 0.08);
          border: 1px solid rgba(179, 38, 30, 0.3);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--color-error);
          font-size: 13.5px;
          margin-bottom: 20px;
          text-align: left;
          line-height: 1.4;
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          text-align: left;
        }
        .admin-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .admin-label {
          font-size: 11px;
          font-weight: var(--weight-semibold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        .req-star {
          color: var(--color-error);
        }
        .admin-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .admin-input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          background-color: var(--color-surface-soft);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-text-primary);
          font-size: 14.5px;
          font-family: var(--font-body);
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .admin-input.password-input {
          padding-right: 46px;
        }
        .admin-input:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(122, 31, 58, 0.12) !important;
          background-color: #FFFFFF !important;
        }
        .password-toggle-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-secondary);
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: color 0.15s, background-color 0.15s;
        }
        .password-toggle-btn:hover {
          color: var(--color-primary);
          background-color: rgba(122, 31, 58, 0.08);
        }
        .admin-footer-link {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border-light);
        }
        .storefront-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: var(--weight-medium);
          transition: color 0.15s, gap 0.15s;
        }
        .storefront-back-btn:hover {
          color: var(--color-cta);
          gap: 8px;
        }

        @media (max-width: 480px) {
          .admin-login-card {
            padding: 32px 20px 24px;
          }
          .admin-title {
            font-size: 26px;
          }
        }
      `})]})}export{D as AdminLogin};
