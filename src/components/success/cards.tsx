import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import clickIcon from '@/assets/click.svg';

const TARGET_VALUES = [25, 50, 98, 100];

// GradientText driven by scroll‐scrubbed MotionValue<string>
const GradientText: React.FC<{
  text: string;
  fillProgress: MotionValue<string>;
  gradientStyle: React.CSSProperties;
}> = ({ text, fillProgress, gradientStyle }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="text-[#D9D9D9] block whitespace-nowrap ">
        {text}
      </span>
      <motion.span
        className="absolute top-0 left-0 bg-clip-text text-transparent block whitespace-nowrap overflow-hidden"
        style={{
          ...gradientStyle,
          width: isMobile ? '100%' : fillProgress,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const cards = [
  {
    title: '25%',
    content: (
      <>
        average increase in project capacity for partner organisations
      </>
    ),
  },
  {
    title: '50%',
    content: (
      <>
        reduction in time to productivity compared to traditional hiring
      </>
    ),
  },
  {
    title: '98%',
    content: (
      <>
        client satisfaction rate across all engagements <br/> <br/>
      </>
    ),
  },
  {
    title: '100+',
    content: (
      <>
        projects successfully delivered across diverse industries
      </>
    ),
  },
];

const Cardssuccess: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const gradientShift = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 30%', '100% 50%']
  );

  const lines = ['The Cloud Surge Impact'];

  const fillWidths = [
    useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']),
  ];

  const iconOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <>
      {/* Animated Heading */}
      <section className="py-10 md:py-30 h-full">
        <div className="container px-4 md:px-30">
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight flex flex-row flex-wrap items-center justify-center">
            <div className="flex flex-row items-center mr-0 sm:mr-3">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  style={{ backgroundPosition: gradientShift }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="flex items-center"
                >
                  <GradientText
                    text={line}
                    fillProgress={fillWidths[idx]}
                    gradientStyle={{
                      backgroundImage:
                        'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  />
                </motion.div>
              ))}
              <motion.img
                src={clickIcon}
                alt="Click icon"
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-2 sm:ml-3 md:mt-10"
                style={{ opacity: iconOpacity }}
              />
            </div>
          </h2>
        </div>
      </section>

      {/* Fusion Pods Cards */}
      <PowerPodsCards />
    </>
  );
};

// Internal PowerPodsCards component
const PowerPodsCards: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const sectionRef   = useRef<HTMLDivElement>(null);
  const counterFired = useRef<boolean>(false);   // fire counter animation only once
  const initialMargins = [0, 700, 1000, 1500];

  /* ── Track desktop breakpoint reactively ── */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Scroll-driven margin progress + counter trigger ── */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect         = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress: 0 when section top is 1.5× viewport below fold, 1 when section midpoint reaches centre
      const startY   = windowHeight * 5;   // section top this far below viewport bottom → progress 0
      const endY     = windowHeight * 0.1;   // section top this far from viewport top → progress 1
      const rawProg  = 1 - (rect.top - endY) / (startY - endY);
      const progress = Math.min(Math.max(rawProg, 0), 1);
      setScrollProgress(progress);

      // Fire counters once when section is 20 % into view
      if (!counterFired.current && rect.top < windowHeight * 0.4) {
        counterFired.current = true;
        TARGET_VALUES.forEach((target, index) => {
          const duration  = 1000;
          const startTime = Date.now();
          const tick = () => {
            const elapsed     = Date.now() - startTime;
            const t           = Math.min(elapsed / duration, 1);
            const eased       = 1 - Math.pow(1 - t, 4);
            const current     = Math.floor(target * eased);
            setCounters(prev => {
              const next = [...prev];
              next[index] = current;
              return next;
            });
            if (t < 1) requestAnimationFrame(tick);
          };
          setTimeout(() => requestAnimationFrame(tick), index * 100);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // empty deps — handler only reads refs/closures, never re-registers mid-scroll

  return (
    <div ref={sectionRef} className="w-full relative py-0 mb-20 md:mb-30">
      <div className="overflow-hidden w-full px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-[85%] md:max-w-[90%] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-3 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-0">
          {cards.map((card, i) => {
            // No CSS transition — margin is driven 1:1 by scroll for smooth motion
            const currentMargin = isDesktop
              ? Math.max(0, initialMargins[i] * (1 - scrollProgress))
              : 0;

            return (
              <div key={i} style={{ marginTop: `${currentMargin}px` }}>
                <div className="flex flex-col p-4 md:p-3 lg:p-3 xl:p-4 2xl:p-4 md:pl-6 lg:pl-7 xl:pl-4 2xl:pl-8 pt-6 md:pt-16 lg:pt-18 xl:pt-20 2xl:pt-25 bg-[#EFEFEF] min-h-[150px] sm:min-h-[250px] md:min-h-[240px] lg:min-h-[250px] xl:min-h-[260px] 2xl:min-h-[300px] w-full  2xl:w-90">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-left sm:text-5xl font-semibold text-[#EF4123] mb-2 sm:mb-4">
                    {i === 3 ? `${counters[i]}+` : `${counters[i]}%`}
                  </h2>
                  <div className="w-full h-1 bg-[#EF4123] mb-4 sm:mb-6" />
                  <p className="text-[#EF4123] text-left text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-[95%] leading-tight">
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardssuccess;
