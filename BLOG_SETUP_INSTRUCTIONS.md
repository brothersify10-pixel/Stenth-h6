# Stenth Blog - Setup Instructions

## ✅ What's Been Completed

All blog code has been implemented successfully:

### Files Created
1. **Database Schema**: `scripts/blog_schema.sql`
2. **Type Definitions**: `lib/blog-types.ts`
3. **Helper Functions**: `lib/blog-helpers.ts`
4. **Database Queries**: `lib/supabase/blog.ts`
5. **Components**:
   - `components/blog/blog-card.tsx`
   - `components/blog/blog-grid.tsx`
   - `components/blog/category-filter.tsx`
   - `components/blog/blog-pagination.tsx`
   - `components/blog/blog-post-header.tsx`
   - `components/blog/blog-post-content.tsx`
   - `components/blog/related-posts.tsx`
6. **Pages**:
   - `app/blog/layout.tsx`
   - `app/blog/page.tsx`
   - `app/blog/[slug]/page.tsx`
7. **API Routes**:
   - `app/api/blog/posts/route.ts`
   - `app/api/blog/categories/route.ts`
   - `app/api/blog/related/route.ts`
   - `app/api/blog/increment-view/route.ts`

### Files Modified
- `components/Header.tsx` - Added blog link to navigation
- `components/icons.tsx` - Added FileText icon

---

## 📋 Next Steps: Database Setup

### Step 1: Run SQL Schema in Supabase

1. Go to your Supabase project: https://supabase.com/dashboard/project/_
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `scripts/blog_schema.sql`
5. Paste into the SQL editor
6. Click **Run** to execute

This will create:
- 5 database tables (blog_posts, blog_categories, blog_tags, and junction tables)
- All necessary indexes
- Row Level Security policies
- Helper function for incrementing views
- Seed data for 6 categories and 15 common tags

### Step 2: Create Storage Bucket for Images

1. In Supabase dashboard, go to **Storage**
2. Click **New bucket**
3. Name it: `blog-images`
4. Set it to **Public bucket** ✓
5. Click **Create bucket**

### Step 3: Create Your First Blog Post

#### Via Supabase Dashboard (Recommended for now):

1. Go to **Table Editor** → `blog_posts`
2. Click **Insert row**
3. Fill in the required fields:
   - **title**: "10 SEO Strategies That Actually Work in 2026"
   - **slug**: "seo-strategies-2026" (must be URL-friendly)
   - **excerpt**: "Discover the most effective SEO tactics that are driving real results in 2026..."
   - **content**: Write your post in Markdown format. Example:
     ```markdown
     # Introduction

     SEO is constantly evolving, and what worked yesterday might not work today. In this comprehensive guide, we'll explore the top 10 SEO strategies that are delivering real results in 2026.

     ## 1. Focus on User Intent

     Modern SEO is all about understanding what users really want...

     [Continue with your content]
     ```
   - **author_name**: "Stenth Team" (or your name)
   - **status**: "published"
   - **published_at**: Current timestamp (YYYY-MM-DD HH:MM:SS+00)
   - **read_time_minutes**: Calculate based on word count (200 words per minute)
   - **meta_description**: "Learn the top 10 SEO strategies that actually work..."
   - **featured_image**: Upload image to Storage bucket first, then paste URL
     - Go to Storage → blog-images → Upload file
     - After upload, click the file → Copy URL
     - Paste URL into featured_image field

4. Link post to category:
   - Go to `blog_post_categories` table
   - Insert row with:
     - **post_id**: Copy the UUID from your blog post
     - **category_id**: Copy UUID of "SEO" category from `blog_categories` table

5. Optionally add tags:
   - Go to `blog_post_tags` table
   - Insert rows linking post to relevant tags

---

## 🎨 Blog Features

### Blog Listing Page (`/blog`)
- Grid layout of blog posts with featured images
- Category filter chips
- Pagination (12 posts per page)
- Loading states
- Responsive design

