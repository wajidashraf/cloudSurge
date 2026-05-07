import React from 'react';
import SparkIcon from '@/assets/redicon.svg'; // replace with your spark image
import MagnifierIcon from '@/assets/magnifier.png'; // replace with your magnifier image
import TriageLogo from '@/assets/triage.svg';
import ZapticaLogo from '@/assets/zaptica.webp';

export const CaseStudy: React.FC = () => {
  return (
    <>
    <div className="bg-[#EF4123]/24 py-8 md:py-15 mb-20 md:mb-25">
      {/* Title */}
      <div className="flex items-center justify-center mb-6 md:mb-8 px-4">
        <h2 className="text-3xl md:text-5xl text-[#EF4123] uppercase tracking-wide mr-2">
          case
        </h2>
        {/* Replace MagnifierIcon or use your own */}
        <img src={MagnifierIcon} alt="search icon" className="w-6 md:w-10 text-[#EF4123]" />
        <h2 className="text-3xl md:text-5xl font-bold text-[#EF4123] uppercase tracking-wide ml-2">
          studies
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-white p-4 md:p-6 flex flex-col justify-between min-h-[400px] md:min-h-auto">
          <div>
            <img src={TriageLogo} alt="Triage Logo" className="h-10 md:h-13 mb-4" />
            <div className="h-1 bg-[#ef4123] my-4"></div>
            <div className="flex items-center">
              <span className="text-3xl md:text-5xl text-[#ef4123]">60%</span>
              <span className="ml-3 md:ml-4 text-xs md:text-sm text-[#ef4123]">reduction in <br/>project costs</span>
            </div>
            {/* Red separator line */}
            <div className="h-1 bg-[#ef4123] my-2"></div>
            <p className="text-[#ef4123] font-medium text-lg md:text-2xl text-left mt-10 md:mt-28">
              Revolutionising the<br/> GP booking process<br/> with AI
            </p>
          </div>
          <div className="mt-8 md:mt-25">
            <a href="/gptriage" target='blank' className="flex items-center text-[#ef4123] font-medium text-lg md:text-2xl">
              <img src={MagnifierIcon} alt="spark" className="w-6 h-6 md:w-7 md:h-7 mr-2 object-contain" />
              read more...
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 md:pl-6 md:pt-2.5 md:pb-6 md:pr-6 flex flex-col justify-between min-h-[400px] md:min-h-auto">
          <div>
            <img src={ZapticaLogo} alt="Zaptica Logo" className="h-12 md:h-17" />
            <div className="h-1 bg-[#ef4123] my-4"></div>
            <div className="flex items-center">
              <span className="text-3xl md:text-5xl text-[#ef4123]">150%</span>
              <span className="ml-3 md:ml-4 text-xs md:text-sm text-[#ef4123] text-left">Increased<br/> project capacity</span>
            </div>
            <div className="h-1 bg-[#ef4123] my-2"></div>
            {/* Second stat */}
            <div className="mt-2 flex items-center">
              <span className="text-3xl md:text-5xl text-[#ef4123]">50%</span>
              <span className="ml-3 md:ml-8 text-xs md:text-sm text-[#ef4123] text-left">Reduced<br/> delivery cost</span>
            </div>
            <div className="h-1 bg-[#ef4123] my-2"></div>
            <p className="text-[#ef4123] font-medium text-lg md:text-2xl mt-6 md:mt-10 text-left">
              They turned to <strong>Cloud Surge</strong> to bridge the skills gap and provide the capacity to deliver successfully.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="/zaptica" target='blank' className="flex items-center text-[#ef4123] font-medium text-lg md:text-2xl">
              <img src={MagnifierIcon} alt="spark" className="w-6 h-6 md:w-7 md:h-7 mr-2 object-contain" />
              read more...
            </a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Call-to-Action */}
    <section className="px-4">
      <div className="border-[4px] sm:border-[6px] md:border-[8px] lg:border-[8px] xl:border-[8px] 2xl:border-[10px] border-[#ef4123] bg-transparent text-[#ef4123] p-6 sm:p-8 md:p-6 lg:p-6 xl:p-6 2xl:p-8 w-full sm:w-[80vw] md:w-[60vw] lg:w-[80vw] mx-auto mb-20 mt-15 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-35">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-4 lg:space-y-0">
          {/* Left Text */}
          <div className="text-left">
            <h2 className="text-base leading-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-0 md:mb-2">Be Part of <br className='hidden sm:block'/>Something Bigger</h2>
          </div>

          {/* Right Links */}
          <div className="space-y-4">
            <a href="/contact" className="flex items-center gap-2 group">
              <span className="text-base leading-tight sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold hover:scale-115">↳ Grow your business</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


export default CaseStudy;
