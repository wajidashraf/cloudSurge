import React, { useState, useEffect, useRef } from 'react';
import settings from '@/assets/settings.png';
import screen from '@/assets/screen.png';
import star from '@/assets/star.png';
import redicon from '@/assets/HeroLogo.svg'
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  color: string;
  text: string;
  src: string;
}

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0); // Track fractional progress
  const [isSmall, setIsSmall] = useState<boolean>(
    window.matchMedia('(max-width: 600px)').matches
  );
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const lastScrollRef = useRef<number>(0);

  const steps: Step[] = [
    { color: '#ec3f24', text: 'CS', src: '' },
    { color: '#ec3f24', text: 'Account Management', src: settings },
    { color: '#ec3f24', text: 'Project Coordination', src: screen },
    { color: '#ec3f24', text: 'QA Service', src: star }
  ];

  // Listen for viewport size changes
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)');
    const handler = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  // Auto-advance for small screens
  useEffect(() => {
    if (!isSmall) return;
    const intervalId = window.setInterval(() => {
      setScrollProgress(prev => {
        const newProgress = prev + 1.0; 
        const newStep = Math.floor(newProgress);
        setActiveStep(Math.min(newStep, steps.length));
        return Math.min(newProgress, steps.length);
      });
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [isSmall, steps.length]);

  // Custom scroll control for non-small screens with 3s throttle
  useEffect(() => {
    if (isSmall) return;

      const handleWheel = (e: WheelEvent) => {
        const now = Date.now();
        // throttle scrolls: ignore if within 500ms of last scroll
        if (activeStep > 0 && now - lastScrollRef.current < 500) {
          e.preventDefault();
          return;
        }

        const atTop = window.scrollY === 0;

        if (e.deltaY > 0 && activeStep < steps.length) {
          e.preventDefault();
          lastScrollRef.current = now;
          setScrollProgress(prev => {
            const newProgress = prev + 2.0; // Move 2 steps per scroll
            const newStep = Math.floor(newProgress);
            setActiveStep(Math.min(newStep, steps.length));
            return Math.min(newProgress, steps.length);
          });
        }

        if (e.deltaY < 0 && activeStep > 0 && atTop) {
          e.preventDefault();
          lastScrollRef.current = now;
          setScrollProgress(prev => {
            const newProgress = Math.max(prev - 2.0, 0);
            const newStep = Math.floor(newProgress);
            setActiveStep(newStep);
            return newProgress;
          });
        }
      };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeStep, steps.length, isSmall]);

  // Lock page scroll until final overlay appears; show overlay after 3s
  useEffect(() => {
    if (activeStep >= steps.length) {
      document.body.style.overflow = 'auto';
      // delay overlay
      const timer = setTimeout(() => setShowOverlay(true), 500);
      return () => clearTimeout(timer);
    }
    setShowOverlay(false);
    document.body.style.overflow = isSmall ? 'auto' : 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeStep, steps.length, isSmall]);

  const spacing = isSmall ? 28 : 18;

  // Helper function to calculate scale for each step based on scroll progress
  const getStepScale = (stepIndex: number, progress: number): number => {
    // Each step requires 1 scroll to complete
    // Step 0: starts at 0, fully visible at 1.0 (after 1 scroll)
    // Step 1: starts at 1, fully visible at 2.0 (after 2 scrolls)
    // etc.
    
    const stepStartProgress = stepIndex;
    const stepEndProgress = stepIndex + 1;
    
    if (progress <= stepStartProgress) {
      return 0;
    } else if (progress >= stepEndProgress) {
      return 1;
    } else {
      // Smooth transition between start and end
      return (progress - stepStartProgress) / (stepEndProgress - stepStartProgress);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)'
        }}
      />

      <div className={`absolute ${isSmall
        ? 'bottom-60 left-6'
        : 'bottom-25 left-20 md:bottom-10 lg:bottom-10 md:left-20 lg:left-20 xl:left-25'
        } text-[#FCE2E1] z-10`}>
        <motion.div
      initial={{ opacity: 0, y: 0, filter: 'blur(10px)' }}  // start invisible  blurred
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}   // animate to visible  clear
      transition={{ delay: 3.2, duration: 0.6 }}   // synchronize with loader
      className="sm:flex-col sm:space-x-0 sm:space-y-2"
    >
      <h1 className="text-left text-3xl sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold whitespace-nowrap">
        Your
        Trusted
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold whitespace-nowrap">
        Delivery
        Partner
      </h2>

    </motion.div>
      </div>

      <div className="relative h-full w-full flex items-start mt-40 md:mt-0 md:items-center justify-center ">
        {/* Main logo and rings */}
        <div className="relative flex items-center justify-center">
          <img
            src={redicon}

            alt="Cloud Surge"
            className="w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-65 lg:h-65 xl:w-90 xl:h-90 2xl:w-130 2xl:h-130 z-20"
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute rounded-full transition-all 
              ${index === 0 ? 'duration-500' : 'duration-1000'}`}
              style={{
                width: `${70 + index * 30}%`,
                height: `${70 + index * 30}%`,
                transform: `scale(${getStepScale(index, scrollProgress)})`,
                zIndex: steps.length - index
              }}
            >
              {/* ring fill */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: activeStep > index ? step.color : '#EF412380',
                  opacity: activeStep > index ? 0.3 : 0.5,
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)'
                }}
              >
                <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent backdrop-blur-lg" />
              </div>

              {/* icon and label */}
              {index > 0 && activeStep > index && (
                <div
                  className={`absolute w-12 sm:w-15 transform -translate-y-1/1 -right-2 sm:right-0 md:-translate-y-1/1 md:right-0 lg:-translate-y-2/3 lg:-right-5 xl:-translate-y-1/10 xl:right-0 z-10 xl:bottom-1/2
                    ${index === 1 ? 'lg:right-1 xl:right-8' : ''}
                    ${index === 2 ? '2xl:right-1 bottom-18 mt-2 lg:bottom-50 2xl:bottom-100 right-[-10px] sm:right-0' : ''}
                    ${index === 3 ? '-translate-y-3/2 md:-translate-y-2/1 lg:-translate-y-3/3 xl:-translate-y-3/5 xl:bottom-1/3 xl:right-5' : ''}  
                    ${index === 4 ? 'hidden' : ''} `}
                  style={{
                    top: `${25 + (index - 1) * spacing}%`
                  }}
                >
                  <img
                    src={step.src}
                    alt={step.text}
                    className={`mx-auto mb-1 animate-fade-in ${
                      index === 3 
                        ? 'w-6 h-5.5 sm:w-7 sm:h-6.5 md:w-8 md:h-7.5 lg:h-9 lg:w-10' 
                        : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:h-10 lg:w-10'
                    }`}
                  />
                  <p className={`text-[8px] sm:text-xs lg:text-[15px] xl:text-[18px] text-left font-medium text-[#FCE2E1] whitespace-nowrap ${
                    index === 2 ? 'transform scale-x-[0.85] sm:scale-x-100 origin-left' : ''
                  }`}>
                    {step.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Overlay appears after delay */}
        <AnimatePresence>
          {activeStep >= steps.length && showOverlay && (
            <motion.div
              key="pod-overlay"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.6 }}
              className={`${isSmall
                ? 'absolute bottom-70 left-6 pr-4 pt-2 w-[90%]'
                : 'absolute bottom-0 right-18 sm:bottom-2 sm:right-2 md:bottom-2 md:right-3 lg:bottom-2 lg:right-4 xl:bottom-4 xl:right-6 2xl:bottom-8'
                } p-0 sm:p-3 text-[#FACCCB] backdrop-blur-sm z-30 max-w-[100%]`}>
              <div className={`${isSmall ? 'text-center' : 'text-left'}`}>
                <h2 className="text-left text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-bold text-white mb-3 max-w-xs">
                  The Power of the Pod Model
                </h2>
                <p className="text-left text-sm sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-xl text-white max-w-xs">
                  Collaborative, transparent, and cost-effective scalable solutions, tailored to your needs
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
