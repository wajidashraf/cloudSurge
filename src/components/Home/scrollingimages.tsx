import React, { useEffect, useRef } from 'react';

interface ScrollingImagesProps {
  images: string[];
  speed?: number;
}

const ScrollingImages: React.FC<ScrollingImagesProps> = ({
  images,
  speed = 24,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCopyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstCopy = firstCopyRef.current;
    if (!track || !firstCopy) return;

    let offset = 0;
    let lastTs: number | null = null;
    let rafId = 0;
    let copyWidth = firstCopy.getBoundingClientRect().width;

    // `speed` is the full-loop duration in seconds (one copy width per `speed`s).
    const pxPerMs = () => copyWidth / (speed * 1000);

    const onResize = () => {
      copyWidth = firstCopy.getBoundingClientRect().width;
      if (copyWidth > 0) offset = offset % copyWidth;
    };
    window.addEventListener('resize', onResize);

    const tick = (ts: number) => {
      if (lastTs == null) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (copyWidth > 0) {
        offset += pxPerMs() * dt;
        if (offset >= copyWidth) offset -= copyWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [speed, images]);

  const imgClass = [
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
  ].join(' ');

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="relative" style={{ isolation: 'isolate' }}>
        <div
          ref={trackRef}
          className="flex whitespace-nowrap"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Copy 1 — measured for the wrap distance */}
          <div ref={firstCopyRef} className="flex flex-shrink-0">
            {images.map((src, i) => (
              <img
                key={`a-${i}`}
                src={src}
                alt={`img-${i}`}
                loading="eager"
                decoding="sync"
                draggable={false}
                className={imgClass}
              />
            ))}
          </div>
          {/* Copy 2 — identical, fills the gap during wrap */}
          <div className="flex flex-shrink-0" aria-hidden="true">
            {images.map((src, i) => (
              <img
                key={`b-${i}`}
                src={src}
                alt=""
                loading="eager"
                decoding="sync"
                draggable={false}
                className={imgClass}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;
