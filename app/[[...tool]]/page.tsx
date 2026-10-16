import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import AppShell from '../../components/AppShell';
import { TOOL_METADATA, toolSlugs } from '../../lib/tool-metadata';
import { ToolType } from '../../types';
import contentDates from '../../lib/content-dates.json';
import { fitTitle, clampDescription } from '../../lib/seo';

type PageProps = {
  params?: {
    tool?: string[];
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

const toolSlugSet = new Set<ToolType>(toolSlugs as ToolType[]);

const isToolType = (slug: string): slug is ToolType => toolSlugSet.has(slug as ToolType);

const postDates = contentDates as Record<string, { published: string; modified: string }>;

// Pages served by this route that are articles, hubs or company pages rather
// than interactive calculators. Only calculators get WebApplication markup.
// 'none': the page component already emits its own CollectionPage + ItemList.
const pageSchemaType: Partial<Record<ToolType, string>> = {
  [ToolType.ABOUT]: 'AboutPage',
  [ToolType.CONTACT]: 'ContactPage',
  [ToolType.PRIVACY]: 'WebPage',
  [ToolType.DISCLAIMER]: 'WebPage',
  [ToolType.METHODOLOGY]: 'WebPage',
  [ToolType.SITEMAP]: 'WebPage',
  [ToolType.FAQ]: 'WebPage',
  [ToolType.MARKET_INSIGHTS]: 'WebPage',
  [ToolType.INVESTMENT_ACADEMY]: 'CollectionPage',
  [ToolType.VALUATION_ACADEMY]: 'CollectionPage',
  [ToolType.TAX_CALCULATORS_HUB]: 'none',
  [ToolType.RETIREMENT_CALCULATORS_HUB]: 'none',
  [ToolType.MORTGAGE_CALCULATORS_HUB]: 'none',
  [ToolType.INVESTMENT_CALCULATORS_HUB]: 'none',
  [ToolType.MORTGAGE_CALCULATOR_COMPARISON]: 'Article',
};

const getSchemaType = (slug: string) =>
  slug.startsWith('academy/') ? 'Article' : pageSchemaType[slug as ToolType] ?? 'WebApplication';

export function generateStaticParams() {
  return [
    { tool: [] },
    ...toolSlugs
      .filter((slug) => slug !== ToolType.DASHBOARD)
      .map((slug) => ({ tool: slug.split('/') }))
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params?.tool?.join('/') || ToolType.DASHBOARD;
  const metadata = TOOL_METADATA[slug as ToolType];

  if (!metadata) {
    return {
      title: 'Page Not Found',
      description: 'This page could not be found.'
    };
  }

  const canonicalPath = slug === ToolType.DASHBOARD ? '' : `${slug}/`;
  // AI-generated, client-only content: keep it out of the index (thin /
  // unreviewed auto-generated text is a common AdSense rejection reason).
  const noIndex = slug === ToolType.MARKET_INSIGHTS;

  return {
    title: fitTitle(metadata.title),
    description: clampDescription(metadata.desc),
    keywords: metadata.keywords,
    alternates: {
      canonical: `https://quantcurb.com/${canonicalPath}`
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: metadata.title,
      description: metadata.desc,
      url: `https://quantcurb.com/${canonicalPath}`,
      siteName: 'QuantCurb',
      type: slug === ToolType.DASHBOARD ? 'website' : 'article',
      images: [{
        url: 'https://quantcurb.com/og-image.png',
        width: 1200,
        height: 630,
        alt: metadata.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.desc,
      images: ['https://quantcurb.com/og-image.png']
    }
  };
}

export default function ToolPage({ params }: PageProps) {
  const slug = params?.tool?.join('/') || ToolType.DASHBOARD;

  if (!isToolType(slug)) {
    notFound();
  }

  const metadata = TOOL_METADATA[slug];
  const canonicalUrl = `https://quantcurb.com/${slug === ToolType.DASHBOARD ? '' : slug + '/'}`;

  const schemaType = getSchemaType(slug);
  const publisher = {
    "@type": "Organization",
    "name": "QuantCurb",
    "url": "https://quantcurb.com",
    "logo": { "@type": "ImageObject", "url": "https://quantcurb.com/og-image.png" }
  };

  // The homepage is described by the WebSite/Organization schema in app/layout.tsx.
  const pageSchema = slug === ToolType.DASHBOARD || schemaType === 'none'
    ? null
    : schemaType === 'WebApplication'
      ? {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": metadata.title,
          "description": metadata.desc,
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "url": canonicalUrl,
          "author": {
            "@type": "Organization",
            "name": "QuantCurb",
            "url": "https://quantcurb.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "isAccessibleForFree": true,
          "browserRequirements": "Requires JavaScript"
        }
      : schemaType === 'Article'
        ? {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": metadata.title,
            "description": metadata.desc,
            "url": canonicalUrl,
            "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
            "image": "https://quantcurb.com/og-image.png",
            "author": { "@type": "Organization", "name": "QuantCurb", "url": "https://quantcurb.com" },
            "publisher": publisher,
            ...(postDates[slug] && {
              "datePublished": postDates[slug].published,
              "dateModified": postDates[slug].modified
            })
          }
        : {
            "@context": "https://schema.org",
            "@type": schemaType,
            "name": metadata.title,
            "description": metadata.desc,
            "url": canonicalUrl,
            "publisher": publisher
          };

  // Breadcrumb schema
  const breadcrumbItems = slug === ToolType.DASHBOARD
    ? null
    : [
        { name: 'Home', url: 'https://quantcurb.com/' },
        { name: metadata.title.split(' | ')[0].split(' - ')[0], url: canonicalUrl }
      ];

  const breadcrumbSchema = breadcrumbItems ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  return (
    <>
      {pageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <AppShell initialTool={slug as ToolType} />
    </>
  );
}
