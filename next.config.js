/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.involead.com', pathname: '/wp-content/uploads/**' }
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
