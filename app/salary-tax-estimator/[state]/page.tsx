import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { usStates, getStateBySlug } from '../../../lib/state-data';
import StateSalaryCalculatorClient from './StateSalaryCalculatorClient';

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
        name: 'Salary Calculator',
        item: 'https://quantcurb.com/salary-tax-estimator/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Salary Calculator`,
        item: `https://quantcurb.com/salary-tax-estimator/${stateSlug}/`
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
export const dynamicParams = false; // Only pre-defined states are allowed

// Generate static params for all 50 states + DC
export function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug
  }));
}

// Dynamic SEO metadata for each state
export function generateMetadata({ params }: PageProps): Metadata {
  const stateData = getStateBySlug(params.state);

  if (!stateData) {
    return {
      title: 'Salary Tax Calculator',
      description: 'Calculate your take-home pay after taxes.'
    };
  }

  const stateNameLower = stateData.name.toLowerCase();
  const noTax = stateData.taxStatus === 'none';

  return {
    title: fitTitle(`${stateData.name} Paycheck Calculator 2026: Take-Home Pay`, `${stateData.name} Paycheck Calculator 2026`),
    description: clampDescription(`Free 2026 ${stateData.name} paycheck calculator. See your take-home pay after federal${noTax ? '' : ` and ${stateData.name} state`} income tax, Social Security and Medicare.${noTax ? ` ${stateData.name} has no state income tax.` : ''}`),
    keywords: `${stateData.name} paycheck calculator, what is my take home pay ${stateNameLower}, ${stateNameLower} salary calculator, ${stateNameLower} income tax calculator, net pay ${stateNameLower}, how much tax in ${stateNameLower}, ${stateNameLower} tax rate`,
    alternates: {
      canonical: `https://quantcurb.com/salary-tax-estimator/${stateData.slug}/`
    },
    openGraph: {
      title: `${stateData.name} Paycheck Calculator 2026 | Calculate Take Home Pay`,
      description: `Free ${stateData.name} salary calculator. Calculate your net pay after federal and state taxes.`,
      url: `https://quantcurb.com/salary-tax-estimator/${stateData.slug}/`,
      type: 'website',
    }
  };
}

export default function StateSalaryPage({ params }: PageProps) {
  const stateData = getStateBySlug(params.state);

  if (!stateData) {
    notFound();
  }

  // Get tax rate for the state (from SalaryCalculator component data)
  const STATE_TAX_RATES: Record<string, number> = {
    'AL': 0.05, 'AK': 0.00, 'AZ': 0.025, 'AR': 0.044, 'CA': 0.093,
    'CO': 0.044, 'CT': 0.05, 'DE': 0.066, 'FL': 0.00, 'GA': 0.0549,
    'HI': 0.0825, 'ID': 0.053, 'IL': 0.0495, 'IN': 0.0295, 'IA': 0.038,
    'KS': 0.057, 'KY': 0.035, 'LA': 0.03, 'ME': 0.0715, 'MD': 0.0475,
    'MA': 0.05, 'MI': 0.0425, 'MN': 0.0705, 'MS': 0.04, 'MO': 0.048,
    'MT': 0.059, 'NE': 0.0455, 'NV': 0.00, 'NH': 0.00, 'NJ': 0.0637,
    'NM': 0.059, 'NY': 0.065, 'NC': 0.0399, 'ND': 0.02, 'OH': 0.0275,
    'OK': 0.05, 'OR': 0.099, 'PA': 0.0307, 'RI': 0.0599, 'SC': 0.065,
    'SD': 0.00, 'TN': 0.00, 'TX': 0.00, 'UT': 0.045, 'VT': 0.0875,
    'VA': 0.0575, 'WA': 0.00, 'WV': 0.065, 'WI': 0.07265, 'WY': 0.00,
    'DC': 0.085
  };

  const stateTaxRate = STATE_TAX_RATES[stateData.abbreviation] ?? 0;

  const breadcrumbSchema = generateBreadcrumbSchema(stateData.name, stateData.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StateSalaryCalculatorClient
        stateCode={stateData.abbreviation}
        stateName={stateData.name}
        stateTaxRate={stateTaxRate}
        stateDescription={stateData.description}
        taxStatus={stateData.taxStatus}
      />
    </>
  );
}
