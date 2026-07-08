// src/services/tracking.js
class TrackingService {
  constructor() {
    this.consent = null;
    this.handlers = [];
    this.queue = [];
  }

  setConsent(consent) {
    this.consent = consent;
    this.notifyHandlers();
    
    if (consent?.analytics) {
      this.processQueue();
    }
  }

  subscribe(handler) {
    this.handlers.push(handler);
    handler(this.consent);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  notifyHandlers() {
    this.handlers.forEach(handler => handler(this.consent));
  }

  track(eventName, data = {}) {
    if (!this.consent) {
      this.queue.push({ eventName, data });
      console.log('Event queued:', eventName, data);
      return;
    }

    if (!this.consent.analytics) {
      console.log('Tracking blocked: No analytics consent', eventName);
      return;
    }

    this.sendToServices(eventName, data);
  }

  sendToServices(eventName, data) {
    if (window.gtag) {
      window.gtag('event', eventName, data);
    }

    if (window.clarity) {
      window.clarity('event', eventName, data);
    }

    if (window.fbq && this.consent?.marketing) {
      window.fbq('track', eventName, data);
    }

    console.log('Tracking sent:', eventName, data);
  }

  trackPageView(path) {
    if (!this.consent?.analytics) return;
    this.track('page_view', { page_path: path || window.location.pathname });
  }

  processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      this.sendToServices(event.eventName, event.data);
    }
  }
}

export const trackingService = new TrackingService();