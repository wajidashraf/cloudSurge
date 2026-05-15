import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';
import profilePic1 from '@/assets/Naveed Ali.png';
import profilePic2 from '@/assets/Haseeb Khan.png';
import profilePic3 from '@/assets/Tayyaba Naseer.jpg';
import profilePic4 from '@/assets/Umar Gulzar.png';
import profilePic5 from '@/assets/Zarqa Kanwal.png';
import profilePic6 from '@/assets/shaheer.png';

/* ─── Types ─────────────────────────────────────────────── */
interface Testimonial {
  imageSrc: string;
  name: string;
  role: string;
  text: string;
}

/* ─── Constants ─────────────────────────────────────────── */
const FONT = "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif";
const RED = '#EF4123';
const NAME_RED = '#EB4124';
const GRAY = '#818181';
const CARD_BG = 'rgba(239, 65, 35, 0.14)';
const HEADING_GRADIENT =
  'linear-gradient(90deg, #EF4123 30.77%, #BC1D80 61.54%, #000765 88.46%)';

const TESTIMONIALS: Testimonial[] = [
  {
    imageSrc: profilePic6,
    name: 'Shaheer Ahmed',
    role: 'MS Dynamics & Power Platform Solution Architect (MVP)',
    text: 'From student at Cloud Surge Academy to Microsoft MVP , Shaheer’s journey is proof that great careers start here!',
  },
  {
    imageSrc: profilePic1,
    name: 'Naveed Ali Shah',
    role: 'MS Dynamics & Power Platform Solution Architect',
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
    name: 'Muhammad Haseeb Khan',
    role: 'Full Stack Developer',
    text: 'At Cloud Surge, I work as a full stack developer building custom solutions that solve real business challenges. The collaborative environment has allowed me to grow my technical skills while delivering impactful solutions for clients.',
  },
  {
    imageSrc: profilePic3,
    name: 'Tayyaba Naseer',
    role: 'Graphic Designer',
    text: 'At Cloud Surge, I focus on graphic design and UI/UX designing, creating visually compelling and user-friendly interfaces. The creative freedom and collaborative environment have allowed me to grow as a designer.',
  },
  {
    imageSrc: profilePic5,
    name: 'Zarqa Kanwal',
    role: 'QA Engineer',
    text: 'At Cloud Surge, I ensure the delivery of high-quality software by designing and executing comprehensive test cases, identifying issues, and collaborating closely with developers to improve product reliability and user experience.',
  },
];

