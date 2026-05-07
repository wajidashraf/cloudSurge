import React, { useRef, useEffect } from 'react';
import bulbImg from '@/assets/1.svg';
import grow from '@/assets/3.svg';
import globe from '@/assets/2.svg';
import team from '@/assets/4.svg';

const cards = [
  {
    id: 1,
    img: bulbImg,
    title: 'Innovative Environment',
    text: 'We embrace new ideas, cutting-edge tech, and creative thinking.'
  },
  {
    id: 2,
    img: globe,
    title: 'Global Impact',
    text: 'Our solutions & academy model empower communities across the world.'
  },
  {
    id: 3,
    img: grow,
    title: 'Continuous Growth',
    text: 'We invest in training, certifications, and personal development.'
  },
  {
    id: 4,
    img: team,
    title: 'Team Spirit',
    text: 'Collaboration is at our core everyone’s voice matters.'
  }
];

export default function MarqueeCards() {
  // Tell TypeScript these refs point at HTML <div> elements
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef   = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      const content   = contentRef.current;
      if (!container || !content) return;

      // Cursor position as a 0–1 ratio
      const cursorPosition = e.clientX / window.innerWidth;
      // Maximum scrollable width
      const maxScroll      = content.scrollWidth - container.clientWidth;
      const targetScroll   = cursorPosition * maxScroll;

      const animate = () => {
        const currentScroll = container.scrollLeft;
        const diff          = targetScroll - currentScroll;
        if (Math.abs(diff) > 1) {
          container.scrollLeft = currentScroll + diff * 0.1;
          animationFrame       = requestAnimationFrame(animate);
        }
      };

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative md:h-[70VH] overflow-hidden">
      {/* Mobile: Stack cards vertically, Desktop: Horizontal marquee */}
      <div className="md:hidden px-4 py-6">
        <div className="space-y-4">
          {cards.map(({ id, img, title, text }) => (
            <div
              key={id}
              className="bg-[#E3E3E3] p-4 w-full max-w-[88vw] mx-auto min-h-[200px] transition-all duration-300 ease-in-out"
            >
              <img
                src={img}
                alt={title}
                className={`
                  ${id === 1 ? 'w-10 h-12' : ''}
                  ${id === 2 ? 'w-12 h-12' : ''}
                  ${id === 3 ? 'w-12 h-12' : ''}
                  ${id === 4 ? 'w-14 h-12' : ''}
                  mb-3 transition-transform duration-300 ease-in-out
                `}
              />
              <h3 className="text-xl sm:text-2xl text-[#EF4123] font-semibold mb-2 max-w-[90%]">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-[#EF4123] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop: Marquee container */}
      <div
        ref={containerRef}
        className="hidden md:block absolute top-[5%] left-0 w-full h-full overflow-x-auto hide-scrollbar"
      >
        {/* Double the cards for seamless loop */}
        <div ref={contentRef} className="flex">
          {[...cards, ...cards].map(({ id, img, title, text }, idx) => (
            <div
              key={`${id}-${idx}`}
              className="flex-shrink-0 bg-[#E3E3E3] md:p-6 lg:p-6 xl:p-7 2xl:p-8 md:w-[320px] lg:w-[340px] xl:w-[360px] 2xl:w-[400px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[350px] mx-4"
            >
              <img
                src={img}
                alt={title}
                className={`
                  ${id === 1 ? 'md:w-14 md:h-17 lg:w-15 lg:h-18 xl:w-16 xl:h-19 2xl:w-17 2xl:h-21' : ''}
                  ${id === 2 ? 'md:w-17 md:h-17 lg:w-18 lg:h-18 xl:w-19 xl:h-19 2xl:w-21 2xl:h-21' : ''}
                  ${id === 3 ? 'md:w-16 md:h-17 lg:w-17 lg:h-18 xl:w-18 xl:h-19 2xl:w-20 2xl:h-21' : ''}
                  ${id === 4 ? 'md:w-20 md:h-17 lg:w-21 lg:h-18 xl:w-23 xl:h-19 2xl:w-25 2xl:h-21' : ''}
                  mb-4
                `}
              />
              <h3 className="md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-[#EF4123] font-semibold mb-2 max-w-[50%]">
                {title}
              </h3>
              <p className="md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-[#EF4123]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
