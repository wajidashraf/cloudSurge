// src/components/Testimonial.jsx
import React from "react";
import quoteIcon from "@/assets/quote.svg"; // your quote‑mark icon
import zaptica from "@/assets/zaptica.webp"; // GP Triage logo

export const Testimonial = () => (
  <>
    <section className="max-w-6xl mx-auto px-4 py-8 sm:py-10 md:py-12">
      {/* Quote + text */}
      <div className="flex flex-row items-start mb-6 sm:mb-8">
       
        <p className="text-[#8E8E8E] leading-relaxed text-left text-lg sm:text-xl">
          <span className="pe-2">
            <img
              src={quoteIcon}
              alt="Quote icon"
              className="h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 flex-shrink-0 mr-0 sm:mr-3 lg:mr-4 mb-3 sm:mb-0 inline-block sm:ml-0"
            />
          </span>
          <strong>Cloud Surge</strong> took a huge weight off our shoulders.
          Rather than seeing them as individual contractors, we saw them as a
          true extension of our team. Their ability to provide highly skilled
          professionals at the right moment made all the difference. This wasn’t
          just outsourcing it was a strategic partnership that allowed us to
          scale when we needed it most. We would absolutely work with Cloud
          Surge again.
        </p>
      </div>

      {/* Bordered logo–company block */}
      <div className="">
        <div className="flex items-center py-4 mt-12 sm:mt-16 md:mt-20">
          <img
            src={zaptica}
            alt="GP Triage Logo"
            className="h-12 sm:h-16 md:h-20"
          />
        </div>
        <div className=" py-2 border-b">
          <p className="text-[#8E8E8E] text-left text-sm  sm:text-base">
            Cutting edge AI chatbot solution <br />
            for GP surgeries.
          </p>
        </div>
        <div className="py-2">
          <p className="text-[#8E8E8E] text-left font-bold text-sm sm:text-base">
            Hannan Chaudery,
            <br /> <span className="font-medium">CTO at GP Triage</span>
          </p>
        </div>
      </div>
      {/* Bottom Call-to-Action */}
    <div className="border-4 sm:border-6 mb-20 lg:border-8 border-[#E94325] p-4 sm:p-5 lg:p-6 mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between items-start lg:items-start">
      {/* Left Text Section */}
      <div className="text-[#EF4123] text-left mb-6 lg:mb-0">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Be Part of
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1">
          Something Bigger
        </h2>
      </div>

      {/* Right Links Section */}
      <div className="flex flex-col space-y-2 sm:space-y-3 w-full lg:w-auto items-start">
        <a
          href="/contact"
          className="flex items-center text-[#E94227] text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-transform"
        >
          <span className="text-[#EF4123] text-lg sm:text-xl lg:text-2xl xl:text-3xl mr-1 sm:mr-2">
            ↳
          </span>
          Grow Your Business
        </a>
        <a
          href="/Zaptica.pdf"
          download="Zaptica"
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
