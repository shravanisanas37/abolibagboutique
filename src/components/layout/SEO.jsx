import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({
  title = 'Aboli Bag Boutique | Handcrafted Bags & Jewellery in Satara',
  description = 'Handcrafted clutches, potli bags, and designer jewellery in Satara. Browse online, verify in-store, buy with confidence. Visit Moti Chowk today.',
  canonicalUrl = 'https://aboli.in',
  imageUrl = 'https://aboli.in/logo.jpg',
  type = 'website',
  schema
}) {
  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aboli Bag Boutique',
    image: 'https://aboli.in/logo.jpg',
    telephone: '+919082140384',
    url: 'https://aboli.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop no 5&6, Laxmi Vishnu Nivas Bldg, Beside Narkar Jewellers, opp City Centre, Moti Chowk',
      addressLocality: 'Satara',
      postalCode: '415002',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.6805,
      longitude: 73.9930
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
          'Saturday',
          'Sunday'
        ],
        opens: '10:00',
        closes: '21:00'
      }
    ],
    priceRange: '₹₹'
  };

  const currentSchema = schema || defaultLocalBusinessSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(currentSchema)}
      </script>
    </Helmet>
  );
}
