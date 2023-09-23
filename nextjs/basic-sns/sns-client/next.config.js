/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com"
      },
      {
        hostname: "localhost"
      }
    ]
  }
};

module.exports = nextConfig;
