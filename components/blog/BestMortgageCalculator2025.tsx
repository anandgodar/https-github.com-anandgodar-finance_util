'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BestMortgageCalculator2025: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>🏡 Home Buying</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Best Mortgage Calculator 2025: Compare Top Tools & Features
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Finding the right mortgage calculator is crucial for accurate home buying decisions. We've tested and compared
          the <strong>top mortgage calculators in 2025</strong> to help you find the best tool with PITI, PMI, and
          property tax calculations.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Try Our Mortgage Calculator
              </h3>
              <p className="text-sm text-slate-600">
                Professional-grade calculator with state-specific property tax rates and PMI calculations
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Calculator →
            </button>
          </div>
        </div>
      </header>

      <article className="prose prose-lg max-w-none space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Top Mortgage Calculators Compared (2025)</h2>

          <div className="space-y-8 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-black text-indigo-900 text-2xl">QuantCurb Mortgage Calculator</h3>
                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold">BEST FOR ACCURACY</span>
                  </div>
                  <p className="text-indigo-800 font-semibold mb-4">Professional-grade PITI calculations with state-specific property taxes</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-indigo-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-indigo-800 text-sm">
                    <li>• State-specific property tax rates (all 50 states)</li>
                    <li>• Automatic PMI calculations</li>
                    <li>• Complete PITI breakdown</li>
                    <li>• No ads, clean interface</li>
                    <li>• Professional-grade accuracy</li>
                    <li>• Amortization schedule visualization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-indigo-800 text-sm">
                    <li>• Newer tool (less brand recognition)</li>
                    <li>• No mobile app (web only)</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition"
              >
                Try QuantCurb Mortgage Calculator →
              </button>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <h3 className="font-black text-slate-900 text-2xl mb-2">Bankrate Mortgage Calculator</h3>
              <p className="text-slate-600 font-semibold mb-4">Popular free mortgage calculator</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Well-known brand</li>
                    <li>• Simple interface</li>
                    <li>• Free to use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Limited property tax customization</li>
                    <li>• Ads throughout</li>
                    <li>• Less detailed PMI calculations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <h3 className="font-black text-slate-900 text-2xl mb-2">Zillow Mortgage Calculator</h3>
              <p className="text-slate-600 font-semibold mb-4">Real estate focused calculator</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Integrated with property listings</li>
                    <li>• Good for quick estimates</li>
                    <li>• Mobile-friendly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Less detailed calculations</li>
                    <li>• Limited customization</li>
                    <li>• Focused on Zillow listings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Key Features to Look For</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">🏠 Complete PITI Calculation</h3>
              <p className="text-slate-700 text-sm">Principal, Interest, Taxes, and Insurance all included in monthly payment.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">📊 State-Specific Property Taxes</h3>
              <p className="text-slate-700 text-sm">Property tax rates vary significantly by state—essential for accurate calculations.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">💰 PMI Calculations</h3>
              <p className="text-slate-700 text-sm">Automatic PMI calculation and removal timeline based on LTV ratio.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">📈 Amortization Schedule</h3>
              <p className="text-slate-700 text-sm">Visual breakdown of principal vs interest over the life of the loan.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Mortgage Payment</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our professional mortgage calculator with state-specific property tax rates and PMI calculations.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use Mortgage Calculator →
          </button>
        </section>

        <section className="mt-12">
          <EmailCapture
            title="Get Mortgage Planning Resources"
            description="Subscribe for mortgage tips, home buying guides, and real estate investment strategies."
            leadMagnet={{
              title: "Mortgage Planning Resources",
              description: "Weekly tips on mortgages, home buying, and real estate investing."
            }}
            buttonText="Subscribe Free"
          />
        </section>
      </article>
    </div>
  );
};

export default BestMortgageCalculator2025;
