import React from 'react';

import ArticleOne from '../components/blog/ArticleOne';
import ArticleTwo from '../components/blog/ArticleTwo';
import MortgageCalculatorGuide2025 from '../components/blog/MortgageCalculatorGuide2025';

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
  },
  'mortgage-calculator-guide-2025': {
    title: 'Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More',
    description: 'Master mortgage calculations with our 2025 guide covering PITI, PMI, property taxes, and how to use a mortgage calculator.',
    component: MortgageCalculatorGuide2025
  }
};

export const blogSlugs = Object.keys(blogContent);
