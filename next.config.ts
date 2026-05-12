import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/northside-dental-demo",
  images: { unoptimized: true },
};

export default nextConfig;
