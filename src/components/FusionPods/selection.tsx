import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fourArrowsImg from "@/assets/scalability.png";
import communityImg from "@/assets/community.png";
import thumbUpImg from "@/assets/thumb-up.png";
import bellImg from "@/assets/bell.png";

interface Card {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  bg: string;
  border: string;
  text: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Immediate Scalability",
    description: "Expand your workforce quickly, free from the overhead of traditional hiring.",
    imageSrc: fourArrowsImg,
    bg: "bg-[#ffffff]",
    border: "border",
    text: "text-[#ef4123]",
  },
  {
    id: 2,
    title: "Expert Collaboration",
    description: "Pre-assembled specialists who excel at working together from day one.",
    imageSrc: communityImg,
    bg: "bg-[#F78A84]",
    border: "",
    text: "text-white",
  },
  {
    id: 3,
    title: "Built-In Oversight",
    description: "Dedicated management and quality checks ensure top-tier delivery.",
    imageSrc: thumbUpImg,
    bg: "bg-[#CECECE]",
    border: "",
    text: "text-[#E94227]",
  },
  {
    id: 4,
    title: "Flexible Engagement",
    description: "Subscription or ad-hoc options to adapt as your project demands evolve.",
    imageSrc: bellImg,
    bg: "bg-[#EF4123]",
    border: "",
    text: "text-white",
  },
];

const PodModelSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // tracks whether the section is in view
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-16 lg:py-16 xl:py-16 2xl:py-24 px-4">
      <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center mb-22 md:mb-16 lg:mb-16 xl:mb-16 2xl:mb-22 text-[#ef4123]">
        Why Choose the <strong>Pod Model</strong>?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-8 max-w-5xl mx-auto">
        {cards.map(({ id, title, description, imageSrc, bg, border, text }, idx) => {
          return (
            <motion.div
              key={id}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2, 
                ease: [0.25, 0.1, 0.25, 1] // ease-in-out curve
              }}
              className={`${bg} ${border} border-[#CECECE] pl-6 md:pl-16 lg:pl-16 xl:pl-16 2xl:pl-20 pt-6 pb-6 md:pt-0 md:pb-0 flex flex-col justify-center items-start w-full max-w-[90vw] mx-auto md:w-[380px] lg:w-[420px] xl:w-[450px] 2xl:w-[481px] h-auto min-h-[200px] md:h-[320px] lg:h-[350px] xl:h-[370px] 2xl:h-[400px] md:aspect-square cursor-pointer`}
            >
              <img src={imageSrc} alt={title} className="w-12 md:w-16 lg:w-16 xl:w-18 2xl:w-20 mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 object-contain" />
              <h3 className={`text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl mb-2 ${text}`}>{title}</h3>
              <p className={`text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base leading-relaxed ${text} max-w-[85%] md:max-w-[60%]`}>
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="border-[4px] sm:border-[6px] md:border-[8px] lg:border-[8px] xl:border-[8px] 2xl:border-[10px] border-[#ef4123] bg-transparent text-[#ef4123] p-6 sm:p-8 md:p-6 lg:p-6 xl:p-6 2xl:p-8 w-full sm:w-[80vw] md:w-[60vw] lg:w-[80vw] mx-auto mb-10 mt-35 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-35">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-4 lg:space-y-0">
          {/* Left Text */}
          <div className="text-left">
            <h2 className="text-base leading-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-0 md:mb-2">Transforming IT Delivery</h2>
            <h3 className="text-base leading-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">with Innovative Pod Model</h3>
          </div>

          {/* Right Links */}
          <div className="space-y-4">
            <a href="/contact" className="flex items-center gap-2 group">
              <span className="text-base leading-tight sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold hover:scale-115">↳ Grow your business</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodModelSection;
