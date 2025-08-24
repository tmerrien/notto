import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rewrite clean URLs to protected routes
      {
        source: '/dashboard',
        destination: '/protected/dashboard',
      },
      // Add more protected routes here as needed
      // {
      //   source: '/settings',
      //   destination: '/protected/settings',
      // },
    ]
  },
};

export default nextConfig;
