import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

// Generate state-specific HowTo schema
function generateFreelanceHowToSchema(stateName: string, stateSlug: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate Your ${stateName} Freelance Taxes`,
    description: `Step-by-step guide to calculate self-employment taxes and freelance income tax in ${stateName}.`,
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Enter Gross Freelance Income',
        text: 'Enter all your 1099-NEC income from clients plus any cash payments. This is your total self-employment gross revenue for the tax year.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Subtract Business Expenses',
        text: `Deduct legitimate business expenses: home office (simplified or actual), equipment, software, professional services, marketing, and business travel. Lower expenses = lower taxable income.`
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Calculate Self-Employment Tax',
        text: 'SE tax is 15.3% (Social Security 12.4% + Medicare 2.9%) on 92.35% of net self-employment earnings. You can deduct half of SE tax from your income.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: noTax ? `Benefit from ${stateName}'s No State Tax` : `Add ${stateName} State Tax`,
        text: noTax
          ? `${stateName} has no state income tax! Your freelance income is only subject to federal taxes and SE tax. This can save thousands compared to high-tax states.`
          : `Calculate ${stateName} state income tax on your freelance profit. ${stateName} taxes self-employment income like regular income. Factor this into your quarterly payments.`
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Review Total Tax Burden',
        text: `See your total tax liability including federal income tax, self-employment tax${noTax ? '' : `, and ${stateName} state tax`}. View your effective tax rate and compare 1099 vs W2 equivalent.`
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Plan Quarterly Payments',
        text: 'Divide your annual tax estimate by 4 for quarterly payments. Pay by April 15, June 15, September 15, and January 15 to avoid underpayment penalties.'
      }
    ],
    tool: {
      '@type': 'HowToTool',
      name: `QuantCurb ${stateName} Freelance Tax Calculator`
    }
  };
}

// Generate state-specific FAQ schema
function generateFreelanceFAQSchema(stateName: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do freelancers pay in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `Freelancers in ${stateName} pay federal income tax (10-37% depending on income) plus self-employment tax (15.3%). Since ${stateName} has no state income tax, you save significantly compared to states like California (13.3%) or New York (10.9%).`
            : `Freelancers in ${stateName} pay federal income tax (10-37%), self-employment tax (15.3%), plus ${stateName} state income tax. Your total effective rate depends on income level and deductions.`
        }
      },
      {
        '@type': 'Question',
        name: `What freelance expenses can I deduct in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Federal deductions apply regardless of state: home office (simplified $5/sq ft or actual expenses), equipment, software, professional development, health insurance premiums, retirement contributions (SEP-IRA, Solo 401k), and business travel. Keep detailed records.`
        }
      },
      {
        '@type': 'Question',
        name: `Should I form an LLC for freelancing in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `LLCs provide liability protection but don't change federal taxes for single-member LLCs (still taxed as sole proprietor). ${stateName} LLC costs vary - check filing fees and annual requirements. Consider an LLC if you have significant business liability risk.`
        }
      },
      {
        '@type': 'Question',
        name: `How do I pay quarterly taxes as a freelancer in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Estimate annual tax, divide by 4, pay via IRS Direct Pay or EFTPS by April 15, June 15, September 15, and January 15. ${noTax ? 'Since ' + stateName + ' has no income tax, you only pay federal quarterly estimates.' : 'Also pay ' + stateName + ' quarterly estimates through your state tax authority.'}`
        }
      },
      {
        '@type': 'Question',
        name: `What is the QBI deduction for ${stateName} freelancers?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The Qualified Business Income (QBI) deduction allows freelancers to deduct up to 20% of qualified business income from federal taxes. This is a federal deduction that applies regardless of ${stateName} residency. Income limits and service business restrictions may apply.`
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
        name: 'Freelance Calculator',
        item: 'https://quantcurb.com/freelance-profit-hub/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} Freelance Calculator`,
        item: `https://quantcurb.com/freelance-profit-hub/${stateSlug}/`
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
      title: 'Freelance Tax Calculator',
      description: 'Self-employment tax and profit calculation for freelancers'
    };
  }

  const stateName = stateData.name;
  const stateNameLower = stateName.toLowerCase();
  const noTax = stateData.taxStatus === 'none';

  return {
    title: `${stateName} Freelance Tax Calculator 2026 | How Much Self-Employment Tax in ${stateName}?`,
    description: `How much self-employment tax do I pay in ${stateName}? Calculate 1099 taxes, SE tax (15.3%), and take-home profit. ${noTax ? `${stateName} has no state income tax!` : ''} Free 2026 freelance calculator.`,
    keywords: `${stateName} freelance tax calculator, how much self employment tax ${stateNameLower}, ${stateNameLower} 1099 calculator, ${stateNameLower} independent contractor tax, freelance taxes ${stateNameLower}, 1099 vs w2 ${stateNameLower}, self employment tax rate ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/freelance-profit-hub/${params.state}/`
    },
    openGraph: {
      title: `${stateName} Freelance Tax Calculator 2026 | 1099 Self-Employment Tax`,
      description: `Calculate your freelance and self-employment taxes in ${stateName}. Free 1099 tax calculator.`,
      url: `https://quantcurb.com/freelance-profit-hub/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateFreelanceHubPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);
  const stateData = usStates.find(s => s.slug === params.state);

  if (!stateConfig || !stateData) {
    notFound();
  }

  const noTax = stateData.taxStatus === 'none';
  const howToSchema = generateFreelanceHowToSchema(stateConfig.name, stateConfig.slug, noTax);
  const faqSchema = generateFreelanceFAQSchema(stateConfig.name, noTax);
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
