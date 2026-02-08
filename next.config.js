/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f85w27gq4v.ufs.sh",
      },
      // Add any other domains you need
    ],
  },
};

module.exports = nextConfig;
