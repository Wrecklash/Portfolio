/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Configure for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://wrecklash.in' : '',
  basePath: '',
  // Ensure we handle trailing slashes properly
  trailingSlash: true
}

module.exports = nextConfig 