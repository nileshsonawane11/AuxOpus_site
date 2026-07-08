// src/components/CookieSettingsModal.jsx
import React from 'react';
import { useCookie } from '../context/CookieContext';

export function CookieSettingsModal() {
  const { 
    consent, 
    isSettingsModalVisible, 
    setIsSettingsModalVisible, 
    updateConsent, 
    saveConsent,
    categories 
  } = useCookie();

  if (!isSettingsModalVisible) return null;

  const handleSave = () => {
    saveConsent(consent);
  };

  const handleClose = () => {
    setIsSettingsModalVisible(false);
  };

  return (
    <div className="fixed inset-0 z-100000 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Preferences</h2>
        <p className="text-sm text-gray-600 mb-6">
          Select which cookies you want to allow. Necessary cookies are required for the website to function properly.
        </p>

        <div className="space-y-4">
          {Object.entries(categories).map(([key, { label, required }]) => (
            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-gray-700">
                  {label}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <p className="text-xs text-gray-500 mt-0.5">
                  {required ? 'Required for basic functionality' : 'Optional for enhanced experience'}
                </p>
              </div>
              <input
                type="checkbox"
                checked={consent?.[key] || false}
                onChange={(e) => updateConsent(key, e.target.checked)}
                disabled={required}
                className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}