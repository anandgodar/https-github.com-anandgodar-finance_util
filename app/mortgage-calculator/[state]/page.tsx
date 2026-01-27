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

  return {
    title: `${stateName} Mortgage Calculator 2026 - Free PITI Calculator with Property Tax`,
    description: `Calculate your ${stateName} mortgage payment with our free calculator. Includes PITI breakdown, ${stateName} property tax rates, PMI calculations, and amortization schedule. Updated for 2026.`,
    keywords: `${stateName} mortgage calculator, ${stateName.toLowerCase()} home loan calculator, ${stateName.toLowerCase()} piti calculator, ${stateName.toLowerCase()} property tax calculator, mortgage payment ${stateName.toLowerCase()}, how much house can i afford ${stateName.toLowerCase()}`,
    alternates: {
      canonical: `https://quantcurb.com/mortgage-calculator/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Mortgage Calculator 2026 - Free PITI Calculator`,
      description: `Calculate your ${stateName} mortgage payment with PITI breakdown, property taxes, and PMI.`,
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

  return <StateToolClient stateConfig={stateConfig} />;
}
