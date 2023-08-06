/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
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
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "repository-images.githubusercontent.com"
    ]
  },
  i18n: {
    locales: ["en", "ch"],
    defaultLocale: "en"
  }
};
