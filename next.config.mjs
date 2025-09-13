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
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "stenth.com" }], // catches non-www
        destination: "https://www.stenth.com/:path*", // force www
        permanent: true,
      },
    ]
  },
}

export default nextConfig
