import React from 'react';
import Link from 'next/link';
import { ToolType } from '../types';

// Define related tools mapping for internal linking
const relatedToolsMap: Record<string, Array<{ href: string; label: string; description: string }>> = {
  // Mortgage-related tools
  'mortgage-payment-calculator': [
    { href: '/loan-emi-calculator/', label: 'Loan EMI Calculator', description: 'Calculate loan EMI with prepayment options' },
    { href: '/debt-to-income-ratio-calculator/', label: 'DTI Calculator', description: 'Check if you qualify for a mortgage' },
    { href: '/loan-comparison-tool/', label: 'Loan Comparison', description: 'Compare different loan offers' },
    { href: '/blog/piti-explained-mortgage-payment-breakdown/', label: 'PITI Explained', description: 'Understanding mortgage payments' },
    { href: '/blog/how-much-house-can-i-afford-2025/', label: 'How Much House Can I Afford', description: 'Home affordability guide' },
  ],

  // Salary/Tax related tools
  'salary-tax-estimator': [
    { href: '/quarterly-estimated-tax-calculator/', label: 'Quarterly Tax Calculator', description: 'Plan your estimated tax payments' },
    { href: '/child-tax-credit-calculator/', label: 'Child Tax Credit', description: 'Calculate your CTC eligibility' },
    { href: '/freelance-profit-hub/', label: 'Freelance Calculator', description: '1099 vs W2 analysis' },
    { href: '/blog/how-to-calculate-take-home-pay-2025/', label: 'Take Home Pay Guide', description: 'Understanding your paycheck' },
    { href: '/blog/100k-california-vs-texas-take-home-pay/', label: 'California vs Texas', description: 'State tax comparison' },
  ],

  // FIRE/Retirement related
  'early-retirement-fire-planner': [
    { href: '/retirement-account-optimizer/', label: 'Retirement Optimizer', description: '401k and IRA strategies' },
    { href: '/wealth-investment-projector/', label: 'Wealth Projector', description: 'Investment growth modeling' },
    { href: '/dividend-reinvestment-calculator/', label: 'DRIP Calculator', description: 'Dividend reinvestment growth' },
    { href: '/blog/4-percent-rule-dead-safe-withdrawal-rates/', label: '4% Rule Guide', description: 'Safe withdrawal strategies' },
    { href: '/blog/coast-fire-how-to-retire-early/', label: 'Coast FIRE Guide', description: 'Alternative FIRE strategies' },
  ],

  // Investment related
  'wealth-investment-projector': [
    { href: '/dividend-reinvestment-calculator/', label: 'DRIP Calculator', description: 'Model dividend reinvestment' },
    { href: '/early-retirement-fire-planner/', label: 'FIRE Planner', description: 'Plan your early retirement' },
    { href: '/retirement-account-optimizer/', label: 'Retirement Optimizer', description: 'Optimize your contributions' },
    { href: '/blog/lump-sum-vs-dollar-cost-averaging/', label: 'Lump Sum vs DCA', description: 'Investment timing strategies' },
    { href: '/blog/investment-calculator-guide-2025/', label: 'Investment Guide', description: 'How to use the calculator' },
  ],

  // Tax calculators
  'quarterly-estimated-tax-calculator': [
    { href: '/salary-tax-estimator/', label: 'Salary Calculator', description: 'Estimate your take-home pay' },
    { href: '/freelance-profit-hub/', label: 'Freelance Hub', description: 'Self-employment tax planning' },
    { href: '/child-tax-credit-calculator/', label: 'Child Tax Credit', description: 'Family tax benefits' },
    { href: '/blog/quarterly-estimated-taxes-complete-guide/', label: 'Quarterly Tax Guide', description: 'Deadlines and payments' },
    { href: '/blog/self-employment-tax-guide-2025/', label: 'SE Tax Guide', description: 'Self-employment tax explained' },
  ],

  // Freelance/Self-employment
  'freelance-profit-hub': [
    { href: '/quarterly-estimated-tax-calculator/', label: 'Quarterly Tax', description: 'Plan estimated payments' },
    { href: '/aca-health-insurance-subsidy-calculator/', label: 'ACA Subsidy', description: 'Health insurance options' },
    { href: '/salary-tax-estimator/', label: 'Salary Calculator', description: 'Compare to W2 employment' },
    { href: '/blog/1099-vs-w2-comparison-2025/', label: '1099 vs W2', description: 'Contractor vs employee' },
    { href: '/blog/tax-deductions-freelancers-2025/', label: 'Freelancer Deductions', description: 'Maximize your write-offs' },
  ],

  // Debt related
  'credit-card-debt-strategist': [
    { href: '/loan-emi-calculator/', label: 'Loan EMI', description: 'Debt consolidation options' },
    { href: '/loan-comparison-tool/', label: 'Loan Comparison', description: 'Compare rates' },
    { href: '/net-worth-command-center/', label: 'Net Worth Tracker', description: 'Track your progress' },
    { href: '/blog/snowball-vs-avalanche-debt-payoff/', label: 'Debt Strategies', description: 'Payoff method comparison' },
    { href: '/blog/credit-card-minimum-payments-20-years/', label: 'Minimum Payments', description: 'The true cost' },
  ],

  // Net worth/Emergency fund
  'net-worth-command-center': [
    { href: '/emergency-fund-guard/', label: 'Emergency Fund', description: 'Calculate your safety net' },
    { href: '/wealth-investment-projector/', label: 'Wealth Projector', description: 'Project your growth' },
    { href: '/early-retirement-fire-planner/', label: 'FIRE Planner', description: 'Plan for independence' },
    { href: '/blog/assets-vs-liabilities-true-net-worth/', label: 'Assets vs Liabilities', description: 'Understanding net worth' },
    { href: '/blog/net-worth-tracker-guide-2025/', label: 'Net Worth Guide', description: 'How to track effectively' },
  ],

  'emergency-fund-guard': [
    { href: '/net-worth-command-center/', label: 'Net Worth Center', description: 'Track your wealth' },
    { href: '/salary-tax-estimator/', label: 'Salary Calculator', description: 'Know your monthly income' },
    { href: '/credit-card-debt-strategist/', label: 'Debt Strategist', description: 'Pay off high-interest debt' },
    { href: '/blog/6-month-emergency-fund-rule/', label: 'Emergency Fund Rule', description: 'How much to save' },
    { href: '/blog/how-much-emergency-fund-do-i-need-2025/', label: 'Emergency Fund Guide', description: 'Complete planning guide' },
  ],
};

interface RelatedToolsProps {
  currentTool: string;
  onNavigate?: (tool: ToolType) => void;
}

const RelatedTools: React.FC<RelatedToolsProps> = ({ currentTool, onNavigate }) => {
  const relatedTools = relatedToolsMap[currentTool] || [];

  if (relatedTools.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      // Extract tool type from href
      const toolPath = href.replace(/^\//, '').replace(/\/$/, '');
      // Check if it's a blog post
      if (toolPath.startsWith('blog/')) {
        const blogSlug = toolPath.replace('blog/', '');
        onNavigate(`blog/${blogSlug}` as ToolType);
      } else {
        onNavigate(toolPath as ToolType);
      }
    }
  };

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span className="text-indigo-600">Related Tools & Guides</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            onClick={(e) => handleClick(e, tool.href)}
            className="group p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all"
          >
            <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {tool.label}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedTools;
