import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatButton } from './components/layout/WhatsAppFloatButton';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { Skeleton } from './components/ui/Skeleton';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Catalogue = lazy(() => import('./pages/Catalogue').then(m => ({ default: m.Catalogue })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(m => ({ default: m.ProductDetail })));
const Lookbook = lazy(() => import('./pages/Lookbook').then(m => ({ default: m.Lookbook })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin').then(m => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const ProductForm = lazy(() => import('./pages/admin/ProductForm').then(m => ({ default: m.ProductForm })));

function PageLoader() {
  return (
    <div style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <Skeleton height="36px" width="60%" style={{ margin: '0 auto 20px' }} />
      <Skeleton height="18px" width="80%" style={{ margin: '0 auto 30px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <Skeleton height="200px" />
        <Skeleton height="200px" />
        <Skeleton height="200px" />
      </div>
    </div>
  );
}

export function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Viewport with Suspense Code-Splitting */}
      <main id="main-content" style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:slug" element={<ProductDetail />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/dashboard/new" element={<ProductForm />} />
              <Route path="/admin/dashboard/:id" element={<ProductForm />} />
            </Route>

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      {!isAdminRoute && <WhatsAppFloatButton />}
    </div>
  );
}

export default App;
