
import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BudgetingGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Complete Budgeting Guide 2025: 50/30/20 Rule, Zero-Based Budgeting & More",
      "description": "Master budgeting in 2025 with our complete guide. Learn the 50/30/20 rule, zero-based budgeting, envelope method, and proven strategies to take control of your finances.",
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
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/budgeting-guide-2025"
      },
      "keywords": "budgeting guide, 50 30 20 rule, zero based budgeting, envelope method, how to budget, monthly budget, budgeting tips, personal finance budgeting, budget planner"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-budgeting';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-budgeting');
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
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 19 min read</span>
          <span>•</span>
          <span>💰 Financial Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Complete Budgeting Guide 2025: 50/30/20 Rule, Zero-Based Budgeting & More
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Budgeting is the foundation of financial success. This comprehensive 2025 guide covers the
          <strong> 50/30/20 rule</strong>, zero-based budgeting, envelope method, and proven strategies to take control
          of your finances and achieve your financial goals.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Take-Home Pay
              </h3>
              <p className="text-sm text-slate-600">
                Start budgeting by knowing exactly how much money you have to work with each month
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('why-budget')} className="text-indigo-600 hover:underline">1. Why Budgeting Matters: The Foundation of Financial Success</button></li>
          <li><button onClick={() => scrollToSection('50-30-20')} className="text-indigo-600 hover:underline">2. The 50/30/20 Rule: Simple Budgeting Framework</button></li>
          <li><button onClick={() => scrollToSection('zero-based')} className="text-indigo-600 hover:underline">3. Zero-Based Budgeting: Every Dollar Has a Job</button></li>
          <li><button onClick={() => scrollToSection('envelope-method')} className="text-indigo-600 hover:underline">4. Envelope Method: Cash-Based Budgeting</button></li>
          <li><button onClick={() => scrollToSection('create-budget')} className="text-indigo-600 hover:underline">5. How to Create a Budget: Step-by-Step Guide</button></li>
          <li><button onClick={() => scrollToSection('track-expenses')} className="text-indigo-600 hover:underline">6. How to Track Expenses: Tools & Strategies</button></li>
          <li><button onClick={() => scrollToSection('sticking-to-budget')} className="text-indigo-600 hover:underline">7. Sticking to Your Budget: Common Challenges & Solutions</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="why-budget" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why Budgeting Matters: The Foundation of Financial Success</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Budgeting is more than just tracking expenses—it's a roadmap to financial freedom. A well-planned budget helps
            you control your money, achieve your goals, and build wealth over time.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Benefits of Budgeting</p>
            <ul className="space-y-2 text-indigo-800">
              <li>• <strong>Control your spending:</strong> Know where every dollar goes</li>
              <li>• <strong>Achieve financial goals:</strong> Save for emergencies, retirement, or major purchases</li>
              <li>• <strong>Reduce financial stress:</strong> No more wondering if you can afford something</li>
              <li>• <strong>Build wealth:</strong> Allocate money to savings and investments</li>
              <li>• <strong>Avoid debt:</strong> Live within your means</li>
            </ul>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">The Cost of Not Budgeting</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            Without a budget, it's easy to:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Spend more than you earn (leading to debt)</li>
            <li>Miss savings opportunities</li>
            <li>Live paycheck to paycheck</li>
            <li>Fail to reach financial goals</li>
            <li>Experience constant financial stress</li>
          </ul>
        </section>

        <section id="50-30-20" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 50/30/20 Rule: Simple Budgeting Framework</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>50/30/20 rule</strong> is one of the simplest and most popular budgeting methods. It divides your
            after-tax income into three categories:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h4 className="font-bold text-emerald-700 text-2xl mb-2">50%</h4>
              <h5 className="font-bold text-slate-900 text-lg mb-2">Needs</h5>
              <p className="text-slate-700 text-sm">
                Essential expenses: housing, utilities, groceries, transportation, insurance, minimum debt payments
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h4 className="font-bold text-indigo-700 text-2xl mb-2">30%</h4>
              <h5 className="font-bold text-slate-900 text-lg mb-2">Wants</h5>
              <p className="text-slate-700 text-sm">
                Non-essential expenses: dining out, entertainment, hobbies, shopping, subscriptions
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h4 className="font-bold text-purple-700 text-2xl mb-2">20%</h4>
              <h5 className="font-bold text-slate-900 text-lg mb-2">Savings & Debt</h5>
              <p className="text-slate-700 text-sm">
                Emergency fund, retirement savings, investments, extra debt payments
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">50/30/20 Rule Example</h3>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700 mb-4">
              If your monthly take-home pay is $5,000:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Needs (50%):</strong> $2,500 - Rent, utilities, groceries, car payment, insurance</li>
              <li>• <strong>Wants (30%):</strong> $1,500 - Restaurants, entertainment, shopping, hobbies</li>
              <li>• <strong>Savings & Debt (20%):</strong> $1,000 - Emergency fund, 401(k), extra debt payments</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg mb-2">⚠️ Adjusting the 50/30/20 Rule</p>
            <p className="text-yellow-800">
              The 50/30/20 rule is a guideline, not a strict rule. If you live in a high-cost area, your needs might
              be 60% of your income. If you're aggressively paying off debt, your savings/debt category might be 30%.
              Adjust the percentages to fit your situation.
            </p>
          </div>
        </section>

        <section id="zero-based" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Zero-Based Budgeting: Every Dollar Has a Job</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Zero-based budgeting</strong> means every dollar of income is assigned a purpose before the month
            begins. Your income minus expenses equals zero—every dollar is accounted for.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Zero-Based Budgeting Formula</p>
            <p className="text-indigo-800 text-xl font-bold mb-2">
              Income - Expenses - Savings = $0
            </p>
            <p className="text-indigo-800">
              Every dollar is assigned to a category: housing, food, savings, investments, etc. Nothing is left
              unaccounted for.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">How Zero-Based Budgeting Works</h3>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 text-lg mb-4">Step-by-Step Process</h4>
            <ol className="space-y-3 text-slate-700">
              <li>
                <strong>1. Calculate monthly income:</strong> Use our
                <button onClick={() => onNavigate?.(ToolType.SALARY_CALC)} className="text-indigo-600 hover:underline font-semibold mx-1">
                  Salary Calculator
                </button>
                to find your exact take-home pay.
              </li>
              <li>
                <strong>2. List all expenses:</strong> Housing, utilities, food, transportation, insurance, debt payments,
                savings, investments, entertainment, etc.
              </li>
              <li>
                <strong>3. Assign every dollar:</strong> Allocate income to each category until income minus expenses equals zero.
              </li>
              <li>
                <strong>4. Track throughout the month:</strong> Record every expense and adjust categories as needed.
              </li>
              <li>
                <strong>5. Review and adjust:</strong> At month-end, review what worked and adjust for next month.
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Zero-Based Budgeting Example</h3>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700 mb-4">
              Monthly take-home pay: $5,000
            </p>
            <div className="space-y-2 text-slate-700">
              <p>• Rent: $1,500</p>
              <p>• Utilities: $200</p>
              <p>• Groceries: $400</p>
              <p>• Transportation: $300</p>
              <p>• Insurance: $250</p>
              <p>• Debt payments: $500</p>
              <p>• Emergency fund: $500</p>
              <p>• 401(k): $800</p>
              <p>• Entertainment: $200</p>
              <p>• Miscellaneous: $350</p>
              <p className="mt-4 font-bold text-indigo-600 text-lg">Total: $5,000 (Income - Expenses = $0)</p>
            </div>
          </div>
        </section>

        <section id="envelope-method" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Envelope Method: Cash-Based Budgeting</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>envelope method</strong> is a cash-based budgeting system where you allocate cash to different
            spending categories in physical or digital envelopes. When an envelope is empty, you stop spending in that
            category.
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">How the Envelope Method Works</h3>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <ol className="space-y-3 text-slate-700">
              <li>
                <strong>1. Create categories:</strong> Groceries, dining out, entertainment, shopping, gas, etc.
              </li>
              <li>
                <strong>2. Allocate cash:</strong> At the start of the month, withdraw cash and divide it into envelopes
                based on your budget.
              </li>
              <li>
                <strong>3. Spend from envelopes:</strong> When you make a purchase, use cash from the appropriate envelope.
              </li>
              <li>
                <strong>4. Stop when empty:</strong> When an envelope is empty, you can't spend more in that category
                until next month.
              </li>
            </ol>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Digital Envelope Method</p>
            <p className="text-indigo-800">
              You don't need physical envelopes. Use budgeting apps like YNAB, Goodbudget, or even a simple spreadsheet
              to track "envelopes" digitally. The principle is the same: allocate money to categories and stop spending
              when the category is empty.
            </p>
          </div>
        </section>

        <section id="create-budget" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Create a Budget: Step-by-Step Guide</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Creating your first budget can seem overwhelming, but it's simpler than you think. Follow these steps:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Step 1: Calculate Your Income</h4>
              <p className="text-slate-700 mb-3">
                Start with your net income (take-home pay after taxes). Use our
                <button onClick={() => onNavigate?.(ToolType.SALARY_CALC)} className="text-indigo-600 hover:underline font-semibold mx-1">
                  Salary Calculator
                </button>
                to find your exact monthly take-home pay. Include all income sources: salary, freelance income, side
                hustles, etc.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Step 2: Track Your Expenses</h4>
              <p className="text-slate-700 mb-3">
                For one month, track every expense. Use bank statements, credit card statements, and receipts. Categorize
                expenses: housing, food, transportation, entertainment, etc. This shows you where your money actually goes.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Step 3: Set Spending Limits</h4>
              <p className="text-slate-700 mb-3">
                Based on your tracked expenses and financial goals, set spending limits for each category. Use the 50/30/20
                rule as a starting point, then adjust based on your priorities.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Step 4: Prioritize Savings</h4>
              <p className="text-slate-700 mb-3">
                Pay yourself first. Allocate money to:
              </p>
              <ul className="space-y-1 text-slate-700 ml-4">
                <li>• Emergency fund (aim for 3-6 months of expenses)</li>
                <li>• Retirement savings (401(k), IRA)</li>
                <li>• Other financial goals (house down payment, vacation, etc.)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Step 5: Review and Adjust</h4>
              <p className="text-slate-700 mb-3">
                At the end of each month, review your budget. Did you stick to it? What categories went over? Adjust
                your budget for the next month based on what you learned.
              </p>
            </div>
          </div>
        </section>

        <section id="track-expenses" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Track Expenses: Tools & Strategies</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Tracking expenses is essential for successful budgeting. Here are the best tools and strategies:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Budgeting Apps</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>YNAB (You Need A Budget):</strong> Zero-based budgeting, $14.99/month</li>
                <li>• <strong>Mint:</strong> Free, automatic transaction tracking</li>
                <li>• <strong>PocketGuard:</strong> Shows how much you can spend</li>
                <li>• <strong>Goodbudget:</strong> Digital envelope method</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Spreadsheets</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Google Sheets:</strong> Free, customizable, accessible anywhere</li>
                <li>• <strong>Excel:</strong> Powerful formulas and charts</li>
                <li>• <strong>Templates:</strong> Download free budget templates online</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 text-lg mb-3">Manual Tracking</h4>
            <p className="text-slate-700">
              If you prefer simplicity, use a notebook or notes app. Write down every expense as you make it. Review
              weekly to see where your money goes.
            </p>
          </div>
        </section>

        <section id="sticking-to-budget" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sticking to Your Budget: Common Challenges & Solutions</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Creating a budget is easy—sticking to it is hard. Here are common challenges and how to overcome them:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Challenge: Overspending on Wants</h4>
              <p className="text-slate-700 mb-3">
                <strong>Solution:</strong> Use the envelope method for discretionary spending. When the "entertainment"
                envelope is empty, you're done spending on entertainment for the month. This creates a natural spending limit.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Challenge: Unexpected Expenses</h4>
              <p className="text-slate-700 mb-3">
                <strong>Solution:</strong> Build an emergency fund and include a "miscellaneous" category in your budget
                (5-10% of income). This covers unexpected expenses without derailing your budget.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Challenge: Irregular Income</h4>
              <p className="text-slate-700 mb-3">
                <strong>Solution:</strong> Base your budget on your lowest expected monthly income. Save extra income in
                good months to cover shortfalls in lean months. Build a larger emergency fund (6-12 months).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Challenge: Lifestyle Inflation</h4>
              <p className="text-slate-700 mb-3">
                <strong>Solution:</strong> When you get a raise, allocate 50% to savings/investments and 50% to lifestyle
                improvements. This prevents lifestyle inflation from eating up all your extra income.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">What is the best budgeting method?</h4>
              <p className="text-slate-700">
                The best budgeting method is the one you'll actually use. The 50/30/20 rule is great for beginners.
                Zero-based budgeting is best for detailed control. The envelope method works well for overspenders.
                Try different methods and stick with what works for you.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">How much should I save each month?</h4>
              <p className="text-slate-700">
                Aim to save at least 20% of your income (50/30/20 rule). If you're paying off debt, you might save less
                temporarily. If you're pursuing FIRE (Financial Independence Retire Early), you might save 50-70% of your
                income. Start with what you can and increase over time.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">What if I can't stick to my budget?</h4>
              <p className="text-slate-700">
                Adjust your budget. If you consistently overspend in a category, increase that category's limit and reduce
                another. Budgets should be flexible and realistic. The goal is to control your spending, not to be perfect.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Should I use cash or cards for budgeting?</h4>
              <p className="text-slate-700">
                Cash works well for the envelope method and helps control spending (you can't spend what you don't have).
                Cards offer convenience and rewards but require more discipline. Many people use cards for fixed expenses
                (bills) and cash for variable expenses (entertainment, dining out).
              </p>
            </div>
          </div>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Weekly Budgeting Tips"
          description="Subscribe for weekly tips on budgeting, saving money, and achieving your financial goals."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💰 Salary Calculator</h4>
            <p className="text-sm text-slate-600">Calculate your take-home pay to know exactly how much you have to budget</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🛡️ Emergency Fund Calculator</h4>
            <p className="text-sm text-slate-600">Calculate how much emergency fund you need (part of your budget)</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.NET_WORTH)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Net Worth Tracker</h4>
            <p className="text-sm text-slate-600">Track your net worth to see how budgeting improves your financial health</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_TAKE_HOME_PAY)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📖 How to Calculate Take-Home Pay</h4>
            <p className="text-sm text-slate-600">Learn how to calculate your exact take-home pay for budgeting</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetingGuide2025;
