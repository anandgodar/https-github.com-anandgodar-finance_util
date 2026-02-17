import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS, StateConfig } from '../../../lib/state-configs';
import { usStates } from '../../../lib/state-data';
import StateToolClient from './StateToolClient';

// Generate state-specific HowTo schema
function generateFIREHowToSchema(stateName: string, stateSlug: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate Your ${stateName} FIRE Number`,
    description: `Step-by-step guide to calculate your Financial Independence Retire Early (FIRE) number for retiring in ${stateName}.`,
    totalTime: 'PT4M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: `Estimate ${stateName} Living Expenses`,
        text: `Calculate your annual expenses for living in ${stateName}. Include housing, food, healthcare, transportation, taxes, and discretionary spending. ${noTax ? `${stateName} has no state income tax, which can lower your retirement expenses.` : `Factor in ${stateName} state income tax on retirement withdrawals.`}`
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Apply the 25x Rule',
        text: 'Multiply your annual expenses by 25 to get your FIRE number. This is based on the 4% safe withdrawal rate. For example, $60,000 annual expenses x 25 = $1,500,000 FIRE number.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Enter Current Savings',
        text: 'Input your current retirement savings including 401(k), IRA, brokerage accounts, and other investments. Exclude home equity and emergency funds.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Set Monthly Savings Rate',
        text: 'Enter how much you save each month. Higher savings rates dramatically accelerate your FIRE timeline. Aim for 30-50%+ savings rate for early retirement.'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Choose Investment Return Assumption',
        text: 'Set expected annual returns. Use 6-7% for conservative estimates (inflation-adjusted). Historical stock market averages 10% nominal, 7% real.'
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Review Your FIRE Timeline',
        text: `See when you can reach financial independence in ${stateName}. Compare Lean FIRE, regular FIRE, Fat FIRE, and Coast FIRE scenarios. ${noTax ? `${stateName}'s tax-free status can help your portfolio last longer.` : ''}`
      }
    ],
    tool: {
      '@type': 'HowToTool',
      name: `QuantCurb ${stateName} FIRE Calculator`
    }
  };
}

// Generate state-specific FAQ schema
function generateFIREFAQSchema(stateName: string, noTax: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${stateName} a good state for early retirement?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `${stateName} is excellent for early retirement because it has no state income tax. Your retirement withdrawals, Social Security, and investment income are not taxed at the state level, helping your portfolio last longer.`
            : `${stateName} can be good for retirement depending on your priorities. Consider state income tax on retirement withdrawals, cost of living, healthcare access, climate, and overall quality of life when deciding.`
        }
      },
      {
        '@type': 'Question',
        name: `What is the FIRE number needed to retire in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Your ${stateName} FIRE number depends on your annual expenses. Using the 4% rule: multiply your expected ${stateName} annual expenses by 25. If you need $50,000/year in ${stateName}, your FIRE number is $1,250,000.`
        }
      },
      {
        '@type': 'Question',
        name: `Does ${stateName} tax retirement income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `No, ${stateName} has no state income tax. Pension income, 401(k) withdrawals, IRA distributions, and Social Security benefits are all tax-free at the state level.`
            : `${stateName} may tax some forms of retirement income including pensions and retirement account withdrawals. Social Security may be partially or fully exempt. Check current ${stateName} tax rules for specifics.`
        }
      },
      {
        '@type': 'Question',
        name: `What is Coast FIRE and can I achieve it in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Coast FIRE means you have saved enough that compound growth alone will fund traditional retirement, even without additional savings. Your Coast FIRE number depends on age and expected returns. ${noTax ? `${stateName}'s no-tax status means your investments compound without state tax drag.` : `Factor ${stateName} taxes into your Coast FIRE calculations.`}`
        }
      },
      {
        '@type': 'Question',
        name: `How much should I save monthly to retire early in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Your monthly savings depends on your FIRE timeline and current savings. At 50% savings rate, you can reach FIRE in roughly 17 years. At 70%, about 8-9 years. Use our calculator to find your specific ${stateName} numbers.`
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
        name: 'FIRE Calculator',
        item: 'https://quantcurb.com/early-retirement-fire-planner/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateName} FIRE Calculator`,
        item: `https://quantcurb.com/early-retirement-fire-planner/${stateSlug}/`
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
      title: 'FIRE Calculator',
      description: 'Calculate your path to early retirement and financial independence'
    };
  }

  const stateName = stateData.name;
  const stateNameLower = stateName.toLowerCase();
  const noTax = stateData.taxStatus === 'none';

  return {
    title: `${stateName} FIRE Calculator 2026 | When Can I Retire in ${stateName}?`,
    description: `When can I retire in ${stateName}? Calculate your FIRE number and early retirement timeline. ${noTax ? `${stateName} has no state income tax - ideal for FIRE!` : ''} Coast FIRE, Lean FIRE, Fat FIRE. Free calculator.`,
    keywords: `${stateName} fire calculator, when can i retire ${stateNameLower}, ${stateNameLower} early retirement calculator, financial independence ${stateNameLower}, ${stateNameLower} fire number, how much to retire ${stateNameLower}, retire early ${stateNameLower}, coast fire ${stateNameLower}`,
    alternates: {
      canonical: `https://quantcurb.com/early-retirement-fire-planner/${params.state}/`
    },
    openGraph: {
      title: `${stateName} FIRE Calculator 2026 | When Can I Retire?`,
      description: `Calculate your path to financial independence in ${stateName}. Free FIRE calculator with Lean, Fat, and Coast FIRE options.`,
      url: `https://quantcurb.com/early-retirement-fire-planner/${params.state}/`,
      type: 'website',
    }
  };
}

export default function StateFIREPlannerPage({ params }: PageProps) {
  const stateConfig = getStateConfig(params.state);
  const stateData = usStates.find(s => s.slug === params.state);

  if (!stateConfig || !stateData) {
    notFound();
  }

  const noTax = stateData.taxStatus === 'none';
  const howToSchema = generateFIREHowToSchema(stateConfig.name, stateConfig.slug, noTax);
  const faqSchema = generateFIREFAQSchema(stateConfig.name, noTax);
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
