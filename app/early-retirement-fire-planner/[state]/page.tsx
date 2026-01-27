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
      title: 'FIRE Calculator',
      description: 'Calculate your path to early retirement and financial independence'
    };
  }

  const stateName = stateData.name;
  const noTax = stateData.taxStatus === 'none';

  return {
    title: `${stateName} FIRE Calculator 2026 - Early Retirement & Financial Independence`,
    description: `Calculate your FIRE number for ${stateName}. ${noTax ? `${stateName} has no state income tax - great for early retirement!` : `Plan for ${stateName} taxes in retirement.`} Coast FIRE, Lean FIRE, Fat FIRE calculations. Free 2026 calculator.`,
    keywords: `${stateName} fire calculator, ${stateName.toLowerCase()} early retirement, retire early ${stateName.toLowerCase()}, financial independence ${stateName.toLowerCase()}, ${stateName.toLowerCase()} fire number, coast fire ${stateName.toLowerCase()}, when can i retire ${stateName.toLowerCase()}`,
    alternates: {
      canonical: `https://quantcurb.com/early-retirement-fire-planner/${params.state}/`
    },
    openGraph: {
      title: `${stateName} FIRE Calculator 2026 - Early Retirement Planning`,
      description: `Calculate your path to financial independence in ${stateName}. Free FIRE calculator with state-specific considerations.`,
      url: `https://quantcurb.com/early-retirement-fire-planner/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateFIREPlannerPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
