import React from 'react';
import { notFound } from 'next/navigation';

import { blogContent, blogSlugs } from '../../../lib/blog-content';
import SiteShell from '../../../components/SiteShell';
import { ToolType } from '../../../types';

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  const entry = blogContent[params.slug];

  if (!entry) {
    return {
      title: 'Blog Post Not Found',
      description: 'This article could not be found.'
    };
  }

  return {
    title: entry.title,
    description: entry.description
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const entry = blogContent[params.slug];

  if (!entry) {
    notFound();
  }

  const ArticleComponent = entry.component;

  return (
    <SiteShell activeTool={ToolType.BLOG_INDEX}>
      <article className="mx-auto w-full max-w-4xl">
        <ArticleComponent />
      </article>
    </SiteShell>
  );
}
