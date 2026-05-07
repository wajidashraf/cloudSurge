import React, { useState, useEffect } from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  type Variants,
  type MotionValue,
  AnimatePresence
} from 'framer-motion';
import profilePic1 from '@/assets/Naveed.jpg'; // Testimonial image 1
import profilePic2 from '@/assets/Haseeb Khan.jpg';  // Testimonial image 2
import profilePic3 from '@/assets/Tayyaba.jpg';  // Testimonial image 3
import profilePic4 from '@/assets/Umar.jpg';  // Testimonial image 4
import profilePic5 from '@/assets/Zarqa Kanwal.jpg';  // Testimonial image 5
// ... import additional images if neededs

interface Testimonial {
  imageSrc: string;
  name: string;
  role: string;
  text: string;
}

interface GojraProps {
  imageSrc?: string;
  altText?: string;
}

// GradientText driven by scroll‐scrubbed MotionValue<string>
const GradientText: React.FC<{
  text: string;
  mobileText?: string;
  fillProgress: MotionValue<string>;
  gradientStyle: React.CSSProperties;
}> = ({ text, mobileText, fillProgress, gradientStyle }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayText = isMobile && mobileText ? mobileText : text;

  return (
    <span className="relative inline-block">
      {/* Gray underlay */}
      <span className="text-[#D9D9D9] block whitespace-nowrap">{displayText}</span>
      {/* Gradient overlay clipped to text */}
      <motion.span
        className="absolute top-0 left-0 bg-clip-text text-transparent block whitespace-nowrap overflow-hidden"
        style={{
          ...gradientStyle,
          width: isMobile ? '100%' : fillProgress,
        }}
      >
        {displayText}
      </motion.span>
    </span>
  );
};

const sparkVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: [0, 1.2, 1],
    opacity: [0, 0.8, 0],
    transition: { 
      duration: 1.5,
      times: [0, 0.5, 1]
    }
  },
};

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    // dd
    opacity: 0
  })
};

