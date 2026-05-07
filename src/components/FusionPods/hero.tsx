import { motion } from 'framer-motion';
import icon from '@/assets/pod.png';
import bg from '@/assets/header.png';
import bgMobile from '@/assets/fusion-mobile.png';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:block">
      {/* Background Image */}
      <div className="h-[40%] md:h-auto md:absolute md:inset-0 md:mt-20 lg:mt-20 mt-15">
        <img
          src={bgMobile}
          alt="Background"
          className="w-full h-auto md:hidden"
        />
        <img
          src={bg}
          alt="Background"
          className="hidden md:block w-full h-full object-cover object-[25%] md:object-center 2xl:object-fill"
        />
      </div>

      {/* Text Container */}
      <div className="flex-1 flex items-start justify-center px-4 pt-5 bg-white md:bg-transparent relative z-10 md:absolute md:z-10 md:left-4 md:translate-x-0 lg:left-20 xl:left-32 md:bottom-25 lg:bottom-10 max-w-3xl md:px-0 md:items-start text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          key={Math.random()} // triggers re-animation on mount
        >
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-[#ef4123] md:text-white leading-tight">
            <img src={icon} className='w-30 mx-0 [filter:brightness(0)_saturate(100%)_invert(38%)_sepia(90%)_saturate(3000%)_hue-rotate(350deg)_brightness(95%)_contrast(95%)] md:filter-none' alt="" />
            Introducing the <br/>Fusion Pod Model
          </h1>
          <h1 className="text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#ef4123] md:text-white leading-tight mt-2 md:mt-8">
            High-impact, agile IT teams
          </h1>
          <p className="text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#ef4123] md:text-white opacity-90 leading-relaxed">
            ready when you are
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
