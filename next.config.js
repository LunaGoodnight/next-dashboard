/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEW_YORK_API_KEY: process.env.NEW_YORK_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
