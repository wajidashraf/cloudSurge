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
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
      <p className="text-[#5B5B5B] mb-4 sm:mb-5 text-left mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl max-w-full sm:max-w-[85%] md:max-w-[70%] lg:max-w-[100%]">
        The CKD Patient Analysis Engine replaced manual data handling with
        intelligent automation, transforming how clinicians manage kidney
        disease care from end to end.
      </p>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12 px-4 sm:px-6 md:px-8 md:w-[700px] mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img
            src={time2}
            alt="Scalability & Flexibility"
            className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Clinical Efficiency
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Automated disease staging and validation reduced manual review times
            and improved diagnostic accuracy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img
            src={steps}
            alt="Cost Efficiency"
            className="h-8 sm:h-10 md:h-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Actionable Insights
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Real-time dashboards empowered clinicians to monitor patient
            progress, identify risks earlier, and act.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img
            src={arrow}
            alt="Faster Time‑to‑Market"
            className="h-8 sm:h-10 md:h-11 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Scalable Architecture
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Built on the Power Platform, the solution can readily extend to
            additional conditions or clinical modules.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img
            src={timeline}
            alt="Faster Time‑to‑Market"
            className="h-8 sm:h-10 md:h-12 mb-3 sm:mb-4"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">
            Data Integrity
          </h3>
          <p className="text-[#EF4123] text-md pb-4 leading-tight">
            <strong></strong>
            Standardised ingestion workflows ensured consistent, compliant data
            capture across GP networks.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Outcome;
