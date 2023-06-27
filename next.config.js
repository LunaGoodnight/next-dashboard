/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
};

module.exports = nextConfig;
