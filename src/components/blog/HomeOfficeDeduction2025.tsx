import React, { useEffect, useState } from 'react';
import { ToolType } from '../../types';
import { ArrowLeft, Calculator, Home, DollarSign, FileText, CheckCircle2, XCircle, AlertTriangle, Ruler } from 'lucide-react';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HomeOfficeDeduction2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Home Office Deduction 2025: Complete Guide to Simplified vs Regular Method",
      "description": "Comprehensive guide to claiming the home office deduction for self-employed individuals and freelancers in 2025. Learn the simplified method ($5/sq ft, max $1,500), regular method (actual expenses), qualification requirements, depreciation, and audit-proof documentation.",
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
        "@id": "https://quantcurb.com/blog/home-office-deduction-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-home-office';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-home-office');
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
      question: "Can I claim home office deduction if I rent my home?",
      answer: "Yes! Renters can absolutely claim the home office deduction. You don't need to own your home—you just need to use part of it regularly and exclusively for business. If you rent, your allowable expenses include your portion of rent, renters insurance, and utilities. The simplified method ($5/sq ft) works the same for renters and homeowners."
    },
    {
      question: "What is the simplified home office deduction for 2025?",
      answer: "The simplified method allows you to deduct $5 per square foot of home office space, up to 300 square feet maximum. This caps your deduction at $1,500/year ($5 × 300 sq ft). No need to track actual expenses—just measure your office square footage. Best for those with small home offices (under 300 sq ft) or who don't want to track detailed expenses."
    },
    {
      question: "Does home office deduction trigger an audit?",
      answer: "No, this is a myth. The IRS does NOT automatically audit home office deductions. However, you MUST meet the requirements: (1) regular and exclusive use, (2) principal place of business. To be audit-proof: measure your space accurately, take photos, keep a floor plan, document business activities, and never use the space for personal activities. Legitimate home offices are 100% legal deductions."
    },
    {
      question: "Can W-2 employees claim home office deduction?",
      answer: "No, not since 2018. The Tax Cuts and Jobs Act eliminated the home office deduction for W-2 employees (even if you work from home full-time). This deduction is ONLY available for self-employed individuals, freelancers, and independent contractors who file Schedule C. If you're a W-2 remote worker, you cannot claim this deduction—even if your employer requires you to work from home."
    },
    {
      question: "What's the difference between direct and indirect home office expenses?",
      answer: "Direct expenses benefit ONLY your home office (painting the office, office carpet replacement) - deduct 100%. Indirect expenses benefit your entire home (mortgage interest, utilities, HOA fees, insurance) - deduct based on office percentage. Example: 200 sq ft office in 2,000 sq ft home = 10% of home. Deduct 10% of mortgage interest, utilities, insurance, repairs. Deduct 100% of office-only expenses (desk, office-specific repairs)."
    },
    {
      question: "Should I use simplified or regular method for home office deduction?",
      answer: "Use the REGULAR method if: (1) Your office is over 300 sq ft, (2) Your actual expenses exceed $1,500/year, (3) You own your home (capture depreciation), (4) You have high mortgage interest/property taxes. Use the SIMPLIFIED method if: (1) Office under 300 sq ft, (2) You rent and expenses are low, (3) You want to avoid tracking receipts, (4) First year testing the deduction. You can switch methods each year—choose whichever gives the larger deduction."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <button
        onClick={() => onNavigate?.(ToolType.DASHBOARD)}
        className="flex items-center gap-2 text-yellow-600 hover:text-yellow-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Home className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Home Office Deduction 2025</h1>
        </div>
        <p className="text-xl text-yellow-50 mb-4">
          Complete Guide: Simplified vs Regular Method, Qualification & Audit-Proof Documentation
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4" />
            <span>$5/Sq Ft Simplified Method</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span>Actual Expense Method</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Qualification Requirements</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-yellow-600" />
          Table of Contents
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <button onClick={() => scrollToSection('overview')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Quick Overview & Requirements
          </button>
          <button onClick={() => scrollToSection('qualification')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Do You Qualify?
          </button>
          <button onClick={() => scrollToSection('simplified')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Simplified Method ($5/sq ft)
          </button>
          <button onClick={() => scrollToSection('regular')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Regular Method (Actual Expenses)
          </button>
          <button onClick={() => scrollToSection('comparison')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Simplified vs Regular Comparison
          </button>
          <button onClick={() => scrollToSection('calculation')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Real Calculation Examples
          </button>
          <button onClick={() => scrollToSection('documentation')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Audit-Proof Documentation
          </button>
          <button onClick={() => scrollToSection('faqs')} className="text-left text-yellow-600 hover:text-yellow-800 hover:underline">
            → Frequently Asked Questions
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-none">

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Home Office Deduction: Overview & Requirements</h2>

          <p className="text-lg text-gray-700 mb-6">
            The home office deduction is one of the most valuable tax breaks for self-employed individuals, freelancers, and independent contractors. If you work from home, you can deduct a portion of your rent/mortgage, utilities, insurance, and repairs—potentially saving <strong>$1,500-6,000+ per year</strong> in taxes.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Bottom Line Up Front</p>
            <p className="text-gray-700">
              You can choose between TWO methods each year: <strong>Simplified method</strong> ($5 per square foot, max $1,500, no receipts needed) or <strong>Regular method</strong> (actual expenses like mortgage interest, utilities, depreciation—often $3,000-6,000+ for homeowners). Requirements: Your home office must be used <strong>regularly and exclusively</strong> for business, and it must be your <strong>principal place of business</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Two Ways to Claim Home Office Deduction</h3>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Simplified Method</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regular Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Deduction Calculation</td>
                  <td className="border border-gray-300 px-4 py-3">$5 × square footage</td>
                  <td className="border border-gray-300 px-4 py-3">Actual expenses × business %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Maximum Deduction</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500 (300 sq ft max)</td>
                  <td className="border border-gray-300 px-4 py-3">Unlimited (based on actual costs)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Record Keeping</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Minimal (just measure sq ft)</td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">Track all home expenses</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Depreciation</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ No depreciation deduction</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Can deduct depreciation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                  <td className="border border-gray-300 px-4 py-3">Small offices, renters, simple returns</td>
                  <td className="border border-gray-300 px-4 py-3">Large offices, homeowners, max deduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Can Switch Annually?</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Yes</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">📊 Who Can Claim This Deduction?</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>✅ <strong>Self-employed individuals</strong> (sole proprietors, LLC owners filing Schedule C)</li>
              <li>✅ <strong>Freelancers and independent contractors</strong> (1099 income)</li>
              <li>✅ <strong>Gig workers</strong> (Uber, DoorDash if you have a home office for admin)</li>
              <li>❌ <strong>W-2 employees</strong> (deduction eliminated in 2018, even for remote workers)</li>
            </ul>
          </div>
        </section>

        {/* Qualification */}
        <section id="qualification" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Do You Qualify for the Home Office Deduction?</h2>

          <p className="text-lg text-gray-700 mb-6">
            The IRS has TWO strict requirements. You must meet BOTH to claim the deduction:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Requirement #1: Regular and Exclusive Use</h3>

          <p className="text-lg text-gray-700 mb-4">
            Your home office space must be used <strong>exclusively for business</strong>. The IRS is strict on this:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Qualifies (Exclusive Use)
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Dedicated room used ONLY for work (spare bedroom → office)</li>
                <li>Corner of room with physical divider (curtain, bookshelf) used only for business</li>
                <li>Basement area designated for business, never used personally</li>
                <li>Detached garage converted to office/studio</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Does NOT Qualify (Mixed Use)
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Kitchen table where you work AND eat meals</li>
                <li>Living room couch used for work and watching TV</li>
                <li>Guest bedroom used for work AND overnight guests</li>
                <li>Dining room used as office during day, dining at night</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ "Regular Use" Explained</p>
            <p className="text-gray-700">
              "Regular use" means you work in the space consistently—not just occasionally. Working 5 days/week from your home office qualifies. Working from the office once a month does not. The IRS doesn't define a specific hour requirement, but consistent, ongoing use is expected.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Requirement #2: Principal Place of Business</h3>

          <p className="text-lg text-gray-700 mb-4">
            Your home office must be either:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Your main place of business</strong> (you conduct most of your business activities there), OR</li>
            <li><strong>A place where you meet clients/customers</strong> in the normal course of business (like a therapist seeing clients at home), OR</li>
            <li><strong>A separate structure</strong> used for business (detached garage, studio, shed)</li>
          </ul>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Real Qualification Examples</h4>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-green-700 mb-1">✅ QUALIFIES: Freelance Writer</p>
                <p className="text-sm text-gray-700">You write articles from your home office 40 hours/week. Occasionally you meet a client at a coffee shop. Your home office is your principal place of business because you do all substantive work there.</p>
              </div>

              <div>
                <p className="font-medium text-green-700 mb-1">✅ QUALIFIES: Wedding Photographer</p>
                <p className="text-sm text-gray-700">You shoot weddings on weekends at various venues, but you do ALL post-production editing, client communication, and administrative work from your home office. Your home office is your principal place of business (even though you earn income at external locations).</p>
              </div>

              <div>
                <p className="font-medium text-green-700 mb-1">✅ QUALIFIES: Therapist</p>
                <p className="text-sm text-gray-700">You see clients in your home office 3 days/week and rent office space 2 days/week. Your home office qualifies because you meet clients there regularly (doesn't need to be your ONLY office).</p>
              </div>

              <div>
                <p className="font-medium text-red-700 mb-1">❌ DOES NOT QUALIFY: Plumber</p>
                <p className="text-sm text-gray-700">You do plumbing work at customer sites all day. You occasionally do paperwork at home in the evening. Your home is NOT your principal place of business because the substantive work (plumbing) happens at customer locations. (Exception: if you have a dedicated home office for all administrative work, scheduling, billing—you may qualify).</p>
              </div>

              <div>
                <p className="font-medium text-red-700 mb-1">❌ DOES NOT QUALIFY: Real Estate Agent</p>
                <p className="text-sm text-gray-700">You show properties to clients all day and do administrative work at your brokerage's main office. You occasionally check emails from home. Your home is not your principal place of business (the brokerage office is).</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Administrative/Management Activities Safe Harbor</p>
            <p className="text-gray-700">
              Even if you perform services at other locations (like a contractor or consultant), your home office qualifies as your principal place of business if: (1) You use it regularly and exclusively for administrative/management activities (billing, scheduling, bookkeeping), AND (2) You have no other fixed location where you conduct these activities. This is HUGE for contractors, consultants, and service providers.
            </p>
          </div>
        </section>

        {/* Simplified Method */}
        <section id="simplified" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Simplified Method: $5 Per Square Foot</h2>

          <p className="text-lg text-gray-700 mb-6">
            Introduced by the IRS in 2013, the simplified method is the easiest way to claim the home office deduction. No tracking receipts, no calculating percentages—just measure your office and multiply by $5.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How the Simplified Method Works</h3>

          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-l-4 border-yellow-600">
            <h4 className="font-semibold text-lg mb-3">Simplified Method Formula</h4>
            <div className="space-y-2 text-gray-700">
              <p className="text-xl font-semibold">Deduction = Office Square Footage × $5</p>
              <p>• <strong>Maximum square footage:</strong> 300 sq ft</p>
              <p>• <strong>Maximum deduction:</strong> $1,500/year ($5 × 300)</p>
              <p>• <strong>Only requirement:</strong> Measure your office space accurately</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Simplified Method Examples</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Example 1: Spare Bedroom Office (150 sq ft)</h4>
              <p className="text-sm text-gray-700 mb-2">You converted a 12' × 12.5' spare bedroom (150 sq ft) into a dedicated home office.</p>
              <p className="text-sm text-gray-700">• <strong>Calculation:</strong> 150 sq ft × $5 = <span className="text-green-600 font-semibold">$750 deduction</span></p>
              <p className="text-sm text-gray-700">• <strong>Tax savings (24% bracket):</strong> $750 × 0.24 = $180/year</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Example 2: Corner Office Nook (80 sq ft)</h4>
              <p className="text-sm text-gray-700 mb-2">You use an 8' × 10' corner of your living room exclusively for work (physical divider separates it).</p>
              <p className="text-sm text-gray-700">• <strong>Calculation:</strong> 80 sq ft × $5 = <span className="text-green-600 font-semibold">$400 deduction</span></p>
              <p className="text-sm text-gray-700">• <strong>Tax savings (22% bracket):</strong> $400 × 0.22 = $88/year</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Example 3: Large Home Office (400 sq ft)</h4>
              <p className="text-sm text-gray-700 mb-2">You have a 20' × 20' dedicated office space (400 sq ft).</p>
              <p className="text-sm text-gray-700">• <strong>Calculation:</strong> 300 sq ft × $5 = <span className="text-green-600 font-semibold">$1,500 deduction</span> (capped at 300 sq ft)</p>
              <p className="text-sm text-gray-700">• <strong>Tax savings (24% bracket):</strong> $1,500 × 0.24 = $360/year</p>
              <p className="text-sm text-orange-600 font-medium mt-2">⚠️ With 400 sq ft, the regular method would likely give a larger deduction!</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Simplified Method Advantages</h3>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Zero record-keeping:</strong> No need to track mortgage, utilities, insurance, repairs</li>
            <li><strong>No depreciation recapture:</strong> When you sell your home, no need to recapture depreciation</li>
            <li><strong>Simple tax prep:</strong> Just report square footage on Schedule C, Line 30</li>
            <li><strong>Can switch methods yearly:</strong> Use simplified one year, regular the next</li>
            <li><strong>Quick calculation:</strong> Measure office, multiply by $5, done</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Simplified Method Limitations</h3>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>$1,500 cap:</strong> Even with a 500 sq ft office, you're capped at $1,500</li>
            <li><strong>No depreciation:</strong> Homeowners miss out on depreciation deduction (often $2,000-4,000/year)</li>
            <li><strong>May be smaller deduction:</strong> If your actual expenses are high, regular method often saves more</li>
            <li><strong>No carryforward:</strong> If your business has a loss, you can't carry the simplified deduction forward</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-gray-800 font-semibold mb-2">✅ Use Simplified Method If:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Your office is under 300 sq ft</li>
              <li>You rent your home (depreciation doesn't apply)</li>
              <li>Your actual home expenses are low</li>
              <li>You want minimal paperwork and tracking</li>
              <li>You're in your first year and testing the deduction</li>
            </ul>
          </div>
        </section>

        {/* Regular Method */}
        <section id="regular" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Regular Method: Actual Expenses</h2>

          <p className="text-lg text-gray-700 mb-6">
            The regular method allows you to deduct your actual home expenses based on the percentage of your home used for business. This method almost always yields a larger deduction than the simplified method—especially for homeowners with large offices.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How the Regular Method Works</h3>

          <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
            <h4 className="font-semibold text-lg mb-3">Regular Method Formula</h4>
            <div className="space-y-2 text-gray-700">
              <p className="text-lg font-semibold">Step 1: Calculate Business Percentage</p>
              <p>Business % = (Office Square Footage ÷ Total Home Square Footage) × 100</p>

              <p className="text-lg font-semibold mt-4">Step 2: Deduct Expenses</p>
              <p>• <strong>Direct expenses:</strong> 100% deductible (office-specific costs)</p>
              <p>• <strong>Indirect expenses:</strong> Deduct (Business % × Expense)</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Deductible Expenses</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-indigo-700">Direct Expenses (100% Deductible)</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Painting/repairs done ONLY to office</li>
                <li>Office carpeting or flooring</li>
                <li>Office lighting fixtures</li>
                <li>Office window treatments</li>
                <li>Office-specific furniture (desk, chair, shelves)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">Indirect Expenses (Business % Deductible)</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Mortgage interest</li>
                <li>Property taxes</li>
                <li>Homeowners/renters insurance</li>
                <li>Utilities (electricity, gas, water, trash)</li>
                <li>HOA fees</li>
                <li>Home security system</li>
                <li>General repairs (roof, HVAC, plumbing)</li>
                <li>Pest control</li>
                <li>Lawn care/snow removal</li>
                <li>Depreciation (homeowners only)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Regular Method Example: Homeowner</h3>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Scenario: 300 sq ft office in 2,000 sq ft home</h4>

            <p className="font-medium mb-2">Step 1: Calculate Business Percentage</p>
            <p className="text-sm text-gray-700 mb-4">300 sq ft ÷ 2,000 sq ft = <strong className="text-indigo-600">15% business use</strong></p>

            <p className="font-medium mb-2">Step 2: Calculate Annual Home Expenses</p>
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>• Mortgage interest: $12,000/year</p>
              <p>• Property taxes: $4,000/year</p>
              <p>• Homeowners insurance: $1,500/year</p>
              <p>• Utilities (electric, gas, water): $3,000/year</p>
              <p>• Repairs (HVAC, plumbing): $1,000/year</p>
              <p>• HOA fees: $600/year</p>
              <p>• <strong>Total indirect expenses: $22,100/year</strong></p>
            </div>

            <p className="font-medium mb-2">Step 3: Calculate Deductible Indirect Expenses</p>
            <p className="text-sm text-gray-700 mb-4">$22,100 × 15% = <strong className="text-green-600">$3,315</strong></p>

            <p className="font-medium mb-2">Step 4: Add Direct Expenses</p>
            <p className="text-sm text-gray-700 mb-4">Office painting: $500 (100% deductible)</p>

            <p className="font-medium mb-2">Step 5: Add Depreciation (Homeowners Only)</p>
            <p className="text-sm text-gray-700 mb-4">Home value: $300,000 (excluding land $50k = $250k depreciable)<br/>
            Annual depreciation: $250,000 ÷ 39 years = $6,410<br/>
            Business portion: $6,410 × 15% = <strong className="text-green-600">$961</strong></p>

            <p className="font-semibold text-xl text-green-700 pt-4 border-t border-gray-300">
              Total Regular Method Deduction: $3,315 + $500 + $961 = $4,776/year
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Compare to simplified method on same office: $1,500<br/>
              <strong className="text-green-600">Regular method saves an extra $3,276!</strong>
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Regular Method Example: Renter</h3>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Scenario: 200 sq ft office in 1,200 sq ft apartment</h4>

            <p className="font-medium mb-2">Step 1: Calculate Business Percentage</p>
            <p className="text-sm text-gray-700 mb-4">200 sq ft ÷ 1,200 sq ft = <strong className="text-indigo-600">16.7% business use</strong></p>

            <p className="font-medium mb-2">Step 2: Calculate Annual Rental Expenses</p>
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>• Rent: $24,000/year ($2,000/month)</p>
              <p>• Renters insurance: $300/year</p>
              <p>• Utilities (included or paid separately): $1,200/year</p>
              <p>• <strong>Total indirect expenses: $25,500/year</strong></p>
            </div>

            <p className="font-medium mb-2">Step 3: Calculate Deductible Expenses</p>
            <p className="text-sm text-gray-700 mb-4">$25,500 × 16.7% = <strong className="text-green-600">$4,259</strong></p>

            <p className="font-semibold text-xl text-green-700 pt-4 border-t border-gray-300">
              Total Regular Method Deduction: $4,259/year
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Compare to simplified method on 200 sq ft: $1,000<br/>
              <strong className="text-green-600">Regular method saves an extra $3,259!</strong>
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Depreciation Recapture Warning (Homeowners)</p>
            <p className="text-gray-700">
              When you use the regular method and claim depreciation, you must "recapture" (pay tax on) that depreciation when you sell your home. Example: You claimed $10,000 in depreciation over 10 years. When you sell, you'll pay capital gains tax on that $10,000 (25% rate). This doesn't apply to the simplified method. Despite recapture, the regular method usually still saves more money overall.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-gray-800 font-semibold mb-2">✅ Use Regular Method If:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Your office is over 300 sq ft</li>
              <li>You own your home (capture depreciation)</li>
              <li>Your annual home expenses are high (mortgage, property tax)</li>
              <li>You want to maximize your deduction</li>
              <li>You're comfortable tracking receipts and expenses</li>
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Simplified vs Regular: Side-by-Side Comparison</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Office Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Simplified Method</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regular Method (Renter)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regular Method (Owner)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best Choice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">100 sq ft</td>
                  <td className="border border-gray-300 px-4 py-3">$500</td>
                  <td className="border border-gray-300 px-4 py-3">~$800-1,200</td>
                  <td className="border border-gray-300 px-4 py-3">~$1,500-2,500</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Regular</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">150 sq ft</td>
                  <td className="border border-gray-300 px-4 py-3">$750</td>
                  <td className="border border-gray-300 px-4 py-3">~$1,200-1,800</td>
                  <td className="border border-gray-300 px-4 py-3">~$2,200-3,500</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Regular</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">200 sq ft</td>
                  <td className="border border-gray-300 px-4 py-3">$1,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$1,600-2,400</td>
                  <td className="border border-gray-300 px-4 py-3">~$3,000-4,500</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Regular</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">300 sq ft</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500 (max)</td>
                  <td className="border border-gray-300 px-4 py-3">~$2,400-3,600</td>
                  <td className="border border-gray-300 px-4 py-3">~$4,500-6,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Regular</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">400 sq ft</td>
                  <td className="border border-gray-300 px-4 py-3">$1,500 (capped)</td>
                  <td className="border border-gray-300 px-4 py-3">~$3,200-4,800</td>
                  <td className="border border-gray-300 px-4 py-3">~$6,000-8,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Regular</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Verdict:</strong> The regular method almost always yields a larger deduction, especially for:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Homeowners (depreciation adds $1,000-4,000/year)</li>
            <li>High-cost areas (expensive rent, high property taxes)</li>
            <li>Offices over 200 sq ft (simplified method caps too low)</li>
          </ul>

          <p className="text-lg text-gray-700">
            The simplified method only makes sense if: (1) Your office is tiny (under 100 sq ft), (2) You value simplicity over saving money, or (3) Your home expenses are unusually low.
          </p>
        </section>

        {/* Calculation Examples */}
        <section id="calculation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Real-World Calculation Examples</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💻 Freelance Developer: 180 sq ft office, owns $400k home</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-yellow-700">Simplified Method</h4>
                  <p className="text-sm text-gray-700">180 sq ft × $5 = $900/year</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Regular Method</h4>
                  <p className="text-sm text-gray-700 mb-1">• Home: 2,200 sq ft (180 ÷ 2,200 = 8.2%)</p>
                  <p className="text-sm text-gray-700 mb-1">• Mortgage interest: $15k × 8.2% = $1,230</p>
                  <p className="text-sm text-gray-700 mb-1">• Property tax: $5k × 8.2% = $410</p>
                  <p className="text-sm text-gray-700 mb-1">• Insurance/utilities/repairs: $5k × 8.2% = $410</p>
                  <p className="text-sm text-gray-700 mb-1">• Depreciation: $350k ÷ 39 × 8.2% = $735</p>
                  <p className="text-sm text-gray-700 font-semibold text-green-700">Total: $2,785/year</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Best choice:</strong> Regular method — saves $1,885 more than simplified
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">✍️ Freelance Writer: 120 sq ft office, rents $1,800/month apartment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-yellow-700">Simplified Method</h4>
                  <p className="text-sm text-gray-700">120 sq ft × $5 = $600/year</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Regular Method</h4>
                  <p className="text-sm text-gray-700 mb-1">• Apartment: 900 sq ft (120 ÷ 900 = 13.3%)</p>
                  <p className="text-sm text-gray-700 mb-1">• Rent: $21,600/year × 13.3% = $2,873</p>
                  <p className="text-sm text-gray-700 mb-1">• Renters insurance: $300 × 13.3% = $40</p>
                  <p className="text-sm text-gray-700 mb-1">• Utilities: $1,200 × 13.3% = $160</p>
                  <p className="text-sm text-gray-700 font-semibold text-green-700">Total: $3,073/year</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Best choice:</strong> Regular method — saves $2,473 more (5x the simplified deduction!)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎨 Graphic Designer: 80 sq ft office nook, rents $950/month room</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-yellow-700">Simplified Method</h4>
                  <p className="text-sm text-gray-700">80 sq ft × $5 = $400/year</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-yellow-700">Regular Method</h4>
                  <p className="text-sm text-gray-700 mb-1">• Room: 150 sq ft (80 ÷ 150 = 53%)</p>
                  <p className="text-sm text-gray-700 mb-1">• Rent: $11,400/year × 53% = $6,042</p>
                  <p className="text-sm text-gray-700 mb-1">• Utilities (if separate): $600 × 53% = $318</p>
                  <p className="text-sm text-gray-700 font-semibold text-orange-700">Total: $6,360/year</p>
                  <p className="text-sm text-red-600 mt-2">⚠️ BUT: This assumes you rent JUST a room and use 53% exclusively for business. If you rent a whole apartment, calculate based on total apartment sq ft.</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Best choice:</strong> Depends on rental situation—consult a tax pro if renting a single room
              </p>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section id="documentation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Audit-Proof Documentation</h2>

          <p className="text-lg text-gray-700 mb-6">
            The home office deduction is 100% legitimate, but you need to prove you qualify if audited. Here's how to document everything perfectly:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Essential Documentation Checklist</h3>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">1. Measure and Diagram Your Office</h4>
                <p className="text-sm text-gray-700">Measure your office square footage accurately (length × width). Create a simple floor plan showing the office location within your home. Take photos of the space from multiple angles. Update annually if you move offices.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">2. Document Exclusive Use</h4>
                <p className="text-sm text-gray-700">Take photos showing the space is used ONLY for business (desk, computer, filing cabinets—no TV, bed, or personal items). If you use a shared room, install a physical divider (curtain, screen, bookshelf) and document it.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">3. Track All Home Expenses (Regular Method)</h4>
                <p className="text-sm text-gray-700">Keep receipts/statements for: mortgage/rent, property tax, insurance, utilities, repairs, HOA fees. Use a spreadsheet to track monthly. Save 1098 (mortgage interest), property tax bills, insurance invoices.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">4. Prove Principal Place of Business</h4>
                <p className="text-sm text-gray-700">Document that you conduct business activities from home: client invoices with home address, contracts listing home office, business license/DBA showing home address, calendar showing work schedule from home.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">5. Calculate Your Business Percentage</h4>
                <p className="text-sm text-gray-700">For regular method: Office sq ft ÷ Total home sq ft = Business %. Document total home size (use property tax records, lease agreement, or measure entire home). Keep this calculation with your tax records.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">6. File Correctly on Schedule C</h4>
                <p className="text-sm text-gray-700">Simplified method: Report on Line 30 ("Expenses for business use of home"). Regular method: Complete Form 8829 ("Expenses for Business Use of Your Home") and attach to Schedule C. Software like TurboTax Self-Employed handles this automatically.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">🚫 Common Mistakes That Trigger Audits</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Claiming 100% of home:</strong> Deducting your entire mortgage/rent (you must use business percentage)</li>
              <li><strong>Non-exclusive use:</strong> Claiming a guest bedroom that you use for guests monthly</li>
              <li><strong>No business income:</strong> Claiming home office when you have zero self-employment income</li>
              <li><strong>Excessive deduction:</strong> Claiming $10k deduction on $20k business income (raises red flags)</li>
              <li><strong>Missing documentation:</strong> No floor plan, photos, or measurements to prove exclusive use</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-gray-800 font-semibold mb-2">✅ Audit-Proof Best Practices</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Keep all documentation for at least 3 years (IRS statute of limitations)</li>
              <li>Take dated photos of your office space annually</li>
              <li>Use accounting software to track expenses automatically (QuickBooks Self-Employed)</li>
              <li>Never exaggerate square footage—measure accurately</li>
              <li>If unsure, consult a CPA before claiming the deduction</li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.DEDUCTION_TRACKER)}
              className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <FileText className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Deduction Tracker</h3>
              <p className="text-sm text-gray-600 mb-3">Track all business expenses including home office costs throughout the year</p>
              <span className="text-green-600 text-sm font-medium group-hover:underline">Track Expenses →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.SE_TAX_CALCULATOR)}
              className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <Calculator className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Self-Employment Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate SE tax savings from home office deduction</p>
              <span className="text-purple-600 text-sm font-medium group-hover:underline">Calculate Savings →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX_CALCULATOR)}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <DollarSign className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Quarterly Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate quarterly payments after home office deduction</p>
              <span className="text-orange-600 text-sm font-medium group-hover:underline">Estimate Payments →</span>
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
                  <p className="text-sm text-gray-600">Complete guide to ALL freelancer deductions (home office is just one of many!)</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Self-Employment Tax Guide 2025 →
                  </h3>
                  <p className="text-sm text-gray-600">Understand how deductions like home office reduce your 15.3% SE tax</p>
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
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Claim Your Home Office Deduction?</h2>
          <p className="text-lg text-yellow-50 mb-6">
            Use our calculators to see your exact tax savings
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate?.(ToolType.DEDUCTION_TRACKER)}
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              Track Home Office Expenses
            </button>
            <button
              onClick={() => onNavigate?.(ToolType.SE_TAX_CALCULATOR)}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Calculate Tax Savings
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeOfficeDeduction2025;
