import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || (isProd ? "/portfolio" : ""),
  assetPrefix: process.env.PAGES_BASE_PATH || (isProd ? "/portfolio" : ""),
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "192.168.0.8",
    "192.168.*.*",
    "localhost",
    "127.0.0.1",
  ],
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
