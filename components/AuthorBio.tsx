'use client';

import React from 'react';

// Brand author, not a person (owner decision, Nov 2026: no personal names in
// public materials). Claims here must stay verifiable from the site itself —
// no credentials, no career history, no figures.
interface AuthorBioProps {
  variant?: 'full' | 'compact';
}

const AuthorBio: React.FC<AuthorBioProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
            QC
          </div>
          <div className="flex-1">
            <h4 className="font-black text-slate-900 mb-1">QuantCurb</h4>
            <p className="text-sm text-slate-600 mb-2">
              Independently built financial calculators that run on exact formulas — amortization, marginal tax brackets, compound interest — with sources named next to the figures they support.
            </p>
            <a
              href="/about-quantcurb/"
              className="text-sm text-indigo-600 font-bold hover:underline"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border-2 border-indigo-200 p-8 md:p-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-black shadow-lg">
            QC
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-black text-slate-900 mb-3">About QuantCurb</h3>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            QuantCurb is an independently built set of financial calculators and guides. The premise is simple:
            <em> why should sophisticated financial modeling be locked behind a Wall Street login?</em>
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            The tax and lending calculators run on exact formulas — precise amortization, marginal tax brackets, compound
            interest — with federal and state tax figures taken from the IRS and state tax tables and the source named
            next to each figure, for the decisions you actually face: mortgages, taxes, retirement planning, and
            wealth building.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/about-quantcurb/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Learn More About QuantCurb →
            </a>
            <a
              href="/contact-us/"
              className="inline-block bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-600 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
