import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, Info, X, ShoppingBag, MessageCircle } from 'lucide-react';
import { ProductCard } from '../components/catalogue/ProductCard';
import { CategoryFilter } from '../components/catalogue/CategoryFilter';
import { SearchBar } from '../components/catalogue/SearchBar';
import { SortDropdown } from '../components/catalogue/SortDropdown';
import { ProductCardSkeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { Pagination } from '../components/ui/Pagination';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';
import { useProducts } from '../context/ProductContext';
import { getWhatsAppUrl } from '../utils/buildWhatsAppMessage';

const ITEMS_PER_PAGE = 24;

export function Catalogue() {
  const { products, loading, error, isNewArrival, isOfferSale, refreshProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // URL state bindings
  const currentCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const currentSort = searchParams.get('sort') || 'newest';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Sync state changes to URL query parameters
  const updateQueryParam = (key, value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value && value !== 'all' && value !== 'newest' && value !== '1') {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    // Reset page to 1 on filter/search changes (unless setting page itself)
    if (key !== 'page') {
      nextParams.delete('page');
    }
    setSearchParams(nextParams);
  };

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts = {
      all: products.filter(p => p.availability !== 'sold').length,
      bags_boutique: products.filter(p => p.main_category === 'bags_boutique' && p.availability !== 'sold').length,
      designer_jewellery: products.filter(p => p.main_category === 'designer_jewellery' && p.availability !== 'sold').length,
      new_arrivals: products.filter(p => isNewArrival(p) && p.availability !== 'sold').length,
      offers_sale: products.filter(p => isOfferSale(p) && p.availability !== 'sold').length
    };
    return counts;
  }, [products, isNewArrival, isOfferSale]);

  // Combined Filter and Search Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => p.availability !== 'sold');

    // 1. Category filter
    if (currentCategory === 'bags_boutique') {
      result = result.filter(p => p.main_category === 'bags_boutique');
    } else if (currentCategory === 'designer_jewellery') {
      result = result.filter(p => p.main_category === 'designer_jewellery');
    } else if (currentCategory === 'new_arrivals') {
      result = result.filter(p => isNewArrival(p));
    } else if (currentCategory === 'offers_sale') {
      result = result.filter(p => isOfferSale(p));
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // 3. Sorting
    result.sort((a, b) => {
      if (currentSort === 'price_asc') return Number(a.price) - Number(b.price);
      if (currentSort === 'price_desc') return Number(b.price) - Number(a.price);
      if (currentSort === 'name_asc') return a.name.localeCompare(b.name);
      // 'newest' default
      const dateA = new Date(a.created_at || 0).getTime();
      const dateB = new Date(b.created_at || 0).getTime();
      return dateB - dateA;
    });

    return result;
  }, [products, currentCategory, searchQuery, currentSort, isNewArrival, isOfferSale]);

  // Pagination slicing
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <>
      <SEO
        title="Shop Bags & Jewellery Catalogue | Aboli Bag Boutique Satara"
        description="Browse handcrafted clutches, potli bags, and temple jewellery. Order directly for home delivery on WhatsApp or visit our Satara store."
      />

      {/* 1. Page Header */}
      <section
        style={{
          backgroundColor: 'var(--color-surface-alt)',
          padding: '48px 0 36px',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">BROWSE ONLINE, ORDER FOR DELIVERY, OR VISIT IN-STORE</span>
          <h1 style={{ fontSize: 'var(--text-h1)', marginBottom: '8px' }}>Our Catalogue</h1>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)' }}>
            Explore our curated handcrafted collections. Tap any item to inspect details or arrange delivery via WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Policy Notice Banner (PRD Updated Copy) */}
      <section style={{ backgroundColor: 'var(--color-surface-soft)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container" style={{ padding: '14px var(--space-lg)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontSize: '14px',
              color: 'var(--color-primary)',
              textAlign: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Info size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Delivery is available on all catalogue items</strong> — message us on WhatsApp to place an order and we'll arrange delivery and payment with you directly. Prefer to see it in person first? Visit our Satara store at Moti Chowk!
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Catalogue Layout */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div
            className="catalogue-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr',
              gap: '36px',
              alignItems: 'flex-start'
            }}
          >
            {/* Desktop Category Filter Sidebar */}
            <aside
              className="catalogue-sidebar"
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '24px 20px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)',
                position: 'sticky',
                top: '104px'
              }}
            >
              <CategoryFilter
                selectedCategory={currentCategory}
                onSelectCategory={(catId) => updateQueryParam('category', catId)}
                categoryCounts={categoryCounts}
              />
            </aside>

            {/* Main Products Content Area */}
            <main style={{ width: '100%', minWidth: 0 }}>
              {/* Search, Filter Drawer Toggle, and Sort Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '28px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <SearchBar
                    value={searchQuery}
                    onChange={(query) => updateQueryParam('q', query)}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Mobile Filters Drawer Button */}
                  <Button
                    variant="outline"
                    icon={SlidersHorizontal}
                    onClick={() => setMobileFilterOpen(true)}
                    className="mobile-filter-btn"
                    style={{ display: 'none' }}
                  >
                    Filters
                  </Button>

                  <SortDropdown
                    value={currentSort}
                    onChange={(sortVal) => updateQueryParam('sort', sortVal)}
                  />
                </div>
              </div>

              {/* Active Filter Indicators */}
              {(currentCategory !== 'all' || searchQuery) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Active filters:</span>
                  {currentCategory !== 'all' && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        backgroundColor: 'var(--color-surface-alt)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '12px',
                        color: 'var(--color-primary)',
                        fontWeight: 'var(--weight-semibold)'
                      }}
                    >
                      Category: {currentCategory.replace('_', ' ')}
                      <button
                        type="button"
                        onClick={() => updateQueryParam('category', 'all')}
                        aria-label="Remove category filter"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        backgroundColor: 'var(--color-surface-alt)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '12px',
                        color: 'var(--color-primary)',
                        fontWeight: 'var(--weight-semibold)'
                      }}
                    >
                      Search: &ldquo;{searchQuery}&rdquo;
                      <button
                        type="button"
                        onClick={() => updateQueryParam('q', '')}
                        aria-label="Clear search query"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Product Grid / Loading / Error / Empty States */}
              {loading ? (
                <div
                  className="catalogue-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              ) : error ? (
                <ErrorState
                  message={error}
                  onRetry={refreshProducts}
                />
              ) : filteredProducts.length === 0 ? (
                <EmptyState
                  type={searchQuery ? 'search' : 'general'}
                  title={searchQuery ? 'No Matching Items' : 'No Products Found'}
                  description={
                    searchQuery
                      ? `We couldn't find matches for "${searchQuery}". Try selecting another category or check your spelling.`
                      : 'New stock is being added — check back soon or ask us on WhatsApp.'
                  }
                  actionLabel="Inquire on WhatsApp"
                  onAction={() => {
                    window.open(
                      getWhatsAppUrl(`Hi Aboli Bag Boutique, I'm looking for ${searchQuery || 'handcrafted bags/jewellery'} in your catalogue.`),
                      '_blank'
                    );
                  }}
                />
              ) : (
                <>
                  <div
                    className="catalogue-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '24px'
                    }}
                  >
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => updateQueryParam('page', page.toString())}
                  />
                </>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer Bottom Sheet */}
      {mobileFilterOpen && (
        <div
          className="mobile-filter-sheet-backdrop"
          onClick={() => setMobileFilterOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(36, 20, 16, 0.65)',
            backdropFilter: 'blur(3px)',
            zIndex: 9900,
            display: 'flex',
            alignItems: 'flex-end',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            className="mobile-filter-sheet"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--color-surface)',
              borderTopLeftRadius: 'var(--radius-xl)',
              borderTopRightRadius: 'var(--radius-xl)',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '24px 20px',
              animation: 'slideUp 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-primary)' }}>Select Category</h3>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: '4px' }}
              >
                <X size={22} />
              </button>
            </div>

            <CategoryFilter
              selectedCategory={currentCategory}
              onSelectCategory={(catId) => {
                updateQueryParam('category', catId);
                setMobileFilterOpen(false);
              }}
              categoryCounts={categoryCounts}
            />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .catalogue-layout {
            grid-template-columns: 1fr !important;
          }
          .catalogue-sidebar {
            display: none !important;
          }
          .mobile-filter-btn {
            display: inline-flex !important;
          }
          .catalogue-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .catalogue-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
