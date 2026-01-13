'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CaliforniaVsTexasTakeHome2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "$100k in California vs. Texas: Where Does Your Dollar Go Further?",
      "description": "Compare take-home pay, taxes, and living costs for a $100k salary in California vs Texas. See which state stretches your paycheck further in 2025.",
      "author": {
        "@type": "Organization",
        "name": "QuantCurb"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QuantCurb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quantcurb.com/logo.png"
        }
      },
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-10",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/100k-california-vs-texas-take-home-pay"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-ca-tx';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-ca-tx');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated February 2026</span>
          <span>•</span>
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>🌴 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          $100k in California vs. Texas: Where Does Your Dollar Go Further?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A <strong>$100k salary in California vs Texas</strong> can feel like two completely different lives. California
          has high state income tax and higher housing costs, while Texas has no state income tax but rising metro rents.
          Let&apos;s break down take-home pay, living costs, and real purchasing power so you can decide where your money
          stretches further.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare your exact take-home pay</h3>
              <p className="text-sm text-slate-600">
                Plug your salary into our Salary Estimator to compare all 50 states and see your personalized net pay.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('take-home')} className="text-indigo-600 hover:underline">1. Take-home pay comparison</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">2. How taxes drive the gap</button></li>
          <li><button onClick={() => scrollToSection('costs')} className="text-indigo-600 hover:underline">3. Cost of living reality check</button></li>
          <li><button onClick={() => scrollToSection('winner')} className="text-indigo-600 hover:underline">4. Which state wins at $100k?</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">5. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="take-home" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Take-home pay: California vs Texas on $100k</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In a <strong>100k salary California vs Texas take-home pay</strong> comparison, the biggest swing is state
            income tax. California takes a bite, Texas doesn&apos;t. Federal and FICA are the same, so the state line item is
            the big differentiator.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">State</th>
                  <th className="text-left p-4 font-black text-slate-900">Estimated annual take-home</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly take-home</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">California</td>
                  <td className="p-4 text-slate-700">~$70k to $73k</td>
                  <td className="p-4 font-bold text-slate-900">~$5,900/month</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-emerald-600">Texas</td>
                  <td className="p-4 text-slate-700">~$76k to $78k</td>
                  <td className="p-4 font-bold text-slate-900">~$6,400/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              ✅ Expect roughly <strong>$500 more per month</strong> in take-home pay in Texas versus California at the
              same $100k salary.
            </p>
          </div>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why taxes create the gap</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The federal bracket and FICA taxes don&apos;t change by state. The difference comes from California&apos;s state income
            tax, which climbs quickly for middle-to-high earners. Texas has no state income tax, so that line item stays
            at zero.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• California state income tax: roughly 6-9% effective rate at $100k.</li>
            <li>• Texas state income tax: 0% (but higher property taxes in many counties).</li>
            <li>• Sales tax: comparable, but Texas can be slightly higher depending on city.</li>
          </ul>
        </section>

        <section id="costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Cost of living: the hidden multiplier</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take-home pay is only half the story. <strong>Cost of living in California vs Texas</strong> often swings the
            decision. Housing is the biggest lever, followed by childcare, transportation, and insurance.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-3">Typical monthly budget on $100k</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-2">California Metro</p>
                <ul className="space-y-1">
                  <li>• Rent or mortgage: $2,800 - $3,800</li>
                  <li>• Utilities & insurance: $400 - $600</li>
                  <li>• Transportation: $500 - $700</li>
                  <li>• Groceries & dining: $800 - $1,100</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-2">Texas Metro</p>
                <ul className="space-y-1">
                  <li>• Rent or mortgage: $1,800 - $2,600</li>
                  <li>• Utilities & insurance: $350 - $550</li>
                  <li>• Transportation: $450 - $650</li>
                  <li>• Groceries & dining: $700 - $1,000</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="winner" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which state wins on a $100k salary?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you care about pure purchasing power, Texas often wins thanks to lower housing costs and no state income
            tax. California can still win for career upside, equity compensation, or lifestyle preferences. The smartest
            move is to run the numbers with your real rent, commute, and benefits.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <p className="text-indigo-900 font-semibold">
              🔍 Use a <strong>state-by-state salary calculator</strong> to compare your exact take-home pay and adjust for
              401(k), healthcare, and filing status.
            </p>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: California vs Texas salary math</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is $100k a good salary in California?</h3>
              <p className="text-lg text-slate-700">
                It&apos;s solid but tighter in coastal metros. You&apos;ll feel more comfortable in inland cities or with dual
                incomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does Texas always beat California for take-home pay?</h3>
              <p className="text-lg text-slate-700">
                On taxes alone, yes. But total lifestyle cost depends on housing, family size, and commute.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CaliforniaVsTexasTakeHome2025;
