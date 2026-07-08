// src/hooks/useTrack.js
import { useEffect, useRef } from 'react';
import { trackingService } from '../services/tracking';

export function useTrackPageView(path) {
  const previousPath = useRef();

  useEffect(() => {
    const currentPath = path || window.location.pathname;
    if (previousPath.current !== currentPath) {
      trackingService.trackPageView(currentPath);
      previousPath.current = currentPath;
    }
  }, [path]);
}

export function useTrackEvent(eventName, data = {}, deps = []) {
  useEffect(() => {
    trackingService.track(eventName, data);
  }, deps);
}

export function useTrackClick(eventName, data = {}) {
  return (e) => {
    trackingService.track(eventName, { ...data, target: e.target?.tagName });
  };
}