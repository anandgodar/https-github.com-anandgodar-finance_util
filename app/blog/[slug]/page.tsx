import React from 'react';
import { notFound } from 'next/navigation';

import { blogContent, blogSlugs } from '../../../lib/blog-content';

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
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Blog</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{entry.title}</h1>
        <p className="text-base text-slate-600">{entry.description}</p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <ArticleComponent />
      </section>
    </main>
  );
}
