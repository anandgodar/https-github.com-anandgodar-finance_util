// State-specific configuration for programmatic SEO and tool defaults

export interface StateConfig {
  name: string;
  code: string;
  slug: string;

  // Tax rates
  stateTaxRate: number; // Top marginal rate
  propertyTaxRate: number; // Avg residential
  salesTaxRate: number; // Combined state + avg local

  // Economic data
  avgHomePrice: number;
  medianIncome: number;
  costOfLivingIndex: number; // 100 = US average

  // Top metros in state
  topMetros: string[];

  // Tax advantages/disadvantages
  taxAdvantages: string[];

  // Retirement-specific
  retirementFriendly: boolean;
  socialSecurityTaxed: boolean;
  pensionTaxed: boolean;

  // Mortgage-specific
  firstTimeBuyerPrograms: string[];
  avgClosingCosts: number; // $

  // Freelance-specific
  llcFilingFee: number;
  annualFranchiseTax: number;

  // Employment data
  avgTechSalary?: number;
  techWorkerPct?: number;
}

export const STATE_CONFIGS: Record<string, StateConfig> = {
  texas: {
    name: 'Texas',
    code: 'TX',
    slug: 'texas',
    stateTaxRate: 0,
    propertyTaxRate: 1.80,
    salesTaxRate: 8.25,
    avgHomePrice: 350000,
    medianIncome: 67000,
    costOfLivingIndex: 91.5,
    topMetros: ['Houston', 'Austin', 'Dallas-Fort Worth', 'San Antonio'],
    taxAdvantages: [
      'No state income tax',
      'No capital gains tax',
      'No inheritance or estate tax',
    ],
    retirementFriendly: true,
    socialSecurityTaxed: false,
    pensionTaxed: false,
    firstTimeBuyerPrograms: [
      'Texas Bootstrap Loan Program',
      'My First Texas Home',
      'Homes for Texas Heroes',
    ],
    avgClosingCosts: 3200,
    llcFilingFee: 300,
    annualFranchiseTax: 0, // under $1.18M revenue threshold
    avgTechSalary: 115000,
    techWorkerPct: 12,
  },

  california: {
    name: 'California',
    code: 'CA',
    slug: 'california',
    stateTaxRate: 13.3, // Highest in nation
    propertyTaxRate: 0.76, // Protected by Prop 13
    salesTaxRate: 8.82, // Avg including local
    avgHomePrice: 720000,
    medianIncome: 84000,
    costOfLivingIndex: 142.2,
    topMetros: ['Los Angeles', 'San Francisco Bay Area', 'San Diego', 'Sacramento'],
    taxAdvantages: [
      'Prop 13 property tax caps (reassessment only on sale)',
    ],
    retirementFriendly: false,
    socialSecurityTaxed: false,
    pensionTaxed: true,
    firstTimeBuyerPrograms: [
      'CalHFA MyHome Assistance Program',
      'Dream For All Shared Appreciation Loan',
      'CalPLUS Conventional Loan',
    ],
    avgClosingCosts: 4800,
    llcFilingFee: 70,
    annualFranchiseTax: 800, // Minimum franchise tax
    avgTechSalary: 165000,
    techWorkerPct: 23,
  },

  florida: {
    name: 'Florida',
    code: 'FL',
    slug: 'florida',
    stateTaxRate: 0,
    propertyTaxRate: 0.98,
    salesTaxRate: 7.01,
    avgHomePrice: 410000,
    medianIncome: 63000,
    costOfLivingIndex: 99.6,
    topMetros: ['Miami', 'Tampa', 'Orlando', 'Jacksonville'],
    taxAdvantages: [
      'No state income tax',
      'No estate or inheritance tax',
      'Homestead exemption (up to $50K)',
    ],
    retirementFriendly: true,
    socialSecurityTaxed: false,
    pensionTaxed: false,
    firstTimeBuyerPrograms: [
      'Florida Housing Finance Corporation',
      'Florida Assist',
      'HFA Preferred',
    ],
    avgClosingCosts: 3500,
    llcFilingFee: 125,
    annualFranchiseTax: 138.75,
    avgTechSalary: 95000,
    techWorkerPct: 8,
  },

  'new-york': {
    name: 'New York',
    code: 'NY',
    slug: 'new-york',
    stateTaxRate: 10.9, // Top bracket
    propertyTaxRate: 1.72,
    salesTaxRate: 8.52,
    avgHomePrice: 480000,
    medianIncome: 75000,
    costOfLivingIndex: 125.8,
    topMetros: ['New York City', 'Buffalo', 'Rochester', 'Albany'],
    taxAdvantages: [
      'STAR property tax exemption (primary residence)',
    ],
    retirementFriendly: false,
    socialSecurityTaxed: false,
    pensionTaxed: true,
    firstTimeBuyerPrograms: [
      'SONYMA Mortgage Insurance Fund',
      'Achieving the Dream',
      'FHA Plus',
    ],
    avgClosingCosts: 5200,
    llcFilingFee: 200,
    annualFranchiseTax: 25, // Minimum
    avgTechSalary: 145000,
    techWorkerPct: 15,
  },

  washington: {
    name: 'Washington',
    code: 'WA',
    slug: 'washington',
    stateTaxRate: 0, // No income tax, but has capital gains tax (7% over $250K)
    propertyTaxRate: 0.98,
    salesTaxRate: 9.29, // Highest sales tax in US
    avgHomePrice: 580000,
    medianIncome: 82000,
    costOfLivingIndex: 115.2,
    topMetros: ['Seattle', 'Tacoma', 'Spokane', 'Bellevue'],
    taxAdvantages: [
      'No state income tax on wages',
      'No estate tax under $2.193M',
    ],
    retirementFriendly: true,
    socialSecurityTaxed: false,
    pensionTaxed: false,
    firstTimeBuyerPrograms: [
      'House Key Opportunity',
      'Home Advantage',
      'House Key Plus',
    ],
    avgClosingCosts: 4100,
    llcFilingFee: 200,
    annualFranchiseTax: 60,
    avgTechSalary: 155000,
    techWorkerPct: 19,
  },

  nevada: {
    name: 'Nevada',
    code: 'NV',
    slug: 'nevada',
    stateTaxRate: 0,
    propertyTaxRate: 0.69,
    salesTaxRate: 8.23,
    avgHomePrice: 430000,
    medianIncome: 66000,
    costOfLivingIndex: 104.5,
    topMetros: ['Las Vegas', 'Reno', 'Henderson', 'Carson City'],
    taxAdvantages: [
      'No state income tax',
      'No corporate income tax',
      'No franchise tax',
      'No estate or inheritance tax',
    ],
    retirementFriendly: true,
    socialSecurityTaxed: false,
    pensionTaxed: false,
    firstTimeBuyerPrograms: [
      'Nevada Rural Housing Authority',
      'Home is Possible',
    ],
    avgClosingCosts: 3300,
    llcFilingFee: 425,
    annualFranchiseTax: 0,
    avgTechSalary: 98000,
    techWorkerPct: 6,
  },

  // Add more states as needed...
};

// Helper functions
export function getStateByCode(code: string): StateConfig | undefined {
  return Object.values(STATE_CONFIGS).find(s => s.code === code);
}

export function getStateBySlug(slug: string): StateConfig | undefined {
  return STATE_CONFIGS[slug];
}

export function getAllStates(): StateConfig[] {
  return Object.values(STATE_CONFIGS);
}

export function getNoTaxStates(): StateConfig[] {
  return Object.values(STATE_CONFIGS).filter(s => s.stateTaxRate === 0);
}

export function getRetirementFriendlyStates(): StateConfig[] {
  return Object.values(STATE_CONFIGS).filter(s => s.retirementFriendly);
}

export function compareStates(slug1: string, slug2: string) {
  const state1 = STATE_CONFIGS[slug1];
  const state2 = STATE_CONFIGS[slug2];

  if (!state1 || !state2) return null;

  return {
    taxDifference: state1.stateTaxRate - state2.stateTaxRate,
    colDifference: state1.costOfLivingIndex - state2.costOfLivingIndex,
    homePriceDifference: state1.avgHomePrice - state2.avgHomePrice,
    incomeDifference: state1.medianIncome - state2.medianIncome,
  };
}
