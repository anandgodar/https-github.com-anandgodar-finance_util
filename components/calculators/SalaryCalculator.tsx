'use client';

import React, { useMemo, useState } from 'react';

const SalaryCalculator: React.FC = () => {
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [payPeriods, setPayPeriods] = useState(26);

  const perPeriodPay = useMemo(() => {
    if (!payPeriods) return 0;
    return annualSalary / payPeriods;
  }, [annualSalary, payPeriods]);

  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Salary Calculator</h2>
        <p className="text-sm text-slate-600">
          Estimate your pay per period based on annual salary and pay frequency.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Annual Salary
          <input
            type="number"
            min={0}
            value={annualSalary}
            onChange={(event) => setAnnualSalary(Number(event.target.value))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Pay Periods / Year
          <input
            type="number"
            min={1}
            value={payPeriods}
            onChange={(event) => setPayPeriods(Number(event.target.value))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
      </div>
      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-sm text-slate-600">Estimated Pay Per Period</p>
        <p className="text-2xl font-semibold text-slate-900">
          ${perPeriodPay.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};

export default SalaryCalculator;
