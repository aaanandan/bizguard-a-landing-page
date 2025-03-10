// interface AnalyticsEvent {
//   name: string;
//   properties?: Record<string, string | number | boolean>;
// }

interface AnalyticsData {
  userId?: string;
  sessionId?: string;
  timestamp: number;
  eventName: string;
  properties: Record<string, string | number | boolean>;
}

interface UserProperties {
  [key: string]: string | number | boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (event: any): void => {
  try {
    const analyticsData: AnalyticsData = {
      timestamp: Date.now(),
      eventName: event.name,
      properties: event.properties || {}
    };
    
    console.log('Analytics Event:', analyticsData);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.name, event.properties);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const setUserProperties = (properties: UserProperties): void => {
  try {
    console.log('Setting user properties:', properties);
    // ... implementation
  } catch (error) {
    console.error('Error setting user properties:', error);
  }
};

export const validateAnalyticsData = (data: AnalyticsData): boolean => {
  return (
    typeof data.eventName === 'string' &&
    typeof data.timestamp === 'number' &&
    (!data.userId || typeof data.userId === 'string') &&
    (!data.sessionId || typeof data.sessionId === 'string')
  );
}; 