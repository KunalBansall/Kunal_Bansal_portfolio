/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeholder.com"],
  },
  // Add this to help with dependency issues
  experimental: {
    esmExternals: "loose",
  },
}

module.exports = nextConfig

