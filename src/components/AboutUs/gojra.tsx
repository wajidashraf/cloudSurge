import React from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from 'framer-motion';
import pakistanSvg from '@/assets/pakistan.svg';
import clickIcon from '@/assets/click.svg';
import sparkAsset from '@/assets/redicon.svg';

interface GojraProps {
  imageSrc?: string;
  altText?: string;
}

// GradientText driven by scroll‐scrubbed MotionValue<string>
const GradientText: React.FC<{
  text: string;
  fillProgress: MotionValue<string>; // now accepts MotionValue<string>
  gradientStyle: React.CSSProperties;
}> = ({ text, fillProgress, gradientStyle }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <span className="relative inline-block">
      {/* Gray underlay */}
      <span className="text-[#D9D9D9] block whitespace-nowrap">
        {text}
      </span>
      {/* Gradient overlay clipped to text, width driven by MotionValue */}
      <motion.span
        className="absolute top-0 left-0 bg-clip-text text-transparent block whitespace-nowrap overflow-hidden"
        style={{
          ...gradientStyle,
          width: isMobile ? '100%' : fillProgress,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const sparkVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Gojra: React.FC<GojraProps> = ({
  imageSrc = pakistanSvg,
  altText = 'Cloud Surge Illustration',
}) => {
  const { scrollYProgress } = useViewportScroll();

  // transforms
  const imgX = useTransform(scrollYProgress, [0, 0.5], ['-50%', '80%']);
  const gradientShift = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 50%', '100% 50%']
  );
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const rowX = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);
  const rowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const lines = ['a spark in Birmingham,', 'a movement around the world'];

  // produce MotionValue<string> from '0%' → '100%'
  const fillWidths = [
    useTransform(scrollYProgress, [0, 0.06], ['0%', '100%']),
    useTransform(scrollYProgress, [0.06, 0.11], ['0%', '100%']),
  ];

  // new transform for icon opacity: appear when second line fill completes
  const iconOpacity = useTransform(scrollYProgress, [0.11, 0.12], [0, 1]);
  const [showIconOnMobile, setShowIconOnMobile] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      setShowIconOnMobile(true);
    }
  }, [isMobile]);

  const topSparks = Array.from({ length: 11 });
  const bottomSparks = Array.from({ length: 11 });

  return (
    <>
      <section className="py-8 sm:py-16 md:py-8 lg:py-10 xl:py-12 2xl:py-16 h-full flex items-end pb-4">
        <div className="w-[80%] md:w-auto md:container md:mx-auto pl-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight flex flex-col sm:flex-row flex-wrap items-start">
            <div className="flex flex-col items-start mr-0 sm:mr-3">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  style={{ backgroundPosition: gradientShift }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={idx === 1 ? 'flex items-center gap-2' : ''}
                >
                  <GradientText
                    text={line}
                    fillProgress={fillWidths[idx]}
                    gradientStyle={{
                      backgroundImage:
                        'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  />
                  {/* Mobile-only arrow placed after the word "world" (end of second line) */}
                  {idx === 1 && (
                    <motion.img
                      src={clickIcon}
                      alt="Click icon"
                      className="sm:hidden w-6 h-6"
                      style={{ opacity: isMobile ? 1 : iconOpacity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop/tablet arrow (hidden on mobile) */}
            <motion.img
              src={clickIcon}
              alt="Click icon"
              className="hidden sm:block sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 sm:mt-27"
              style={{ opacity: isMobile ? 1 : iconOpacity }}
            />
          </h2>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center bg-[#D9D9D9] px-4 py-6 sm:py-12 md:py-8 lg:py-10 xl:py-12 2xl:py-16">
        {/* Map/Image - First on mobile */}
        <motion.div
          style={{ x: isMobile ? 0 : imgX }}
          className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-1 lg:order-1"
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl object-cover"
          />
        </motion.div>

        {/* Right Side - Logos and Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-4 sm:px-6 lg:px-0 order-2 lg:order-2">
          {/* Top Logos - Second on mobile */}
          {[0, 1, 2].map((row) => (
            <motion.div
              key={row}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: {} }}
              transition={{ staggerChildren: 0.05, delay: row * 0.2 }}
              className="flex flex-wrap gap-0 mb-1 justify-start"
            >
              {topSparks.map((_, idx) => (
                <motion.img
                  key={`top-spark-${row}-${idx}`}
                  src={sparkAsset}
                  alt="spark"
                  className="w-6 h-6 transform"
                  variants={sparkVariants}
                  whileHover={{ scale: 1.7, y: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              ))}
            </motion.div>
          ))}

          {/* Text - Third on mobile, left aligned */}
          <motion.div
            style={{ opacity: isMobile ? 1 : textOpacity }}
            className="text-[#5D5D5D] space-y-4 md:space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-4 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-2xl max-w-full lg:max-w-3/4 mt-4 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 text-left mb-4 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 lg:text-left">
            <p>
              <strong>Cloud Surge</strong> was founded in 2022 by two friends,
              <strong> Zhagum Arshad</strong> and <strong>Ilyas Khan</strong>,
              united by the vision of bridging the global technology skills gap.
              Born in Birmingham with strong roots in Pakistan, they saw firsthand
              how underrepresented communities often miss out on high-growth tech
              careers.
            </p>
            <p>
              Today, Cloud Surge has become more than just a scaling partner;
              we're a platform for social impact and innovation, cultivating
              talent, fostering collaboration, and transforming local economies
              worldwide.
            </p>
          </motion.div>

          {/* Bottom Logos - Fourth on mobile */}
          {[0, 1].map((row) => (
            <motion.div
              key={`bottom-row-${row}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: {} }}
              transition={{ staggerChildren: 0.05, delay: row * 0.2 + 0.6 }}
              className="flex flex-wrap gap-0 mt-1 justify-start"
            >
              {bottomSparks.map((_, idx) => (
                <motion.img
                  key={`bottom-spark-${row}-${idx}`}
                  src={sparkAsset}
                  alt="spark"
                  className="w-6 h-6 transform"
                  variants={sparkVariants}
                  whileHover={{ scale: 1.7, y: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gojra;
