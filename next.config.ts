import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/restaurant-website', 
  assetPrefix: '/restaurant-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
