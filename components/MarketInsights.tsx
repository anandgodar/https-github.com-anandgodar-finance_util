
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
      <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-8 border-slate-100 rounded-full"></div>
          <div className="w-20 h-20 border-8 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-black text-slate-900 tracking-tight">Syncing Intelligence</p>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2">Connecting to Gemini Institutional Oracle...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in duration-700 pb-24">
      <header className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">Macro Pulse v3.0</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight max-w-4xl">
            The State of <span className="text-indigo-400 underline decoration-indigo-800">Global Capital</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-indigo-600 pl-8 max-w-4xl">
            "{data?.marketSummary}"
          </p>
        </div>
      </header>

      <section className="space-y-10">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-slate-900">App Ecosystem <span className="text-indigo-600">Deep-Dive</span></h3>
            <p className="text-slate-500 text-sm font-medium mt-1">Comparing institutional professional stacks vs retail platforms.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.ecosystemApps?.map((app: any, idx: number) => {
            const isPro = app.userType?.toLowerCase().includes('institutional') || app.userType?.toLowerCase().includes('pro');
            return (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className={`absolute -right-6 -bottom-6 text-6xl opacity-5 group-hover:scale-110 transition-transform ${isPro ? 'text-indigo-600' : 'text-emerald-600'}`}>
                  {isPro ? '🏦' : '📱'}
                </div>
                <div className="relative z-10">
                  <span className={`inline-block px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4 ${isPro ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'}`}>
                    {app.userType}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">{app.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                    {app.description}
                  </p>
                  <div className="pt-4 border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{app.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {data?.keyInsights?.map((insight: any, i: number) => (
          <div key={i} className="group p-10 rounded-[3rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all">
            <div className="flex justify-between items-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">💡</div>
              <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${insight.sentiment === 'Positive' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>{insight.sentiment}</span>
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">{insight.title}</h4>
            <p className="text-slate-600 leading-relaxed font-medium">{insight.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketInsights;
