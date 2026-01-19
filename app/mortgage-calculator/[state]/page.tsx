import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS } from '@/lib/state-configs';
import StateToolClient from './StateToolClient';

type PageProps = {
  params: {
    state: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static params for all configured states
export function generateStaticParams() {
  const stateKeys = Object.keys(STATE_CONFIGS);
  return stateKeys.map((stateKey) => ({
    state: stateKey
  }));
}

// Dynamic SEO metadata for each state
export function generateMetadata({ params }: PageProps): Metadata {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    return {
      title: 'Mortgage Calculator',
      description: 'Calculate monthly mortgage payments with PITI breakdown'
    };
  }

  const stateName = stateConfig.name;

  return {
    title: `${stateName} Mortgage Calculator 2026 | Calculate monthly mortgage payments with PITI breakdown`,
    description: `Calculate monthly mortgage payments with PITI breakdown for ${stateName} residents. Updated for 2026 with ${stateName}-specific tax rates, deductions, and regulations.`,
    keywords: `${stateName} mortgage calculator, home loan calculator, piti calculator, ${stateName.toLowerCase()} mortgage-calculator, ${stateName.toLowerCase()} taxes`,
    alternates: {
      canonical: `https://quantcurb.com/mortgage-calculator/${params.state}`
    }
  };
}

export default function StateMortgageCalculatorPage({ params }: PageProps) {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
