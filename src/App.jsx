// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CookieProvider, useCookie } from './context/CookieContext';
import { CookieBanner } from './components/CookieBanner';
import { CookieSettingsModal } from './components/CookieSettingsModal';
import { analyticsService } from './services/analytics';
import { trackingService } from './services/tracking';
import { gtmService } from './services/gtm';
import { metaPixelService } from './services/metaPixel';
import { clarityService } from './services/clarity';
import { linkedinService } from './services/linkedin';
import { useConsent } from './hooks/useConsent';
import ScrollToTop from './components/ScrollToTop';

// Import your pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Solutions from "./pages/Solutions.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import AppDevelopment from "./pages/AppDevelopment.jsx";
import AIAutomation from "./pages/AIAutomation.jsx";
import UIUXDesign from "./pages/UIUXDesign.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import MaintenanceSupport from "./pages/MaintenanceSupport.jsx";
import CorporateTraining from "./pages/CorporateTraining.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import RefundPolicy from "./pages/RefundPolicy.jsx";

// Router Tracker Component - Tracks page views
function RouterTracker() {
  const location = useLocation();
  const { hasConsent } = useConsent();

  useEffect(() => {
    if (hasConsent('analytics')) {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
        });
      }

      if (window.clarity) {
        window.clarity('event', 'page_view', {
          page: location.pathname + location.search,
        });
      }

      if (window.fbq) {
        window.fbq('track', 'PageView');
      }

      trackingService.trackPageView(location.pathname + location.search);
    }
  }, [location, hasConsent]);

  return null;
}

// App Content that uses consent
function AppContent() {
  const { consent } = useCookie();

  // Initialize services when consent changes
  useEffect(() => {
    if (!consent) return;

    trackingService.setConsent(consent);

    if (consent.analytics) {
      // Use import.meta.env for Vite instead of process.env
      const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
      if (gaId) analyticsService.initialize(gaId);

      const gtmId = import.meta.env.VITE_GTM_CONTAINER_ID;
      if (gtmId) {
        gtmService.initialize(gtmId);
        gtmService.load(consent);
      }

      const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;
      if (clarityId) {
        clarityService.initialize(clarityId);
        clarityService.load(consent);
      }
    }

    if (consent.marketing) {
      const pixelId = import.meta.env.VITE_META_PIXEL_ID;
      if (pixelId) {
        metaPixelService.initialize(pixelId);
        metaPixelService.load(consent);
      }

      const linkedinId = import.meta.env.VITE_LINKEDIN_PARTNER_ID;
      if (linkedinId) {
        linkedinService.initialize(linkedinId);
        linkedinService.load(consent);
      }
    }
  }, [consent]);

  return (
    <>
      <RouterTracker />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />

        <Route path="/Services">
          <Route path="Web-Development" element={<WebDevelopment />} />
          <Route path="App-Development" element={<AppDevelopment />} />
          <Route path="AI-Automation" element={<AIAutomation />} />
          <Route path="UI-UX-Design" element={<UIUXDesign />} />
          <Route path="Digital-Marketing" element={<DigitalMarketing />} />
          <Route path="Maintenance-support" element={<MaintenanceSupport />} />
          <Route path="Training" element={<CorporateTraining />} />
        </Route>

        <Route path="/Our-Solutions" element={<Solutions />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/Refund-Policy" element={<RefundPolicy/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <CookieBanner />
      <CookieSettingsModal />
    </>
  );
}

// Main App wrapper
function App() {
  return (
    <CookieProvider>
      <AppContent />
    </CookieProvider>
  );
}

export default App;