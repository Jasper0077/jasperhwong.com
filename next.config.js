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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.cloudflarestorage.com",
        port: "",
        pathname: "*"
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};
