// src/services/clarity.js
import { loadScript } from '../utils/loadScript';

class ClarityService {
  constructor() {
    this.initialized = false;
    this.projectId = null;
  }

  initialize(projectId) {
    this.projectId = projectId;
  }

  load(consent) {
    if (this.initialized || !consent?.analytics) return;

    // Load Microsoft Clarity
    const clarityScript = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${this.projectId}");
    `;

    const script = document.createElement('script');
    script.innerHTML = clarityScript;
    document.head.appendChild(script);

    this.initialized = true;
    console.log('Microsoft Clarity loaded successfully');
  }

  track(eventName, data = {}) {
    if (!this.initialized || !window.clarity) return;
    window.clarity('event', eventName, data);
  }
}

export const clarityService = new ClarityService();