### Individual Post Page (`/blog/[slug]`)
- Full post content rendered from Markdown
- Featured image header
- Category badges
- Author information
- View counter
- Reading time
- Related posts section
- Social meta tags (OpenGraph, Twitter)
- JSON-LD structured data for SEO

### Categories
Pre-seeded categories with gradient colors:
- **SEO** - Green to emerald
- **Paid Advertising** - Orange to red
- **Content Marketing** - Purple to pink
- **Web Development** - Blue to cyan
- **Analytics** - Yellow to orange
- **Case Studies** - Cyan to purple

---

## 🚀 Testing Your Blog

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Visit the blog**:
   - Blog listing: http://localhost:3000/blog
   - Individual post: http://localhost:3000/blog/your-slug

3. **Test features**:
   - Click category filters
   - Navigate pagination
   - Click on a blog post
   - Check related posts
   - Test mobile responsiveness

---

## ✍️ Content Management Workflow

### Creating a New Post

1. **Write content** in Markdown format
2. **Upload featured image** to Supabase Storage → blog-images
3. **Insert post** in `blog_posts` table via Supabase dashboard:
   - Set status to "draft" initially
   - Calculate read_time_minutes: (word_count / 200) rounded up
   - When ready, change status to "published"
4. **Link categories** in `blog_post_categories` table
5. **Link tags** in `blog_post_tags` table (optional)
6. **Post appears immediately** on your site at `/blog`

### Markdown Formatting Examples

Your blog supports GitHub-flavored Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list item 1
- Bullet list item 2

1. Numbered list item 1
2. Numbered list item 2

> This is a blockquote

[Link text](https://example.com)

\`\`\`javascript
// Code block with syntax highlighting
const greeting = "Hello, world!"
console.log(greeting)
\`\`\`

Inline `code` example

![Image alt text](https://example.com/image.jpg)

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## 📊 Analytics

The blog tracks:
- **View counts** per post (automatically incremented)
- Post metadata visible to authors via Supabase dashboard

---

## 🎯 Future Enhancements

Consider adding later:
1. **Custom Admin Panel** - Rich text editor, drag-and-drop images
2. **Search Functionality** - Full-text search across posts
3. **Comments System** - Disqus or custom solution
4. **Newsletter Integration** - Capture emails on posts
5. **Reading Progress Bar** - Show scroll progress
6. **Table of Contents** - Auto-generate from headings
7. **Social Share Buttons** - Twitter, LinkedIn, Facebook
8. **Author Profiles** - Individual author pages
9. **Post Series** - Link related posts in a series
10. **RSS Feed** - XML feed for subscribers

---

## 🐛 Troubleshooting

### Posts not appearing?
- Check that status = "published" in database
- Verify published_at is not in the future
- Check Supabase RLS policies are set correctly

### Images not loading?
- Verify bucket name is "blog-images"
- Check bucket is set to public
- Confirm image URL is correct

### Category filters not working?
- Verify post_id and category_id are linked in `blog_post_categories`
- Check category slug matches URL parameter

### Build errors?
- Run `npm install` to ensure dependencies are installed
- Check that all environment variables are set in `.env.local`

---

## 📝 Sample Blog Post Ideas

Get started with these topics:
1. "10 SEO Strategies That Actually Work in 2026"
2. "How to Maximize ROI from Google Ads Campaigns"
3. "The Complete Guide to Technical SEO Audits"
4. "Content Marketing vs Paid Ads: What's Right for Your Business?"
5. "How We Increased a Client's Organic Traffic by 300%"
6. "Link Building Strategies for 2026: Quality Over Quantity"
7. "Understanding Google Analytics 4: A Beginner's Guide"
8. "Local SEO: Dominate Your City's Search Results"
9. "The Psychology of Color in Digital Marketing"
10. "5 Common Website Mistakes That Kill Conversions"

---

## 🎉 You're All Set!

Once you complete the database setup, your blog will be fully functional. The blog link is already in your navigation menu, ready for visitors to discover your content.

Happy blogging! 🚀
