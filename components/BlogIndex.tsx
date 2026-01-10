import React, { useEffect } from 'react';
import { ToolType } from '../types';

interface BlogIndexProps {
  onNavigate?: (tool: ToolType) => void;
}

interface BlogPost {
  id: ToolType;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
}

const BlogIndex: React.FC<BlogIndexProps> = ({ onNavigate }) => {
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "QuantCurb Financial Blog",
      "description": "Comprehensive financial guides, calculators, and expert insights for mortgages, taxes, retirement, and wealth management.",
      "url": "https://quantcurb.com/blog",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 15,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Complete Guide to Mortgage Calculator 2025",
            "url": "https://quantcurb.com/blog/mortgage-calculator-guide-2025"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogSchema);
    script.id = 'blog-index-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('blog-index-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const blogPosts: BlogPost[] = [
    // New SEO Posts
    {
      id: ToolType.BLOG_MORTGAGE_GUIDE,
      title: "Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More",
      description: "Master mortgage calculations with our comprehensive 2025 guide. Learn PITI (Principal, Interest, Taxes, Insurance), PMI, property tax rates by state, and how to use a mortgage calculator.",
      category: "Home Buying",
      readTime: "15 min",
      date: "January 2026",
      icon: "🏡"
    },
    {
      id: ToolType.BLOG_HOW_MUCH_HOUSE,
      title: "How Much House Can I Afford? Complete 2025 Guide with Calculator",
      description: "Calculate how much house you can afford in 2025. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and find your perfect home price range.",
      category: "Home Buying",
      readTime: "12 min",
      date: "January 2026",
      icon: "💰"
    },
    {
      id: ToolType.BLOG_DEBT_OR_INVEST,
      title: "Should I Pay Off Debt or Invest? Complete 2025 Guide with Calculator",
      description: "Decide whether to pay off debt or invest your money in 2025. Learn the debt vs investment math, interest rate comparisons, and strategies to maximize your wealth.",
      category: "Financial Strategy",
      readTime: "14 min",
      date: "January 2026",
      icon: "📊"
    },
    {
      id: ToolType.BLOG_TAKE_HOME_PAY,
      title: "How to Calculate Take-Home Pay After Taxes: Complete 2025 Guide",
      description: "Learn how to calculate your take-home pay after taxes in 2025. Understand federal tax, state tax, FICA, 401k deductions, and use our salary calculator to get your exact net pay.",
      category: "Salary & Taxes",
      readTime: "13 min",
      date: "January 2026",
      icon: "💵"
    },
    {
      id: ToolType.BLOG_ROTH_TRADITIONAL,
      title: "Roth IRA vs Traditional IRA 2025: Which is Better? Complete Comparison",
      description: "Compare Roth IRA vs Traditional IRA in 2025. Learn contribution limits, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
      category: "Retirement Planning",
      readTime: "15 min",
      date: "January 2026",
      icon: "🎯"
    },
    {
      id: ToolType.BLOG_EMERGENCY_FUND,
      title: "How Much Emergency Fund Do I Need? Complete 2025 Guide with Calculator",
      description: "Calculate how much emergency fund you need in 2025. Learn the 3-6 month rule, how to build your emergency fund, where to keep it, and use our calculator to find your perfect safety net.",
      category: "Financial Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "🛡️"
    },
    {
      id: ToolType.BLOG_FIRE_GUIDE,
      title: "FIRE Calculator: Calculate Your Early Retirement Number - Complete 2025 Guide",
      description: "Calculate your FIRE (Financial Independence Retire Early) number with our comprehensive guide. Learn the 4% rule, Lean FIRE vs Fat FIRE, and how to achieve financial independence.",
      category: "Early Retirement",
      readTime: "16 min",
      date: "January 2026",
      icon: "🔥"
    },
    {
      id: ToolType.BLOG_BEST_RETIREMENT,
      title: "Best Retirement Calculator 2025: Compare Top Tools & Find Your Perfect Match",
      description: "Compare the best retirement calculators in 2025. Review top tools including QuantCurb, Bankrate, NerdWallet, and find the perfect calculator for your retirement planning needs.",
      category: "Retirement Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_INVESTMENT_GUIDE,
      title: "Complete Guide to Investment Calculator 2025: SIP, Compound Interest & Wealth Growth",
      description: "Master investment calculations with our comprehensive 2025 guide. Learn SIP investing, compound interest, inflation-adjusted returns, and how to use an investment calculator to project your wealth growth.",
      category: "Investing",
      readTime: "13 min",
      date: "January 2026",
      icon: "📈"
    },
    {
      id: ToolType.BLOG_BEST_MORTGAGE,
      title: "Best Mortgage Calculator 2025: Compare Top Tools & Features",
      description: "Compare the best mortgage calculators in 2025. Review top tools including QuantCurb, Bankrate, Zillow, and find the perfect calculator with PITI, PMI, and property tax calculations.",
      category: "Home Buying",
      readTime: "12 min",
      date: "January 2026",
      icon: "🏠"
    },
    {
      id: ToolType.BLOG_STUDENT_LOANS,
      title: "Student Loan Repayment Strategies 2025: Complete Guide to Paying Off Student Debt",
      description: "Master student loan repayment in 2025. Learn about income-driven repayment plans (SAVE, PAYE, IBR), loan forgiveness programs (PSLF), refinancing strategies, and how to pay off student debt faster.",
      category: "Debt Management",
      readTime: "18 min",
      date: "January 2026",
      icon: "🎓"
    },
    {
      id: ToolType.BLOG_TAX_BRACKETS,
      title: "Tax Brackets Explained 2025: Complete Guide to Federal Income Tax Rates",
      description: "Understand 2025 federal tax brackets and how progressive taxation works. Learn effective vs marginal tax rate, tax bracket calculations, and how to reduce your tax bill legally.",
      category: "Tax Planning",
      readTime: "16 min",
      date: "January 2026",
      icon: "💰"
    },
    {
      id: ToolType.BLOG_401K_VS_IRA,
      title: "401(k) vs IRA 2025: Complete Comparison Guide - Which Retirement Account is Better?",
      description: "Compare 401(k) vs IRA in 2025. Learn contribution limits, employer match, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
      category: "Retirement Planning",
      readTime: "17 min",
      date: "January 2026",
      icon: "🎯"
    },
    {
      id: ToolType.BLOG_BUDGETING,
      title: "Complete Budgeting Guide 2025: 50/30/20 Rule, Zero-Based Budgeting & More",
      description: "Master budgeting in 2025 with our complete guide. Learn the 50/30/20 rule, zero-based budgeting, envelope method, and proven strategies to take control of your finances.",
      category: "Financial Planning",
      readTime: "19 min",
      date: "January 2026",
      icon: "📊"
    },
    // Tax & Freelancer Posts
    {
      id: ToolType.BLOG_CTC_2025,
      title: "Child Tax Credit 2025: Complete Guide to CTC, ACTC, and Tax Savings",
      description: "Comprehensive guide to the 2025 Child Tax Credit. Learn eligibility requirements, income phase-outs, how to claim the $2,000 CTC and $1,700 refundable ACTC.",
      category: "Tax Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "👶"
    },
    {
      id: ToolType.BLOG_QUARTERLY_TAX,
      title: "Quarterly Estimated Taxes 2025: Complete Guide for Freelancers & Self-Employed",
      description: "Master quarterly estimated taxes with our comprehensive 2025 guide. Learn safe harbor rules, payment deadlines, penalty avoidance, and exact calculations for freelancers.",
      category: "Tax Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "📅"
    },
    {
      id: ToolType.BLOG_ACA_FREELANCERS,
      title: "ACA Health Insurance for Freelancers 2025: Complete Guide to Subsidies & Marketplace",
      description: "Ultimate guide to ACA health insurance for freelancers, self-employed, and contractors in 2025. Master Premium Tax Credits, Medicaid expansion, and cost optimization strategies.",
      category: "Health Insurance",
      readTime: "16 min",
      date: "January 2026",
      icon: "🏥"
    },
    {
      id: ToolType.BLOG_SE_TAX,
      title: "Self-Employment Tax Guide 2025: Complete Schedule SE & Tax Calculation Guide",
      description: "Master self-employment tax in 2025. Understand the 15.3% SE tax rate, Schedule SE calculations, 92.35% rule, and how to minimize your tax burden.",
      category: "Tax Planning",
      readTime: "13 min",
      date: "January 2026",
      icon: "📋"
    },
    {
      id: ToolType.BLOG_TAX_DEDUCTIONS,
      title: "Tax Deductions for Freelancers 2025: Complete Write-Off Guide & Strategies",
      description: "Maximize your freelance tax deductions in 2025. Master home office deduction, mileage tracking, Section 179 equipment deduction, health insurance write-off, and more.",
      category: "Tax Planning",
      readTime: "15 min",
      date: "January 2026",
      icon: "✍️"
    },
    {
      id: ToolType.BLOG_1099_W2,
      title: "1099 vs W-2 in 2025: Complete Tax & Benefits Comparison for Contractors",
      description: "Understand the complete difference between 1099 independent contractor and W-2 employee status in 2025. Compare taxes, benefits, take-home pay, and legal classification rules.",
      category: "Employment",
      readTime: "14 min",
      date: "January 2026",
      icon: "💼"
    },
    {
      id: ToolType.BLOG_LLC_SOLE_PROP,
      title: "LLC vs Sole Proprietor 2025: Complete Tax & Legal Comparison Guide",
      description: "Comprehensive comparison of LLC vs Sole Proprietorship for freelancers and small business owners. Understand tax differences, liability protection, and which structure saves you the most money.",
      category: "Business Structure",
      readTime: "13 min",
      date: "January 2026",
      icon: "🏢"
    },
    {
      id: ToolType.BLOG_SEP_SOLO401K,
      title: "SEP-IRA vs Solo 401(k) 2025: Complete Contribution Limits & Comparison Guide",
      description: "Comprehensive comparison of SEP-IRA vs Solo 401(k) for self-employed individuals. Understand 2025 contribution limits, tax benefits, setup costs, and which retirement plan saves you the most money.",
      category: "Retirement Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_HOME_OFFICE,
      title: "Home Office Deduction 2025: Complete Guide to Simplified vs Regular Method",
      description: "Comprehensive guide to claiming the home office deduction for self-employed individuals in 2025. Learn the simplified method ($5/sq ft), regular method, and audit-proof documentation.",
      category: "Tax Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "🏠"
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      {/* Hero Section */}
      <header className="space-y-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          QuantCurb Financial Blog
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Expert financial guides, calculators, and insights for mortgages, taxes, retirement planning,
          and wealth management. Learn how to make smarter financial decisions with institutional-grade tools.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <span>📚 {blogPosts.length} Comprehensive Guides</span>
          <span>•</span>
          <span>💰 High-Value Financial Topics</span>
          <span>•</span>
          <span>📊 Interactive Calculators</span>
        </div>
        <p className="text-center text-slate-500 text-sm mt-2">
          Updated regularly with the latest 2025 tax laws, financial strategies, and calculator guides
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition">
          All Posts
        </button>
        {categories.map(category => (
          <button
            key={category}
            className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-indigo-50 hover:border-indigo-300 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onNavigate?.(post.id)}
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {post.icon}
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold mb-3">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>⏱️ {post.readTime} read</span>
                  <span>•</span>
                  <span>📅 {post.date}</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
              {post.title}
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              {post.description}
            </p>
            
            <div className="flex items-center text-indigo-600 font-bold text-sm group-hover:gap-2 transition-all">
              Read Guide
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-black mb-4">Ready to Calculate Your Financial Future?</h2>
        <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
          Use our professional-grade financial calculators to make informed decisions about mortgages,
          taxes, retirement, and investments.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.DASHBOARD)}
          className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
        >
          Explore All Calculators →
        </button>
      </section>
    </div>
  );
};

export default BlogIndex;
