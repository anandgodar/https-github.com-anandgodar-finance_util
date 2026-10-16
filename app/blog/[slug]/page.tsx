import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { blogSlugs } from '../../../lib/blog-metadata';
import { blogMetadata } from '../../../lib/blog-metadata';
import BlogPostClient from './BlogPostClient';
import contentDates from '../../../lib/content-dates.json';
import { fitTitle, clampDescription } from '../../../lib/seo';

// Real dates from git history (scripts/generate-content-dates.cjs), not the build date.
const postDates = contentDates as Record<string, { published: string; modified: string }>;

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = blogMetadata[params.slug];

  if (!entry) {
    return {
      title: 'Blog Post Not Found',
      description: 'This article could not be found.'
    };
  }

  return {
    title: fitTitle(entry.title),
    description: clampDescription(entry.description),
    alternates: {
      canonical: `https://quantcurb.com/blog/${params.slug}/`
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `https://quantcurb.com/blog/${params.slug}/`,
      siteName: 'QuantCurb',
      type: 'article',
      ...(postDates[params.slug] && {
        publishedTime: postDates[params.slug].published,
        modifiedTime: postDates[params.slug].modified
      }),
      images: [{
        url: 'https://quantcurb.com/og-image.png',
        width: 1200,
        height: 630,
        alt: entry.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
      images: ['https://quantcurb.com/og-image.png']
    }
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const entry = blogMetadata[params.slug];

  if (!entry) {
    notFound();
  }

  const canonicalUrl = `https://quantcurb.com/blog/${params.slug}/`;

  // Article schema for blog posts
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": entry.title,
    "description": entry.description,
    "url": canonicalUrl,
    ...(postDates[params.slug] && {
      "datePublished": postDates[params.slug].published,
      "dateModified": postDates[params.slug].modified
    }),
    "author": {
      "@type": "Organization",
      "name": "QuantCurb",
      "url": "https://quantcurb.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuantCurb",
      "url": "https://quantcurb.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quantcurb.com/logo.png"
      }
    },
    "image": "https://quantcurb.com/og-image.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quantcurb.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://quantcurb.com/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": entry.title.split(' | ')[0].split(' - ')[0],
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient slug={params.slug} />
    </>
  );
}
