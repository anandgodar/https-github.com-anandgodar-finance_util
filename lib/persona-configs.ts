// Persona-specific configuration for use case targeting

import { ToolType } from '../types';

export interface PersonaConfig {
  id: string;
  name: string;
  slug: string;
  description: string;

  // Demographics
  targetAudience: number; // US population size
  avgIncome: number;
  incomeRange: [number, number];

  // Pain points
  commonChallenges: string[];
  financialGoals: string[];

  // Recommended tools
  recommendedTools: ToolType[];

  // Content themes
  topSearchQueries: string[];
  contentAngles: string[];

  // Geographic correlation
  topStates?: string[];

  // Industry correlation
  industries?: string[];
}

export const PERSONA_CONFIGS: Record<string, PersonaConfig> = {
  'tech-workers': {
    id: 'tech-workers',
    name: 'Tech Workers',
    slug: 'tech-workers',
    description: 'Software engineers, product managers, data scientists, and tech professionals with equity compensation',
    targetAudience: 15_000_000,
    avgIncome: 150000,
    incomeRange: [80000, 400000],
    commonChallenges: [
      'Stock option taxation (ISO vs NSO)',
      'RSU vest schedules and tax planning',
      'Alternative Minimum Tax (AMT) optimization',
      'High 401(k) contributions vs mega backdoor Roth',
      'Multi-state remote work taxation',
      'Relocation packages and tax implications',
    ],
    financialGoals: [
      'Achieve FIRE by 45-50',
      'Maximize tax-advantaged accounts',
      'Leverage equity compensation for wealth building',
      'Relocate to no-tax states while keeping remote job',
    ],
    recommendedTools: [
      ToolType.FIRE_PLANNER,
      ToolType.SALARY_CALC,
      ToolType.RETIREMENT_OPTIMIZER,
      ToolType.EXCEL_MODELER, // For valuing employer stock
      ToolType.OPTIONS_STRATEGY_VISUALIZER,
    ],
    topSearchQueries: [
      'stock option tax calculator',
      'rsu tax calculator',
      'tech worker retirement calculator',
      'how to avoid AMT on ISOs',
      'mega backdoor roth calculator',
      'remote work state tax calculator',
    ],
    contentAngles: [
      'How to turn $500K in RSUs into $2M in 10 years',
      'The tax-optimal way to exercise stock options',
      'Why tech workers should consider moving to Texas/Washington',
      'FIRE on a tech salary: The 10-year plan',
    ],
    topStates: ['california', 'washington', 'texas', 'new-york', 'massachusetts'],
    industries: ['Software', 'Technology', 'Internet'],
  },

  'freelancers': {
    id: 'freelancers',
    name: 'Freelancers & Contractors',
    slug: 'freelancers',
    description: '1099 contractors, gig workers, consultants, and self-employed professionals',
    targetAudience: 59_000_000,
    avgIncome: 67000,
    incomeRange: [20000, 200000],
    commonChallenges: [
      'Quarterly estimated tax deadlines and calculations',
      'Self-employment tax (15.3% on net profit)',
      'Health insurance without employer coverage',
      'Inconsistent income and cash flow planning',
      'Business expense tracking and deductions',
      'Safe harbor rules to avoid IRS penalties',
    ],
    financialGoals: [
      'Minimize quarterly tax payments (legally)',
      'Find affordable health insurance',
      'Build 6-12 month emergency fund',
      'Retire with SEP IRA or Solo 401(k)',
    ],
    recommendedTools: [
      ToolType.QUARTERLY_TAX,
      ToolType.FREELANCE_PROFIT,
      ToolType.ACA_SUBSIDY,
      ToolType.EMERGENCY_FUND,
      ToolType.RETIREMENT_OPTIMIZER,
    ],
    topSearchQueries: [
      'freelancer tax calculator',
      'quarterly estimated taxes calculator',
      '1099 vs w2 calculator',
      'self employment tax calculator',
      'aca subsidy calculator',
      'sep ira vs solo 401k',
    ],
    contentAngles: [
      'Pay $0 in quarterly taxes (legally) using safe harbor',
      'The HYSA arbitrage: Earn 4.5% on your tax money',
      'How to get $600/month ACA subsidy as a freelancer',
      'S-Corp election: Is it worth it?',
    ],
    topStates: ['california', 'texas', 'florida', 'new-york', 'washington'],
    industries: ['Consulting', 'Creative Services', 'Transportation', 'Construction'],
  },

  'small-business': {
    id: 'small-business',
    name: 'Small Business Owners',
    slug: 'small-business',
    description: 'Owners of LLCs, S-Corps, and small businesses with employees',
    targetAudience: 33_000_000,
    avgIncome: 120000,
    incomeRange: [50000, 500000],
    commonChallenges: [
      'Entity selection (LLC vs S-Corp vs C-Corp)',
      'Payroll vs distributions optimization',
      'Qualified Business Income (QBI) deduction (20%)',
      'Hiring first employee (payroll taxes, workers comp)',
      'Business vs personal expense allocation',
      'State franchise taxes and annual fees',
    ],
    financialGoals: [
      'Minimize effective tax rate through entity optimization',
      'Build business to $1M+ revenue',
      'Exit strategy and business valuation',
      'Separate personal and business finances',
    ],
    recommendedTools: [
      ToolType.FREELANCE_PROFIT,
      ToolType.QUARTERLY_TAX,
      ToolType.SALARY_CALC, // For reasonable compensation
      ToolType.EXCEL_MODELER, // For business valuation
    ],
    topSearchQueries: [
      'llc vs s corp calculator',
      's corp reasonable salary calculator',
      'qbi deduction calculator',
      'small business tax calculator',
      'payroll tax calculator',
    ],
    contentAngles: [
      'S-Corp election: How to save $10K+ in taxes',
      'The reasonable compensation sweet spot',
      'QBI deduction: Are you leaving money on the table?',
      'When to hire your first employee (financially)',
    ],
    topStates: ['texas', 'florida', 'california', 'nevada', 'delaware'],
    industries: ['Retail', 'Professional Services', 'Healthcare', 'Food & Beverage'],
  },

  'remote-workers': {
    id: 'remote-workers',
    name: 'Remote Workers',
    slug: 'remote-workers',
    description: 'Full-time remote employees who can work from anywhere',
    targetAudience: 16_000_000,
    avgIncome: 95000,
    incomeRange: [60000, 200000],
    commonChallenges: [
      'Multi-state income tax withholding',
      'Choosing best state for remote work',
      'Home office deduction (if self-employed)',
      'Relocation tax arbitrage opportunities',
      'State residency rules (183-day test)',
      'Local tax nexus (NYC, SF)',
    ],
    financialGoals: [
      'Relocate to no-tax state and keep current salary',
      'Maximize tax savings through state selection',
      'Build location-independent income streams',
      'Optimize cost of living vs income',
    ],
    recommendedTools: [
      ToolType.SALARY_CALC,
      ToolType.LIVING_COST,
      ToolType.FIRE_PLANNER,
      ToolType.MORTGAGE_CALC,
    ],
    topSearchQueries: [
      'best states for remote workers',
      'california vs texas salary',
      'remote work state tax calculator',
      'cost of living comparison',
      'work from home tax deductions',
    ],
    contentAngles: [
      'Move from CA to TX and save $15K/year (same job)',
      'The ultimate remote work tax arbitrage guide',
      'Best cities for remote tech workers (COL + QOL)',
      'How to prove state residency for tax purposes',
    ],
    topStates: ['texas', 'florida', 'tennessee', 'nevada', 'washington'],
    industries: ['Technology', 'Marketing', 'Customer Service', 'Design'],
  },

  'pre-retirees': {
    id: 'pre-retirees',
    name: 'Pre-Retirees (55-64)',
    slug: 'pre-retirees',
    description: 'Workers within 10 years of retirement planning the transition',
    targetAudience: 10_000_000,
    avgIncome: 85000,
    incomeRange: [50000, 150000],
    commonChallenges: [
      'Catch-up contributions ($7,500 401k, $1,000 IRA)',
      'Roth conversion ladder strategy',
      'Medicare planning (starts at 65)',
      'Social Security claiming strategy (62 vs 70)',
      'Pension vs lump sum decisions',
      'Sequence of returns risk',
    ],
    financialGoals: [
      'Maximize retirement savings in final working years',
      'Plan Roth conversions before RMDs',
      'Determine safe withdrawal rate',
      'Healthcare bridge from retirement to Medicare',
    ],
    recommendedTools: [
      ToolType.FIRE_PLANNER,
      ToolType.RETIREMENT_OPTIMIZER,
      ToolType.ACA_SUBSIDY, // For early retirement before 65
      ToolType.INVESTMENT_CALC,
    ],
    topSearchQueries: [
      'retirement calculator',
      'how much do i need to retire',
      'roth conversion calculator',
      'social security calculator',
      'catch up contributions',
      '4 percent rule calculator',
    ],
    contentAngles: [
      'The Roth conversion sweet spot (retire at 60, convert before 65)',
      'How to retire at 62 with ACA subsidies',
      'Monte Carlo: Will your portfolio survive 30 years?',
      'Pension lump sum vs annuity: The math',
    ],
    topStates: ['florida', 'arizona', 'nevada', 'texas', 'north-carolina'],
  },

  'first-time-buyers': {
    id: 'first-time-buyers',
    name: 'First-Time Homebuyers',
    slug: 'first-time-buyers',
    description: 'Individuals purchasing their first home',
    targetAudience: 2_800_000, // Annual first-time buyers
    avgIncome: 78000,
    incomeRange: [50000, 150000],
    commonChallenges: [
      'Saving for down payment (3-20%)',
      'Understanding PMI and when it drops',
      'Qualifying for mortgage (debt-to-income ratio)',
      'Closing costs ($8,000-$15,000)',
      'First-time buyer programs by state',
      'Rent vs buy breakeven analysis',
    ],
    financialGoals: [
      'Save 20% down payment to avoid PMI',
      'Get pre-approved for mortgage',
      'Find home within budget',
      'Understand total cost of ownership',
    ],
    recommendedTools: [
      ToolType.MORTGAGE_CALC,
      ToolType.DTI_CALCULATOR,
      ToolType.SALARY_CALC,
      ToolType.LIVING_COST,
    ],
    topSearchQueries: [
      'how much house can i afford',
      'mortgage calculator',
      'first time home buyer calculator',
      'pmi calculator',
      'rent vs buy calculator',
      'down payment calculator',
    ],
    contentAngles: [
      'FHA 3.5% down: Good deal or PMI trap?',
      'First-time buyer programs that give you $10K+',
      'The real cost of a $400K house (not just the mortgage)',
      'Rent vs buy: The 5-year breakeven rule',
    ],
    topStates: ['texas', 'florida', 'arizona', 'north-carolina', 'georgia'],
  },

  'high-earners': {
    id: 'high-earners',
    name: 'High-Income Earners ($200K+)',
    slug: 'high-earners',
    description: 'Individuals and couples with AGI over $200K',
    targetAudience: 8_000_000,
    avgIncome: 350000,
    incomeRange: [200000, 2000000],
    commonChallenges: [
      'Alternative Minimum Tax (AMT)',
      'Net Investment Income Tax (3.8% NIIT)',
      'Backdoor Roth IRA (no direct contribution)',
      'Mega backdoor Roth ($45K after-tax 401k)',
      'Tax loss harvesting strategies',
      'Charitable giving optimization (DAF vs direct)',
    ],
    financialGoals: [
      'Minimize effective tax rate (below 25%)',
      'Max out all tax-advantaged accounts',
      'Build taxable brokerage for early retirement',
      'Estate planning and wealth transfer',
    ],
    recommendedTools: [
      ToolType.SALARY_CALC,
      ToolType.RETIREMENT_OPTIMIZER,
      ToolType.INVESTMENT_CALC,
      ToolType.CRYPTO_TAX_LOSS, // Tax loss harvesting
      ToolType.FIRE_PLANNER,
    ],
    topSearchQueries: [
      'backdoor roth calculator',
      'mega backdoor roth calculator',
      'amt calculator',
      'tax loss harvesting calculator',
      'high income tax strategies',
      'donor advised fund calculator',
    ],
    contentAngles: [
      'The $200K+ tax playbook: 15 strategies',
      'Backdoor Roth: The $100K+ loophole',
      'How to legally pay 15% tax on $500K income',
      'AMT: How to avoid it (or minimize it)',
    ],
    topStates: ['california', 'new-york', 'massachusetts', 'washington', 'texas'],
    industries: ['Finance', 'Technology', 'Healthcare', 'Law'],
  },

  'parents': {
    id: 'parents',
    name: 'Parents',
    slug: 'parents',
    description: 'Parents with dependent children',
    targetAudience: 40_000_000, // US households with kids
    avgIncome: 72000,
    incomeRange: [30000, 200000],
    commonChallenges: [
      'Child Tax Credit eligibility and phaseouts',
      'Dependent Care FSA ($5,000 limit)',
      '529 college savings planning',
      'Childcare costs ($1,000-$2,000/month)',
      'Life insurance needs calculation',
      'Tax filing status (married vs head of household)',
    ],
    financialGoals: [
      'Maximize CTC and EITC benefits',
      'Save for college (529 plans)',
      'Balance retirement vs college savings',
      'Adequate life insurance coverage',
    ],
    recommendedTools: [
      ToolType.CHILD_TAX_CREDIT,
      ToolType.SALARY_CALC,
      ToolType.INVESTMENT_CALC, // For 529 planning
      ToolType.EMERGENCY_FUND,
    ],
    topSearchQueries: [
      'child tax credit calculator',
      'how much is child tax credit',
      '529 plan calculator',
      'dependent care fsa',
      'life insurance calculator',
      'eitc calculator',
    ],
    contentAngles: [
      'Child Tax Credit 2026: Who gets the full $2,000?',
      'Dependent Care FSA: The $1,000+ tax break you're missing',
      '529 vs UTMA vs Roth IRA: Best way to save for college',
      'Life insurance: How much do parents really need?',
    ],
    topStates: ['All states'],
  },
};

// Helper functions
export function getPersonaBySlug(slug: string): PersonaConfig | undefined {
  return PERSONA_CONFIGS[slug];
}

export function getAllPersonas(): PersonaConfig[] {
  return Object.values(PERSONA_CONFIGS);
}

export function getPersonasByIncome(minIncome: number): PersonaConfig[] {
  return Object.values(PERSONA_CONFIGS).filter(
    p => p.avgIncome >= minIncome
  );
}

export function getPersonasByState(state: string): PersonaConfig[] {
  return Object.values(PERSONA_CONFIGS).filter(
    p => !p.topStates || p.topStates.includes(state)
  );
}
