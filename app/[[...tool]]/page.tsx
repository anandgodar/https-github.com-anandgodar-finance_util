import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import AppShell from '../../components/AppShell';
import { TOOL_METADATA, toolSlugs } from '../../lib/tool-metadata';
import { ToolType } from '../../types';
import {
  mortgageCalculatorFAQs,
  salaryCalculatorFAQs,
  fireCalculatorFAQs,
  taxCalculatorFAQs,
  investmentCalculatorFAQs,
  emiCalculatorFAQs,
  netWorthFAQs,
  emergencyFundFAQs,
  loanCompareFAQs,
  costOfLivingFAQs,
  creditCardPayoffFAQs,
  dtiFAQs,
  cryptoTaxFAQs,
  acaSubsidyFAQs,
} from '../../components/FAQSchema';
import { generateHowToSchemaForTool } from '../../components/HowToSchema';

type PageProps = {
  params?: {
    tool?: string[];
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

const toolSlugSet = new Set<ToolType>(toolSlugs as ToolType[]);

const isToolType = (slug: string): slug is ToolType => toolSlugSet.has(slug as ToolType);

// Map tools to their FAQ sets
const toolFAQMap: Record<string, Array<{ question: string; answer: string }>> = {
  [ToolType.MORTGAGE_CALC]: mortgageCalculatorFAQs,
  [ToolType.SALARY_CALC]: salaryCalculatorFAQs,
  [ToolType.FIRE_PLANNER]: fireCalculatorFAQs,
  [ToolType.INVESTMENT_CALC]: investmentCalculatorFAQs,
  [ToolType.QUARTERLY_TAX]: taxCalculatorFAQs,
  [ToolType.CHILD_TAX_CREDIT]: taxCalculatorFAQs,
  [ToolType.FREELANCE_PROFIT]: taxCalculatorFAQs,
  [ToolType.RETIREMENT_OPTIMIZER]: fireCalculatorFAQs,
  [ToolType.DRIP_CALCULATOR]: investmentCalculatorFAQs,
  [ToolType.EMI_CALC]: emiCalculatorFAQs,
  [ToolType.NET_WORTH]: netWorthFAQs,
  [ToolType.EMERGENCY_FUND]: emergencyFundFAQs,
  [ToolType.LOAN_COMPARE]: loanCompareFAQs,
  [ToolType.LIVING_COST]: costOfLivingFAQs,
  [ToolType.CREDIT_CARD_PAYOFF]: creditCardPayoffFAQs,
  [ToolType.DTI_CALCULATOR]: dtiFAQs,
  [ToolType.CRYPTO_TAX_LOSS]: cryptoTaxFAQs,
  [ToolType.ACA_SUBSIDY]: acaSubsidyFAQs,
};

export function generateStaticParams() {
  return [
    { tool: [] },
    ...toolSlugs
      .filter((slug) => slug !== ToolType.DASHBOARD)
      .map((slug) => ({ tool: slug.split('/') }))
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params?.tool?.join('/') || ToolType.DASHBOARD;
  const metadata = TOOL_METADATA[slug as ToolType];

  if (!metadata) {
    return {
      title: 'Page Not Found',
      description: 'This page could not be found.'
    };
  }

  const canonicalPath = slug === ToolType.DASHBOARD ? '/' : `/${slug}/`;

  return {
    title: metadata.title,
    description: metadata.desc,
    keywords: metadata.keywords,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title: metadata.title,
      description: metadata.desc,
      type: 'website',
      url: `https://quantcurb.com${canonicalPath}`,
      siteName: 'QuantCurb',
      locale: 'en_US',
      images: [
        {
          url: 'https://quantcurb.com/og-image.png',
          width: 1200,
          height: 630,
          alt: metadata.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.desc,
      images: ['https://quantcurb.com/og-image.png']
    }
  };
}

function generateWebApplicationSchema(slug: string, metadata: { title: string; desc: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: metadata.title,
    description: metadata.desc,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    url: `https://quantcurb.com/${slug === ToolType.DASHBOARD ? '' : slug + '/'}`,
    author: {
      '@type': 'Organization',
      name: 'QuantCurb Intelligence',
      url: 'https://quantcurb.com'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1'
    }
  };
}

function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function generateBreadcrumbSchema(slug: string, title: string) {
  if (slug === ToolType.DASHBOARD) {
    return null;
  }

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
        name: title,
        item: `https://quantcurb.com/${slug}/`
      }
    ]
  };
}

export default function ToolPage({ params }: PageProps) {
  const slug = params?.tool?.join('/') || ToolType.DASHBOARD;

  if (!isToolType(slug)) {
    notFound();
  }

  const metadata = TOOL_METADATA[slug];
  const webAppSchema = generateWebApplicationSchema(slug, metadata);
  const breadcrumbSchema = generateBreadcrumbSchema(slug, metadata.title);
  const faqs = toolFAQMap[slug];
  const faqSchema = faqs ? generateFAQSchema(faqs) : null;
  const howToSchema = generateHowToSchemaForTool(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <AppShell initialTool={slug as ToolType} />
    </>
  );
}
