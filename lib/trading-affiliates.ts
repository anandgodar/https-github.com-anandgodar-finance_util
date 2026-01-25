/**
 * High-Value Trading Platform Affiliate Partnerships
 *
 * These partnerships can generate $150-$1,850+ per qualified referral,
 * making them potentially more lucrative than thousands of ad pageviews.
 *
 * IMPORTANT: Replace placeholder URLs with actual affiliate tracking links
 * once partnerships are established with each platform.
 *
 * Revenue Potential (Based on Industry Analysis):
 * - Trading Platform CPA: $150-$1,850 per funded account
 * - Prop Trading Firms: 8-25% recurring commission on challenge fees
 * - Brokerage Referrals: $50-$500+ per funded account
 * - Robo-Advisors: $25-$100 per signup, some offer AUM-based recurring
 *
 * @see https://quantcurb.com/blog/ for integration points
 */

import { AffiliateLink } from '../components/AffiliateBanner';

// ============================================================================
// FOREX & CFD TRADING PLATFORMS (Highest CPA potential: $150-$1,850)
// ============================================================================

export const forexTradingPlatforms: AffiliateLink[] = [
  {
    id: 'exness',
    title: 'Exness',
    description: 'Ultra-low spreads, instant withdrawals, and high leverage trading.',
    url: 'https://www.exness.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '💹',
    badge: 'Top Rated',
    cpa: 'Up to $1,850',
    commission: 'CPA model - Up to $1,850 per qualified trader'
  },
  {
    id: 'xm',
    title: 'XM Trading',
    description: 'Multi-asset broker with 1000+ instruments and educational resources.',
    url: 'https://www.xm.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '📊',
    badge: 'Popular',
    cpa: 'Up to $1,000',
    commission: 'CPA model - Up to $1,000 per qualified client'
  },
  {
    id: 'vantage',
    title: 'Vantage FX',
    description: 'ECN trading with raw spreads and advanced trading tools.',
    url: 'https://www.vantagemarkets.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '⚡',
    cpa: 'Up to $800',
    revShare: '$8/lot',
    commission: 'Hybrid - $800 CPA or $8/lot RevShare'
  },
  {
    id: 'avatrade',
    title: 'AvaTrade',
    description: 'Regulated broker with copy trading and multiple platforms.',
    url: 'https://www.avatrade.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '🌐',
    badge: 'Established',
    commission: 'Flexible CPA, RevShare, and Hybrid models'
  },
  {
    id: 'ic-markets',
    title: 'IC Markets',
    description: 'True ECN broker with tight spreads and fast execution.',
    url: 'https://www.icmarkets.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '🏦',
    commission: 'Competitive CPA and RevShare available'
  }
];

// ============================================================================
// PROPRIETARY TRADING FIRMS (8-25% recurring commission)
// ============================================================================

export const propTradingFirms: AffiliateLink[] = [
  {
    id: 'ftmo',
    title: 'FTMO',
    description: 'Leading prop firm offering up to $400K funded accounts after passing challenge.',
    url: 'https://ftmo.com/', // Replace with affiliate tracking link
    category: 'prop_trading',
    icon: '🏆',
    badge: 'Industry Leader',
    revShare: '10-15%',
    commission: 'Recurring 10-15% on challenge fees'
  },
  {
    id: 'topstep',
    title: 'TopStep',
    description: 'Futures trading combine with path to funded trading account.',
    url: 'https://www.topstep.com/', // Replace with affiliate tracking link
    category: 'prop_trading',
    icon: '📈',
    commission: 'Competitive recurring commissions on subscriptions'
  },
  {
    id: 'the5ers',
    title: 'The5ers',
    description: 'Instant funding available with profit-sharing up to 100%.',
    url: 'https://the5ers.com/', // Replace with affiliate tracking link
    category: 'prop_trading',
    icon: '🎯',
    revShare: '8-20%',
    commission: '8-20% recurring on program purchases'
  },
  {
    id: 'funded-next',
    title: 'Funded Next',
    description: 'Express model and stellar challenges with up to 90% profit split.',
    url: 'https://fundednext.com/', // Replace with affiliate tracking link
    category: 'prop_trading',
    icon: '🚀',
    commission: 'Competitive affiliate program with recurring payouts'
  },
  {
    id: 'myforexfunds',
    title: 'My Forex Funds',
    description: 'Flexible evaluation programs with instant withdrawals.',
    url: 'https://myforexfunds.com/', // Replace with affiliate tracking link
    category: 'prop_trading',
    icon: '💰',
    commission: 'Up to 25% recurring commission'
  }
];

