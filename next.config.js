/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "st.depositphotos.com" },
      { hostname: "cdn.fakercloud.com" },
    ],
  },
};

module.exports = nextConfig;
