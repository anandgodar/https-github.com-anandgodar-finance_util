
import React, { useState, useEffect } from 'react';
import { getMarketAnalysis } from '../services/geminiService';

const MarketInsights: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMarketAnalysis();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-100 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-slate-800 animate-pulse">Analyzing Market Dynamics</p>
          <p className="text-slate-500 text-sm mt-1">Consulting Gemini AI for real-time financial data...</p>
        </div>
      </div>
    );
  }

  const getSentimentStyles = (sentiment: string) => {
    const s = sentiment?.toLowerCase();
    if (s === 'positive') return {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-100',
      badge: 'bg-emerald-500',
      icon: '📈'
    };
    if (s === 'negative') return {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-100',
      badge: 'bg-rose-500',
      icon: '📉'
    };
    return {
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      border: 'border-sky-100',
      badge: 'bg-sky-500',
      icon: '📊'
    };
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Live Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            Market Pulse <span className="text-indigo-600">2024-25</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-indigo-200 pl-6">
            "{data?.marketSummary}"
          </p>
        </div>
      </div>

      {/* Insight Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data?.keyInsights?.map((insight: any, i: number) => {
          const styles = getSentimentStyles(insight.sentiment);
          return (
            <div 
              key={i} 
              className={`group relative flex flex-col p-8 rounded-3xl border ${styles.border} ${styles.bg} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className={`text-3xl p-3 bg-white rounded-2xl shadow-sm transition-transform group-hover:scale-110`}>
                  {styles.icon}
                </span>
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white ${styles.badge}`}>
                  {insight.sentiment}
                </span>
              </div>
              <h4 className={`text-xl font-bold ${styles.text} mb-3`}>{insight.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {insight.content}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200/50 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-tighter">
                <span>Insight #0{i+1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Read Analysis →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Ecosystem Section - NEW */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Modern FinTech <span className="text-indigo-600">Stack</span></h3>
            <p className="text-slate-500 text-sm font-medium mt-1">Leading platforms used across Institutional and Retail sectors.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[9px] font-black uppercase tracking-widest">Institutional</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-[9px] font-black uppercase tracking-widest">Retail</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.ecosystemApps?.map((app: any, idx: number) => {
            const isPro = app.userType?.toLowerCase().includes('institutional') || app.userType?.toLowerCase().includes('pro');
            return (
              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-16 h-16 ${isPro ? 'bg-indigo-50' : 'bg-emerald-50'} -mr-8 -mt-8 rounded-full transition-all group-hover:scale-150 group-hover:opacity-100 opacity-50`}></div>
                <div className="relative z-10">
                  <span className={`inline-block px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest mb-3 ${isPro ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'}`}>
                    {app.category}
                  </span>
                  <h4 className="text-lg font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{app.name}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                    {app.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Primary: {app.userType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Technical Section */}
      <div className="grid lg:grid-cols-5 gap-8 pb-12">
        <div className="lg:col-span-3 bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="text-indigo-400">⚡</span> Core Macro Indicators
            </h3>
            <p className="text-slate-400 text-sm mb-8">Aggregated trends from global financial centers processed by Gemini.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Interest Rates', val: '8.2%', trend: '↗', detail: 'Central Bank Average', color: 'text-indigo-400' },
                { label: 'Inflation', val: '3.4%', trend: '↘', detail: 'Consumer Price Index', color: 'text-emerald-400' },
                { label: 'Tech Adoption', val: '72%', trend: '↗', detail: 'Financial Services', color: 'text-sky-400' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-colors hover:bg-white/10">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{item.label}</p>
                  <div className={`text-3xl font-black ${item.color} mb-1`}>{item.val} {item.trend}</div>
                  <p className="text-[10px] text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10 text-[240px] font-black pointer-events-none select-none">
            DATA
          </div>
        </div>

        <div className="lg:col-span-2 bg-indigo-50 border border-indigo-100 rounded-[2rem] p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Strategic Value</h3>
          <div className="space-y-6">
            {[
              { title: 'Data-Driven Clarity', text: 'Strip away market noise to see the fundamental numbers driving your wealth.' },
              { title: 'Long-term Projection', text: 'Visualize decades of compound interest with zero manual spreadsheet entry.' },
              { title: 'Risk Assessment', text: 'Understand the impact of state-specific taxes and interest fluctuations instantly.' }
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {bIdx + 1}
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm mb-1">{benefit.title}</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
