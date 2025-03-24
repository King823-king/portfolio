/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        loader: "default",
        protocol: "https",
        path: "https://playful-cendol-105543.netlify.app/",
        domains: ["images.unsplash.com"],
        hostname: "images.unsplash.com",
        unoptimized: true,
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
