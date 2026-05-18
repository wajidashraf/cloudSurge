import React from 'react';
import { motion } from 'framer-motion';
import img from '@/assets/Pod Diagram.svg';

// ─── Font shorthand ────────────────────────────────────────────────────
const bahnschrift = "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif";

// ─── Animation Variants ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

// ─── Component ────────────────────────────────────────────────────────
const WhatisPod: React.FC = () => {
  return (
    <section
      className=" relative overflow-hidden"
      style={{
        background: '#E5E5E5',
        // Figma: 700px height — fluid between devices
        minHeight: 'clamp(480px, 48.6vw, 700px)',
      }}
    >
      {/* ── Inner container: max 1440px, centred ─────────────── */}
      <div
        className=" relative max-w-[1280px] mx-auto h-full flex flex-col"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          // Figma: section height 700px, title top 111px → 15.9%
          paddingTop: 'clamp(2.5rem, 7.7vw, 111px)',
          paddingBottom: 'clamp(2.5rem, 4vw, 56px)',
          paddingLeft: 'clamp(1.25rem, 2vw, 28px)',
          paddingRight: 'clamp(1.25rem, 2vw, 28px)',
        }}
      >
        {/* ── Title "What is a Pod?" ───────────────────────── */}
        {/*
            Figma: left: calc(50% - 462px/2) → centered
            70px, Bahnschrift weight 350, #EF4123, letter-spacing -0.01em
        */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center w-full"
          style={{
            fontFamily: bahnschrift,
            fontWeight: 350,
            fontSize: 'clamp(2.25rem, 4.86vw, 70px)',
            lineHeight: '113%',
            letterSpacing: '-0.01em',
            color: '#EF4123',
            margin: 0,
            // Figma: gap between title bottom (111+79=190px) and content top (294px) ≈ 104px
            marginBottom: 'clamp(1.5rem, 7.2vw, 104px)',
          }}
        >
          What is a <strong>Pod?</strong> 
        </motion.h2>

        {/* ── Content row: text left + image right ─────────── */}
        {/*
            Figma desktop positions (relative to 1440px section):
              Text:  left 163px (11.3%), width 585px (40.6%), top 294px
              Image: left 913px (63.4%), top 282px, 266×254px
        */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 md:gap-0">

          {/* ── Body Text ─────────────────────────────────── */}
          {/*
              Figma: left 163px = 11.3% left-indent, width 585px = 40.6%
              24px, Bahnschrift 350, line-height 95%, #EF4123
          */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-[52%] flex-shrink-0"
            style={{
              // Figma: text starts at 163px = 11.3% of 1440px
              paddingLeft: 'clamp(0px, 5.3vw, 120px)',
              // Figma: text is 585px wide within that
              paddingRight: 'clamp(1rem, 2vw, 28px)',
            }}
          >
            <p
              style={{
                fontFamily: bahnschrift,
                fontWeight: 350,
                fontSize: 'clamp(1rem, 1.67vw, 24px)',
                // Figma: line-height 95% — intentionally tight, editorial feel
                lineHeight: '95%',
                color: '#EF4123',
                margin: 0,
                maxWidth: 'min(585px, 100%)',
              }}
            >
              A Pod is a team of IT professionals who already know how to work
              together. It is led by a Pod Lead who handles project management
              and quality assurance. The team is assembled specifically for your
              project, whether customised from scratch or drawn from a
              pre-formed group. 
              <br />
              <br />
              The difference between a Pod and a group of
              individual contractors is the same as the difference between a
              football team and eleven strangers in the same shirt.
            </p>
          </motion.div>

          {/* ── Image ─────────────────────────────────────── */}
          {/*
              Figma: left 913px (63.4%), width 266px, height 254px
              Centres itself in the remaining ~48% right column
          */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:pl-30 lg:pl-40 md:flex-1 flex justify-center md:justify-start md:items-start"
           
          >
            <img
              src={img}
              alt="Pod team with CloudSurge logo"
              style={{
                // Figma: 266.33px × 254px — scale fluidly with viewport
                width: 'clamp(160px, 18.5vw, 266px)',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatisPod;