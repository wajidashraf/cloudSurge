// src/components/GPTriageSolution.tsx
import React from 'react'
import PuzzleIcon from '@/assets/redpuzzle.png'
import LightningIcon from '@/assets/redicon.svg'

export const ZapticaSolution: React.FC = () => {
  return (
    <div className="max-w-6xl p-4 sm:p-6 md:p-10 mx-auto bg-[#FFEAEA] border border-red-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-4 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-14">
        <img src={PuzzleIcon} alt="Solution icon" className="w-32 sm:w-40 md:w-55 flex-shrink-0" />
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4230] text-left">
          solution
          <br/><br/>
          <p className='text-base sm:text-lg font-normal text-left text-[#5B5B5B]'>
            Cloud Surge provided Zaptica with a dedicated Pod, consisting of highly skilled professionals who seamlessly integrated into their team. This allowed Zaptica to scale quickly and deliver the project without disruption.
          </p>
        </h3>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pr-4 sm:pr-8 md:pr-20 space-y-4 sm:space-y-6">
        <p className='text-left text-[#5B5B5B] text-base sm:text-lg'>
          With Cloud Surge, Zaptica gained:
        </p>

        {/* Feature list */}
        <ul className="space-y-3 text-base sm:text-lg text-left">
          <li className="flex items-start">
            <img src={LightningIcon} alt="Bolt" className="w-5 h-5 flex-shrink-0 mt-1" />
            <span className="ml-3 text-[#5B5B5B]">
              <strong>On-demand scalability – </strong>Fast access to a team of experts without the delays of traditional hiring.
            </span>
          </li>
          <li className="flex items-start">
            <img src={LightningIcon} alt="Bolt" className="w-5 h-5 flex-shrink-0 mt-1" />
            <span className="ml-3 text-[#5B5B5B]">
              <strong> Specialised expertise – </strong>Professionals skilled in Power BI, Power Automate, Power Apps, Logic Apps, and custom development.
            </span>
          </li>
          <li className="flex items-start">
            <img src={LightningIcon} alt="Bolt" className="w-5 h-5 flex-shrink-0 mt-1" />
            <span className="ml-3 text-[#5B5B5B]">
              <strong> Flexibility – </strong>The ability to swap in and out resources as needed, ensuring the right skills were always available.
            </span>
          </li>
          <li className="flex items-start">
            <img src={LightningIcon} alt="Bolt" className="w-5 h-5 flex-shrink-0 mt-1" />
            <span className="ml-3 text-[#5B5B5B]">
              <strong>  Agile delivery – </strong>A structured approach with daily stand-ups, sprint-based execution, and precise project milestones.
            </span>
          </li>
          <li className="flex items-start">
            <img src={LightningIcon} alt="Bolt" className="w-5 h-5 flex-shrink-0 mt-1" />
            <span className="ml-3 text-[#5B5B5B]">
              <strong> Cost efficiency – </strong>A fixed-price engagement that allowed Zaptica to deliver within budget while maintaining high quality. 
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
