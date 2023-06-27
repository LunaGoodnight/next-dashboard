/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEW_YORK_API_KEY: process.env.NEW_YORK_API_KEY,
  },
};

module.exports = nextConfig;