// ============================================================================
// STOCK & OPTIONS BROKERAGES (For Options Strategy Visualizer integration)
// ============================================================================

export const stockBrokerages: AffiliateLink[] = [
  {
    id: 'tastytrade',
    title: 'tastytrade',
    description: 'Options-focused broker with $1 per contract commissions and free education.',
    url: 'https://tastytrade.com/', // Replace with affiliate tracking link
    category: 'brokerage',
    icon: '🍕',
    badge: 'Options Traders',
    commission: 'Per-funded account referral bonus'
  },
  {
    id: 'interactive-brokers',
    title: 'Interactive Brokers',
    description: 'Professional-grade trading platform with global market access.',
    url: 'https://www.interactivebrokers.com/', // Replace with affiliate tracking link
    category: 'brokerage',
    icon: '🌍',
    badge: 'Pro Traders',
    commission: 'Tiered referral program based on trading activity'
  },
  {
    id: 'webull',
    title: 'Webull',
    description: 'Commission-free trading with advanced charting and analysis tools.',
    url: 'https://www.webull.com/', // Replace with affiliate tracking link
    category: 'brokerage',
    icon: '📱',
    badge: 'Popular',
    commission: 'Free stock rewards + cash bonuses for referrals'
  },
  {
    id: 'tradier',
    title: 'Tradier',
    description: 'API-first broker perfect for algorithmic traders and developers.',
    url: 'https://tradier.com/', // Replace with affiliate tracking link
    category: 'brokerage',
    icon: '🔧',
    badge: 'Quant Friendly',
    commission: 'Partner program for qualified referrers'
  },
  {
    id: 'robinhood',
    title: 'Robinhood',
    description: 'User-friendly app with commission-free trading and fractional shares.',
    url: 'https://robinhood.com/', // Replace with affiliate tracking link
    category: 'brokerage',
    icon: '🪶',
    commission: 'Referral rewards program'
  }
];

// ============================================================================
// ROBO-ADVISORS (For passive investors)
// ============================================================================

export const roboAdvisors: AffiliateLink[] = [
  {
    id: 'betterment',
    title: 'Betterment',
    description: 'Automated investing with tax-loss harvesting and goal-based planning.',
    url: 'https://www.betterment.com/', // Replace with affiliate tracking link
    category: 'robo_advisor',
    icon: '🤖',
    badge: 'Top Robo',
    commission: '$25-100 per funded account'
  },
  {
    id: 'wealthfront',
    title: 'Wealthfront',
    description: 'Cash account with high APY plus automated investment management.',
    url: 'https://www.wealthfront.com/', // Replace with affiliate tracking link
    category: 'robo_advisor',
    icon: '💎',
    commission: 'Referral bonuses for new accounts'
  },
  {
    id: 'acorns',
    title: 'Acorns',
    description: 'Micro-investing platform that rounds up spare change to invest.',
    url: 'https://www.acorns.com/', // Replace with affiliate tracking link
    category: 'robo_advisor',
    icon: '🌰',
    badge: 'Beginners',
    commission: 'Per signup referral bonuses'
  },
  {
    id: 'm1-finance',
    title: 'M1 Finance',
    description: 'Hybrid robo-advisor with customizable portfolios and no fees.',
    url: 'https://m1.com/', // Replace with affiliate tracking link
    category: 'robo_advisor',
    icon: '📐',
    commission: 'Partner program with competitive payouts'
  }
];

