import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

// Generate state-specific HowTo schema
function generateQuarterlyTaxHowToSchema(stateName: string, stateSlug: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate ${stateName} Quarterly Estimated Taxes`,
    description: `Step-by-step guide to calculate and pay quarterly estimated taxes in ${stateName} for self-employed individuals, freelancers, and 1099 workers.`,
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Estimate Annual Income',
        text: 'Project your total income for the year from self-employment, freelancing, 1099 work, investments, and other sources without tax withholding.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Calculate Self-Employment Tax',
        text: 'Self-employment tax is 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of net self-employment earnings. This is in addition to income tax.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Estimate Federal Income Tax',
        text: 'Calculate federal income tax based on projected taxable income and filing status. Subtract deductions including half of SE tax, QBI deduction, and business expenses.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: noTax ? `Enjoy ${stateName}'s No State Income Tax` : `Calculate ${stateName} State Tax`,
        text: noTax
          ? `${stateName} has no state income tax! You only need to pay federal quarterly estimated taxes. This significantly simplifies your quarterly tax planning.`
          : `Add ${stateName} state estimated tax to your federal estimates. ${stateName} may have different quarterly payment requirements and deadlines.`
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Apply Safe Harbor Rules',
        text: 'To avoid penalties, pay at least 90% of current year tax OR 100% of prior year tax (110% if AGI over $150,000). Safe harbor protects you even if you underestimate.'
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Pay Quarterly by Deadlines',
        text: 'Divide total estimated tax by 4. Pay federal via IRS Direct Pay or EFTPS by April 15, June 15, September 15, January 15. Mark your calendar to avoid late penalties.'
      }
    ],
    tool: {
      '@type': 'HowToTool',
      name: `QuantCurb ${stateName} Quarterly Tax Calculator`
    }
  };
}

// Generate state-specific FAQ schema
function generateQuarterlyTaxFAQSchema(stateName: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do I need to pay quarterly taxes in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `In ${stateName}, you only need to pay federal quarterly estimated taxes since the state has no income tax. If you expect to owe $1,000+ in federal taxes after withholding, make quarterly payments.`
            : `Yes, if you have ${stateName} income without withholding and expect to owe ${stateName} state taxes, you need to make quarterly payments to both the IRS (federal) and ${stateName} Department of Revenue.`
        }
      },
      {
        '@type': 'Question',
        name: `What are the quarterly tax deadlines in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Federal quarterly tax deadlines are April 15, June 15, September 15, and January 15 (of the following year). ${noTax ? 'Since ' + stateName + ' has no income tax, these are the only deadlines you need to track.' : stateName + ' state deadlines may differ - check your state tax authority for specific dates.'}`
        }
      },
      {
        '@type': 'Question',
        name: `What happens if I miss a quarterly tax payment in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Missing federal quarterly payments incurs underpayment penalties (currently around 8% annual rate). The penalty is calculated on the shortfall from the due date to payment date. ${noTax ? '' : stateName + ' may also assess state penalties.'} Use safe harbor rules to avoid penalties.`
        }
      },
      {
        '@type': 'Question',
        name: `How do I calculate safe harbor for ${stateName} taxes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Pay either 90% of current year tax liability OR 100% of last year's tax (110% if AGI exceeded $150,000). Meeting either threshold protects you from underpayment penalties even if you owe at tax time.`
        }
      },
      {
        '@type': 'Question',
        name: `Can I pay all estimated taxes at once instead of quarterly in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can pay all estimated taxes in April for the full year, but if income fluctuates, this may cause cash flow issues. The IRS also offers the annualized income method if income is uneven throughout the year.`
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
    title: `${stateName} Quarterly Tax Calculator 2026 | How Much Are My Estimated Taxes?`,
    description: `How much are my quarterly estimated taxes in ${stateName}? Calculate federal${noTax ? '' : ` and ${stateName}`} quarterly payments. Safe harbor rules, due dates, and payment methods. ${noTax ? 'No state estimated tax needed!' : ''} Free 2026 calculator.`,
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
  const howToSchema = generateQuarterlyTaxHowToSchema(stateConfig.name, stateConfig.slug, noTax);
  const faqSchema = generateQuarterlyTaxFAQSchema(stateConfig.name, noTax);
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
