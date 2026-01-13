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
        return 'min-h-[90px] min-w-[728px]';
      case 'square':
        return 'min-h-[250px] min-w-[250px]';
      default:
        return 'min-h-[250px] w-full';
    }
  };

  // Placeholder ad (will be replaced with AdSense when approved)
  if (!adUnitId) {
    return (
      <div
        ref={adRef}
        className={`bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center ${getSizeClasses()} ${className}`}
      >
        <div className="text-center p-4">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Advertisement</p>
          <p className="text-xs text-slate-400">Ad space reserved</p>
          <p className="text-[10px] text-slate-400 mt-1">(AdSense integration pending)</p>
        </div>
      </div>
    );
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
          data-ad-client="ca-pub-XXXXXXXXXX" // Replace with actual AdSense publisher ID
          data-ad-slot={adUnitId}
          data-ad-format={size === 'responsive' ? 'auto' : 'rectangle'}
          data-full-width-responsive={size === 'responsive' ? 'true' : 'false'}
        />
      )}
    </div>
  );
};

export default AdPlacement;
