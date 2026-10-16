import React, { useEffect, useRef } from 'react';

export type AdSize = 'responsive' | 'rectangle' | 'banner' | 'square';
export type AdPosition = 'top' | 'middle' | 'bottom' | 'sidebar';

interface AdPlacementProps {
  size?: AdSize;
  position?: AdPosition;
  className?: string;
  lazy?: boolean;
  adUnitId?: string; // For AdSense - will be set when approved
}

const AdPlacement: React.FC<AdPlacementProps> = ({
  size = 'responsive',
  position = 'middle',
  className = '',
  lazy = true,
  adUnitId
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(!lazy);

  useEffect(() => {
    if (!lazy) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  useEffect(() => {
    if (!isVisible || !adUnitId || typeof window === 'undefined') return;

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle = adsbygoogle;
      adsbygoogle.push({});
    } catch (error) {
      console.warn('AdSense failed to initialize', error);
    }
  }, [isVisible, adUnitId]);

  const getSizeClasses = () => {
    switch (size) {
      case 'rectangle':
        return 'min-h-[250px] min-w-[300px]';
      case 'banner':
        // Full width on mobile; capped at the 728px leaderboard size on desktop.
        return 'min-h-[90px] w-full max-w-[728px] mx-auto';
      case 'square':
        return 'min-h-[250px] min-w-[250px]';
      default:
        return 'min-h-[250px] w-full';
    }
  };

  // No ad unit configured: render nothing. Empty "ad space reserved" boxes make
  // the site look unfinished to visitors and AdSense reviewers; Auto ads (the
  // adsbygoogle.js script in app/layout.tsx) can still place ads on the page.
  if (!adUnitId) {
    return null;
  }

  return (
    <div
      ref={adRef}
      className={`ad-container ${getSizeClasses()} ${className}`}
      data-ad-size={size}
      data-ad-position={position}
    >
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3959097578570952"
          data-ad-slot={adUnitId}
          data-ad-format={size === 'responsive' ? 'auto' : 'rectangle'}
          data-full-width-responsive={size === 'responsive' ? 'true' : 'false'}
        />
      )}
    </div>
  );
};

export default AdPlacement;
