import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import dynamic from 'next/dynamic';

import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

const CustomCursor = dynamic(() => import('@/components/shared/CustomCursor'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/shared/SmoothScroll'), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/shared/WhatsAppButton'), { ssr: false });

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
  metadataBase: new URL('http://localhost:3000'),

  title: {
    default: 'Aakriti Atelier | Shaping Ideas into Reality',
    template: '%s | Aakriti Atelier ',
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
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Aakriti Atelier',
    title: 'Aakriti Atelier | Shaping Ideas into Reality',
    description:
      'Premium architectural steel fabrication and fine arts studio.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aakriti Atelier logo',
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
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-brand-background text-brand-text overflow-x-hidden">
        {/* <LoadingScreen /> */}
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}