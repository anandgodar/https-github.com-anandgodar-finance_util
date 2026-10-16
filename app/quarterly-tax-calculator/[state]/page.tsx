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
        name: 'Quarterly Tax Calculator',
        item: 'https://quantcurb.com/quarterly-estimated-tax-calculator/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Quarterly Tax Calculator`,
        item: `https://quantcurb.com/quarterly-tax-calculator/${stateSlug}/`
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
      title: 'Quarterly Tax Calculator',
      description: 'Estimate quarterly estimated tax payments for self-employed'
    };
  }

  const stateName = stateData.name;
  const stateNameLower = stateName.toLowerCase();
  const noTax = stateData.taxStatus === 'none';

  return {
    title: fitTitle(`${stateName} Quarterly Estimated Tax Calculator 2026`, `${stateName} Quarterly Tax Calculator 2026`),
    description: clampDescription(`Calculate 2026 quarterly estimated tax payments in ${stateName}: federal${noTax ? '' : ' and state'} amounts, safe harbor rules and IRS due dates.`),
    keywords: `${stateName} quarterly tax calculator, how much are my estimated taxes ${stateNameLower}, ${stateNameLower} quarterly estimated taxes, quarterly tax payments ${stateNameLower}, self employed taxes ${stateNameLower}, safe harbor rule ${stateNameLower}, 1099 quarterly payments ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/quarterly-tax-calculator/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Quarterly Tax Calculator 2026 | Estimated Tax Payments`,
      description: `Calculate your quarterly estimated tax payments in ${stateName}. Free calculator with safe harbor rules.`,
      url: `https://quantcurb.com/quarterly-tax-calculator/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateQuarterlyTaxCalculatorPage({ params }: PageProps) {
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
