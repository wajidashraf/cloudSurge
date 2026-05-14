import React from 'react';
import SparkIcon from '@/assets/Asset19.svg';
import { FooterSection } from '@/components/common/footer';
import Outcome from '@/components/Fawrii/Outcome';
import Testimonial from '@/components/Fawrii/Testimonial';
import { FawriiOverview } from '@/components/Fawrii/FawriiOverview';
import { FawriiSolution } from '@/components/Fawrii/FawriiSolution';

const Zaptica: React.FC = () => {

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
          <img src={SparkIcon} alt="CloudSurge" className="h-12" />
        </div>
      </div>

      <FawriiOverview />
      <FawriiSolution />
      <Outcome />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default Zaptica;
