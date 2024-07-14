/** @type {import('next').NextConfig} */require('dotenv').config();
require('dotenv').config();

const host = process.env.HOST_URL || "http://localhost:3000";

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          host: `host@${host}/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./App": "./pages/index.tsx",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
