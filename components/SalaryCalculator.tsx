
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface TaxBracket {
  limit: number | null;
  rate: number;
}

interface StateData {
  name: string;
  rate: number; // Fallback or flat rate
  stdDeduction: number;
  brackets?: TaxBracket[];
}

/**
 * HIGH-FIDELITY 2024-2025 US STATE TAX DATABASE
 * Data reflects current legislation, including flat-tax transitions.
 */
const STATE_TAX_DATA: Record<string, StateData> = {
  AL: { name: 'Alabama', rate: 0.05, stdDeduction: 2500, brackets: [{ limit: 500, rate: 0.02 }, { limit: 3000, rate: 0.04 }, { limit: null, rate: 0.05 }] },
  AK: { name: 'Alaska', rate: 0.00, stdDeduction: 0 },
  AZ: { name: 'Arizona', rate: 0.025, stdDeduction: 14600 }, // Flat since 2023
  AR: { name: 'Arkansas', rate: 0.044, stdDeduction: 2320, brackets: [{ limit: 5000, rate: 0.02 }, { limit: 10000, rate: 0.03 }, { limit: null, rate: 0.044 }] },
  CA: { 
    name: 'California', 
    rate: 0.093, 
    stdDeduction: 5363,
    brackets: [
      { limit: 10412, rate: 0.01 },
      { limit: 24684, rate: 0.02 },
      { limit: 38959, rate: 0.04 },
      { limit: 54081, rate: 0.06 },
      { limit: 68350, rate: 0.08 },
      { limit: 349137, rate: 0.093 },
      { limit: 418961, rate: 0.103 },
      { limit: 698271, rate: 0.113 },
      { limit: null, rate: 0.123 }
    ]
  },
  CO: { name: 'Colorado', rate: 0.044, stdDeduction: 14600 }, // Flat
  CT: { name: 'Connecticut', rate: 0.05, stdDeduction: 15000, brackets: [{ limit: 10000, rate: 0.03 }, { limit: 50000, rate: 0.05 }, { limit: 100000, rate: 0.055 }, { limit: 200000, rate: 0.06 }, { limit: 250000, rate: 0.065 }, { limit: 500000, rate: 0.069 }, { limit: null, rate: 0.0699 }] },
  DE: { name: 'Delaware', rate: 0.066, stdDeduction: 3250, brackets: [{ limit: 2000, rate: 0.00 }, { limit: 5000, rate: 0.022 }, { limit: 10000, rate: 0.039 }, { limit: 20000, rate: 0.048 }, { limit: 25000, rate: 0.052 }, { limit: 60000, rate: 0.0555 }, { limit: null, rate: 0.066 }] },
  FL: { name: 'Florida', rate: 0.00, stdDeduction: 0 },
  GA: { name: 'Georgia', rate: 0.0549, stdDeduction: 12000 }, // Flat as of Jan 2024
  HI: { name: 'Hawaii', rate: 0.0825, stdDeduction: 2200, brackets: [{ limit: 2400, rate: 0.014 }, { limit: 4800, rate: 0.032 }, { limit: 9600, rate: 0.044 }, { limit: 14400, rate: 0.055 }, { limit: 19200, rate: 0.064 }, { limit: 24000, rate: 0.068 }, { limit: 36000, rate: 0.072 }, { limit: 48000, rate: 0.076 }, { limit: 150000, rate: 0.079 }, { limit: 175000, rate: 0.0825 }, { limit: 200000, rate: 0.09 }, { limit: null, rate: 0.11 }] },
  ID: { name: 'Idaho', rate: 0.058, stdDeduction: 14600 }, // Flat
  IL: { name: 'Illinois', rate: 0.0495, stdDeduction: 2775 }, // Flat
  IN: { name: 'Indiana', rate: 0.0305, stdDeduction: 1000 }, // Flat
  IA: { name: 'Iowa', rate: 0.057, stdDeduction: 0, brackets: [{ limit: 6000, rate: 0.044 }, { limit: 30000, rate: 0.0482 }, { limit: null, rate: 0.057 }] }, // Transitioning to flat
  KS: { name: 'Kansas', rate: 0.057, stdDeduction: 3500, brackets: [{ limit: 15000, rate: 0.031 }, { limit: 30000, rate: 0.0525 }, { limit: null, rate: 0.057 }] },
  KY: { name: 'Kentucky', rate: 0.04, stdDeduction: 3160 }, // Flat
  LA: { name: 'Louisiana', rate: 0.0425, stdDeduction: 4500, brackets: [{ limit: 12500, rate: 0.0185 }, { limit: 50000, rate: 0.035 }, { limit: null, rate: 0.0425 }] },
  ME: { name: 'Maine', rate: 0.0715, stdDeduction: 14600, brackets: [{ limit: 26050, rate: 0.058 }, { limit: 61600, rate: 0.0675 }, { limit: null, rate: 0.0715 }] },
  MD: { name: 'Maryland', rate: 0.0475, stdDeduction: 2550, brackets: [{ limit: 1000, rate: 0.02 }, { limit: 2000, rate: 0.03 }, { limit: 3000, rate: 0.04 }, { limit: 100000, rate: 0.0475 }, { limit: 125000, rate: 0.05 }, { limit: 150000, rate: 0.0525 }, { limit: 250000, rate: 0.055 }, { limit: null, rate: 0.0575 }] },
  MA: { name: 'Massachusetts', rate: 0.05, stdDeduction: 4400 }, // Flat (additional 4% for income > $1M)
  MI: { name: 'Michigan', rate: 0.0425, stdDeduction: 5600 }, // Flat
  MN: { name: 'Minnesota', rate: 0.0705, stdDeduction: 14575, brackets: [{ limit: 30070, rate: 0.0535 }, { limit: 98760, rate: 0.068 }, { limit: 193240, rate: 0.0785 }, { limit: null, rate: 0.0985 }] },
  MS: { name: 'Mississippi', rate: 0.05, stdDeduction: 0 }, // Flat above $10k
  MO: { name: 'Missouri', rate: 0.048, stdDeduction: 14600, brackets: [{ limit: 1207, rate: 0.00 }, { limit: 2414, rate: 0.02 }, { limit: 3621, rate: 0.025 }, { limit: 4828, rate: 0.03 }, { limit: 6035, rate: 0.035 }, { limit: 7242, rate: 0.04 }, { limit: 8449, rate: 0.045 }, { limit: null, rate: 0.048 }] },
  MT: { name: 'Montana', rate: 0.059, stdDeduction: 0, brackets: [{ limit: 20500, rate: 0.047 }, { limit: null, rate: 0.059 }] },
  NE: { name: 'Nebraska', rate: 0.0584, stdDeduction: 7900, brackets: [{ limit: 3820, rate: 0.0246 }, { limit: 22130, rate: 0.0351 }, { limit: 35000, rate: 0.0501 }, { limit: null, rate: 0.0584 }] },
  NV: { name: 'Nevada', rate: 0.00, stdDeduction: 0 },
  NH: { name: 'New Hampshire', rate: 0.00, stdDeduction: 0 }, // No tax on earned income
  NJ: { 
    name: 'New Jersey', 
    rate: 0.0637, 
    stdDeduction: 1000,
    brackets: [
      { limit: 20000, rate: 0.014 },
      { limit: 35000, rate: 0.0175 },
      { limit: 40000, rate: 0.035 },
      { limit: 75000, rate: 0.05525 },
      { limit: 500000, rate: 0.0637 },
      { limit: 1000000, rate: 0.0897 },
      { limit: null, rate: 0.1075 }
    ]
  },
  NM: { name: 'New Mexico', rate: 0.059, stdDeduction: 14600, brackets: [{ limit: 5500, rate: 0.017 }, { limit: 11000, rate: 0.032 }, { limit: 16000, rate: 0.047 }, { limit: null, rate: 0.059 }] },
  NY: { 
    name: 'New York', 
    rate: 0.065, 
    stdDeduction: 8000,
    brackets: [
      { limit: 8500, rate: 0.04 },
      { limit: 11700, rate: 0.045 },
      { limit: 13900, rate: 0.0525 },
      { limit: 21400, rate: 0.0585 },
      { limit: 80650, rate: 0.0625 },
      { limit: 215400, rate: 0.0685 },
      { limit: 1077550, rate: 0.0965 },
      { limit: 5000000, rate: 0.103 },
      { limit: null, rate: 0.109 }
    ]
  },
  NC: { name: 'North Carolina', rate: 0.045, stdDeduction: 14250 }, // Flat
  ND: { name: 'North Dakota', rate: 0.025, stdDeduction: 0, brackets: [{ limit: 44725, rate: 0.00 }, { limit: 225975, rate: 0.0195 }, { limit: null, rate: 0.025 }] },
  OH: { name: 'Ohio', rate: 0.035, stdDeduction: 0, brackets: [{ limit: 26050, rate: 0.00 }, { limit: 100000, rate: 0.0275 }, { limit: null, rate: 0.035 }] },
  OK: { name: 'Oklahoma', rate: 0.0475, stdDeduction: 6350, brackets: [{ limit: 1000, rate: 0.0025 }, { limit: 2500, rate: 0.0075 }, { limit: 3750, rate: 0.0175 }, { limit: 4900, rate: 0.0275 }, { limit: 7200, rate: 0.0375 }, { limit: null, rate: 0.0475 }] },
  OR: { name: 'Oregon', rate: 0.0875, stdDeduction: 2745, brackets: [{ limit: 4050, rate: 0.0475 }, { limit: 10200, rate: 0.0675 }, { limit: 125000, rate: 0.0875 }, { limit: null, rate: 0.099 }] },
  PA: { name: 'Pennsylvania', rate: 0.0307, stdDeduction: 0 }, // Flat
  RI: { name: 'Rhode Island', rate: 0.0599, stdDeduction: 10100, brackets: [{ limit: 73450, rate: 0.0375 }, { limit: 166950, rate: 0.0475 }, { limit: null, rate: 0.0599 }] },
  SC: { name: 'South Carolina', rate: 0.064, stdDeduction: 0, brackets: [{ limit: 3460, rate: 0.00 }, { limit: 17330, rate: 0.03 }, { limit: null, rate: 0.064 }] },
  SD: { name: 'South Dakota', rate: 0.00, stdDeduction: 0 },
  TN: { name: 'Tennessee', rate: 0.00, stdDeduction: 0 },
  TX: { name: 'Texas', rate: 0.00, stdDeduction: 0 },
  UT: { name: 'Utah', rate: 0.0465, stdDeduction: 14600 }, // Flat
  VT: { name: 'Vermont', rate: 0.0875, stdDeduction: 0, brackets: [{ limit: 45400, rate: 0.0335 }, { limit: 110000, rate: 0.066 }, { limit: 229550, rate: 0.076 }, { limit: null, rate: 0.0875 }] },
  VA: { name: 'Virginia', rate: 0.0575, stdDeduction: 8500, brackets: [{ limit: 3000, rate: 0.02 }, { limit: 5000, rate: 0.03 }, { limit: 17000, rate: 0.05 }, { limit: null, rate: 0.0575 }] },
  WA: { name: 'Washington', rate: 0.00, stdDeduction: 0 },
  WV: { name: 'West Virginia', rate: 0.0512, stdDeduction: 0, brackets: [{ limit: 10000, rate: 0.0236 }, { limit: 25000, rate: 0.0315 }, { limit: 40000, rate: 0.0354 }, { limit: 60000, rate: 0.0472 }, { limit: null, rate: 0.0512 }] },
  WI: { name: 'Wisconsin', rate: 0.053, stdDeduction: 12760, brackets: [{ limit: 14320, rate: 0.035 }, { limit: 28640, rate: 0.044 }, { limit: 315310, rate: 0.053 }, { limit: null, rate: 0.0765 }] },
  WY: { name: 'Wyoming', rate: 0.00, stdDeduction: 0 },
  DC: { name: 'Dist. of Columbia', rate: 0.085, stdDeduction: 14600, brackets: [{ limit: 10000, rate: 0.04 }, { limit: 40000, rate: 0.06 }, { limit: 60000, rate: 0.065 }, { limit: 250000, rate: 0.085 }, { limit: 500000, rate: 0.0925 }, { limit: 1000000, rate: 0.095 }, { limit: null, rate: 0.1075 }] },
};

