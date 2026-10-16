import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

import { fitTitle, clampDescription } from '../../../lib/seo';
// Generate breadcrumb schema
function generateBreadcrumbSchema(stateName: string, stateSlug: string) {
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
        name: 'Freelance Calculator',
        item: 'https://quantcurb.com/freelance-profit-hub/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Freelance Calculator`,
        item: `https://quantcurb.com/freelance-profit-hub/${stateSlug}/`
      }
    ]
  };
}

type PageProps = {
  params: {
    state: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static params for ALL 51 states
export function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug
  }));
}

// Get state config - returns full config if available, or creates a basic one
function getStateConfig(stateSlug: string): StateConfig | null {
  if (STATE_CONFIGS[stateSlug]) {
    return STATE_CONFIGS[stateSlug];
  }

  const stateData = usStates.find(s => s.slug === stateSlug);
  if (!stateData) return null;

  return {
    name: stateData.name,
    code: stateData.abbreviation,
    slug: stateData.slug,
    stateTaxRate: stateData.taxStatus === 'none' ? 0 : 5,
    propertyTaxRate: 1.1,
    salesTaxRate: 7.0,
    avgHomePrice: 400000,
    medianIncome: 65000,
    costOfLivingIndex: 100,
    topMetros: [],
    taxAdvantages: stateData.taxStatus === 'none' ? ['No state income tax'] : [],
    retirementFriendly: stateData.taxStatus === 'none',
    socialSecurityTaxed: false,
    pensionTaxed: stateData.taxStatus !== 'none',
    firstTimeBuyerPrograms: [],
    avgClosingCosts: 3500,
    llcFilingFee: 100,
    annualFranchiseTax: 0,
  };
}

// Dynamic SEO metadata for each state
export function generateMetadata({ params }: PageProps): Metadata {
  const stateData = usStates.find(s => s.slug === params.state);

  if (!stateData) {
    return {
      title: 'Freelance Tax Calculator',
      description: 'Self-employment tax and profit calculation for freelancers'
    };
  }

  const stateName = stateData.name;
  const stateNameLower = stateName.toLowerCase();
  const noTax = stateData.taxStatus === 'none';

  return {
    title: fitTitle(`${stateName} Freelance Tax Calculator 2026 (1099)`, `${stateName} 1099 Tax Calculator 2026`),
    description: clampDescription(`Estimate 2026 self-employment tax (15.3%), federal${noTax ? '' : ` and ${stateName}`} income tax and take-home profit on 1099 income in ${stateName}.`),
    keywords: `${stateName} freelance tax calculator, how much self employment tax ${stateNameLower}, ${stateNameLower} 1099 calculator, ${stateNameLower} independent contractor tax, freelance taxes ${stateNameLower}, 1099 vs w2 ${stateNameLower}, self employment tax rate ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/freelance-profit-hub/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Freelance Tax Calculator 2026 | 1099 Self-Employment Tax`,
      description: `Calculate your freelance and self-employment taxes in ${stateName}. Free 1099 tax calculator.`,
      url: `https://quantcurb.com/freelance-profit-hub/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateFreelanceHubPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);
  const stateData = usStates.find(s => s.slug === params.state);

  if (!stateConfig || !stateData) {
    notFound();
  }

  const noTax = stateData.taxStatus === 'none';
  const breadcrumbSchema = generateBreadcrumbSchema(stateConfig.name, stateConfig.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StateToolClient stateConfig={stateConfig} />
    </>
  );
}
