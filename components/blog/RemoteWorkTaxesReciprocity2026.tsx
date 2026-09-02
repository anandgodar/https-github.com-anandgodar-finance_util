import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RemoteWorkTaxesReciprocity2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Remote, But Taxed Where? Reciprocity, the Convenience Rule, and Double Withholding",
      "description": "Working remotely for an out-of-state employer without moving can mean two states taxing the same paycheck. Reciprocity, the convenience-of-the-employer rule, and worked examples of each.",
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
      "datePublished": "2026-09-02",
      "dateModified": "2026-09-02",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/remote-work-taxes-reciprocity-convenience-rule"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-remote-work-taxes';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-remote-work-taxes');
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
          <span>⏱️ 11 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Remote, But Taxed Where? Reciprocity, the Convenience Rule, and Double Withholding
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Moving states and keeping your job is one kind of multi-state tax question. This is a different one:
          you never moved, you just started working from home for an employer based in another state — and now
          two states each think they&apos;re owed tax on the same paycheck. Here&apos;s when that&apos;s a real risk,
          when it isn&apos;t, and how the fix actually works.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your estimated liability, state by state</h3>
              <p className="text-sm text-slate-600">
                The calculator estimates your annual state tax liability one state at a time — run it for your
                resident state and, separately, for your employer&apos;s state to see which side of a reciprocity
                or convenience-rule question actually has the bigger number before you file anything.
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
          <li><button onClick={() => scrollToSection('two-scenarios')} className="text-indigo-600 hover:underline">1. Two different problems that both get called &quot;remote work taxes&quot;</button></li>
          <li><button onClick={() => scrollToSection('reciprocity')} className="text-indigo-600 hover:underline">2. Reciprocity agreements: the easy case</button></li>
          <li><button onClick={() => scrollToSection('convenience-rule')} className="text-indigo-600 hover:underline">3. The convenience-of-the-employer rule: the hard case</button></li>
          <li><button onClick={() => scrollToSection('example-reciprocity')} className="text-indigo-600 hover:underline">4. Worked example: reciprocity fixes it with one form</button></li>
          <li><button onClick={() => scrollToSection('example-convenience')} className="text-indigo-600 hover:underline">5. Worked example: the convenience rule and the credit that doesn&apos;t fully cover it</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="two-scenarios" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Two different problems that both get called &quot;remote work taxes&quot;</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every state that collects income tax taxes its own residents on all their income, no matter where it
            was earned. That&apos;s not in dispute anywhere. The confusion starts when a second state — the one
            where your employer is based — also claims a piece of the same paycheck. That can happen for two
            very different reasons, and mixing them up is where most of the anxiety about this comes from:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Situation</th>
                  <th className="text-left p-4 font-black text-slate-900">Why the employer&apos;s state gets involved</th>
                  <th className="text-left p-4 font-black text-slate-900">How common a real double-tax risk is</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Reciprocity states</td>
                  <td className="p-4 text-slate-700">Two neighboring states have a formal agreement to tax residents only where they live, regardless of where they work</td>
                  <td className="p-4 text-slate-700">Low — file the right form and only one state withholds</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Convenience-of-the-employer states</td>
                  <td className="p-4 text-slate-700">A handful of states tax nonresidents on wages from an in-state employer even if the work is done entirely from home, unless the remote arrangement is the <em>employer&apos;s</em> necessity, not the employee&apos;s choice</td>
                  <td className="p-4 text-slate-700">Real — your resident state also taxes the same income, and the credit for taxes paid elsewhere doesn&apos;t always erase the gap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Which one applies depends entirely on which two states are involved — not on anything about your job.
            The sections below cover each on its own, because the fix for one does nothing for the other.
          </p>
        </section>

        <section id="reciprocity" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Reciprocity agreements: the easy case</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A reciprocity agreement is a deal between two states: if you live in one and work in the other, only
            your home state taxes your wages. The work state agrees not to withhold at all, as long as you tell
            your employer it applies. As of 2026, roughly thirty of these agreements are active among sixteen
            states plus DC — the best-known pairs are Pennsylvania–New Jersey, the Virginia–Maryland–DC cluster,
            and the Illinois–Indiana–Kentucky–Michigan–Wisconsin–Ohio group in the Midwest.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ Reciprocity is never automatic. Your employer will default to withholding for the state your
              office is in unless you file that state&apos;s nonresident exemption certificate — for example, Form
              NJ-165 for a Pennsylvania resident working for a New Jersey employer. Some states, including
              Minnesota, require the form to be refiled every year. Skip the form and you&apos;ll have the wrong
              state&apos;s tax withheld all year, then have to claim it back at filing instead of a credit —
              recoverable, but a needless cash-flow hit and an extra return.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            None of the states with the biggest remote-work populations — New York, California, Massachusetts,
            Texas, or Florida — have reciprocity agreements with anyone. If your employer is based in one of
            those, reciprocity isn&apos;t the mechanism to look for; skip to the next section.
          </p>
        </section>

        <section id="convenience-rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The convenience-of-the-employer rule: the hard case</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A small group of states apply a different rule entirely: New York, Pennsylvania, Delaware, and
            Nebraska tax a nonresident employee&apos;s full wages as in-state income if the job is based there —
            even for days worked from home in another state — <em>unless</em> the remote arrangement exists for
            the employer&apos;s necessity rather than the employee&apos;s own convenience. New York is by far the
            most aggressive and most litigated version of this rule (it survived a state high-court challenge in{' '}
            <em>Zelinsky v. Tax Appeals Tribunal</em>). New Jersey and Connecticut apply a narrower, retaliatory
            version of the same rule — but only against residents of states that would apply it to a New Jersey
            or Connecticut resident in the reverse situation, which in practice means it mainly targets New York.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The carve-out is a real one, but a narrow and stringent one — not a technicality most remote workers
            can claim. New York&apos;s own &quot;bona fide employer office&quot; test, the most fully documented
            version of it, runs the logic in the opposite direction from what people expect: the primary factor
            asks whether the <em>home</em> office contains or sits near specialized facilities that
            <em>can&apos;t</em> be made available at the employer&apos;s own office — not whether the employer has
            something the home lacks. Failing that primary factor, it takes at least four secondary factors (the
            employer requiring a home office, a genuine business purpose for it, core duties performed there, no
            assigned desk at the employer&apos;s office, and more) plus three &quot;other&quot; factors just to
            qualify. In practice, most people who simply chose to work from home in a state their employer isn&apos;t
            in don&apos;t clear that bar, and the convenience rule sources their wages to the employer&apos;s state
            regardless.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            That doesn&apos;t automatically mean double taxation — your resident state generally grants a{' '}
            <strong>credit for taxes paid to another jurisdiction</strong> on the same income, which is the
            mechanism that&apos;s supposed to prevent it. The catch is what that credit is capped at: usually the
            amount your <em>resident</em> state would itself have charged on that income, not a full refund of
            whatever the higher-taxing state took. If the work state&apos;s rate on that income is higher than your
            resident state&apos;s, the difference isn&apos;t returned by either state — that gap is the real cost of
            the convenience rule, and it&apos;s the part worked examples below make concrete.
          </p>
        </section>

        <section id="example-reciprocity" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: reciprocity fixes it with one form</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A Pennsylvania resident takes a fully remote job with a New Jersey-based employer, working from a
            home office in PA. Because Pennsylvania and New Jersey have a reciprocity agreement, the fix is a
            single piece of paperwork:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">Employee files Form NJ-165 (Employee&apos;s Certificate of Non-Residence in New Jersey) with the employer</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Employer stops withholding New Jersey income tax entirely, starting the next pay period</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-700">3</td>
                  <td className="p-4 text-slate-900 font-semibold">Employer withholds Pennsylvania tax instead — one state, one withholding line, no credit calculation needed at filing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Without the form, the employer defaults to New Jersey withholding, and the employee has to file a
            nonresident NJ return each year to claim a refund of tax that should never have been withheld in the
            first place — recoverable, but a full return and a wait for money that reciprocity is designed to
            make unnecessary.
          </p>
        </section>

        <section id="example-convenience" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: the convenience rule and the credit that doesn&apos;t fully cover it</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A Connecticut resident works fully remotely, by their own choice, for a New York-based employer, and
            never sets foot in the New York office. New York&apos;s convenience rule sources 100% of those wages
            to New York regardless. Say the job pays <strong>$95,000</strong> and, on that income, New York&apos;s
            nonresident tax comes to roughly <strong>$4,650</strong> while Connecticut&apos;s resident tax on the
            same income would have been roughly <strong>$3,900</strong> — New York&apos;s claim on this income is
            the larger of the two.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">New York nonresident tax owed on the wages (convenience rule applies)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$4,650</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Connecticut resident tax that would apply to this income on its own</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$3,900</td>
                </tr>
                <tr className="border-b border-slate-100 bg-indigo-50">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700">
                    Connecticut&apos;s credit for tax paid to New York — capped at what Connecticut itself would
                    have charged, not the full New York bill
                  </td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">$3,900</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-4 font-bold text-red-700">4</td>
                  <td className="p-4 text-slate-900 font-semibold">Net extra tax versus working the same job for a Connecticut employer ($4,650 − $3,900 credit)</td>
                  <td className="p-4 font-mono text-red-800 text-right font-bold">$750</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ Connecticut&apos;s $3,900 credit fully cancels its own tax bill on this income — it isn&apos;t
              taxed twice to zero net effect. What doesn&apos;t come back is the $750 gap between the two states&apos;
              rates on this income, because the credit is capped at Connecticut&apos;s own liability, not New
              York&apos;s higher one. That gap is the actual cost of the convenience rule here — not a doubled tax
              bill, but a real one that a same-state remote job wouldn&apos;t have created.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The exact numbers move with income, filing status, and each state&apos;s bracket structure — this
            example illustrates the mechanism, not a formula to apply directly to a different income level.
            The one variable actually worth checking before assuming this applies: whether the remote setup
            could genuinely qualify as employer necessity rather than employee convenience. That determination is
            fact-specific and worth a real conversation with a tax professional if the dollar amounts are large,
            not something to self-assess from a blog post.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: remote work and multi-state taxes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">How do I know if my employer&apos;s state has a reciprocity agreement with mine?</h3>
              <p className="text-lg text-slate-700">Check your work state&apos;s department of revenue site for a reciprocity or nonresident exemption certificate — if one exists for your resident state, that&apos;s your confirmation, and the certificate itself is the form to file.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does the convenience rule apply if I go into the office occasionally?</h3>
              <p className="text-lg text-slate-700">States that apply the rule generally prorate it by days — New York's own guidance, for example, counts each work day physically in New York as New York-sourced regardless, and applies the convenience test only to the remaining remote days. Occasional in-office days don&apos;t exempt you from the rule entirely; they just shrink how many days it covers.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Can my employer just withhold for my home state instead to avoid this?</h3>
              <p className="text-lg text-slate-700">Not unilaterally where the convenience rule applies — the work state's claim on the income doesn&apos;t depend on what the employer withholds, only on where the job is legally sourced. Under-withholding for the work state just shifts the shortfall to when you file, rather than eliminating it.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is this the same issue as moving to a lower-tax state?</h3>
              <p className="text-lg text-slate-700">No — moving changes which state is your resident state, a permanent change decided by where you actually live. This is about an employer&apos;s state making a separate claim on income earned by a nonresident who never moved at all, which is a sourcing question, not a residency one.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default RemoteWorkTaxesReciprocity2026;
