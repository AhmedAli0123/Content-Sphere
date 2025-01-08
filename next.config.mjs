/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio', // This ensures requests to /studio are routed correctly
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's image CDN domain here
  },
};

export default nextConfig;
