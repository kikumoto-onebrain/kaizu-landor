// app/sitemap.ts

import { MetadataRoute } from 'next';

const SITE_URL = 'https://kaizu.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}