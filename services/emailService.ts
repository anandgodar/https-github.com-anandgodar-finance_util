/**
 * Email Service Integration
 * 
 * This service handles email subscriptions and lead capture.
 * Currently uses localStorage as a placeholder.
 * 
 * TODO: Integrate with one of the following:
 * - Mailchimp API
 * - ConvertKit API
 * - SendGrid API
 * - Custom backend endpoint
 */

export interface Subscriber {
  email: string;
  timestamp: string;
  source: string;
  leadMagnet?: string;
  tags?: string[];
}

export interface EmailServiceConfig {
  apiKey?: string;
  listId?: string;
  endpoint?: string;
}

class EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig = {}) {
    this.config = config;
  }

  /**
   * Subscribe an email to the mailing list
   */
  async subscribe(email: string, source: string, leadMagnet?: string, tags: string[] = []): Promise<boolean> {
    try {
      // TODO: Replace with actual API call
      // Example for Mailchimp:
      // const response = await fetch(`https://${this.config.endpoint}.api.mailchimp.com/3.0/lists/${this.config.listId}/members`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${this.config.apiKey}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email_address: email,
      //     status: 'subscribed',
      //     tags: tags,
      //     merge_fields: {
      //       SOURCE: source,
      //       LEADMAGNET: leadMagnet || ''
      //     }
      //   })
      // });

      // For now, store in localStorage
      const subscribers = this.getSubscribers();
      const subscriber: Subscriber = {
        email,
        timestamp: new Date().toISOString(),
        source,
        leadMagnet,
        tags
      };

      // Check if email already exists
      if (subscribers.some(s => s.email === email)) {
        console.log('Email already subscribed');
        return true;
      }

      subscribers.push(subscriber);
      localStorage.setItem('quantcurb_subscribers', JSON.stringify(subscribers));

      // Track in analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'email_subscription', {
          event_category: 'lead_generation',
          event_label: leadMagnet || 'general',
          value: 1
        });
      }

      return true;
    } catch (error) {
      console.error('Email subscription error:', error);
      return false;
    }
  }

  /**
   * Get all subscribers from localStorage (for development/testing)
   */
  getSubscribers(): Subscriber[] {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(localStorage.getItem('quantcurb_subscribers') || '[]');
    } catch {
      return [];
    }
  }

  /**
   * Export subscribers (for migration to real email service)
   */
  exportSubscribers(): Subscriber[] {
    return this.getSubscribers();
  }

  /**
   * Clear all subscribers (for testing)
   */
  clearSubscribers(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('quantcurb_subscribers');
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

// Export for future configuration
export const configureEmailService = (config: EmailServiceConfig) => {
  return new EmailService(config);
};
