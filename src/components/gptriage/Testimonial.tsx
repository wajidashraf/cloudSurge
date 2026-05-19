// src/components/Testimonial.jsx
import React from "react";
import quoteIcon from "@/assets/quote.svg"; // your quote‑mark icon
import triageLogo from "@/assets/triage.svg"; // GP Triage logo

export const Testimonial = () => (
  <>
    <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
      {/* Quote + text */}
      <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6 lg:mb-8">
        {/* <img src={quoteIcon} alt="Quote icon" className="h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 flex-shrink-0 mr-0 sm:mr-3 lg:mr-4 mb-3 sm:mb-0 mx-auto sm:ml-0" /> */}
        <p className="text-[#8E8E8E] leading-relaxed text-left text-base sm:text-lg lg:text-xl">
          <span className="pe-2">
            <img
              src={quoteIcon}
              alt="Quote icon"
              className="h-6 sm:h-7 lg:h-8 w-6 md:-mt-4 sm:w-7 lg:w-8 flex-shrink-0 mr-0 sm:mr-3 lg:mr-4 mb-3 sm:mb-0 inline-block sm:ml-0"
            />
          </span>
          Working with <span className="font-bold">Cloud Surge</span> had a
          significant impact on our team. Before partnering with them, we were
          stretched thin, balancing multiple priorities and deadlines. Their
          expert Pods alleviated workload pressure, allowing our core team to
          focus on strategic priorities while Cloud Surge handled the technical
          execution. The result was a more manageable workload, reduced stress,
          and improved overall morale.
        </p>
      </div>

      {/* Bordered logo–company block */}
      <div className="">
        <div className="flex justify-start py-2 mt-10 sm:mt-15 lg:mt-20">
          <img
            src={triageLogo}
            alt="GP Triage Logo"
            className="h-8 sm:h-9 lg:h-10 w-auto mr-2 sm:mr-3"
          />
        </div>
        <div className="py-2 border-b">
          <p className="text-[#8E8E8E] text-left text-sm sm:text-base">
            Cutting edge AI chatbot solution <br />
            for GP surgeries.
          </p>
        </div>
        <div className="py-2">
          <p className="text-[#8E8E8E] text-left font-bold">
            Hannan Chaudery,
            <br /> <span className="font-medium">CTO at GP Triage</span>
          </p>
        </div>
      </div>
      {/* Bottom Call-to-Action */}
      <div className="border-4 sm:border-6 mb-20 lg:border-8 border-[#E94325] p-4 sm:p-5 lg:p-6 mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between items-end">
        {/* Left Text Section */}
        <div className="text-[#EF4123] text-left mb-6 md:mb-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Be Part of
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1">
            Something Bigger
          </h2>
        </div>

        {/* Right Links Section */}
        <div className="flex flex-col space-y-2 sm:space-y-3 w-full md:w-auto items-start">
          <a
            href="/contact"
            className="flex items-center text-[#E94227] text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-transform"
          >
            <span className="text-[#EF4123] text-lg  sm:text-xl lg:text-2xl xl:text-3xl mr-1 sm:mr-2">
              ↳
            </span>
            Grow Your Business
          </a>
          <a
            href="/GPtriage.pdf"
            download="GPTriage"
            className="flex items-center text-[#E94227] text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-transform"
          >
            <span className="text-[#EF4123] text-lg sm:text-xl lg:text-2xl xl:text-3xl mr-1 sm:mr-2">
              ↳
            </span>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Testimonial;
