import React from 'react';
import Link from 'next/link';

// Hidden navigation component for search engine crawler discovery
// This component is visually hidden but accessible to search crawlers
// to help them discover all pages on the site

const CrawlerNav: React.FC = () => {
  const coreTools = [
    { href: '/dashboard/', label: 'Financial Dashboard' },
    { href: '/net-worth-command-center/', label: 'Net Worth Calculator' },
    { href: '/emergency-fund-guard/', label: 'Emergency Fund Calculator' },
    { href: '/mortgage-payment-calculator/', label: 'Mortgage Calculator' },
    { href: '/loan-emi-calculator/', label: 'Loan EMI Calculator' },
    { href: '/salary-tax-estimator/', label: 'Salary Tax Calculator' },
    { href: '/early-retirement-fire-planner/', label: 'FIRE Calculator' },
    { href: '/retirement-account-optimizer/', label: 'Retirement Calculator' },
    { href: '/wealth-investment-projector/', label: 'Investment Calculator' },
    { href: '/dividend-reinvestment-calculator/', label: 'DRIP Calculator' },
    { href: '/options-strategy-visualizer/', label: 'Options Calculator' },
    { href: '/credit-card-debt-strategist/', label: 'Credit Card Payoff Calculator' },
    { href: '/loan-comparison-tool/', label: 'Loan Comparison Calculator' },
    { href: '/currency-exchange-intel/', label: 'Currency Converter' },
    { href: '/gst-tax-calculator/', label: 'GST Calculator' },
    { href: '/crypto-tax-loss-harvester/', label: 'Crypto Tax Calculator' },
    { href: '/child-tax-credit-calculator/', label: 'Child Tax Credit Calculator' },
    { href: '/quarterly-estimated-tax-calculator/', label: 'Quarterly Tax Calculator' },
    { href: '/aca-health-insurance-subsidy-calculator/', label: 'ACA Subsidy Calculator' },
    { href: '/freelance-profit-hub/', label: 'Freelance Calculator' },
    { href: '/debt-to-income-ratio-calculator/', label: 'DTI Calculator' },
    { href: '/excel-power-modeler/', label: 'Excel DCF Modeler' },
  ];

  const hubPages = [
    { href: '/tax-calculators/', label: 'Tax Calculators Hub' },
    { href: '/retirement-calculators/', label: 'Retirement Calculators Hub' },
    { href: '/mortgage-calculators/', label: 'Mortgage Calculators Hub' },
    { href: '/investment-calculators/', label: 'Investment Calculators Hub' },
  ];

  const academyPages = [
    { href: '/valuation-academy/', label: 'Valuation Academy' },
    { href: '/investment-funds-academy/', label: 'Investment Academy' },
    { href: '/market-intelligence-pulse/', label: 'Market Insights' },
  ];

  const companyPages = [
    { href: '/about-quantcurb/', label: 'About QuantCurb' },
    { href: '/methodology-assumptions/', label: 'Methodology' },
    { href: '/contact-us/', label: 'Contact Us' },
    { href: '/privacy-policy/', label: 'Privacy Policy' },
    { href: '/legal-disclaimer/', label: 'Legal Disclaimer' },
    { href: '/sitemap/', label: 'Sitemap' },
    { href: '/financial-knowledge-base/', label: 'Knowledge Base' },
  ];

  const blogPages = [
    { href: '/blog/', label: 'Financial Planning Blog' },
    { href: '/blog/mortgage-calculator-guide-2025/', label: 'Mortgage Calculator Guide' },
    { href: '/blog/how-much-house-can-i-afford-2025/', label: 'How Much House Can I Afford' },
    { href: '/blog/piti-explained-mortgage-payment-breakdown/', label: 'PITI Explained' },
    { href: '/blog/fire-calculator-guide-2025/', label: 'FIRE Calculator Guide' },
    { href: '/blog/4-percent-rule-dead-safe-withdrawal-rates/', label: '4% Rule Guide' },
    { href: '/blog/roth-vs-traditional-401k-tax-bracket-bet/', label: 'Roth vs Traditional 401k' },
    { href: '/blog/child-tax-credit-2025-guide/', label: 'Child Tax Credit Guide' },
    { href: '/blog/quarterly-estimated-taxes-complete-guide/', label: 'Quarterly Taxes Guide' },
    { href: '/blog/self-employment-tax-guide-2025/', label: 'Self Employment Tax Guide' },
    { href: '/blog/1099-vs-w2-comparison-2025/', label: '1099 vs W2 Comparison' },
    { href: '/blog/snowball-vs-avalanche-debt-payoff/', label: 'Debt Payoff Strategies' },
    { href: '/blog/lump-sum-vs-dollar-cost-averaging/', label: 'Lump Sum vs DCA' },
  ];

  const statePages = [
    { href: '/salary-tax-estimator/california/', label: 'California Salary Calculator' },
    { href: '/salary-tax-estimator/texas/', label: 'Texas Salary Calculator' },
    { href: '/salary-tax-estimator/new-york/', label: 'New York Salary Calculator' },
    { href: '/salary-tax-estimator/florida/', label: 'Florida Salary Calculator' },
    { href: '/salary-tax-estimator/washington/', label: 'Washington Salary Calculator' },
    { href: '/salary-tax-estimator/colorado/', label: 'Colorado Salary Calculator' },
    { href: '/mortgage-payment-calculator/california/', label: 'California Mortgage Calculator' },
    { href: '/mortgage-payment-calculator/texas/', label: 'Texas Mortgage Calculator' },
    { href: '/mortgage-payment-calculator/florida/', label: 'Florida Mortgage Calculator' },
    { href: '/early-retirement-fire-planner/california/', label: 'California FIRE Calculator' },
    { href: '/early-retirement-fire-planner/texas/', label: 'Texas FIRE Calculator' },
  ];

  return (
    <nav
      className="sr-only"
      aria-label="Site navigation for search engines"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      <h2>Financial Calculators</h2>
      <ul>
        {coreTools.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Calculator Hubs</h2>
      <ul>
        {hubPages.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Financial Education</h2>
      <ul>
        {academyPages.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Company Information</h2>
      <ul>
        {companyPages.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Financial Planning Blog</h2>
      <ul>
        {blogPages.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>State-Specific Calculators</h2>
      <ul>
        {statePages.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CrawlerNav;
