/**
 * Central data layer for all 50 US states + DC
 * Used for programmatic SEO generation of state-specific salary calculator pages
 */

export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  taxStatus: 'none' | 'flat' | 'progressive';
  description: string; // Unique SEO text for each state
}

export const usStates: StateData[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    abbreviation: 'AL',
    taxStatus: 'progressive',
    description: 'Alabama has a progressive state income tax ranging from 2% to 5%. Use our calculator to see how Alabama\'s tax brackets affect your take-home pay compared to other states.'
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    abbreviation: 'AK',
    taxStatus: 'none',
    description: 'Alaska has no state income tax, making it one of the best states for maximizing your take-home pay. Your paycheck is only subject to federal and FICA taxes.'
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    taxStatus: 'flat',
    description: 'Arizona has a flat 2.5% state income tax rate as of 2023. This simple flat rate makes calculating your Arizona take-home pay straightforward compared to progressive tax states.'
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    abbreviation: 'AR',
    taxStatus: 'progressive',
    description: 'Arkansas has a progressive state income tax with rates from 2% to 4.4%. Calculate your exact take-home pay in Arkansas with our state-specific calculator.'
  },
  {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    taxStatus: 'progressive',
    description: 'California has one of the highest state income tax rates in the US, ranging from 1% up to 13.3% for top earners. It also has a high cost of living, making accurate net pay calculation essential for financial planning.'
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    taxStatus: 'flat',
    description: 'Colorado has a flat 4.4% state income tax rate, making it easy to calculate your take-home pay. Use our Colorado paycheck calculator to see your exact net pay after federal, state, and FICA taxes.'
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    taxStatus: 'progressive',
    description: 'Connecticut has a progressive state income tax with rates from 3% to 6.99%. Calculate your Connecticut take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    abbreviation: 'DE',
    taxStatus: 'progressive',
    description: 'Delaware has a progressive state income tax ranging from 0% to 6.6%. Use our Delaware paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    taxStatus: 'none',
    description: 'Florida has no state income tax, making it one of the most tax-friendly states for workers. Your paycheck is only subject to federal and FICA taxes, resulting in higher take-home pay.'
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    taxStatus: 'flat',
    description: 'Georgia has a flat 5.49% state income tax rate as of 2024. This flat rate simplifies tax calculations and makes it easy to estimate your Georgia take-home pay.'
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    abbreviation: 'HI',
    taxStatus: 'progressive',
    description: 'Hawaii has a progressive state income tax with rates from 1.4% to 11%. However, Hawaii also has one of the highest costs of living in the US, so accurate take-home pay calculation is crucial.'
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbreviation: 'ID',
    taxStatus: 'flat',
    description: 'Idaho has a flat 5.8% state income tax rate, making tax calculations straightforward. Use our Idaho paycheck calculator to see your exact net pay.'
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    abbreviation: 'IL',
    taxStatus: 'flat',
    description: 'Illinois has a flat 4.95% state income tax rate. This flat rate makes it easy to calculate your Illinois take-home pay compared to states with progressive tax brackets.'
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    abbreviation: 'IN',
    taxStatus: 'flat',
    description: 'Indiana has a flat 3.05% state income tax rate, one of the lowest flat rates in the country. Calculate your Indiana take-home pay to see how this low rate benefits your net income.'
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    abbreviation: 'IA',
    taxStatus: 'progressive',
    description: 'Iowa is transitioning to a flat tax system, currently with progressive rates from 4.4% to 5.7%. Use our Iowa paycheck calculator to see your exact take-home pay.'
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    abbreviation: 'KS',
    taxStatus: 'progressive',
    description: 'Kansas has a progressive state income tax with rates from 3.1% to 5.7%. Calculate your Kansas take-home pay to see how the state\'s tax brackets affect your net income.'
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    abbreviation: 'KY',
    taxStatus: 'flat',
    description: 'Kentucky has a flat 4% state income tax rate. This flat rate simplifies tax calculations and makes it easy to estimate your Kentucky take-home pay.'
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    abbreviation: 'LA',
    taxStatus: 'progressive',
    description: 'Louisiana has a progressive state income tax with rates from 1.85% to 4.25%. Use our Louisiana paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    taxStatus: 'progressive',
    description: 'Maine has a progressive state income tax with rates from 5.8% to 7.15%. Calculate your Maine take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    taxStatus: 'progressive',
    description: 'Maryland has a progressive state income tax with rates from 2% to 5.75%. Use our Maryland paycheck calculator to see your exact take-home pay after federal, state, and local taxes.'
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    taxStatus: 'flat',
    description: 'Massachusetts has a flat 5% state income tax rate (with an additional 4% surtax on income over $1 million). This flat rate makes calculating your Massachusetts take-home pay straightforward.'
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    abbreviation: 'MI',
    taxStatus: 'flat',
    description: 'Michigan has a flat 4.25% state income tax rate. Use our Michigan paycheck calculator to see your exact net pay after federal, state, and FICA taxes.'
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    abbreviation: 'MN',
    taxStatus: 'progressive',
    description: 'Minnesota has a progressive state income tax with rates from 5.35% to 9.85%. Calculate your Minnesota take-home pay to see how the state\'s tax brackets affect your net income.'
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    abbreviation: 'MS',
    taxStatus: 'flat',
    description: 'Mississippi has a flat 5% state income tax rate (for income above $10,000). This flat rate makes it easy to calculate your Mississippi take-home pay.'
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    abbreviation: 'MO',
    taxStatus: 'progressive',
    description: 'Missouri has a progressive state income tax with rates from 0% to 4.8%. Use our Missouri paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'Montana',
    slug: 'montana',
    abbreviation: 'MT',
    taxStatus: 'progressive',
    description: 'Montana has a progressive state income tax with rates from 4.7% to 5.9%. Calculate your Montana take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    abbreviation: 'NE',
    taxStatus: 'progressive',
    description: 'Nebraska has a progressive state income tax with rates from 2.46% to 5.84%. Use our Nebraska paycheck calculator to see your exact take-home pay.'
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    taxStatus: 'none',
    description: 'Nevada has no state income tax, making it one of the most tax-friendly states for workers. Your paycheck is only subject to federal and FICA taxes, resulting in higher take-home pay.'
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    taxStatus: 'none',
    description: 'New Hampshire does not tax earned wages, meaning your paycheck is only subject to Federal and FICA taxes. However, keep in mind the Investment Income Tax (Interest & Dividends Tax) on investment income.'
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    taxStatus: 'progressive',
    description: 'New Jersey has a progressive state income tax with rates from 1.4% to 10.75%. Calculate your New Jersey take-home pay to see how the state\'s tax brackets affect your net income.'
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    abbreviation: 'NM',
    taxStatus: 'progressive',
    description: 'New Mexico has a progressive state income tax with rates from 1.7% to 5.9%. Use our New Mexico paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    taxStatus: 'progressive',
    description: 'New York has a progressive state income tax with rates from 4% to 10.9%. New York City residents also pay local income tax. Calculate your exact New York take-home pay with our calculator.'
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    taxStatus: 'flat',
    description: 'North Carolina has a flat 4.5% state income tax rate. This flat rate makes it easy to calculate your North Carolina take-home pay compared to progressive tax states.'
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    abbreviation: 'ND',
    taxStatus: 'progressive',
    description: 'North Dakota has a progressive state income tax with rates from 1.1% to 2.9%. Use our North Dakota paycheck calculator to see your exact take-home pay.'
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    abbreviation: 'OH',
    taxStatus: 'progressive',
    description: 'Ohio has a progressive state income tax with rates from 0% to 3.99%. Calculate your Ohio take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    abbreviation: 'OK',
    taxStatus: 'progressive',
    description: 'Oklahoma has a progressive state income tax with rates from 0.25% to 5%. Use our Oklahoma paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbreviation: 'OR',
    taxStatus: 'progressive',
    description: 'Oregon has a progressive state income tax with rates from 4.75% to 9.9%. Calculate your Oregon take-home pay to see how the state\'s tax brackets affect your net income.'
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    abbreviation: 'PA',
    taxStatus: 'flat',
    description: 'Pennsylvania has a flat 3.07% state income tax rate. This flat rate makes calculating your Pennsylvania take-home pay straightforward compared to progressive tax states.'
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    taxStatus: 'progressive',
    description: 'Rhode Island has a progressive state income tax with rates from 3.75% to 5.99%. Use our Rhode Island paycheck calculator to see your exact take-home pay.'
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    taxStatus: 'progressive',
    description: 'South Carolina has a progressive state income tax with rates from 0% to 6.5%. Calculate your South Carolina take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    abbreviation: 'SD',
    taxStatus: 'none',
    description: 'South Dakota has no state income tax, making it one of the most tax-friendly states for workers. Your paycheck is only subject to federal and FICA taxes, resulting in higher take-home pay.'
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    abbreviation: 'TN',
    taxStatus: 'none',
    description: 'Tennessee has no state income tax on wages, making it one of the best states for maximizing your take-home pay. Your paycheck is only subject to federal and FICA taxes.'
  },
  {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    taxStatus: 'none',
    description: 'Texas is one of the few states with 0% state income tax. This means your take-home pay in Texas will be significantly higher than in states like California or New York, making it attractive for high earners.'
  },
  {
    name: 'Utah',
    slug: 'utah',
    abbreviation: 'UT',
    taxStatus: 'flat',
    description: 'Utah has a flat 4.85% state income tax rate. This flat rate makes it easy to calculate your Utah take-home pay compared to progressive tax states.'
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    abbreviation: 'VT',
    taxStatus: 'progressive',
    description: 'Vermont has a progressive state income tax with rates from 3.35% to 8.75%. Use our Vermont paycheck calculator to see your exact take-home pay after all deductions.'
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    taxStatus: 'progressive',
    description: 'Virginia has a progressive state income tax with rates from 2% to 5.75%. Calculate your Virginia take-home pay to see how the state\'s tax brackets affect your net income.'
  },
  {
    name: 'Washington',
    slug: 'washington',
    abbreviation: 'WA',
    taxStatus: 'none',
    description: 'Washington has no state income tax, making it one of the most tax-friendly states for workers. Your paycheck is only subject to federal and FICA taxes, resulting in higher take-home pay.'
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    abbreviation: 'WV',
    taxStatus: 'progressive',
    description: 'West Virginia has a progressive state income tax with rates from 3% to 6.5%. Use our West Virginia paycheck calculator to see your exact take-home pay.'
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbreviation: 'WI',
    taxStatus: 'progressive',
    description: 'Wisconsin has a progressive state income tax with rates from 3.54% to 7.65%. Calculate your Wisconsin take-home pay to see how the state\'s tax brackets impact your net income.'
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    abbreviation: 'WY',
    taxStatus: 'none',
    description: 'Wyoming has no state income tax, making it one of the most tax-friendly states for workers. Your paycheck is only subject to federal and FICA taxes, resulting in higher take-home pay.'
  },
  {
    name: 'District of Columbia',
    slug: 'district-of-columbia',
    abbreviation: 'DC',
    taxStatus: 'progressive',
    description: 'Washington DC has a progressive income tax with rates from 4% to 10.75%. Calculate your DC take-home pay to see how the district\'s tax brackets affect your net income.'
  }
];

// Helper function to find state by slug
export function getStateBySlug(slug: string): StateData | undefined {
  return usStates.find(state => state.slug === slug.toLowerCase());
}

// Helper function to find state by abbreviation
export function getStateByAbbreviation(abbr: string): StateData | undefined {
  return usStates.find(state => state.abbreviation.toUpperCase() === abbr.toUpperCase());
}
