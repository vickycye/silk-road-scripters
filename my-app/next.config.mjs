/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig; 