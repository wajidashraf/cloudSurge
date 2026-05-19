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
import timeline from "@/assets/timeline(3).svg";
import time from "@/assets/timepass.svg";
export const Outcome = () => (
  <section className="bg-[#F2F2F2] py-8 sm:py-12 lg:py-16 max-w-6xl divide-y mx-auto mt-2 mb-2 px-4 sm:px-6 lg:px-0">
    <div className="max-w-5xl px-4 md:px-4 xl:px-2 mx-auto">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EF4123] mb-4 lowercase text-left">
        <div className="flex flex-col">
          <span className="block">the</span>
          <span className="inline-flex items-center">
            <span>outcome</span>
            <motion.img
              src={clickicon}
              alt="Click icon"
              className="ml-2 w-8 sm:w-10 lg:w-11"
            />
          </span>
        </div>
      </h2>

      {/* Intro text */}
      <p className="text-[#5B5B5B] mb-12 text-left mt-10">
        Cloud Surge’s on‑demand <strong> Fusion Pods model</strong> gave GP
        Triage the agility to meet ambitious project timelines without the
        constraints of permanent hiring. Our support provided specialist
        expertise exactly when needed, preventing resource shortages that could
        have delayed or even derailed the initiative.
      </p>

      {/* Three‑column feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
        {/* Card 1 */}
        <div className="bg-white p-6 text-left">
          <img
            src={arrow}
            alt="Scalability & Flexibility"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold text-[#EF4123] mb-2">
            Scalability & Flexibility
          </h3>
          <p className="text-[#EF4123] text-sm">
            Our plug-and‑play model meant GP Triage could scale resources up or
            down as needed, ensuring efficiency without unnecessary costs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 text-left">
          <img src={timeline} alt="Cost Efficiency" className="h-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#EF4123] mb-2">
            Cost Efficiency
          </h3>
          <p className="text-[#EF4123] text-sm">
            By eliminating the need for full‑time hires, GP Triage significantly
            reduced overheads, allowing budget reallocation to core priorities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 text-left">
          <img src={time} alt="Faster Time‑to‑Market" className="h-11 mb-4" />
          <h3 className="text-lg font-semibold text-[#EF4123] mb-2">
            Faster Time‑to‑Market
          </h3>
          <p className="text-[#EF4123] text-sm">
            We enabled GP Triage to successfully meet tight MVP deadlines,
            ensuring project momentum.
          </p>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-[#5B5B5B] text-left">
        We continue to support GP Triage as an extension of their delivery and
        support team with the ability to bring in resources as and when required
        for bug fixes and updates.
      </p>
    </div>
  </section>
);

export default Outcome;
