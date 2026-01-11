// TypeScript interfaces for Stenth Blog

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image: string | null
  featured_image_alt: string | null
  author_name: string
  author_avatar: string | null
  published_at: string
  created_at: string
  updated_at: string
  status: "draft" | "published" | "archived"
  views: number
  read_time_minutes: number | null
  meta_description: string | null
  meta_keywords: string[] | null
  categories?: BlogPostCategory[]
  tags?: BlogPostTag[]
}

export interface BlogCategory {
  id: string
  slug: string
  name: string
  description: string | null
  color_from: string
  color_to: string
  created_at: string
  post_count?: number
}

export interface BlogTag {
  id: string
  slug: string
  name: string
  created_at: string
  post_count?: number
}

export interface BlogPostCategory {
  category: BlogCategory
}

export interface BlogPostTag {
  tag: BlogTag
}

export interface BlogPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface BlogPostsResponse {
  posts: BlogPost[]
  pagination: BlogPagination
}

export interface GetBlogPostsParams {
  page?: number
  limit?: number
  category?: string
  tag?: string
  search?: string
}
