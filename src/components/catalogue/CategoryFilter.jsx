import React from 'react';
import { ChevronRight, Sparkles, Tag, ShoppingBag, Gem, Layers } from 'lucide-react';

export function CategoryFilter({
  selectedCategory = 'all',
  onSelectCategory,
  categoryCounts = {}
}) {
  const categories = [
    { id: 'all', label: 'All Products', icon: Layers },
    { id: 'bags_boutique', label: 'Bags Boutique', icon: ShoppingBag },
    { id: 'designer_jewellery', label: 'Designer Jewellery', icon: Gem },
    { id: 'new_arrivals', label: 'New Arrivals', icon: Sparkles },
    { id: 'offers_sale', label: 'Offers & Sale', icon: Tag }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span
        style={{
          fontSize: 'var(--text-eyebrow)',
          fontWeight: 'var(--weight-bold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: '8px',
          display: 'block'
        }}
      >
        Main Category
      </span>

      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const Icon = cat.icon;
        const count = categoryCounts[cat.id];

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              border: isSelected ? '1px solid var(--color-accent)' : '1px solid transparent',
              backgroundColor: isSelected ? 'var(--color-surface-alt)' : 'transparent',
              color: isSelected ? 'var(--color-primary)' : 'var(--color-text-primary)',
              fontWeight: isSelected ? 'var(--weight-bold)' : 'var(--weight-medium)',
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left'
            }}
            className="category-filter-item"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Icon size={18} color={isSelected ? 'var(--color-primary)' : 'var(--color-text-secondary)'} />
              <span>{cat.label}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {count !== undefined && (
                <span
                  style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-surface-alt)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-secondary)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {count}
                </span>
              )}
              {isSelected && <ChevronRight size={16} color="var(--color-accent)" />}
            </div>
          </button>
        );
      })}

      <style>{`
        .category-filter-item:hover {
          background-color: var(--color-surface-alt) !important;
          color: var(--color-primary) !important;
        }
      `}</style>
    </div>
  );
}
