import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const GrossVsNetPay2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 7 min read</span>
          <span>•</span>
          <span>🧾 Paychecks</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Gross vs. Net Pay: Why Your Paycheck Is Smaller Than You Think
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If your first paycheck felt smaller than expected, you&apos;re not alone. This beginner-friendly guide explains
          <strong> gross vs net pay</strong>, FICA, Medicare, federal withholding and state taxes — with a line-by-line 2026
          paycheck example — so you know exactly where the money goes.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your exact paycheck breakdown</h3>
              <p className="text-sm text-slate-600">
                Estimate your take-home pay by state, pay frequency, and deductions.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Calculate Take-Home Pay →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('gross')} className="text-indigo-600 hover:underline">1. What is gross pay?</button></li>
          <li><button onClick={() => scrollToSection('net')} className="text-indigo-600 hover:underline">2. What is net pay?</button></li>
          <li><button onClick={() => scrollToSection('fica')} className="text-indigo-600 hover:underline">3. FICA and Medicare basics</button></li>
          <li><button onClick={() => scrollToSection('federal')} className="text-indigo-600 hover:underline">4. Federal income tax withholding</button></li>
          <li><button onClick={() => scrollToSection('state')} className="text-indigo-600 hover:underline">5. State taxes and other deductions</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">6. Worked example: a $60,000 salary paycheck</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common paycheck mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="gross" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Gross pay: the headline number</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Gross pay is your salary or hourly wages before any deductions. It&apos;s the number in your offer letter, but it
            is not what hits your bank account. Gross pay also includes overtime, commissions, bonuses, tips you report
            and some taxable fringe benefits.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Per paycheck, gross pay is simply your annual pay divided by the number of pay periods:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Pay frequency</th>
                  <th className="text-left p-4 font-black text-slate-900">Paychecks per year</th>
                  <th className="text-left p-4 font-black text-slate-900">Gross per check on $60,000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Weekly</td>
                  <td className="p-4 text-slate-700">52</td>
                  <td className="p-4 text-slate-700">$1,153.85</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Biweekly</td>
                  <td className="p-4 text-slate-700">26</td>
                  <td className="p-4 text-slate-700">$2,307.69</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Semimonthly</td>
                  <td className="p-4 text-slate-700">24</td>
                  <td className="p-4 text-slate-700">$2,500.00</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Monthly</td>
                  <td className="p-4 text-slate-700">12</td>
                  <td className="p-4 text-slate-700">$5,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Biweekly workers get two &quot;extra&quot; paychecks a year compared with semimonthly — usually in two months
            that contain three paydays. That is why a biweekly check is smaller even though annual pay is the same.
          </p>
        </section>

        <section id="net" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net pay: your real spending power</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Net pay is what&apos;s left after taxes and payroll deductions. It is the deposit you actually budget with.
            Payroll always works in the same order:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Gross pay</strong> for the period.</li>
            <li><strong>Minus pre-tax deductions</strong> — traditional 401(k)/403(b), HSA, and health, dental or vision premiums paid through a cafeteria (Section 125) plan.</li>
            <li><strong>Minus taxes</strong> — Social Security, Medicare, federal income tax withholding, and state/local income tax where applicable.</li>
            <li><strong>Minus after-tax deductions</strong> — Roth 401(k), some life or disability insurance, union dues, wage garnishments.</li>
            <li><strong>Equals net pay.</strong></li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            The gap between gross and net depends on your income, state, benefit choices and retirement savings rate. In
            the worked example below, net pay is about 76% of gross with no state income tax — and part of that
            &quot;missing&quot; money is a 401(k) contribution you still own.
          </p>
        </section>

        <section id="fica" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FICA and Medicare: the paycheck staples</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            FICA taxes fund Social Security and Medicare. That means a 6.2% Social Security tax and 1.45% Medicare tax on
            most wages. These add up quickly on every paycheck. Your employer pays a matching 7.65% on top of your salary
            that never appears on your stub.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Social Security wage base:</strong> in 2026 the 6.2% applies only to the first $184,500 of wages, so the most an employee pays is $11,439. Once you pass that amount, your later paychecks get bigger.</li>
            <li>• <strong>Medicare has no cap.</strong> An Additional Medicare Tax of 0.9% is withheld on wages above $200,000.</li>
            <li>• <strong>What reduces FICA:</strong> Section 125 health premiums and payroll HSA contributions. Traditional 401(k) deferrals do <em>not</em> reduce FICA — see{' '}
              <a href="/blog/hsa-vs-401k-fica-tax-savings-2026/" className="text-indigo-600 font-semibold hover:underline">HSA vs 401(k) FICA savings</a>.</li>
          </ul>
        </section>

        <section id="federal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Federal income tax withholding</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal income tax withholding is your employer&apos;s estimate of your yearly federal income tax, spread across
            your paychecks. It is based on your Form W-4 (filing status, other jobs, dependents, extra withholding) and
            IRS withholding tables that build in the standard deduction — $16,100 for single filers and $32,200 for
            married couples filing jointly in 2026 — and the progressive tax brackets.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Because it is an estimate, the true-up happens when you file your return. Too much withheld means a refund;
            too little means a balance due. If you have two jobs or a working spouse, the{' '}
            <a href="/blog/w4-multiple-jobs-worksheet-decoded/" className="text-indigo-600 font-semibold hover:underline">W-4 multiple jobs worksheet</a>{' '}
            is the most common fix for under-withholding.
          </p>
        </section>

        <section id="state" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">State taxes, benefits, and other deductions</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            State income tax varies from 0% to over 10%. Add health insurance, commuter benefits, and retirement
            contributions, and your paycheck can shrink further.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>No wage income tax:</strong> Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington and Wyoming.</li>
            <li>• <strong>Flat-rate states</strong> apply one percentage to all taxable income; <strong>progressive states</strong> use brackets, with California&apos;s top rate reaching 13.3% on income over $1 million.</li>
            <li>• <strong>Local income taxes</strong> apply in some cities and counties — see{' '}
              <a href="/blog/local-income-tax-by-city-2026/" className="text-indigo-600 font-semibold hover:underline">local income tax by city</a>.</li>
            <li>• <strong>State disability and paid-leave programs</strong> take a small payroll percentage in several states — see{' '}
              <a href="/blog/state-disability-paid-leave-payroll-tax-2026/" className="text-indigo-600 font-semibold hover:underline">state disability and paid leave payroll taxes</a>.</li>
          </ul>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: a $60,000 salary paycheck</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical example for 2026: a single filer earning $60,000, paid biweekly, living in a state with no income
            tax. They contribute 5% to a traditional 401(k) ($3,000 a year) and pay $100 per paycheck for pre-tax health
            insurance ($2,600 a year). Federal withholding is approximated with the annual tax on their expected income.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line</th>
                  <th className="text-left p-4 font-black text-slate-900">Per year</th>
                  <th className="text-left p-4 font-black text-slate-900">Per paycheck</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Gross pay</td>
                  <td className="p-4 text-slate-700">$60,000.00</td>
                  <td className="p-4 text-slate-700">$2,307.69</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Health insurance (pre-tax, Section 125)</td>
                  <td className="p-4 text-slate-700">-$2,600.00</td>
                  <td className="p-4 text-slate-700">-$100.00</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Traditional 401(k), 5%</td>
                  <td className="p-4 text-slate-700">-$3,000.00</td>
                  <td className="p-4 text-slate-700">-$115.38</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Social Security, 6.2% of $57,400</td>
                  <td className="p-4 text-slate-700">-$3,558.80</td>
                  <td className="p-4 text-slate-700">-$136.88</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Medicare, 1.45% of $57,400</td>
                  <td className="p-4 text-slate-700">-$832.30</td>
                  <td className="p-4 text-slate-700">-$32.01</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal income tax (taxable income $38,300)</td>
                  <td className="p-4 text-slate-700">-$4,348.00</td>
                  <td className="p-4 text-slate-700">-$167.23</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-800">Net pay</td>
                  <td className="p-4 font-bold text-emerald-800">$45,660.90</td>
                  <td className="p-4 font-bold text-emerald-800">$1,756.19</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            How the federal line works: $60,000 − $2,600 health premiums − $3,000 401(k) − $16,100 standard deduction =
            $38,300 taxable income. Tax is 10% on the first $12,400 ($1,240) plus 12% on the next $25,900 ($3,108) =
            $4,348. FICA uses a different base — $57,400 — because the 401(k) doesn&apos;t reduce Social Security and
            Medicare wages, but Section 125 premiums do.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Move the same worker to a hypothetical state with a 4% flat tax on the same $54,400 of wages after pre-tax
            deductions (state rules vary), and about $2,176 a year — roughly $83.69 per paycheck — comes out as well,
            leaving about $1,672.50 per check. For more detail on each step, see{' '}
            <a href="/blog/how-to-calculate-take-home-pay-2025/" className="text-indigo-600 font-semibold hover:underline">how to calculate take-home pay</a>.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common paycheck mistakes</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>• <strong>Budgeting from gross pay.</strong> Rent, car payments and savings goals should be based on net pay.</li>
            <li>• <strong>Dividing annual salary by 12 when you&apos;re paid biweekly.</strong> Most months you receive two checks, not 2.17.</li>
            <li>• <strong>Assuming a 401(k) contribution costs its full amount.</strong> A $115 traditional deferral in the 12% bracket only lowers take-home by about $101, because federal withholding falls too.</li>
            <li>• <strong>Ignoring the first paycheck after open enrollment or a raise.</strong> Check that new deductions and withholding look right.</li>
            <li>• <strong>Never reviewing the W-4.</strong> Marriage, a second job or a new child can make withholding too high or too low.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: gross vs net pay</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is salary gross or net?</h3>
              <p className="text-lg text-slate-700">Salary figures in offer letters and job postings are gross. Net pay is what you receive after deductions.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why did my net pay change when my salary didn&apos;t?</h3>
              <p className="text-lg text-slate-700">Common reasons include new benefit premiums, a changed 401(k) percentage, a new W-4, hitting the Social Security wage base late in the year, or a new state or local tax after a move.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Are 401(k) contributions part of net pay?</h3>
              <p className="text-lg text-slate-700">No — they are deducted before net pay, but the money is still yours in your retirement account. Net pay understates your total compensation if you save through payroll.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">How do I convert hourly gross pay to annual?</h3>
              <p className="text-lg text-slate-700">Multiply your hourly rate by hours per week and by 52. For example, $25 × 40 × 52 = $52,000 of gross pay a year before overtime.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic">
            This guide is educational and is not individualized tax advice. Get your own estimate with the{' '}
            <a href="/salary-tax-estimator/" className="text-indigo-600 font-semibold hover:underline">salary tax estimator</a>.
          </p>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Publication 15, Employer&apos;s Tax Guide: <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
            <li>• IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p505</a></li>
            <li>• Social Security Administration, contribution and benefit base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default GrossVsNetPay2025;
