import { NextResponse } from 'next/server';
import countriesData from '@/data/countries.json';

const BASE_URL = 'https://herensys.com';

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/global-recruiting', priority: '0.9', changefreq: 'weekly' },
  { path: '/employer-of-record', priority: '0.9', changefreq: 'weekly' },
  { path: '/bpo', priority: '0.9', changefreq: 'weekly' },
  { path: '/hr-consulting', priority: '0.8', changefreq: 'weekly' },
  { path: '/global-payroll', priority: '0.8', changefreq: 'weekly' },
  { path: '/visas-work-permits', priority: '0.8', changefreq: 'weekly' },
  { path: '/countries', priority: '0.8', changefreq: 'weekly' },
  { path: '/pool-of-candidates', priority: '0.7', changefreq: 'daily' },
  { path: '/job-board', priority: '0.7', changefreq: 'daily' },
  { path: '/about-us', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'daily' },
];

const regions = ['balkans', 'eastern-europe', 'north-africa'];

async function fetchDynamicRoutes() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  try {
    const [blogsRes, candidatesRes] = await Promise.all([
      fetch(`${apiUrl}/blogs`, { next: { revalidate: 3600 } }),
      fetch(`${apiUrl}/candidates`, { next: { revalidate: 3600 } }),
    ]);

    const blogs = blogsRes.ok ? await blogsRes.json() : [];
    const candidates = candidatesRes.ok ? await candidatesRes.json() : [];

    return { blogs, candidates };
  } catch {
    return { blogs: [], candidates: [] };
  }
}

export async function GET() {
  const baseUrl = BASE_URL;
  const { blogs, candidates } = await fetchDynamicRoutes();

  // Generate regional country pages
  const regionUrls = regions
    .map(
      region => `
    <url>
      <loc>${baseUrl}/countries/${region}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`,
    )
    .join('');

  // Generate individual country pages
  const countryUrls = countriesData.countriesData
    .map(
      country => `
    <url>
      <loc>${baseUrl}/countries/${country.region}/${country.name.toLowerCase().replace(/\s+/g, '-')}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`,
    )
    .join('');

  // Generate blog post pages
  const blogUrls = blogs
    .map(
      (blog: any) => `
    <url>
      <loc>${baseUrl}/blog/${blog.id}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`,
    )
    .join('');

  // Generate candidate profile pages
  const candidateUrls = candidates
    .map(
      (candidate: any) => `
    <url>
      <loc>${baseUrl}/pool-of-candidates/${candidate.id}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>`,
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        page => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`,
      )
      .join('')}${regionUrls}${countryUrls}${blogUrls}${candidateUrls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
