'use client';

import React from 'react';
import SalaryCalculator from '../../components/SalaryCalculator';
import SiteShell from '../../components/SiteShell';
import { ToolType } from '../../types';

type StateSalaryCalculatorClientProps = {
  stateCode: string;
  stateName: string;
  stateTaxRate: number;
};

export default function StateSalaryCalculatorClient({ 
  stateCode, 
  stateName,
  stateTaxRate
}: StateSalaryCalculatorClientProps) {
  const handleNavigate = (tool: ToolType) => {
    // Handle navigation if needed
    const path = tool === ToolType.DASHBOARD ? '/' : `/${tool}`;
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  // Generate state-specific intro text
  const getStateIntroText = () => {
    if (stateTaxRate === 0) {
      return `${stateName} has 0% state income tax on wages. Use our tool below to see your federal breakdown, FICA deductions, and exact take-home pay.`;
    }
    const ratePercent = (stateTaxRate * 100).toFixed(2);
    return `${stateName} has a state income tax rate of ${ratePercent}%. Use our tool below to calculate your federal tax, ${stateName} state tax, FICA deductions, and exact take-home pay.`;
  };

  return (
    <SiteShell activeTool={ToolType.SALARY_CALC}>
      <div className="w-full max-w-7xl mx-auto">
        {/* State-specific intro text */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            {getStateIntroText()}
          </p>
        </div>
        
        <SalaryCalculator 
          onNavigate={handleNavigate}
          initialState={stateCode}
          customTitle={`${stateName} Salary Paycheck Calculator 2026`}
        />
      </div>
    </SiteShell>
  );
}
