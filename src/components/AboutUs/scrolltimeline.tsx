import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PlugAndPlay from '@/assets/timeline(1).svg';
import Talking from '@/assets/timeline(2).svg';
import Target from '@/assets/timeline(3).svg';
import Worldwide from '@/assets/timeline(4).svg';
import Culture from '@/assets/timeline(5).svg';
import CentralIcon from '@/assets/redicon.svg';
import users from '@/assets/users-group.png';
import stackLine from '@/assets/stack-line.svg';
import vector from '@/assets/Vector.svg';


// Define the shape of a timeline item
interface TimelineItem {
  side: 'left' | 'right';
  title: string;
  description: string;
  image: string;
}

// Array of timeline items
const timelineItems: TimelineItem[] = [
  { side: 'right', title: 'Teams, not individuals', description: 'Individual contractors create single points of failure. Our Pods are pre-formed teams who already know how to work together, so you do not spend the first month watching them figure each other out.', image: users },
  { side: 'left', title: '48 hours to running', description: 'Traditional hiring or subcontracting takes weeks. Our teams assess, assemble, and start in 48 hours from a confirmed engagement.', image: PlugAndPlay },
  { side: 'right', title: 'Governance from day one', description: 'Every Pod includes a Pod Lead with project management and QA built in. You get oversight and accountability, not just resource.', image: Talking },
  { side: 'left', title: 'Stack-inclusive', description: 'We work across Microsoft (Dynamics 365, Power Platform, Azure), Salesforce, AWS, and custom application development. One partner for most of what you need.', image: stackLine },
  { side: 'right', title: 'Scale without lock-in', description: 'Scale up or reduce capacity as projects demand, without long notice periods or contractual penalties.', image: vector }
];




// Timeline item content
const TimelineItemContent: React.FC<{ item: TimelineItem; visible: boolean; delay: number; isIntermediate: boolean; rightAlign?: boolean }> = ({ item, visible, delay, isIntermediate, rightAlign }) => (
  <motion.div
    className={`bg-white p-4 md:p-4 lg:p-5 xl:p-5 2xl:p-6 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-md 2xl:max-w-lg ${rightAlign ? 'text-right' : 'text-left'}`}
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: isIntermediate ? 0.4 : 0.8, delay: delay }}
  >
    <h3 className="text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#5d5d5d] font-semibold mb-1">
      {item.title}
    </h3>
    <p className="text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg text-[#9E9E9E]">
      {item.description}
    </p>
  </motion.div>
);

// Icon circle
const TimelineIcon: React.FC<{ image: string; visible: boolean; delay: number; isIntermediate: boolean }> = ({ image, visible, delay, isIntermediate }) => (
  <motion.div
    className="bg-white p-2 md:p-0"
    initial={{ opacity: 0, y: 0 }}
    animate={visible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: isIntermediate ? 0.3 : 0.6, delay }}
  >
    <img src={image} alt="Timeline icon" className="w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-25 2xl:h-25 object-contain" />
  </motion.div>
);

const ScrollTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isIntermediate, setIsIntermediate] = useState(false);

  // Detect if screen is intermediate size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsIntermediate(width >= 768 && width < 1536);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Track scroll progress relative to section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // when line starts growing
      const start = windowHeight * 0.34;
      // when line reaches bottom of section
      const end = rect.height;
      // bottom of growing line relative to top of container
      const bottomPos = Math.min(Math.max(windowHeight - rect.top - start, 0), end);
      const progress = (bottomPos / end)+0.18;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxHeight = '90%';
  const dynamicHeight = `${scrollProgress * 85}%`;

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center -mt-10 2xl:-mt-14 pb-16 md:pb-46">
      {/* heading */}
      {/* <div className="text-center mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#EF4123]">
          How It Works
        </h1>
      </div> */}
      {/* central icon and base line */}
      <div className="relative w-full flex justify-center mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#DDDDDD] -translate-y-1/2 z-0" />
        <div className="relative z-10 bg-white rounded-full border-2 md:border-3 lg:border-3 xl:border-3 2xl:border-4 border-[#DDDDDD] p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4">
          <img src={CentralIcon} alt="Central icon" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 object-contain" />
        </div>
      </div>

      {/* growing vertical line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 z-0"
        style={{ background: 'linear-gradient(to bottom, #DDDDDD 60%, rgba(221,221,221,0) 100%)' }}
        initial={{ height: '0%' }}
        animate={{ height: dynamicHeight }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
          style={{ background: 'radial-gradient(circle, #fff 0%, rgba(221,221,221,0) 100%)' }}
        />
      </motion.div>
      {/* timeline items */}
      <div className="flex flex-col w-full space-y-12 md:space-y-16 lg:space-y-18 xl:space-y-20 2xl:space-y-24">
        {timelineItems.map((item, idx) => {
          // each item appears when scrollProgress > threshold
          const threshold = (idx + 1) / timelineItems.length;
          const visible = scrollProgress >= threshold;
          const delay = idx * 0.2;
          return (
            <div key={idx} className="relative flex w-full px-4 md:px-8">
              <div className="w-full flex justify-between">
                {item.side === 'left' ? (
                  <>
                    <div className="w-1/2 flex justify-end pr-4">
                      <TimelineItemContent item={item} visible={visible} delay={delay} isIntermediate={isIntermediate} rightAlign />
                    </div>
                    <div className="w-1/2 flex justify-start pl-4">
                      <TimelineIcon image={item.image} visible={visible} delay={delay} isIntermediate={isIntermediate} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 flex justify-end pr-4 text-left">
                      <TimelineIcon image={item.image} visible={visible} delay={delay} isIntermediate={isIntermediate} />
                    </div>
                    <div className="w-1/2 flex justify-start pl-4 text-left">
                      <TimelineItemContent item={item} visible={visible} delay={delay} isIntermediate={isIntermediate} />
                    </div>
                  </>
                )}

              </div>
              {/* circle marker */}
              <motion.div
                className="absolute left-1/2 mt-6 transform -translate-x-1/2 bg-[#DDDDDD] rounded-full p-2 z-10"
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : {}}
                transition={{ duration: 0 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTimeline;