# 🎉 Blog Admin Panel - Complete Guide

Your custom admin panel is now ready! You can create, edit, and manage blog posts without touching Supabase.

---

## 🚀 Quick Start

### Step 1: Run the Database Setup

**IMPORTANT**: You must run the database schema first before using the admin panel.

1. Go to your Supabase project: https://supabase.com/dashboard
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open `scripts/blog_schema.sql` file
5. Copy the entire contents and paste into SQL editor
6. Click **Run** to execute
7. Create storage bucket:
   - Go to **Storage** → **New bucket**
   - Name: `blog-images`
   - Make it **Public** ✓
   - Click **Create**

### Step 2: Access Admin Panel

1. **Start your dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Go to admin login**:
   ```
   http://localhost:3000/admin/blog/login
   ```

3. **Default password**:
   ```
   stenth2024admin
   ```

4. **Change the password** (recommended):
   - Open `.env.local`
   - Change `ADMIN_PASSWORD=stenth2024admin` to your desired password
   - Restart the dev server

---

## 📝 How to Create Your First Blog Post

### Method 1: Through Admin Panel (Recommended!)

1. **Login** at http://localhost:3000/admin/blog/login
2. Click **"New Post"** button
3. Fill in the form:
   - **Title**: Your post title (e.g., "10 SEO Strategies for 2026")
   - **URL Slug**: Auto-generates from title, or edit manually
   - **Featured Image**: Click to upload (drag & drop supported)
   - **Excerpt**: Brief summary (2-3 sentences)
   - **Content**: Write your post in Markdown
   - **Categories**: Check one or more categories
   - **Author Name**: Defaults to "Stenth Team"
4. Click **"Save as Draft"** or **"Publish"** immediately
5. Done! 🎉

### Method 2: Through Supabase (Old Way)

You can still use Supabase dashboard if needed, but the admin panel is much easier!

---

## ✍️ Writing Content with Markdown

Your admin panel supports **full Markdown** formatting. Here's what you can do:

### Basic Formatting

```markdown
# Main Heading
## Sub Heading
### Smaller Heading

**Bold text**
*Italic text*

[Link text](https://example.com)
```

### Lists

```markdown
- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered item 1
2. Numbered item 2
```

### Images

```markdown
![Image description](https://example.com/image.jpg)
```

### Code

```markdown
Inline `code` example

\`\`\`javascript
// Code block with syntax highlighting
function greet(name) {
  console.log(`Hello, ${name}!`)
}
\`\`\`
```

### Quotes

```markdown
> This is a blockquote
> It can span multiple lines
```

### Tables

```markdown
| Feature | Price |
|---------|-------|
| Basic   | Free  |
| Pro     | $10   |
```

---

## 🎨 Admin Panel Features

### Dashboard (`/admin/blog`)

- **View all posts** (published and drafts)
- **See post stats** (views, status, publish date)
- **Quick actions**:
  - 👁️ View - Opens post in new tab
  - ✏️ Edit - Edit post
  - 🗑️ Delete - Delete post (with confirmation)
- **View Blog** button - Preview your blog
- **Logout** button

### Post Editor (`/admin/blog/new` or `/admin/blog/edit/[id]`)

**Form Fields**:
- ✅ **Title** - Your post title (required)
- ✅ **URL Slug** - Auto-generates, or customize
- 📸 **Featured Image** - Drag & drop or click to upload
- ✅ **Excerpt** - Summary shown on blog listing (required)
- ✅ **Content** - Full post in Markdown (required)
- 🏷️ **Categories** - Check multiple categories
- 👤 **Author Name** - Defaults to "Stenth Team"
- 🔍 **Meta Description** - For SEO (auto-uses excerpt if empty)

**Action Buttons**:
- **Save as Draft** - Saves but doesn't publish
- **Publish** - Makes it live immediately on your blog

### Image Upload

- **Drag & drop** or **click** to upload
- Supports: JPG, PNG, WebP, GIF
- Max size: 5MB
- Images stored in Supabase Storage
- Auto-generates public URL
- Remove and re-upload if needed

---

## 🔐 Security

### Password Protection

- Admin panel requires password login
- Session expires after 7 days
- Only you can access `/admin/blog/*` routes
- Visitors only see the public blog at `/blog`

### Change Your Password

1. Open `.env.local`
2. Find `ADMIN_PASSWORD=stenth2024admin`
3. Change to your secure password
4. Restart dev server
5. Use new password to login

### Production Security

When deploying to Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `ADMIN_PASSWORD` with your secure password
3. Never commit passwords to git
4. Use strong passwords (min 12 characters)

---

## 🎯 Workflow Examples

### Publishing a New Post

