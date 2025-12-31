
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

interface Card {
  id: string;
  name: string;
  balance: number;
  rate: number;
  minPayment: number;
}

const CreditCardPayoff: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: '1', name: 'Premium Card', balance: 4500, rate: 22.99, minPayment: 115 },
    { id: '2', name: 'Store Card', balance: 1200, rate: 29.99, minPayment: 45 }
  ]);
  const [targetMonthly, setTargetMonthly] = useState<number>(500);
  
  // New card form state
  const [newName, setNewName] = useState('');
  const [newBalance, setNewBalance] = useState<number>(0);
  const [newRate, setNewRate] = useState<number>(0);
  const [newMin, setNewMin] = useState<number>(0);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const addCard = () => {
    if (!newName || newBalance <= 0) return;
    const card: Card = {
      id: Date.now().toString(),
      name: newName,
      balance: newBalance,
      rate: newRate,
      minPayment: newMin || Math.max(25, newBalance * 0.02)
    };
    setCards([...cards, card]);
    setNewName('');
    setNewBalance(0);
    setNewRate(0);
    setNewMin(0);
  };

  const removeCard = (id: string) => {
    setCards(cards.filter(c => c.id !== id));
  };

  const calculateStrategy = (strategyCards: Card[], type: 'snowball' | 'avalanche') => {
    // Sort based on strategy
    const sorted = [...strategyCards].sort((a, b) => {
      if (type === 'snowball') return a.balance - b.balance; // Smallest balance first
      return b.rate - a.rate; // Highest interest first
    });

    let months = 0;
    let totalInterest = 0;
    const schedule = [];
    let currentBalances = sorted.map(c => ({ ...c }));
    
    const totalMinPayments = currentBalances.reduce((sum, c) => sum + c.minPayment, 0);
    const monthlyBudget = Math.max(targetMonthly, totalMinPayments);

    while (currentBalances.some(c => c.balance > 0) && months < 600) {
      months++;
      let remainingBudget = monthlyBudget;
      let interestThisMonth = 0;

      // 1. Pay minimums first and calculate interest
      currentBalances.forEach(c => {
        if (c.balance > 0) {
          const interest = c.balance * (c.rate / 100 / 12);
          interestThisMonth += interest;
          totalInterest += interest;
          c.balance += interest;
          
          const pay = Math.min(c.balance, c.minPayment);
          c.balance -= pay;
          remainingBudget -= pay;
        }
      });

      // 2. Apply "Snowball/Avalanche" extra to the priority card
      if (remainingBudget > 0) {
        for (const c of currentBalances) {
          if (c.balance > 0) {
            const pay = Math.min(c.balance, remainingBudget);
            c.balance -= pay;
            remainingBudget -= pay;
            if (remainingBudget <= 0) break;
          }
        }
      }

      const totalBalance = currentBalances.reduce((sum, c) => sum + c.balance, 0);
      if (months % 3 === 0 || totalBalance === 0) {
        schedule.push({ 
          month: months, 
          balance: Math.round(totalBalance) 
        });
      }
      if (totalBalance === 0) break;
    }

    return { months, totalInterest, schedule };
  };

  const results = useMemo(() => {
    if (cards.length === 0) return null;
    return {
      snowball: calculateStrategy(cards, 'snowball'),
      avalanche: calculateStrategy(cards, 'avalanche')
    };
  }, [cards, targetMonthly]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ 
      debts: cards, 
      budget: targetMonthly,
      snowballMonths: results?.snowball.months,
      avalancheMonths: results?.avalanche.months,
      avalancheInterest: results?.avalanche.totalInterest
    }, 'Debt Payoff Strategy Comparison (Snowball vs Avalanche)');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [cards, targetMonthly]);

  const combinedData = useMemo(() => {
    if (!results) return [];
    const maxMonths = Math.max(results.snowball.schedule.length, results.avalanche.schedule.length);
    const data = [];
    for (let i = 0; i < maxMonths; i++) {
      data.push({
        month: results.snowball.schedule[i]?.month || results.avalanche.schedule[i]?.month,
        snowball: results.snowball.schedule[i]?.balance ?? 0,
        avalanche: results.avalanche.schedule[i]?.balance ?? 0
      });
    }
    return data;
  }, [results]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Debt <span className="text-rose-600">Strategist</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Multi-Card Payoff Optimizer</p>
        </div>
        {results && (
          <div className="flex gap-4">
            <div className="bg-indigo-50 px-6 py-3 rounded-2xl border border-indigo-100 shadow-sm">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Avalanche Savings</p>
              <p className="text-xl font-black text-indigo-600">
                ${Math.round(results.snowball.totalInterest - results.avalanche.totalInterest).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Card Management */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <div>
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Add New Debt</h3>
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" placeholder="Card Name" value={newName} onChange={e => setNewName(e.target.value)}
                    className="col-span-2 p-4 bg-slate-50 border-none rounded-2xl font-bold"
                  />
                  <input 
                    type="number" placeholder="Balance ($)" value={newBalance || ''} onChange={e => setNewBalance(Number(e.target.value))}
                    className="p-4 bg-slate-50 border-none rounded-2xl font-bold"
                  />
                  <input 
                    type="number" placeholder="APR (%)" value={newRate || ''} onChange={e => setNewRate(Number(e.target.value))}
                    className="p-4 bg-slate-50 border-none rounded-2xl font-bold"
                  />
                  <input 
                    type="number" placeholder="Min Pay ($)" value={newMin || ''} onChange={e => setNewMin(Number(e.target.value))}
                    className="p-4 bg-slate-50 border-none rounded-2xl font-bold"
                  />
                  <button 
                    onClick={addCard}
                    className="p-4 bg-rose-500 text-white rounded-2xl font-black uppercase text-xs hover:bg-rose-600 transition-all shadow-lg shadow-rose-100"
                  >
                    Add Card
                  </button>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-50">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Monthly Debt Budget</h3>
               <input 
                type="number" value={targetMonthly} onChange={e => setTargetMonthly(Number(e.target.value))}
                className="w-full p-6 bg-indigo-50 border-none rounded-[2rem] font-black text-indigo-600 text-3xl shadow-inner focus:ring-2 focus:ring-indigo-500"
              />
              <p className="mt-4 text-[9px] font-bold text-slate-400 uppercase leading-relaxed">
                Total Min Payments Required: ${cards.reduce((sum, c) => sum + c.minPayment, 0)}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-50">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Debts ({cards.length})</h3>
              {cards.map(card => (
                <div key={card.id} className="group relative bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center transition-all hover:bg-white hover:shadow-md">
                   <div>
                     <p className="text-sm font-black text-slate-800">{card.name}</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                       ${card.balance.toLocaleString()} @ {card.rate}%
                     </p>
                   </div>
                   <button 
                    onClick={() => removeCard(card.id)}
                    className="w-8 h-8 rounded-full bg-white text-slate-300 hover:text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                   >
                     ✕
                   </button>
                </div>
              ))}
              {cards.length === 0 && (
                <div className="py-8 text-center text-slate-400 italic text-sm">No debts added yet.</div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Analysis & Charts */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-all">
               <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl group-hover:opacity-10 transition-opacity">🏔️</div>
               <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">Avalanche Strategy</p>
               <h4 className="text-3xl font-black text-slate-900 mb-1">{results?.avalanche.months} Months</h4>
               <p className="text-[10px] font-bold text-slate-400 uppercase">Total Interest: ${Math.round(results?.avalanche.totalInterest || 0).toLocaleString()}</p>
               <div className="mt-4 p-3 bg-indigo-50 rounded-xl">
                 <p className="text-[9px] font-black text-indigo-600 uppercase">Financial Logic</p>
                 <p className="text-[10px] text-indigo-700 leading-tight">Prioritizes high-interest rates to minimize total cost.</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm relative overflow-hidden group hover:border-rose-200 transition-all">
               <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl group-hover:opacity-10 transition-opacity">❄️</div>
               <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-2">Snowball Strategy</p>
               <h4 className="text-3xl font-black text-slate-900 mb-1">{results?.snowball.months} Months</h4>
               <p className="text-[10px] font-bold text-slate-400 uppercase">Total Interest: ${Math.round(results?.snowball.totalInterest || 0).toLocaleString()}</p>
               <div className="mt-4 p-3 bg-rose-50 rounded-xl">
                 <p className="text-[9px] font-black text-rose-600 uppercase">Psychological Logic</p>
                 <p className="text-[10px] text-rose-700 leading-tight">Clears small wins fast to build motivational momentum.</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Payoff Projections Comparison</h4>
             <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={combinedData}>
                    <defs>
                      <linearGradient id="colorAvalanche" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSnowball" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `M${v}`} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Legend verticalAlign="top" height={36}/>
                    <Area type="monotone" name="Avalanche Path" dataKey="avalanche" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorAvalanche)" />
                    <Area type="monotone" name="Snowball Path" dataKey="snowball" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorSnowball)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="text-6xl animate-pulse">🤖</div>
            <div className="flex-1 space-y-2">
              <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Strategy Analysis</h4>
              {loadingAdvice ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-white/5 rounded w-full"></div>
                  <div className="h-4 bg-white/5 rounded w-2/3"></div>
                </div>
              ) : (
                <p className="text-xl text-slate-200 italic font-medium leading-relaxed">
                  {advice || 'Synthesizing your debt portfolio...'}
                </p>
              )}
            </div>
            <div className="absolute -right-10 -top-10 text-[200px] font-black text-white/5 select-none pointer-events-none uppercase">SNOWBALL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayoff;