// ============================================================================
// CRYPTO TRADING (For Crypto Tax Loss Harvester integration)
// ============================================================================

export const cryptoPlatforms: AffiliateLink[] = [
  {
    id: 'coinbase',
    title: 'Coinbase',
    description: 'Most trusted US crypto exchange with easy onboarding.',
    url: 'https://www.coinbase.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '🪙',
    badge: 'US Friendly',
    commission: '50% of trading fees for 3 months'
  },
  {
    id: 'kraken',
    title: 'Kraken',
    description: 'Security-focused exchange with staking and futures trading.',
    url: 'https://www.kraken.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '🦑',
    commission: '20% of trading fees perpetually'
  },
  {
    id: 'gemini',
    title: 'Gemini',
    description: 'Regulated exchange with ActiveTrader for advanced users.',
    url: 'https://www.gemini.com/', // Replace with affiliate tracking link
    category: 'trading_platform',
    icon: '♊',
    commission: 'Referral rewards in crypto'
  }
];

// ============================================================================
// TRADING EDUCATION (For Academy integration)
// ============================================================================

export const tradingEducation: AffiliateLink[] = [
  {
    id: 'quantinsti',
    title: 'QuantInsti',
    description: 'Professional algorithmic trading courses and certifications.',
    url: 'https://www.quantinsti.com/', // Replace with affiliate tracking link
    category: 'education',
    icon: '🎓',
    badge: 'Quant Courses',
    commission: 'Revenue share on course enrollments'
  },
  {
    id: 'udemy-trading',
    title: 'Trading Courses on Udemy',
    description: 'Wide selection of affordable trading and investing courses.',
    url: 'https://www.udemy.com/topic/stock-trading/', // Replace with affiliate tracking link
    category: 'education',
    icon: '📚',
    commission: 'Per sale commission via Udemy affiliate program'
  },
  {
    id: 'coursera-finance',
    title: 'Coursera Finance',
    description: 'University-level courses in quantitative finance and trading.',
    url: 'https://www.coursera.org/browse/business/finance', // Replace with affiliate tracking link
    category: 'education',
    icon: '🏛️',
    commission: 'Commission on course and specialization signups'
  }
];

// ============================================================================
// EXISTING FINANCIAL TOOLS (For Calculator integrations)
// ============================================================================

export const financialTools: AffiliateLink[] = [
  {
    id: 'credit-karma',
    title: 'Credit Karma',
    description: 'Free credit scores and personalized financial recommendations.',
    url: 'https://www.creditkarma.com/', // Replace with affiliate tracking link
    category: 'credit_card',
    icon: '💳',
    badge: 'Free',
    commission: 'CPA for product signups via platform'
  },
  {
    id: 'turbotax',
    title: 'TurboTax',
    description: 'America\'s #1 tax preparation software for easy filing.',
    url: 'https://turbotax.intuit.com/', // Replace with affiliate tracking link
    category: 'tax',
    icon: '📋',
    badge: 'Tax Season',
    commission: 'Seasonal commission per completed filing'
  },
  {
    id: 'lendingtree',
    title: 'LendingTree',
    description: 'Compare rates for mortgages, loans, and credit cards.',
    url: 'https://www.lendingtree.com/', // Replace with affiliate tracking link
    category: 'mortgage',
    icon: '🏠',
    commission: 'Per lead/application commission'
  },
  {
    id: 'nerdwallet',
    title: 'NerdWallet',
    description: 'Financial comparison tools for credit cards, loans, and insurance.',
    url: 'https://www.nerdwallet.com/', // Replace with affiliate tracking link
    category: 'investment',
    icon: '🤓',
    commission: 'Per product signup through links'
  },
  {
    id: 'smartasset',
    title: 'SmartAsset',
    description: 'Financial advisor matching and comprehensive calculators.',
    url: 'https://www.smartasset.com/', // Replace with affiliate tracking link
    category: 'investment',
    icon: '🧠',
    badge: 'Advisor Match',
    commission: 'Per qualified advisor lead'
  }
];

