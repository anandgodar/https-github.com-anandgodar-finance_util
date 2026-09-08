import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ExcessSocialSecurityRefund2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Changed Jobs Mid-Year? You Might Be Owed a Social Security Refund",
      "description": "Each employer withholds Social Security tax up to the same annual wage base, independently of each other. Switch jobs mid-year and the two withholdings can add up to more than the real cap — a real, commonly-missed refund claimed on Schedule 3.",
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
      "datePublished": "2026-09-08",
      "dateModified": "2026-09-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/excess-social-security-tax-refund-multiple-employers"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-excess-social-security';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-excess-social-security');
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
          <span>📅 Updated September 2026</span>
          <span>•</span>
          <span>⏱️ 8 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Changed Jobs Mid-Year? You Might Be Owed a Social Security Refund
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Every employer withholds Social Security tax up to the same annual wage base — but none of them know
          about your other job. Switch employers mid-year, or work two jobs at once, and the two withholdings
          can add up to more than the real cap. The overage comes back as a tax credit most people never think
          to check for.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check your combined withholding</h3>
              <p className="text-sm text-slate-600">
                Add up your total take-home across every job this year and see where you land against the 2026
                Social Security wage base before you file.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Tax Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-mechanism')} className="text-indigo-600 hover:underline">1. Why this happens: employers can&apos;t see each other</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">2. Worked example: two $130,000 jobs in one year</button></li>
          <li><button onClick={() => scrollToSection('how-to-check')} className="text-indigo-600 hover:underline">3. How to check if this happened to you</button></li>
          <li><button onClick={() => scrollToSection('how-to-claim')} className="text-indigo-600 hover:underline">4. How to claim it: Schedule 3, Line 11</button></li>
          <li><button onClick={() => scrollToSection('employer-error')} className="text-indigo-600 hover:underline">5. The one case this doesn&apos;t cover: a single employer&apos;s mistake</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-mechanism" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why this happens: employers can&apos;t see each other</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Social Security tax is withheld at a flat <strong>6.2%</strong> on wages up to an annual cap called
            the wage base — <strong>$184,500 for 2026</strong>, up from $176,100 in 2025. Once your wages at a
            given employer cross that line, that employer stops withholding Social Security tax for the rest of
            the year. Medicare tax has no such cap and keeps applying to every dollar.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The catch: the cap applies <em>per employer</em>, not per person, because no employer has visibility
            into what you earned somewhere else. If you earn $184,500 or more at a single job, that employer
            correctly stops withholding once you hit the cap. But if you split that same income — or more —
            across two employers in one calendar year, each one tracks its own wages against the cap
            independently and neither stops early. The government still only owes Social Security benefits on
            wages up to the cap, so the extra withholding across employers is a genuine overpayment, not tax
            legitimately owed.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: two $130,000 jobs in one year</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Say you left a job paying $130,000 a year in June and started a new one in July, also paying
            $130,000 a year — a common mid-year move, not an edge case. Each employer withholds Social Security
            tax on every dollar it pays you, because neither one crosses the $184,500 cap on its own:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Employer</th>
                  <th className="text-left p-4 font-black text-slate-900">Wages paid</th>
                  <th className="text-left p-4 font-black text-slate-900">Social Security withheld (6.2%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Employer A (Jan–Jun)</td>
                  <td className="p-4 text-slate-700">$130,000</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$8,060</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Employer B (Jul–Dec)</td>
                  <td className="p-4 text-slate-700">$130,000</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$8,060</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 text-slate-900 font-bold" colSpan={2}>Total withheld (sum of Box 4 on both W-2s)</td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">$16,120</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700" colSpan={2}>What was actually owed: 6.2% × $184,500 cap</td>
                  <td className="p-4 font-mono text-slate-700 text-right">$11,439</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 text-emerald-900 font-bold" colSpan={2}>Excess Social Security tax — refundable</td>
                  <td className="p-4 font-mono text-emerald-800 text-right font-bold">$4,681</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Neither employer did anything wrong — each correctly withheld on the wages it paid, with no way to
            know about the other. The <strong>$4,681</strong> difference isn&apos;t a rounding error or a
            withholding quirk that fixes itself; it&apos;s money the filer is owed back, and unless it&apos;s
            claimed on the return, it just isn&apos;t refunded.
          </p>
        </section>

        <section id="how-to-check" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to check if this happened to you</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You need two or more W-2s covering the same calendar year — from a mid-year job change, a second
            job worked alongside a primary one, or any combination of employers. Add up <strong>Box 4</strong>{' '}
            (&quot;Social Security tax withheld&quot;) across every W-2. If that total is more than the annual
            cap for the year in question, the difference is excess withholding:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Tax year</th>
                  <th className="text-left p-4 font-black text-slate-900">Wage base</th>
                  <th className="text-left p-4 font-black text-slate-900">Max Social Security tax (6.2%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">2026</td>
                  <td className="p-4 text-slate-700">$184,500</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$11,439.00</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">2025</td>
                  <td className="p-4 text-slate-700">$176,100</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$10,918.20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            If a prior year&apos;s W-2s show combined Box 4 withholding above that year&apos;s cap and it was
            never claimed, an amended return (Form 1040-X) can still recover it within the usual three-year
            window for claiming a refund — it doesn&apos;t have to be caught in the same filing season.
          </p>
        </section>

        <section id="how-to-claim" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to claim it: Schedule 3, Line 11</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The excess is claimed as a refundable credit on <strong>Schedule 3, Line 11</strong> of Form 1040,
            which flows into the total payments on the main form — it directly increases your refund or reduces
            what you owe, the same as tax withheld from a paycheck does. Most tax software calculates this
            automatically once every W-2 for the year is entered, by comparing the sum of every Box 4 against
            the year&apos;s cap — there&apos;s nothing to separately request or apply for, only something to
            make sure isn&apos;t missed by leaving a W-2 out.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ This credit is separate from, and stacks with, any other refund or amount owed from your regular
              income tax calculation — it&apos;s a straight dollar-for-dollar credit for Social Security tax
              that was withheld above what the law allows to be collected from you in that year.
            </p>
          </div>
        </section>

        <section id="employer-error" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The one case this doesn&apos;t cover: a single employer&apos;s mistake</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Schedule 3, Line 11 only applies when the excess came from <strong>two or more separate
            employers</strong> each correctly withholding on their own wages. If a single employer withheld more
            than 6.2% of your wages from them, or kept withholding past the point your wages with just that
            employer crossed the cap, that&apos;s a payroll error, not the multiple-employer situation this
            piece covers — and the IRS is explicit that you can&apos;t claim it on your return. The fix is to go
            back to that employer and have them correct it and refund the difference directly, since they&apos;re
            the ones who over-withheld it.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: excess Social Security withholding</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Does this apply if I worked two jobs at the same time, not sequentially?</h3>
              <p className="text-lg text-slate-700">Yes — the mechanism is identical whether the jobs overlapped all year or you changed employers mid-year. What matters is that two or more separate employers each withheld Social Security tax on wages that, combined, exceeded the annual cap.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does self-employment income work the same way?</h3>
              <p className="text-lg text-slate-700">Not quite — 1099 income has no employer withholding at all. Self-employment tax (which includes the Social Security portion) is calculated once on your return, using your actual combined wage-and-self-employment income against the same cap, so there's no separate over-withholding to claim back this way. It's still worth confirming the cap was applied correctly if you had both a W-2 job and self-employment income in the same year.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do I lose any Social Security benefit by getting this refund?</h3>
              <p className="text-lg text-slate-700">No. Your future Social Security benefit is based on your actual wages up to the cap at each employer, which is exactly what the government is entitled to collect tax on. Getting the excess refunded doesn't reduce your earnings record or your eventual benefit — it just returns tax that was never legitimately owed in the first place.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What if my combined wages didn't actually cross the cap?</h3>
              <p className="text-lg text-slate-700">Then there's no excess to claim — this only triggers when your total wages across all employers for the year exceed the annual wage base ($184,500 for 2026). Two jobs paying $90,000 each, for example, total $180,000 and stay under the cap, so nothing was over-withheld.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default ExcessSocialSecurityRefund2026;
