import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

// デフォルトの構造化データ
const defaultJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "ぴあざさるうと",
  "image": "https://pi-azasalu-to.com/images/og-image.jpg",
  "description": "練馬区南大泉の美容室「ぴあざさるうと」。白髪ぼかし、ヘッドスパ、カット、カラー、パーマなど、髪と頭皮に優しい施術を心がけています。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "南大泉5-35-8",
    "addressLocality": "練馬区",
    "addressRegion": "東京都",
    "postalCode": "178-0064",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.7325",
    "longitude": "139.6167"
  },
  "url": "https://pi-azasalu-to.com",
  "telephone": "03-3978-4800",
  "priceRange": "¥¥",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "17:30"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/pi_azasalu_to/",
    "https://twitter.com/pi_azasalu_to"
  ]
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
