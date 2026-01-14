'use client';

import React from 'react';

interface AuthorBioProps {
  variant?: 'full' | 'compact';
}

const AuthorBio: React.FC<AuthorBioProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
            AG
          </div>
          <div className="flex-1">
            <h4 className="font-black text-slate-900 mb-1">Anand Godar</h4>
            <p className="text-sm text-slate-600 mb-2">
              Financial engineer and founder of QuantCurb. Former fintech data scientist building institutional-grade calculators for everyday wealth decisions.
            </p>
            <a 
              href="/about-quantcurb" 
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
            AG
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-black text-slate-900 mb-3">About the Author</h3>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            <strong className="font-black text-slate-900">Anand Godar</strong> is a financial engineer and the founder of QuantCurb. 
            With a background in fintech data science, Anand spent years building algorithmic trading systems and risk models 
            for institutional investors before realizing that retail investors deserve the same sophisticated tools.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            QuantCurb was born from a simple premise: <em>why should only Wall Street have access to banking-grade financial models?</em> 
            Every calculator on this site uses the same mathematical rigor you'd find at a Tier-1 bank, but designed for your daily 
            financial decisions—mortgages, taxes, retirement planning, and wealth optimization.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href="/about-quantcurb" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Learn More About QuantCurb →
            </a>
            <a 
              href="/contact-us" 
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
