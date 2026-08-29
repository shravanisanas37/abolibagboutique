-- ==============================================================================
-- Aboli Bag Boutique — Supabase Schema & Realtime Setup
-- ==============================================================================

-- 1. Create Products Table (matches exact product model)
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  main_category TEXT NOT NULL CHECK (main_category IN ('bags_boutique', 'designer_jewellery')),
  subcategory TEXT NOT NULL,
  price INTEGER NOT NULL CHECK (price >= 0),
  original_price INTEGER CHECK (original_price IS NULL OR original_price > price),
  description TEXT,
  badge TEXT DEFAULT 'none' CHECK (badge IN ('none', 'new', 'sale', 'bestseller')),
  availability TEXT DEFAULT 'in_stock' CHECK (availability IN ('in_stock', 'out_of_stock', 'sold')),
  featured BOOLEAN DEFAULT false,
  images TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Looks (Lookbook) Table
CREATE TABLE IF NOT EXISTS public.looks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  caption TEXT,
  product_ids UUID[] DEFAULT '{}',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  quote TEXT NOT NULL,
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Inquiries Table (for contact submissions)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  product_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.looks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 6. Setup Product Policies
DROP POLICY IF EXISTS "Public read products" ON public.products;
CREATE POLICY "Public read products" ON public.products
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Full access to products" ON public.products;
CREATE POLICY "Full access to products" ON public.products
  FOR ALL USING (true) WITH CHECK (true);

-- 7. Setup Looks Policies
DROP POLICY IF EXISTS "Public read looks" ON public.looks;
CREATE POLICY "Public read looks" ON public.looks
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Full access to looks" ON public.looks;
CREATE POLICY "Full access to looks" ON public.looks
  FOR ALL USING (true) WITH CHECK (true);

-- 8. Setup Testimonials Policies
DROP POLICY IF EXISTS "Public read testimonials" ON public.testimonials;
CREATE POLICY "Public read testimonials" ON public.testimonials
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Full access to testimonials" ON public.testimonials;
CREATE POLICY "Full access to testimonials" ON public.testimonials
  FOR ALL USING (true) WITH CHECK (true);

-- 9. Setup Inquiries Policies
DROP POLICY IF EXISTS "Public insert inquiries" ON public.inquiries;
CREATE POLICY "Public insert inquiries" ON public.inquiries
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Full read inquiries" ON public.inquiries;
CREATE POLICY "Full read inquiries" ON public.inquiries
  FOR SELECT USING (true);

-- 10. Enable Realtime Replication for Products & Looks
ALTER PUBLICATION supabase_realtime ADD TABLE public.products;
ALTER PUBLICATION supabase_realtime ADD TABLE public.looks;

-- 11. Setup Storage Bucket for Product Images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

DROP POLICY IF EXISTS "Public Read Product Images" ON storage.objects;
CREATE POLICY "Public Read Product Images" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Allow Upload Product Images" ON storage.objects;
CREATE POLICY "Allow Upload Product Images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Allow Update Product Images" ON storage.objects;
CREATE POLICY "Allow Update Product Images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Allow Delete Product Images" ON storage.objects;
CREATE POLICY "Allow Delete Product Images" ON storage.objects
  FOR DELETE USING (bucket_id = 'product-images');

