import React from 'react';
import { notFound } from 'next/navigation';

import AppShell from '../../components/AppShell';
import { TOOL_METADATA, toolSlugs } from '../../lib/tool-metadata';
import { ToolType } from '../../types';

type PageProps = {
  params?: {
    tool?: string[];
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

const toolSlugSet = new Set<ToolType>(toolSlugs as ToolType[]);

const isToolType = (slug: string): slug is ToolType => toolSlugSet.has(slug as ToolType);

export function generateStaticParams() {
  return [
    { tool: [] },
    ...toolSlugs
      .filter((slug) => slug !== ToolType.DASHBOARD)
      .map((slug) => ({ tool: slug.split('/') }))
  ];
}

export function generateMetadata({ params }: PageProps) {
  const slug = params?.tool?.join('/') || ToolType.DASHBOARD;
  const metadata = TOOL_METADATA[slug as ToolType];

  if (!metadata) {
    return {
      title: 'Page Not Found',
      description: 'This page could not be found.'
    };
  }

  const canonicalPath = slug === ToolType.DASHBOARD ? '' : `${slug}/`;

  return {
    title: metadata.title,
    description: metadata.desc,
    keywords: metadata.keywords,
    alternates: {
      canonical: `https://quantcurb.com/${canonicalPath}`
    },
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
  const schemaData = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppShell initialTool={slug as ToolType} />
    </>
  );
}
