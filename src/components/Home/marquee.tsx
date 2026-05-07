import React from 'react';
import logo from '@/assets/redicon.svg';

interface MarqueeProps {
  text: string;
  repeat?: number;
  speed?: number; // seconds per full scroll
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  repeat = 20,
  speed = 100,
}) => {
  return (
    <div className="overflow-hidden mb-6 md:mb-12">
      <div
        className="inline-flex whitespace-nowrap text-[#5D5D5D] tracking-[0.1em] font-semibold text-4xl md:text-5xl pl-4 mt-8 md:mt-0"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {Array(repeat)
          .fill(text)
          .map((t, i) => (
            <span key={i} className="inline-flex items-center mr-6 md:mr-12">
              {t}
              <img
                src={logo}
                alt="logo"
                className="w-7 h-7  ml-1 md:ml-2 inline-block"
              />
            </span>
          ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
