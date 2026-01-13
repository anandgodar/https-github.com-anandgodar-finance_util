import React from 'react';

import ArticleOne from '../components/blog/ArticleOne';
import ArticleTwo from '../components/blog/ArticleTwo';

export type BlogContentEntry = {
  title: string;
  description: string;
  component: React.ComponentType;
};

export const blogContent: Record<string, BlogContentEntry> = {
  'article-one': {
    title: 'Article One: Building a Simple Budget Plan',
    description: 'Learn the budgeting fundamentals with a simple, repeatable framework.',
    component: ArticleOne
  },
  'article-two': {
    title: 'Article Two: Smarter Savings With Automated Goals',
    description: 'Set up automatic savings routines that help you hit your goals faster.',
    component: ArticleTwo
  }
};

export const blogSlugs = Object.keys(blogContent);
