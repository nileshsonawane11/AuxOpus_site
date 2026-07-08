// src/utils/loadScript.js
export function loadScript(src, attributes = {}) {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve(existingScript);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;

    // Add custom attributes
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

export function loadScripts(scripts) {
  return Promise.all(scripts.map(({ src, attributes }) => loadScript(src, attributes)));
}

export function loadExternalScript(src) {
  return loadScript(src);
}

export function loadModuleScript(src) {
  return loadScript(src, { type: 'module' });
}