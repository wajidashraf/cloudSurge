// src/components/Outcome.jsx
import {
  motion,
  useViewportScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from "framer-motion";
import React from "react";
import clickicon from "@/assets/arrow_icon.png";
import arrow from "@/assets/four_arrow.png";
import steps from "@/assets/steps.png";
import timeline from "@/assets/timeline(3).svg";
import time from "@/assets/four_arrow.png";
import time2 from "@/assets/watch.png";
export const Outcome = () => (
  <section className="bg-[#F2F2F2] py-8 sm:py-12 md:py-16 max-w-6xl divide-y mx-auto mt-2 mb-2">
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4123] mb-4 lowercase text-left">
        <div className="flex flex-col">
          <span className="block">the</span>
          <span className="inline-flex items-center">
            <span>outcome</span>
            <motion.img
              src={clickicon}
              alt="Click icon"
              className="ml-2 w-8 sm:w-10 md:w-11"
            />
          </span>
        </div>
      </h2>

      {/* Intro text */}
      <p className="text-[#5B5B5B] mb-4 sm:mb-5 text-left mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl max-w-full sm:max-w-[85%] md:max-w-[70%]">
        This strong technical foundation enabled Fawrii to scale its platform
        and deliver seamless learning experiences.
      </p>
      <p className="text-[#5B5B5B] mb-8 sm:mb-12 text-left text-lg sm:text-xl max-w-full sm:max-w-[85%] md:max-w-[70%]">
        With <strong>Cloud Surge’s support, Fawrii successfully </strong>{" "}
        launched a fully integrated tutoring platform, achieving:
      </p>

      {/* Feature grid */}
     <div className="grid grid-cols-1 md:max-w-[600px] mx-auto md:grid-cols-2 justify-items-center gap-8 md:gap-10 mb-8 md:mb-12">
        {/* Card 1 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left max-w-[280px]">
          <img
            src={time2}
            alt="Scalability & Flexibility"
            className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Live Learning at Scale
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong> Agora-powered classrooms brought real-time video,
            screen sharing, and interactive sessions to the platform.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left max-w-[280px]">
          <img
            src={steps}
            alt="Cost Efficiency"
            className="h-8 sm:h-10 md:h-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Increased Capacity
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Fawrii could take on a broader range of students and tutors without
            operational friction slowing them down.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left max-w-[280px]">
            <img
            src={timeline}
            alt="Faster Time‑to‑Market"
            className="h-8 sm:h-10 md:h-11 mb-3 sm:mb-4"
          />
          
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Solid Foundation
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong> A .NET and React stack gives Fawrii the
            architecture to keep growing and adding features with confidence.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left max-w-[280px]">
        <img
            src={arrow}
            alt="Faster Time‑to‑Market"
            className="h-8 sm:h-10 md:h-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Seamless Transactions
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Stripe integration made payments and subscription management
            reliable and straightforward for every user.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Outcome;
