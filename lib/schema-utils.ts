/**
 * Schema.org Structured Data Utilities
 *
 * Enhanced schema markup for better SERP visibility in finance/YMYL content.
 * These schemas help Google understand content quality and E-E-A-T signals.
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface AuthorInfo {
  name: string;
  url?: string;
  jobTitle?: string;
  credentials?: string[];
  sameAs?: string[];
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: AuthorInfo;
  image?: string;
  wordCount?: number;
  category?: string;
}

interface CalculatorSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

// ============================================================================
// AUTHOR SCHEMA (Critical for E-E-A-T in Finance/YMYL)
// ============================================================================

/**
 * Default author for QuantCurb content
 * Update with actual team credentials when available
 */
export const defaultAuthor: AuthorInfo = {
  name: 'QuantCurb Editorial Team',
  url: 'https://quantcurb.com/about-quantcurb/',
  jobTitle: 'Financial Content Team',
  sameAs: [
    'https://twitter.com/quantcurb',
    'https://linkedin.com/company/quantcurb'
  ]
};

export function generatePersonSchema(author: AuthorInfo) {
  return {
    '@type': 'Person',
    name: author.name,
    url: author.url,
    jobTitle: author.jobTitle,
    sameAs: author.sameAs || [],
    ...(author.credentials && {
      hasCredential: author.credentials.map(cred => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: cred
      }))
    })
  };
}

// ============================================================================
// ARTICLE SCHEMA (For blog posts)
// ============================================================================

export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    title,
    description,
    url,
    datePublished,
    dateModified,
    author = defaultAuthor,
    image = 'https://quantcurb.com/og-image.png',
    wordCount,
    category = 'Finance'
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: generatePersonSchema(author),
    publisher: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://quantcurb.com/og-image.png',
        width: 1200,
        height: 630
      }
    },
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(wordCount && { wordCount }),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    // Finance-specific: Add citation recommendations
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '.key-takeaways']
    }
  };
}

// ============================================================================
// WEB APPLICATION SCHEMA (For calculators)
// ============================================================================

export function generateCalculatorSchema(props: CalculatorSchemaProps) {
  const {
    name,
    description,
    url,
    category = 'Finance',
    applicationCategory = 'FinanceApplication',
    operatingSystem = 'Any (Web-based)',
    offers = { price: '0', priceCurrency: 'USD' }
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency
    },
    featureList: [
      'Real-time calculations',
      'Mobile responsive',
      'No account required',
      'Privacy focused'
    ],
    category,
    author: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    },
    provider: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    }
  };
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// ============================================================================
// HOW-TO SCHEMA (For guide-style content)
// ============================================================================

export function generateHowToSchema(
  title: string,
  description: string,
  steps: HowToStep[],
  estimatedTime?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    ...(estimatedTime && { totalTime: estimatedTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image
        }
      })
    })),
    tool: {
      '@type': 'HowToTool',
      name: 'QuantCurb Financial Calculators'
    }
  };
}

// ============================================================================
// COLLECTION PAGE SCHEMA (For hub pages)
// ============================================================================

export function generateCollectionSchema(
  name: string,
  description: string,
  url: string,
  itemCount: number,
  items: { name: string; url: string; description: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    numberOfItems: itemCount,
    hasPart: items.map(item => ({
      '@type': 'WebApplication',
      name: item.name,
      url: item.url,
      description: item.description
    })),
    isPartOf: {
      '@type': 'WebSite',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    }
  };
}

// ============================================================================
// FINANCE-SPECIFIC SCHEMAS
// ============================================================================

/**
 * FinancialProduct schema for loan/mortgage calculators
 */
export function generateFinancialProductSchema(
  productType: 'Mortgage' | 'PersonalLoan' | 'CreditCard' | 'Investment',
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name,
    description,
    url,
    category: productType,
    provider: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    },
    // Generic terms - actual calculator provides specific calculations
    feesAndCommissionsSpecification: 'Calculator provides estimates only. Actual terms vary by lender.',
    termsOfService: 'https://quantcurb.com/legal-disclaimer/'
  };
}

/**
 * Review schema for comparison pages
 */
export function generateSoftwareReviewSchema(
  itemReviewed: string,
  rating: number,
  reviewBody: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: itemReviewed,
      applicationCategory: 'FinanceApplication'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody,
    url,
    author: {
      '@type': 'Organization',
      name: 'QuantCurb',
      url: 'https://quantcurb.com'
    },
    datePublished: new Date().toISOString().split('T')[0]
  };
}

// ============================================================================
// HELPER: Combine multiple schemas
// ============================================================================

/**
 * Combine multiple schema objects into a single JSON-LD script content
 */
export function combineSchemas(...schemas: object[]): string {
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0]);
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas.map(schema => {
      // Remove @context from nested schemas to avoid duplication
      const { '@context': _, ...rest } = schema as { '@context'?: string };
      return rest;
    })
  });
}
