import React, { useState, useEffect, useRef } from 'react';

import wrenchIcon from '@/assets/wrench.svg';
import calculatorIcon from '@/assets/ROI Calculator.svg';
import zoomFitIcon from '@/assets/Pod Finder.svg';
import checklistIcon from '@/assets/Delivery Check.svg';

interface SubButton {
  id: string;
  label: string;
  icon: string;
  translateX: string;
  translateY: string;
}

const subButtons: SubButton[] = [
  {
    id: 'delivery-check',
    label: 'Delivery Check',
    icon: checklistIcon,
    translateX: '8px',
    translateY: '-72px',
  },
  {
    id: 'pod-finder',
    label: 'Pod Finder',
    icon: zoomFitIcon,
    translateX: '-48px',
    translateY: '-48px',
  },
  {
    id: 'roi-calculator',
    label: 'ROI Calculator',
    icon: calculatorIcon,
    translateX: '-72px',
    translateY: '8px',
  },
];

const ToolsActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setActiveTooltip(null);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50"
      style={{ width: 48, height: 48 }}
    >
      {/* Sub-buttons */}
      {subButtons.map((btn, i) => (
        <div
          key={btn.id}
          className="absolute"
          style={{
            left: 8,
            top: 8,
            width: 32,
            height: 32,
            transform: isOpen
              ? `translate(${btn.translateX}, ${btn.translateY})`
              : 'translate(0px, 0px)',
            transition: `transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? i * 60 : (subButtons.length - 1 - i) * 40}ms, opacity 0.25s ease ${isOpen ? i * 60 : (subButtons.length - 1 - i) * 40}ms`,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          onMouseEnter={() => setActiveTooltip(btn.id)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Tooltip */}
          {activeTooltip === btn.id && (
            <div
              className="absolute whitespace-nowrap text-xs font-medium text-white px-2 py-1 rounded pointer-events-none"
              style={{
                background: '#1a1a2e',
                left: '50%',
                bottom: '38px',
                transform: 'translateX(-50%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {btn.label}
              <span
                className="absolute"
                style={{
                  left: '50%',
                  bottom: -4,
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '4px solid #1a1a2e',
                }}
              />
            </div>
          )}

          <button
            className="p-0 border-0 bg-transparent cursor-pointer flex items-center justify-center"
            style={{ width: 32, height: 32 }}
            aria-label={btn.label}
          >
            <img src={btn.icon} alt={btn.label} width={32} height={32} />
          </button>
        </div>
      ))}

      {/* Main button — SVG already contains its own red circle */}
      <button
        className="p-0 border-0 bg-transparent cursor-pointer absolute flex items-center justify-center"
        style={{
          left: 0,
          top: 0,
          width: 48,
          height: 48,
          transition: 'transform 0.3s ease, filter 0.3s ease',
          transform: isOpen ? 'rotate(30deg) scale(1.08)' : 'rotate(0deg) scale(1)',
         
          zIndex: 1,
        }}
        onClick={() => { setIsOpen(prev => !prev); setActiveTooltip(null); }}
        aria-label="Tools menu"
      >
        <img src={wrenchIcon} alt="Tools" width={48} height={48} />
      </button>

    </div>
  );
};

export default ToolsActionButton;
