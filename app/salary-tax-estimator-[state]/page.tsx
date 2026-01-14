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
    title: `Salary Tax Calculator - ${stateName} | Calculate Take-Home Pay 2025`,
    description: `Calculate your take-home pay in ${stateName} for 2025. See federal tax, state tax, FICA deductions, and your exact net pay with our ${stateName} salary calculator.`,
    keywords: `salary calculator ${stateName}, take home pay ${stateName}, ${stateName} tax calculator, ${stateName} income tax, net pay calculator ${stateName}`
  };
}

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

  return (
    <StateSalaryCalculatorClient 
      stateCode={stateCode} 
      stateName={stateName}
    />
  );
}
