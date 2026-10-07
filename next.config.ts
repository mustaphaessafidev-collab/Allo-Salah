import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  output: "export",

  basePath: "/Allo-Salah",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;