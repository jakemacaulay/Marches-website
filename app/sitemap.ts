import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marchyscustomdecks.ca'; // Updated to final domain
  const lastModified = new Date();

  const routes = ['', '/about', '/contact', '/projects', '/reviews'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
