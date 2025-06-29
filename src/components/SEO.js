import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'ぴあざさるうと | 練馬区南大泉の美容室',
  description = '練馬区南大泉の美容室「ぴあざさるうと」です。白髪ぼかし、ヘッドスパ、カラー、パーマ、トリートメントなど、お客様一人ひとりに合わせた施術を心がけています。',
  keywords = '美容室,練馬区,白髪ぼかし,ヘッドスパ,カラー,パーマ,トリートメント',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonical = '',
  jsonLd = null
}) => {
  const siteUrl = 'https://pi-azasalu-to.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* 基本メタタグ */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* OGP */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="ぴあざさるうと" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* セキュリティ強化メタタグ */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="Referrer-Policy" content="no-referrer" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
    </Helmet>
  );
};

export default SEO; 