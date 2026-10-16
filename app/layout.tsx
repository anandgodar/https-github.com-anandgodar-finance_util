import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

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
    default: 'QuantCurb - Free Financial Calculators for Pay, Mortgage & Tax',
    template: '%s | QuantCurb'
  },
  description: 'QuantCurb: Free financial calculators, mortgage audits, investment projectors, and AI-driven market sentiment. Free calculators for salary, mortgage, FIRE, retirement, and tax planning.',
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
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://quantcurb.com/',
    title: 'QuantCurb - High-Fidelity Financial Intelligence',
    description: 'Free calculators for take-home pay, mortgages, taxes, and investments.',
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
    title: 'QuantCurb - Free Financial Calculators',
    description: 'Free calculators for take-home pay, mortgages, taxes, and investments.',
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
  description: 'Free financial calculators for take-home pay, mortgages, taxes, and investments.',
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

// WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QuantCurb',
  url: 'https://quantcurb.com',
  description: 'Free financial calculators, mortgage audits, investment projectors, and AI-driven market sentiment.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Google AdSense - plain <script> in <head> so it is present in the static HTML for site verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3959097578570952"
          crossOrigin="anonymous"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
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
