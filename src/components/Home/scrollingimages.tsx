import React from 'react';

interface ScrollingImagesProps {
  images: string[];
  speed?: number;
}

const ScrollingImages: React.FC<ScrollingImagesProps> = ({
  images,
  speed = 15,
}) => {
  // Duplicate images 5 times for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="relative">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ animationDuration: `${speed}s` }}
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              loading="lazy"
              className="inline-block w-16 h-7 md:w-18 md:h-9 lg:w-20 lg:h-10 xl:w-20 xl:h-10 2xl:w-24 2xl:h-13 mr-1 mt-2 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-3 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;
