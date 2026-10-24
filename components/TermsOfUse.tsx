import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
      <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
      {title}
    </h2>
    {children}
  </section>
);

const CONTACT_EMAIL = 'hello@quantcurb.com';

const TermsOfUse: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] border border-slate-100 shadow-sm animate-in fade-in duration-700 text-left">
      <header className="mb-16 space-y-4">
        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest">Site Rules</span>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Terms <span className="text-indigo-600">of Use</span></h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Last updated: October 24, 2026</p>
      </header>

      <div className="font-medium text-slate-600 space-y-12 leading-relaxed">
        <p>
          These Terms of Use govern your use of quantcurb.com (&quot;QuantCurb&quot;, &quot;we&quot;, &quot;us&quot;).
          By using the site you agree to them. If you do not agree, please do not use the site.
        </p>

        <Section title="1. What the site provides">
          <p>
            QuantCurb offers free calculators and articles about paychecks, taxes, mortgages, loans, retirement and
            investing. Every result is an estimate produced from the inputs you enter and the assumptions stated on the
            page. The calculators and articles are for general information and education only.
          </p>
        </Section>

        <Section title="2. Not tax, legal or financial advice">
          <p>
            Nothing on this site is tax, legal, accounting, investment or financial advice, and using the site does not
            create a client or advisory relationship with anyone. Your own situation may involve rules, credits,
            deductions, local taxes or facts that a calculator does not model. For decisions that matter, check with the
            relevant agency or a qualified professional.
          </p>
        </Section>

        <Section title="3. Where our figures come from">
          <p>
            Tax brackets, rates, limits and deductions are taken from published government sources, such as IRS revenue
            procedures and notices, the Social Security Administration and state revenue departments or statutes. Each
            calculator or state page names its sources and shows the date they were checked. Rules change, sometimes
            during the year, and a figure may be out of date between our reviews. Our{' '}
            <a href="/methodology-assumptions/" className="text-indigo-600 font-bold underline">Methodology &amp; Assumptions</a>{' '}
            page explains how the calculations work.
          </p>
        </Section>

        <Section title="4. Your responsibility to verify">
          <p>
            You are responsible for checking any figure before you rely on it, for example against the official agency
            publication, your pay stub, your lender&apos;s disclosures or your tax return. Do not use the site as the only
            basis for filing a return, setting withholding, signing a loan or making an investment.
          </p>
        </Section>

        <Section title="5. No guarantee">
          <p>
            The site is provided &quot;as is&quot; and &quot;as available&quot;. We do not guarantee that it is
            accurate, complete, current, uninterrupted or free of errors, and we may change or remove any calculator or
            page at any time without notice.
          </p>
        </Section>

        <Section title="6. Limitation of liability">
          <p>
            To the fullest extent permitted by law, QuantCurb and the people who operate it are not liable for any loss
            or damage arising from your use of, or reliance on, the site or its results, including tax owed, penalties,
            interest, missed deadlines, or lost profits or savings. Some jurisdictions do not allow certain limitations of
            liability; in those places our liability is limited to the smallest amount the law allows.
          </p>
        </Section>

        <Section title="7. Links, ads and third-party content">
          <p>
            The site links to other websites, including government agencies, and shows advertising (including Google
            AdSense) and, on some pages, affiliate links. We do not control third-party sites, products or ads and are
            not responsible for their content, accuracy or practices. Advertisers and affiliate partners have no
            influence over our calculators or results. See our{' '}
            <a href="/privacy-policy/" className="text-indigo-600 font-bold underline">Privacy Policy</a> for how
            advertising cookies are used.
          </p>
        </Section>

        <Section title="8. Acceptable use">
          <p>
            You may use the site for personal, non-commercial purposes. Please do not attempt to disrupt the site,
            scrape it at a volume that degrades it for others, or republish its content as your own. The site&apos;s text,
            design and code are owned by QuantCurb; government data it draws on remains in the public domain.
          </p>
        </Section>

        <Section title="9. Changes to these terms">
          <p>
            We may update these terms from time to time. The &quot;Last updated&quot; date at the top shows when they
            were last changed. Continuing to use the site after a change means you accept the updated terms.
          </p>
        </Section>

        <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 mt-16 space-y-4">
          <p className="text-indigo-900 text-sm font-black uppercase tracking-widest">Questions about these terms?</p>
          <p className="text-indigo-700 text-base font-medium">
            Email us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-bold">{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
    </article>
  );
};

export default TermsOfUse;
