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
      title: 'Quarterly Tax Calculator',
      description: 'Estimate quarterly estimated tax payments for self-employed'
    };
  }

  const stateName = stateConfig.name;

  return {
    title: `${stateName} Quarterly Tax Calculator 2026 | Estimate quarterly estimated tax payments for self-employed`,
    description: `Estimate quarterly estimated tax payments for self-employed for ${stateName} residents. Updated for 2026 with ${stateName}-specific tax rates, deductions, and regulations.`,
    keywords: `${stateName} quarterly tax calculator, estimated taxes, self employed taxes, ${stateName.toLowerCase()} quarterly-tax-calculator, ${stateName.toLowerCase()} taxes`,
    alternates: {
      canonical: `https://quantcurb.com/quarterly-tax-calculator/${params.state}`
    }
  };
}

export default function StateQuarterlyTaxCalculatorPage({ params }: PageProps) {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
