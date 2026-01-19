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
      title: 'Freelance Tax Calculator',
      description: 'Self-employment tax and profit calculation for freelancers'
    };
  }

  const stateName = stateConfig.name;

  return {
    title: `${stateName} Freelance Tax Calculator 2026 | Self-employment tax and profit calculation for freelancers`,
    description: `Self-employment tax and profit calculation for freelancers for ${stateName} residents. Updated for 2026 with ${stateName}-specific tax rates, deductions, and regulations.`,
    keywords: `${stateName} freelance tax calculator, self employment tax, 1099 calculator, ${stateName.toLowerCase()} freelance-profit-hub, ${stateName.toLowerCase()} taxes`,
    alternates: {
      canonical: `https://quantcurb.com/freelance-profit-hub/${params.state}`
    }
  };
}

export default function StateFreelanceHubPage({ params }: PageProps) {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
