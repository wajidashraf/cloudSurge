// src/components/GPTriageOverview.tsx
import React from 'react'
import TriageLogo from '@/assets/triage.svg'
import DoctorImage from '@/assets/hospital.png'
import PuzzleIcon from '@/assets/puzzle.svg'

export const GPTriageOverview: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto divide-y divide-gray-200 mt-8 sm:mt-12 lg:mt-20 mb-2 px-4 sm:px-6 lg:px-0">
      {/* Top section: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
        {/* Left */}
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-[#EEFBFF] mb-2 lg:mb-2">
          <img src={TriageLogo} alt="GP Triage logo" className="w-48 sm:w-64 lg:w-80 mb-8 sm:mb-12 lg:mb-20" />
          <h2 className="text-[#5B5B5B] text-2xl sm:text-3xl lg:text-5xl leading-snug text-center">
            <strong>
            revolutionising  </strong>
            <br />
            the<strong> GP booking  
            <br />
            process</strong> with <strong>AI</strong>
          </h2>
        </div>
        {/* Right */}
        <div className="pl-0 sm:pl-1 lg:pl-2 flex flex-col text-left mb-2">
          <div className="text-4xl sm:text-5xl lg:text-7xl text-[#0B73A2] bg-[#EEFBFF] pl-4 sm:pl-6 lg:pl-10 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 pr-4 sm:pr-6 lg:pr-30">60%<span className='text-base sm:text-lg lg:text-xl font-extralight block'>
          reduction in project costs</span></div>
          <img
            src={DoctorImage}
            alt="Medical team"
            className="mt-2 w-full object-cover rounded"
          />
        </div>
      </div>

      {/* Bottom "challenge" section */}
      <div className="p-4 sm:p-6 lg:p-8  bg-[#F2F2F2] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16 pb-8 sm:pb-12 lg:pb-16">
        <img src={PuzzleIcon} alt="Challenge icon" className="w-24 sm:w-32 lg:w-40 flex-shrink-0 mx-auto sm:mx-0" />
        <div className="flex-1 lg:pl-8 lg:pt-2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C3189] capitalize mb-2 text-center sm:text-left">challenge</h3>
          <p className="text-[#5B5B5B] leading-relaxed text-center sm:text-left text-sm sm:text-base">
            GP Triage set out to modernise the traditional GP booking process with an AI-driven
            system capable of automatically assessing patient symptoms, determining severity, and
            allocating appropriate appointment slots. The challenge lay in building a sophisticated
            solution that seamlessly integrated with existing NHS systems while enabling real-time
            automation without disrupting GP surgeries or requiring costly infrastructure overhauls.
          </p>
        </div>
      </div>
    </div>
  )
}
