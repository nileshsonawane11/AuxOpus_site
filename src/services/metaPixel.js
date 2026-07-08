// src/services/metaPixel.js
import { loadScript } from '../utils/loadScript';

class MetaPixelService {
  constructor() {
    this.initialized = false;
    this.pixelId = null;
  }

  initialize(pixelId) {
    this.pixelId = pixelId;
  }

  load(consent) {
    if (this.initialized || !consent?.marketing) return;

    // Load Facebook Pixel
    const fbqScript = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.pixelId}');
      fbq('track', 'PageView');
    `;

    const script = document.createElement('script');
    script.innerHTML = fbqScript;
    document.head.appendChild(script);

    this.initialized = true;
    console.log('Meta Pixel loaded successfully');
  }

  track(eventName, data = {}) {
    if (!this.initialized || !window.fbq) return;
    window.fbq('track', eventName, data);
  }
}

export const metaPixelService = new MetaPixelService();