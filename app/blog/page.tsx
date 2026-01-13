import React from 'react';

import BlogIndex from '../../components/BlogIndex';
import { TOOL_METADATA } from '../../lib/tool-metadata';
import { ToolType } from '../../types';

export const dynamic = 'force-static';

export const metadata = {
  title: TOOL_METADATA[ToolType.BLOG_INDEX].title,
  description: TOOL_METADATA[ToolType.BLOG_INDEX].desc
};

export default function BlogIndexPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "QuantCurb Financial Blog",
    "description": "Comprehensive financial guides, calculators, and expert insights for mortgages, taxes, retirement, and wealth management.",
    "url": "https://quantcurb.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 65,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Complete Guide to Mortgage Calculator 2025",
          "url": "https://quantcurb.com/blog/mortgage-calculator-guide-2025"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
        <BlogIndex />
      </main>
    </>
  );
}
