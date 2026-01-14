'use client';

import React from 'react';
import SalaryCalculator from '../../components/SalaryCalculator';
import SiteShell from '../../components/SiteShell';
import { ToolType } from '../../types';

type StateSalaryCalculatorClientProps = {
  stateCode: string;
  stateName: string;
};

export default function StateSalaryCalculatorClient({ 
  stateCode, 
  stateName 
}: StateSalaryCalculatorClientProps) {
  const handleNavigate = (tool: ToolType) => {
    // Handle navigation if needed
    const path = tool === ToolType.DASHBOARD ? '/' : `/${tool}`;
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  return (
    <SiteShell activeTool={ToolType.SALARY_CALC}>
      <div className="w-full max-w-7xl mx-auto">
        <SalaryCalculator 
          onNavigate={handleNavigate}
          initialState={stateCode}
          customTitle={`Salary Tax Calculator - ${stateName}`}
        />
      </div>
    </SiteShell>
  );
}
