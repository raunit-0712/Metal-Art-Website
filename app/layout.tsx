import './globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  Playfair_Display,
  Great_Vibes,
} from 'next/font/google';
import dynamic from 'next/dynamic';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from '@/components/seo/JsonLd';

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
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aakritiatelier.in'
  ),

  title: {
    default: 'Aakriti Atelier | Shaping Ideas into Reality',
    template: '%s | Aakriti Atelier',
  },

  description:
    'Premium architectural metal fabrication and fine arts studio specializing in custom metalwork, staircases, railings, lift cladding, and custom fine arts.',

  keywords: [
    'architectural metal fabrication',
    'custom metal works',
    'fine arts studio',
    'metal staircases Vasai',
    'stainless steel lift cladding',
    'decorative metal panels Mumbai',
    'custom artwork commissions',
    'pencil portrait sketches',
    'interior metal design',
    'metal fabrication Maharashtra',
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
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aakritiatelier.in/',
    siteName: 'Aakriti Atelier',
    title: 'Aakriti Atelier | Premium Metal Fabrication & Fine Arts',
    description:
      'We craft architectural metal masterpieces and timeless artistic creations that transform spaces.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aakriti Atelier — Shaping Ideas into Reality',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Aakriti Atelier | Shaping Ideas into Reality',
    description:
      'Premium architectural metal fabrication and fine arts studio.',
    images: ['/images/og-image.jpg'],
  },

  verification: {
    google: 'google-site-verification-placeholder',
  },

  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans bg-brand-background text-brand-text overflow-x-hidden">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />

        {/* <LoadingScreen /> */}

        <CustomCursor />

        <SmoothScroll>
          <Navbar />

          <main aria-label="Main content">{children}</main>

          <Footer />

          <WhatsAppButton />
        </SmoothScroll>
        <GoogleAnalytics gaId="G-JNTECK00HN" />
      </body>
    </html>
  );
}