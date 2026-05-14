// src/components/GPTriageSolution.tsx
import React from "react";
import PuzzleIcon from "@/assets/redpuzzle.png";
import LightningIcon from "@/assets/redicon.svg";

export const VallourSolution: React.FC = () => {
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
            <strong>CloudSurge deployed a Fusion Pod:</strong> a
            cross-functional team combining Power Platform, data engineering,
            and clinical logic expertise, brought together to design and deliver
            the CKD Patient Analysis Engine.
          </p>
        </h3>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-6">
        <p className="text-left text-[#5B5B5B] text-base sm:text-lg"></p>

        {/* Feature list */}
        <p className="space-y-3 text-base sm:text-lg text-left text-[#5B5B5B]">
          Built on <strong>Microsoft Power Pages and Dataverse,</strong> the solution centralised
          patient data from GP-uploaded CSVs, covering critical clinical
          indicators including ACR, GFR, blood pressure, medications, and
          allergies. Governed Power Automate flows enforced strict validation
          rules to maintain data accuracy and consistency throughout. <br/> <br/>
          A <strong>custom C# plugin</strong> automated the application of clinical equation logic,
          enforcing mandatory testing requirements (two ACR and two GFR readings
          at least three months apart), calculating CKD stages, and generating
          monitoring schedules and medication suggestions validated against each
          patient's allergies and current prescriptions.<br/><br/> 
          <strong>PCF components</strong> gave clinicians real-time visibility into medication status and disease
          progression, while embedded Power BI dashboards delivered
          drill-through trend analytics, covering everything from initial data
          ingestion through to actionable clinical insight.
        </p>
      </div>
    </div>
  );
};
