/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    transpilePackages: ["@papad/core"],
  },
};

export default nextConfig;
