import React from 'react';
import AffiliateBanner, { AffiliateLink } from './AffiliateBanner';

interface RecommendedToolsProps {
  calculatorType: 'mortgage' | 'investment' | 'tax' | 'credit_card' | 'retirement' | 'general';
  className?: string;
}

const RecommendedTools: React.FC<RecommendedToolsProps> = ({ calculatorType, className = '' }) => {
  // Placeholder affiliate links - Replace with actual affiliate URLs when approved
  const affiliateLinks: Record<RecommendedToolsProps['calculatorType'], AffiliateLink[]> = {
    mortgage: [
      {
        id: 'lendingtree',
        title: 'LendingTree',
        description: 'Compare mortgage rates from multiple lenders',
        url: 'https://www.lendingtree.com/', // Replace with affiliate URL
        category: 'mortgage',
        icon: '🏦',
        badge: 'Compare Rates',
        commission: 'Up to $500 per lead'
      },
      {
        id: 'credible',
        title: 'Credible',
        description: 'Get pre-approved mortgage offers',
        url: 'https://www.credible.com/', // Replace with affiliate URL
        category: 'mortgage',
        icon: '💳',
        badge: 'Pre-Approval'
      }
    ],
    investment: [
      {
        id: 'robinhood',
        title: 'Robinhood',
        description: 'Commission-free stock trading',
        url: 'https://robinhood.com/', // Replace with affiliate URL
        category: 'investment',
        icon: '📈',
        badge: 'Free Trades',
        commission: '$25-100 per signup'
      },
      {
        id: 'betterment',
        title: 'Betterment',
        description: 'Automated investing and retirement planning',
        url: 'https://www.betterment.com/', // Replace with affiliate URL
        category: 'investment',
        icon: '🤖',
        badge: 'Robo-Advisor'
      }
    ],
    tax: [
      {
        id: 'turbotax',
        title: 'TurboTax',
        description: 'File your taxes online with expert help',
        url: 'https://turbotax.intuit.com/', // Replace with affiliate URL
        category: 'tax',
        icon: '📋',
        badge: 'Tax Filing'
      },
      {
        id: 'hrblock',
        title: 'H&R Block',
        description: 'Professional tax preparation services',
        url: 'https://www.hrblock.com/', // Replace with affiliate URL
        category: 'tax',
        icon: '💼',
        badge: 'Tax Pro'
      }
    ],
    credit_card: [
      {
        id: 'creditkarma',
        title: 'Credit Karma',
        description: 'Free credit scores and credit card recommendations',
        url: 'https://www.creditkarma.com/', // Replace with affiliate URL
        category: 'credit_card',
        icon: '💳',
        badge: 'Free Credit Score'
      },
      {
        id: 'nerdwallet',
        title: 'NerdWallet',
        description: 'Compare credit cards and find the best offers',
        url: 'https://www.nerdwallet.com/', // Replace with affiliate URL
        category: 'credit_card',
        icon: '🧠',
        badge: 'Compare Cards'
      }
    ],
    retirement: [
      {
        id: 'fidelity',
        title: 'Fidelity',
        description: 'Open a retirement account with low fees',
        url: 'https://www.fidelity.com/', // Replace with affiliate URL
        category: 'investment',
        icon: '💎',
        badge: 'Low Fees'
      },
      {
        id: 'vanguard',
        title: 'Vanguard',
        description: 'Low-cost index funds and retirement accounts',
        url: 'https://investor.vanguard.com/', // Replace with affiliate URL
        category: 'investment',
        icon: '📊',
        badge: 'Index Funds'
      }
    ],
    general: [
      {
        id: 'smartasset',
        title: 'SmartAsset',
        description: 'Free financial advisor matching service',
        url: 'https://smartasset.com/', // Replace with affiliate URL
        category: 'other',
        icon: '🎯',
        badge: 'Free Matching'
      }
    ]
  };

  const links = affiliateLinks[calculatorType] || affiliateLinks.general;

  return (
    <AffiliateBanner
      links={links}
      title="Recommended Financial Tools"
      description="These trusted partners can help you achieve your financial goals. We may earn a commission if you sign up (at no extra cost to you)."
      variant="grid"
      className={className}
    />
  );
};

export default RecommendedTools;
