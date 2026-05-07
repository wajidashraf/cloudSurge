// src/components/GPTriageSolution.tsx
import React from 'react'
import PuzzleIcon from '@/assets/redpuzzle.png'
import LightningIcon from '@/assets/redicon.svg'

export const GPTriageSolution: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto bg-[#FFEAEA] border border-red-100 px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-14">
        <img src={PuzzleIcon} alt="Solution icon" className="w-24 sm:w-32 lg:w-40 flex-shrink-0 mx-auto sm:mx-0" />
        <div className="flex-1 lg:pl-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EF4230] text-center sm:text-left">solution</h3>
          <p className='text-base sm:text-lg font-normal text-center sm:text-left text-[#5B5B5B] mt-4'>
            Cloud Surge empowered GP Triage with a flexible, on‑demand Fusion Pods team,
            delivering expert technical support precisely when needed. Our agile approach
            complemented GP Triage's lead architect and product owner, ensuring rapid
            development without overburdening their core team.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-7 lg:pb-8 space-y-4 sm:space-y-5 lg:space-y-6 text-gray-700">
        <p className='text-center sm:text-left text-[#5B5B5B] text-sm sm:text-base'>
          Leveraging Microsoft's Power Platform and Azure, we developed a scalable solution
          that seamlessly integrated into GP workflows:
        </p>

        {/* Feature list */}
        <ul className="space-y-2 sm:space-y-3">
          <li className="flex items-start text-sm sm:text-base">
            <img src={LightningIcon} alt="Bolt" className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 mt-1" />
            <span className="ml-2 sm:ml-3">
              <strong>Dataverse</strong> for secure, centralised data management.
            </span>
          </li>
          <li className="flex items-start text-sm sm:text-base">
            <img src={LightningIcon} alt="Bolt" className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 mt-1" />
            <span className="ml-2 sm:ml-3">
              <strong>Power Pages &amp; Azure Health Bot</strong> for patient‑facing triage
              and appointment booking.
            </span>
          </li>
          <li className="flex items-start text-sm sm:text-base">
            <img src={LightningIcon} alt="Bolt" className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 mt-1" />
            <span className="ml-2 sm:ml-3">
              <strong>Azure Functions, Logic Apps &amp; Power Automate</strong> for
              back‑end automation, ensuring smooth, real‑time processing of patient data.
            </span>
          </li>
        </ul>

        {/* Callout */}
        <p className="text-[#EF4230] text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
          This strategic use of<strong> Power Platform </strong> and <strong>Azure Health </strong> Bot enabled a robust,
          efficient system that optimised GP appointment scheduling while enhancing
          patient experience.
        </p>
      </div>
    </div>
  )
}
