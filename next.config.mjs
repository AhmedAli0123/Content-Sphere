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
  };
  
  export default nextConfig;