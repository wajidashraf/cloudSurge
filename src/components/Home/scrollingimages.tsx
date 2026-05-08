import React from 'react';

interface ScrollingImagesProps {
  images: string[];
  speed?: number;
}

const ScrollingImages: React.FC<ScrollingImagesProps> = ({
  images,
  speed = 12,
}) => {
 
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-4">
      <style>{`
        @keyframes seamless-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .scroll-track {
          animation: seamless-scroll linear infinite;
          /* Prevents subpixel jitter on the reset frame */
          will-change: transform;
          /* Backface visibility stops flicker in some browsers */
          backface-visibility: hidden;
        }
      `}</style>

      <div className="relative">
        <div
          className="scroll-track flex whitespace-nowrap"
          style={{ animationDuration: `${speed}s` }}
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              loading="lazy"
              className={[
                'object-contain flex-shrink-0',
                // Spacing — mr instead of gap so the last item in each
                // copy also has trailing space, keeping the seam uniform
                'mr-24',
                // Vertical nudge
                'mt-2 2xl:mt-3',
                // Sizes: base → md → lg → xl (+10%) → 2xl (+10%)
                'w-18 h-7',
                'md:w-18 md:h-9',
                'lg:w-20 lg:h-10',
                'xl:w-[5.5rem] xl:h-[2.75rem]',
                '2xl:w-[6.6rem] 2xl:h-[3.575rem]',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;