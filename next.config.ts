import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portafolio",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
