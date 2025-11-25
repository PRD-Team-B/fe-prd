/** @type {import('next').NextConfig} */
// Frontend-only configuration - no backend/API routes needed
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Uncomment below to generate static export (fully frontend-only)
  // output: 'export',
}

module.exports = nextConfig

