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
      canonical: `/blog/${params.slug}/`
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      type: 'article',
      url: `https://quantcurb.com/blog/${params.slug}/`,
      siteName: 'QuantCurb',
      locale: 'en_US',
      images: [
        {
          url: 'https://quantcurb.com/og-image.png',
          width: 1200,
          height: 630,
          alt: entry.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
      images: ['https://quantcurb.com/og-image.png']
    }
  };
}

function generateBlogPostSchema(slug: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: `https://quantcurb.com/blog/${slug}/`,
    datePublished: '2025-01-15T08:00:00+00:00',
    dateModified: '2025-01-26T08:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://quantcurb.com/og-image.png',
        width: 1200,
        height: 630
      }
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://quantcurb.com/og-image.png',
      width: 1200,
      height: 630
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://quantcurb.com/blog/${slug}/`
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'QuantCurb Financial Planning Blog',
      url: 'https://quantcurb.com/blog/'
    }
  };
}

function generateBreadcrumbSchema(slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://quantcurb.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://quantcurb.com/blog/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://quantcurb.com/blog/${slug}/`
      }
    ]
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
