// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
import '../styles/reset.css';
import './globals.css';
import HeadingWrapper from '@/components/header/HeadingWrapper';
// import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import QueryProvider from '@/components/helper/QueryProvider';
import MetaHead from '@/app/MetaHead';
import { generateStructuredData } from '@/lib/seo/generateStructuredData';

// import { Inter, Manrope } from 'next/font/google';
//
// const inter = Inter({ subsets: ['latin'], display: 'swap' });
// const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

const baseUrl = 'https://herensys.com';
const structuredData = generateStructuredData(baseUrl);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Herensys',
    template: '%s | Herensys',
  },
  description:
    'Expand your business globally with Herensys. We provide EOR, BPO, recruitment, and HR consulting services across Eastern Europe, Balkans, and North Africa. Build loyal local teams without the complexity.',
  keywords: [
    'EOR',
    'Employer of Record',
    'BPO',
    'Business Process Outsourcing',
    'global recruitment',
    'international hiring',
    'HR consulting',
    'global payroll',
    'work permits',
    'visas',
    'Eastern Europe recruitment',
    'Balkans hiring',
    'North Africa talent',
    'remote teams',
    'international employment',
    'global expansion',
    'compliance',
    'Herensys',
  ],
  authors: [{ name: 'Herensys', url: baseUrl }],
  creator: 'Herensys',
  publisher: 'Herensys',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Herensys - Global Employer of Record & Recruitment Services',
    description:
      'Expand your business globally with Herensys. We provide EOR, BPO, recruitment, and HR consulting services across Eastern Europe, Balkans, and North Africa.',
    url: baseUrl,
    siteName: 'Herensys',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/images/meta-logo.jpg', //TODO
        width: 1200,
        height: 630,
        alt: 'Herensys - Global Employer of Record & Recruitment Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herensys - Global Employer of Record & Recruitment Services',
    description:
      'Expand your business globally with Herensys. We provide EOR, BPO, recruitment, and HR consulting services across Eastern Europe, Balkans, and North Africa.',
    images: ['/assets/images/meta-logo.jpg'], //TODO
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', //TODO
    apple: '/apple-touch-icon.png', //TODO
  },
  manifest: '/site.webmanifest',
  other: { structuredData: JSON.stringify(structuredData) },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaHead />
      <body
      >
        <QueryProvider>
          <HeadingWrapper />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
