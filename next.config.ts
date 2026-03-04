import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages compatibility settings can go here if needed.
};

// Setup Cloudflare development platform if needed in dev environment
if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().catch(console.error);
}

export default withNextIntl(nextConfig);
