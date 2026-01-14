'use client';

import React from 'react';

interface Lender {
  name: string;
  rate: string;
  apr: string;
  fees: string;
  minCredit: string;
  link: string;
  badge?: string;
}

interface LenderComparisonTableProps {
  type: 'mortgage' | 'loan';
}

const LenderComparisonTable: React.FC<LenderComparisonTableProps> = ({ type }) => {
  // Placeholder affiliate links - Replace with actual affiliate links from Impact, CJ, or direct partnerships
  const mortgageLenders: Lender[] = [
    {
      name: 'SoFi',
      rate: '6.25%',
      apr: '6.45%',
      fees: '$0',
      minCredit: '680',
      link: 'https://www.sofi.com/refinance-mortgage/?ref=quantcurb',
      badge: 'Best Overall'
    },
    {
      name: 'LendingTree',
      rate: '6.15%',
      apr: '6.38%',
      fees: 'Varies',
      minCredit: '620',
      link: 'https://www.lendingtree.com/mortgage/?ref=quantcurb',
      badge: 'Compare Multiple'
    },
    {
      name: 'Rocket Mortgage',
      rate: '6.35%',
      apr: '6.52%',
      fees: '$0',
      minCredit: '620',
      link: 'https://www.rocketmortgage.com/?ref=quantcurb'
    },
    {
      name: 'Better.com',
      rate: '6.20%',
      apr: '6.42%',
      fees: '$0',
      minCredit: '620',
      link: 'https://www.better.com/mortgage/?ref=quantcurb'
    }
  ];

  const loanLenders: Lender[] = [
    {
      name: 'SoFi',
      rate: '7.99%',
      apr: '8.25%',
      fees: '$0',
      minCredit: '680',
      link: 'https://www.sofi.com/personal-loans/?ref=quantcurb',
      badge: 'Best Rates'
    },
    {
      name: 'LendingTree',
      rate: '7.49%',
      apr: '7.85%',
      fees: 'Varies',
      minCredit: '600',
      link: 'https://www.lendingtree.com/personal-loans/?ref=quantcurb',
      badge: 'Compare Multiple'
    },
    {
      name: 'LightStream',
      rate: '7.99%',
      apr: '8.15%',
      fees: '$0',
      minCredit: '660',
      link: 'https://www.lightstream.com/?ref=quantcurb'
    },
    {
      name: 'Upstart',
      rate: '8.99%',
      apr: '9.25%',
      fees: '$0',
      minCredit: '600',
      link: 'https://www.upstart.com/?ref=quantcurb'
    }
  ];

  const lenders = type === 'mortgage' ? mortgageLenders : loanLenders;
  const title = type === 'mortgage' ? 'Compare Top Mortgage Lenders' : 'Compare Top Personal Loan Lenders';

  return (
    <section className="mt-16 bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-8 md:p-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
          {title}
        </h2>
        <p className="text-slate-600 text-lg">
          Compare rates from top lenders. Rates updated daily. Click through to see personalized offers.
        </p>
        <p className="text-xs text-slate-500 mt-2">
          *Rates shown are estimates and may vary based on credit score, loan amount, and other factors. We may earn a commission if you click through and get approved.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className="text-left p-4 font-black text-slate-900">Lender</th>
              <th className="text-left p-4 font-black text-slate-900">Rate</th>
              <th className="text-left p-4 font-black text-slate-900">APR</th>
              <th className="text-left p-4 font-black text-slate-900">Fees</th>
              <th className="text-left p-4 font-black text-slate-900">Min Credit</th>
              <th className="text-left p-4 font-black text-slate-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {lenders.map((lender, index) => (
              <tr 
                key={lender.name} 
                className={`border-b border-slate-100 hover:bg-indigo-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-lg">{lender.name}</span>
                    {lender.badge && (
                      <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-black rounded-full">
                        {lender.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <span className="font-black text-indigo-600 text-lg">{lender.rate}</span>
                </td>
                <td className="p-4 text-slate-700 font-semibold">{lender.apr}</td>
                <td className="p-4 text-slate-700 font-semibold">{lender.fees}</td>
                <td className="p-4 text-slate-700 font-semibold">{lender.minCredit}</td>
                <td className="p-4">
                  <a
                    href={lender.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-xl transition whitespace-nowrap"
                  >
                    Get Rates →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong className="font-black text-slate-900">💡 Pro Tip:</strong> Rates vary daily and by credit profile. 
          Use our calculator above to estimate your payment, then compare personalized offers from multiple lenders 
          to find the best rate for your situation. Always read the fine print and compare total loan costs, not just rates.
        </p>
      </div>
    </section>
  );
};

export default LenderComparisonTable;
