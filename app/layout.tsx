import './globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  Playfair_Display,
  Great_Vibes,
} from 'next/font/google';
import dynamic from 'next/dynamic';

import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

const CustomCursor = dynamic(
  () => import('@/components/shared/CustomCursor'),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () => import('@/components/shared/SmoothScroll'),
  { ssr: false }
);

const WhatsAppButton = dynamic(
  () => import('@/components/shared/WhatsAppButton'),
  { ssr: false }
);

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aakritiatelier.com'
  ),

  title: {
    default: 'Aakriti Atelier | Shaping Ideas into Reality',
    template: '%s | Aakriti Atelier',
  },

  description:
    'Premium architectural steel fabrication and fine arts studio. We craft architectural metal masterpieces and timeless artistic creations.',

  keywords: [
    'architectural steel',
    'metal fabrication',
    'fine arts',
    'custom metalwork',
    'steel staircases',
    'metal railings',
    'art gallery',
    'portrait sketches',
    'metal cladding',
    'creative artwork',
  ],

  authors: [{ name: 'Aakriti Atelier' }],

  creator: 'Aakriti Atelier',
  publisher: 'Aakriti Atelier',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aakritiatelier.com',
    siteName: 'Aakriti Atelier',
    title: 'Aakriti Atelier | Shaping Ideas into Reality',
    description:
      'Premium architectural steel fabrication and fine arts studio.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aakriti Atelier — Premium Steel Fabrication & Fine Arts',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Aakriti Atelier | Shaping Ideas into Reality',
    description:
      'Premium architectural steel fabrication and fine arts studio.',
    images: ['/images/og-image.jpg'],
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aakritiatelier.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aakritiatelier.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aakriti Atelier',
    description:
      'Premium architectural steel fabrication and fine arts studio specializing in custom metalwork, staircases, railings, and artistic creations.',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/og-image.jpg`,
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Steel Fabrication & Fine Arts Services',
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans bg-brand-background text-brand-text overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* <LoadingScreen /> */}

        <CustomCursor />

        <SmoothScroll>
          <Navbar />

          <main aria-label="Main content">{children}</main>

          <Footer />

          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}