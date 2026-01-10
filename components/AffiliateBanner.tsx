import React from 'react';

export interface AffiliateLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'credit_card' | 'mortgage' | 'investment' | 'tax' | 'insurance' | 'other';
  commission?: string;
  icon?: string;
  badge?: string;
}

interface AffiliateBannerProps {
  links: AffiliateLink[];
  title?: string;
  description?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'grid';
}

const AffiliateBanner: React.FC<AffiliateBannerProps> = ({
  links,
  title = "Recommended Tools",
  description = "These trusted partners can help you achieve your financial goals.",
  className = "",
  variant = 'grid'
}) => {
  const handleClick = (link: AffiliateLink) => {
    // Track affiliate click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: link.id,
        value: 1
      });
    }

    // Store click in localStorage for tracking
    const clicks = JSON.parse(localStorage.getItem('quantcurb_affiliate_clicks') || '[]');
    clicks.push({
      id: link.id,
      url: link.url,
      timestamp: new Date().toISOString(),
      source: window.location.pathname
    });
    localStorage.setItem('quantcurb_affiliate_clicks', JSON.stringify(clicks));

    // Open affiliate link (will be replaced with actual affiliate URLs when approved)
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  const getCategoryColor = (category: AffiliateLink['category']) => {
    const colors = {
      credit_card: 'bg-red-50 border-red-200 text-red-800',
      mortgage: 'bg-blue-50 border-blue-200 text-blue-800',
      investment: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      tax: 'bg-purple-50 border-purple-200 text-purple-800',
      insurance: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      other: 'bg-slate-50 border-slate-200 text-slate-800'
    };
    return colors[category] || colors.other;
  };

  if (variant === 'horizontal') {
    return (
      <div className={`bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 ${className}`}>
        <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link)}
              className={`px-4 py-2 bg-white border-2 rounded-xl font-bold text-sm hover:shadow-lg transition-all ${getCategoryColor(link.category)}`}
            >
              {link.icon && <span className="mr-2">{link.icon}</span>}
              {link.title}
              {link.badge && <span className="ml-2 text-xs">{link.badge}</span>}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`bg-white border border-slate-200 rounded-2xl p-6 ${className}`}>
        <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <div className="space-y-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link)}
              className={`w-full text-left p-4 border-2 rounded-xl hover:shadow-lg transition-all ${getCategoryColor(link.category)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {link.icon && <span className="text-2xl">{link.icon}</span>}
                  <div>
                    <div className="font-bold text-sm">{link.title}</div>
                    {link.description && (
                      <div className="text-xs opacity-75 mt-1">{link.description}</div>
                    )}
                  </div>
                </div>
                <span className="text-xs font-bold">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl p-6 ${className}`}>
      <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link)}
            className={`text-left p-4 border-2 rounded-xl hover:shadow-lg transition-all group ${getCategoryColor(link.category)}`}
          >
            <div className="flex items-start gap-3">
              {link.icon && <span className="text-3xl group-hover:scale-110 transition-transform">{link.icon}</span>}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{link.title}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 bg-white/50 rounded text-xs font-bold">{link.badge}</span>
                  )}
                </div>
                {link.description && (
                  <div className="text-xs opacity-75">{link.description}</div>
                )}
                {link.commission && (
                  <div className="text-xs font-bold mt-2 opacity-60">{link.commission}</div>
                )}
              </div>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center italic">
        We may earn a commission if you sign up through our links (at no extra cost to you).
      </p>
    </div>
  );
};

export default AffiliateBanner;
