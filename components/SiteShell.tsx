'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Footer from './Footer';
import Sidebar from './Sidebar';
import { ToolType } from '../types';

type SiteShellProps = {
  activeTool?: ToolType;
  children: React.ReactNode;
};

const SiteShell: React.FC<SiteShellProps> = ({ activeTool = ToolType.BLOG_INDEX, children }) => {
  const router = useRouter();

  const handleNavigate = (tool: ToolType) => {
    // Special handling for blog index - navigate to /blog route
    if (tool === ToolType.BLOG_INDEX) {
      router.push('/blog');
      return;
    }
    
    // Handle blog posts - navigate to /blog/[slug]
    if (tool.toString().startsWith('blog/')) {
      const blogSlug = tool.toString().replace('blog/', '');
      router.push(`/blog/${blogSlug}`);
      return;
    }
    
    // Handle regular tools
    const path = tool === ToolType.DASHBOARD ? '/' : `/${tool}`;
    router.push(path);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 flex-col md:flex-row">
      <Sidebar activeTool={activeTool} setActiveTool={handleNavigate} />

      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <header className="flex justify-between items-center p-6 md:hidden bg-white border-b sticky top-0 z-40">
          <div className="text-xl font-black text-indigo-600 flex items-center gap-2">
            <span>📈</span> QuantCurb
          </div>
          <button
            onClick={() => handleNavigate(ToolType.DASHBOARD)}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold"
            aria-label="Back to Home"
          >
            🏠
          </button>
        </header>

        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-0 md:px-2 lg:px-3 py-0 md:py-2 lg:py-3">
            {children}
          </div>
        </div>

        <Footer setActiveTool={handleNavigate} />

        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-4 rounded-[2rem] shadow-2xl flex gap-10 z-50">
          <button
            onClick={() => handleNavigate(ToolType.DASHBOARD)}
            className={`${activeTool === ToolType.DASHBOARD ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}
            aria-label="Dashboard"
          >
            📊
          </button>
          <button
            onClick={() => handleNavigate(ToolType.BLOG_INDEX)}
            className={`${activeTool === ToolType.BLOG_INDEX ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}
            aria-label="Blog"
          >
            📝
          </button>
          <button
            onClick={() => handleNavigate(ToolType.NET_WORTH)}
            className={`${activeTool === ToolType.NET_WORTH ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}
            aria-label="Net Worth"
          >
            💎
          </button>
          <button
            onClick={() => handleNavigate(ToolType.MARKET_INSIGHTS)}
            className={`${activeTool === ToolType.MARKET_INSIGHTS ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}
            aria-label="Market Insights"
          >
            🤖
          </button>
        </div>
      </main>
    </div>
  );
};

export default SiteShell;
