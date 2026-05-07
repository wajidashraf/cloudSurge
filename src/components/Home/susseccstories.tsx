import React, { useState, useEffect, useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// Image imports
import manImg from '@/assets/hanan.jpg';
import imgsuccess from '@/assets/redicon.svg';
import triageLogo from '@/assets/triage.svg';

// ---- Typed StatCounter with reset-on-exit & proper useRef init ----
interface StatCounterProps {
  target: string;
  label: string;
  duration?: number; // in ms
}

const StatCounter: React.FC<StatCounterProps> = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Initialize timerRef to null
  const timerRef = useRef<number | null>(null);

  // Observe visibility enter/exit
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === ref.current) {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  // Start or reset counter on visibility change
  useEffect(() => {
    const end = parseInt(target, 10);

    if (isVisible && end > 0) {
      let start = 0;
      const incrementTime = Math.max(1, Math.floor(duration / end));
      timerRef.current = window.setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end && timerRef.current !== null) {
          window.clearInterval(timerRef.current);
        }
      }, incrementTime);
    } else {
      // Reset when out of view
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
      setCount(0);
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-left">
      <p className="text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold underline underline-offset-4 text-[#ef4123]">
        {count}%
      </p>
      <p className="text-sm md:text-xs lg:text-sm xl:text-sm 2xl:text-lg mt-3 text-[#ef4123] leading-tight max-w-[120px] md:max-w-none">
        {label}
      </p>
    </div>
  );
};

// ---- Testimonials data (unchanged) ----
const testimonials = [
  { type: 'intro', title: 'Success Stories', imgSrc: imgsuccess, content: <p className="text-gray-600 font-bold text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl max-w-[90%]">Our work speaks for itself, but our clients say it even better.</p> },
  { type: 'image', imgSrc: manImg, quote: "Cloud Surge's Fusion Pods were a game-changer, accelerating our development and saving costs.", subtitle: <span>Cutting edge AI chatbot solution<br />for GP surgeries.</span>, author: 'Hannan Chaudery' },
  { type: 'text1', bg: 'bg-[#FACCCB]', rating: 5, logo: triageLogo, heading: "They weren't just contractors; they became a true extension of our team when we needed it most.", author: 'Hannan Chaudery, CTO at GP Triage' },
  { type: 'text2', bg: 'bg-[#EFEFEF]', rating: 5, logo: triageLogo, heading: "With Cloud Surge, we scaled quickly and delivered high-quality results... this wasn't offshoring, it was partnership.", author: 'Hannan Chaudery, CTO at GP Triage' },
];

