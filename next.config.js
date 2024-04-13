/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader"
      }
    });
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com", "avatars.githubusercontent.com"]
  }
};
