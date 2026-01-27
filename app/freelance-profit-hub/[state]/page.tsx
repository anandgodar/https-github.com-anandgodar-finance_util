import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

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
  const noTax = stateData.taxStatus === 'none';

  return {
    title: `${stateName} Freelance Tax Calculator 2026 - 1099 Self-Employment Tax`,
    description: `Calculate your ${stateName} freelance taxes and self-employment tax. ${noTax ? `${stateName} has no state income tax!` : `See how ${stateName} taxes affect your 1099 income.`} Free 2026 1099 calculator with SE tax, deductions, and quarterly estimates.`,
    keywords: `${stateName} freelance tax calculator, ${stateName.toLowerCase()} 1099 calculator, ${stateName.toLowerCase()} self employment tax, freelance taxes ${stateName.toLowerCase()}, 1099 vs w2 ${stateName.toLowerCase()}, independent contractor ${stateName.toLowerCase()}`,
    alternates: {
      canonical: `https://quantcurb.com/freelance-profit-hub/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Freelance Tax Calculator 2026 - 1099 & SE Tax`,
      description: `Calculate your freelance taxes in ${stateName}. Free self-employment tax calculator for 1099 workers.`,
      url: `https://quantcurb.com/freelance-profit-hub/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateFreelanceHubPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
