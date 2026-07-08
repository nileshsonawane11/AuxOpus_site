// src/hooks/useTrackPage.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackingService } from '../services/tracking';

const PAGE_TITLES = {
  '/': 'Home',
  '/AboutUs': 'About Us',
  '/Contact': 'Contact Us',
  '/Services': 'Our Services',
  '/Services/Web-Development': 'Web Development Services',
  '/Services/App-Development': 'App Development Services',
  '/Services/AI-Automation': 'AI Automation Services',
  '/Services/UI-UX-Design': 'UI/UX Design Services',
  '/Services/Digital-Marketing': 'Digital Marketing Services',
  '/Services/Maintenance-support': 'Maintenance & Support',
  '/Services/Training': 'Corporate Training',
  '/Our-Solutions': 'Our Solutions',
  '/Portfolio': 'Portfolio',
};

export function useTrackPage() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = PAGE_TITLES[location.pathname] || 'Unknown Page';
    
    // Update document title
    document.title = `AuxOpus - ${pageTitle}`;
    
    // Track page view
    trackingService.track('page_view', {
      page_path: location.pathname + location.search,
      page_title: pageTitle,
    });
  }, [location]);
}