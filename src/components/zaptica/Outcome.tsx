// src/components/Outcome.jsx
import {
  motion,
  useViewportScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from 'framer-motion';
import React from 'react';
import clickicon from '@/assets/arrow_icon.png'
import arrow from "@/assets/four_arrow.png"
import steps from "@/assets/steps.png"
import timeline from "@/assets/timeline(3).svg"
import time from "@/assets/four_arrow.png" 
import time2 from "@/assets/watch.png" 
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
      <p className="text-[#5B5B5B] mb-4 sm:mb-5 text-left mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl max-w-full sm:max-w-[85%] md:max-w-[70%]">
        This rapid growth led to successful acquisition within 18 months of founding!
      </p>
      <p className="text-[#5B5B5B] mb-4 sm:mb-5 text-left text-lg sm:text-xl max-w-full sm:max-w-[85%] md:max-w-[70%]">
        With <strong> Cloud Surge's support, Zaptica successfully</strong> took on and <strong>delivered</strong> the Nantes Solicitors project, achieving:
      </p>
      <p className="text-[#5B5B5B] mb-8 sm:mb-10 text-left text-base sm:text-lg max-w-full sm:max-w-[95%] md:max-w-[90%]">
       Thanks to Cloud Surge, Zaptica could say 'yes' to opportunities they might have otherwise had to turn down due to resource constraints. By leveraging our on-demand Pods, Zaptica completed the Nantes Solicitors project on time, transforming their paper-based system into a fully digitalised solution integrated with SQL, SharePoint, and various APIs.
      </p>
      
      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12 px-4 sm:px-6 md:px-8">
        {/* Card 1 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img src={time2} alt="Scalability & Flexibility" className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">Scalability & Flexibility</h3>
          <p className="text-[#EF4123] text-xs sm:text-sm pb-4">
            <strong></strong> The Pod ensured on-time delivery with complete confidence in execution.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img src={steps} alt="Cost Efficiency" className="h-8 sm:h-10 md:h-12 mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">Stronger competitive positioning</h3>
          <p className="text-[#EF4123] text-xs sm:text-sm pb-4">
            <strong></strong> Zaptica secured and completed a major contract early in its growth phase.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img src={arrow} alt="Faster Time‑to‑Market" className="h-8 sm:h-10 md:h-11 mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">Reduced operational stress</h3>
          <p className="text-[#EF4123] text-xs sm:text-sm pb-4">
            <strong></strong> The partnership allowed Zaptica to focus on project leadership while Cloud Surge handled execution.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 sm:p-5 md:p-6 text-left">
          <img src={timeline} alt="Faster Time‑to‑Market" className="h-8 sm:h-10 md:h-11 mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-[#EF4123] mb-1 sm:mb-2">Future scalability</h3>
          <p className="text-[#EF4123] text-xs sm:text-sm pb-4">
            <strong></strong> The model provided a framework for Zaptica to take on more large-scale projects without hesitation confidently.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Outcome;
