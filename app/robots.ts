// app/robots.ts

import { MetadataRoute } from 'next';

const SITE_URL = 'https://kaizu.com.br';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}