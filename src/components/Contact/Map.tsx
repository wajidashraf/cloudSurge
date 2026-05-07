import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    L: any;
  }
}

const ContactMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadLeafletScript = () => {
      if (window.L) {
        initializeMap();
        return;
      }

      // Load Leaflet CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.L) return;

      // Initialize map
      const map = window.L.map(mapRef.current, {
        center: [52.4837065, -1.8780766],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Create custom tile layer with brand colors
      const customTileLayer = window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      });

      customTileLayer.addTo(map);

      // Add custom CSS for brand colors
      const style = document.createElement('style');
      style.textContent = `
        .leaflet-container {
          background: #f5f5f5 !important;
          font-family: inherit !important;
          z-index: 1 !important;
        }
        
        .leaflet-tile {
          filter: hue-rotate(15deg) saturate(1.2) contrast(1.1) brightness(0.95) !important;
        }
        
        .leaflet-control-zoom {
          border: 2px solid #ef4123 !important;
          border-radius: 8px !important;
          overflow: hidden !important;
        }
        
        .leaflet-control-zoom a {
          background: linear-gradient(135deg, #ef4123 0%, #ff6b00 100%) !important;
          color: white !important;
          border: none !important;
          font-weight: bold !important;
          transition: all 0.3s ease !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: linear-gradient(135deg, #d63620 0%, #e55a00 100%) !important;
          transform: scale(1.05) !important;
        }
        
        .leaflet-popup-content-wrapper {
          background: linear-gradient(135deg, #ef4123 0%, #ff6b00 100%) !important;
          color: white !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 30px rgba(239, 65, 35, 0.3) !important;
        }
        
        .leaflet-popup-tip {
          background: #ef4123 !important;
        }
        
        .leaflet-popup-content {
          margin: 16px !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
        }
        
        .leaflet-popup-content h3 {
          margin: 0 0 8px 0 !important;
          font-size: 18px !important;
          font-weight: bold !important;
        }
        
        .leaflet-popup-close-button {
          color: white !important;
          font-size: 20px !important;
          font-weight: bold !important;
          padding: 8px !important;
        }
        
        .leaflet-popup-close-button:hover {
          color: #ffdddd !important;
        }
      `;
      document.head.appendChild(style);

      // Create custom marker icon
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #ef4123 0%, #ff6b00 100%);
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(239, 65, 35, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
          ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <style>
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          </style>
        `,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
      });

      // Add marker without popup
      const marker = window.L.marker([52.4837065, -1.8780766], {
        icon: customIcon,
      }).addTo(map);

      mapInstanceRef.current = map;
    };

    loadLeafletScript();

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ef4123] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Us Here
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit our office in Birmingham to discuss your project in person
          </motion.p>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Map Container with Enhanced Theme Styling */}
          <div className="relative overflow-hidden mb-25 md:w-[80%] lg:w-[85%] xl:w-[90%] 2xl:w-full md:mx-auto">
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ef4123]/10 via-transparent to-[#7300bf]/10 z-10 pointer-events-none"></div>
            
            {/* Address Card - Always Visible on Left Side */}
            <div className="absolute bottom-6 left-3 max-w-xs z-50">
              <div className="bg-white/95 backdrop-blur-sm p-3 md:p-6 lg:p-6 xl:p-6 2xl:p-6 border border-[#ef4123]/20 ring-1 ring-[#ef4123]/10">
                <div className="flex items-start space-x-2 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 bg-gradient-to-br from-[#ef4123]/30 to-[#7300bf]/20  flex items-center justify-center flex-shrink-0 ">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-[#ef4123]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-bold text-[#ef4123] mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">Cloud Surge</h3>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm leading-relaxed mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3">
                      7 St. James Place<br />
                      Birmingham B7 4JE<br />
                      United Kingdom
                    </p>
                    <div className="space-y-0.5 md:space-y-1 lg:space-y-1 xl:space-y-1 2xl:space-y-1">
                      <p className="text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-gray-500">
                        <span className="font-semibold">Phone:</span> 0121 816 1121
                      </p>
                      <p className="text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-gray-500">
                        <span className="font-semibold">Email:</span> <a href="mailto:info@cloudsurge.uk" className="text-[#ef4123] hover:underline">info@cloudsurge.uk</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Custom Styled Map */}
            <div 
              ref={mapRef}
              className="w-full h-[500px] md:h-[300px] lg:h-[350px] xl:h-[380px] 2xl:h-[500px]"
              style={{ background: '#f5f5f5' }}
            >
              {/* Loading fallback */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin h-12 w-12 border-b-2 border-[#ef4123] mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            </div>
          </div>
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
