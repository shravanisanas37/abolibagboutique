import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, Star, Eye, LogOut, Package, CheckCircle2, AlertTriangle, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Modal } from '../../components/ui/Modal';
import { SEO } from '../../components/layout/SEO';
import { useAuth } from '../../context/AuthContext';
import { useProducts } from '../../context/ProductContext';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/formatPrice';

export function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { products, deleteProduct, toggleAvailability, toggleFeatured } = useProducts();
  const { addToast } = useToast();

  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Summary Metrics
  const stats = useMemo(() => {
    return {
      total: products.length,
      inStock: products.filter(p => p.availability === 'in_stock').length,
      outOfStock: products.filter(p => p.availability === 'out_of_stock').length,
      featured: products.filter(p => p.featured).length
    };
  }, [products]);

  // Filtered table products
  const displayProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(searchFilter.toLowerCase()));
      const matchCat = categoryFilter === 'all' || p.main_category === categoryFilter;
      return matchSearch && matchCat;
    });
  }, [products, searchFilter, categoryFilter]);

  const handleLogout = async () => {
    await logout();
    addToast('Logged out successfully.', 'info');
    navigate('/admin');
  };

  const handleConfirmDelete = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    try {
      await deleteProduct(productToDelete.id);
      addToast(`"${productToDelete.name}" deleted from catalogue.`, 'success');
      setProductToDelete(null);
    } catch (err) {
      addToast('Failed to delete product.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <SEO
        title="Admin Dashboard | Aboli Bag Boutique"
        description="Live catalogue management dashboard for Aboli Bag Boutique, Satara."
      />

      <div style={{ backgroundColor: 'var(--color-background)', minHeight: '90vh', padding: '36px 0 64px' }}>
        <div className="container">
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--color-border)',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src="/logo.jpg" alt="Aboli Logo" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(212, 160, 23, 0.3)' }} />
              <div>
                <h1 style={{ fontSize: '24px', color: 'var(--color-primary)', margin: 0 }}>
                  Catalogue Manager
                </h1>
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  Logged in as <strong>{user?.email || 'admin@aboli.in'}</strong> (Owner)
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="sm" icon={ExternalLink}>
                  View Live Site
                </Button>
              </Link>

              <Link to="/admin/dashboard/new" style={{ textDecoration: 'none' }}>
                <Button variant="cta" size="sm" icon={Plus}>
                  Add Product
                </Button>
              </Link>

              <Button variant="ghost" size="sm" icon={LogOut} onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>

          {/* 4 Summary Stat Cards */}
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            {/* Total */}
            <Card style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(122, 31, 58, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Package size={24} />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Total Products
                </span>
                <h3 style={{ fontSize: '26px', color: 'var(--color-primary)', margin: 0 }}>{stats.total}</h3>
              </div>
            </Card>

            {/* In Stock */}
            <Card style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-success)'
              }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  In Stock
                </span>
                <h3 style={{ fontSize: '26px', color: 'var(--color-success)', margin: 0 }}>{stats.inStock}</h3>
              </div>
            </Card>

            {/* Out of Stock */}
            <Card style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(179, 38, 30, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-error)'
              }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Out of Stock
                </span>
                <h3 style={{ fontSize: '26px', color: 'var(--color-error)', margin: 0 }}>{stats.outOfStock}</h3>
              </div>
            </Card>

            {/* Featured */}
            <Card style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(201, 162, 39, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)'
              }}>
                <Sparkles size={24} />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Featured on Home
                </span>
                <h3 style={{ fontSize: '26px', color: '#8A680C', margin: 0 }}>{stats.featured}</h3>
              </div>
            </Card>
          </div>

          {/* Products Table Card */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden'
            }}
          >
            {/* Search & Filter Header Bar */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
                  <Search size={16} color="var(--color-text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search by name, subcategory..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    style={{
                      width: '100%',
                      height: '38px',
                      padding: '0 16px 0 36px',
                      backgroundColor: 'var(--color-surface-soft)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  />
                </div>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  style={{
                    height: '38px',
                    padding: '0 12px',
                    backgroundColor: 'var(--color-surface-soft)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '13px',
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All Categories</option>
                  <option value="bags_boutique">Bags Boutique</option>
                  <option value="designer_jewellery">Designer Jewellery</option>
                </select>
              </div>

              <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                Showing <strong>{displayProducts.length}</strong> of {products.length} items
              </span>
            </div>

            {/* Data Table */}
            {displayProducts.length === 0 ? (
              <div style={{ padding: '56px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)', marginBottom: '8px' }}>
                  {products.length === 0 ? 'Your boutique catalogue is currently empty.' : 'No products match your filter criteria.'}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '24px', maxWidth: '420px', margin: '0 auto 20px' }}>
                  {products.length === 0 
                    ? 'Add your first handcrafted bag or jewellery item to make it immediately visible to customers across the site.'
                    : 'Try clearing your search query or choosing another category filter.'}
                </p>
                <Link to="/admin/dashboard/new">
                  <Button variant="cta" size="md" icon={Plus}>
                    Add New Product
                  </Button>
                </Link>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-surface-soft)', borderBottom: '1px solid var(--color-border)' }}>
                      <th style={{ padding: '14px 20px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>Product</th>
                      <th style={{ padding: '14px 16px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>Category</th>
                      <th style={{ padding: '14px 16px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>Price</th>
                      <th style={{ padding: '14px 16px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>Stock Status</th>
                      <th style={{ padding: '14px 16px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', textAlign: 'center' }}>Featured</th>
                      <th style={{ padding: '14px 20px', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayProducts.map((p) => {
                      const coverImg = p.images?.[0] || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80';

                      return (
                        <tr
                          key={p.id}
                          style={{
                            borderBottom: '1px solid var(--color-border-light)',
                            transition: 'background-color 0.15s'
                          }}
                          className="admin-table-row"
                        >
                          {/* Product Info */}
                          <td style={{ padding: '14px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                              <img
                                src={coverImg}
                                alt={p.name}
                                style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--color-border)' }}
                              />
                              <div>
                                <div style={{ fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>
                                  {p.name}
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                  /catalogue/{p.slug || p.id}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ fontSize: '13px', fontWeight: 'var(--weight-medium)' }}>
                              {p.main_category === 'bags_boutique' ? 'Bags' : 'Jewellery'}
                            </div>
                            <span style={{ fontSize: '11px', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              {p.subcategory}
                            </span>
                          </td>

                          {/* Price */}
                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ fontWeight: 'var(--weight-bold)' }}>
                              {formatPrice(p.price)}
                            </div>
                            {p.original_price && (
                              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>
                                {formatPrice(p.original_price)}
                              </div>
                            )}
                          </td>

                          {/* Availability Quick Toggle */}
                          <td style={{ padding: '14px 16px' }}>
                            <button
                              type="button"
                              onClick={() => toggleAvailability(p.id, p.availability)}
                              title="Click to cycle stock status (In Stock -> Out of Stock -> Sold)"
                              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                            >
                              <Badge variant={p.availability}>
                                {p.availability === 'in_stock' ? 'In Stock' : p.availability === 'out_of_stock' ? 'Out of Stock' : 'Sold'}
                              </Badge>
                            </button>
                          </td>

                          {/* Featured Quick Toggle */}
                          <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => toggleFeatured(p.id, p.featured)}
                              aria-label={p.featured ? 'Remove from featured' : 'Mark as featured'}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '6px',
                                color: p.featured ? '#C9A227' : 'var(--color-border)',
                                transition: 'transform 0.15s'
                              }}
                            >
                              <Star size={20} fill={p.featured ? '#C9A227' : 'transparent'} />
                            </button>
                          </td>

                          {/* Action Buttons */}
                          <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                              <Link
                                to={`/catalogue/${p.slug || p.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View public page"
                                style={{
                                  padding: '6px',
                                  borderRadius: 'var(--radius-sm)',
                                  color: 'var(--color-text-secondary)',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Eye size={16} />
                              </Link>

                              <Link
                                to={`/admin/dashboard/${p.id}`}
                                title="Edit product"
                                style={{
                                  padding: '6px',
                                  borderRadius: 'var(--radius-sm)',
                                  color: 'var(--color-primary)',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Edit2 size={16} />
                              </Link>

                              <button
                                type="button"
                                onClick={() => setProductToDelete(p)}
                                title="Delete product"
                                aria-label={`Delete ${p.name}`}
                                style={{
                                  padding: '6px',
                                  borderRadius: 'var(--radius-sm)',
                                  color: 'var(--color-error)',
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal Dialog */}
      <Modal
        isOpen={Boolean(productToDelete)}
        onClose={() => setProductToDelete(null)}
        title="Confirm Product Deletion"
      >
        <div style={{ padding: '8px 0' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            This will permanently remove <strong>&ldquo;{productToDelete?.name}&rdquo;</strong> from the boutique catalogue. This action cannot be undone.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <Button
              variant="outline"
              onClick={() => setProductToDelete(null)}
              disabled={isDeleting}
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              onClick={handleConfirmDelete}
              loading={isDeleting}
            >
              Permanently Delete
            </Button>
          </div>
        </div>
      </Modal>

      <style>{`
        .admin-table-row:hover {
          background-color: var(--color-surface-soft);
        }
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
