import React, { useState } from "react";
import magnifierImg from "@/assets/magnifier_fusion.png";
import userImg from "@/assets/user.png";
import fourArrowsImg from "@/assets/four_arrow.png";

interface Step {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface PodModelProps {
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Understand Your Needs",
    description: "We start by assessing your project requirements, existing workflows, and team dynamics.",
    imageSrc: magnifierImg,
  },
  {
    id: 2,
    title: "Assemble the Perfect Pod",
    description: "Based on your requirements, we hand-pick three IT professionals with the right mix of skills.",
    imageSrc: userImg,
  },
  {
    id: 3,
    title: "Deliver and Scale",
    description: "Your Fusion Pod integrates seamlessly, with the flexibility to scale up or down as needed.",
    imageSrc: fourArrowsImg,
  },
];

const PodModel: React.FC<PodModelProps> = ({ steps }) => {
  const displaySteps = steps?.length === 3 ? steps : defaultSteps;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 75 && currentIndex < displaySteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (diff < -75 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentStep = displaySteps[currentIndex];

  return (
    <section className="bg-white py-16 md:py-16 lg:py-16 xl:py-16 2xl:py-24">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#ef4123]/90 font-extralight">
          How the <span className="font-bold">Pod Model Works</span>
        </h2>
      </div>

      {/* Carousel Content */}
      <div 
        className="relative min-h-[400px] md:min-h-[300px] lg:min-h-[300px] xl:min-h-[320px] 2xl:min-h-[400px] flex items-center justify-center px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Step number */}
          <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full border-2 border-[#ef4123] text-[#ef4123] font-bold text-lg md:text-base lg:text-base xl:text-lg 2xl:text-lg">
            {currentStep.id}
          </div>
          
          {/* Image */}
          <img
            src={currentStep.imageSrc}
            alt={currentStep.title}
            loading="eager"
            decoding="async"
            width={currentStep.id === 2 ? 40 : 48}
            height={currentStep.id === 2 ? 40 : 48}
            className={`mt-8 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-8 mb-4 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 object-contain ${
              currentStep.id === 2 ? "w-10 h-12 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" : "w-12 md:w-10 lg:w-10 xl:w-11 2xl:w-12"
            } ${currentStep.id === 1 ? "mr-3" : ""}`}
          />
          
          {/* Title */}
          <h3 className="mt-4 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-[#ef4123]">
            {currentStep.title}
          </h3>
          
          {/* Description */}
          <p className="mt-2 text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-lg leading-tight text-[#ef4123] max-w-md md:max-w-sm lg:max-w-md xl:max-w-md 2xl:max-w-md">
            {currentStep.description}
          </p>
          
          {/* Divider line */}
          <div className="h-0.5 mt-8 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-8 bg-[#ef4123] w-full lg:w-[150%] 2xl:w-[200%]" />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-12">
        {displaySteps.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-8 bg-[#ef4123]' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PodModel;
