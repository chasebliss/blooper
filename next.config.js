/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en-US', 'es', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
};
