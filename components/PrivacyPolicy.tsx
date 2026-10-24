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

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold underline">
    {children}
  </a>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] border border-slate-100 shadow-sm animate-in fade-in duration-700 text-left">
      <header className="mb-16 space-y-4">
        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest">Your Data</span>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Privacy <span className="text-indigo-600">Policy</span></h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Last updated: October 24, 2026</p>
      </header>

      <div className="font-medium text-slate-600 space-y-12 leading-relaxed">
        <p>
          This Privacy Policy explains what information QuantCurb (&quot;we&quot;, &quot;us&quot;) collects when you
          use quantcurb.com, how it is used, and the choices you have. By using the site you agree to this policy.
        </p>

        <Section title="1. Information you enter into calculators">
          <p>
            Calculator inputs such as income, loan amounts, balances and savings are processed in your browser. We do
            not ask for your name, account numbers or Social Security number, and we do not store or sell the figures
            you enter. Some tools save your last inputs in your browser&apos;s local storage so they are still there
            when you return. That data stays on your device and you can clear it at any time from your browser settings.
          </p>
        </Section>

        <Section title="2. Information collected automatically">
          <p>
            Like most websites, our hosting provider and analytics tools automatically receive standard technical
            information when you visit: IP address, browser type, device type, referring page, pages viewed and the
            date and time of the visit. We use this to keep the site secure, fix problems and understand which pages are
            useful.
          </p>
        </Section>

        <Section title="3. Cookies and similar technologies">
          <p>
            Cookies are small text files stored on your device. We and our partners use cookies, local storage and
            similar technologies to remember preferences, measure traffic, and serve and measure advertising. You can
            block or delete cookies in your browser settings; some features may not work as intended without them.
          </p>
        </Section>

        <Section title="4. Advertising (Google AdSense)">
          <p>
            We use Google AdSense to show advertisements on this site. Third-party vendors, including Google, use
            cookies to serve ads based on your prior visits to this website or other websites.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit
            to this site and/or other sites on the Internet. Google and its partners may collect and process data such
            as cookie identifiers, IP address and device information for this purpose. Learn more in{' '}
            <ExternalLink href="https://policies.google.com/technologies/partner-sites">
              How Google uses information from sites or apps that use its services
            </ExternalLink>
            .
          </p>
          <p>
            You may opt out of personalized advertising by visiting{' '}
            <ExternalLink href="https://adssettings.google.com">Google Ads Settings</ExternalLink>. You can also opt out
            of some third-party vendors&apos; use of cookies for personalized advertising at{' '}
            <ExternalLink href="https://www.aboutads.info/choices/">www.aboutads.info/choices</ExternalLink> or, in the
            EU/UK, <ExternalLink href="https://www.youronlinechoices.eu/">www.youronlinechoices.eu</ExternalLink>. If
            you opt out, you will still see ads, but they will not be personalized.
          </p>
          <p>
            For visitors in the European Economic Area, the United Kingdom and Switzerland, the site sets Google
            Consent Mode to &quot;denied&quot; by default for advertising storage, ad user data, ad personalization and
            analytics storage. Personalized ads are not served to visitors in the EEA, UK and Switzerland unless
            consent is given. If a consent message is shown to you, you can change your choice later through the
            privacy or cookie settings link it provides, or at any time through the opt-outs above.
          </p>
        </Section>

        <Section title="5. Analytics (Google Analytics)">
          <p>
            We use Google Analytics to understand how visitors use the site (for example, which calculators are
            popular). Google Analytics uses cookies and collects information such as pages visited, time on page and
            approximate location. You can prevent Google Analytics from using your data by installing the{' '}
            <ExternalLink href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</ExternalLink>.
          </p>
        </Section>

        <Section title="6. AI-powered features">
          <p>
            Some optional features (such as market insights) send the text of your request to Google&apos;s Gemini API
            to generate a response. Do not include personal or sensitive information in these requests. Responses are
            generated automatically, may be inaccurate, and are not financial advice.
          </p>
        </Section>

        <Section title="7. Affiliate links">
          <p>
            Some pages contain links to third-party products or services. If you click one and sign up or make a
            purchase, we may earn a commission at no extra cost to you. We record anonymous click counts to measure
            which links are useful. Affiliate relationships do not change the results of our calculators.
          </p>
        </Section>

        <Section title="8. Third-party websites">
          <p>
            Our pages link to other websites (for example the IRS or state tax agencies). We are not responsible for the
            privacy practices of those sites; please read their policies.
          </p>
        </Section>

        <Section title="9. Children">
          <p>
            This site is not directed to children under 13 (or under 16 in the EEA/UK), and we do not knowingly collect
            personal information from them.
          </p>
        </Section>

        <Section title="10. Your rights (GDPR and CCPA/CPRA)">
          <p>
            Depending on where you live, you may have the right to access, correct or delete personal information about
            you, to object to or restrict certain processing, to withdraw consent, and to opt out of the &quot;sale&quot;
            or &quot;sharing&quot; of personal information for cross-context behavioral advertising. We do not sell
            personal information for money. To exercise these rights, use the ad and cookie opt-outs above or contact us
            at the address below. We will not discriminate against you for exercising your rights.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the top shows when it was
            last changed.
          </p>
        </Section>

        <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 mt-16 space-y-4">
          <p className="text-indigo-900 text-sm font-black uppercase tracking-widest">Questions about privacy?</p>
          <p className="text-indigo-700 text-base font-medium">
            Email us at <a href="mailto:privacy@quantcurb.com" className="underline font-bold">privacy@quantcurb.com</a>.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicy;
