import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genroar.example.com';
  
  // Define all routes
  const routes = [
    '',
    '/about',
    '/services',
    '/services/business-planning',
    '/services/product-development',
    '/services/web-mobile-development',
    '/services/marketing',
    '/services/ai-automation',
    '/services/security-testing',
    '/portfolio',
    '/process',
    '/testimonials',
    '/blog',
    '/contact',
    '/careers',
    '/faq',
    '/terms',
    '/privacy',
  ];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.7,
  }));

  return staticPages;
}

