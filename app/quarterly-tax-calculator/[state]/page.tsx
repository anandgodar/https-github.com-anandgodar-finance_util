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
      title: 'Quarterly Tax Calculator',
      description: 'Estimate quarterly estimated tax payments for self-employed'
    };
  }

  const stateName = stateData.name;
  const noTax = stateData.taxStatus === 'none';

  return {
    title: `${stateName} Quarterly Tax Calculator 2026 - Estimated Tax Payments`,
    description: `Calculate your ${stateName} quarterly estimated taxes. ${noTax ? `${stateName} has no state income tax - only federal quarterly payments needed!` : `Includes both federal and ${stateName} state estimated taxes.`} Free 2026 calculator with safe harbor rules.`,
    keywords: `${stateName} quarterly tax calculator, ${stateName.toLowerCase()} estimated taxes, quarterly taxes ${stateName.toLowerCase()}, self employed taxes ${stateName.toLowerCase()}, 1099 quarterly payments ${stateName.toLowerCase()}, safe harbor ${stateName.toLowerCase()}`,
    alternates: {
      canonical: `https://quantcurb.com/quarterly-tax-calculator/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Quarterly Tax Calculator 2026 - Estimated Payments`,
      description: `Calculate your quarterly estimated tax payments in ${stateName}. Free calculator with safe harbor rules.`,
      url: `https://quantcurb.com/quarterly-tax-calculator/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateQuarterlyTaxCalculatorPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
