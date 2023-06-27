/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: true,
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
};

module.exports = nextConfig;
