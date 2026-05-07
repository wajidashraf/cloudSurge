import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface CoreValue {
  title: string;
  description: string;
  bgColor: string;
}

const coreValues: CoreValue[] = [
  { title: 'Innovation', description: 'We constantly seek new ways to deliver faster, smarter, and more effectively.', bgColor: 'bg-[#9B9B9B]' },
  { title: 'Empowerment', description: 'We champion growth for individuals, teams, and entire communities.', bgColor: 'bg-[#ED9696]' },
  { title: 'Collaboration', description: 'We bridge talent across borders to create powerful solutions.', bgColor: 'bg-[#F06A61]' },
  { title: 'Continuous Learning', description: 'We stay at the forefront of new technologies and upkeep industry standards.', bgColor: 'bg-[#EB4124]' }
];

export const CoreValues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Header animations
  const headerOpacity = useTransform(smooth, [0, 0.05], [0, 1]);
  const headerY       = useTransform(smooth, [0, 0.1], [50, 0]);

  // Bars
  const barOpacity = useTransform(smooth, [0.05, 0.1], [0, 1]);
  const barX       = useTransform(smooth, [0.05, 0.15], [30, 0]);

  // Items
  const itemY = (i: number) =>
    useTransform(smooth,
      [0.1 + i * 0.1, 0.2 + i * 0.1],
      [100, 0]
    );
  const itemOpacity = (i: number) =>
    useTransform(smooth,
      [0.1 + i * 0.1, 0.2 + i * 0.1],
      [0, 1]
    );

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className="bg-white p-6"
        style={{ opacity: headerOpacity }}
      >
        <div className="flex items-end flex-nowrap ml-5 sm:ml-10 md:ml-20 gap-2 sm:gap-4">
          <motion.h2
            className="text-[#EF4123] text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold cursor-pointer whitespace-nowrap"
            style={{ y: headerY }}
            whileHover={{ color: '#d12b0a', transition: { duration: 0.2 } }}
          >
            Core Values
          </motion.h2>
          <motion.div
            className="flex items-center flex-shrink-0 mb-2 md:mb-3"
            style={{ opacity: barOpacity, x: barX }}
          >
            <div className="w-7 h-2 bg-[#9B9B9B]" />
            <div className="w-7 h-2 bg-[#ED9696]" />
            <div className="w-7 h-2 bg-[#F06A61]" />
            <div className="w-7 h-2 bg-[#EB4124]" />
          </motion.div>
        </div>
      </motion.div>

      {coreValues.map((value, index) => (
        <motion.div
          key={index}
          className={`${value.bgColor} text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 `}
          style={{
            y: itemY(index),
            opacity: itemOpacity(index)
          }}
          whileHover={{
            scale: 1.05
          }}
          initial={{}}
        >
          <motion.h3
            className="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl ml-0 sm:ml-5 md:ml-20 lg:ml-32 xl:ml-40 2xl:ml-50 cursor-pointer"
            whileHover={{
              scale: 1.1,
              x: 5,
              textShadow: '0px 0px 8px rgba(255,255,255,0.8)',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            {value.title}
          </motion.h3>
<motion.p
  className={`sm:max-w-[20%] sm:mr-80 md:mr-40 lg:mr-52 xl:mr-64 2xl:mr-80 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl cursor-default ${index === 2 ?'mt-3 mb-3':''}`}
  whileHover={{
    scale: 1.03,
    transition: { duration: 0.2 }
  }}
>
  {value.description}
</motion.p>

        </motion.div>
      ))}
    </div>
  );
};

export default CoreValues;
