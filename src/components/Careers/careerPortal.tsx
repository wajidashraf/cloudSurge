import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual imports:
import image from '@/assets/careers-page.jpg'
// import arrow from '@/components/common/arrow.svg'
// const image = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';



const ArrowIcon = () => (
  <svg
    width="20"
    height="25"
    viewBox="0 0 20 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <g clipPath="url(#wwd-arrow-clip)">
      <path
        d="M13.6218 11.505L12.4029 12.7562L16.2259 16.705H2.06583V0H0V18.8256H15.933L11.738 23.075L12.957 24.3344L19.5581 17.6394L13.6218 11.505Z"
        fill="#EF4123"
      />
    </g>
    <defs>
      <clipPath id="wwd-arrow-clip">
        <rect width="19.5581" height="24.3344" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const InfoIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, marginTop: '1px' }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#EC3F24"
      strokeWidth="1.5"
    />
    <path
      d="M12 8V12M12 16H12.01"
      stroke="#EC3F24"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const CareerPortal: React.FC = () => {
  return (
    <section
      style={{
        background: 'rgba(237, 237, 237, 0.8)',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Outer wrapper: full-bleed section */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '600px',
          }}
          className="career-portal-grid"
        >
          {/* ─── Left: Content Column ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              flex: '0 0 50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px 60px 80px 80px',
              gap: '0',
              position: 'relative',
              zIndex: 1,
            }}
            className="career-content-col"
          >
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(40px, 5vw, 60px)',
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                color: '#EC3F24',
                margin: '0 0 28px 0',
                maxWidth: '492px',
              }}
            >
              Join Our Team
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
                fontWeight: 350,
                fontSize: 'clamp(16px, 2vw, 24px)',
                lineHeight: '29px',
                color: '#727272',
                margin: '0 0 48px 0',
                maxWidth: '534px',
              }}
            >
              We're always looking for talented individuals who are passionate
              about what they do. Explore our open roles or reach out directly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: '48px',
              }}
            >
              {/* Button 1 — View Open Roles */}
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                }}
                onClick={() => {}}
              >
                <ArrowIcon />
                <span
                  style={{
                    fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    lineHeight: '26px',
                    letterSpacing: '-0.04em',
                    color: '#E94227',
                    whiteSpace: 'nowrap',
                  }}
                >
                  View Open Roles
                </span>
              </motion.button>

              {/* Button 2 — Submit Speculative */}
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                }}
                onClick={() => {}}
              >
                <ArrowIcon />
                <span
                  style={{
                    fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    lineHeight: '26px',
                    letterSpacing: '-0.04em',
                    color: '#E94227',
                  }}
                >
                  Submit a Speculative Application
                </span>
              </motion.button>
            </motion.div>

            {/* Info Footer */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                maxWidth: '487px',
              }}
            >
              <InfoIcon />
              <p
                style={{
                  fontFamily: "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif",
                  fontWeight: 350,
                  fontSize: 'clamp(14px, 1.4vw, 18px)',
                  lineHeight: '22px',
                  color: '#727272',
                  margin: 0,
                  textAlign: 'justify',
                }}
              >
                All applications are reviewed thoroughly. We aim to respond to
                every submission within 2–3 weeks of receipt.
              </p>
            </motion.div>
          </motion.div>

          {/* ─── Right: Image Column ─── */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              flex: '0 0 60%',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
            }}
            className="career-image-col"
          >
            <img
              src={image}
              alt="Careers at our company"
              className='carrePageImage'
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',

                transform: 'scaleX(-1)',
              }}
            />
            {/* Subtle left-edge gradient blending into bg */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right, rgba(237,237,237,0.35) 0%, transparent 18%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ─── Responsive Styles ─── */}
      <style>{`
        @media (max-width: 1024px) {
          .career-content-col {
            padding: 64px 48px 64px 48px !important;
          }
        }

        @media (max-width: 768px) {
          .career-portal-grid {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .career-content-col {
            flex: unset !important;
            padding: 48px 24px !important;
            order: 2;
          }
          .career-image-col {
            flex: unset !important;
            width: 100% !important;
            min-height: 320px !important;
            order: 1;
          }
        }

        @media (max-width: 480px) {
          .career-content-col {
            padding: 40px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .carrePageImage {
            object-position: top !important;
          }
        }

        @media (min-width: 769px) {
          .carrePageImage {
            object-position: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CareerPortal;