'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { blogContent } from '../../../lib/blog-content';
import SiteShell from '../../../components/SiteShell';
import { ToolType } from '../../../types';

type BlogPostClientProps = {
  slug: string;
};

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const router = useRouter();
  const entry = blogContent[slug];

  if (!entry) {
    return null;
  }

  const ArticleComponent = entry.component as React.ComponentType<{ onNavigate?: (tool: ToolType) => void }>;

  const handleNavigate = (tool: ToolType) => {
    // Handle blog posts - extract slug from ToolType value
    if (tool.toString().startsWith('blog/')) {
      const blogSlug = tool.toString().replace('blog/', '');
      router.push(`/blog/${blogSlug}`);
      return;
    }
    
    // Handle regular tools
    const path = tool === ToolType.DASHBOARD ? '/' : `/${tool}`;
    router.push(path);
  };

  return (
    <SiteShell activeTool={ToolType.BLOG_INDEX}>
      <article className="w-full max-w-4xl">
        <ArticleComponent onNavigate={handleNavigate} />
      </article>
    </SiteShell>
  );
}
