import React from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import ilyas from '@/assets/ilyas-new.png';
import zhagum from '@/assets/zhagum-new.jpeg';

interface Member {
  name: string;
  role: string;
  subtitle: React.ReactNode;
  imageUrl: string;
}

// GradientText driven by scroll‐scrubbed MotionValue<string>
const GradientText: React.FC<{
  text: string;
  fillProgress: MotionValue<string>;
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

const members: Member[] = [
  {
    name: 'Ilyas Khan',
    role: 'Founder & IT Delivery Expert',
    subtitle:
      "Decades of tech expertise underpin Ilyas's commitment to scalable IT solutions through the Pod model.",
    imageUrl: ilyas,
  },
  {
    name: 'Zhagum Arshad',
    role: 'Co-Founder & Social Visionary',
    subtitle: (
      <>
        <strong>Zhagum</strong> blends business acumen with a passion for social uplift, shaping Cloud Surge's global outreach.
      </>
    ),
    imageUrl: zhagum,
  },
];

const TeamMembers: React.FC = () => {
  // pull global scroll progress
  const { scrollYProgress } = useViewportScroll();

  // define the two fill ranges exactly as you requested:
  // Line 1: scroll 0 → 0.06  
  // Line 2: scroll 0.06 → 0.11
  const fillWidths = [
    useTransform(scrollYProgress, [0.54, 0.58], ['0%', '100%']),
    useTransform(scrollYProgress, [0.58, 0.61], ['0%', '100%']),
  ];

  const gradientStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const headerLines = ['Meet the minds,', 'Driving the Cloud Surge'];

  return (
    <section className="relative py-24 h-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight flex flex-col sm:flex-row flex-wrap">
          <div className="flex flex-col items-start mr-0 sm:mr-3">
            {headerLines.map((line, idx) => (
              <motion.div
                key={idx}
                style={{ backgroundPosition: 'center' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <GradientText
                  text={line}
                  fillProgress={fillWidths[idx]}
                  gradientStyle={gradientStyle}
                />
              </motion.div>
            ))}
          </div>
        </h2>
      </div>

      {/* Member cards */}
      <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white border-dashed p-4 md:p-4 lg:p-5 xl:p-5 2xl:p-6 hover:scale-[1.02] transform transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 md:gap-8">
              <motion.div
                className={`w-3/4 md:mx-0 md:w-1/4 md:ml-[10%] md:mr-4 lg:w-1/4 lg:ml-[10%] lg:mr-6 xl:w-[28%] xl:ml-[10%] xl:mr-8 2xl:w-1/3 2xl:ml-0 2xl:mr-0 h-full md:h-auto overflow-hidden ${idx === 0 ? '-ml-1 md:ml-[10%]' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1 flex flex-col justify-center space-y-2">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.1 }}
                  className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-5xl font-bold text-[#e94325] text-left"
                >
                  {member.name}
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.2 }}
                  className="w-full border-t-2 border-[#D9D9D9]"
                />
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  className="text-[#e94325] font-semibold uppercase text-xs sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide text-left"
                >
                  {member.role}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.4 }}
                  className="text-[#5D5D5D] text-sm sm:text-2xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-full sm:max-w-[70%] text-left mt-4"
                >
                  {member.subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
