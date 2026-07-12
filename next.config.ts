import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // The project lives on an exFAT drive where readlink fails with EISDIR;
  // disabling symlink resolution keeps webpack off that code path.
  webpack: (config) => {
    config.resolve.symlinks = false;
    // exFAT also breaks webpack's snapshot/pack cache (readlink EISDIR)
    config.cache = false;
    config.snapshot = { managedPaths: [], immutablePaths: [] };
    return config;
  },
};

export default nextConfig;