const SuccessStories: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const initialMargins = [0, 350, 700, 1050];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { offsetTop, offsetHeight } = sectionRef.current;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const startOffset = offsetTop - windowHeight * 0.96;
      const endOffset = offsetTop + offsetHeight * 0.5;
      let progress = (scrollY - startOffset) / (endOffset - startOffset);
      progress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleCarouselScroll = () => {
      if (!carouselRef.current) return;
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth * 0.85; // 85vw
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(index);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleCarouselScroll);
      return () => carousel.removeEventListener('scroll', handleCarouselScroll);
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-0 md:min-h-[120vh] lg:min-h-[120vh] xl:min-h-[120vh] 2xl:min-h-screen flex items-center bg-white overflow-hidden">
      <div className="w-full xl:container xl:mx-auto md:px-8 lg:px-12 xl:px-16 2xl:px-0 py-30 md:py-0">
        {/* Mobile Layout: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto px-4" ref={carouselRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 pb-4 snap-x snap-mandatory" role="region" aria-label="Success stories carousel">
              {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[85vw] snap-center bg-white">
                {t.type === 'intro' && (
                  <div className="border-2 border-gray-200 p-4 h-[400px] flex flex-col justify-between relative">
                    <div>
                      <img src={t.imgSrc} alt={t.title} className="h-12 w-12" />
                      <h3 className="text-5xl font-bold mb-4 mt-8 text-[#5D5D5D] p-2 text-left">{t.title}</h3>
                    </div>
                    <p className="text-xs absolute bottom-8 pl-2 text-[#818181] text-left">{t.content}</p>
                  </div>
                )}

                {t.type === 'image' && (
                  <div className="relative h-[400px] overflow-hidden">
                    <div className="w-full h-full relative">
                      <img
                        src={t.imgSrc}
                        alt="testimonial"
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute bottom-0 left-0 right-0 pointer-events-none"
                        style={{
                          height: '50%',
                          background: 'linear-gradient(105deg, rgba(10, 10, 144, 1) 0%, rgba(10, 10, 144, 1) 15%, rgba(115, 0, 191, 1) 40%, rgba(236, 63, 36, 1) 55%)',
                          opacity: 1,
                          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)'
                        }}
                      />
                      <div className="absolute top-6 left-6 flex mb-3 pl-2">
                        {[...Array(5)].map((_, idx) => (
                          <StarIcon key={idx} className="h-3 w-3 text-white mr-1" />
                        ))}
                      </div>
                      <div className="absolute bottom-16 left-2 text-white p-2">
                        <p className="text-sm mb-0 pl-2 text-left leading-tight">
                          “{t.quote}”
                        </p>
                        <p className="text-xs mt-2 mb-1 pl-2 text-left text-white/80 leading-tight">{t.subtitle}</p>
                      </div>
                      <div className="absolute bottom-1 left-2 right-0 text-white p-2">
                        <div className="bg-white h-[2px] max-w-[95%] ml-1" />
                        <div className="text-xs pl-2 text-left max-w-[80%] mb-0 mt-1">
                          <div>Hannan Chaudery</div>
                          <div>CTO at GP Triage</div>
                        </div>
                        <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute right-5 bottom-2 text-xs hover:underline">more info...</a>
                      </div>
                    </div>
                  </div>
                )}

                {t.type === 'text1' && (
                  <div className={`${t.bg} p-4 h-[400px] flex flex-col relative`}>
                    <div className="flex mb-3 pl-2">
                      {[...Array(t.rating)].map((_, idx) => (
                        <StarIcon key={idx} className="h-4 w-4 text-[#ef4123] mr-1" />
                      ))}
                    </div>
                    <div className="flex items-center mt-14 ml-4">
                      {t.logo && <img src={t.logo} alt="logo" className="h-[4rem] w-auto" />}
                    </div>
                    <p className="text-lg text-left absolute bottom-22 pl-2 text-[#ef4123] max-w-[85%]" style={{ lineHeight: '1.3' }}>
                      <span className="text-3xl leading-none align-top">“</span>{t.heading}<span className="text-3xl leading-none align-top">”</span>
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-[#ef4123] h-[3px] mb-8" />
                      <p className="text-xs absolute bottom-2 pl-2 text-[#ef4123] max-w-[70%] text-left">{t.author}</p>
                      <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 text-xs hover:underline text-[#ef4123]">more info...</a>
                    </div>
                  </div>
                )}

                {t.type === 'text2' && (
                  <div className={`${t.bg} p-4 h-[400px] flex flex-col relative`}>
                    <div className="flex mb-3 pl-2">
                      {[...Array(t.rating)].map((_, idx) => (
                        <StarIcon key={idx} className="h-4 w-4 text-[#ef4123] mr-1" />
                      ))}
                    </div>
                    <div className="flex items-center mt-14 ml-4">
                      {t.logo && <img src={t.logo} alt="logo" className="h-[4rem] w-auto" />}
                    </div>
                    <div className="flex flex-row items-start absolute bottom-22 space-x-2 pl-2">
                      <StatCounter target="150" label="Increased Project Capacity" />
                      <StatCounter target="50" label="Reduced Project Delivery Cost" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-[#ef4123] h-[3px] mb-8" />
                      <p className="text-xs absolute bottom-2 pl-2 text-[#ef4123] max-w-[70%] text-left">{t.author}</p>
                      <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 text-xs hover:underline text-[#ef4123]">more info...</a>
                    </div>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>
          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4 pb-4 px-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = carouselRef.current.offsetWidth * 0.85;
                    carouselRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCardIndex === i ? 'w-8 bg-[#ef4123]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout: Grid with Scroll Animation */}
        <div className="hidden md:grid grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t, i) => {
            const marginTop = Math.max(initialMargins[i] * (0.7 - scrollProgress), 0);
            return (
              <div key={i} className="bg-white" style={{ marginTop: `${marginTop}px` }}>
                {t.type === 'intro' && (
                  <div className="border-2 border-gray-200 p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-6 h-full min-h-[400px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[350px] 2xl:min-h-[500px] flex flex-col justify-between relative">
                    <div>
                      <img src={t.imgSrc} alt={t.title} className="h-12 w-12 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16" />
                      <h3 className="text-5xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold mb-4 mt-8 text-[#5D5D5D] p-2 xl:max-w-[50%] text-left">{t.title}</h3>
                    </div>
                    <p className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm absolute bottom-8 md:bottom-8 lg:bottom-8 xl:bottom-8 2xl:bottom-12 pl-2 md:pl-4 text-[#818181] text-left">{t.content}</p>
                  </div>
                )}

                {t.type === 'image' && (
                    <div className="relative h-full min-h-[400px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[350px] 2xl:min-h-[500px] overflow-hidden">
                      <div className="w-full h-full relative">
                        <img
                          src={t.imgSrc}
                          alt="testimonial"
                          className="w-full h-full object-cover"
                        />
                        {/* Transparent gradient overlay - bottom 50% with soft fade at top, increasing opacity to bottom */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 pointer-events-none"
                          style={{
                            height: '50%',
                            background: 'linear-gradient(105deg, rgba(10, 10, 144, 1) 0%, rgba(10, 10, 144, 1) 15%, rgba(115, 0, 191, 1) 40%, rgba(236, 63, 36, 1) 55%)',
                            opacity: 1,
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)'
                          }}
                        />
                        {/* Star rating */}
                        <div className="absolute top-6 left-6 flex mb-3 pl-2">
                          {[...Array(5)].map((_, idx) => (
                            <StarIcon key={idx} className="h-3 w-3 md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-3 xl:w-3 2xl:h-5 2xl:w-5 text-white mr-1" />
                          ))}
                        </div>

                        {/* Quote and subtitle positioned higher */}
                        <div className="absolute bottom-16 md:bottom-14 lg:bottom-14 xl:bottom-14 2xl:bottom-20 left-2 text-white p-2">
                          <p className="text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg mb-0 md:mb-1 pl-2 md:pl-4 text-left leading-tight">
                            “{t.quote}”
                          </p>
                          <p className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm mt-2 mb-1 pl-2 md:pl-4 text-left xl:max-w-[70%] text-white/80 leading-tight md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-normal">{t.subtitle}</p>
                        </div>
                        {/* Line and author info at bottom */}
                        <div className="absolute bottom-1 left-2 right-0 text-white p-2">
                          <div className="bg-white h-[2px] max-w-[95%] ml-1" />
                          <div className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm pl-2 md:pl-4 text-left max-w-[80%] md:max-w-[50%] mb-0 md:mb-1 mt-1">
                            <div>Hannan Chaudery</div>
                            <div>CTO at GP Triage</div>
                          </div>
                          <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute right-5 md:right-8 bottom-2 md:bottom-3 text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm hover:underline">more info...</a>
                        </div>
                      </div>
                    </div>
                  ) }

                {t.type === 'text1' && (
                  <div className={`${t.bg} p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-6 h-full min-h-[400px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[350px] 2xl:min-h-[500px] flex flex-col relative`}>
                    <div className="flex mb-3 pl-2">
                      {[...Array(t.rating)].map((_, idx) => (
                        <StarIcon key={idx} className="h-4 w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-3 xl:w-3 2xl:h-5 2xl:w-5 text-[#ef4123] mr-1" />
                      ))}
                    </div>
                    <div className="flex items-center mt-14 ml-4">
                      {t.logo && <img src={t.logo} alt="logo" className="h-[4rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.5rem] 2xl:h-[6rem] w-auto" />}
                    </div>
                    <p className="text-lg md:text-sm lg:text-base xl:text-base 2xl:text-xl text-left absolute bottom-22 md:bottom-20 lg:bottom-20 xl:bottom-20 2xl:bottom-27 pl-2 md:pl-4 text-[#ef4123] max-w-[85%]" style={{ lineHeight: '1.3' }}>
                      <span className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl leading-none align-top">“</span>{t.heading}<span className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl leading-none align-top">”</span>
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-6">
                      <div className="bg-[#ef4123] h-[3px] mb-8" />
                      <p className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm absolute bottom-2 md:bottom-2 pl-2 md:pl-4 text-[#ef4123] max-w-[70%] lg:max-w-[60%] 2xl:max-w-[40%] text-left">{t.author}</p>
                      <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 md:bottom-2 right-5 md:right-8 text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm hover:underline text-[#ef4123]">more info...</a>
                    </div>
                  </div>
                )}

                {t.type === 'text2' && (
                  <div className={`${t.bg} p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-6 h-full min-h-[400px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[350px] 2xl:min-h-[500px] flex flex-col relative`}>
                    <div className="flex mb-3 pl-2">
                      {[...Array(t.rating)].map((_, idx) => (
                        <StarIcon key={idx} className="h-4 w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-3 xl:w-3 2xl:h-5 2xl:w-5 text-[#ef4123] mr-1" />
                      ))}
                    </div>
                    <div className="flex items-center mt-14 ml-4">
                      {t.logo && <img src={t.logo} alt="logo" className="h-[4rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.5rem] 2xl:h-[6rem] w-auto" />}
                    </div>
                    <div className="flex flex-row items-start absolute bottom-22 md:bottom-20 space-x-2 md:space-x-2 xl:space-x-4 pl-2 md:pl-4">
                      <StatCounter target="150" label="Increased Project Capacity" />
                      <StatCounter target="50" label="Reduced Project Delivery Cost" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-6">
                      <div className="bg-[#ef4123] h-[3px] mb-8" />
                      <p className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm absolute bottom-2 md:bottom-2 pl-2 md:pl-4 text-[#ef4123] max-w-[70%] lg:max-w-[60%] 2xl:max-w-[40%] text-left">{t.author}</p>
                      <a href="/gptriage" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 md:bottom-2 right-5 md:right-8 text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm hover:underline text-[#ef4123]">more info...</a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
