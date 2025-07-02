/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig