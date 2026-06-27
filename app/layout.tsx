import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { CustomCursor } from '@/components/shared/CustomCursor';
import { LoadingScreen } from '@/components/shared/LoadingScreen';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

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

export const metadata: Metadata = {
  title: {
    default: 'Artisan Metal & Arts | Where Engineering Meets Art',
    template: '%s | Artisan Metal & Arts',
  },
  description:
    'Premium architectural steel fabrication and fine arts studio. We craft architectural metal masterpieces and timeless artistic creations. Transforming spaces through metal craftsmanship and artistic creativity.',
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
  authors: [{ name: 'Artisan Metal & Arts' }],
  creator: 'Artisan Metal & Arts',
  publisher: 'Artisan Metal & Arts',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artisanmetalarts.com',
    siteName: 'Artisan Metal & Arts',
    title: 'Artisan Metal & Arts | Where Engineering Meets Art',
    description:
      'Premium architectural steel fabrication and fine arts studio. We craft architectural metal masterpieces and timeless artistic creations.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Artisan Metal & Arts - Where Engineering Meets Art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artisan Metal & Arts | Where Engineering Meets Art',
    description:
      'Premium architectural steel fabrication and fine arts studio.',
    images: ['/images/og-image.jpg'],
    creator: '@artisanmetalarts',
  },
  alternates: {
    canonical: 'https://artisanmetalarts.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1C1C1C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Artisan Metal & Arts',
              alternateName: 'Where Engineering Meets Art',
              url: 'https://artisanmetalarts.com',
              logo: 'https://artisanmetalarts.com/logo.png',
              description:
                'Premium architectural steel fabrication and fine arts studio.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Craftsmanship Lane',
                addressLocality: 'Design District',
                addressRegion: 'CA',
                postalCode: '90210',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'sales',
                email: 'hello@artisanmetalarts.com',
              },
              sameAs: [
                'https://facebook.com/artisanmetalarts',
                'https://instagram.com/artisanmetalarts',
                'https://linkedin.com/company/artisanmetalarts',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <SmoothScroll>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
