/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  scope: "/app",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
