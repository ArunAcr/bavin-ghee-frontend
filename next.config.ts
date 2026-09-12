import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bavinghee.com" }],
        destination: "https://bavinghee.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
