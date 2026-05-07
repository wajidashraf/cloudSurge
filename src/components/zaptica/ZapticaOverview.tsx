// src/components/GPTriageOverview.tsx
import React from 'react'
import zaptica from '@/assets/zaptica.webp'
import DoctorImage from '@/assets/chip.png'
import PuzzleIcon from '@/assets/puzzle.svg'

export const ZapticaOverview: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto divide-y divide-gray-200 mt-8 sm:mt-12 md:mt-20 mb-2 px-4 sm:px-6 md:px-0">
      {/* Top section: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col bg-[#F2F2F2] mb-2">
          <img src={zaptica} alt="GP Triage logo" className="w-48 sm:w-64 md:w-80 mb-8 sm:mb-12 md:mb-20" />
          <h2 className="text-[#5B5B5B] text-lg sm:text-xl leading-snug text-left">
            <strong>
            Zaptica  </strong>
             had an opportunity to work with Nantes Solicitors, a legal firm with roots (and processes) dating back to the 1800s. While Zaptica had the in-house expertise to develop a digital transformation strategy for Nantes, the challenge lay in having the resources to execute the project on time and within budget. Zaptica needed to augment its delivery teams with a reliable and skilled partner to secure the project.<strong> They turned to Cloud Surge to bridge the skills gap and provide the capacity to deliver successfully.</strong>
          </h2>
        </div>
        {/* Right */}
        <div className="pl-2 flex flex-col text-left mb-2">
          <div className="text-4xl sm:text-5xl md:text-7xl text-[#ef4123] bg-[#F2F2F2] p-4 sm:p-6 md:pl-10 md:pt-5 md:pb-5 md:pr-10">
            <div className='grid grid-cols-2 gap-4 sm:gap-6'>
              {/* Left Column */}
              <div className='flex flex-col'>
                <p>150%</p>
                <span className='text-sm sm:text-lg md:text-xl font-extralight block border-t-4 border-[#ef4123] mt-2'>Increased project capacity</span>
              </div>
              {/* Right Column */}
              <div className='flex flex-col'>
                <p>50%</p>
                <span className='text-sm sm:text-lg md:text-xl font-extralight block border-t-4 border-[#ef4123] mt-2'>Reduced project delivery cost</span>
              </div>
            </div>
          </div>
          <img
            src={DoctorImage}
            alt="Medical team"
            className="mt-2 w-full object-cover rounded"
          />
        </div>
      </div>

      {/* Bottom "challenge" section */}
      <div className="p-4 sm:p-8 md:p-15 bg-[#F2F2F2] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 pb-6 sm:pb-8 md:pb-10">
        <img src={PuzzleIcon} alt="Challenge icon" className="w-32 sm:w-40 md:w-60 flex-shrink-0" />
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3189] capitalize mb-2 text-left">challenge</h3>
          <p className="text-[#5B5B5B] leading-relaxed text-left text-base sm:text-lg">
            While <strong>Zaptica</strong> had deep expertise in IT consulting, its ability to take on large-scale projects was constrained by the need for additional skilled professionals. The firm had the knowledge and vision to deliver the solution, but the project risked delays and operational strain without the workforce to execute efficiently. <br/><br/>The challenge was finding the right talent and doing so quickly enough to meet the project’s deadlines. Traditional hiring methods would have been too slow, making the opportunity unfeasible. Zaptica needed an agile, scalable solution to expand its delivery capacity without taking on long-term overheads.
          </p>
        </div>
      </div>
    </div>
  )
}
