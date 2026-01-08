import React from 'react';
import type { GetStaticProps } from 'next';
import blsData from '../../data/bls_data.json';
import hudData from '../../data/hud_data.json';

interface BlsEntry {
  city: string;
  citySlug: string;
  medianSalary: number;
  netPay: number;
}

interface HudEntry {
  citySlug: string;
  medianAnnualRent: number;
}

export interface CityTaxData {
  city: string;
  citySlug: string;
  medianSalary: number;
  netPay: number;
  medianAnnualRent: number;
  discretionaryIncome: number;
  summary: string;
  jsonLd: Record<string, unknown>;
}

export const generateSummary = (city: string, salary: number, netPay: number, rent: number) => {
  const rentPressure = salary > 0 ? Math.max(0, (rent / salary) * 100) : 0;
  const disposableRatio = salary > 0 ? Math.max(0, ((netPay - rent) / salary) * 100) : 0;
  const variants = [
    `Despite a gross salary of $${salary.toLocaleString()}, the cost of living in ${city} trims real purchasing power by ${Math.round(
      100 - disposableRatio,
    )}%.`,
    `${city} earners taking home about $${netPay.toLocaleString()} annually see roughly ${Math.round(
      rentPressure,
    )}% of their gross pay committed to median rent.`,
    `After rent, a typical ${city} salary leaves an estimated $${Math.max(
      netPay - rent,
      0,
    ).toLocaleString()} in discretionary income each year.`,
  ];
  const selector = Math.abs(Math.floor(salary)) % variants.length;
  return variants[selector];
};

export const getStaticProps: GetStaticProps<{ cityTaxData: CityTaxData | null }> = async (context) => {
  const citySlug = context.params?.citySlug;
  if (typeof citySlug !== 'string') {
    return { notFound: true };
  }

  const blsEntry = (blsData as BlsEntry[]).find((entry) => entry.citySlug === citySlug);
  const hudEntry = (hudData as HudEntry[]).find((entry) => entry.citySlug === citySlug);

  if (!blsEntry || !hudEntry) {
    return { notFound: true };
  }

  const discretionaryIncome = blsEntry.netPay - hudEntry.medianAnnualRent;
  const summary = generateSummary(
    blsEntry.city,
    blsEntry.medianSalary,
    blsEntry.netPay,
    hudEntry.medianAnnualRent,
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${blsEntry.city} Salary Tax & Cost of Living Analysis`,
    description: summary,
    provider: {
      '@type': 'Organization',
      name: 'QuantCurb',
    },
  };

  return {
    props: {
      cityTaxData: {
        city: blsEntry.city,
        citySlug: blsEntry.citySlug,
        medianSalary: blsEntry.medianSalary,
        netPay: blsEntry.netPay,
        medianAnnualRent: hudEntry.medianAnnualRent,
        discretionaryIncome,
        summary,
        jsonLd,
      },
    },
  };
};

const SalaryTaxCityPage = () => {
  return (
    <main>
      <h1>Salary Tax City Page</h1>
    </main>
  );
};

export default SalaryTaxCityPage;
