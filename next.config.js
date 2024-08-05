/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return "2";
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
