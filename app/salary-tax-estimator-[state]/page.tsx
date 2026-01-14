import React from 'react';
import { notFound } from 'next/navigation';
import StateSalaryCalculatorClient from './StateSalaryCalculatorClient';

// State code to state name mapping
const STATE_NAMES: Record<string, string> = {
  'alabama': 'Alabama',
  'alaska': 'Alaska',
  'arizona': 'Arizona',
  'arkansas': 'Arkansas',
  'california': 'California',
  'colorado': 'Colorado',
  'connecticut': 'Connecticut',
  'delaware': 'Delaware',
  'florida': 'Florida',
  'georgia': 'Georgia',
  'hawaii': 'Hawaii',
  'idaho': 'Idaho',
  'illinois': 'Illinois',
  'indiana': 'Indiana',
  'iowa': 'Iowa',
  'kansas': 'Kansas',
  'kentucky': 'Kentucky',
  'louisiana': 'Louisiana',
  'maine': 'Maine',
  'maryland': 'Maryland',
  'massachusetts': 'Massachusetts',
  'michigan': 'Michigan',
  'minnesota': 'Minnesota',
  'mississippi': 'Mississippi',
  'missouri': 'Missouri',
  'montana': 'Montana',
  'nebraska': 'Nebraska',
  'nevada': 'Nevada',
  'new-hampshire': 'New Hampshire',
  'new-jersey': 'New Jersey',
  'new-mexico': 'New Mexico',
  'new-york': 'New York',
  'north-carolina': 'North Carolina',
  'north-dakota': 'North Dakota',
  'ohio': 'Ohio',
  'oklahoma': 'Oklahoma',
  'oregon': 'Oregon',
  'pennsylvania': 'Pennsylvania',
  'rhode-island': 'Rhode Island',
  'south-carolina': 'South Carolina',
  'south-dakota': 'South Dakota',
  'tennessee': 'Tennessee',
  'texas': 'Texas',
  'utah': 'Utah',
  'vermont': 'Vermont',
  'virginia': 'Virginia',
  'washington': 'Washington',
  'west-virginia': 'West Virginia',
  'wisconsin': 'Wisconsin',
  'wyoming': 'Wyoming',
  'district-of-columbia': 'District of Columbia',
  'dc': 'District of Columbia',
};

// State name to state code mapping
const STATE_NAME_TO_CODE: Record<string, string> = {
  'alabama': 'AL',
  'alaska': 'AK',
  'arizona': 'AZ',
  'arkansas': 'AR',
  'california': 'CA',
  'colorado': 'CO',
  'connecticut': 'CT',
  'delaware': 'DE',
  'florida': 'FL',
  'georgia': 'GA',
  'hawaii': 'HI',
  'idaho': 'ID',
  'illinois': 'IL',
  'indiana': 'IN',
  'iowa': 'IA',
  'kansas': 'KS',
  'kentucky': 'KY',
  'louisiana': 'LA',
  'maine': 'ME',
  'maryland': 'MD',
  'massachusetts': 'MA',
  'michigan': 'MI',
  'minnesota': 'MN',
  'mississippi': 'MS',
  'missouri': 'MO',
  'montana': 'MT',
  'nebraska': 'NE',
  'nevada': 'NV',
  'new-hampshire': 'NH',
  'new-jersey': 'NJ',
  'new-mexico': 'NM',
  'new-york': 'NY',
  'north-carolina': 'NC',
  'north-dakota': 'ND',
  'ohio': 'OH',
  'oklahoma': 'OK',
  'oregon': 'OR',
  'pennsylvania': 'PA',
  'rhode-island': 'RI',
  'south-carolina': 'SC',
  'south-dakota': 'SD',
  'tennessee': 'TN',
  'texas': 'TX',
  'utah': 'UT',
  'vermont': 'VT',
  'virginia': 'VA',
  'washington': 'WA',
  'west-virginia': 'WV',
  'wisconsin': 'WI',
  'wyoming': 'WY',
  'district-of-columbia': 'DC',
  'dc': 'DC',
};

type PageProps = {
  params: {
    state: string;
  };
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(STATE_NAMES).map((state) => ({
    state: state.toLowerCase()
  }));
}

export function generateMetadata({ params }: PageProps) {
  if (!params?.state) {
    return {
      title: 'Salary Tax Calculator',
      description: 'Calculate your take-home pay after taxes.'
    };
  }

  const stateName = STATE_NAMES[params.state.toLowerCase()];
  
  if (!stateName) {
    return {
      title: 'Salary Tax Calculator',
      description: 'Calculate your take-home pay after taxes.'
    };
  }

  return {
    title: `${stateName} Salary Paycheck Calculator 2026 | Calculate Take-Home Pay`,
    description: `Calculate your take-home pay in ${stateName} for 2026. See federal tax, state tax, FICA deductions, and your exact net pay with our ${stateName} salary paycheck calculator.`,
    keywords: `${stateName} salary calculator, ${stateName} paycheck calculator, take home pay ${stateName}, ${stateName} tax calculator, ${stateName} income tax, net pay calculator ${stateName}`
  };
}

// State tax rate mapping (from SalaryCalculator component)
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

export default function StateSalaryCalculatorPage({ params }: PageProps) {
  if (!params?.state) {
    notFound();
  }

  const stateSlug = params.state.toLowerCase();
  const stateName = STATE_NAMES[stateSlug];
  const stateCode = STATE_NAME_TO_CODE[stateSlug];

  if (!stateName || !stateCode) {
    notFound();
  }

  const stateTaxRate = STATE_TAX_RATES[stateCode] ?? 0;

  return (
    <StateSalaryCalculatorClient 
      stateCode={stateCode} 
      stateName={stateName}
      stateTaxRate={stateTaxRate}
    />
  );
}
