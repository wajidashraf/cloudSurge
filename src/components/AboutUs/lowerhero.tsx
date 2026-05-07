import React, { type FC, type JSX } from 'react';
import { motion } from 'framer-motion';
import bg from "@/assets/visualopa.png";
import logo from "@/assets/cslowerhero.png";

const HeroSectionL: FC = (): JSX.Element => {
  return (
    <>
      {/* Mobile Layout: Split Screen */}
      <section className="md:hidden flex flex-col w-full">
        {/* Top Half: Image with Logo */}
        <div className="relative h-[40vh] w-full">
          <img src={bg} alt="Background" className="w-full h-full object-cover" />
          
          {/* Logo at bottom left */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-6 left-6 z-10"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom Half: Text Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="w-full bg-white px-8 pt-15"
        >
          <h1 className="text-3xl font-semibold text-[#5D5D5D] mb-3 leading-tight">
            Empowering Global Talent
          </h1>
          <p className="text-sm text-[#5D5D5D] leading-relaxed">
            Our grassroots training programme equips ambitious minds with skills, including AI and the Cloud. By bridging the gap between professionals and businesses, we're creating a win-win where innovation thrives and careers soar.
          </p>
        </motion.div>
      </section>

      {/* Desktop Layout: Original Design */}
      <section className="hidden md:block relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={bg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>

        {/* Company Logo */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute z-10 left-10 lg:left-16 xl:left-20 2xl:left-45 top-35 2xl:top-60"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="w-48 lg:w-64 xl:w-80 2xl:w-120 h-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="absolute z-10 left-16 lg:left-20 xl:left-55 bottom-20 max-w-xl"
        >
          <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white mb-6 leading-tight">
            Empowering Global Talent
          </h1>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-2xl text-white opacity-90 leading-relaxed">
            Our grassroots training programme equips ambitious minds with skills, including AI and the Cloud. By bridging the gap between professionals and businesses, we're creating a win-win where innovation thrives and careers soar.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSectionL;
