import { motion } from 'framer-motion';
import icon from '@/assets/clickwhite.png';
import bg from '@/assets/careerhero.png';
import bgMobile from '@/assets/careers-mobile.png';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:block">
      {/* Background Image */}
      <div className="h-[60%] md:h-auto md:absolute md:inset-0 md:mt-20 lg:mt-20 mt-15">
        <img
          src={bgMobile}
          alt="Background"
          className="w-full h-auto md:hidden"
        />
        <img
          src={bg}
          alt="Background"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>

      {/* Text Container Centered */}
      <div className="flex-1 flex items-start justify-start px-4 pt-4 bg-white md:bg-transparent relative z-10 md:absolute md:top-auto md:translate-y-0 md:py-35 md:left-1/2 md:transform md:-translate-x-1/2 md:px-0 md:items-center md:justify-center text-left md:text-center w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-[#ef4123] md:text-white leading-tight flex flex-col items-center justify-center">
            {/* Mobile: Careers on first line, @ Cloud Surge + arrow on second line */}
            <div className="flex flex-col sm:flex-row justify-center">
              <span className="mb-0 sm:mb-0">Careers</span>
              <div className="flex items-center justify-center sm:ml-2">
                <span className="sm:whitespace-nowrap md:whitespace-nowrap 2xl:whitespace-normal">@ Cloud Surge</span>
                <img src={icon} alt="Click Icon" className="w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 ml-2 sm:ml-2 [filter:brightness(0)_saturate(100%)_invert(38%)_sepia(90%)_saturate(3000%)_hue-rotate(350deg)_brightness(95%)_contrast(95%)] md:filter-none" />
              </div>
            </div>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
