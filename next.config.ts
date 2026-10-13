import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Source result images are AVIF; serve AVIF to browsers that support it, WebP otherwise.
  images: { formats: ["image/avif", "image/webp"] },
  // Keep file tracing scoped to this repo (a stray lockfile sits in the home directory).
  outputFileTracingRoot: path.join(__dirname),
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
