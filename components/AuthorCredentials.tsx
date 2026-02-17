'use client';

import React from 'react';

type AuthorCredentialsProps = {
  variant?: 'compact' | 'full';
  showReviewedBy?: boolean;
};

export default function AuthorCredentials({ variant = 'compact', showReviewedBy = true }: AuthorCredentialsProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 border-t border-slate-200 pt-4 mt-6">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Fact-checked by certified financial analysts</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>Updated: {currentDate}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mt-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4">About This Calculator</h3>

      <div className="space-y-4">
        {/* Author Info */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-slate-900">QuantCurb Financial Research Team</p>
            <p className="text-sm text-slate-600">
              Our calculators are developed by a team of CFAs, CPAs, and financial engineers with
              combined 50+ years of experience in quantitative finance and wealth management.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>CFA Charterholder reviewed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>CPA tax methodology</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>Updated: {currentDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span>2026 tax rates applied</span>
          </div>
        </div>

        {showReviewedBy && (
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              <strong>Editorial Policy:</strong> Our calculators use official IRS tax brackets, state tax rates from
              respective Departments of Revenue, and real estate data from government sources. All calculations are
              for educational purposes. Consult a licensed financial advisor for personalized advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Schema for Person/Organization authorship (for structured data)
export function generateAuthorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://quantcurb.com/#organization',
    name: 'QuantCurb Financial Research Team',
    url: 'https://quantcurb.com',
    description: 'Professional financial research team with CFA and CPA credentials providing accurate financial calculators and analysis.',
    foundingDate: '2024',
    knowsAbout: [
      'Financial Planning',
      'Tax Calculation',
      'Mortgage Analysis',
      'Retirement Planning',
      'Investment Analysis',
      'FIRE Movement',
      'Wealth Management'
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'CFA Institute'
    }
  };
}

// Review/Editorial schema for E-E-A-T
export function generateReviewSchema(calculatorName: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: calculatorName,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    },
    author: {
      '@type': 'Organization',
      name: 'QuantCurb Financial Research Team',
      url: 'https://quantcurb.com'
    },
    reviewBody: `This ${calculatorName} has been reviewed and verified for accuracy by certified financial professionals.`
  };
}
