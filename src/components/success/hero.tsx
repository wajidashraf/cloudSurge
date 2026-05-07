import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, MotionValue, useTransform } from 'framer-motion';
import GrowwImage from '@/assets/Growww.svg';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Track window dimensions for responsiveness
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setDimensions({
        width,
        height: window.innerHeight
      });
      setIsMobile(width < 1536); // Below 2xl breakpoint
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Animation values
  const manualProgress = useMotionValue(0);
  const dynamicScaleY = useSpring(manualProgress, { stiffness: 200, damping: 30 });
  
  // Unmasking animation for image - scroll-based (starts at 50%)
  const [shouldStartUnmasking, setShouldStartUnmasking] = useState(false);
  const unmaskProgress = useMotionValue(0.5); // Start at 50%
  const unmaskSpring = useSpring(unmaskProgress, { stiffness: 100, damping: 25 });
  
  // Text fades in when image is 80% complete
  const contentOpacity = useTransform(unmaskSpring, [0, 0.8, 1], [0, 0, 1]);
  
  // Text clip-path for bottom-to-top reveal
  const textClipPath = useTransform(unmaskSpring, [0, 0.8, 1], [
    'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  ]);
  
  // Create clip-path for unmasking effect
  const clipPath = useTransform(unmaskSpring, [0, 1], [
    'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  ]);

  // Lock state until progress reaches 1 and unmasking completes
  const [locked, setLocked] = useState(true);
  const [unmaskingComplete, setUnmaskingComplete] = useState(false);
  const [unmaskingPhase, setUnmaskingPhase] = useState(false);
  
  // Image reveal phase is always active (starts at 50%)
  useEffect(() => {
    setShouldStartUnmasking(true);
    setUnmaskingPhase(true);
  }, []);
  
  // Remove automatic unmasking - will be controlled by scroll
  // useEffect(() => {
  //   if (shouldStartUnmasking) {
  //     // Small delay to ensure line animation is complete
  //     const timer = setTimeout(() => {
  //       unmaskProgress.set(1);
  //     }, 200);
  //     return () => clearTimeout(timer);
  //   }
  // }, [shouldStartUnmasking, unmaskProgress]);
  
  // Track when unmasking animation completes (text fully visible)
  useEffect(() => {
    const unsubscribe = unmaskSpring.on('change', latest => {
      if (latest >= 0.999) {
        setUnmaskingComplete(true);
      }
    });
    return unsubscribe;
  }, [unmaskSpring]);
  
  // Only unlock scrolling 1 second after text unmasking is complete
  useEffect(() => {
    if (shouldStartUnmasking && unmaskingComplete) {
      const timer = setTimeout(() => {
        setLocked(false);
      }, 1000); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, [shouldStartUnmasking, unmaskingComplete]);

  // While locked, prevent page scroll via body overflow
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [locked]);

  // Auto animate on mobile - skip growing line interaction and auto-unmask
  useEffect(() => {
    if (isMobile && dimensions.width > 0) {
      const timer = setTimeout(() => {
        manualProgress.set(1);
        // Auto-unmask on mobile after line growth (already at 50%)
        setTimeout(() => {
          unmaskProgress.set(1);
          setUnmaskingComplete(true);
        }, 700);
      }, 500); // Small delay for mount
      return () => clearTimeout(timer);
    }
  }, [isMobile, dimensions.width, manualProgress, unmaskProgress]);

  // Wheel/touch handlers to drive image unmasking from 50% to 100% while page is locked
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!locked) return;
      e.preventDefault();
      const delta = e.deltaY / (dimensions.width < 768 ? 300 : 500);

      // Image reveal: 50% to 100%
      const currentUnmask = unmaskProgress.get();
      const scrollIncrement = delta > 0 ? 0.3 : -0.3;
      const newUnmask = Math.max(0.5, Math.min(1, currentUnmask + scrollIncrement)); // Clamp between 0.5 and 1
      unmaskProgress.set(newUnmask);
      setUnmaskingComplete(newUnmask >= 1);
    };

    let lastTouchY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      if (!locked) return;
      lastTouchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!locked) return;
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      if (lastTouchY == null) {
        lastTouchY = currentY;
        return;
      }
      const dy = lastTouchY - currentY; // swipe up -> positive
      lastTouchY = currentY;
      const delta = dy / (dimensions.width < 768 ? 200 : 350);

      // Image reveal: 50% to 100%
      const currentUnmask = unmaskProgress.get();
      const scrollIncrement = delta > 0 ? 0.3 : -0.3;
      const newUnmask = Math.max(0.5, Math.min(1, currentUnmask + scrollIncrement)); // Clamp between 0.5 and 1
      unmaskProgress.set(newUnmask);
      setUnmaskingComplete(newUnmask >= 1);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [locked, manualProgress, unmaskProgress, unmaskingPhase, dimensions.width]);

  // Responsive values
  const titleSize = dimensions.width < 480 ? 'text-6xl' : 
                   dimensions.width < 768 ? 'text-7xl' : 
                   dimensions.width < 1024 ? 'text-8xl' : 
                   dimensions.width < 1536 ? 'text-9xl' : 'text-[22rem]';
  
  const lineHeight = dimensions.width < 768 ? 'h-[30rem]' : 
                     dimensions.width < 1024 ? 'h-[35rem]' : 
                     dimensions.width < 1536 ? 'h-[45rem]' : 'h-[60rem]';
  
  const linePosition = dimensions.width < 768 ? 'bottom-15 right-10' : 
                       dimensions.width < 1024 ? 'bottom-20 right-15' : 
                       dimensions.width < 1536 ? 'bottom-32 right-[20%]' : 'bottom-62 right-[26.1%]';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, #ec3f24 0%, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-center md:items-end md:justify-start h-full pl-0 md:pl-4 lg:pl-8">
          {/* Groww image animating from bottom to top - moved down and slightly right */}
          <motion.div
            ref={titleRef}
            className="relative mb-30 md:-mb-32 -translate-y-[25%] md:translate-y-0"
            style={{
              clipPath: clipPath
            }}
          >
            <img 
              src={GrowwImage} 
              alt="Grow Success Stories" 
              className="w-[320px] h-auto sm:w-[400px] md:w-[520px] lg:w-[640px] xl:w-[720px] 2xl:w-[1045px] object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Success Stories text - positioned just above bottom content */}
      <motion.div
        className="absolute bottom-[335px] sm:bottom-[260px] md:bottom-[180px] lg:bottom-[200px] xl:bottom-[230px] text-white text-left md:text-left z-20 left-4 -translate-x-0 md:left-4 md:translate-x-0 md:right-4 -translate-y-[10%] md:translate-y-0"
        style={{ 
          opacity: contentOpacity,
          clipPath: textClipPath,
        }}
      >
        <div className="mx-0 md:mx-0 md:ml-auto md:max-w-[40%] 2xl:max-w-[44%]">
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold leading-tight">
            Success <br className='hidden sm:block'/>Stories
          </h2>
        </div>
      </motion.div>

      {/* Bottom content - appears with unmasking animation */}
      <motion.div 
        className="absolute bottom-30 md:bottom-8 lg:bottom-16 xl:bottom-25 left-4 -translate-x-0 md:left-auto md:right-8 md:translate-x-20 2xl:right-20 flex flex-col md:flex-row text-white max-w-[90%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[44%]"
        style={{ 
          opacity: contentOpacity,
          clipPath: textClipPath
        }}
      >
        <p className="flex-1 text-md sm:text-sm md:text-sm lg:text-md pr-0 md:pr-4 lg:pr-6 text-left md:text-left max-w-full md:max-w-[45%] lg:max-w-[37%] leading-tight font-extralight mb-4 md:mb-0">
          Discover how <span className="font-semibold">Cloud Surge</span> enables{' '}
          <span className="font-semibold">IT delivery partners</span> to overcome challenges,
          scale operations, and deliver remarkable results.
        </p>
        <div className="w-full md:w-px h-px md:h-20 lg:h-24 bg-white my-2 md:my-0" />
        <p className="flex-1 text-md sm:text-sm md:text-sm lg:text-md pl-0 md:pl-4 lg:pl-6 text-left md:text-left max-w-full md:max-w-[45%] lg:max-w-[38%] leading-tight mt-4 md:mt-0">
          Our case studies highlight real‑world examples of how our Fusion Pod model and expert
          teams help clients cut costs, boost capacity, and streamline product delivery.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;