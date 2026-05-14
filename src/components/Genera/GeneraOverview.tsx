import React from "react";
import Fawrii from "@/assets/Genaiera_Logo_Green.png";
import Image from "@/assets/genaiera.jpg";
import PuzzleIcon from "@/assets/puzzle.svg";

export const GeneraOverview: React.FC = () => {
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
        <div className="p-4 sm:p-6 md:p-8 flex flex-col bg-[#EEFBFF] mb-2">
          <img
            src={Fawrii}
            alt="GP Triage logo"
            className="w-48 sm:w-64 md:w-80 mb-4 sm:mb-12 md:mb-20"
          />
          <h2 className="text-[#5B5B5B] text-lg md:text-2xl md:pl-12 leading-snug text-left">
            Building the platform that <br /> connects students and <br />{" "}
            tutors at scale
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
            <strong>Genaiera</strong> sought to transform their business
            applications with intelligent, adaptive features that could
            meaningfully enhance user engagement and productivity. Traditional
            automation tools were constrained to static workflows, demanding
            significant manual input and offering little contextual awareness.{" "}
            <br />
            <br />
            The challenge: develop an AI-driven solution capable of
            understanding user intent, predicting actions, and delivering
            real-time assistance, all within the Microsoft Power Platform
            ecosystem, without compromising the integrations their teams relied
            on{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