/* ─── Scroll-fill Gradient Heading ─────────────────────── */
const GradientHeading: React.FC<{ fillProgress: MotionValue<string> }> = ({
  fillProgress,
}) => {
  const lines = [
    '@ Cloud Surge,',
    'your potential thrives &',
    'your career takes off.',
  ];

  return (
    <span style={{ display: 'block' }}>
      {lines.map((line, index) => (
        <span
          key={index}
          style={{
            position: 'relative',
            display: 'block',
            fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
            fontWeight: index === 0 ? 700 : 400,
          }}
        >
          {/* Gray underlay */}
          <span style={{ color: '#D9D9D9', display: 'block', whiteSpace: 'nowrap' }}>
            {line}
          </span>

          {/* Gradient fill overlay */}
          <motion.span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              display: 'block',
              whiteSpace: 'nowrap',
              width: fillProgress,
              backgroundImage: HEADING_GRADIENT,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              fontWeight: index === 0 ? 700 : 400,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ─── Slide variants ────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ─── Main Component ────────────────────────────────────── */
const Gojra: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-scrubbed fill for heading */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'start 20%'],
  });
  const fillProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  /* Carousel state */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* Preload all images */
  useEffect(() => {
    TESTIMONIALS.forEach(({ imageSrc }) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  /* Auto-advance every 10 s */
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrentIndex((p) => (p + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      style={{ fontFamily: FONT, padding: '0px 0 8px', overflow: 'hidden' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 80px)',
        }}
      >
        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 'clamp(28px, 4.5vw, 60px)',
            lineHeight: '98%',
            margin: '0 0 clamp(36px, 5vw, 60px) 0',
            maxWidth: '640px',
          }}
        >
          <GradientHeading fillProgress={fillProgress} />
        </motion.h2>

        {/* ── Card ── */}
        {/* overflow:visible so image can bleed below card */}
        <div style={{ position: 'relative', paddingBottom: '52px' }}>
          <div
            style={{
              background: CARD_BG,
              position: 'relative',
              minHeight: '445px',
              overflow: 'hidden',
            }}
            className="gojra-card"
          >
            {/* Hidden preload pool */}
            <div aria-hidden style={{ display: 'none' }}>
              {TESTIMONIALS.map((t) => (
                <img key={t.name} src={t.imageSrc} alt="" loading="eager" decoding="async" />
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
                style={{ display: 'flex', alignItems: 'stretch', minHeight: '445px' }}
                className="gojra-inner"
              >
                {/* ── Image Column ── */}
                <div
                  style={{ position: 'relative', flexShrink: 0 }}
                  className="gojra-img-col"
                >
                  <motion.img
                    key={current.imageSrc}
                    src={current.imageSrc}
                    alt={current.name}
                    loading="eager"
                    decoding="async"
                    initial={{ scale: 1.04, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: '100%',
                      /* Image is 486px in 445px card — bleed +9.2% */
                      height: '109%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* ── Text Column ── */}
                <div
                  style={{
                    flex: 1,
                    padding: 'clamp(32px, 4vw, 60px) clamp(24px, 3.5vw, 48px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  className="gojra-text-col"
                >
                  {/* Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.4 }}
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 'clamp(22px, 2.8vw, 40px)',
                      lineHeight: '98%',
                      color: NAME_RED,
                      margin: '0 0 14px 0',
                    }}
                  >
                    {current.name}
                  </motion.h3>

                  {/* Divider */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 0.22, duration: 0.5, ease: 'easeOut' }}
                    style={{
                      height: '2px',
                      background: RED,
                      maxWidth: '500px',
                      marginBottom: '14px',
                    }}
                  />

                  {/* Role */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: FONT,
                      fontWeight: 350,
                      fontSize: 'clamp(14px, 1.4vw, 20px)',
                      lineHeight: '98%',
                      color: NAME_RED,
                      margin: '0 0 24px 0',
                    }}
                  >
                    {current.role}
                  </motion.p>

                  {/* Quote */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.38 }}
                    style={{
                      fontFamily: FONT,
                      fontWeight: 350,
                      fontSize: 'clamp(14px, 1.35vw, 20px)',
                      lineHeight: '165%',
                      color: GRAY,
                      margin: 0,
                      maxWidth: '486px',
                    }}
                  >
                    {current.text}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Pagination Dots ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '31px',
              marginTop: '28px',
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial ${i + 1}`}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.88 }}
                animate={
                  i === currentIndex
                    ? { scale: [1, 1.18, 1], transition: { duration: 0.7, repeat: Infinity, repeatType: 'reverse' } }
                    : { scale: 1 }
                }
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: `1px solid ${RED}`,
                  background: i === currentIndex ? RED : 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        .gojra-img-col {
          width: 39%;
        }

        @media (max-width: 900px) {
          .gojra-card {
            overflow: visible !important;
          }
          .gojra-inner {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .gojra-img-col {
            width: 100% !important;
            height: 300px;
            overflow: hidden;
          }
          .gojra-img-col img {
            height: 100% !important;
            width: 100% !important;
            object-position: center 20% !important;
          }
          .gojra-text-col {
            padding: 32px 24px !important;
          }
        }

        @media (max-width: 480px) {
          .gojra-img-col {
            height: 240px;
          }
          .gojra-text-col {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gojra;