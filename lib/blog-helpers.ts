// Helper functions for Stenth Blog

/**
 * Calculate estimated reading time based on word count
 * @param content - The blog post content (markdown or plain text)
 * @returns Reading time in minutes
 */
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Format a date string to a human-readable format
 * @param dateString - ISO date string
 * @returns Formatted date (e.g., "January 15, 2024")
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Format a date string to a relative time (e.g., "2 days ago")
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "Today"
  if (diffInDays === 1) return "Yesterday"
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
  return `${Math.floor(diffInDays / 365)} years ago`
}

/**
 * Truncate text to a maximum length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum character length
 * @returns Truncated text with ellipsis if needed
 */
export function truncateExcerpt(text: string, maxLength: number = 150): string {
  if (!text) return ""
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

/**
 * Generate a URL-friendly slug from a title
 * @param title - The blog post title
 * @returns URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

/**
 * Get Tailwind gradient class string from category colors
 * @param colorFrom - Starting color (e.g., 'cyan-400')
 * @param colorTo - Ending color (e.g., 'purple-600')
 * @returns Tailwind gradient class string
 */
export function getCategoryGradient(
  colorFrom: string,
  colorTo: string
): string {
  return `from-${colorFrom} to-${colorTo}`
}

/**
 * Format view count with K/M notation
 * @param views - Number of views
 * @returns Formatted view count (e.g., "1.2K", "3.5M")
 */
export function formatViewCount(views: number): string {
  if (views < 1000) return views.toString()
  if (views < 1000000) return `${(views / 1000).toFixed(1)}K`
  return `${(views / 1000000).toFixed(1)}M`
}

/**
 * Extract plain text from markdown content
 * @param markdown - Markdown content
 * @returns Plain text without markdown syntax
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/#{1,6}\s/g, "") // Remove headings
    .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold
    .replace(/\*([^*]+)\*/g, "$1") // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links
    .replace(/`([^`]+)`/g, "$1") // Remove inline code
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/>\s/g, "") // Remove blockquotes
    .replace(/[-*+]\s/g, "") // Remove list markers
    .trim()
}

/**
 * Create meta keywords array from tags
 * @param tags - Array of tag names
 * @returns Array of meta keywords
 */
export function createMetaKeywords(tags: string[]): string[] {
  return [
    ...tags,
    "digital marketing",
    "Stenth",
    "marketing blog",
    "business growth",
  ]
}
