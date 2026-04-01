import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marchysdecks.ca'; // We'll use a placeholder URL for now, you can update this when you have the final domain.
  const lastModified = new Date();

  const routes = ['', '/about', '/contact', '/projects', '/reviews'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
