// src/components/GPTriageSolution.tsx
import React from "react";
import PuzzleIcon from "@/assets/redpuzzle.png";
import LightningIcon from "@/assets/redicon.svg";

export const FawriiSolution: React.FC = () => {
  return (
    <div className="max-w-6xl p-4 sm:p-6 md:p-10 mx-auto bg-[#FFEAEA] border border-red-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-4 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-14">
        <img
          src={PuzzleIcon}
          alt="Solution icon"
          className="w-32 sm:w-40 md:w-55 flex-shrink-0"
        />
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4230] text-left">
          solution
          <br />
          <br />
          <p className="text-base sm:text-lg font-normal text-left text-[#5B5B5B]">
            CloudSurge deployed a Fusion Pod to design and deliver a full-stack
            digital platform built on modern, scalable technologies.
          </p>
        </h3>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-6">
        <p className="text-left text-[#5B5B5B] text-base sm:text-lg"></p>

        {/* Feature list */}
        <p className="space-y-3 text-base sm:text-lg text-left">
          The backend was built with .NET, providing a reliable, secure, and
          high-performance architecture capable of handling concurrent users and
          complex business logic. On the frontend, a React-based interface
          delivers a responsive, intuitive experience across all devices,
          whether a student booking a lesson or a tutor reviewing their
          schedule. <br/><br/>
          The Stripe was integrated for secure payment processing and
          subscription management, keeping transactions smooth for all parties.
          For live sessions, Agora powers the virtual classroom, enabling
          real-time video, screen sharing, and interactive collaboration between
          students and tutors. Underpinning everything, a SQL database
          architecture ensures organised, scalable data storage with strong
          query performance and data integrity.
        </p>
      </div>
    </div>
  );
};
