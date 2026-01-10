
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface Card {
  id: string;
  name: string;
  balance: number;
  rate: number;
  minPayment: number;
}

interface CreditCardPayoffProps {
  onNavigate?: (tool: ToolType) => void;
}

const CreditCardPayoff: React.FC<CreditCardPayoffProps> = ({ onNavigate }) => {
  const [cards, setCards] = useState<Card[]>([
    { id: '1', name: 'Sapphire Preferred', balance: 5200, rate: 24.99, minPayment: 150 },
    { id: '2', name: 'Store Card (Tech)', balance: 1850, rate: 29.99, minPayment: 60 }
  ]);
  const [targetMonthly, setTargetMonthly] = useState<number>(600);
  const [newCard, setNewCard] = useState({ name: '', balance: '', rate: '', min: '' });
  const [strategy, setStrategy] = useState<'avalanche' | 'snowball'>('avalanche');
  const [balanceTransferRate, setBalanceTransferRate] = useState<number>(0); // For balance transfer calculator
  const [balanceTransferFee, setBalanceTransferFee] = useState<number>(3); // Typical 3-5%
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const addCard = () => {
    if (!newCard.name || !newCard.balance) return;
    const card: Card = {
      id: Date.now().toString(),
      name: newCard.name,
      balance: Number(newCard.balance),
      rate: Number(newCard.rate),
      minPayment: Number(newCard.min)
    };
    setCards([...cards, card]);
    setNewCard({ name: '', balance: '', rate: '', min: '' });
  };

  const removeCard = (id: string) => setCards(cards.filter(c => c.id !== id));

  const stats = useMemo(() => {
    if (cards.length === 0) return null;

    // Clone and sort cards based on strategy
    let sortedCards = [...cards].map(c => ({ ...c, currentBalance: c.balance }));
    if (strategy === 'avalanche') {
      sortedCards.sort((a, b) => b.rate - a.rate);
    } else {
      sortedCards.sort((a, b) => a.balance - b.balance);
    }

    const totalMinPayments = cards.reduce((sum, c) => sum + c.minPayment, 0);
    const extraBudget = Math.max(0, targetMonthly - totalMinPayments);
    
    let months = 0;
    let totalInterestPaid = 0;
    const schedule = [];
    let activeCards = sortedCards.filter(c => c.currentBalance > 0);

    while (activeCards.length > 0 && months < 360) {
      months++;
      let monthlyInterestTotal = 0;
      let availableExtra = extraBudget;

      // 1. Pay minimums and calculate interest
      activeCards.forEach(card => {
        const monthlyRate = (card.rate / 100) / 12;
        const interest = card.currentBalance * monthlyRate;
        monthlyInterestTotal += interest;
        totalInterestPaid += interest;
        
        // Subtract min payment (minus interest) from balance
        const principalFromMin = Math.min(card.currentBalance, card.minPayment - interest);
        card.currentBalance -= Math.max(0, principalFromMin);
      });

      // 2. Apply extra budget to the target card (first in sorted list)
      if (activeCards.length > 0 && availableExtra > 0) {
        const target = activeCards[0];
        const extraToApply = Math.min(target.currentBalance, availableExtra);
        target.currentBalance -= extraToApply;
      }

      const totalRemaining = activeCards.reduce((sum, c) => sum + c.currentBalance, 0);
      if (months % 6 === 0 || totalRemaining === 0) {
        schedule.push({ month: months, balance: Math.round(totalRemaining) });
      }

      activeCards = activeCards.filter(c => c.currentBalance > 0.01);
      if (totalRemaining === 0) break;
    }

    return { 
      months, 
      totalInterestPaid, 
      totalDebt: cards.reduce((sum, c) => sum + c.balance, 0),
      schedule,
      isBudgetTooLow: totalMinPayments > targetMonthly
    };
  }, [cards, targetMonthly, strategy]);

  const fetchAdvice = async () => {
    if (cards.length === 0) return;
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ cards, targetMonthly, strategy, stats }, 'Credit Card Payoff & Interest Mitigation');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [cards, targetMonthly, strategy]);

  useEffect(() => {
    // Add HowTo schema for "How to pay off credit card debt"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Pay Off Credit Card Debt: Avalanche vs Snowball Method",
      "description": "Step-by-step guide to paying off credit card debt using the Avalanche or Snowball method to save on interest and become debt-free faster.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "List All Your Credit Cards",
          "text": "Enter all your credit cards with their balances, interest rates (APR), and minimum payments."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Set Your Monthly Budget",
          "text": "Enter the total amount you can pay toward debt each month (minimum payments + extra)."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Choose Your Strategy",
          "text": "Select Avalanche (pay highest interest first, saves most money) or Snowball (pay smallest balance first, psychological wins)."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Review Your Payoff Plan",
          "text": "The calculator shows how long it will take to pay off all debt, total interest paid, and your payoff timeline."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Consider Balance Transfers",
          "text": "If you have high-interest debt, consider transferring to a 0% APR card to save on interest (watch for transfer fees)."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Stick to Your Plan",
          "text": "Make minimum payments on all cards, then put all extra money toward your target card until it's paid off."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-credit-card';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-credit-card');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">Debt <span className="text-rose-600">Strategist</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Algorithmic multi-card payoff optimizer using Snowball and Avalanche methodology.</p>
        </div>
        <div className="bg-rose-600 px-8 py-5 rounded-[2.5rem] shadow-2xl text-white">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Estimated Debt-Free Date</p>
           <p className="text-3xl font-black tracking-tighter">
             {stats?.months ? `${Math.floor(stats.months / 12)}y ${stats.months % 12}m` : '---'}
           </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left: Inputs & Card Manager */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Payoff Budget</h3>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                 <button onClick={() => setStrategy('avalanche')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${strategy === 'avalanche' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400'}`}>Avalanche</button>
                 <button onClick={() => setStrategy('snowball')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${strategy === 'snowball' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400'}`}>Snowball</button>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Total Monthly Payment ($)</label>
              <input type="number" value={targetMonthly} onChange={e => setTargetMonthly(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-2xl text-rose-600 focus:ring-2 focus:ring-rose-500" />
              {stats?.isBudgetTooLow && <p className="mt-2 text-[10px] font-bold text-rose-500 uppercase">Warning: Budget is below minimum payments!</p>}
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Active Debts ({cards.length})</h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cards.map(card => (
                <div key={card.id} className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group relative border border-transparent hover:border-rose-100 hover:bg-white transition-all">
                  <div>
                    <h4 className="font-black text-slate-800">{card.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${card.balance.toLocaleString()} • {card.rate}% APR</p>
                  </div>
                  <button onClick={() => removeCard(card.id)} className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-slate-50 space-y-4">
              <input placeholder="Card Name" className="w-full p-3 bg-slate-50 rounded-xl text-sm font-bold border-none" value={newCard.name} onChange={e => setNewCard({...newCard, name: e.target.value})} />
              <div className="grid grid-cols-3 gap-3">
                <input placeholder="Balance" type="number" className="w-full p-3 bg-slate-50 rounded-xl text-sm font-bold border-none" value={newCard.balance} onChange={e => setNewCard({...newCard, balance: e.target.value})} />
                <input placeholder="APR %" type="number" className="w-full p-3 bg-slate-50 rounded-xl text-sm font-bold border-none" value={newCard.rate} onChange={e => setNewCard({...newCard, rate: e.target.value})} />
                <input placeholder="Min $" type="number" className="w-full p-3 bg-slate-50 rounded-xl text-sm font-bold border-none" value={newCard.min} onChange={e => setNewCard({...newCard, min: e.target.value})} />
              </div>
              <button onClick={addCard} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors">Add Debt Source</button>
            </div>
          </section>
        </div>

        {/* Right: Analysis & Charts */}
        <div className="lg:col-span-7 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
               <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Interest Paid</p>
               <h3 className="text-4xl font-black text-white">${Math.round(stats?.totalInterestPaid || 0).toLocaleString()}</h3>
               <div className="absolute -right-6 -bottom-6 text-[100px] font-black text-white/5 select-none pointer-events-none tracking-tighter">APR</div>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Interest Bleed / Mo</p>
               <h4 className="text-3xl font-black text-slate-900">
                 ${cards.reduce((sum, c) => sum + (c.balance * (c.rate/100)/12), 0).toFixed(2)}
               </h4>
               <p className="text-[9px] font-bold text-rose-500 uppercase mt-2">Money lost to banks monthly</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Payoff Trajectory</h4>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats?.schedule || []}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="balance" stroke="#e11d48" strokeWidth={3} fill="#e11d48" fillOpacity={0.1} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex items-start gap-8">
             <div className="text-5xl">🤖</div>
             <div className="flex-1">
                <h4 className="text-rose-600 font-black uppercase text-[10px] tracking-widest mb-4">Gemini Strategic Triage</h4>
                {loadingAdvice ? (
                  <div className="space-y-2 animate-pulse"><div className="h-4 bg-slate-200 rounded w-full"></div><div className="h-4 bg-slate-200 rounded w-2/3"></div></div>
                ) : (
                  <p className="text-lg text-slate-700 italic font-medium leading-relaxed">
                    {advice || 'Analyzing your debt profile for high-interest leakage...'}
                  </p>
                )}
             </div>
          </div>
        </div>
      </div>

      {/* SEO Expert Knowledge Base Section */}
      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-4">Educational Grounding</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Mastering the <span className="text-rose-600">Debt Payoff</span> Lifecycle</h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            Eliminating high-interest debt is the fastest way to improve your net worth. Understanding the math behind interest compounding is critical for long-term financial freedom.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-rose-600 pl-6">The Avalanche Method</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Avalanche is the mathematically optimal choice. By sorting debts by APR (Annual Percentage Rate) and paying the highest first, you minimize the total interest paid to lenders. This is best for large balances with high interest rates.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-slate-900 pl-6">The Snowball Effect</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              The Snowball method focuses on psychological wins. By paying off the smallest balances first, regardless of interest rate, you create quick "victories" that build momentum and keep you committed to your budget plan.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">Balance Transfers</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Moving debt from a 25% APR card to a 0% introductory APR card can save thousands in months. However, be wary of "transfer fees" (typically 3-5%) and ensure the balance is cleared before the promotional window expires.
            </p>
          </div>
        </div>

        <div className="bg-rose-50 p-12 rounded-[3rem] border border-rose-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-900">Why Your APR Matters</h4>
            <p className="text-slate-600 font-medium">
              Average credit card interest rates currently hover between 20-28%. On a $10,000 balance, a 25% APR means you are paying <strong>$2,500 every year</strong> just for the privilege of carrying that debt. This is "inverse investing"—banks are profiting from your future self.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
             <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
                <p className="text-[10px] font-black text-rose-500 uppercase mb-1">Good DTI</p>
                <p className="text-xl font-black text-slate-800">&lt; 36%</p>
             </div>
             <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
                <p className="text-[10px] font-black text-rose-500 uppercase mb-1">Danger Zone</p>
                <p className="text-xl font-black text-slate-800">&gt; 50%</p>
             </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Calculated Logic</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We use a month-by-month simulation. First, minimum payments are satisfied to prevent late fees. Then, 100% of the surplus budget is "targeted" at the prioritized card according to your chosen strategy.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How to use</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Input every card you own, even if the balance is low. Set your 'Total Monthly Budget' to the maximum you can afford. The tool will tell you exactly where to send every dollar for maximum efficiency.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Expert Tips</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Negotiate rates: Call your bank to request an APR lower</li>
            <li>• Automate min payments: Never miss a due date</li>
            <li>• Use AI: Gemini analyzes your "bleed" rate</li>
          </ul>
        </div>
      </section>

      {/* Balance Transfer Calculator Section */}
      {cards.length > 0 && (
        <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Balance Transfer Calculator</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Transfer Rate (APR %)</label>
              <input 
                type="number" 
                step="0.1"
                value={balanceTransferRate} 
                onChange={(e) => setBalanceTransferRate(Number(e.target.value))} 
                className="w-full p-4 bg-white border border-slate-200 rounded-xl font-bold" 
                placeholder="0"
              />
              <p className="text-xs text-slate-500 mt-1">Enter 0 for 0% promotional APR</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Transfer Fee (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={balanceTransferFee} 
                onChange={(e) => setBalanceTransferFee(Number(e.target.value))} 
                className="w-full p-4 bg-white border border-slate-200 rounded-xl font-bold" 
                placeholder="3"
              />
              <p className="text-xs text-slate-500 mt-1">Typically 3-5% of transferred amount</p>
            </div>
          </div>
          {balanceTransferRate >= 0 && cards.length > 0 && (
            <div className="mt-6 bg-white rounded-2xl p-6 border border-indigo-200">
              {cards.map(card => {
                const transferFee = card.balance * (balanceTransferFee / 100);
                const currentAnnualInterest = card.balance * (card.rate / 100);
                const newAnnualInterest = (card.balance + transferFee) * (balanceTransferRate / 100);
                const annualSavings = currentAnnualInterest - newAnnualInterest;
                const breakEvenMonths = transferFee / Math.max(0.01, (currentAnnualInterest / 12 - newAnnualInterest / 12));
                
                return (
                  <div key={card.id} className="mb-4 pb-4 border-b border-slate-100 last:border-0">
                    <h4 className="font-bold text-slate-900 mb-2">{card.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-600">Transfer Fee</p>
                        <p className="font-bold text-slate-900">${Math.round(transferFee).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">Annual Savings</p>
                        <p className="font-bold text-emerald-600">${Math.round(annualSavings).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">Break-Even</p>
                        <p className="font-bold text-slate-900">{breakEvenMonths > 0 && breakEvenMonths < 120 ? `${Math.round(breakEvenMonths)} months` : 'Check manually'}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">Worth It?</p>
                        <p className={`font-bold ${annualSavings > transferFee ? 'text-emerald-600' : 'text-red-600'}`}>
                          {annualSavings > transferFee ? '✅ Yes' : '❌ No'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 Should I Pay Off Debt or Invest?</h3>
            <p className="text-sm text-slate-600">Learn when to prioritize debt payoff vs investing based on interest rates and returns.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.EMI_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💳 Loan EMI Calculator</h3>
            <p className="text-sm text-slate-600">Calculate loan payments and see how extra payments save interest.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h3>
            <p className="text-sm text-slate-600">Compare different loan offers and refinancing options.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h3>
            <p className="text-sm text-slate-600">See how investing the money you save from debt payoff can grow.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Credit Card Payoff Calculator"
        calculatorUrl="https://quantcurb.com/credit-card-debt-strategist"
        faqs={[
          {
            question: "What's the difference between Avalanche and Snowball debt payoff methods?",
            answer: "Avalanche method pays off debts with the highest interest rates first, saving the most money in interest. Snowball method pays off smallest balances first for psychological wins and momentum. Avalanche is mathematically optimal, but Snowball works better for some people who need motivation. Our calculator shows both strategies so you can compare."
          },
          {
            question: "How do I calculate how long it will take to pay off my credit cards?",
            answer: "Use our calculator! Enter all your credit cards (balance, APR, minimum payment), set your monthly budget, and choose Avalanche or Snowball strategy. The calculator shows exactly how many months until debt-free, total interest paid, and your payoff timeline. It accounts for minimum payments, interest compounding, and extra payments."
          },
          {
            question: "Should I do a balance transfer to pay off credit card debt?",
            answer: "Balance transfers can save money if you move high-interest debt to a 0% APR card. However, consider: 1) Transfer fees (typically 3-5%), 2) Promotional period length, 3) Whether you can pay off before the rate increases. Use our balance transfer calculator to see if it's worth it. Generally, if you can pay off within the promotional period, it's a good move."
          },
          {
            question: "How much should I pay toward credit card debt each month?",
            answer: "Pay as much as possible above minimum payments. The more you pay, the faster you become debt-free and the less interest you pay. Our calculator shows the impact of different monthly budgets. Aim to pay at least 2-3x the minimum payment if possible. Every extra dollar saves significant interest over time."
          },
          {
            question: "What happens if I only make minimum payments?",
            answer: "Making only minimum payments means you'll pay thousands in interest and take years (or decades) to pay off debt. For example, a $5,000 balance at 25% APR with $150 minimum payment takes ~4 years and costs ~$2,000 in interest. Our calculator shows the true cost of minimum payments vs aggressive payoff."
          },
          {
            question: "Can I negotiate my credit card interest rate?",
            answer: "Yes! Call your credit card company and ask for a lower rate. Mention competitor offers, your payment history, and financial hardship if applicable. Many companies will reduce rates to keep you as a customer. Even a 2-3% reduction can save hundreds in interest. If they refuse, consider balance transfer or debt consolidation."
          },
          {
            question: "Should I pay off credit cards or invest?",
            answer: "Generally, if your credit card APR is higher than expected investment returns (7-8%), pay off debt first. Credit card rates (20-30%) are much higher than stock market returns. However, if you have low-rate debt (<5%) and high investment returns expected, investing might make sense. Use our 'Should I Pay Off Debt or Invest' calculator to see the math."
          },
          {
            question: "How does credit card interest work?",
            answer: "Credit card interest compounds daily based on your average daily balance. The APR (Annual Percentage Rate) is divided by 365 to get the daily rate, then applied to your balance each day. This means interest charges grow quickly. Paying more than the minimum reduces the principal faster, saving significant interest over time."
          }
        ]}
      />
    </div>
  );
};

export default CreditCardPayoff;
