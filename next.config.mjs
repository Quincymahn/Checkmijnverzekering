// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "95.211.44.132", // <-- Uw publieke server IP-adres
        port: "8091", // <-- De publieke poort van uw Strapi container
        pathname: "/uploads/**", // Sta alle afbeeldingen uit de uploads-map toe
      },
    ],
  },

  // 2. Configuratie voor Environment Variabelen (Optioneel maar goede praktijk)
  //    Dit zorgt ervoor dat uw .env.local variabelen correct worden gelezen.
  //    Hoewel Next.js dit vaak automatisch doet, kan het expliciet definiëren
  //    problemen voorkomen.
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    STRAPI_API_URL_INTERNAL: process.env.STRAPI_API_URL_INTERNAL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