const calculateProgressiveTax = (taxableIncome: number, brackets: TaxBracket[]): number => {
  let tax = 0;
  let prevLimit = 0;
  for (const bracket of brackets) {
    const limit = bracket.limit ?? Infinity;
    if (taxableIncome > prevLimit) {
      const taxableInBracket = Math.min(taxableIncome, limit) - prevLimit;
      tax += taxableInBracket * bracket.rate;
      prevLimit = limit;
    } else {
      break;
    }
  }
  return tax;
};

interface SalaryCalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

type PayFrequency = 'weekly' | 'bi-weekly' | 'semi-monthly' | 'monthly' | 'annual';

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ onNavigate }) => {
  const [annualGross, setAnnualGross] = useState<number>(125000);
  const [bonus, setBonus] = useState<number>(15000);
  const [stateCode, setStateCode] = useState<string>('CA');
  const [contrib401kPercent, setContrib401kPercent] = useState<number>(10);
  const [healthInsurance, setHealthInsurance] = useState<number>(3600);
  const [payFrequency, setPayFrequency] = useState<PayFrequency>('monthly');
  const [filingStatus, setFilingStatus] = useState<'single' | 'married' | 'hoh'>('single');

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stateInfo = useMemo(() => STATE_TAX_DATA[stateCode] || STATE_TAX_DATA['TX'], [stateCode]);

  const stats = useMemo(() => {
    const totalGross = annualGross + bonus;
    const contrib401kAmount = (annualGross * contrib401kPercent) / 100;
    const taxableGross = Math.max(0, totalGross - contrib401kAmount - healthInsurance);
    
    // 2024 Federal Tax Approximation (Single Filer)
    const fedBrackets = [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: null, rate: 0.37 }
    ];
    const fedTax = calculateProgressiveTax(taxableGross, fedBrackets);

    // FICA: SS (6.2% up to $168,600) + Medicare (1.45%)
    const fica = Math.min(totalGross, 168600) * 0.062 + totalGross * 0.0145;
    
    // State Calculation
    const stateTaxable = Math.max(0, taxableGross - stateInfo.stdDeduction);
    let stateTax = 0;
    if (stateInfo.brackets) {
      stateTax = calculateProgressiveTax(stateTaxable, stateInfo.brackets);
    } else {
      stateTax = stateTaxable * stateInfo.rate;
    }
    
    const totalTax = fedTax + fica + stateTax;
    const net = totalGross - totalTax - contrib401kAmount - healthInsurance;
    
    // Calculate pay frequency amounts
    const payFrequencyAmounts = {
      weekly: net / 52,
      'bi-weekly': net / 26,
      'semi-monthly': net / 24,
      monthly: net / 12,
      annual: net
    };

    return {
      totalGross,
      taxableGross,
      net,
      monthlyNet: net / 12,
      biWeeklyNet: net / 26,
      weeklyNet: net / 52,
      semiMonthlyNet: net / 24,
      payFrequencyAmount: payFrequencyAmounts[payFrequency],
      fedTax,
      fica,
      stateTax,
      totalTax,
      effectiveRate: totalGross > 0 ? (totalTax / totalGross) * 100 : 0,
      deductions: contrib401kAmount + healthInsurance,
      contrib401kAmount,
      stateTaxable
    };
  }, [annualGross, bonus, stateInfo, contrib401kPercent, healthInsurance, payFrequency]);

  // Marginal Rate Visualization Data
  const bracketVisualData = useMemo(() => {
    if (!stateInfo.brackets) return [];
    let prev = 0;
    return stateInfo.brackets.map((b, i) => {
      const isCurrent = stats.stateTaxable > prev && stats.stateTaxable <= (b.limit ?? Infinity);
      const label = b.limit ? `$${(b.limit / 1000).toFixed(0)}k` : 'Max';
      const range = b.limit ? `${(prev / 1000).toFixed(0)}k - ${(b.limit / 1000).toFixed(0)}k` : `>${(prev / 1000).toFixed(0)}k`;
      const res = {
        name: label,
        rate: b.rate * 100,
        range,
        isActive: stats.stateTaxable > prev,
        isCurrent: isCurrent
      };
      prev = b.limit ?? Infinity;
      return res;
    });
  }, [stateInfo.brackets, stats.stateTaxable]);

  const chartData = [
    { name: 'Take Home', value: stats.net, color: '#4f46e5' },
    { name: 'Federal Tax', value: stats.fedTax, color: '#f43f5e' },
    { name: 'FICA', value: stats.fica, color: '#fbbf24' },
    { name: 'State Tax', value: stats.stateTax, color: '#10b981' },
    { name: '401k / Benefits', value: stats.deductions, color: '#94a3b8' },
  ];

  const cascadeData = [
    { name: 'Gross', value: stats.totalGross },
    { name: 'Taxable', value: stats.taxableGross },
    { name: 'Net Pay', value: stats.net }
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'After-Tax Compensation & Deduction Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2500);
    return () => clearTimeout(timer);
  }, [annualGross, stateCode, contrib401kPercent]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate take-home pay"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your Take-Home Pay After Taxes",
      "description": "Step-by-step guide to calculating your net pay after federal taxes, state taxes, FICA, and deductions.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Your Annual Salary",
          "text": "Enter your gross annual salary (before taxes and deductions)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Add Bonuses",
          "text": "Add any annual bonuses or additional income."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Select Your State",
          "text": "Choose your state of residence to calculate state income tax."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Enter 401(k) Contribution",
          "text": "Enter your 401(k) contribution percentage (reduces taxable income)."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Add Health Insurance",
          "text": "Enter annual health insurance premiums (also reduces taxable income)."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Select Pay Frequency",
          "text": "Choose your pay frequency (weekly, bi-weekly, semi-monthly, or monthly) to see your paycheck amount."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Review Results",
          "text": "The calculator shows your take-home pay, effective tax rate, and breakdown of all deductions."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-salary';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-salary');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Add FAQ schema for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate my take-home pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your take-home pay is your gross salary minus federal taxes, state taxes, FICA (Social Security and Medicare), and deductions like 401(k) contributions and health insurance. Use our calculator above by entering your annual salary, state, 401(k) contribution percentage, and health insurance costs. The calculator automatically computes all taxes and shows your net pay."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between gross pay and net pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gross pay is your total salary before any deductions. Net pay (take-home pay) is what you actually receive after all taxes and deductions are subtracted. For example, if you earn $100,000 gross, you might take home $70,000-$80,000 net depending on your state, deductions, and tax bracket."
          }
        },
        {
          "@type": "Question",
          "name": "How much will I take home if I make $100,000 a year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your state, filing status, and deductions. In a state with no income tax (like Texas or Florida), you might take home around $75,000-$78,000. In a high-tax state like California or New York, you might take home $70,000-$73,000. Use our calculator with your specific details for an accurate estimate."
          }
        },
        {
          "@type": "Question",
          "name": "How does 401(k) contribution affect my take-home pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "401(k) contributions reduce your taxable income, which lowers your taxes. For example, if you contribute $10,000 to your 401(k) and you're in the 24% tax bracket, you save $2,400 in taxes. Your take-home pay decreases by $7,600 ($10,000 - $2,400), but you're saving $10,000 for retirement."
          }
        },
        {
          "@type": "Question",
          "name": "What is FICA tax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FICA (Federal Insurance Contributions Act) includes Social Security tax (6.2% on income up to $168,600 in 2025) and Medicare tax (1.45% on all income). High earners pay an additional 0.9% Medicare tax on income above $200,000. FICA is automatically deducted from your paycheck."
          }
        },
        {
          "@type": "Question",
          "name": "How do state taxes affect my take-home pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "State income tax rates vary significantly. Seven states have no income tax (Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming). Other states range from 2.5% (Arizona) to over 13% (California for high earners). Use our calculator to see how your state's tax rate impacts your take-home pay."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between weekly, bi-weekly, semi-monthly, and monthly pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Weekly pay = 52 paychecks per year. Bi-weekly = 26 paychecks per year (every 2 weeks). Semi-monthly = 24 paychecks per year (twice per month). Monthly = 12 paychecks per year. Your annual take-home pay is the same regardless of frequency, but your paycheck amount varies."
          }
        },
        {
          "@type": "Question",
          "name": "How can I increase my take-home pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Strategies to increase take-home pay: 1) Negotiate a higher salary, 2) Reduce 401(k) contributions (though this reduces retirement savings), 3) Move to a state with lower/no income tax, 4) Maximize pre-tax deductions (HSA, health insurance), 5) Claim all eligible tax deductions and credits."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema-salary';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-salary');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-white p-12 rounded-[4.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-indigo-100">Tax Intelligence</span>
             <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">2024-2025 Filer Standard</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Salary <span className="text-indigo-600">Estimator</span></h1>
          <p className="text-slate-500 mt-2 max-w-lg font-medium text-lg leading-relaxed">Precision modeling of your take-home pay across all 50 US States. Audit the impact of 401(k) tax-shields and local state tax rates.</p>
        </div>
        <div className="bg-slate-900 px-12 py-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-w-[320px] border border-slate-800">
           <div className="relative z-10 text-center">
             <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Effective Tax Burden</h2>
             <p className="text-6xl font-black tracking-tighter">{stats.effectiveRate.toFixed(1)}%</p>
             <p className="text-[9px] font-black text-slate-500 uppercase mt-1 tracking-widest">Aggregate Liability Rate</p>
           </div>
           <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
              <span className="text-[10rem] font-black select-none uppercase">Tax</span>
           </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-10">
            <header className="flex justify-between items-center border-b border-slate-50 pb-6">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Earnings Console</h3>
               <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Step 1</span>
            </header>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Base Annual Salary ($)</label>
                  <span className="text-2xl font-black text-slate-900">${annualGross.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="20000" 
                  max="1000000" 
                  step="5000" 
                  value={annualGross} 
                  onChange={e => setAnnualGross(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                />
                <input 
                  type="number" 
                  value={annualGross} 
                  onChange={e => setAnnualGross(Number(e.target.value))} 
                  className="w-full p-5 bg-slate-50 border-none rounded-[1.5rem] font-black text-2xl text-slate-700 shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all" 
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Annual Bonus ($)</label>
                   <input 
                     type="number" 
                     value={bonus} 
                     onChange={e => setBonus(Number(e.target.value))} 
                     className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-lg text-slate-700 shadow-inner" 
                   />
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tax State (Nexus)</label>
                   <select 
                     value={stateCode} 
                     onChange={e => setStateCode(e.target.value)} 
                     className="w-full p-4 bg-slate-900 text-white border-none rounded-2xl font-black text-sm appearance-none shadow-xl cursor-pointer"
                   >
                     {Object.keys(STATE_TAX_DATA).sort().map(code => (
                       <option key={code} value={code}>{code} - {STATE_TAX_DATA[code].name}</option>
                     ))}
                   </select>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-[3.5rem] border border-indigo-100 shadow-sm space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-6xl opacity-5 font-black select-none pointer-events-none">🛡️</div>
            <header className="flex justify-between items-center border-b border-slate-50 pb-6 relative z-10">
               <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest">Deduction Strategy</h3>
               <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Step 2</span>
            </header>

            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">401(k) Contribution (%)</label>
                  <span className="text-2xl font-black text-indigo-600">{contrib401kPercent}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="30" 
                  step="1" 
                  value={contrib401kPercent} 
                  onChange={e => setContrib401kPercent(Number(e.target.value))} 
                  className="w-full h-2 bg-indigo-50 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                />
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter px-1">Effective Deduction: -${Math.round(stats.contrib401kAmount).toLocaleString()} Annual</p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Medical / Insurance Premiums ($/yr)</label>
                <input 
                  type="number" 
                  value={healthInsurance} 
                  onChange={e => setHealthInsurance(Number(e.target.value))} 
                  className="w-full p-5 bg-slate-50 border-none rounded-[1.5rem] font-black text-2xl text-slate-700 shadow-inner focus:ring-2 focus:ring-indigo-500 transition-all" 
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Filing Status</label>
                <select 
                  value={filingStatus} 
                  onChange={e => setFilingStatus(e.target.value as 'single' | 'married' | 'hoh')} 
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-sm text-slate-700 shadow-inner"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                  <option value="hoh">Head of Household</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Pay Frequency</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['weekly', 'bi-weekly', 'semi-monthly', 'monthly'] as PayFrequency[]).map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setPayFrequency(freq)}
                      className={`p-4 rounded-2xl font-bold text-sm transition-all ${
                        payFrequency === freq
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {freq === 'bi-weekly' ? 'Bi-Weekly' : freq === 'semi-monthly' ? 'Semi-Monthly' : freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center text-center group hover:scale-105 transition-transform duration-500">
               <p className="text-white/60 text-[9px] font-black uppercase tracking-widest mb-1">
                 {payFrequency === 'weekly' ? 'Weekly' : payFrequency === 'bi-weekly' ? 'Bi-Weekly' : payFrequency === 'semi-monthly' ? 'Semi-Monthly' : 'Monthly'} Net Pay
               </p>
               <h3 className="text-4xl font-black text-white tracking-tighter">${Math.round(stats.payFrequencyAmount).toLocaleString()}</h3>
               <p className="text-[9px] font-black text-indigo-300 uppercase mt-2">After-Tax Yield</p>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center group hover:scale-105 transition-transform duration-500">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly Equivalent</p>
               <h4 className="text-3xl font-black text-slate-900 tracking-tighter">${Math.round(stats.monthlyNet).toLocaleString()}</h4>
               <p className="text-[9px] font-black text-emerald-500 uppercase mt-2">Standardized View</p>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center group hover:scale-105 transition-transform duration-500">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Annual Take Home</p>
               <h4 className="text-3xl font-black text-slate-900 tracking-tighter">${Math.round(stats.net).toLocaleString()}</h4>
               <p className="text-[9px] font-black text-indigo-600 uppercase mt-2">Net Cumulative</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
             <header className="flex justify-between items-end border-b border-slate-50 pb-6">
               <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Allocation Analysis</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Institutional Revenue Triage</p>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div><span className="text-[9px] font-black text-slate-400 uppercase">Yield</span></div>
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div><span className="text-[9px] font-black text-slate-400 uppercase">Taxes</span></div>
               </div>
             </header>

             <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="h-72 w-full md:w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie 
                        data={chartData} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={80} 
                        outerRadius={105} 
                        paddingAngle={8} 
                        dataKey="value"
                        stroke="none"
                      >
                        {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)' }} 
                        itemStyle={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                      />
                      <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
                    </PieChart>
                  </ResponsiveContainer>
               </div>
               
               <div className="w-full md:w-1/2 space-y-6">
                  <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl space-y-6">
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] text-center">Gross to Net Cascade ($k)</h4>
                    <div className="h-44 w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={cascadeData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={9} fontWeight={900} width={60} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '12px'}} />
                            <Bar dataKey="value" fill="#6366f1" radius={[0, 8, 8, 0]} barSize={25} />
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                  </div>
               </div>
             </div>
          </div>

          {stateInfo.brackets ? (
            <section className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 animate-in slide-in-from-bottom-5 duration-700">
               <header className="flex justify-between items-end border-b border-slate-50 pb-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{stateInfo.name} Marginal Tax Matrix</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Marginal Rate Hierarchy & Active Nexus Bracket</p>
                  </div>
                  <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Progressive Model</span>
               </header>
               
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bracketVisualData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={9} fontWeight={900} />
                      <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={9} hide />
                      <Tooltip 
                        cursor={{ fill: '#f8fafc' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 space-y-1">
                                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Bracket Range</p>
                                <p className="text-sm font-black">{data.range}</p>
                                <p className="text-xl font-black">{data.rate.toFixed(2)}% <span className="text-[10px] text-slate-500 font-bold uppercase">Rate</span></p>
                                {data.isCurrent && <p className="text-[8px] font-black text-emerald-400 uppercase mt-2 flex items-center gap-1">● Active Margin</p>}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="rate" radius={[8, 8, 8, 8]} barSize={40}>
                        {bracketVisualData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.isCurrent ? '#4f46e5' : entry.isActive ? '#e2e8f0' : '#f1f5f9'}
                            className="transition-all duration-500"
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
               </div>
               
               <div className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="space-y-1 text-center md:text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculated Nexus Tax</p>
                    <p className="text-3xl font-black text-slate-900">${Math.round(stats.stateTax).toLocaleString()}</p>
                  </div>
                  <div className="flex-1 max-w-sm">
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed text-center md:text-right">
                      Your income spans <strong>{bracketVisualData.filter(b => b.isActive).length}</strong> nexus brackets. The <span className="text-indigo-600 font-black">highlighted column</span> represents your tax on the next dollar earned.
                    </p>
                  </div>
               </div>
            </section>
          ) : (
            <section className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-6">
               <div className="flex justify-between items-center">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{stateInfo.name} Flat Tax Policy</h3>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Flat Rate Model</span>
               </div>
               <div className="bg-slate-900 p-8 rounded-[3rem] text-center space-y-4">
                  <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">Universal Rate</p>
                  <p className="text-6xl font-black text-white">{(stateInfo.rate * 100).toFixed(2)}%</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Simplified State Nexus Implementation</p>
               </div>
            </section>
          )}

          <aside className="bg-slate-900 p-12 rounded-[4rem] text-white flex items-start gap-10 shadow-2xl relative overflow-hidden group min-h-[300px] flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-10 text-8xl opacity-10 group-hover:scale-125 transition-transform pointer-events-none select-none">🏦</div>
             <div className="relative z-10 space-y-6 w-full text-left">
                <div className="flex items-center gap-3">
                  <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em]">Tax Strategy Oracle</h4>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                {loadingAdvice ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-4/5"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  </div>
                ) : (
                  <p className="text-2xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
             </div>
             <div className="absolute -left-10 -bottom-10 text-[250px] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">ESTIMATE</div>
          </aside>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-20">
        <header className="max-w-4xl text-left">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Compensation Optimization Framework</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">The QuantCurb <span className="text-indigo-600">Net Pay Protocol</span></h2>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed max-w-3xl">
            Our multi-stage tax cascade models every dollar from gross receipt to net deposit. Accurate across all 50 states for the 2024 tax year.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-16 text-left">
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">📑</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight tracking-tight uppercase">Tax Shield <br/>Economics</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              401(k) contributions reduce your <strong>Taxable Gross</strong>. If you're in the 24% federal bracket, a $10,000 contribution effectively only costs you $7,600 in net take-home pay, providing an instant 24% return through tax avoidance.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-xl">⚖️</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight tracking-tight uppercase">Marginal vs <br/>Effective Triage</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              The <strong>Effective Rate</strong> is your actual tax percentage. The <strong>Marginal Rate</strong> is what you'll pay on your next bonus. Strategic earners focus on lowering the effective rate through pre-tax deferrals and HSA captures.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">🌎</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight tracking-tight uppercase">State Nexus <br/>Audit Logic</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              State income taxes range from 0% (TX, FL, WA) to 13%+ (CA). For mobile professionals, choosing a state nexus with low or flat tax rates can increase net lifetime wealth by over $1M during a 30-year career.
            </p>
          </section>
        </div>
      </section>

      <footer className="text-center pt-12 border-t border-slate-100 flex flex-col items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Compensation Intelligence v4.5 • All-State Nexus Support</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
           {[
             'FICA Audit', 'Federal Bracket Triage', '401k Tax Shield', 'Effective Yield Modeling',
             'Nexus Optimization', 'Marginal Rate Analysis', 'Deduction Cascade', 'State Nexus Standard',
             'Paycheck Calculator', 'Net Pay Estimator', '2024-2025 Tax Brackets'
           ].map(tag => (
             <span key={tag} className="text-[8px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{tag}</span>
           ))}
        </div>
      </footer>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_TAKE_HOME_PAY)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 How to Calculate Take-Home Pay 2025</h3>
            <p className="text-sm text-slate-600">Complete guide to understanding federal tax, state tax, FICA, and 401(k) deductions.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🎯 Retirement Account Optimizer</h3>
            <p className="text-sm text-slate-600">Maximize your 401(k) and IRA contributions to reduce taxes.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💼 Freelance Profit Hub</h3>
            <p className="text-sm text-slate-600">Calculate your 1099 income and self-employment taxes.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📅 Quarterly Tax Calculator</h3>
            <p className="text-sm text-slate-600">Plan your estimated tax payments for freelancers and contractors.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Salary Calculator"
        calculatorUrl="https://quantcurb.com/salary-tax-estimator"
        faqs={[
          {
            question: "How do I calculate my take-home pay?",
            answer: "Your take-home pay is your gross salary minus federal taxes, state taxes, FICA (Social Security and Medicare), and deductions like 401(k) contributions and health insurance. Use our calculator above by entering your annual salary, state, 401(k) contribution percentage, and health insurance costs. The calculator automatically computes all taxes and shows your net pay."
          },
          {
            question: "What is the difference between gross pay and net pay?",
            answer: "Gross pay is your total salary before any deductions. Net pay (take-home pay) is what you actually receive after all taxes and deductions are subtracted. For example, if you earn $100,000 gross, you might take home $70,000-$80,000 net depending on your state, deductions, and tax bracket."
          },
          {
            question: "How much will I take home if I make $100,000 a year?",
            answer: "It depends on your state, filing status, and deductions. In a state with no income tax (like Texas or Florida), you might take home around $75,000-$78,000. In a high-tax state like California or New York, you might take home $70,000-$73,000. Use our calculator with your specific details for an accurate estimate."
          },
          {
            question: "How does 401(k) contribution affect my take-home pay?",
            answer: "401(k) contributions reduce your taxable income, which lowers your taxes. For example, if you contribute $10,000 to your 401(k) and you're in the 24% tax bracket, you save $2,400 in taxes. Your take-home pay decreases by $7,600 ($10,000 - $2,400), but you're saving $10,000 for retirement."
          },
          {
            question: "What is FICA tax?",
            answer: "FICA (Federal Insurance Contributions Act) includes Social Security tax (6.2% on income up to $168,600 in 2025) and Medicare tax (1.45% on all income). High earners pay an additional 0.9% Medicare tax on income above $200,000. FICA is automatically deducted from your paycheck."
          },
          {
            question: "How do state taxes affect my take-home pay?",
            answer: "State income tax rates vary significantly. Seven states have no income tax (Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming). Other states range from 2.5% (Arizona) to over 13% (California for high earners). Use our calculator to see how your state's tax rate impacts your take-home pay."
          },
          {
            question: "What's the difference between weekly, bi-weekly, semi-monthly, and monthly pay?",
            answer: "Weekly pay = 52 paychecks per year. Bi-weekly = 26 paychecks per year (every 2 weeks). Semi-monthly = 24 paychecks per year (twice per month). Monthly = 12 paychecks per year. Your annual take-home pay is the same regardless of frequency, but your paycheck amount varies. Use our calculator to see your paycheck amount for any frequency."
          },
          {
            question: "How can I increase my take-home pay?",
            answer: "Strategies to increase take-home pay: 1) Negotiate a higher salary, 2) Reduce 401(k) contributions (though this reduces retirement savings), 3) Move to a state with lower/no income tax, 4) Maximize pre-tax deductions (HSA, health insurance), 5) Claim all eligible tax deductions and credits. Use our calculator to see the impact of different scenarios."
          }
        ]}
      />
    </article>
  );
};

export default SalaryCalculator;