```
1. Login → http://localhost:3000/admin/blog/login
2. Click "New Post"
3. Write title: "How to Improve SEO in 2026"
4. Upload featured image
5. Write excerpt
6. Write content in Markdown
7. Select categories: SEO, Content Marketing
8. Click "Publish"
9. View live at: /blog/how-to-improve-seo-in-2026
```

### Editing Existing Post

```
1. Go to Dashboard → http://localhost:3000/admin/blog
2. Find your post in the table
3. Click Edit icon (pencil)
4. Make changes
5. Click "Publish" to update
```

### Drafting Posts

```
1. Write post as normal
2. Click "Save as Draft" instead of "Publish"
3. Post saves but won't appear on public blog
4. Edit later and click "Publish" when ready
```

---

## 🌐 URLs Reference

| Purpose | URL |
|---------|-----|
| Admin Login | http://localhost:3000/admin/blog/login |
| Admin Dashboard | http://localhost:3000/admin/blog |
| Create New Post | http://localhost:3000/admin/blog/new |
| Edit Post | http://localhost:3000/admin/blog/edit/[post-id] |
| Public Blog | http://localhost:3000/blog |
| Individual Post | http://localhost:3000/blog/[post-slug] |

---

## 📊 What Visitors See vs What You See

### Visitors See:
- ✅ Beautiful blog at `/blog`
- ✅ Individual posts at `/blog/post-slug`
- ✅ Category filters
- ✅ Professional layout
- ❌ Cannot see admin panel
- ❌ Cannot see drafts

### You See (After Login):
- ✅ Everything visitors see
- ✅ Admin dashboard at `/admin/blog`
- ✅ Post editor
- ✅ All posts including drafts
- ✅ Edit/delete controls
- ✅ View counts and stats

---

## 🐛 Troubleshooting

### "Invalid password" error
- Check you're using the correct password from `.env.local`
- Password is: `stenth2024admin` (default)
- If you changed it, make sure you restarted the server

### Can't upload images
- Make sure you created `blog-images` storage bucket in Supabase
- Bucket must be set to **Public**
- Check file size is under 5MB
- Check file format is JPG, PNG, WebP, or GIF

### Post not appearing on blog
- Check post status is "published" (not "draft")
- Check if there are any errors in the admin dashboard
- Make sure database was set up correctly

### Redirected to login page constantly
- Clear your browser cookies
- Try incognito/private mode
- Check if there are console errors

---

## 🚀 Deployment (Vercel)

When you're ready to deploy:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add blog admin panel"
   git push
   ```

2. **Vercel Environment Variables**:
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add: `ADMIN_PASSWORD` → `your-secure-password`

3. **Deploy**:
   - Vercel auto-deploys on push
   - Admin will be at: `https://yourdomain.com/admin/blog/login`
   - Change password immediately after first production login

---

## 🎓 Tips & Best Practices

### Content Tips:
- ✅ Write compelling titles (under 60 characters for SEO)
- ✅ Use descriptive excerpts (150-160 characters ideal)
- ✅ Always add featured images (1200x630px recommended)
- ✅ Break up content with headings (H2, H3)
- ✅ Use bullet points and numbered lists
- ✅ Add internal links to other posts
- ✅ Assign 1-3 relevant categories
- ✅ Write for humans first, SEO second

### SEO Tips:
- ✅ Use keywords in title and headings
- ✅ Write unique meta descriptions
- ✅ Use descriptive image alt text
- ✅ Keep URLs short and readable
- ✅ Link to related content
- ✅ Aim for 1000+ words for in-depth posts
- ✅ Update old posts regularly

### Performance Tips:
- ✅ Optimize images before upload (use TinyPNG.com)
- ✅ Use WebP format when possible
- ✅ Keep images under 500KB
- ✅ Write clean, readable Markdown
- ✅ Avoid embedding too many images

---

## ✨ Next Steps

Now that your admin panel is set up:

1. ✅ **Run the database schema** (if you haven't yet)
2. ✅ **Login to admin panel**
3. ✅ **Create your first post**
4. ✅ **Publish and test**
5. ✅ **Share your blog with the world!**

**Pro Tip**: Start with 3-5 posts before officially launching your blog. This gives visitors something to read and makes your blog look established!

---

## 🆘 Need Help?

### Common Questions:

**Q: Can I add more admins?**
A: Currently single-password system. For multiple admins, we'd need to implement Supabase Auth (let me know if you want this).

**Q: Can I schedule posts?**
A: Not yet - it's on the roadmap! For now, save as draft and publish manually.

**Q: Can I import from WordPress?**
A: You'd need to export WordPress to Markdown, then paste content into admin panel.

**Q: Can I customize the editor?**
A: Yes! The editor is in `components/admin/post-editor.tsx` - you can customize it.

---

**You're all set! Happy blogging! 🎉📝**
