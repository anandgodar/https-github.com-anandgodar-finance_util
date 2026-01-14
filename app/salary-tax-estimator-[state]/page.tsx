import React from 'react';
import { usStates, getStateBySlug, getStateByAbbreviation } from '../../lib/state-data';
import RedirectClient from './RedirectClient';

type PageProps = {
  params: {
    state?: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug
  }));
}

export function generateMetadata({ params }: PageProps) {
  const stateSlug = params.state?.toLowerCase();
  const stateData = stateSlug ? getStateBySlug(stateSlug) : undefined;

  if (!stateData) {
    return {
      title: 'Salary Tax Calculator',
      description: 'Calculate your take-home pay after taxes.'
    };
  }

  return {
    title: `${stateData.name} Paycheck Calculator 2026 - Calculate Take Home Pay`,
    description: `Calculate your true net pay in ${stateData.name}. Updated for 2026 tax brackets. ${stateData.description}`,
    keywords: `${stateData.name} paycheck calculator, ${stateData.name} salary calculator, take home pay ${stateData.name}, ${stateData.name} tax calculator, ${stateData.name} income tax, net pay calculator ${stateData.name}`,
    alternates: {
      canonical: `https://quantcurb.com/salary-tax-estimator/${stateData.slug}`
    },
    robots: {
      index: false, // Don't index redirect pages
      follow: true, // Follow links for SEO
      noarchive: true, // Don't archive redirect pages
      nosnippet: true // Don't show snippets
    }
  };
}

export default function OldStateSalaryPage({ params }: PageProps) {
  const stateSlug = params.state?.toLowerCase();
  
  // First try to find by slug
  let stateData = stateSlug ? getStateBySlug(stateSlug) : undefined;
  
  // If not found, try to find by abbreviation (for legacy aliases like 'dc')
  if (!stateData && stateSlug) {
    stateData = getStateByAbbreviation(stateSlug);
  }

  if (!stateData) {
    // If state not found, redirect to main calculator
    return <RedirectClient to="/salary-tax-estimator" />;
  }

  // Redirect to new nested route structure
  return <RedirectClient to={`/salary-tax-estimator/${stateData.slug}`} />;
}
