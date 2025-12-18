import { NextResponse } from 'next/server';

const BASE_URL = 'https://herensys.com';

const pages = [
  { path: '', priority: '1.0' },
  { path: '/global-recruiting', priority: '0.9' },
  { path: '/employer-of-record', priority: '0.9' },
  { path: '/bpo', priority: '0.9' },
  { path: '/hr-consulting', priority: '0.8' },
  { path: '/global-payroll', priority: '0.8' },
  { path: '/visas-work-permits', priority: '0.8' },
  { path: '/countries', priority: '0.8' },
  { path: '/pool-of-candidates', priority: '0.7' },
  { path: '/job-board', priority: '0.7' },
  { path: '/about-us', priority: '0.7' },
  { path: '/blog', priority: '0.7' },
];

export async function GET() {
  const baseUrl = BASE_URL;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        page => `
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page.priority}</priority>
      </url>`,
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
