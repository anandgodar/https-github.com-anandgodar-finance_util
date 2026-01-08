import React, { useMemo, useState } from 'react';

type AssetRow = {
  id: string;
  assetName: string;
  purchasePrice: number;
  currentPrice: number;
  quantity: number;
};

const TAX_BRACKETS = [0.22, 0.35];

const CryptoTaxLossHarvester: React.FC = () => {
  const [rows, setRows] = useState<AssetRow[]>([
    {
      id: 'row-1',
      assetName: 'BTC',
      purchasePrice: 48000,
      currentPrice: 42000,
      quantity: 0.5,
    },
  ]);
  const [taxBracket, setTaxBracket] = useState<number>(TAX_BRACKETS[0]);

  const updateRow = (id: string, field: keyof AssetRow, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: field === 'assetName' ? value : Number(value),
            }
          : row,
      ),
    );
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: `row-${prev.length + 1}`,
        assetName: '',
        purchasePrice: 0,
        currentPrice: 0,
        quantity: 0,
      },
    ]);
  };

  const calculations = useMemo(() => {
    const rowData = rows.map((row) => {
      const loss =
        row.currentPrice < row.purchasePrice
          ? (row.purchasePrice - row.currentPrice) * row.quantity
          : 0;
      return { ...row, loss };
    });
    const totalLoss = rowData.reduce((sum, row) => sum + row.loss, 0);
    const totalSavings = totalLoss * taxBracket;
    return { rowData, totalLoss, totalSavings };
  }, [rows, taxBracket]);

  const formatCurrency = (value: number) =>
    value.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-24">
      <header className="space-y-3">
        <p className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em]">Crypto Tax Desk</p>
        <h2 className="text-4xl font-black text-slate-900">
          Crypto <span className="text-emerald-500">Tax Loss Harvester</span>
        </h2>
        <p className="text-slate-500 max-w-3xl">
          Simulate harvesting losses across your crypto positions to estimate potential tax bill
          reductions based on your bracket.
        </p>
      </header>

      <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio Loss Table</p>
            <p className="text-sm text-slate-500 mt-1">Enter positions with unrealized losses.</p>
          </div>
          <button
            type="button"
            onClick={addRow}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-widest"
          >
            Add Asset
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] tracking-[0.2em]">
              <tr>
                <th className="text-left px-6 py-3 font-bold">Asset Name</th>
                <th className="text-right px-6 py-3 font-bold">Purchase Price</th>
                <th className="text-right px-6 py-3 font-bold">Current Price</th>
                <th className="text-right px-6 py-3 font-bold">Quantity</th>
                <th className="text-right px-6 py-3 font-bold">Harvestable Loss</th>
                <th className="text-right px-6 py-3 font-bold">Tax Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {calculations.rowData.map((row) => {
                const rowSavings = row.loss * taxBracket;
                const hasLoss = row.loss > 0;
                return (
                  <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <input
                        value={row.assetName}
                        onChange={(event) => updateRow(row.id, 'assetName', event.target.value)}
                        placeholder="ETH"
                        className="w-full bg-transparent border border-slate-200 rounded-xl px-3 py-2"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        value={row.purchasePrice}
                        onChange={(event) => updateRow(row.id, 'purchasePrice', event.target.value)}
                        className="w-28 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        value={row.currentPrice}
                        onChange={(event) => updateRow(row.id, 'currentPrice', event.target.value)}
                        className="w-28 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2"
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(event) => updateRow(row.id, 'quantity', event.target.value)}
                        className="w-24 text-right bg-transparent border border-slate-200 rounded-xl px-3 py-2"
                      />
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-700">
                      {formatCurrency(row.loss)}
                    </td>
                    <td
                      className={`px-6 py-4 text-right font-bold ${
                        hasLoss ? 'text-emerald-500' : 'text-slate-400'
                      }`}
                    >
                      {formatCurrency(rowSavings)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid md:grid-cols-[1.5fr_1fr] gap-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Total Harvestable Loss</p>
          <p className="mt-4 text-4xl font-black text-emerald-400">
            {formatCurrency(calculations.totalLoss)}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Total unrealized losses across all assets entered.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tax Bracket</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {TAX_BRACKETS.map((bracket) => (
                <button
                  key={bracket}
                  type="button"
                  onClick={() => setTaxBracket(bracket)}
                  className={`py-3 rounded-xl text-sm font-bold ${
                    taxBracket === bracket
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {(bracket * 100).toFixed(0)}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Estimated Tax Bill Reduction</p>
            <p
              className={`mt-4 text-3xl font-black ${
                calculations.totalSavings > 0 ? 'text-emerald-500' : 'text-slate-400'
              }`}
            >
              {formatCurrency(calculations.totalSavings)}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-700 font-semibold">
            Lock in these savings with CoinLedger
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoTaxLossHarvester;
