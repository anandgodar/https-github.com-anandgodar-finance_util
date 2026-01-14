'use client';

import React, { useEffect } from 'react';

interface RedirectClientProps {
  to: string;
}

export default function RedirectClient({ to }: RedirectClientProps) {
  useEffect(() => {
    // Immediate redirect
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
        </div>
        <p className="text-slate-600 mb-4 text-lg font-medium">Redirecting to the new page...</p>
        <a 
          href={to} 
          className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold text-base"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}
