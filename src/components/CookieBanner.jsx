// src/components/CookieBanner.jsx
import React from 'react';
import { useCookie } from '../context/CookieContext';

export function CookieBanner() {
  const { 
    isBannerVisible, 
    setIsSettingsModalVisible, 
    acceptAll, 
    rejectAll 
  } = useCookie();

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-9999 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">🍪 Cookie Consent</h3>
          <p className="text-sm text-gray-600 mt-1">
            We use cookies to improve your experience, analyze traffic, and personalize content.
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setIsSettingsModalVisible(true)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Customize
          </button>
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Reject All
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}