# Herensys

A modern, high-performance web application for global recruitment, employer of record (EOR) services, and international talent management. Built with Next.js 15 App Router, featuring ISR data fetching, comprehensive SEO optimization, and full accessibility compliance.

## Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 8.x or higher (recommended)
- **Git**

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd herensys
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create `.env.local` file:

   ```bash
   cp .env.example .env.local
   ```

   Update with your credentials:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_firebase_sender_id
   NEXT_PUBLIC_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_MEASUREMENT_ID=your_firebase_measurement_id

   # Application URLs
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_API_URL=your_api_endpoint
   ```

4. **Generate optimized images** (required before first run)
   ```bash
   pnpm run generate-optimized-manifest
   ```

## Development

**Start development server:**

```bash
pnpm dev
```

App runs at [http://localhost:3000](http://localhost:3000)

**Available scripts:**

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm generate-optimized-manifest` - Generate WebP images and manifest

## Build & Deployment

**Build for production:**

```bash
pnpm run generate-optimized-manifest
pnpm build
```

**Deploy to Vercel** (recommended):

- Connect repository to Vercel
- Set environment variables in dashboard
- Auto-deploy on push to main

**Server requirements:**

- Node.js 20.x+
- 2GB RAM minimum (4GB recommended)
- 1GB storage for dependencies

## Key Features

### SEO & Performance

- ISR (Incremental Static Regeneration) with TanStack Query hydration
- Complete OpenGraph and Twitter Card metadata
- Dynamic XML sitemap with all routes
- Structured data (Organization, WebSite, BreadcrumbList)
- Next.js font optimization (`next/font/google`)
- Optimized images (WebP/AVIF with Sharp)

### Accessibility

- WCAG 2.1 AA compliant
- Full keyboard navigation
- ARIA attributes and labels
- Focus management in modals
- Skip navigation links
- Screen reader announcements
- Form validation with accessible errors

### Architecture

- Server Components with client hydration
- ISR with configurable revalidation (1800-3600s)
- Dynamic routes with static generation
- API routes for sitemap and contact
- SCSS modules for component styling
- TypeScript strict mode

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [pages]/           # Route pages with metadata
│   ├── api/               # API routes (sitemap, email)
│   └── layout.tsx         # Root layout with metadata
├── components/            # React components
├── pages/                 # Page-level components
├── data/                  # JSON data files
├── lib/                   # Utilities and hooks
│   ├── hooks/             # Custom React hooks
│   ├── seo/               # SEO utilities
│   └── utils/             # Helper functions
├── styles/                # SCSS modules
└── types/                 # TypeScript definitions
```

## About

Herensys provides:

- **Global Recruiting** - Find and hire top talent worldwide
- **Employer of Record (EOR)** - Compliant international employment solutions
- **Business Process Outsourcing (BPO)** - Scalable outsourcing services
- **HR Consulting** - Expert HR advisory and implementation
- **Global Payroll** - Streamlined international payroll management
- **Visas & Work Permits** - Immigration support and compliance
- **Pool of Candidates** - Pre-vetted professional talent database
- **Job Board** - Active job postings with CV submission

## Tech Stack

- **Next.js** 15.5.5 (App Router with ISR)
- **React** 19.2.3
- **TypeScript** 5.7.3
- **SCSS Modules** - Component-scoped styling
- **TanStack Query** 5.66.0 - Client-side state management
- **Sharp** 0.34.4 - Image optimization (WebP/AVIF)
- **Swiper** 12.0.3 - Touch sliders and carousels
- **react-phone-input-2** - International phone input
- **Firebase** - Backend services

## License

Proprietary - All rights reserved

## Support

For questions or issues, contact the development team.
