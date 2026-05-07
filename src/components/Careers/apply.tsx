// src/components/OpeningsSection.tsx

import React, { useRef } from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, type Variants, useScroll, useTransform } from 'framer-motion';

interface Opening {
  id: number;
  title: string;
}

const openingsData: Opening[] = [
  { id: 1, title: 'Senior QA Analyst - Dynamics 365 | Azure DevOps' },
  { id: 2, title: 'Senior Dynamics 365 + Power Platform Consultant' },
  { id: 3, title: 'Senior Dynamics 365 + Power Platform Functional Consultant' },
  { id: 4, title: 'Dynamics 365 F&O Technical Consultant' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

const OpeningsSection: React.FC = () => {
  const needsScroll = openingsData.length > 8;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll progress inside the scrollable container
  const { scrollYProgress } = useScroll({ container: scrollRef });
  // Map progress [0,1] to y offset [0%, 100%]
  const iconY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative rounded-lg overflow-hidden mx-4 md:mx-8 py-26 md:py-16 lg:py-20 xl:py-24 2xl:py-35 mt-8 md:mt-12 lg:mt-16 xl:mt-18 2xl:mt-21">
      {/* Header Tab floating above */}
      <div className="absolute top-26 md:top-16 lg:top-20 xl:top-24 2xl:top-35 z-10 right-4 md:right-20 lg:right-28 xl:right-36 2xl:right-45 transform -translate-y-1/2 bg-[#F2F2F2] px-6 md:px-12 lg:px-14 xl:px-16 2xl:px-20 py-3 md:py-4 lg:py-4 xl:py-4 2xl:py-5 pb-4 md:pb-6 lg:pb-6 xl:pb-7 2xl:pb-8 mb-4 md:mb-0" style={{
        borderRadius: '20px 20px 0 0',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
      }}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-[#ef4213] ">Openings</h2>
      </div>

      {/* Content Background */}
      <div className="bg-[#F2F2F2] pb-8 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-40 pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-40 px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-30 md:pl-20 lg:pl-28 xl:pl-36 2xl:pl-55 mb-8 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-40 ml-2 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-15 mr-2 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-15 rounded-3xl relative mt-4 md:mt-0">
        <motion.div
          ref={scrollRef}
          className={
            needsScroll
              ? 'max-h-[400px] md:max-h-[320px] overflow-y-scroll pr-2 md:pr-4 custom-futuristic-scrollbar'
              : ''
          }
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
            {openingsData.map((opening) => (
              <motion.div
                key={opening.id}
                className="flex flex-col h-full mb-4 md:mb-0"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-[#ef4213]">
                  {opening.id}.
                </span>
                <h3 className="mt-1 text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[73%] font-semibold text-[#EF4123] leading-tight">
                  {opening.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center mb-2">
                    <div className="h-px flex-grow bg-[#ef4123] max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%]" />
                  </div>
                  <a
                    href="mailto:talent@cloudsurge.uk"
                    className="inline-flex items-center text-[#5D5D5D] text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base"
                  >
                    <span className="text-[#EF4123] text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg mr-1">
                ↳
              </span>
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator on the right, moves with scroll */}
        {needsScroll && (
          <motion.div
            style={{ y: iconY }}
            className="absolute right-6 top-6"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#E94325] rounded-full blur-sm"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Call-to-Action */}
      <div className="border-[4px] sm:border-[6px] md:border-[8px] lg:border-[8px] xl:border-[8px] 2xl:border-[10px] border-[#ef4123] bg-transparent text-[#ef4123] p-6 sm:p-8 md:p-6 lg:p-6 xl:p-6 2xl:p-8 w-full sm:w-[80vw] md:w-[60vw] lg:w-[80vw] mx-auto mb-10 mt-35 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-35">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-4 lg:space-y-0">
          {/* Left Text */}
          <div className="text-left">
              <h2 className="text-lg leading-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">
                Be Part of<br className="hidden sm:block" /> Something Bigger
              </h2>
            </div>

          {/* Right Links */}
          <div className="space-y-4">
            <a href="/careers" className="flex items-center gap-2 group">
              <span className="text-base leading-tight sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold hover:scale-115">↳ Explore Careers</span>
            </a>
            <a href="/contact" className="flex items-center gap-2 group">
              <span className="text-base leading-tight sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold hover:scale-115">↳ Questions or Just Curious</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningsSection;
