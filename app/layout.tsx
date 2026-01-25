import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#4f46e5',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://quantcurb.com'),
  title: {
    default: 'QuantCurb - Institutional Financial Intelligence & Wealth Modeling',
    template: '%s | QuantCurb'
  },
  description: 'QuantCurb: Professional-grade financial calculators, mortgage audits, investment projectors, and AI-driven market sentiment. Free calculators for salary, mortgage, FIRE, retirement, and tax planning.',
  keywords: [
    'financial intelligence',
    'mortgage calculator',
    'emi calculator',
    'salary calculator',
    'investment calculator',
    'retirement planning',
    'fire calculator',
    'net worth tracker',
    'tax calculator',
    'financial planning tools',
    'quantitative finance',
    'wealth management',
    'take home pay calculator',
    'compound interest calculator',
    'debt payoff calculator'
  ],
  alternates: {
    canonical: '/'
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://quantcurb.com/',
    title: 'QuantCurb - High-Fidelity Financial Intelligence',
    description: 'Professional-grade wealth management with AI-driven calculators for EMI, Mortgages, and Investments.',
    siteName: 'QuantCurb',
    locale: 'en_US',
    images: [
      {
        url: 'https://quantcurb.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantCurb Financial Intelligence Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quantcurb',
    creator: '@quantcurb',
    title: 'QuantCurb - Institutional Financial Intelligence',
    description: 'Professional-grade wealth management with AI-driven calculators for EMI, Mortgages, and Investments.',
    images: ['https://quantcurb.com/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // Add your Bing Webmaster verification code here
    // other: { 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE' }
  },
  category: 'finance',
  creator: 'QuantCurb',
  publisher: 'QuantCurb',
  authors: [{ name: 'QuantCurb', url: 'https://quantcurb.com' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

// Organization Schema for rich search results
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuantCurb',
  url: 'https://quantcurb.com',
  logo: 'https://quantcurb.com/og-image.png',
  description: 'Professional-grade financial calculators and AI-driven market intelligence for wealth management.',
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/quantcurb',
    'https://linkedin.com/company/quantcurb',
    'https://github.com/quantcurb'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://quantcurb.com/contact-us/'
  }
};

// WebSite Schema for sitelinks searchbox
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QuantCurb',
  url: 'https://quantcurb.com',
  description: 'Professional-grade financial calculators, mortgage audits, investment projectors, and AI-driven market sentiment.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://quantcurb.com/blog/?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Canonical and language hints */}
        <link rel="alternate" hrefLang="en" href="https://quantcurb.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://quantcurb.com/" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* WebSite Schema for sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WSKZ5JNETS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WSKZ5JNETS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
