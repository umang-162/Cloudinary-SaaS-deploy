import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Recommended for better deployment
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
