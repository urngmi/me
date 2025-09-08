/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bhor.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bhor.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
