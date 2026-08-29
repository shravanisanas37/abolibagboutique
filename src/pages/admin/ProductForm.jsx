import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Upload, Trash2, Image as ImageIcon, Sparkles, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Dropdown } from '../../components/ui/Dropdown';
import { SEO } from '../../components/layout/SEO';
import { useProducts } from '../../context/ProductContext';
import { useToast } from '../../context/ToastContext';
import { categoryTaxonomy } from '../../lib/initialData';
import { generateSlug } from '../../utils/generateSlug';
import { compressImage, uploadProductImage } from '../../utils/imageHelper';

export function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const { products, addProduct, updateProduct } = useProducts();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    main_category: 'bags_boutique',
    subcategory: 'Clutch',
    price: '',
    original_price: '',
    description: '',
    badge: 'none',
    availability: 'in_stock',
    featured: false,
    images: []
  });

  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // If editing, pre-fill form
  useEffect(() => {
    if (isEditing) {
      const existing = products.find(p => p.id === id);
      if (existing) {
        setFormData({
          name: existing.name || '',
          slug: existing.slug || '',
          main_category: existing.main_category || 'bags_boutique',
          subcategory: existing.subcategory || 'Clutch',
          price: existing.price ? existing.price.toString() : '',
          original_price: existing.original_price ? existing.original_price.toString() : '',
          description: existing.description || '',
          badge: existing.badge || 'none',
          availability: existing.availability || 'in_stock',
          featured: Boolean(existing.featured),
          images: existing.images || []
        });
      }
    }
  }, [isEditing, id, products]);

  // Handle name change and auto-slug
  const handleNameChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      name: val,
      slug: isEditing ? prev.slug : generateSlug(val)
    }));
  };

  // Main category switch -> update subcategory to default of selected category
  const handleMainCategoryChange = (e) => {
    const mainCat = e.target.value;
    const defaultSub = categoryTaxonomy[mainCat]?.subcategories[0] || 'General';
    setFormData(prev => ({
      ...prev,
      main_category: mainCat,
      subcategory: defaultSub
    }));
  };

  // Handle Image Upload with Supabase Storage upload and compression
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setIsUploading(true);
    try {
      const uploadedUrls = await Promise.all(
        files.map(file => uploadProductImage(file))
      );
      const validUrls = uploadedUrls.filter(Boolean);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...validUrls]
      }));
      addToast(`${validUrls.length} photo(s) uploaded successfully.`, 'success');
    } catch (err) {
      console.error('Image upload failed:', err);
      addToast('Failed to process image. Please try another file.', 'error');
    } finally {
      setIsUploading(false);
      // Reset input value to allow re-uploading same file if desired
      if (e.target) e.target.value = '';
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== indexToRemove)
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Product name is required.';
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      errs.price = 'Please enter a valid price in INR.';
    }
    if (formData.original_price) {
      if (isNaN(Number(formData.original_price)) || Number(formData.original_price) <= Number(formData.price)) {
        errs.original_price = 'Original price must be greater than current price for discount calculation.';
      }
    }
    if (!formData.images || formData.images.length === 0) {
      errs.images = 'At least 1 product image is required to publish.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        name: formData.name.trim(),
        slug: formData.slug.trim() || generateSlug(formData.name),
        main_category: formData.main_category,
        subcategory: formData.subcategory,
        price: Math.round(Number(formData.price)),
        original_price: formData.original_price ? Math.round(Number(formData.original_price)) : null,
        description: formData.description.trim(),
        badge: formData.badge,
        availability: formData.availability,
        featured: formData.featured,
        images: formData.images
      };

      if (isEditing) {
        await updateProduct(id, payload);
        addToast(`"${payload.name}" updated successfully!`, 'success');
      } else {
        await addProduct(payload);
        addToast(`"${payload.name}" added to catalogue live!`, 'success');
      }

      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Supabase Product Save Error:', {
        message: err.message,
        code: err.code,
        details: err.details,
        hint: err.hint,
        error: err
      });
      addToast(err.message || 'Failed to save product. Please try again.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const mainCategoryOptions = [
    { value: 'bags_boutique', label: 'Bags Boutique' },
    { value: 'designer_jewellery', label: 'Designer Jewellery' }
  ];

  const subcategoryOptions = (categoryTaxonomy[formData.main_category]?.subcategories || []).map(s => ({
    value: s,
    label: s
  }));

  const badgeOptions = [
    { value: 'none', label: 'No Badge' },
    { value: 'new', label: 'New Arrival (Gold)' },
    { value: 'sale', label: 'Sale Discount (Rose)' },
    { value: 'bestseller', label: 'Bestseller (Maroon)' }
  ];

  const availabilityOptions = [
    { value: 'in_stock', label: 'In Stock (Available for Delivery & In-Store)' },
    { value: 'out_of_stock', label: 'Out of Stock (Shows Ribbon)' },
    { value: 'sold', label: 'Sold (Hidden from Public Catalogue)' }
  ];

  return (
    <>
      <SEO
        title={`${isEditing ? 'Edit Product' : 'Add New Product'} | Admin Portal`}
        description="Catalogue management at Aboli Bag Boutique"
      />

      <div className="section-py" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-narrow">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
            <Link
              to="/admin/dashboard"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                fontWeight: 'var(--weight-semibold)',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={18} />
              <span>Back to Dashboard</span>
            </Link>

            <span className="eyebrow" style={{ margin: 0 }}>
              {isEditing ? 'EDITING CATALOGUE ITEM' : 'NEW CATALOGUE LISTING'}
            </span>
          </div>

          {/* Form Container */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h1 style={{ fontSize: '28px', color: 'var(--color-primary)', marginBottom: '8px' }}>
              {isEditing ? 'Edit Product Details' : 'Add New Boutique Product'}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              All changes sync in real time across customer browsers and devices instantly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Product Name */}
              <Input
                label="Product Name"
                required
                placeholder="e.g. Royal Teal Embroidered Potli"
                value={formData.name}
                onChange={handleNameChange}
                error={errors.name}
              />

              {/* URL Slug */}
              <Input
                label="URL Slug (Auto-generated)"
                placeholder="royal-teal-embroidered-potli"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                helperText="Controls the shareable product link: /catalogue/your-slug"
              />

              {/* Taxonomy Categories (Main + Dynamic Subcategory) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Dropdown
                  label="Main Category"
                  required
                  value={formData.main_category}
                  onChange={handleMainCategoryChange}
                  options={mainCategoryOptions}
                />

                <Dropdown
                  label="Subcategory"
                  required
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  options={subcategoryOptions}
                />
              </div>

              {/* Pricing & Discount Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Input
                  label="Current Price (₹ INR)"
                  type="number"
                  required
                  placeholder="899"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  error={errors.price}
                />

                <Input
                  label="Original Price (₹ INR, Optional for Discount)"
                  type="number"
                  placeholder="1199"
                  value={formData.original_price}
                  onChange={(e) => setFormData({ ...formData, original_price: e.target.value })}
                  error={errors.original_price}
                  helperText="If set higher than current price, displays a % OFF discount pill."
                />
              </div>

              {/* Description */}
              <Input
                label="Product Description"
                multiline
                rows={4}
                placeholder="Describe the fabric, embroidery, occasion styling, clasps, dimensions..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />

              {/* Image Upload Area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                  Product Photos <span style={{ color: 'var(--color-error)' }}>*</span>
                </label>

                {/* Upload Box */}
                <label
                  style={{
                    border: '2px dashed var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'var(--color-surface-soft)',
                    transition: 'border-color 0.2s, background-color 0.2s'
                  }}
                  className="upload-dropzone"
                >
                  <Upload size={32} color="var(--color-primary)" style={{ marginBottom: '8px' }} />
                  <span style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--color-primary)', fontSize: '15px' }}>
                    {isUploading ? 'Compressing & uploading...' : 'Click to upload product photos'}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    Supports JPG, PNG, WebP. Automatically optimized for fast mobile load times.
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>

                {errors.images && (
                  <span role="alert" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-error)' }}>
                    {errors.images}
                  </span>
                )}

                {/* Image Previews */}
                {formData.images.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
                    {formData.images.map((imgUrl, index) => (
                      <div
                        key={index}
                        style={{
                          position: 'relative',
                          width: '100px',
                          height: '100px',
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          border: index === 0 ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        <img src={imgUrl} alt={`Uploaded ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        
                        {index === 0 && (
                          <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(36,20,16,0.85)',
                            color: '#FFFFFF',
                            fontSize: '9px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            padding: '2px 0'
                          }}>
                            Cover Image
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          aria-label="Remove image"
                          style={{
                            position: 'absolute',
                            top: '4px',
                            right: '4px',
                            backgroundColor: 'rgba(179, 38, 30, 0.9)',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Badges & Availability */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <Dropdown
                  label="Highlight Badge"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  options={badgeOptions}
                />

                <Dropdown
                  label="Stock Availability"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  options={availabilityOptions}
                />
              </div>

              {/* Featured Switch */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                backgroundColor: 'var(--color-surface-soft)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-light)'
              }}>
                <div>
                  <h4 style={{ fontSize: '15px', color: 'var(--color-primary)', marginBottom: '2px' }}>
                    Feature on Homepage Strip
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Surfaces this piece prominently on the main landing page showcase.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  style={{ width: '22px', height: '22px', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', justifyContent: 'flex-end' }}>
                <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" size="lg">
                    Cancel
                  </Button>
                </Link>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  loading={isSaving}
                >
                  {isEditing ? 'Save Product Changes' : 'Publish Product to Live Catalogue'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .upload-dropzone:hover {
          border-color: var(--color-primary) !important;
          background-color: var(--color-surface-alt) !important;
        }
        @media (max-width: 640px) {
          form > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
