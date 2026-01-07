import React, { useEffect, useState } from 'react';
import { ToolType } from '../../types';
import { ArrowLeft, Calculator, TrendingUp, Building2, Shield, DollarSign, FileText, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LLCvsSoleProp2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LLC vs Sole Proprietor 2025: Complete Tax & Legal Comparison Guide",
      "description": "Comprehensive comparison of LLC vs Sole Proprietorship for freelancers and small business owners. Understand tax differences, liability protection, formation costs, S-Corp election benefits, and which structure saves you the most money in 2025.",
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
      "datePublished": "2026-01-06",
      "dateModified": "2026-01-06",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/llc-vs-sole-proprietor-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-llc-sole-prop';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-llc-sole-prop');
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

  const faqs = [
    {
      question: "Is an LLC or sole proprietorship better for taxes?",
      answer: "For most freelancers, the tax treatment is identical initially—both report business income on Schedule C and pay 15.3% self-employment tax. However, an LLC can elect S-Corp status once you earn $60k+, allowing you to save $3,000-8,000 annually by taking reasonable salary ($40k-50k) plus distributions. Sole proprietors cannot make this election. If you're earning under $40k, sole proprietorship is simpler and cheaper."
    },
    {
      question: "How much does it cost to form an LLC vs staying a sole proprietor?",
      answer: "Sole proprietorship costs $0-50 (just a DBA filing in some states). LLC formation costs vary by state: California ($75 filing + $800 annual franchise tax), Delaware ($90 filing + $300 annual tax), Texas ($300 filing), Florida ($125 filing), New York ($200 filing + $9/year for every $1,000 of capital). Add $100-300 for registered agent service if needed. Annual costs: sole prop $0-50, LLC $100-1,000+ depending on state."
    },
    {
      question: "Does an LLC protect my personal assets from business debts?",
      answer: "Yes, an LLC provides 'limited liability'—creditors can only go after business assets, not your personal home, car, or savings (except in cases of fraud or personal guarantees). Sole proprietors have ZERO liability protection—you and your business are the same legal entity, so all personal assets are at risk. This matters most for businesses with physical locations, employees, equipment, or client interaction (risk of lawsuits)."
    },
    {
      question: "Can I start as a sole proprietor and convert to LLC later?",
      answer: "Absolutely. Most freelancers start as sole proprietors (zero setup) and convert to LLC when: (1) Income reaches $60k+ (S-Corp tax savings justify LLC costs), (2) Business grows and liability risk increases, (3) You want to raise capital or add partners. Conversion is simple—file LLC paperwork, get new EIN, update contracts/invoices. Many CPAs recommend starting sole prop unless you have liability concerns from day one."
    },
    {
      question: "Do I need a separate EIN for an LLC vs sole proprietorship?",
      answer: "Sole proprietors WITHOUT employees can use their SSN (though getting an EIN is recommended for privacy). LLCs MUST get an EIN from the IRS (free, 5-minute online application). If your LLC elects S-Corp status, you'll need the EIN for payroll taxes. Single-member LLCs taxed as disregarded entities still file Schedule C like sole props, but with the EIN instead of SSN."
    },
    {
      question: "What's the S-Corp election and when should I make it?",
      answer: "S-Corp is a tax classification (not a business structure) available to LLCs and corporations. You file Form 2553 with the IRS to split income into salary (subject to 15.3% SE tax) + distributions (no SE tax). Example: $100k income → $50k salary + $50k distribution saves $7,650 in SE tax vs. sole prop. Best when: (1) Net profit $60k+, (2) You can afford payroll service ($500-2,000/year), (3) Reasonable salary for your industry exists. Not worth it under $40k due to administrative costs."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <button
        onClick={() => onNavigate?.(ToolType.DASHBOARD)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-10 h-10" />
          <h1 className="text-4xl font-bold">LLC vs Sole Proprietor 2025</h1>
        </div>
        <p className="text-xl text-blue-50 mb-4">
          Complete Tax & Legal Comparison Guide for Freelancers
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span>Tax Savings Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Liability Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Formation Costs by State</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Table of Contents
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <button onClick={() => scrollToSection('overview')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Quick Comparison Overview
          </button>
          <button onClick={() => scrollToSection('tax-treatment')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Tax Treatment Differences
          </button>
          <button onClick={() => scrollToSection('liability')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Liability Protection Explained
          </button>
          <button onClick={() => scrollToSection('formation-costs')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Formation Costs by State
          </button>
          <button onClick={() => scrollToSection('scorp')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → S-Corp Election Benefits
          </button>
          <button onClick={() => scrollToSection('decision')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Which Structure to Choose
          </button>
          <button onClick={() => scrollToSection('conversion')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Converting from Sole Prop to LLC
          </button>
          <button onClick={() => scrollToSection('faqs')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Frequently Asked Questions
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-none">

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">LLC vs Sole Proprietorship: Quick Comparison</h2>

          <p className="text-lg text-gray-700 mb-6">
            Choosing between an LLC and sole proprietorship is one of the most important decisions for freelancers, consultants, and small business owners in 2025. The choice affects your taxes, legal liability, administrative burden, and long-term business growth potential.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Bottom Line Up Front</p>
            <p className="text-gray-700">
              Start as a <strong>sole proprietor</strong> if you're earning under $40k, have low liability risk, and want zero setup costs. Convert to an <strong>LLC with S-Corp election</strong> once you cross $60k annual profit to save $3,000-8,000+ in self-employment taxes. Get an LLC from day one if you have significant liability risk (physical location, employees, client interaction).
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sole Proprietorship</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">LLC (Single-Member)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Formation Cost</td>
                  <td className="border border-gray-300 px-4 py-3">$0-50 (optional DBA)</td>
                  <td className="border border-gray-300 px-4 py-3">$75-500 (state filing fees)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Annual Costs</td>
                  <td className="border border-gray-300 px-4 py-3">$0-50</td>
                  <td className="border border-gray-300 px-4 py-3">$100-1,000+ (varies by state)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Liability Protection</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">❌ None (personal assets at risk)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">✅ Limited liability protection</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Tax Treatment (Default)</td>
                  <td className="border border-gray-300 px-4 py-3">Schedule C, 15.3% SE tax</td>
                  <td className="border border-gray-300 px-4 py-3">Same (disregarded entity)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">S-Corp Election</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Not available</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Can elect (save $3k-8k/year)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">EIN Required</td>
                  <td className="border border-gray-300 px-4 py-3">No (can use SSN)</td>
                  <td className="border border-gray-300 px-4 py-3">Yes (free from IRS)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Administrative Burden</td>
                  <td className="border border-gray-300 px-4 py-3">Minimal (just track income/expenses)</td>
                  <td className="border border-gray-300 px-4 py-3">Moderate (annual reports, separate bank account)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Credibility</td>
                  <td className="border border-gray-300 px-4 py-3">Lower (personal name)</td>
                  <td className="border border-gray-300 px-4 py-3">Higher (business entity)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                  <td className="border border-gray-300 px-4 py-3">Income under $40k, low risk</td>
                  <td className="border border-gray-300 px-4 py-3">Income $60k+, liability concerns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tax Treatment */}
        <section id="tax-treatment" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tax Treatment: How They're Taxed Differently</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Default Tax Treatment (Single-Member LLC = Sole Prop)</h3>

          <p className="text-lg text-gray-700 mb-4">
            By default, a single-member LLC is taxed as a <strong>"disregarded entity"</strong>—meaning the IRS treats it exactly like a sole proprietorship. Both report business income on <strong>Schedule C</strong> (Form 1040) and pay:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Income tax</strong> on net profit (10%-37% based on tax bracket)</li>
            <li><strong>Self-employment tax</strong> of 15.3% on 92.35% of net profit (covers Social Security + Medicare)</li>
            <li><strong>State income tax</strong> (if applicable in your state)</li>
          </ul>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Example: $80,000 Net Profit (Sole Prop or LLC, Default Tax Treatment)</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Self-employment tax:</strong> $80,000 × 92.35% = $73,880 × 15.3% = <span className="text-red-600 font-semibold">$11,304</span></p>
              <p>• <strong>Income tax (22% bracket):</strong> ~$10,500 (after standard deduction)</p>
              <p>• <strong>Total federal tax:</strong> ~$21,804</p>
              <p>• <strong>Effective tax rate:</strong> 27.3%</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">The S-Corp Election Game-Changer (LLC Only)</h3>

          <p className="text-lg text-gray-700 mb-4">
            Here's where LLCs pull ahead: once you file <strong>Form 2553</strong> to elect S-Corp status, you can split your income into:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Reasonable salary</strong> (subject to 15.3% SE tax + income tax)</li>
            <li><strong>Distributions</strong> (subject to income tax only—no SE tax!)</li>
          </ul>

          <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-lg mb-3">Example: $80,000 Net Profit (LLC with S-Corp Election)</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Reasonable salary:</strong> $50,000 (industry standard for your role)</p>
              <p>• <strong>Distributions:</strong> $30,000 (no SE tax on this portion)</p>
              <p className="mt-4 font-semibold">Tax Breakdown:</p>
              <p>• SE tax on salary: $50,000 × 92.35% × 15.3% = <span className="text-orange-600 font-semibold">$7,065</span></p>
              <p>• SE tax on distributions: <span className="text-green-600 font-semibold">$0</span></p>
              <p>• Income tax: ~$10,500 (same as before)</p>
              <p>• <strong>Total federal tax:</strong> ~$17,565</p>
              <p className="mt-4 pt-4 border-t border-green-300">
                <strong className="text-green-700 text-xl">Tax Savings: $4,239/year vs. Sole Prop/Default LLC!</strong>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ "Reasonable Salary" Requirement</p>
            <p className="text-gray-700">
              The IRS requires S-Corp owners to pay themselves a "reasonable salary" for their role/industry. You can't pay $10k salary + $70k distributions on $80k profit—that triggers audits. Safe rule of thumb: 50-60% salary, 40-50% distributions. Check industry salary benchmarks at bls.gov.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">When S-Corp Savings Justify LLC Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            S-Corp status adds costs (payroll service $500-2,000/year, tax prep $800-2,000/year). The tax savings need to exceed these costs:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Profit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">S-Corp Tax Savings</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">S-Corp Admin Costs</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$40,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$2,500</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">-$500 to $1,000 (not worth it)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$3,800</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">$800-2,300 (break-even point)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$80,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$4,200</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">$1,200-2,700 (worth it)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$100,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$7,650</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">$4,650-6,150 (definitely worth it)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$11,000</td>
                  <td className="border border-gray-300 px-4 py-3">$2,000-4,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">$7,000-9,000 (substantial savings)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700">
            <strong>Rule of thumb:</strong> S-Corp election becomes worth it at $60k+ net profit. Below that, the administrative hassle outweighs the tax savings.
          </p>
        </section>

        {/* Liability Protection */}
        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Liability Protection: Your Personal Assets at Stake</h2>

          <p className="text-lg text-gray-700 mb-6">
            The biggest non-tax difference between sole proprietorships and LLCs is <strong>liability protection</strong>—and it's potentially worth far more than tax savings.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sole Proprietorship = Zero Protection</h3>

          <p className="text-lg text-gray-700 mb-4">
            As a sole proprietor, <strong>you and your business are the same legal entity</strong>. If your business gets sued or goes into debt:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Creditors can go after your <strong>personal home</strong></li>
            <li>Your <strong>personal bank accounts</strong> can be garnished</li>
            <li>Your <strong>car, investments, and savings</strong> are at risk</li>
            <li>You're personally liable for any damages or debts</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-2 text-red-800">Real Scenario: Web Designer Sued</h4>
            <p className="text-gray-700">
              Sarah, a sole proprietor web designer, built an e-commerce site with a checkout bug that caused $80,000 in lost sales for her client. The client sued and won. As a sole proprietor, Sarah had to liquidate her personal savings, sell her car, and declare bankruptcy. An LLC would have protected her personal assets—only the business assets would be at risk.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">LLC = "Limited Liability" Shield</h3>

          <p className="text-lg text-gray-700 mb-4">
            An LLC creates a <strong>separate legal entity</strong> between you and your business. If your LLC gets sued or goes into debt:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Creditors can only go after <strong>business assets</strong> (business bank account, equipment, etc.)</li>
            <li>Your <strong>personal home, car, and savings</strong> are protected</li>
            <li>You're shielded from business liabilities (with exceptions below)</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Exceptions to LLC Protection</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Personal guarantees:</strong> If you personally guarantee a business loan, you're liable</li>
              <li><strong>Fraud/illegal activity:</strong> LLC won't protect you from your own criminal acts</li>
              <li><strong>"Piercing the corporate veil":</strong> If you commingle personal/business funds or don't maintain separate records, courts can ignore the LLC protection</li>
              <li><strong>Professional malpractice:</strong> Doctors, lawyers, etc. are personally liable for their own malpractice</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who NEEDS an LLC for Liability Protection?</h3>

          <p className="text-lg text-gray-700 mb-4">
            Consider an LLC from day one if you have:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                High Liability Risk
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Physical business location (slip-and-fall risk)</li>
                <li>Employees (employment lawsuits)</li>
                <li>Inventory/equipment (damage claims)</li>
                <li>Client projects with financial stakes ($50k+ contracts)</li>
                <li>Professional services (consulting, IT, design)</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Low Liability Risk (Sole Prop OK)
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Virtual/remote freelancing (writing, design, coding)</li>
                <li>No employees (just you)</li>
                <li>Low-value contracts ($5k-10k projects)</li>
                <li>No physical products/inventory</li>
                <li>Work covered by professional liability insurance</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            <strong>Bottom line:</strong> If you're a remote freelancer with professional liability insurance and contracts under $20k, sole proprietorship is probably fine. If you have employees, a physical location, or high-value contracts, get an LLC for peace of mind.
          </p>
        </section>

        {/* Formation Costs */}
        <section id="formation-costs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Formation Costs: What You'll Actually Pay by State</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sole Proprietorship Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Total startup cost: $0-50</strong> in most states. You can start doing business immediately under your personal name. If you want to use a business name ("DBA" or "Doing Business As"), you file with your county clerk:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>DBA filing fee:</strong> $10-50 (one-time or every 5 years)</li>
            <li><strong>Business license:</strong> $50-200 (depending on city/industry)</li>
            <li><strong>Annual costs:</strong> Usually $0 (some cities charge annual business license renewal)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">LLC Formation Costs by State (2025)</h3>

          <p className="text-lg text-gray-700 mb-4">
            LLC costs vary wildly by state. Here are the filing fees + annual fees for the most common states:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">State</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Formation Fee</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual Fee/Report</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total Year 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Wyoming</td>
                  <td className="border border-gray-300 px-4 py-3">$100</td>
                  <td className="border border-gray-300 px-4 py-3">$60 (annual report)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$160 (cheapest)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Nevada</td>
                  <td className="border border-gray-300 px-4 py-3">$425</td>
                  <td className="border border-gray-300 px-4 py-3">$350 (annual list)</td>
                  <td className="border border-gray-300 px-4 py-3">$775</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Delaware</td>
                  <td className="border border-gray-300 px-4 py-3">$90</td>
                  <td className="border border-gray-300 px-4 py-3">$300 (franchise tax)</td>
                  <td className="border border-gray-300 px-4 py-3">$390</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Texas</td>
                  <td className="border border-gray-300 px-4 py-3">$300</td>
                  <td className="border border-gray-300 px-4 py-3">$0 (if under $1.23M revenue)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$300</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Florida</td>
                  <td className="border border-gray-300 px-4 py-3">$125</td>
                  <td className="border border-gray-300 px-4 py-3">$138.75 (annual report)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$263.75</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">New York</td>
                  <td className="border border-gray-300 px-4 py-3">$200</td>
                  <td className="border border-gray-300 px-4 py-3">$9 per $1,000 of LLC capital</td>
                  <td className="border border-gray-300 px-4 py-3">$200-500+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">California</td>
                  <td className="border border-gray-300 px-4 py-3">$75</td>
                  <td className="border border-gray-300 px-4 py-3">$800 (franchise tax)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">$875 (most expensive)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Illinois</td>
                  <td className="border border-gray-300 px-4 py-3">$150</td>
                  <td className="border border-gray-300 px-4 py-3">$75 (annual report)</td>
                  <td className="border border-gray-300 px-4 py-3">$225</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Ohio</td>
                  <td className="border border-gray-300 px-4 py-3">$99</td>
                  <td className="border border-gray-300 px-4 py-3">$0</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$99 (great value)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Washington</td>
                  <td className="border border-gray-300 px-4 py-3">$200</td>
                  <td className="border border-gray-300 px-4 py-3">$69 (annual report)</td>
                  <td className="border border-gray-300 px-4 py-3">$269</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Registered Agent Requirement</p>
            <p className="text-gray-700 mb-2">
              All LLCs must have a "registered agent" with a physical address in the state to receive legal documents. Options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Yourself (free):</strong> Use your home/office address (appears in public records)</li>
              <li><strong>Registered agent service ($100-300/year):</strong> Keeps your address private, handles legal mail</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Should You Form in Your Home State or Delaware/Wyoming?</h3>

          <p className="text-lg text-gray-700 mb-4">
            Many online services push Delaware or Wyoming LLCs. Here's the truth:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>If you live/work in California</strong> and form a Delaware LLC, you'll pay Delaware fees ($390/year) PLUS California "foreign LLC" fees (~$800/year) = double the cost</li>
            <li><strong>Delaware advantage:</strong> Only matters for venture-backed startups seeking funding or complex corporate structures</li>
            <li><strong>Best choice for 99% of freelancers:</strong> Form in your home state where you physically operate</li>
          </ul>

          <p className="text-lg text-gray-700">
            <strong>Exception:</strong> If you're in California or Massachusetts (high fees), consider Wyoming ($160/year) or Texas ($300 one-time) IF you have no physical presence in CA/MA and can legitimately operate from those states.
          </p>
        </section>

        {/* S-Corp Election */}
        <section id="scorp" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">S-Corp Election: The Tax Savings Multiplier</h2>

          <p className="text-lg text-gray-700 mb-6">
            This is where LLCs truly shine. An <strong>S-Corporation is NOT a business structure</strong>—it's a tax classification you can elect for your LLC (or regular corporation).
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How S-Corp Status Works</h3>

          <p className="text-lg text-gray-700 mb-4">
            Normally, LLC profits flow through to your personal return and are hit with:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>15.3% self-employment tax (Social Security 12.4% + Medicare 2.9%)</li>
            <li>Income tax (10%-37% based on bracket)</li>
          </ul>

          <p className="text-lg text-gray-700 mb-4">
            With S-Corp election, you become an <strong>employee of your own LLC</strong>. You pay yourself a W-2 salary (subject to payroll taxes) and take the rest as <strong>distributions</strong> (which avoid the 15.3% SE tax).
          </p>

          <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-lg mb-3">Real Example: $120,000 Net Profit</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2 text-red-700">❌ Regular LLC (Default)</h5>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Net profit: $120,000</p>
                  <p>• SE tax: $120k × 92.35% × 15.3% = <strong>$16,955</strong></p>
                  <p>• Income tax (24% bracket): ~$16,000</p>
                  <p>• <strong>Total tax: $32,955</strong></p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-green-700">✅ LLC with S-Corp Election</h5>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• W-2 salary: $70,000 (reasonable)</p>
                  <p>• Distributions: $50,000</p>
                  <p>• Payroll tax on salary: $70k × 15.3% = <strong>$10,710</strong></p>
                  <p>• Income tax: ~$16,000 (same)</p>
                  <p>• <strong>Total tax: $26,710</strong></p>
                  <p className="pt-2 border-t border-green-300 font-bold text-green-700">Savings: $6,245/year!</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">S-Corp Requirements & Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            S-Corp election adds administrative burden:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Payroll service:</strong> $500-2,000/year (Gusto, ADP, Paychex) to run W-2 payroll</li>
            <li><strong>Quarterly payroll tax filings:</strong> Form 941 every quarter</li>
            <li><strong>Annual W-2 and W-3 forms</strong> (handled by payroll service)</li>
            <li><strong>S-Corp tax return (Form 1120-S):</strong> Separate corporate return, CPA fees $800-2,000/year</li>
            <li><strong>Reasonable salary requirement:</strong> Must pay yourself fair market value (50-60% of profit is safe)</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ When to Make the S-Corp Election</p>
            <p className="text-gray-700 mb-2">
              File <strong>Form 2553</strong> with the IRS by March 15 to elect S-Corp status for the current tax year. If you miss the deadline, the election takes effect next year. Most CPAs recommend waiting until you consistently earn $60k+ before electing—the savings justify the costs at that threshold.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">S-Corp Salary Guidelines by Profit Level</h3>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Profit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Reasonable Salary</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Distributions</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual Tax Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">$36,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$24,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$3,672</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$80,000</td>
                  <td className="border border-gray-300 px-4 py-3">$48,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$32,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$4,896</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$100,000</td>
                  <td className="border border-gray-300 px-4 py-3">$60,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$40,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$6,120</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  <td className="border border-gray-300 px-4 py-3">$85,000 (57%)</td>
                  <td className="border border-gray-300 px-4 py-3">$65,000 (43%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$9,945</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$200,000</td>
                  <td className="border border-gray-300 px-4 py-3">$110,000 (55%)</td>
                  <td className="border border-gray-300 px-4 py-3">$90,000 (45%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$13,770</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700">
            Check the Bureau of Labor Statistics (<a href="https://www.bls.gov/oes/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">bls.gov</a>) for median salaries in your industry/location to justify your salary choice to the IRS.
          </p>
        </section>

        {/* Decision Framework */}
        <section id="decision" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Which Structure Should You Choose?</h2>

          <p className="text-lg text-gray-700 mb-6">
            Here's a clear decision framework based on your income and business risk:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Choose Sole Proprietorship If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Annual net profit under $40,000</strong> (S-Corp savings don't justify LLC costs)</li>
                <li><strong>Low liability risk</strong> (remote freelancer, no employees, low-value contracts)</li>
                <li><strong>You have professional liability insurance</strong> that covers your work</li>
                <li><strong>You want minimal administrative burden</strong> (no annual reports, no separate bank account required)</li>
                <li><strong>You're testing a business idea</strong> before committing to a formal structure</li>
              </ul>
              <p className="mt-4 text-gray-700 italic">
                💡 You can always convert to LLC later when you cross $60k or face liability concerns.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Choose LLC (Default Tax Treatment) If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Annual profit $40k-60k</strong> (liability protection justified, but S-Corp not yet worth it)</li>
                <li><strong>Moderate liability risk</strong> (client projects $20k-50k, some equipment/inventory)</li>
                <li><strong>You want business credibility</strong> ("John Smith LLC" on contracts)</li>
                <li><strong>You plan to grow</strong> and want the option to elect S-Corp later</li>
                <li><strong>You're in a state with low LLC fees</strong> (Texas, Florida, Ohio under $300/year)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Choose LLC with S-Corp Election If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Annual net profit $60,000+</strong> (tax savings outweigh admin costs)</li>
                <li><strong>Consistent income</strong> (not wildly fluctuating month-to-month)</li>
                <li><strong>You can afford payroll service</strong> ($500-2,000/year) and CPA ($800-2,000/year)</li>
                <li><strong>You understand "reasonable salary" requirements</strong> (IRS scrutiny if too low)</li>
                <li><strong>You're comfortable with quarterly payroll filings</strong> (or paying someone to handle it)</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Potential savings: $3,000-13,000/year depending on profit level
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Get an LLC Immediately (Regardless of Income) If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Physical business location</strong> (retail, office, studio—slip-and-fall liability)</li>
                <li><strong>Employees or contractors</strong> (employment disputes, workers' comp claims)</li>
                <li><strong>High-value contracts</strong> ($50k+ projects where mistakes = lawsuits)</li>
                <li><strong>Product-based business</strong> (inventory, product liability claims)</li>
                <li><strong>Professional services with financial stakes</strong> (consulting, IT, financial planning)</li>
                <li><strong>Multiple business partners</strong> (LLC operating agreement defines ownership/roles)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Common Scenarios</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📝 Freelance Writer, $30k/year, Remote Work</h4>
              <p className="text-gray-700"><strong>Best choice:</strong> Sole proprietorship. Low liability risk, income below S-Corp threshold, minimal admin. Get professional liability insurance ($300-500/year) for coverage.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💻 Software Developer, $85k/year, Remote Contracts</h4>
              <p className="text-gray-700"><strong>Best choice:</strong> LLC with S-Corp election. Take $50k salary + $35k distributions, save ~$5,355/year in SE tax. Justify salary using bls.gov median for software developers.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🎨 Graphic Designer, $55k/year, Some Client Meetings</h4>
              <p className="text-gray-700"><strong>Best choice:</strong> LLC (default tax treatment). Liability protection for client disputes, but income not quite high enough to justify S-Corp admin costs. Re-evaluate at $65k.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📸 Wedding Photographer, $70k/year, Equipment Worth $30k</h4>
              <p className="text-gray-700"><strong>Best choice:</strong> LLC with S-Corp election. Liability protection for equipment/venue incidents, S-Corp saves ~$4,200/year. Take $42k salary (60%) + $28k distributions.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🏗️ General Contractor, $120k/year, 2 Employees</h4>
              <p className="text-gray-700"><strong>Best choice:</strong> LLC with S-Corp election (mandatory). High liability risk = LLC protection essential. S-Corp saves ~$7,344/year. Take $70k salary + $50k distributions.</p>
            </div>
          </div>
        </section>

        {/* Conversion */}
        <section id="conversion" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Converting from Sole Proprietorship to LLC</h2>

          <p className="text-lg text-gray-700 mb-6">
            Most freelancers start as sole proprietors and convert to LLC when their income or risk justifies it. Here's the step-by-step process:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conversion Steps</h3>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">File LLC Formation Documents</h4>
                <p className="text-gray-700">File Articles of Organization with your state (online or by mail). Costs $75-500 depending on state. Processing time: 1-4 weeks (or pay $50-200 for expedited filing).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Get an EIN from the IRS</h4>
                <p className="text-gray-700">Apply at <a href="https://www.irs.gov/ein" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/ein</a> (free, takes 5 minutes). You'll receive your EIN immediately online. This replaces your SSN for tax purposes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Open a Business Bank Account</h4>
                <p className="text-gray-700">Use your LLC formation docs + EIN to open a business checking account. This separates business/personal finances (critical for "piercing the corporate veil" protection).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Update Contracts & Invoices</h4>
                <p className="text-gray-700">Change all new contracts from "John Smith" to "John Smith LLC." Update invoice templates, email signatures, website footer. Notify existing clients of the business entity change.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Transfer Business Assets (Optional)</h4>
                <p className="text-gray-700">If you have equipment, domain names, or intellectual property, formally transfer ownership from yourself to the LLC. Document with a bill of sale.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">File Taxes with Your New EIN</h4>
                <p className="text-gray-700">For tax year of conversion: report pre-LLC income on Schedule C under SSN, post-LLC income on Schedule C under EIN. Next year, everything uses the LLC's EIN.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Elect S-Corp Status (If Applicable)</h4>
                <p className="text-gray-700">If your profit is $60k+, file Form 2553 within 75 days of LLC formation (or by March 15 of the year you want it to take effect). Set up payroll service before first quarter.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Mid-Year Conversion Tax Considerations</p>
            <p className="text-gray-700">
              If you convert mid-year (e.g., June 1), you'll file Schedule C for January-May income as a sole prop, and June-December income as an LLC. This is normal and not a problem. Just keep clean records of the conversion date.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conversion Costs</h3>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>LLC filing fee:</strong> $75-500 (one-time)</li>
            <li><strong>Registered agent:</strong> $0-300/year (use yourself or hire service)</li>
            <li><strong>Business bank account:</strong> $0-15/month (many free for small businesses)</li>
            <li><strong>Operating agreement drafting:</strong> $0-500 (optional for single-member, recommended)</li>
            <li><strong>Total conversion cost:</strong> $75-1,300 first year, then $100-1,000/year ongoing</li>
          </ul>

          <p className="text-lg text-gray-700">
            <strong>Timeline:</strong> Most conversions take 2-4 weeks from filing to receiving your LLC certificate. You can operate as a sole prop until then, then switch to LLC for all new contracts.
          </p>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.SE_TAX_CALCULATOR)}
              className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <Calculator className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Self-Employment Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate your 15.3% SE tax liability and see S-Corp savings potential</p>
              <span className="text-purple-600 text-sm font-medium group-hover:underline">Calculate SE Tax →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX_CALCULATOR)}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <TrendingUp className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Quarterly Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate quarterly tax payments for sole prop or LLC (includes SE tax)</p>
              <span className="text-orange-600 text-sm font-medium group-hover:underline">Estimate Payments →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.DEDUCTION_TRACKER)}
              className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <FileText className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Deduction Tracker</h3>
              <p className="text-sm text-gray-600 mb-3">Track business expenses and deductions (available for both structures)</p>
              <span className="text-green-600 text-sm font-medium group-hover:underline">Track Deductions →</span>
            </button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Tax Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_TAX_DEDUCTIONS)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                    Tax Deductions for Freelancers 2025 →
                  </h3>
                  <p className="text-sm text-gray-600">Complete guide to write-offs available for both sole props and LLCs (home office, mileage, equipment, health insurance)</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Self-Employment Tax Guide 2025 →
                  </h3>
                  <p className="text-sm text-gray-600">Understand the 15.3% SE tax, Schedule SE, and how to reduce your liability with deductions</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_1099_W2)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                    1099 vs W-2 Comparison 2025 →
                  </h3>
                  <p className="text-sm text-gray-600">Compare independent contractor (1099) vs employee (W-2) tax treatment—critical for choosing your business structure</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                    Quarterly Estimated Taxes Guide →
                  </h3>
                  <p className="text-sm text-gray-600">How to calculate and pay quarterly taxes as a sole prop or LLC (avoid underpayment penalties)</p>
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400">{openFAQ === index ? '−' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make the Right Choice?</h2>
          <p className="text-lg text-blue-50 mb-6">
            Use our calculators to see your exact tax savings with different structures
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate?.(ToolType.SE_TAX_CALCULATOR)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Calculate SE Tax Savings
            </button>
            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX_CALCULATOR)}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Estimate Quarterly Payments
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LLCvsSoleProp2025;
