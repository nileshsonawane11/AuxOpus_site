// src/services/linkedin.js
import { loadScript } from '../utils/loadScript';

class LinkedInService {
  constructor() {
    this.initialized = false;
    this.partnerId = null;
  }

  initialize(partnerId) {
    this.partnerId = partnerId;
  }

  load(consent) {
    if (this.initialized || !consent?.marketing) return;

    // Load LinkedIn Insight Tag
    const linkedinScript = `
      _linkedin_partner_id = "${this.partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;

    const script = document.createElement('script');
    script.innerHTML = linkedinScript;
    document.head.appendChild(script);

    // Load the LinkedIn script
    loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js')
      .then(() => {
        this.initialized = true;
        console.log('LinkedIn Insight loaded successfully');
      })
      .catch(error => {
        console.error('Error loading LinkedIn Insight:', error);
      });
  }

  track(eventName, data = {}) {
    if (!this.initialized || !window.lintrk) return;
    window.lintrk('track', eventName, data);
  }
}

export const linkedinService = new LinkedInService();