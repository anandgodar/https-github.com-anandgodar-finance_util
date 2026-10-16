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
        name: 'Mortgage Calculator',
        item: 'https://quantcurb.com/mortgage-payment-calculator/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Mortgage Calculator`,
        item: `https://quantcurb.com/mortgage-calculator/${stateSlug}/`
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

// Generate static params for ALL 51 states (not just configured ones)
export function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug
  }));
}

// Get state config - returns full config if available, or creates a basic one
function getStateConfig(stateSlug: string): StateConfig | null {
  // Check if we have a full config
  if (STATE_CONFIGS[stateSlug]) {
    return STATE_CONFIGS[stateSlug];
  }

  // Find basic state data
  const stateData = usStates.find(s => s.slug === stateSlug);
  if (!stateData) return null;

  // Create a minimal config for states without full data
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
      title: 'Mortgage Calculator',
      description: 'Calculate monthly mortgage payments with PITI breakdown'
    };
  }

  const stateName = stateData.name;
  const stateNameLower = stateName.toLowerCase();

  return {
    title: fitTitle(`${stateName} Mortgage Calculator 2026: PITI & Affordability`, `${stateName} Mortgage Calculator 2026`),
    description: clampDescription(`Free 2026 ${stateName} mortgage calculator: monthly PITI payment with ${stateName} property tax, insurance and PMI, plus how much house you can afford.`),
    keywords: `${stateName} mortgage calculator, how much house can i afford ${stateNameLower}, ${stateNameLower} home loan calculator, ${stateNameLower} piti calculator, ${stateNameLower} property tax rate, mortgage payment ${stateNameLower}, ${stateNameLower} first time home buyer, buying a house in ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/mortgage-calculator/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Mortgage Calculator 2026 | How Much House Can I Afford?`,
      description: `Free ${stateName} mortgage calculator with PITI breakdown. Calculate monthly payments with ${stateName} property taxes and insurance.`,
      url: `https://quantcurb.com/mortgage-calculator/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateMortgageCalculatorPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);

  if (!stateConfig) {
    notFound();
  }

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
