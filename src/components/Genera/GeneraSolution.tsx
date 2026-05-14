// src/components/GPTriageSolution.tsx
import React from "react";
import PuzzleIcon from "@/assets/redpuzzle.png";
import LightningIcon from "@/assets/redicon.svg";

export const GeneraSolution: React.FC = () => {
  return (
    <div className="max-w-6xl p-4 sm:p-6 md:p-10 mx-auto bg-[#FFEAEA] border border-red-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-4 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-14">
        <img
          src={PuzzleIcon}
          alt="Solution icon"
          className="w-32 sm:w-40 md:w-55 flex-0"
        />
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4230] text-left">
          solution
          <br />
          <br />
          <p className="text-base sm:text-lg font-normal text-left text-[#5B5B5B]">
            CloudSurge deployed a Fusion Pod of AI specialists, Power Platform
            developers, and UX designers to build a cutting-edge, generative
            AI-powered canvas app. This cross-functional team worked
            collaboratively to blend advanced AI capabilities with the
            flexibility of Microsoft's low-code environment.
            <br />
            <br />
            The app leveraged Power Platform connectors to integrate AI models
            directly into the workflow, enabling intelligent task suggestions,
            context-aware automation, and dynamic data interactions. Through
            continuous R&D and rapid prototyping, the team iteratively refined
            AI features to sharpen usability and performance.
          </p>
        </h3>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-6">
        <p className="text-left text-[#5B5B5B] text-base sm:text-lg"></p>

        {/* Feature list */}
        <p className="space-y-3 text-base sm:text-lg text-left text-[#5B5B5B]">
          <strong className="text-[#EF4230] text-2xl">the result:</strong> a highly intuitive, adaptive interface that empowered users to interact naturally  with data and complete tasks more efficiently than ever before.
        </p>
      </div>
    </div>
  );
};
