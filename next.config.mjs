/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com", 
      "i.imgur.com",
      "blob.v0.dev",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com"
    ],
  },
}

export default nextConfig
