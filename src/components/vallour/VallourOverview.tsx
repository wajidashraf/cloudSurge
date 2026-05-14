import React from "react";
import Fawrii from "@/assets/vllour-succes-logo.png";
import Image from "@/assets/Vallour.jpg";
import PuzzleIcon from "@/assets/puzzle.svg";

export const VallourOverview: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto divide-y divide-gray-200 mt-8 sm:mt-12 md:mt-20 mb-2 px-4 sm:px-6 md:px-0">
      {/* Top section: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left */}
        <div className="pl-2 flex flex-col text-left mb-2">
          <img
            src={Image}
            alt="Medical team"
            className="mt-2 w-full object-cover rounded"
          />
        </div>
        {/* Right */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col bg-[#F2F2F2] mb-2">
          <img
            src={Fawrii}
            alt="GP Triage logo"
            className="w-48 sm:w-64 md:w-80 mb-4 sm:mb-12 md:mb-20"
          />
          <h2 className="text-[#5B5B5B] text-lg md:text-2xl md:pl-12 leading-snug text-left">
            Transforming chronic kidney <br /> disease management with <br />{" "}
            intelligent automation
          </h2>
        </div>
      </div>

      {/* Bottom "challenge" section */}
      <div className="p-4 sm:p-8 md:p-15 bg-[#F2F2F2] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 pb-6 sm:pb-8 md:pb-10">
        <img
          src={PuzzleIcon}
          alt="Challenge icon"
          className="w-32 sm:w-40 md:w-60 flex-shrink-0"
        />
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3189] capitalize mb-2 text-left">
            challenge
          </h3>
          <p className="text-[#5B5B5B] leading-relaxed text-left text-base sm:text-lg">
            <strong>Chronic kidney disease (CKD)</strong> management
            depends on consistent test data, accurate disease staging, and
            timely clinical intervention. GP practices faced fragmented datasets
            and heavily manual analysis processes that delayed early detection
            and treatment planning. <br/><br/>
            Without automation for CKD stage
            calculation, test validation, and medication checks, clinicians were
            burdened with administrative complexity, diagnostic inconsistency,
            and slow response times. The challenge: build an intelligent,
            automated system that could securely consolidate patient data, apply
            clinical logic, and surface actionable insights, without disrupting
            existing workflows.
          </p>
        </div>
      </div>
    </div>
  );
};
