/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aktivera React strict mode
  reactStrictMode: true,

  // Optimeringar för Netlify-deploy
  output: "standalone",
};

module.exports = nextConfig;