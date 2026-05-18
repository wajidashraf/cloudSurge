import React from 'react';
import { useLenis } from '@/hooks/useLenis';
import SparkIcon from '@/assets/Asset19.svg';
import { FooterSection } from '@/components/common/footer';
import { GPTriageOverview } from '@/components/gptriage/GPTriageOverview';
import { GPTriageSolution } from '@/components/gptriage/GPTriageSolution';
import Outcome from '@/components/gptriage/Outcome';
import Testimonial from '@/components/gptriage/Testimonial';

const GPTriage: React.FC = () => {
  useLenis();

  return (
    <div className="relative bg-white font-bahnschrift">
      {/* Header bar */}
      <div
        className="header-bar flex items-center justify-between p-4 sm:p-6 print:hidden"
        style={{
          background: 'linear-gradient(105deg, #ec3f24 55%, #7300bf 78%, #0a0a90 110%)',
        }}
      >
        <div className="flex items-center space-x-2">
          <img src={SparkIcon} alt="CloudSurge" className="h-8 sm:h-10 lg:h-12" />
        </div>
      </div>

      <GPTriageOverview />
      <GPTriageSolution />
      <Outcome />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default GPTriage;
