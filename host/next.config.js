// Importa dotenv para cargar las variables de entorno
require('dotenv').config();

const app1Url = process.env.APP1_URL || "http://localhost:3001";
const app2Url = process.env.APP2_URL || "http://localhost:3002";
const app3Url = process.env.APP3_URL || "http://localhost:3003";

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
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          app1: `${app1Url}/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          app2: `${app2Url}/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          app3: `${app3Url}/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
