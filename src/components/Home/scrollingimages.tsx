import React from 'react';

interface ScrollingImagesProps {
  images: string[];
  speed?: number;
}

const ScrollingImages: React.FC<ScrollingImagesProps> = ({
  images,
  speed = 8,
}) => {
  // Exactly two copies — translating -50% lands on a pixel-identical frame,
  // eliminating the sub-pixel rounding jump at the loop boundary.
  const tripled = [...images, ...images, ...images, ...images, ...images];


  return (
    <div className="w-full overflow-hidden py-12">
      <style>{`
        @keyframes seamless-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .scroll-track {
          /* translate3d keeps the element on its own GPU compositing layer,
             so the loop-reset frame never triggers a repaint / blink */
          animation: seamless-scroll linear infinite;
          -webkit-animation: seamless-scroll linear infinite;

          will-change: transform;

          /* Belt-and-suspenders flicker prevention */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-perspective: 1000;
          perspective: 1000;
        }
      `}</style>

      {/*
        overflow:hidden on the outer wrapper + isolation:isolate creates a new
        stacking context, stopping any compositing leak from sibling elements.
      */}
      <div className="relative" style={{ isolation: 'isolate' }}>
        <div
          className="scroll-track flex whitespace-nowrap"
          style={{ animationDuration: `${speed}s` }}
        >
          {tripled.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              // eager: all images are decoded before the first paint so the
              // track has its final width when the animation starts
              loading="eager"
              decoding="sync"
              draggable={false}
              className={[
                'object-contain flex-shrink-0',
                'mr-12',
                'md:mr-15',
                'lg:mr-17',
                'mt-2 2xl:mt-3',
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