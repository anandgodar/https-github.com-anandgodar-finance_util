import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { usStates, getStateBySlug } from '../../../lib/state-data';
import StateSalaryCalculatorClient from './StateSalaryCalculatorClient';

// Generate state-specific HowTo schema
function generateSalaryHowToSchema(stateName: string, stateSlug: string, hasIncomeTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate Your ${stateName} Take-Home Pay`,
    description: `Step-by-step guide to calculate your net paycheck in ${stateName} after federal${hasIncomeTax ? ` and ${stateName} state` : ''} taxes.`,
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Enter Your Gross Salary',
        text: 'Enter your annual gross salary or hourly wage. For hourly workers, multiply hourly rate by 2080 (40 hours x 52 weeks) for annual equivalent.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Select Filing Status',
        text: 'Choose your tax filing status: Single, Married Filing Jointly, Married Filing Separately, or Head of Household. This affects your federal tax brackets.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Add Pre-Tax Deductions',
        text: 'Enter pre-tax deductions like 401(k) contributions and health insurance premiums. These reduce taxable income and lower your tax bill.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: hasIncomeTax ? `Review ${stateName} State Tax` : `Benefit from No ${stateName} State Tax`,
        text: hasIncomeTax
          ? `See how ${stateName} state income tax applies to your income. ${stateName} taxes are calculated based on state-specific brackets and rates.`
          : `${stateName} has no state income tax, which means more take-home pay compared to states with income taxes. Only federal taxes apply.`
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'View Your Net Pay Breakdown',
        text: 'See detailed breakdown: gross pay, federal tax, state tax, Social Security (6.2%), Medicare (1.45%), and final take-home pay. View weekly, bi-weekly, and monthly amounts.'
      }
    ],
    tool: {
      '@type': 'HowToTool',
      name: `QuantCurb ${stateName} Salary Calculator`
    }
  };
}

// Generate state-specific FAQ schema
function generateSalaryFAQSchema(stateName: string, stateTaxRate: number, hasIncomeTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the ${stateName} state income tax rate?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: hasIncomeTax
            ? `${stateName} has a ${(stateTaxRate * 100).toFixed(2)}% top marginal state income tax rate. Actual rate depends on your income and filing status. Use our calculator to see your effective rate.`
            : `${stateName} has no state income tax! This means you only pay federal income taxes, Social Security, and Medicare. More of your gross salary becomes take-home pay.`
        }
      },
      {
        '@type': 'Question',
        name: `How is my ${stateName} paycheck calculated?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Your ${stateName} paycheck is calculated by subtracting federal income tax${hasIncomeTax ? `, ${stateName} state tax` : ''}, Social Security (6.2%), Medicare (1.45%), and any pre-tax deductions from your gross pay. The remainder is your net take-home pay.`
        }
      },
      {
        '@type': 'Question',
        name: `How much will I take home from a $100,000 salary in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: hasIncomeTax
            ? `On a $100,000 salary in ${stateName}, expect to take home approximately $72,000-$78,000 depending on filing status, deductions, and local taxes. Use our calculator for your exact numbers.`
            : `On a $100,000 salary in ${stateName}, expect to take home approximately $78,000-$82,000 since there's no state income tax. Only federal taxes and FICA apply.`
        }
      },
      {
        '@type': 'Question',
        name: `Does ${stateName} tax retirement income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: hasIncomeTax
            ? `${stateName} taxation of retirement income varies. Social Security is typically not taxed at the federal level for most retirees. Check ${stateName}-specific rules for pension and 401(k) withdrawals.`
            : `${stateName} has no state income tax, so retirement income like pensions, 401(k) withdrawals, and Social Security are not taxed at the state level.`
        }
      },
      {
        '@type': 'Question',
        name: `Should I move to ${stateName} for lower taxes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: hasIncomeTax
            ? `Consider total tax burden including property taxes, sales taxes, and cost of living - not just income tax. ${stateName} may have other taxes that offset income tax differences.`
            : `${stateName} has no state income tax, which can mean significant savings for high earners. However, also compare property taxes, sales taxes, and overall cost of living before deciding.`
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
    title: `${stateData.name} Paycheck Calculator 2026 | What is My Take Home Pay in ${stateData.name}?`,
    description: `What is my take home pay in ${stateData.name}? Calculate your net paycheck after federal${noTax ? '' : ` and ${stateData.name}`} taxes. ${noTax ? `${stateData.name} has no state income tax!` : ''} Free 2026 salary calculator.`,
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
    'HI': 0.0825, 'ID': 0.058, 'IL': 0.0495, 'IN': 0.0305, 'IA': 0.057,
    'KS': 0.057, 'KY': 0.04, 'LA': 0.0425, 'ME': 0.0715, 'MD': 0.0475,
    'MA': 0.05, 'MI': 0.0425, 'MN': 0.0705, 'MS': 0.05, 'MO': 0.048,
    'MT': 0.059, 'NE': 0.0584, 'NV': 0.00, 'NH': 0.00, 'NJ': 0.0637,
    'NM': 0.059, 'NY': 0.065, 'NC': 0.045, 'ND': 0.02, 'OH': 0.0399,
    'OK': 0.05, 'OR': 0.099, 'PA': 0.0307, 'RI': 0.0599, 'SC': 0.065,
    'SD': 0.00, 'TN': 0.00, 'TX': 0.00, 'UT': 0.0485, 'VT': 0.0875,
    'VA': 0.0575, 'WA': 0.00, 'WV': 0.065, 'WI': 0.07265, 'WY': 0.00,
    'DC': 0.085
  };

  const stateTaxRate = STATE_TAX_RATES[stateData.abbreviation] ?? 0;
  const hasIncomeTax = stateData.taxStatus !== 'none';

  const howToSchema = generateSalaryHowToSchema(stateData.name, stateData.slug, hasIncomeTax);
  const faqSchema = generateSalaryFAQSchema(stateData.name, stateTaxRate, hasIncomeTax);
  const breadcrumbSchema = generateBreadcrumbSchema(stateData.name, stateData.slug);

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
