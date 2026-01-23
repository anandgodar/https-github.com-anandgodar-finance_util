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
  description: 'QuantCurb: Professional-grade financial calculators, mortgage audits, investment projectors, and AI-driven market sentiment.',
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
    'financial planning tools'
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
    follow: true
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
