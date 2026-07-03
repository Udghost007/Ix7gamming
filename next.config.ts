import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/ix7game", destination: "/ix7-game", permanent: true },
      { source: "/ix7gaming", destination: "/ix7-gaming", permanent: true },
      { source: "/ix7apk", destination: "/ix7-apk", permanent: true },
      { source: "/ix7gameapk", destination: "/ix7-game-apk", permanent: true },
      { source: "/ix7gameapkdownload", destination: "/ix7-game-apk-download", permanent: true },
      { source: "/ix7apkdownload", destination: "/ix7-apk-download", permanent: true },
    ];
  },
};

export default nextConfig;
