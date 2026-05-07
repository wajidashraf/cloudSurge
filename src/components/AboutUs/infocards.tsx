// src/components/InfoCardContainer.tsx

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import missionImg from '@/assets/mission.png';
import visionImg from '@/assets/vision-new.png';
import worldwideIcon from '@/assets/worldwide.png';
import magnifierIcon from '@/assets/magnifier.png';

interface InfoCardProps {
  title: string;
  text: string;
  imgSrc: string;
  iconSrc: string;
  reverse?: boolean;
  borderColor?: string;
  className?: string;
  iconLeft?: string;
  icontop?: string;
  iconSize?: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  imgSrc,
  iconSrc,
  reverse = false,
  borderColor = 'border-gray-200',
  className = '',
  iconLeft = 'left-[46%]',
  icontop = 'top-[46%]',
  iconSize = 'w-[40%]'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  const containerClasses = `
    flex flex-col md:flex-row items-stretch bg-white border-4 md:border-8 ${borderColor}
    ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
    relative h-auto md:h-80 lg:h-[22rem] xl:h-96 2xl:h-96 max-w-[90vw] md:max-w-6xl mx-auto ${className}
  `;

  return (
    <div className={containerClasses} ref={ref}>
      {/* Left (or right) image panel */}
      <div className="w-full md:w-[55%] lg:w-[58%] xl:w-[60%] 2xl:w-[62%] h-48 sm:h-56 md:h-full overflow-hidden flex items-center justify-center bg-[#dbdbdb]">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Text panel with fade-in/slide-up */}
      <motion.div
        className="w-full md:w-1/2 p-4 md:p-3 lg:p-4 xl:p-5 2xl:p-4 flex flex-col items-start justify-center md:pl-16 md:pr-12 lg:pl-20 lg:pr-16 xl:pl-24 xl:pr-20 2xl:pl-30 2xl:pr-24 h-auto md:h-full"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl font-bold text-[#ef4213] mb-6 md:mb-4 lg:mb-5 xl:mb-5 2xl:mb-6 text-left flex items-center gap-3 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-0">
          <img src={iconSrc} alt="Icon" className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:hidden object-contain flex-shrink-0" />
          {title}
        </h3>
        <motion.p
          className="text-[#ef4213] text-left w-full md:w-[110%] font-medium text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl break-words"
          variants={textVariants}
        >
          {/* If your text includes HTML tags, render safely: */}
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </motion.p>
      </motion.div>

      {/* Decorative icon */}
      <div
        className={`hidden 2xl:block absolute ${iconLeft} ${icontop} -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-auto md:h-auto`}
      >
        <img src={iconSrc} alt="Icon" className={iconSize} />
      </div>
    </div>
  );
};

const InfoCardContainer: React.FC = () => {
  const cards: InfoCardProps[] = [
    {
      title: 'MISSION',
      text: 'To revolutionise <strong>IT delivery</strong> by creating powerful networks,<strong> unlocking talent, and nurturing skills through our pioneering Pod model.',
      imgSrc: missionImg,
      iconSrc: worldwideIcon,
      iconLeft: 'left-[64%]',
      icontop: 'top-[24%]',
      borderColor: 'border-[#DBDBDB]',
      iconSize: 'w-[40%]'
    },
    {
      title: 'VISION',
      text: 'To empower every person, in every region, to unleash their <strong>true potential in the digital age.',
      imgSrc: visionImg,
      iconSrc: magnifierIcon,
      reverse: true,
      iconLeft: 'left-[10.5%]',
      icontop: 'top-[34%]',
      borderColor: 'border-[#F06A61]/48',
      iconSize: 'w-[35%]'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-2 py-24 flex flex-col space-y-12">
      {cards.map((card, idx) => (
        <InfoCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default InfoCardContainer;
