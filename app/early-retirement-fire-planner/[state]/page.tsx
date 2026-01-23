import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS } from '../../../lib/state-configs';
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
      title: 'FIRE Calculator',
      description: 'Calculate your path to early retirement and financial independence'
    };
  }

  const stateName = stateConfig.name;

  return {
    title: `${stateName} FIRE Calculator 2026 | Calculate your path to early retirement and financial independence`,
    description: `Calculate your path to early retirement and financial independence for ${stateName} residents. Updated for 2026 with ${stateName}-specific tax rates, deductions, and regulations.`,
    keywords: `${stateName} fire calculator, early retirement calculator, financial independence, ${stateName.toLowerCase()} early-retirement-fire-planner, ${stateName.toLowerCase()} taxes`,
    alternates: {
      canonical: `https://quantcurb.com/early-retirement-fire-planner/${params.state}`
    }
  };
}

export default function StateFIREPlannerPage({ params }: PageProps) {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
