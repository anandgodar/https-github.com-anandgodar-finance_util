'use client';

import React from 'react';
import DividendReinvestmentCalculator from '../../../components/DividendReinvestmentCalculator';
import { EmbeddedTool } from '../../../components/ToolTitle';

type Props = {
  dividendYield: number;
  growthRate: number;
};

export default function TickerCalculatorClient({ dividendYield, growthRate }: Props) {
  return (
    <EmbeddedTool>
      <DividendReinvestmentCalculator
        initialPrincipal={10000}
        initialTimeHorizon={20}
        initialDividendYield={dividendYield}
        initialStockAppreciation={growthRate}
      />
    </EmbeddedTool>
  );
}
