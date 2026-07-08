// src/services/gtm.js
import { loadScript } from '../utils/loadScript';

class GTMService {
  constructor() {
    this.initialized = false;
    this.containerId = null;
  }

  initialize(containerId) {
    this.containerId = containerId;
  }

  load(consent) {
    if (this.initialized || !consent?.analytics) return;

    // Load GTM script
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${this.containerId}`)
      .then(() => {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js',
        });
        
        this.initialized = true;
        console.log('GTM loaded successfully');
      })
      .catch(error => {
        console.error('Error loading GTM:', error);
      });
  }

  push(data) {
    if (!this.initialized || !window.dataLayer) return;
    window.dataLayer.push(data);
  }

  trackEvent(eventName, data = {}) {
    this.push({
      event: eventName,
      ...data,
    });
  }
}

export const gtmService = new GTMService();