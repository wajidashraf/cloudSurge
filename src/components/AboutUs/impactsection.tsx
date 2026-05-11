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

 
      <div className="container mx-auto max-w-[1280px]">
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
        {/* <motion.p
          variants={sectionVariants}
          className="text-lg sm:text-5xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl text-[#ef4123] font-bold mb-4 sm:mb-6 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 max-w-full sm:max-w-2xl mt-4 sm:mt-6 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 text-left"
        >
          Empowering Communities<br /> & Catalysing Change
        </motion.p> */}
        <motion.p
          variants={sectionVariants}
          className="text-lg sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#ef4123] max-w-full sm:max-w-[35%] md:max-w-[65%] lg:max-w-[65%] xl:max-w-[65%] 2xl:max-w-[40%] text-left"
          >
        We are working towards creating one million skilled IT jobs in emerging economies, beginning with training academies and offices in Gojra, Pakistan.
        </motion.p>
          <br/>
          <motion.p  variants={sectionVariants}
          className="text-lg sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#ef4123] max-w-full sm:max-w-[35%] md:max-w-[65%] lg:max-w-[65%] xl:max-w-[65%] 2xl:max-w-[40%] text-left"
          >
When you work with Cloud Surge, you are part of that.
          </motion.p>

        {/* Full-width Card */}
      </div>
    </motion.section>
    <section className="w-full bg-white py-32 px-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center gap-8 max-w-[768px] mx-auto"
      >
        {/* Heading */}
        <h2
          className="text-center text-black font-bold"
          style={{
            fontFamily: 'Bahnschrift, sans-serif',
            fontSize: 'clamp(28px, 4vw, 45px)',
            lineHeight: '54px',
            letterSpacing: '-0.01em',
          }}
        >
          Be a Part of Something Bigger
        </h2>

        {/* Actions */}
        <div className="flex flex-row items-center gap-4">
          <a
            href="/careers"
            className="flex items-center justify-center px-3 py-1.5 rounded-md  transition-opacity"
            style={{ minWidth: '184px', height: '39px', background: 'linear-gradient(20deg, #ec3f24 0%, #ec3f24 40%, #7300bf 65%, #0a0a90 100%)', }}
          >
            <span
              className="text-white font-semibold"
              style={{ fontFamily: 'Bahnschrift, sans-serif', fontSize: '18px', lineHeight: '150%' }}
            >
              Explore Careers
            </span>
          </a>

          <a
            href="/contact"
            className="flex items-center justify-center px-3 py-1.5 rounded-md border border-[#EC3F24] hover:bg-[#EC3F24]/5 transition-colors"
            style={{ minWidth: '156px', height: '39px' }}
          >
            <span
              className="text-[#EC3F24] font-semibold"
              style={{ fontFamily: 'Bahnschrift, sans-serif', fontSize: '18px', lineHeight: '150%' }}
            >
              Grow your business
            </span>
          </a>
        </div>
      </motion.div>
    </section>
        </>
  );
};

export default ImpactSection;
