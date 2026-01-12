
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

type FilingStatus = 'single' | 'married' | 'hoh';

// 2025 Federal Poverty Level (FPL) - Contiguous 48 states
const FPL_2025_BASE = 15060; // Individual
const FPL_2025_PER_ADDITIONAL = 5380; // Per additional person

// State Medicaid Expansion Status (as of 2025)
const MEDICAID_EXPANSION_STATES: Record<string, { expanded: boolean; name: string }> = {
  AL: { expanded: false, name: 'Alabama' }, AK: { expanded: true, name: 'Alaska' }, AZ: { expanded: true, name: 'Arizona' },
  AR: { expanded: true, name: 'Arkansas' }, CA: { expanded: true, name: 'California' }, CO: { expanded: true, name: 'Colorado' },
  CT: { expanded: true, name: 'Connecticut' }, DE: { expanded: true, name: 'Delaware' }, FL: { expanded: false, name: 'Florida' },
  GA: { expanded: false, name: 'Georgia' }, HI: { expanded: true, name: 'Hawaii' }, ID: { expanded: true, name: 'Idaho' },
  IL: { expanded: true, name: 'Illinois' }, IN: { expanded: true, name: 'Indiana' }, IA: { expanded: true, name: 'Iowa' },
  KS: { expanded: false, name: 'Kansas' }, KY: { expanded: true, name: 'Kentucky' }, LA: { expanded: true, name: 'Louisiana' },
  ME: { expanded: true, name: 'Maine' }, MD: { expanded: true, name: 'Maryland' }, MA: { expanded: true, name: 'Massachusetts' },
  MI: { expanded: true, name: 'Michigan' }, MN: { expanded: true, name: 'Minnesota' }, MS: { expanded: false, name: 'Mississippi' },
  MO: { expanded: true, name: 'Missouri' }, MT: { expanded: true, name: 'Montana' }, NE: { expanded: true, name: 'Nebraska' },
  NV: { expanded: true, name: 'Nevada' }, NH: { expanded: true, name: 'New Hampshire' }, NJ: { expanded: true, name: 'New Jersey' },
  NM: { expanded: true, name: 'New Mexico' }, NY: { expanded: true, name: 'New York' }, NC: { expanded: true, name: 'North Carolina' },
  ND: { expanded: true, name: 'North Dakota' }, OH: { expanded: true, name: 'Ohio' }, OK: { expanded: true, name: 'Oklahoma' },
  OR: { expanded: true, name: 'Oregon' }, PA: { expanded: true, name: 'Pennsylvania' }, RI: { expanded: true, name: 'Rhode Island' },
  SC: { expanded: false, name: 'South Carolina' }, SD: { expanded: true, name: 'South Dakota' }, TN: { expanded: false, name: 'Tennessee' },
  TX: { expanded: false, name: 'Texas' }, UT: { expanded: true, name: 'Utah' }, VT: { expanded: true, name: 'Vermont' },
  VA: { expanded: true, name: 'Virginia' }, WA: { expanded: true, name: 'Washington' }, WV: { expanded: true, name: 'West Virginia' },
  WI: { expanded: false, name: 'Wisconsin' }, WY: { expanded: false, name: 'Wyoming' },
};

// Simplified state benchmark premiums (Silver plan, age 40, 2025 estimates)
const STATE_BENCHMARK_PREMIUMS: Record<string, number> = {
  AL: 520, AK: 890, AZ: 480, AR: 510, CA: 540, CO: 520, CT: 650, DE: 620, FL: 550, GA: 530,
  HI: 610, ID: 470, IL: 590, IN: 520, IA: 580, KS: 530, KY: 540, LA: 570, ME: 610, MD: 630,
  MA: 680, MI: 560, MN: 540, MS: 530, MO: 550, MT: 580, NE: 560, NV: 520, NH: 620, NJ: 690,
  NM: 510, NY: 720, NC: 560, ND: 570, OH: 570, OK: 540, OR: 590, PA: 600, RI: 630, SC: 560,
  SD: 620, TN: 540, TX: 560, UT: 490, VT: 670, VA: 590, WA: 570, WV: 640, WI: 590, WY: 780
};

