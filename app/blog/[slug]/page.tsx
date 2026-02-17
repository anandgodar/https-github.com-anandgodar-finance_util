import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { blogSlugs } from '../../../lib/blog-metadata';
import { blogMetadata } from '../../../lib/blog-metadata';
import BlogPostClient from './BlogPostClient';

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
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: `https://quantcurb.com/blog/${params.slug}/`
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `https://quantcurb.com/blog/${params.slug}/`,
      siteName: 'QuantCurb',
      type: 'article',
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

  const blogPostSchema = generateBlogPostSchema(params.slug, entry.title, entry.description);
  const breadcrumbSchema = generateBreadcrumbSchema(params.slug, entry.title);

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