const Gojra: React.FC<GojraProps> = () => {
  const { scrollYProgress } = useViewportScroll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const gradientShift = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 50%', '100% 50%']
  );

  const lines = [
    { text: '@ Cloud Surge', bold: true, mobileText: '@ Cloud Surge,' },
    { text: ', your potential thrives &', bold: false, mobileText: 'your potential thrives' },
    { text: 'your career takes off.', bold: false, mobileText: '& your career takes off.' },
  ];

  const fillWidths = [
    useTransform(scrollYProgress, [0.25, 0.30], ['0%', '100%']),
    useTransform(scrollYProgress, [0.30, 0.35], ['0%', '100%']),
    useTransform(scrollYProgress, [0.35, 0.45], ['0%', '100%']),
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      imageSrc: profilePic1,
      name: 'Naveed Ali Shah',
      role: 'Senior Consultant',
      text: 'At Cloud Surge, I lead and collaborate with talented teams to turn complex business challenges into elegant solutions using Microsoft Dynamics 365 and Power Platform.',
    },
    {
      imageSrc: profilePic4,
      name: 'Umar Gulzar',
      role: 'Senior Consultant',
      text: 'At Cloud Surge, I leverage my expertise in MS Dynamics and Power Platform to deliver transformative custom solutions. The collaborative environment has allowed me to grow as a consultant while making a real impact in the Microsoft ecosystem.',
    },
    {
      imageSrc: profilePic2,
      name: 'Muhammad Abdul Haseeb Khan',
      role: 'Full Stack Developer',
      text: 'At Cloud Surge, I work as a full stack developer building custom solutions that solve real business challenges. The collaborative environment has allowed me to grow my technical skills while delivering impactful solutions for clients.',
    },
    {
      imageSrc: profilePic3,
      name: 'Tayyaba Naseer',
      role: 'Associate Consultant',
      text: 'At Cloud Surge, I focus on graphic design and UI/UX designing, creating visually compelling and user-friendly interfaces. The creative freedom and collaborative environment have allowed me to grow as a designer while making a meaningful impact on user experiences.',
    },
    {
      imageSrc: profilePic5,
      name: 'Zarqa Kanwal',
      role: 'QA Engineer',
      text: 'At Cloud Surge, I ensure the delivery of high-quality software by designing and executing comprehensive test cases, identifying issues, and collaborating closely with developers. My work with manual and automated testing tools helps improve product reliability, performance, and user experience.',
    }
  ];

  // Preload all images to prevent reloading on card change
  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = new Image();
      img.src = testimonial.imageSrc;
    });
  }, [testimonials]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoPlay(false);
    
    // Re-enable autoplay after user interaction timeout
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* === your existing gradient‐text section === */}
      <section className="mt-8 md:mt-8 lg:mt-4 xl:mt-0 2xl:-mt-32 pb-4 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-16 h-full">
        <div className="container mx-auto px-8 md:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl leading-tight flex flex-col sm:flex-row flex-wrap items-start md:items-center md:justify-center 2xl:justify-start text-left md:text-center 2xl:text-left mb-8 md:mb-16">
            <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center 2xl:items-start mr-0 sm:mr-3">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  style={{ backgroundPosition: gradientShift }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={`${line.bold ? 'font-bold md:font-normal' : ''} ${idx === 0 || idx === 1 ? 'md:inline' : 'md:block md:w-full'}`}
                >
                  <GradientText
                    text={line.text}
                    mobileText={line.mobileText}
                    fillProgress={fillWidths[idx]}
                    gradientStyle={{
                      backgroundImage:
                        'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </h2>
        </div>
      </section>

      {/* === Enhanced testimonial section with animations === */}
      <section className="bg-[#FCE2E1] mx-8 md:mx-auto md:max-w-[75%] lg:max-w-[75%] xl:max-w-[75%] 2xl:max-w-none 2xl:ml-70 2xl:mr-70 relative overflow-hidden min-h-[680px] md:min-h-[138px] lg:min-h-[145px] xl:min-h-[150px] 2xl:min-h-[630px] pt-6 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-10">
        {/* Animated background sparks */}
        <motion.div 
          className="absolute inset-0 pointer-events-none "
          initial="hidden"
          animate="visible"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#ff8a80] "
              variants={sparkVariants}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
              }}
            />
          ))}
        </motion.div>
        
        <div className="container mx-auto py-0 md:py-4 lg:py-4 xl:py-4 2xl:py-20 px-4 md:px-6 lg:px-8 xl:px-12 2xl:pl-50 relative h-[590px] md:h-auto lg:h-auto xl:h-auto 2xl:h-[495px] flex items-start md:items-center">
          {/* Pre-render all images hidden to cache them */}
          <div className="hidden">
            {testimonials.map((testimonial) => (
              <img
                key={testimonial.name}
                src={testimonial.imageSrc}
                alt=""
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
          
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                type: "tween", 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="flex flex-col md:flex-row items-start md:items-center w-full"
            >
              {/* Profile image - preloaded and cached */}
              <motion.div 
                className="mb-4 md:mb-0 md:mr-8 flex-shrink-0"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <img
                  src={currentTestimonial.imageSrc}
                  alt={currentTestimonial.name}
                  className="w-full sm:w-48 md:w-40 lg:w-48 xl:w-56 2xl:w-100 h-auto object-contain border-4 md:border-3 2xl:border-4 border-white shadow-lg ml-0 mr-0 mt-0 md:mx-0 md:mt-0"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
              
              {/* Text content */}
              <div className="flex-1 pl-0 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-10 mt-0 md:mt-6 lg:mt-8 xl:mt-9 2xl:mt-10 text-left min-h-[240px] md:min-h-0">
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#ef4213] mb-2 max-w-[90%] md:max-w-[70%] mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentTestimonial.name}
                </motion.h3>
                
                <motion.span 
                  className="block border-b-2 border-[#ef4213] mt-1 mx-0"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#ef4213] font-medium mb-4 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentTestimonial.role}
                </motion.p>
                
                <motion.p 
                  className="text-[#818181] mb-6 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-[90%] md:max-w-[85%] lg:max-w-[85%] xl:max-w-[82%] 2xl:max-w-[80%] leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentTestimonial.text}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Enhanced pagination dots */}
        <div className="flex space-x-4 md:space-x-10 justify-center py-5 pb-10">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 focus:outline-none transition-colors duration-300 
                ${i === currentIndex
                  ? 'bg-[#ec3f24] border-[#ec3f24]'
                  : 'border-[#ec3f24]'
                }`}
              aria-label={`Show testimonial ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: i === currentIndex ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                duration: 0.5,
                repeat: i === currentIndex ? Infinity : 0,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gojra;