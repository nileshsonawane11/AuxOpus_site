// src/config/tracking.js
export const TRACKING_CONFIG = {
  googleAnalytics: {
    measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  },
  gtm: {
    containerId: process.env.REACT_APP_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
  },
  metaPixel: {
    pixelId: process.env.REACT_APP_META_PIXEL_ID || 'XXXXXXXXXXXXXXX',
  },
  clarity: {
    projectId: process.env.REACT_APP_CLARITY_PROJECT_ID || 'XXXXXXXX',
  },
  linkedin: {
    partnerId: process.env.REACT_APP_LINKEDIN_PARTNER_ID || 'XXXXXX',
  },
};