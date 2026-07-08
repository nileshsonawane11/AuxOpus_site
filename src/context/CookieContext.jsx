// src/context/CookieContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const COOKIE_CATEGORIES = {
  necessary: { key: 'necessary', label: 'Necessary', required: true },
  analytics: { key: 'analytics', label: 'Analytics', required: false },
  marketing: { key: 'marketing', label: 'Marketing', required: false },
  personalization: { key: 'personalization', label: 'Personalization', required: false },
};

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

const STORAGE_KEY = 'cookieConsent';
const EXPIRY_DAYS = 365;

const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const loadConsent = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Ensure necessary is always true
          setConsent({ ...parsed, necessary: true });
          setIsBannerVisible(false);
        } catch (error) {
          console.error('Error parsing consent:', error);
          setConsent(DEFAULT_CONSENT);
          setIsBannerVisible(true);
        }
      } else {
        // Check if user already has a cookie consent cookie (for GDPR compliance)
        const cookieConsent = document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
        if (cookieConsent) {
          try {
            const value = JSON.parse(decodeURIComponent(cookieConsent.split('=')[1]));
            setConsent({ ...value, necessary: true });
            setIsBannerVisible(false);
            // Store in localStorage for future visits
            localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
          } catch (error) {
            console.error('Error parsing cookie consent:', error);
            setConsent(DEFAULT_CONSENT);
            setIsBannerVisible(true);
          }
        } else {
          setConsent(DEFAULT_CONSENT);
          setIsBannerVisible(true);
        }
      }
    };

    loadConsent();
  }, []);

  // Save consent function
  const saveConsent = useCallback((newConsent) => {
    const consentToSave = { ...newConsent, necessary: true };
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentToSave));
    
    // Save to cookie for server-side access
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);
    document.cookie = `cookieConsent=${encodeURIComponent(JSON.stringify(consentToSave))}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    
    setConsent(consentToSave);
    setIsBannerVisible(false);
    setIsSettingsModalVisible(false);

    // Dispatch event for other parts of the app to react
    window.dispatchEvent(new CustomEvent('consentUpdated', { detail: consentToSave }));
  }, []);

  const updateConsent = useCallback((category, value) => {
    if (category === 'necessary') return; // Can't change necessary
    
    setConsent(prev => {
      const updated = { ...prev, [category]: value };
      return updated;
    });
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent(DEFAULT_CONSENT);
  }, [saveConsent]);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(DEFAULT_CONSENT);
    setIsBannerVisible(true);
  }, []);

  const value = {
    consent,
    isBannerVisible,
    isSettingsModalVisible,
    setIsBannerVisible,
    setIsSettingsModalVisible,
    saveConsent,
    updateConsent,
    acceptAll,
    rejectAll,
    resetConsent,
    categories: COOKIE_CATEGORIES,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
}

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};