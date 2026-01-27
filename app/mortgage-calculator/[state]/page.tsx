import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

// Generate state-specific HowTo schema
function generateMortgageHowToSchema(stateName: string, stateSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate Your ${stateName} Mortgage Payment`,
    description: `Step-by-step guide to calculate your monthly mortgage payment in ${stateName}, including property taxes, insurance, and PMI.`,
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: `Enter ${stateName} Home Price`,
        text: `Enter the purchase price of your ${stateName} home. Check current ${stateName} real estate listings or your pre-approval amount for guidance.`
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Set Your Down Payment',
        text: 'Enter your down payment amount. 20% avoids PMI, but many programs allow 3-5% down. First-time buyers may qualify for state assistance programs.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Input Interest Rate',
        text: 'Enter the mortgage interest rate from your lender quote. Shop multiple lenders to find the best rate for your situation.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: `Add ${stateName} Property Tax Rate`,
        text: `Enter the ${stateName} property tax rate for your county. Property taxes vary by county within ${stateName}. Check your local assessor for exact rates.`
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Include Homeowners Insurance',
        text: `Add annual homeowners insurance cost. ${stateName} insurance rates depend on location, coverage, and home type. Get quotes from multiple insurers.`
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Review Your PITI Payment',
        text: `See your total monthly payment including Principal, Interest, Taxes, and Insurance (PITI). Compare with ${stateName} rent prices to evaluate buying vs renting.`
      }
    ],
    tool: {
      '@type': 'HowToTool',
      name: `QuantCurb ${stateName} Mortgage Calculator`
    }
  };
}

// Generate state-specific FAQ schema
function generateMortgageFAQSchema(stateName: string, propertyTaxRate: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the average property tax rate in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The average ${stateName} property tax rate is approximately ${propertyTaxRate}% of assessed value. However, rates vary significantly by county and municipality. Check your local assessor's office for exact rates in your area.`
        }
      },
      {
        '@type': 'Question',
        name: `How much house can I afford in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Use the 28/36 rule: housing costs (PITI) should not exceed 28% of gross income, total debt under 36%. For ${stateName}, factor in local property taxes and insurance costs which vary by county.`
        }
      },
      {
        '@type': 'Question',
        name: `Are there first-time homebuyer programs in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, ${stateName} offers various first-time homebuyer assistance programs including down payment assistance, reduced interest rates, and closing cost help. Check your state housing finance agency for current programs and eligibility.`
        }
      },
      {
        '@type': 'Question',
        name: `What closing costs should I expect in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${stateName} closing costs typically range from 2-5% of the loan amount. This includes lender fees, title insurance, appraisal, recording fees, and prepaid taxes/insurance. Some costs are negotiable.`
        }
      },
      {
        '@type': 'Question',
        name: `How does ${stateName} income tax affect my mortgage decision?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${stateName} state income tax impacts your overall affordability. States with no income tax may allow higher mortgage payments. Consider your total tax burden including property, sales, and income taxes when budgeting.`
        }
      }
    ]
  };
}

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
        name: 'Mortgage Calculator',
        item: 'https://quantcurb.com/mortgage-payment-calculator/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Mortgage Calculator`,
        item: `https://quantcurb.com/mortgage-calculator/${stateSlug}/`
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
  const stateNameLower = stateName.toLowerCase();

  return {
    title: `${stateName} Mortgage Calculator 2026 | How Much House Can I Afford in ${stateName}?`,
    description: `Calculate your ${stateName} mortgage payment with our free PITI calculator. Answer: How much house can I afford in ${stateName}? Includes ${stateName} property tax rates, PMI, and amortization. 2026 rates.`,
    keywords: `${stateName} mortgage calculator, how much house can i afford ${stateNameLower}, ${stateNameLower} home loan calculator, ${stateNameLower} piti calculator, ${stateNameLower} property tax rate, mortgage payment ${stateNameLower}, ${stateNameLower} first time home buyer, buying a house in ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/mortgage-calculator/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Mortgage Calculator 2026 | How Much House Can I Afford?`,
      description: `Free ${stateName} mortgage calculator with PITI breakdown. Calculate monthly payments with ${stateName} property taxes and insurance.`,
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

  const howToSchema = generateMortgageHowToSchema(stateConfig.name, stateConfig.slug);
  const faqSchema = generateMortgageFAQSchema(stateConfig.name, stateConfig.propertyTaxRate);
  const breadcrumbSchema = generateBreadcrumbSchema(stateConfig.name, stateConfig.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StateToolClient stateConfig={stateConfig} />
    </>
  );
}
