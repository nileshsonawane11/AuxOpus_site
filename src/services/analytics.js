// src/services/analytics.js
class AnalyticsService {
  constructor() {
    this.initialized = false;
    this.consent = null;
    this.measurementId = null;
    this.queue = [];
  }

  initialize(measurementId) {
    if (this.initialized) return;
    
    this.measurementId = measurementId;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false,
    });

    this.initialized = true;
    console.log('Google Analytics initialized');
  }

  setConsent(consent) {
    this.consent = consent;
    if (consent?.analytics && this.measurementId) {
      this.flushQueue();
    }
  }

  sendPageView(path) {
    if (!this.initialized || !this.consent?.analytics) {
      this.queue.push({ type: 'pageview', path });
      return;
    }
    
    window.gtag('event', 'page_view', {
      page_path: path || window.location.pathname + window.location.search,
    });
  }

  trackEvent(category, action, label, value) {
    if (!this.initialized || !this.consent?.analytics) {
      this.queue.push({ type: 'event', category, action, label, value });
      return;
    }
    
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  flushQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      switch (event.type) {
        case 'pageview':
          this.sendPageView(event.path);
          break;
        case 'event':
          this.trackEvent(event.category, event.action, event.label, event.value);
          break;
      }
    }
  }
}

export const analyticsService = new AnalyticsService();