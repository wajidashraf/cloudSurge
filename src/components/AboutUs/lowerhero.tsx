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
        <div className="relative h-[45vh] w-full">
          <img src={bg} alt="Background" className="w-full h-full object-cover object-center" />

          {/* Logo at bottom left */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-4 left-4 z-10"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="w-28 sm:w-36 h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom Half: Text Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="w-full bg-white px-6 sm:px-10 py-10"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#5D5D5D] mb-4 leading-tight">
            Empowering Global Talent
          </h1>
          <p className="text-sm sm:text-base text-[#5D5D5D] leading-relaxed">
            Our grassroots training programme equips ambitious minds with skills, including AI and the Cloud. By bridging the gap between professionals and businesses, we're creating a win-win where innovation thrives and careers soar.
          </p>
        </motion.div>
      </section>

      {/* Desktop Layout: Original Design */}
      <section className="hidden md:flex min-h-screen w-full overflow-hidden relative">
        {/* Background Image */}
        <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />

        {/* Foreground: flex column, logo top-left, text bottom-left */}
        <div className=" container relative z-10 flex flex-col justify-around w-full h-full min-h-screen mx-auto max-w-[1280px] px-10 lg:px-0  py-15 2xl:py-30">
          {/* Company Logo — top */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={logo}
              alt="Company Logo"
              className="w-40 lg:w-56 xl:w-70 2xl:w-120 h-auto -ml-8"
            />
          </motion.div>

          {/* Text Content — bottom */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white my-6 leading-tight">
              Empowering Global Talent
            </h1>
            <p className="text-sm lg:text-base xl:text-lg 2xl:text-2xl text-white opacity-90 leading-relaxed">
              Our grassroots training programme equips ambitious minds with skills, including AI and the Cloud. By bridging the gap between professionals and businesses, we're creating a win-win where innovation thrives and careers soar.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionL;
