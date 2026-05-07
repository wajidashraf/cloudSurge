import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import manVertical from '@/assets/man_vertical.png';
import lowerHero from '@/assets/lowerhero.svg';

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const logoHover = {
    hover: { scale: 1.1, rotate: 10, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <motion.section
      className="relative w-full h-[50vh] md:h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Parallax background image */}
      <motion.img
        src={manVertical}
        alt="Person working on laptop"
        className="object-cover w-full h-full"
        style={{ willChange: 'transform' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 flex flex-col justify-end px-8 lg:px-24 pb-6 sm:pb-16">
        <motion.div
          ref={ref}
          className="max-w-4xl"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-[65px] -tracking-[0.05em] text-white leading-tight text-left">
            Transforming IT<br/> Delivery with Innovative
            <br /> Pod Model
          </h1>
        </motion.div>

        <motion.div
          className="absolute top-8 right-8"
          variants={logoHover}
          whileHover="hover"
        >
          <img
            src={lowerHero}
            alt="Cloud Surge"
            className="h-12 md:h-24 w-auto cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};