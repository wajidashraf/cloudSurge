import React, { useState, useEffect, useRef } from 'react';

interface Card {
  title: React.ReactNode;
  content: React.ReactNode;
}

const cards: Card[] = [
  {
    title: (
      <>
        Instant Delivery
      </>
    ),
    content: (
      <>
        Say yes to new projects without waiting months to hire.

        Our Fusion Pods can be live in days, giving you senior delivery capacity when you need it.
      </>
    ),
  },
  {
    title: (
      <>
        Pod Teams
      </>
    ),
    content: (
      <>
        You don't get random freelancers.

        You get a pre-formed team, lead, consultant and engineer - who already knows how to work together and plug straight into your way of working.
      </>
    ),
  },
  {
    title: (
      <>
        Technology‑First
      </>
    ),
    content: (
      <>
        We specialise in building solutions across leading cloud and automation platforms - including Power Platform, Dynamics 365, Azure, Salesforce etc. This breadth means faster delivery, fewer surprises, and solutions that integrate smoothly with the tools your organisation already uses and supports.
      </>
    ),
  },
  {
    title: (
      <>
        Flexible Scale
      </>
    ),
    content: (
      <>
        Scale Pods up or down by project, quarter or portfolio.

        Predictable costs, no long-term lock-in – so you can grow delivery without overcommitting your core team.
      </>
    ),
  },
];

const PowerPodsCards: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const initialMargins = [0, 400, 800, 1200]; // Initial margins in pixels

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate when section enters viewport (from 1/3 of viewport height)
      const startOffset = sectionTop - windowHeight * 1.3;
      const endOffset = sectionTop + sectionHeight * 0.5;
      
      let progress = (scrollY - startOffset) / (endOffset - startOffset);
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative py-16 md:py-32">
      <div className="text-center mb-16 md:mb-32 px-4">
        <h1 className="text-3xl md:text-7xl font-extrabold text-[#EF4123]">
          What Makes Us Different
        </h1>
      </div>
      <div className="overflow-hidden w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-80 sm:max-w-full mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {cards.map((card, i) => {
            // Calculate current margin based on scroll progress
            const currentMargin = Math.max(0, initialMargins[i] * (0.7 - scrollProgress));
            
            return (
              <div 
                key={i}
                className="transition-all duration-50 ease-out h-full"
                style={{ marginTop: `${currentMargin}px` }}
              >
                <div className="flex flex-col h-full p-3 sm:p-3 md:p-3 lg:p-4 xl:p-4 2xl:p-4 pt-6 sm:pt-6 md:pt-6 lg:pt-7 xl:pt-7 2xl:pt-8 bg-[#EFEFEF] min-h-[200px] sm:min-h-[300px] md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] 2xl:min-h-[350px]">
                  <h2 className="text-xl text-left sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl font-bold text-[#EF4123] mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4">
                    {card.title}
                  </h2>
                  <div className="w-full h-1 bg-[#EF4123] mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-6" />
                  <p className="text-[#EF4123] text-left text-sm sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-xl leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PowerPodsCards;