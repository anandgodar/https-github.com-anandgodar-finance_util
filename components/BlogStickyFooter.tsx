'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolType } from '../types';
import { getCalculatorForBlog } from '../lib/blog-calculator-map';

type BlogStickyFooterProps = {
  blogSlug: string;
};

export default function BlogStickyFooter({ blogSlug }: BlogStickyFooterProps) {
  const router = useRouter();
  const calculatorTool = getCalculatorForBlog(blogSlug);

  if (!calculatorTool) {
    return null;
  }

  const handleClick = () => {
    const path = calculatorTool === ToolType.DASHBOARD ? '/' : `/${calculatorTool}`;
    router.push(path);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 shadow-lg">
      <button
        onClick={handleClick}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg"
      >
        <span className="text-2xl">🔢</span>
        <span>Run Your Numbers Now</span>
      </button>
    </div>
  );
}
