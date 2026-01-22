// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180, // 3 minutes for generating 32+ country pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // ✅ Use modern formats for better performance
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line to ignore ESLint errors in production build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript type errors during builds
  },
  compress: true, // ✅ Enable Gzip/Brotli compression for smaller file sizes
  experimental: {
    optimizeCss: true, // ✅ Reduce render-blocking CSS
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap', // Default sitemap (RO)
      },
      // {
      //   source: '/xxxxxxxx.html',
      //   destination: '/xxxxxxxx.html',
      //   locale: false,
      // },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
        locale: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // ✅ Prevent Clickjacking
          { key: 'X-XSS-Protection', value: '1; mode=block' }, // ✅ Prevent XSS attacks
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // ✅ Prevent MIME sniffing
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // ✅ Improve security
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          }, // ✅ Restrict sensitive APIs
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
// export default withNextIntl(nextConfig);
