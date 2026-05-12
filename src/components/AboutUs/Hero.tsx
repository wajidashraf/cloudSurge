import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { linkPoints } from "@/components/AboutUs/data/linkpoints";
import map from "@/assets/map.svg";
import logo from "@/assets/lowerhero.svg";

interface Point {
  x: number;
  y: number;
}

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 0.2,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const circleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.2 + 0.8, duration: 0.6, ease: "backOut" },
  }),
};

function getCurvedPath(center: Point, target: Point): string {
  const midX = (center.x + target.x) / 2;
  const midY = (center.y + target.y) / 2;
  return `M ${center.x},${center.y} Q ${midX},${midY - 20} ${target.x},${target.y}`;
}

const HeroSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const center: Point = linkPoints[0];
  const targets: Point[] = linkPoints.slice(1);

  return (
    <section className="relative bg-gradient-to-b from-red-50 to-white min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Preload Map */}
      <img
        src={map}
        alt="Map Preload"
        className="hidden"
        onLoad={() => setMapLoaded(true)}
      />

      {/* Render rest of layout only after map is loaded */}
      {mapLoaded && (
        <>
          <div className="w-[95vw] sm:w-[85vw] md:w-[80vw] max-w-[1800px] mx-auto relative h-[calc(95vw*0.6)] sm:h-[calc(85vw*0.6)] md:h-[calc(80vw*0.6)] -mt-12 sm:mt-0">
            <img
              src={map}
              alt="World Map"
              className="w-full h-full object-contain opacity-40"
            />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full"
            >
              {targets.map((target, i) => (
                <g key={`connection-${i}`}>
                  <motion.path
                    d={getCurvedPath(center, target)}
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}
                    custom={i}
                    stroke="#e94325"
                    strokeWidth={1}
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#glow)"
                    style={{ strokeDasharray: "0.2 0.1" }}
                  />
                  <motion.circle
                    cx={target.x}
                    cy={target.y}
                    r={0.9}
                    initial="hidden"
                    animate="visible"
                    variants={circleVariants}
                    custom={i}
                    fill="#ef4123"
                  />
                </g>
              ))}
            </svg>

            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${center.y}%`, left: `${center.x}%` }}
            >
              <img
                src={logo}
                alt="Connection Hub"
                className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-full shadow-lg bg-[#ef4123]"
                style={{
                  border: "2px solid #e94325",
                  boxShadow: "0 0 12px ef4123",
                }}
              />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute left-8 md:left-4 md:translate-x-0 lg:left-18 2xl:left-38 top-[calc(5rem+8%)] md:top-auto md:bottom-110 lg:bottom-15 max-w-[300px] sm:max-w-[400px] text-left md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className=" text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[85px] font-extrabold text-[#ef4123] leading-[0.9]">
                Built to Deliver.
              </p>
              <motion.p
                className="text-[#ef4123] mt-2 sm:mt-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-extrabold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                And built to&nbsp;
                {/* hidden on mobile, shown from sm upwards */}
                <br className="hidden sm:block" />
                mean something.
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute left-4 md:left-auto md:translate-x-0 md:right-5 sm:right-0 bottom-3 sm:bottom-4 md:bottom-8 lg:bottom-12 xl:bottom-20 2xl:bottom-16 bg-[#D9D9D9]/50 backdrop-blur-sm flex flex-col justify-end lg:flex-row lg:items-end lg:divide-y-0 lg:[&>*+*]:border-l-4 lg:[&>*+*]:border-[#D9D9D9] md:[&>*+*]:h-32 lg:[&>*+*]:h-36 xl:[&>*+*]:h-38 2xl:[&>*+*]:h-40 lg:[&>*+*]:my-auto w-[calc(100vw-2rem)] sm:max-w-[min(600px,40vw)] md:max-w-[min(480px,42vw)] lg:max-w-[min(600px,48vw)] xl:max-w-[min(720px,54vw)] 2xl:max-w-[min(900px,60vw)]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="px-4 sm:px-6 pt-4 sm:pt-16 pb-4 sm:pb-6 md:px-4 md:py-2 lg:px-6 lg:py-2 xl:px-7 xl:py-3 2xl:pl-8 2xl:pr-20 2xl:py-3 flex-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <p className="text-[#5D5D5D] lg:py-6 leading-5 text-sm sm:text-base md:text-xs lg:text-sm xl:text-base 2xl:text-lg max-w-full">
                  Cloud Surge is a UK tech delivery partner. We provide
                  pre-formed teams that integrate with your environment and
                  start delivering in 48 hours. We are also on a mission to
                  create one million tech jobs in underserved communities,
                  starting in Gojra, Pakistan.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
