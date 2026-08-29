import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/layout/SEO';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export function AdminLogin() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { addToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already authenticated, redirect to dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter both your admin email and password.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      addToast('Welcome back to the Admin Dashboard!', 'success');
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Incorrect email or password. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Admin Portal | Aboli Bag Boutique"
        description="Secure administrative portal for catalogue management at Aboli Bag Boutique."
      />

      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          {/* Brand Logo */}
          <div className="admin-logo-frame">
            <Link to="/" aria-label="Go to Storefront" style={{ display: 'inline-block' }}>
              <img 
                src="/logo.jpg" 
                alt="Aboli Boutique Logo" 
                className="admin-logo-img"
              />
            </Link>
          </div>

          {/* Header */}
          <div className="admin-login-header">
            <span className="admin-eyebrow">SECURE ADMIN PORTAL</span>
            <h1 className="admin-title">Catalogue Login</h1>
            <p className="admin-subtitle">
              Sign in with your boutique credentials to manage inventory, products, and prices in real time.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div role="alert" className="admin-error-box">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="admin-form">
            {/* Email Field */}
            <div className="admin-field-group">
              <label htmlFor="admin-email" className="admin-label">
                EMAIL ADDRESS <span className="req-star">*</span>
              </label>
              <div className="admin-input-wrapper">
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="admin-input"
                />
              </div>
            </div>

            {/* Password Field with Show/Hide Toggle */}
            <div className="admin-field-group">
              <label htmlFor="admin-password" className="admin-label">
                PASSWORD <span className="req-star">*</span>
              </label>
              <div className="admin-input-wrapper">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="admin-input password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="password-toggle-btn"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="cta"
              size="lg"
              loading={loading}
              style={{ width: '100%', marginTop: '8px', height: '48px', fontSize: '15px' }}
            >
              Access Dashboard
            </Button>
          </form>

          {/* Back to Storefront Link */}
          <div className="admin-footer-link">
            <Link to="/" className="storefront-back-btn">
              <ArrowLeft size={15} />
              <span>Back to Storefront</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </>
  );
}
