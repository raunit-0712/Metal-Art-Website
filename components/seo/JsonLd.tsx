'use client';

import React from 'react';

// Common Social Profile URLs for Aakriti Atelier
const SOCIAL_PROFILES = [
  'https://www.facebook.com/people/Aakriti-Atelier/61592053852121/',
  'https://www.instagram.com/aakriti__atelier',
  'https://www.linkedin.com/in/aakritiatelier',
];

interface BreadcrumbItem {
  name: string;
  item: string;
}

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://aakritiatelier.in/#organization',
    name: 'Aakriti Atelier',
    url: 'https://aakritiatelier.in',
    logo: 'https://aakritiatelier.in/images/logo.png',
    sameAs: SOCIAL_PROFILES,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-80804-14471',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aakritiatelier.in/#localbusiness',
    name: 'Aakriti Atelier',
    image: 'https://aakritiatelier.in/images/og-image.jpg',
    url: 'https://aakritiatelier.in',
    telephone: '+91-80804-14471',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'N/502, Veena Dynasty, Evershine City, Last stop',
      addressLocality: 'Vasai (E)',
      addressRegion: 'Maharashtra',
      postalCode: '401209',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.409166',
      longitude: '72.829791',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: SOCIAL_PROFILES,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Mumbai',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Thane',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maharashtra',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://aakritiatelier.in/#website',
    url: 'https://aakritiatelier.in',
    name: 'Aakriti Atelier',
    description: 'Premium architectural metal fabrication and fine arts studio.',
    publisher: {
      '@id': 'https://aakritiatelier.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aakritiatelier.in/projects/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbsJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbsJsonLd({ items }: BreadcrumbsJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http')
        ? item.item
        : `https://aakritiatelier.in${item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  offers?: {
    category: string;
    items: string[];
  };
}

export function ServiceJsonLd({ name, description, offers }: ServiceJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@id': 'https://aakritiatelier.in/#localbusiness',
    },
    ...(offers && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: offers.category,
        itemListElement: offers.items.map((item, idx) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item,
          },
        })),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQPageJsonLdProps {
  items: FAQItem[];
}

export function FAQPageJsonLd({ items }: FAQPageJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageJsonLdProps {
  name: string;
  description: string;
  url: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export function WebPageJsonLd({ name, description, url, type = 'WebPage' }: WebPageJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `https://aakritiatelier.in${url}#webpage`,
    url: `https://aakritiatelier.in${url}`,
    name,
    description,
    isPartOf: {
      '@id': 'https://aakritiatelier.in/#website',
    },
    about: {
      '@id': 'https://aakritiatelier.in/#organization',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
