// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

let measurementId: string = '';

// Initialize Google Analytics
export const initGA = (id: string) => {
  measurementId = id;
  
  // Check if gtag is already loaded
  if (typeof window.gtag === 'function') {
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, {
    page_path: window.location.pathname,
  });
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  if (typeof window.gtag === 'function' && measurementId) {
    window.gtag('config', measurementId, {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: any;
  }
) => {
  if (typeof window.gtag === 'function' && measurementId) {
    window.gtag('event', eventName, eventParams);
  }
};

