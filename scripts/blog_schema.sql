-- Stenth Blog Database Schema
-- Execute this in Supabase SQL Editor

-- =====================================================
-- 1. BLOG POSTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  featured_image_alt TEXT,
  author_name TEXT NOT NULL DEFAULT 'Stenth Team',
  author_avatar TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
  views INTEGER DEFAULT 0,
  read_time_minutes INTEGER,
  meta_description TEXT,
  meta_keywords TEXT[],
  CONSTRAINT slug_format CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

-- Indexes for blog_posts
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- =====================================================
-- 2. BLOG CATEGORIES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  color_from TEXT DEFAULT 'cyan-400',
  color_to TEXT DEFAULT 'purple-600',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- =====================================================
-- 3. BLOG POST CATEGORIES (Many-to-Many Junction)
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_post_categories (
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES blog_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

CREATE INDEX IF NOT EXISTS idx_blog_post_categories_post ON blog_post_categories(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_category ON blog_post_categories(category_id);

-- =====================================================
-- 4. BLOG TAGS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_tags_slug ON blog_tags(slug);

-- =====================================================
-- 5. BLOG POST TAGS (Many-to-Many Junction)
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE INDEX IF NOT EXISTS idx_blog_post_tags_post ON blog_post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_tag ON blog_post_tags(tag_id);

-- =====================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;

-- Public can view published posts
CREATE POLICY "Public can view published posts" ON blog_posts
  FOR SELECT USING (status = 'published' AND published_at <= NOW());

-- Public can view categories
CREATE POLICY "Public can view categories" ON blog_categories
  FOR SELECT USING (true);

-- Public can view tags
CREATE POLICY "Public can view tags" ON blog_tags
  FOR SELECT USING (true);

-- Public can view post-category relationships
CREATE POLICY "Public can view post categories" ON blog_post_categories
  FOR SELECT USING (true);

-- Public can view post-tag relationships
CREATE POLICY "Public can view post tags" ON blog_post_tags
  FOR SELECT USING (true);

-- =====================================================
-- 7. HELPER FUNCTION - Increment Post Views
-- =====================================================
CREATE OR REPLACE FUNCTION increment_post_views(post_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE blog_posts
  SET views = views + 1
  WHERE id = post_id;
END;
$$;

-- =====================================================
-- 8. SEED DATA - Categories
-- =====================================================
INSERT INTO blog_categories (slug, name, description, color_from, color_to) VALUES
  ('seo', 'SEO', 'Search Engine Optimization tips and strategies', 'green-400', 'emerald-600'),
  ('paid-advertising', 'Paid Advertising', 'Google Ads, Meta Ads, and paid marketing insights', 'orange-400', 'red-600'),
  ('content-marketing', 'Content Marketing', 'Content strategy and marketing techniques', 'purple-400', 'pink-600'),
  ('web-development', 'Web Development', 'Website development and technical insights', 'blue-400', 'cyan-600'),
  ('analytics', 'Analytics', 'Data analysis and marketing metrics', 'yellow-400', 'orange-600'),
  ('case-studies', 'Case Studies', 'Real client success stories and results', 'cyan-400', 'purple-600')
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 9. SEED DATA - Tags
-- =====================================================
INSERT INTO blog_tags (slug, name) VALUES
  ('google-ads', 'Google Ads'),
  ('seo-strategy', 'SEO Strategy'),
  ('link-building', 'Link Building'),
  ('technical-seo', 'Technical SEO'),
  ('local-seo', 'Local SEO'),
  ('content-strategy', 'Content Strategy'),
  ('conversion-optimization', 'Conversion Optimization'),
  ('ppc', 'PPC'),
  ('social-media', 'Social Media'),
  ('email-marketing', 'Email Marketing'),
  ('analytics', 'Analytics'),
  ('marketing-automation', 'Marketing Automation'),
  ('growth-hacking', 'Growth Hacking'),
  ('branding', 'Branding'),
  ('web-design', 'Web Design')
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- DONE!
-- =====================================================
-- Next steps:
-- 1. Execute this SQL in Supabase SQL Editor
-- 2. Create storage bucket 'blog-images' with public access
-- 3. Start creating blog posts via Supabase Table Editor
