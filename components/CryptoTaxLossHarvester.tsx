import React, { useMemo, useState, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

type AssetRow = {
  id: string;
  assetName: string;
  purchasePrice: number;
  currentPrice: number;
  quantity: number;
  purchaseDate: string; // ISO date string
};

interface CryptoTaxLossHarvesterProps {
  onNavigate?: (tool: ToolType) => void;
}

// 2025 Federal Tax Brackets (Ordinary Income = Short-Term Capital Gains)
const FEDERAL_TAX_BRACKETS = [
  { rate: 0.10, label: '10%' },
  { rate: 0.12, label: '12%' },
  { rate: 0.22, label: '22%' },
  { rate: 0.24, label: '24%' },
  { rate: 0.32, label: '32%' },
  { rate: 0.35, label: '35%' },
  { rate: 0.37, label: '37%' },
];

// Long-Term Capital Gains Tax Brackets
const LONG_TERM_TAX_BRACKETS = [
  { rate: 0.00, label: '0%' },
  { rate: 0.15, label: '15%' },
  { rate: 0.20, label: '20%' },
];

// State Tax Rates (simplified - major states)
const STATE_TAX_RATES: Record<string, number> = {
  'None': 0,
  'CA': 0.133, // California - highest bracket
  'NY': 0.109, // New York
  'TX': 0, // No state income tax
  'FL': 0, // No state income tax
  'WA': 0, // No state income tax (but has capital gains tax)
  'IL': 0.0495, // Illinois - flat rate
  'PA': 0.0307, // Pennsylvania - flat rate
  'NJ': 0.1075, // New Jersey
  'MA': 0.05, // Massachusetts - flat rate
  'GA': 0.0575, // Georgia
  'NC': 0.0499, // North Carolina - flat rate
  'VA': 0.0575, // Virginia
  'OH': 0.0399, // Ohio
  'MI': 0.0425, // Michigan
  'CO': 0.044, // Colorado - flat rate
  'OR': 0.099, // Oregon
};

const CryptoTaxLossHarvester: React.FC<CryptoTaxLossHarvesterProps> = ({ onNavigate }) => {
  const [rows, setRows] = useState<AssetRow[]>([
    {
      id: 'row-1',
      assetName: 'BTC',
      purchasePrice: 48000,
      currentPrice: 42000,
      quantity: 0.5,
      purchaseDate: '2024-03-15',
    },
  ]);
  const [federalTaxBracket, setFederalTaxBracket] = useState<number>(0.22);
  const [longTermRate, setLongTermRate] = useState<number>(0.15);
  const [stateCode, setStateCode] = useState<string>('None');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // Calculate holding period for an asset
  const getHoldingPeriod = (purchaseDate: string): { days: number; isLongTerm: boolean } => {
    if (!purchaseDate) return { days: 0, isLongTerm: false };
    const purchase = new Date(purchaseDate);
    const today = new Date();
    const diffTime = today.getTime() - purchase.getTime();
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return {
      days,
      isLongTerm: days > 365, // Long-term if held over 365 days
    };
  };

  const updateRow = (id: string, field: keyof AssetRow, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: field === 'assetName' || field === 'purchaseDate' ? value : Number(value),
            }
          : row,
      ),
    );
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: `row-${Date.now()}`,
        assetName: '',
        purchasePrice: 0,
        currentPrice: 0,
        quantity: 0,
        purchaseDate: new Date().toISOString().split('T')[0],
      },
    ]);
  };

  const deleteRow = (id: string) => {
    if (rows.length === 1) {
      alert('You must have at least one row.');
      return;
    }
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const calculations = useMemo(() => {
    const rowData = rows.map((row) => {
      const loss =
        row.currentPrice < row.purchasePrice
          ? (row.purchasePrice - row.currentPrice) * row.quantity
          : 0;

      const holdingPeriod = getHoldingPeriod(row.purchaseDate);
      const taxRate = holdingPeriod.isLongTerm ? longTermRate : federalTaxBracket;
      const stateTax = STATE_TAX_RATES[stateCode] || 0;
      const combinedRate = taxRate + stateTax;
      const savings = loss * combinedRate;

      return {
        ...row,
        loss,
        holdingPeriod,
        taxRate,
        combinedRate,
        savings
      };
    });

    const totalLoss = rowData.reduce((sum, row) => sum + row.loss, 0);
    const shortTermLoss = rowData
      .filter(row => !row.holdingPeriod.isLongTerm)
      .reduce((sum, row) => sum + row.loss, 0);
    const longTermLoss = rowData
      .filter(row => row.holdingPeriod.isLongTerm)
      .reduce((sum, row) => sum + row.loss, 0);
    const totalSavings = rowData.reduce((sum, row) => sum + row.savings, 0);

    // $3,000 annual limit for offsetting ordinary income
    const usableThisYear = Math.min(totalLoss, 3000);
    const carryforward = Math.max(0, totalLoss - 3000);

    return {
      rowData,
      totalLoss,
      shortTermLoss,
      longTermLoss,
      totalSavings,
      usableThisYear,
      carryforward
    };
  }, [rows, federalTaxBracket, longTermRate, stateCode]);

  const formatCurrency = (value: number) =>
    value.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const context = {
        ...calculations,
        federalTaxBracket,
        longTermRate,
        stateCode,
        rowCount: rows.length
      };
      const msg = await getFinancialAdvice(context, 'Crypto Tax Loss Harvesting Strategy & Capital Gains Optimization');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch crypto tax advice:', error);
      setAdvice('Unable to load tax strategy advice at this time. Please try again later.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [rows, federalTaxBracket, longTermRate, stateCode]);

  // Add HowTo Schema
  useEffect(() => {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Harvest Crypto Tax Losses to Reduce Your Tax Bill",
      "description": "Step-by-step guide to harvesting cryptocurrency losses for tax savings, including short-term vs long-term capital gains treatment and the $3,000 annual deduction limit.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Your Crypto Holdings",
          "text": "Add each cryptocurrency position with unrealized losses. Include asset name, purchase price, current price, quantity, and purchase date."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Check Holding Period",
          "text": "The calculator automatically determines if each position is short-term (held 365 days or less) or long-term (held over 365 days). This affects your tax rate."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Select Your Tax Bracket",
          "text": "Choose your federal tax bracket for short-term capital gains (ordinary income rates: 10%-37%) and your long-term capital gains rate (0%, 15%, or 20%). Add your state tax rate if applicable."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Review Harvestable Losses",
          "text": "See your total harvestable loss, broken down by short-term and long-term. The calculator shows estimated tax savings based on your combined federal + state rate."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Understand the $3,000 Limit",
          "text": "You can use capital losses to offset capital gains. If losses exceed gains, you can deduct up to $3,000 per year against ordinary income. Remaining losses carry forward to future years."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Execute Your Harvest",
          "text": "Sell the positions with losses before December 31st to realize the loss for the current tax year. Unlike stocks, crypto has NO wash sale rule - you can immediately rebuy the same asset."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Report on Your Tax Return",
          "text": "Report crypto sales on Form 8949 and Schedule D. Use crypto tax software like CoinLedger, Koinly, or TokenTax to generate tax forms from your transaction history."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-crypto-tax-loss';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-crypto-tax-loss');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Add FAQPage Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the wash sale rule apply to cryptocurrency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No! As of 2024, the IRS wash sale rule does NOT apply to cryptocurrency. The wash sale rule (which prohibits claiming a loss if you rebuy the same security within 30 days) only applies to stocks, bonds, and traditional securities. For crypto, you can sell at a loss, claim the tax deduction, and immediately rebuy the same cryptocurrency. However, proposed legislation may change this in the future."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate crypto tax loss harvesting savings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calculate your loss per position: (Purchase Price - Current Price) × Quantity. Your tax savings = Total Loss × Tax Rate. Short-term losses (held ≤365 days) are taxed at ordinary income rates (10-37%). Long-term losses (held >365 days) are taxed at capital gains rates (0%, 15%, or 20%). Add your state tax rate for total savings. Use our calculator to see exact savings by entering your positions and tax bracket."
          }
        },
        {
          "@type": "Question",
          "name": "What is the $3,000 capital loss deduction limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can use capital losses to offset capital gains dollar-for-dollar with no limit. If your losses exceed your gains, you can deduct up to $3,000 per year ($1,500 if married filing separately) against ordinary income like wages. Any remaining losses carry forward indefinitely to future tax years. For example, if you have $10,000 in crypto losses and no gains, you deduct $3,000 this year and carry forward $7,000 to next year."
          }
        },
        {
          "@type": "Question",
          "name": "Do I pay short-term or long-term capital gains on crypto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your holding period. If you held the cryptocurrency for 365 days or less, it's short-term capital gains taxed at ordinary income rates (10%-37%). If you held over 365 days, it's long-term capital gains taxed at preferential rates (0%, 15%, or 20%). The IRS uses FIFO (first-in, first-out) by default, but you can elect specific identification to choose which coins to sell."
          }
        },
        {
          "@type": "Question",
          "name": "Can I harvest crypto losses throughout the year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Unlike stock tax loss harvesting (which is often done in December due to the 30-day wash sale rule), crypto tax loss harvesting can be done year-round. Since there's no wash sale rule for crypto, you can sell for a loss and immediately rebuy to maintain your position while locking in the tax benefit. Many investors harvest losses quarterly or whenever significant losses appear."
          }
        },
        {
          "@type": "Question",
          "name": "What is specific identification for cryptocurrency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specific identification lets you choose exactly which crypto units (coins/tokens) you're selling, rather than using FIFO (first-in, first-out). This is powerful for tax optimization. You must identify the specific units at the time of sale (by date and price). For example, if you bought BTC at $30k, $40k, and $50k, and current price is $35k, you can specifically sell the $50k lot to harvest a $15k loss while keeping the $30k lot."
          }
        },
        {
          "@type": "Question",
          "name": "How do I report crypto losses on my tax return?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Report cryptocurrency sales on Form 8949 (Sales and Other Dispositions of Capital Assets), then transfer totals to Schedule D (Capital Gains and Losses). For each sale, report: description (e.g., '0.5 BTC'), date acquired, date sold, proceeds (sale price), cost basis (purchase price), and gain/loss. Use crypto tax software (CoinLedger, Koinly, TokenTax) to automatically generate these forms from your exchange transaction history."
          }
        },
        {
          "@type": "Question",
          "name": "Can I offset NFT gains with crypto losses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Both cryptocurrencies and NFTs are treated as property by the IRS. Capital losses from selling crypto can offset capital gains from selling NFTs (or vice versa). For example, if you have a $5,000 gain from selling an NFT and a $5,000 loss from selling crypto, they offset each other and you owe $0 in capital gains tax. This makes tax loss harvesting especially valuable if you have gains from NFT flips or DeFi trading."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema-crypto-tax-loss';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-crypto-tax-loss');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-24 animate-in fade-in duration-500">
      <header className="space-y-4">
        <p className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em]">Crypto Tax Desk 2025</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">
          Crypto <span className="text-emerald-500">Tax Loss Harvester</span>
        </h1>
        <p className="text-slate-600 max-w-3xl text-lg font-medium">
          Simulate harvesting losses across your crypto positions to estimate tax savings. Calculate short-term vs long-term
          capital gains rates, track holding periods, and optimize your crypto tax strategy.
        </p>
      </header>

      {/* Wash Sale Rule Banner */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-3xl p-8 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 text-[200px] text-emerald-500/5 font-black leading-none">✓</div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🚀</div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-emerald-900 mb-2">
                No Wash Sale Rule for Crypto!
              </h3>
              <p className="text-slate-700 text-lg font-medium leading-relaxed mb-4">
                Unlike stocks and bonds, <strong>cryptocurrency is NOT subject to the IRS wash sale rule</strong>.
                This means you can sell crypto at a loss, claim the tax deduction, and <strong>immediately rebuy</strong> the
                same cryptocurrency without waiting 30 days.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-2xl p-5 border border-emerald-200">
                  <p className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">✗ Stocks (Wash Sale Rule)</p>
                  <p className="text-sm text-slate-600">Sell at loss → Wait 30 days → Rebuy. Loss disallowed if you rebuy within 30 days.</p>
                </div>
                <div className="bg-emerald-600 rounded-2xl p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-wider mb-2">✓ Crypto (No Wash Sale)</p>
                  <p className="text-sm text-emerald-50">Sell at loss → Claim tax deduction → Immediately rebuy. Loss is 100% valid!</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                ⚠️ Note: Proposed legislation may change this. Consult a tax professional for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Loss Table */}
      <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Portfolio Loss Table</p>
            <p className="text-sm text-slate-500 mt-1">Enter positions with unrealized losses (purchase date required for tax rate).</p>
          </div>
          <button
            type="button"
            onClick={addRow}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            + Add Asset
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] tracking-[0.2em]">
              <tr>
                <th className="text-left px-6 py-3 font-bold">Asset</th>
                <th className="text-left px-6 py-3 font-bold">Purchase Date</th>
                <th className="text-right px-6 py-3 font-bold">Purchase Price</th>
                <th className="text-right px-6 py-3 font-bold">Current Price</th>
                <th className="text-right px-6 py-3 font-bold">Quantity</th>
                <th className="text-right px-6 py-3 font-bold">Holding Period</th>
                <th className="text-right px-6 py-3 font-bold">Loss</th>
                <th className="text-right px-6 py-3 font-bold">Tax Savings</th>
                <th className="text-center px-6 py-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {calculations.rowData.map((row) => {
                const hasLoss = row.loss > 0;
                return (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        value={row.assetName}
                        onChange={(event) => updateRow(row.id, 'assetName', event.target.value)}
                        placeholder="BTC, ETH, SOL..."
                        className="w-32 bg-transparent border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="date"
                        value={row.purchaseDate}
                        onChange={(event) => updateRow(row.id, 'purchaseDate', event.target.value)}
                        className="w-40 bg-transparent border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        value={row.purchasePrice}
                        onChange={(event) => updateRow(row.id, 'purchasePrice', event.target.value)}
                        className="w-32 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        value={row.currentPrice}
                        onChange={(event) => updateRow(row.id, 'currentPrice', event.target.value)}
                        className="w-32 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        step="0.0001"
                        value={row.quantity}
                        onChange={(event) => updateRow(row.id, 'quantity', event.target.value)}
                        className="w-28 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-slate-700">{row.holdingPeriod.days} days</span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mt-1 ${
                          row.holdingPeriod.isLongTerm
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {row.holdingPeriod.isLongTerm ? 'Long-Term' : 'Short-Term'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-700">
                      {formatCurrency(row.loss)}
                    </td>
                    <td
                      className={`px-6 py-4 text-right font-black text-lg ${
                        hasLoss ? 'text-emerald-600' : 'text-slate-400'
                      }`}
                    >
                      {formatCurrency(row.savings)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteRow(row.id)}
                        className="px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete row"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-[180px] text-white/5 font-black">Σ</div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">Total Harvestable Loss</p>
          <p className="text-5xl font-black text-emerald-400 mb-4">
            {formatCurrency(calculations.totalLoss)}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-orange-300 font-semibold">Short-Term:</span>
              <span className="text-white font-bold">{formatCurrency(calculations.shortTermLoss)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300 font-semibold">Long-Term:</span>
              <span className="text-white font-bold">{formatCurrency(calculations.longTermLoss)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">Estimated Tax Savings</p>
            <p className="text-4xl font-black text-emerald-600">
              {formatCurrency(calculations.totalSavings)}
            </p>
            <p className="text-xs text-slate-500 mt-2">Combined federal + state rate</p>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">$3,000 Annual Limit</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 font-medium">Usable This Year:</span>
                <span className="font-bold text-emerald-600">{formatCurrency(calculations.usableThisYear)}</span>
              </div>
              {calculations.carryforward > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-600 font-medium">Carryforward:</span>
                  <span className="font-bold text-blue-600">{formatCurrency(calculations.carryforward)}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-3 italic">
              Capital losses offset gains 1:1. Remaining losses can offset up to $3K of ordinary income per year.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">Federal Tax Bracket</p>
            <div className="text-sm text-slate-600 mb-3 font-medium">Short-Term (≤365 days):</div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {FEDERAL_TAX_BRACKETS.map((bracket) => (
                <button
                  key={bracket.rate}
                  type="button"
                  onClick={() => setFederalTaxBracket(bracket.rate)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    federalTaxBracket === bracket.rate
                      ? 'bg-orange-500 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {bracket.label}
                </button>
              ))}
            </div>

            <div className="text-sm text-slate-600 mb-3 font-medium">Long-Term {'>'}365 days:</div>
            <div className="grid grid-cols-3 gap-2">
              {LONG_TERM_TAX_BRACKETS.map((bracket) => (
                <button
                  key={bracket.rate}
                  type="button"
                  onClick={() => setLongTermRate(bracket.rate)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    longTermRate === bracket.rate
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {bracket.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">State Tax</p>
            <select
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500"
            >
              {Object.entries(STATE_TAX_RATES).map(([code, rate]) => (
                <option key={code} value={code}>
                  {code} {rate > 0 ? `(${(rate * 100).toFixed(2)}%)` : '(0%)'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* AI Tax Advice */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <div className="flex items-start gap-4">
          <div className="text-4xl">🤖</div>
          <div className="flex-1">
            <h3 className="text-indigo-600 font-black uppercase text-sm tracking-widest mb-4">
              AI Tax Strategy Insights
            </h3>
            {loadingAdvice ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-indigo-200 rounded w-full"></div>
                <div className="h-4 bg-indigo-200 rounded w-5/6"></div>
                <div className="h-4 bg-indigo-200 rounded w-4/6"></div>
              </div>
            ) : (
              <p className="text-lg text-slate-700 italic font-medium leading-relaxed">{advice}</p>
            )}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="mt-16 pt-12 border-t border-slate-200 space-y-12">
        <header className="max-w-3xl">
          <h2 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-4">
            Understanding Crypto Tax Loss Harvesting
          </h2>
          <h3 className="text-4xl font-black text-slate-900 leading-tight">
            How Crypto <span className="text-emerald-600">Tax Loss Harvesting</span> Works
          </h3>
          <p className="text-slate-600 mt-4 text-lg font-medium leading-relaxed">
            Cryptocurrency tax loss harvesting is a powerful strategy to reduce your tax bill by selling crypto assets
            at a loss. Unlike stock tax loss harvesting, crypto harvesting has a massive advantage: <strong>no wash sale rule</strong>.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">
              Short-Term vs Long-Term
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3 pl-6">
              <p><strong>Short-Term (≤365 days):</strong> Taxed as ordinary income at your marginal tax bracket (10%-37%). Higher tax rate but losses save more per dollar.</p>
              <p><strong>Long-Term {'>'}365 days:</strong> Taxed at preferential capital gains rates (0%, 15%, or 20%). Lower tax rate, so losses save less per dollar.</p>
              <p>The calculator automatically determines holding period and applies the correct rate.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-blue-600 pl-6">
              The $3,000 Deduction Limit
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3 pl-6">
              <p><strong>Offset Gains First:</strong> Use losses to offset capital gains (from crypto, stocks, NFTs, etc.) dollar-for-dollar with no limit.</p>
              <p><strong>$3K Against Income:</strong> If losses exceed gains, deduct up to $3,000 per year against ordinary income (wages, self-employment).</p>
              <p><strong>Carryforward Indefinitely:</strong> Remaining losses carry forward to future years until fully used.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-purple-600 pl-6">
              No Wash Sale Rule Advantage
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3 pl-6">
              <p><strong>Stocks:</strong> Sell at loss, wait 30 days before rebuying or loss is disallowed.</p>
              <p><strong>Crypto:</strong> Sell at loss and immediately rebuy the same asset. Loss is 100% valid!</p>
              <p>This means you can harvest losses year-round without worrying about wash sales or losing your position.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
            Common Tax Loss Harvesting Strategies
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="text-3xl">📅</div>
              <h5 className="text-sm font-black text-emerald-600 uppercase">Year-End Harvesting</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional strategy: Review portfolio in December and harvest losses before Dec 31st to apply to current tax year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="text-3xl">🔄</div>
              <h5 className="text-sm font-black text-blue-600 uppercase">Continuous Harvesting</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Since there's no wash sale rule, harvest losses whenever they appear and immediately rebuy to maintain position exposure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="text-3xl">🎯</div>
              <h5 className="text-sm font-black text-purple-600 uppercase">Offset NFT Gains</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sold NFTs for a profit? Use crypto losses to offset those gains and reduce capital gains tax liability to $0.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="text-3xl">🔍</div>
              <h5 className="text-sm font-black text-orange-600 uppercase">Specific Identification</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose which specific crypto units to sell (by purchase date/price) to optimize short-term vs long-term tax treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Report */}
      <section className="bg-white border border-slate-200 rounded-3xl p-10 space-y-6">
        <h4 className="text-2xl font-black text-slate-900">
          How to Report Crypto Losses on Your Tax Return
        </h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Track All Transactions</h5>
                <p className="text-sm text-slate-600">Use crypto tax software (CoinLedger, Koinly, TokenTax) to import transactions from all exchanges, wallets, and DeFi protocols.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Generate Form 8949</h5>
                <p className="text-sm text-slate-600">Form 8949 lists every crypto sale: date acquired, date sold, proceeds, cost basis, and gain/loss. Separate short-term and long-term.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Complete Schedule D</h5>
                <p className="text-sm text-slate-600">Transfer Form 8949 totals to Schedule D (Capital Gains and Losses), which calculates your net capital gain or loss.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Apply $3,000 Limit</h5>
                <p className="text-sm text-slate-600">If net loss exceeds $3,000, only $3,000 reduces this year's income. Remaining loss carries forward to Schedule D line 14.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">Transfer to Form 1040</h5>
                <p className="text-sm text-slate-600">Schedule D total flows to Form 1040 line 7. This reduces your adjusted gross income and tax liability.</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="text-sm font-bold text-emerald-900 mb-2">💡 Pro Tip:</p>
              <p className="text-sm text-emerald-800">
                Use specific identification (not FIFO) to choose which coins to sell for optimal tax outcome. Document your specific lot selection at the time of sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="text-left bg-white rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📊 Quarterly Tax Calculator</h3>
            <p className="text-sm text-slate-600">Calculate estimated tax payments including crypto capital gains and losses.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💰 Investment Calculator</h3>
            <p className="text-sm text-slate-600">Calculate long-term investment returns and compare to crypto strategies.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💵 Salary Calculator</h3>
            <p className="text-sm text-slate-600">Determine your tax bracket for accurate crypto tax loss savings calculation.</p>
          </button>
          <div className="text-left bg-white rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-slate-900 mb-2">🔗 Crypto Tax Software</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• <strong>CoinLedger</strong> - Full tax reports</p>
              <p>• <strong>Koinly</strong> - Multi-exchange tracking</p>
              <p>• <strong>TokenTax</strong> - DeFi specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Crypto Tax Loss Harvester"
        calculatorUrl="https://quantcurb.com/crypto-tax-loss-harvester"
        faqs={[
          {
            question: "Does the wash sale rule apply to cryptocurrency?",
            answer: "No! As of 2024, the IRS wash sale rule does NOT apply to cryptocurrency. The wash sale rule (which prohibits claiming a loss if you rebuy the same security within 30 days) only applies to stocks, bonds, and traditional securities. For crypto, you can sell at a loss, claim the tax deduction, and immediately rebuy the same cryptocurrency. However, proposed legislation may change this in the future."
          },
          {
            question: "How do I calculate crypto tax loss harvesting savings?",
            answer: "Calculate your loss per position: (Purchase Price - Current Price) × Quantity. Your tax savings = Total Loss × Tax Rate. Short-term losses (held ≤365 days) are taxed at ordinary income rates (10-37%). Long-term losses (held >365 days) are taxed at capital gains rates (0%, 15%, or 20%). Add your state tax rate for total savings. Use our calculator to see exact savings by entering your positions and tax bracket."
          },
          {
            question: "What is the $3,000 capital loss deduction limit?",
            answer: "You can use capital losses to offset capital gains dollar-for-dollar with no limit. If your losses exceed your gains, you can deduct up to $3,000 per year ($1,500 if married filing separately) against ordinary income like wages. Any remaining losses carry forward indefinitely to future tax years. For example, if you have $10,000 in crypto losses and no gains, you deduct $3,000 this year and carry forward $7,000 to next year."
          },
          {
            question: "Do I pay short-term or long-term capital gains on crypto?",
            answer: "It depends on your holding period. If you held the cryptocurrency for 365 days or less, it's short-term capital gains taxed at ordinary income rates (10%-37%). If you held over 365 days, it's long-term capital gains taxed at preferential rates (0%, 15%, or 20%). The IRS uses FIFO (first-in, first-out) by default, but you can elect specific identification to choose which coins to sell."
          },
          {
            question: "Can I harvest crypto losses throughout the year?",
            answer: "Yes! Unlike stock tax loss harvesting (which is often done in December due to the 30-day wash sale rule), crypto tax loss harvesting can be done year-round. Since there's no wash sale rule for crypto, you can sell for a loss and immediately rebuy to maintain your position while locking in the tax benefit. Many investors harvest losses quarterly or whenever significant losses appear."
          },
          {
            question: "What is specific identification for cryptocurrency?",
            answer: "Specific identification lets you choose exactly which crypto units (coins/tokens) you're selling, rather than using FIFO (first-in, first-out). This is powerful for tax optimization. You must identify the specific units at the time of sale (by date and price). For example, if you bought BTC at $30k, $40k, and $50k, and current price is $35k, you can specifically sell the $50k lot to harvest a $15k loss while keeping the $30k lot."
          },
          {
            question: "How do I report crypto losses on my tax return?",
            answer: "Report cryptocurrency sales on Form 8949 (Sales and Other Dispositions of Capital Assets), then transfer totals to Schedule D (Capital Gains and Losses). For each sale, report: description (e.g., '0.5 BTC'), date acquired, date sold, proceeds (sale price), cost basis (purchase price), and gain/loss. Use crypto tax software (CoinLedger, Koinly, TokenTax) to automatically generate these forms from your exchange transaction history."
          },
          {
            question: "Can I offset NFT gains with crypto losses?",
            answer: "Yes! Both cryptocurrencies and NFTs are treated as property by the IRS. Capital losses from selling crypto can offset capital gains from selling NFTs (or vice versa). For example, if you have a $5,000 gain from selling an NFT and a $5,000 loss from selling crypto, they offset each other and you owe $0 in capital gains tax. This makes tax loss harvesting especially valuable if you have gains from NFT flips or DeFi trading."
          }
        ]}
      />

      {/* Bottom Metadata */}
      <footer className="text-center pt-16 border-t border-slate-200">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">
          QuantCurb Crypto Tax Hub v2.0 • No Wash Sale Rule Advantage
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {[
            'Crypto Tax Loss Harvesting', 'No Wash Sale Rule', 'Short-Term vs Long-Term', 'Capital Gains Tax',
            '$3000 Deduction Limit', 'Form 8949', 'Schedule D', 'Specific Identification',
            'Tax Optimization', 'Carryforward Losses', 'NFT Offset', 'Holding Period Calculator'
          ].map(tag => (
            <span key={tag} className="px-5 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-bold border border-emerald-200/50">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default CryptoTaxLossHarvester;
