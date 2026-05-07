import React, { useEffect } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import asset7 from '@/assets/redicon.svg';
import briefcase from '@/assets/briefcase.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ImpactSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="bg-[#ED9696]/44 py-24"
    >
      {/* Image with split background */}
      <div
        className="flex justify-center "
        style={{
          background: 'linear-gradient(to bottom, rgba(237, 150, 150, 0.1327), transparent)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top',
        }}
      >
       
      </div>

      <div className="container mx-auto px-4">
        <h2 className="flex flex-col md:flex-row items-start text-left font-semibold leading-tight mb-6">
          <div className="flex flex-col items-start">
            <span
              className="block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[200px] xl:text-[260px] 2xl:text-[350px] leading-none"
              style={{
                backgroundImage: 'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {inView ? (
                <CountUp start={0} end={1000000} duration={3} separator="," redraw />
              ) : (
                '0'
              )}+
            </span>
            <div className="flex flex-row items-center justify-start md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
              <span
                className="block text-2xl sm:text-4xl md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[100px]"
                style={{
                  backgroundImage: 'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                highly skilled IT jobs
              </span>

              <img
                src={briefcase}
                alt="Click icon"
                className="ml-4 w-10 h-10 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 flex-shrink-0"
              />
            </div>
          </div>
        </h2>

        {/* Subheading */}
        <motion.p
          variants={sectionVariants}
          className="text-lg sm:text-5xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl text-[#ef4123] font-bold mb-4 sm:mb-6 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 max-w-full sm:max-w-2xl mt-4 sm:mt-6 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 text-left"
        >
          Empowering Communities<br /> & Catalysing Change
        </motion.p>
        <motion.p
          variants={sectionVariants}
          className="text-lg sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#ef4123] max-w-full sm:max-w-[35%] md:max-w-[65%] lg:max-w-[65%] xl:max-w-[65%] 2xl:max-w-[35%] text-left"
        >
          We aim to create 1 million highly skilled IT jobs in emerging economies by establishing offices and training academies in smaller towns and cities. Along the way, we've impacted countless lives, stimulating local economies and inspiring the next generation of tech leaders.
        </motion.p>

        {/* Full-width Card */}
      </div>
    </motion.section>
    <section className="px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="border-[4px] sm:border-[6px] md:border-[8px] lg:border-[8px] xl:border-[8px] 2xl:border-[10px] border-[#ef4123] bg-transparent text-[#ef4123] p-6 sm:p-8 md:p-6 lg:p-6 xl:p-6 2xl:p-8 w-full sm:w-[80vw] md:w-[60vw] lg:w-[80vw] mx-auto mb-25 mt-32 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-35"
        >
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
                <span className="text-base leading-tight sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold hover:scale-115">↳ Grow your business</span>
              </a>
            </div>
          </div>
        </motion.div>
    </section>
        </>
  );
};

export default ImpactSection;
