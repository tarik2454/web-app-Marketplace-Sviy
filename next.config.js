/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['png.pngtree.com', 'swiperjs.com'],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: 'http://13.60.194.15/:path*', 
      },
    ];
  },
};

module.exports = nextConfig;