// ============================================================================
// CURATED COLLECTIONS BY PAGE/CALCULATOR TYPE
// ============================================================================

/**
 * Affiliates for Options Strategy Visualizer page
 */
export const optionsPageAffiliates = [
  ...stockBrokerages.filter(b => ['tastytrade', 'interactive-brokers', 'webull'].includes(b.id)),
  ...tradingEducation.filter(e => e.id === 'quantinsti')
];

/**
 * Affiliates for Crypto Tax Loss Harvester page
 */
export const cryptoTaxAffiliates = [
  ...cryptoPlatforms,
  ...financialTools.filter(t => t.id === 'turbotax')
];

/**
 * Affiliates for FIRE Calculator page
 */
export const fireCalculatorAffiliates = [
  ...roboAdvisors,
  ...financialTools.filter(t => ['nerdwallet', 'smartasset'].includes(t.id))
];

/**
 * Affiliates for Mortgage Calculator page
 */
export const mortgageCalculatorAffiliates = [
  ...financialTools.filter(t => ['lendingtree', 'credit-karma'].includes(t.id))
];

/**
 * Affiliates for trading/quant-focused content
 */
export const quantTradingAffiliates = [
  ...forexTradingPlatforms.slice(0, 3),
  ...propTradingFirms.slice(0, 3),
  ...stockBrokerages.filter(b => ['tastytrade', 'interactive-brokers', 'tradier'].includes(b.id))
];

/**
 * All high-value trading affiliates combined
 */
export const allTradingAffiliates = [
  ...forexTradingPlatforms,
  ...propTradingFirms,
  ...stockBrokerages,
  ...cryptoPlatforms
];

/**
 * Complete affiliate catalog
 */
export const allAffiliates = [
  ...forexTradingPlatforms,
  ...propTradingFirms,
  ...stockBrokerages,
  ...roboAdvisors,
  ...cryptoPlatforms,
  ...tradingEducation,
  ...financialTools
];

// ============================================================================
// REVENUE PROJECTION HELPERS
// ============================================================================

/**
 * Estimated monthly revenue at different traffic levels with diversified monetization
 * Based on analysis: 40% ads, 30% affiliate, 20% products, 10% sponsored
 *
 * @param monthlyPageviews - Monthly pageview count
 * @param rpmDisplay - Revenue per mille for display ads (default $12 for finance)
 * @param affiliateConversionRate - Percentage of visitors who convert (default 0.5%)
 * @param avgAffiliateCommission - Average commission per conversion (default $75)
 */
export function estimateMonthlyRevenue(
  monthlyPageviews: number,
  rpmDisplay: number = 12,
  affiliateConversionRate: number = 0.005,
  avgAffiliateCommission: number = 75
): {
  displayAds: number;
  affiliate: number;
  products: number;
  sponsored: number;
  total: number;
} {
  const displayAds = (monthlyPageviews / 1000) * rpmDisplay;
  const affiliateConversions = monthlyPageviews * affiliateConversionRate;
  const affiliate = affiliateConversions * avgAffiliateCommission;

  // Products and sponsored are proportional estimates
  const products = displayAds * 0.5; // 20% of total ≈ half of ads
  const sponsored = displayAds * 0.25; // 10% of total ≈ quarter of ads

  return {
    displayAds: Math.round(displayAds),
    affiliate: Math.round(affiliate),
    products: Math.round(products),
    sponsored: Math.round(sponsored),
    total: Math.round(displayAds + affiliate + products + sponsored)
  };
}
