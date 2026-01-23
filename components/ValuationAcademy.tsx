import React from 'react';
import { ToolType } from '../types';

interface ValuationAcademyProps {
  setActiveTool: (tool: ToolType) => void;
}

interface AcademyGuide {
  id: ToolType;
  title: string;
  description: string;
  category: 'Valuation' | 'Options' | 'Tax Strategy' | 'Comparison';
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedTool?: ToolType;
}

const ValuationAcademy: React.FC<ValuationAcademyProps> = ({ setActiveTool }) => {
  const guides: AcademyGuide[] = [
    {
      id: ToolType.ACADEMY_DCF_GUIDE,
      title: 'DCF Valuation: Complete Guide to Stock Valuation',
      description: 'Learn how to value companies like Wall Street analysts using Discounted Cash Flow analysis. Understand FCF, terminal value, and discount rates.',
      category: 'Valuation',
      readTime: '15 min',
      difficulty: 'Intermediate',
      relatedTool: ToolType.EXCEL_MODELER
    },
    {
      id: ToolType.ACADEMY_WACC_GUIDE,
      title: 'WACC Explained: The Cost of Capital Demystified',
      description: 'Master the Weighted Average Cost of Capital formula. Learn CAPM, cost of equity, cost of debt, and capital structure optimization.',
      category: 'Valuation',
      readTime: '12 min',
      difficulty: 'Intermediate',
      relatedTool: ToolType.EXCEL_MODELER
    },
    {
      id: ToolType.ACADEMY_GREEKS_GUIDE,
      title: 'Options Greeks: Delta, Theta, Vega, Gamma for Beginners',
      description: 'Understand the four essential Greeks that control options pricing. Learn how to use Delta for directional risk and Theta for time decay.',
      category: 'Options',
      readTime: '18 min',
      difficulty: 'Beginner',
      relatedTool: ToolType.OPTIONS_STRATEGY_VISUALIZER
    },
    {
      id: ToolType.ACADEMY_IRON_CONDOR,
      title: 'Iron Condor Strategy: When and How to Use It',
      description: 'Master the neutral income strategy used by professional traders. Learn breakeven points, max profit/loss, and ideal market conditions.',
      category: 'Options',
      readTime: '14 min',
      difficulty: 'Intermediate',
      relatedTool: ToolType.OPTIONS_STRATEGY_VISUALIZER
    },
    {
      id: ToolType.ACADEMY_SAFE_HARBOR,
      title: 'Safe Harbor Rules: Never Pay IRS Penalties Again',
      description: 'Learn the IRS safe harbor methods for estimated taxes. Discover the HYSA arbitrage strategy to optimize cash flow while staying compliant.',
      category: 'Tax Strategy',
      readTime: '10 min',
      difficulty: 'Beginner',
      relatedTool: ToolType.QUARTERLY_TAX
    },
    {
      id: ToolType.ACADEMY_STATE_TAX_COMPARISON,
      title: 'California vs Texas: Real Take-Home Pay Analysis',
      description: 'Compare actual take-home pay between high-tax and no-tax states. Understand how state income tax affects your wealth building.',
      category: 'Comparison',
      readTime: '8 min',
      difficulty: 'Beginner',
      relatedTool: ToolType.SALARY_CALC
    }
  ];

  const categoryColors = {
    'Valuation': 'from-indigo-900 to-purple-900',
    'Options': 'from-emerald-900 to-teal-900',
    'Tax Strategy': 'from-orange-900 to-red-900',
    'Comparison': 'from-blue-900 to-cyan-900'
  };

  const difficultyBadge = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  const groupedGuides = guides.reduce((acc, guide) => {
    if (!acc[guide.category]) acc[guide.category] = [];
    acc[guide.category].push(guide);
    return acc;
  }, {} as Record<string, AcademyGuide[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl">🎓</span>
            <h1 className="text-5xl font-black tracking-tight">Valuation Academy</h1>
          </div>
          <p className="text-xl text-indigo-200 leading-relaxed max-w-3xl">
            Master institutional-grade financial analysis with our comprehensive guides.
            Learn DCF valuation, options strategies, and tax optimization from real-world practitioners.
          </p>
          <div className="flex gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-bold">6 In-Depth Guides</p>
                <p className="text-indigo-300">2,000+ words each</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              <div>
                <p className="font-bold">Interactive Tools</p>
                <p className="text-indigo-300">Try as you learn</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-bold">Real Examples</p>
                <p className="text-indigo-300">Wall Street methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {Object.entries(groupedGuides).map(([category, categoryGuides]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-black text-slate-900">{category}</h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-slate-300 to-transparent rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-indigo-500"
                  onClick={() => setActiveTool(guide.id)}
                >
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-br ${categoryColors[guide.category]} p-6 rounded-t-2xl`}>
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyBadge[guide.difficulty]}`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-white/80 text-sm font-semibold">{guide.readTime}</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight group-hover:text-indigo-200 transition-colors">
                      {guide.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {guide.description}
                    </p>

                    {guide.relatedTool && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-indigo-600 font-bold">🔧 Try the tool:</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTool(guide.relatedTool!);
                          }}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline"
                        >
                          Open Calculator →
                        </button>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {category}
                      </span>
                      <button className="text-indigo-600 font-black text-sm group-hover:translate-x-1 transition-transform">
                        Read Guide →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Master Financial Analysis?</h2>
          <p className="text-xl text-indigo-200 mb-8">
            Each guide is designed to take you from theory to practice in under 20 minutes.
          </p>
          <button
            onClick={() => setActiveTool(ToolType.DASHBOARD)}
            className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValuationAcademy;
