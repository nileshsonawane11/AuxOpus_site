// src/hooks/useConsent.js
import { useCookie } from '../context/CookieContext';

export function useConsent() {
  const { consent, ...rest } = useCookie();

  const hasConsent = (category) => {
    if (category === 'necessary') return true;
    if (!consent) return false;
    return consent[category] === true;
  };

  const hasAnyConsent = (categories) => {
    return categories.some(cat => hasConsent(cat));
  };

  const hasAllConsent = (categories) => {
    return categories.every(cat => hasConsent(cat));
  };

  return {
    consent,
    hasConsent,
    hasAnyConsent,
    hasAllConsent,
    ...rest,
  };
}