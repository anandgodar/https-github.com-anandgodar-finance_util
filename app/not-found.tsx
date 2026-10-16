import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist. Browse QuantCurb calculators and guides instead.',
  robots: { index: false, follow: true }
};

const popular = [
  { href: '/salary-tax-estimator/', label: 'Paycheck & Salary Tax Calculator' },
  { href: '/mortgage-payment-calculator/', label: 'Mortgage Payment Calculator' },
  { href: '/early-retirement-fire-planner/', label: 'FIRE Retirement Calculator' },
  { href: '/quarterly-estimated-tax-calculator/', label: 'Quarterly Estimated Tax Calculator' },
  { href: '/credit-card-debt-strategist/', label: 'Credit Card Payoff Calculator' },
  { href: '/blog/', label: 'Financial Planning Guides' }
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-4">404</p>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Page not found</h1>
        <p className="text-slate-600 mb-8">
          This page may have moved. Try one of our most-used calculators:
        </p>
        <ul className="space-y-3 text-left">
          {popular.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl bg-white border border-slate-200 px-5 py-4 font-bold text-slate-800 hover:border-indigo-400 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="inline-block mt-8 font-bold text-indigo-600 hover:underline">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