interface ACASubsidyCalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

const ACASubsidyCalculator: React.FC<ACASubsidyCalculatorProps> = ({ onNavigate }) => {
  const [householdIncome, setHouseholdIncome] = useState<number>(50000);
  const [householdSize, setHouseholdSize] = useState<number>(2);
  const [age, setAge] = useState<number>(40);
  const [stateCode, setStateCode] = useState<string>('CA');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const calculations = useMemo(() => {
    // Calculate Federal Poverty Level for household
    const fpl = FPL_2025_BASE + (householdSize - 1) * FPL_2025_PER_ADDITIONAL;
    const fplPercentage = (householdIncome / fpl) * 100;

    // Get state info
    const medicaidExpanded = MEDICAID_EXPANSION_STATES[stateCode]?.expanded || false;
    const stateName = MEDICAID_EXPANSION_STATES[stateCode]?.name || 'Unknown';

    // Medicaid Eligibility Check
    const medicaidIncomeLimitExpanded = fpl * 1.38; // 138% FPL for expanded states
    const medicaidIncomeLimitNonExpanded = fpl * 0.41; // ~41% FPL for parents/caretakers in non-expanded
    const medicaidEligible = medicaidExpanded
      ? householdIncome <= medicaidIncomeLimitExpanded
      : householdIncome <= medicaidIncomeLimitNonExpanded;

    // Benchmark Premium (Silver plan)
    let benchmarkPremium = STATE_BENCHMARK_PREMIUMS[stateCode] || 600;

    // Age adjustment (very simplified - real calculation is complex)
    const ageFactor = age < 30 ? 0.8 : age > 50 ? 1.4 : 1.0;
    benchmarkPremium = benchmarkPremium * ageFactor;

    // Premium Tax Credit (PTC) Calculation based on income percentage
    let maxPremiumPercentage = 0;
    let csrEligible = false;

    if (fplPercentage < 100) {
      // Below 100% FPL - Generally Medicaid eligible or coverage gap
      maxPremiumPercentage = 0;
    } else if (fplPercentage <= 150) {
      maxPremiumPercentage = 0; // 0% of income
      csrEligible = true;
    } else if (fplPercentage <= 200) {
      maxPremiumPercentage = 2.0; // 0-2% of income
      csrEligible = true;
    } else if (fplPercentage <= 250) {
      maxPremiumPercentage = 4.0; // 2-4% of income
      csrEligible = true;
    } else if (fplPercentage <= 300) {
      maxPremiumPercentage = 6.0; // 4-6% of income
    } else if (fplPercentage <= 400) {
      maxPremiumPercentage = 8.5; // 6-8.5% of income
    } else {
      maxPremiumPercentage = 8.5; // IRA eliminated cliff, capped at 8.5%
    }

    // Calculate subsidy
    const maxMonthlyPayment = (householdIncome / 12) * (maxPremiumPercentage / 100);
    const annualBenchmark = benchmarkPremium * 12;
    const annualMaxPayment = householdIncome * (maxPremiumPercentage / 100);
    const annualSubsidy = Math.max(0, annualBenchmark - annualMaxPayment);
    const monthlySubsidy = annualSubsidy / 12;

    // After-subsidy premium
    const monthlyPremiumAfterSubsidy = Math.max(0, benchmarkPremium - monthlySubsidy);

    // Coverage gap (non-expanded states below 100% FPL)
    const inCoverageGap = !medicaidExpanded && fplPercentage < 100;

    // Cost-Sharing Reduction (CSR) level
    let csrLevel = 'None';
    if (csrEligible) {
      if (fplPercentage <= 150) {
        csrLevel = '94% Actuarial Value (Silver)';
      } else if (fplPercentage <= 200) {
        csrLevel = '87% Actuarial Value (Silver)';
      } else if (fplPercentage <= 250) {
        csrLevel = '73% Actuarial Value (Silver)';
      }
    }

    return {
      fpl,
      fplPercentage,
      medicaidExpanded,
      medicaidEligible,
      inCoverageGap,
      benchmarkPremium,
      monthlySubsidy,
      annualSubsidy,
      monthlyPremiumAfterSubsidy,
      maxPremiumPercentage,
      csrEligible,
      csrLevel,
      stateName
    };
  }, [householdIncome, householdSize, age, stateCode, filingStatus]);

  const subsidyBreakdownData = [
    { name: 'Your Cost', value: calculations.monthlyPremiumAfterSubsidy, color: '#10b981' },
    { name: 'Federal Subsidy', value: calculations.monthlySubsidy, color: '#4f46e5' }
  ].filter(item => item.value > 0);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const context = {
        ...calculations,
        householdIncome,
        householdSize,
        age,
        stateCode
      };
      const msg = await getFinancialAdvice(context, 'ACA Marketplace Health Insurance Strategy & Premium Tax Credit Optimization');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch ACA subsidy advice:', error);
      setAdvice('Unable to load healthcare subsidy advice at this time. Please try again later.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [householdIncome, householdSize, age, stateCode]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate ACA subsidy"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate ACA Health Insurance Subsidy and Premium Tax Credit",
      "description": "Step-by-step guide to calculating your ACA marketplace subsidy, Premium Tax Credit, Medicaid eligibility, and monthly healthcare costs for 2025.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Your Household Income",
          "text": "Enter your Modified Adjusted Gross Income (MAGI) for the year. This includes wages, self-employment income, and other taxable income."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Household Size",
          "text": "Enter the number of people in your household (yourself, spouse, dependents). This affects your Federal Poverty Level (FPL) calculation."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter Your Age",
          "text": "Enter your age (18-64). Premiums increase with age, so older individuals pay more but receive larger subsidies if eligible."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Select Your State",
          "text": "Select your state. Medicaid expansion status and benchmark premiums vary by state, affecting your subsidy eligibility."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Check Medicaid Eligibility",
          "text": "The calculator shows if you're eligible for Medicaid (free coverage) based on your income and state's expansion status. In expanded states, eligibility is up to 138% of FPL."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Calculate Premium Tax Credit",
          "text": "If eligible (100-400% FPL), the calculator shows your Premium Tax Credit (subsidy). This reduces your monthly premium. The subsidy is based on a percentage of your income (0-8.5%)."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Review Your Monthly Cost",
          "text": "See your monthly premium after subsidy. For example, if benchmark premium is $600/month and your subsidy is $400/month, you pay $200/month."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-aca-subsidy';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-aca-subsidy');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Add FAQPage schema for ACA subsidy questions
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate my ACA subsidy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your ACA subsidy (Premium Tax Credit) is based on your Modified Adjusted Gross Income (MAGI), household size, age, and state. The subsidy equals the difference between the benchmark premium (Silver plan) and your maximum premium payment (based on income percentage). Use our calculator by entering your income, household size, age, and state to see your estimated subsidy."
          }
        },
        {
          "@type": "Question",
          "name": "What income qualifies for ACA subsidy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You qualify for ACA subsidies if your income is between 100% and 400% of the Federal Poverty Level (FPL). For 2025, that's roughly $15,060-$60,240 for a single person, $30,120-$120,480 for a family of 4. Below 100% FPL, you may qualify for Medicaid (in expanded states). Above 400% FPL, subsidies are capped at 8.5% of income."
          }
        },
        {
          "@type": "Question",
          "name": "What is Modified Adjusted Gross Income (MAGI)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MAGI is your Adjusted Gross Income (AGI) plus tax-exempt interest, foreign earned income, and certain deductions. For most people, MAGI is close to their AGI. Include wages, self-employment income, interest, dividends, and other taxable income. Use our Freelance Hub to calculate your net income for MAGI estimation."
          }
        },
        {
          "@type": "Question",
          "name": "Am I eligible for Medicaid or ACA subsidy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Medicaid expansion states (most states), you're eligible for Medicaid if income is up to 138% of FPL. Above 138% FPL, you qualify for ACA subsidies. In non-expansion states, Medicaid eligibility is very limited (often only for parents/caretakers at ~41% FPL), creating a 'coverage gap' for adults without children. Our calculator shows your eligibility based on your state."
          }
        },
        {
          "@type": "Question",
          "name": "How much will I pay for health insurance with ACA subsidy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your monthly premium depends on your income. At 100-150% FPL, you pay 0% of income (free coverage). At 150-200% FPL, you pay 0-2% of income. At 200-250% FPL, you pay 2-4% of income. At 250-400% FPL, you pay 4-8.5% of income. Above 400% FPL, subsidies are capped at 8.5% of income. Our calculator shows your exact monthly cost."
          }
        },
        {
          "@type": "Question",
          "name": "What is the coverage gap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The coverage gap exists in non-Medicaid expansion states (like Texas, Florida, Georgia) for adults without children. If your income is below 100% FPL, you don't qualify for Medicaid (unless you're a parent/caretaker) or ACA subsidies (which start at 100% FPL). This leaves you without affordable coverage options. Our calculator shows if you're in the coverage gap."
          }
        },
        {
          "@type": "Question",
          "name": "Do I qualify for Cost-Sharing Reductions (CSR)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost-Sharing Reductions (CSR) are available if your income is 100-250% of FPL and you choose a Silver plan. CSR reduces deductibles, copays, and out-of-pocket maximums. At 100-150% FPL, you get 'Platinum-level' benefits. At 150-200% FPL, you get 'Gold-level' benefits. At 200-250% FPL, you get 'Silver-level' benefits. Our calculator shows your CSR eligibility."
          }
        },
        {
          "@type": "Question",
          "name": "How does age affect my ACA premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Older individuals pay higher premiums (up to 3x more than younger people). However, subsidies also increase with age because they're based on the benchmark premium. So while your premium is higher, your subsidy is also larger, keeping your out-of-pocket cost based on income percentage. Our calculator accounts for age adjustments."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema-aca-subsidy';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-aca-subsidy');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">
          ACA Health Insurance <span className="text-indigo-600">Subsidy Calculator 2025</span>
        </h2>
        <p className="text-slate-500 mt-2 max-w-3xl font-medium">
          Calculate your Affordable Care Act (ACA) Premium Tax Credit and monthly subsidy on Healthcare.gov marketplace.
          Determine eligibility for Medicaid, cost-sharing reductions, and coverage gap status.
          {calculations.monthlySubsidy > 0 && (
            <strong> Estimated subsidy: ${calculations.monthlySubsidy.toLocaleString()}/month</strong>
          )}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">
              Household Information
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Annual Household Income (MAGI)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={householdIncome}
                  onChange={(e) => setHouseholdIncome(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">Modified Adjusted Gross Income</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Household Size
              </label>
              <input
                type="number"
                min="1"
                max="15"
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-2xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-slate-400 mt-2">Number of people in household</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Your Age
                </label>
                <input
                  type="number"
                  min="18"
                  max="64"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  State
                </label>
                <select
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500"
                >
                  {Object.entries(MEDICAID_EXPANSION_STATES).map(([code, data]) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Filing Status
              </label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          {/* State Info Card */}
          <div className={`p-6 rounded-3xl border shadow-sm ${
            calculations.medicaidExpanded
              ? 'bg-emerald-50 border-emerald-200'
              : 'bg-amber-50 border-amber-200'
          }`}>
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{
              color: calculations.medicaidExpanded ? '#059669' : '#d97706'
            }}>
              {calculations.stateName}
            </p>
            <p className="text-sm font-bold text-slate-800 mb-2">
              {calculations.medicaidExpanded ? 'Medicaid Expanded' : 'No Medicaid Expansion'}
            </p>
            <p className="text-xs text-slate-600">
              {calculations.medicaidExpanded
                ? 'Medicaid covers up to 138% FPL'
                : 'Coverage gap may exist below 100% FPL'}
            </p>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Eligibility Status */}
          {calculations.medicaidEligible ? (
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
              <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-2">
                Medicaid Eligible
              </p>
              <h3 className="text-5xl font-black tracking-tighter mb-4">
                FREE Healthcare
              </h3>
              <p className="text-emerald-100 text-lg">
                Your income qualifies for Medicaid in {calculations.stateName}. Apply through your state Medicaid office.
              </p>
              <div className="absolute -right-10 -bottom-10 text-[180px] text-white/5 font-black">✓</div>
            </div>
          ) : calculations.inCoverageGap ? (
            <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
              <p className="text-rose-200 text-xs font-bold uppercase tracking-widest mb-2">
                Coverage Gap
              </p>
              <h3 className="text-5xl font-black tracking-tighter mb-4">
                No Subsidy Available
              </h3>
              <p className="text-rose-100 text-lg">
                {calculations.stateName} has not expanded Medicaid. You earn too little for marketplace subsidies
                but don't qualify for Medicaid. Explore Short-Term Health Insurance or Community Health Centers.
              </p>
              <div className="absolute -right-10 -bottom-10 text-[180px] text-white/5 font-black">⚠</div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">
                Monthly Premium Tax Credit
              </p>
              <h3 className="text-6xl font-black tracking-tighter mb-4">
                ${calculations.monthlySubsidy.toLocaleString()}
              </h3>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-indigo-200 text-xs uppercase">Your Monthly Cost</p>
                  <p className="text-2xl font-black">${calculations.monthlyPremiumAfterSubsidy.toFixed(0)}</p>
                </div>
                <div>
                  <p className="text-indigo-200 text-xs uppercase">Annual Subsidy</p>
                  <p className="text-2xl font-black">${calculations.annualSubsidy.toLocaleString()}</p>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 text-[180px] text-white/5 font-black">ACA</div>
            </div>
          )}

          {/* Subsidy Breakdown Chart */}
          {!calculations.medicaidEligible && !calculations.inCoverageGap && (
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                Premium Breakdown
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={subsidyBreakdownData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {subsidyBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Benchmark Premium</p>
                    <p className="text-2xl font-black text-slate-900">${calculations.benchmarkPremium.toFixed(0)}/mo</p>
                    <p className="text-xs text-slate-500 mt-1">Silver plan (2nd lowest cost)</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <p className="text-xs font-bold text-indigo-600 uppercase mb-1">Federal Subsidy</p>
                    <p className="text-2xl font-black text-slate-900">-${calculations.monthlySubsidy.toFixed(0)}/mo</p>
                    <p className="text-xs text-indigo-600 mt-1">Premium Tax Credit (PTC)</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Your Monthly Cost</p>
                    <p className="text-3xl font-black text-emerald-700">${calculations.monthlyPremiumAfterSubsidy.toFixed(0)}</p>
                    <p className="text-xs text-emerald-600 mt-1">
                      {calculations.maxPremiumPercentage.toFixed(1)}% of income
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FPL and CSR Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Federal Poverty Level
              </p>
              <p className="text-3xl font-black text-indigo-600">
                {calculations.fplPercentage.toFixed(0)}%
              </p>
              <p className="text-xs text-slate-500 mt-1">
                FPL: ${calculations.fpl.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Income Contribution
              </p>
              <p className="text-3xl font-black text-purple-600">
                {calculations.maxPremiumPercentage.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500 mt-1">Max % of income for premium</p>
            </div>

            <div className={`p-6 rounded-2xl border shadow-sm ${
              calculations.csrEligible
                ? 'bg-emerald-50 border-emerald-200'
                : 'bg-slate-50 border-slate-100'
            }`}>
              <p className="text-xs font-black uppercase tracking-widest mb-2" style={{
                color: calculations.csrEligible ? '#059669' : '#94a3b8'
              }}>
                Cost-Sharing Reduction
              </p>
              <p className={`text-2xl font-black ${calculations.csrEligible ? 'text-emerald-700' : 'text-slate-400'}`}>
                {calculations.csrEligible ? 'Eligible' : 'Not Eligible'}
              </p>
              <p className="text-xs text-slate-500 mt-1">{calculations.csrLevel}</p>
            </div>
          </div>

          {/* AI Advice Panel */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-indigo-600 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI Healthcare Strategy Insights
            </h4>
            {loadingAdvice ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                <div className="h-4 bg-slate-100 rounded w-4/6"></div>
              </div>
            ) : (
              <p className="text-lg text-slate-700 italic font-medium leading-relaxed">{advice}</p>
            )}
          </div>
        </div>
      </div>

      {/* Educational Content - SEO Optimized */}
      <section className="mt-16 pt-12 border-t border-slate-200 space-y-12">
        <header className="max-w-3xl">
          <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-4">
            Understanding ACA Subsidies
          </h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Navigate the <span className="text-indigo-600">Healthcare Marketplace</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            The Affordable Care Act (ACA) provides Premium Tax Credits to make health insurance affordable for
            individuals and families earning between 100% and 400%+ of the Federal Poverty Level.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">
              Premium Tax Credit (PTC)
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Advance or Year-End:</strong> Take subsidy monthly (advance) or claim when filing taxes.</p>
              <p><strong>Income-Based:</strong> Credit amount based on percentage of income (0%-8.5% max).</p>
              <p><strong>No Cliff:</strong> IRA 2022 eliminated 400% FPL cliff - subsidies now available at all income levels capped at 8.5%.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-purple-600 pl-6">
              Cost-Sharing Reductions (CSR)
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>100-150% FPL:</strong> 94% Actuarial Value (lower deductibles/copays)</p>
              <p><strong>150-200% FPL:</strong> 87% Actuarial Value</p>
              <p><strong>200-250% FPL:</strong> 73% Actuarial Value</p>
              <p><strong>Must choose Silver plan</strong> to receive CSR benefits.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">
              Medicaid Expansion
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Expanded States:</strong> Medicaid up to 138% FPL (FREE healthcare)</p>
              <p><strong>Non-Expanded States:</strong> Coverage gap between Medicaid limit (~41% FPL) and marketplace minimum (100% FPL)</p>
              <p><strong>40 states + DC</strong> have expanded Medicaid as of 2025.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
            Income Scenarios & Subsidies
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-emerald-600 uppercase mb-2">Low Income</p>
              <p className="text-sm font-bold text-slate-800">$20k/yr, Single</p>
              <p className="text-xs text-slate-500 mt-2"><strong>133% FPL:</strong> Medicaid eligible (if expanded state)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-indigo-600 uppercase mb-2">Moderate Income</p>
              <p className="text-sm font-bold text-slate-800">$35k/yr, Household of 3</p>
              <p className="text-xs text-slate-500 mt-2"><strong>~200% FPL:</strong> ~$450/mo subsidy + CSR eligible</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-purple-600 uppercase mb-2">Freelancer</p>
              <p className="text-sm font-bold text-slate-800">$65k/yr, Single</p>
              <p className="text-xs text-slate-500 mt-2"><strong>~430% FPL:</strong> ~$200/mo subsidy (8.5% cap)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-rose-600 uppercase mb-2">Coverage Gap</p>
              <p className="text-sm font-bold text-slate-800">$12k/yr in TX (non-expanded)</p>
              <p className="text-xs text-slate-500 mt-2"><strong>80% FPL:</strong> No Medicaid, no subsidy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Metadata Section */}
      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Health insurance is often the biggest barrier to <strong>self-employment and entrepreneurship</strong>. Understanding ACA subsidies
            can make the difference between affording coverage or going uninsured. This calculator helps freelancers, early retirees, and
            families determine exact subsidy amounts before leaving employer coverage.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We calculate your household's <strong>Federal Poverty Level percentage</strong>, then apply the ACA's sliding scale formula
            to determine Premium Tax Credits. The calculator factors in your state's Medicaid expansion status, benchmark Silver plan
            premiums, and Cost-Sharing Reduction eligibility.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Related Tools</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• <strong>Freelance Profit Hub</strong> - Calculate net income for MAGI</li>
            <li>• <strong>Quarterly Tax Calculator</strong> - Estimate tax liability</li>
            <li>• <strong>FIRE Planner</strong> - Early retirement healthcare planning</li>
          </ul>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_ACA_FREELANCERS)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 ACA Health Insurance for Freelancers 2025</h3>
            <p className="text-sm text-slate-600">Complete guide to ACA marketplace, subsidies, and health insurance for self-employed and freelancers.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💼 Freelance Hub</h3>
            <p className="text-sm text-slate-600">Calculate your net income (MAGI) to determine ACA subsidy eligibility.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📊 Quarterly Tax Calculator</h3>
            <p className="text-sm text-slate-600">Estimate your tax liability to understand your Modified Adjusted Gross Income (MAGI).</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🔥 FIRE Planner</h3>
            <p className="text-sm text-slate-600">Plan for early retirement healthcare costs and ACA subsidies in retirement.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="ACA Subsidy Calculator"
        calculatorUrl="https://quantcurb.com/aca-health-insurance-subsidy-calculator"
        faqs={[
          {
            question: "How do I calculate my ACA subsidy?",
            answer: "Your ACA subsidy (Premium Tax Credit) is based on your Modified Adjusted Gross Income (MAGI), household size, age, and state. The subsidy equals the difference between the benchmark premium (Silver plan) and your maximum premium payment (based on income percentage). Use our calculator by entering your income, household size, age, and state to see your estimated subsidy."
          },
          {
            question: "What income qualifies for ACA subsidy?",
            answer: "You qualify for ACA subsidies if your income is between 100% and 400% of the Federal Poverty Level (FPL). For 2025, that's roughly $15,060-$60,240 for a single person, $30,120-$120,480 for a family of 4. Below 100% FPL, you may qualify for Medicaid (in expanded states). Above 400% FPL, subsidies are capped at 8.5% of income."
          },
          {
            question: "What is Modified Adjusted Gross Income (MAGI)?",
            answer: "MAGI is your Adjusted Gross Income (AGI) plus tax-exempt interest, foreign earned income, and certain deductions. For most people, MAGI is close to their AGI. Include wages, self-employment income, interest, dividends, and other taxable income. Use our Freelance Hub to calculate your net income for MAGI estimation."
          },
          {
            question: "Am I eligible for Medicaid or ACA subsidy?",
            answer: "In Medicaid expansion states (most states), you're eligible for Medicaid if income is up to 138% of FPL. Above 138% FPL, you qualify for ACA subsidies. In non-expansion states, Medicaid eligibility is very limited (often only for parents/caretakers at ~41% FPL), creating a 'coverage gap' for adults without children. Our calculator shows your eligibility based on your state."
          },
          {
            question: "How much will I pay for health insurance with ACA subsidy?",
            answer: "Your monthly premium depends on your income. At 100-150% FPL, you pay 0% of income (free coverage). At 150-200% FPL, you pay 0-2% of income. At 200-250% FPL, you pay 2-4% of income. At 250-400% FPL, you pay 4-8.5% of income. Above 400% FPL, subsidies are capped at 8.5% of income. Our calculator shows your exact monthly cost."
          },
          {
            question: "What is the coverage gap?",
            answer: "The coverage gap exists in non-Medicaid expansion states (like Texas, Florida, Georgia) for adults without children. If your income is below 100% FPL, you don't qualify for Medicaid (unless you're a parent/caretaker) or ACA subsidies (which start at 100% FPL). This leaves you without affordable coverage options. Our calculator shows if you're in the coverage gap."
          },
          {
            question: "Do I qualify for Cost-Sharing Reductions (CSR)?",
            answer: "Cost-Sharing Reductions (CSR) are available if your income is 100-250% of FPL and you choose a Silver plan. CSR reduces deductibles, copays, and out-of-pocket maximums. At 100-150% FPL, you get 'Platinum-level' benefits. At 150-200% FPL, you get 'Gold-level' benefits. At 200-250% FPL, you get 'Silver-level' benefits. Our calculator shows your CSR eligibility."
          },
          {
            question: "How does age affect my ACA premium?",
            answer: "Older individuals pay higher premiums (up to 3x more than younger people). However, subsidies also increase with age because they're based on the benchmark premium. So while your premium is higher, your subsidy is also larger, keeping your out-of-pocket cost based on income percentage. Our calculator accounts for age adjustments."
          }
        ]}
      />
    </div>
  );
};

export default ACASubsidyCalculator;
