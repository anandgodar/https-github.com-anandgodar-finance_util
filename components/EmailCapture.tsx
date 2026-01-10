import React, { useState } from 'react';

interface EmailCaptureProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSuccess?: () => void;
  className?: string;
  leadMagnet?: {
    title: string;
    description: string;
  };
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  title = "Get Free Financial Resources",
  description = "Subscribe to get exclusive financial guides, calculator tips, and money-saving strategies delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Free",
  onSuccess,
  className = "",
  leadMagnet
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Integrate with email service (Mailchimp/ConvertKit)
      // For now, we'll store in localStorage and log to console
      const subscribers = JSON.parse(localStorage.getItem('quantcurb_subscribers') || '[]');
      subscribers.push({
        email,
        timestamp: new Date().toISOString(),
        source: window.location.pathname,
        leadMagnet: leadMagnet?.title || 'general'
      });
      localStorage.setItem('quantcurb_subscribers', JSON.stringify(subscribers));

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSuccess(true);
      setEmail('');
      
      if (onSuccess) {
        onSuccess();
      }

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'email_capture', {
          event_category: 'lead_generation',
          event_label: leadMagnet?.title || 'general',
          value: 1
        });
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Email capture error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center ${className}`}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-emerald-900 text-lg mb-2">Successfully Subscribed!</h3>
        <p className="text-emerald-800 text-sm">
          Check your email for confirmation and your free resource.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 md:p-8 ${className}`}>
      {leadMagnet && (
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold mb-2">
            🎁 Free Download
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-1">{leadMagnet.title}</h3>
          <p className="text-slate-600 text-sm">{leadMagnet.description}</p>
        </div>
      )}
      
      <h3 className="font-bold text-slate-900 text-xl mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder={placeholder}
            className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            disabled={isSubmitting}
          />
          {error && (
            <p className="text-red-600 text-xs mt-2 font-medium">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </button>
      </form>

      <p className="text-xs text-slate-500 mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default EmailCapture;
