// src/components/RouterTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useConsent } from '../hooks/useConsent';
import { trackingService } from '../services/tracking';

// Map routes to readable page names for better analytics
const pageNameMap = {
  '/': 'Home',
  '/AboutUs': 'About Us',
  '/Contact': 'Contact',
  '/Services': 'Services',
  '/Services/Web-Development': 'Web Development',
  '/Services/App-Development': 'App Development',
  '/Services/AI-Automation': 'AI Automation',
  '/Services/UI-UX-Design': 'UI/UX Design',
  '/Services/Digital-Marketing': 'Digital Marketing',
  '/Services/Maintenance-support': 'Maintenance & Support',
  '/Services/Training': 'Corporate Training',
  '/Our-Solutions': 'Solutions',
  '/Portfolio': 'Portfolio',
};

export function RouterTracker() {
  const location = useLocation();
  const { hasConsent } = useConsent();
  
  useEffect(() => {
    if (hasConsent('analytics')) {
      const pagePath = location.pathname + location.search;
      const pageName = pageNameMap[location.pathname] || location.pathname;
      
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_title: pageName,
        });
      }
      
      // Clarity
      if (window.clarity) {
        window.clarity('event', 'page_view', {
          page: pagePath,
          title: pageName,
        });
      }
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
      
      // Custom tracking
      trackingService.track('page_view', {
        page_path: pagePath,
        page_name: pageName,
      });
    }
  }, [location, hasConsent]);
  
  return null;
}