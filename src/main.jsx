import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import App from './App';
import './styles/global.css';

// Handle GitHub Pages SPA redirect path if present (from 404.html)
(function handleSpaRedirect() {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastProvider>
          <AuthProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </AuthProvider>
        </ToastProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
