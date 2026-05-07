import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import dg from "@/assets/poddg.png";
import dgMobile from "@/assets/pod-architecture-mobile.svg";

interface DiagramProps {
  scrollsPerWord?: number;
  imgRevealRange?: [number, number];
}

const useIsLarge = (breakpoint = 1024) => {
  const [isLarge, setIsLarge] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    const qm = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsLarge(e.matches);
    qm.addEventListener("change", handler);
    return () => qm.removeEventListener("change", handler);
  }, [breakpoint]);

  return isLarge;
};

const Diagram: React.FC<DiagramProps> = ({
  scrollsPerWord = 10.3,
  imgRevealRange = [0.35, 0.395],
}) => {
  const isLarge = useIsLarge();
  const { scrollYProgress } = useViewportScroll();

  // Heading split into words
  const heading = "What is a Pod?";
  const words = heading.split(" ");
  const wordDelay = 1 / scrollsPerWord;

  // Image reveal transforms (only used if isLarge)
  const [imgStart, imgEnd] = imgRevealRange;
  const revealPercent = useTransform(
    scrollYProgress,
    [imgStart, imgEnd],
    [0, 100]
  );
  const maskImage = useTransform(revealPercent, (p) =>
    `linear-gradient(to right, black ${p}%, transparent ${p}%)`
  );

  return (
    <section className="relative min-h-[80vh] md:min-h-[120vh] lg:min-h-[120vh] xl:min-h-[120vh] 2xl:min-h-screen w-full bg-[#E5E5E5] flex flex-col items-center justify-start md:justify-center lg:justify-start">
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-[#ef4123] text-center pt-8 md:pt-22 lg:pt-22 xl:pt-22 2xl:pt-22 mb-8 flex flex-wrap justify-center overflow-hidden">
        {words.map((word, idx) => {
          // if not large, render static text
          if (!isLarge) {
            return (
              <span key={idx} className="inline-block mx-2 font-bold">
                {word}
              </span>
            );
          }

          // on large, render animated
          const start = idx * wordDelay;
          const end = start + wordDelay;
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const y = useTransform(scrollYProgress, [start, end], [20, 0]);
          return (
            <motion.span
              key={idx}
              style={{ opacity, y }}
              className="inline-block mx-2 font-bold"
            >
              {word}
            </motion.span>
          );
        })}
      </h1>

      {/* Image */}
      <div className="lg:flex-1 flex lg:justify-center lg:items-center px-4 lg:overflow-hidden w-full">
        {isLarge ? (
          <motion.img
            src={dg}
            alt="Pod Model Diagram"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
            className="max-w-[60%] opacity-100 rotate-0"
          />
        ) : (
          <img
            src={dgMobile}
            alt="Pod Model Diagram"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-md mx-auto h-auto opacity-100 mt-2"
          />
        )}
      </div>
    </section>
  );
};

export default Diagram;
