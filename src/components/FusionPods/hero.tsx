import { motion } from "framer-motion";
import bg from "@/assets/Fusion-pod.png";
import icon from "@/assets/fusion-pod-Icon.png";
import bgMobile from "@/assets/Fusion-pod-mobile.png";
import { Link } from "@tanstack/react-router";

// ─── Animation Variants ────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Hero Component ────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background ────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile image */}
        <img
          src={bgMobile}
          alt=""
          aria-hidden="true"
          className="md:hidden w-full h-full object-cover object-top"
        />
        {/* Desktop image */}
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* Dark overlay matching Figma: rgba(0,0,0,0.2) */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />
      </motion.div>

      {/* ── Mobile Layout (stacked) ────────────────────────────── */}
      <div className="relative z-10 md:hidden flex flex-col min-h-screen px-6 pt-24 pb-10">
        <div
          className="absolute inset-0 h-[500px]"
          style={{
            background:
              "linear-gradient(to right, rgba(236,63,36,1) 50%, rgba(190,30,120,1) 60%, rgba(115,0,191,1) 75%, rgba(10,10,144,1) 100%)",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 5%, transparent 30%)",
          }}
        />
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mb-6"
        ></motion.div>

        {/* Spacer pushes content toward bottom */}
        <div className="flex-1" > </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          
        >
          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-white leading-none mb-4"
            style={{
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 12vw, 4.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Fusion Pod
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={fadeUp} className="mb-8">
            <p
              className="text-white font-semibold"
              style={{
                fontSize: "clamp(14px, 4.3vw, 1.4rem)",
                lineHeight: 1.5,
              }}
            >
              Meet our revolutionary model - High-impact, agile IT teams ready
              when you are.
            </p>
            <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolut flex flex-row items-center"
          style={{
            marginTop: "16px",
            gap: "16px",
          }}
        >
          {/* Icon — Figma: 87×87 */}
          <motion.div variants={fadeUp}>
            <img
              src={icon}
              alt="Fusion Pod"
              style={{
                width: "clamp(3.5rem, 6vw, 87px)",
                height: "clamp(3.5rem, 6vw, 87px)",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </motion.div>

          {/* Sub-heading — Figma: 263px wide, 24px, Bahnschrift 600 */}
          <motion.p
            variants={fadeUp}
            className="text-white font-semibold"
            style={{
              fontWeight: 400,
              fontSize: "clamp(0.9rem, 1.67vw, 24px)",
              lineHeight: "110%",
              letterSpacing: "-0.01em",
              maxWidth: "min(163px, 300px)",
            }}
          >
            A ready-built delivery team in 48 hours.
          </motion.p>
        </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-row gap-3">
            <button
              className="flex items-center justify-center font-semibold rounded-md transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95"
              style={{
                background: "#FFFFFF",
                color: "#EC3F24",
                border: "1px solid #FFFFFF",
                padding: "6px 24px",
                fontSize: "clamp(0.9rem, 1.25vw, 18px)",
                lineHeight: "150%",
                minWidth: "clamp(120px, 13.7vw, 197px)",
                height: "39px",
              }}
            >
              Get a Pod in 48 hours
            </button>

            {/* Secondary: outline white */}
            <button
              className="flex items-center justify-center font-semibold rounded-md transition-all duration-200 hover:bg-white/15 active:scale-95"
              style={{
                fontFamily:
                  "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
                background: "transparent",
                color: "#FFFFFF",
                border: "1px solid #FFFFFF",
                padding: "6px 24px",
                fontSize: "clamp(0.9rem, 1.25vw, 18px)",
                lineHeight: "150%",
                minWidth: "clamp(100px, 11.3vw, 163px)",
                height: "39px",
              }}
            >
              See how it works
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Desktop Layout (absolute positioned per Figma) ─────── */}
      <div
        className="relative z-10 hidden md:block"
        style={{ minHeight: "100svh" }}
      >
        <div
          style={{
            width: "100%",
            height: "450px",
            background:
              "linear-gradient(to right, rgba(236,63,36,1) 50%, rgba(190,30,120,1) 60%, rgba(115,0,191,1) 75%, rgba(10,10,144,1) 100%)",
            maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        ></div>
        {/* Left content block — Figma: left:128px, bottom area ~top:483px */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute"
          style={{
            left: "clamp(2rem, 8.5vw, 128px)",
            bottom: "clamp(3rem, 15vh, 150px)",
            maxWidth: "min(600px, 45vw)",
          }}
        >
          {/* Main heading — Figma: 90px, Bahnschrift 600 */}
          <motion.h1
            variants={fadeUp}
            className="text-white leading-none"
            style={{
              fontFamily:
                "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(3.5rem, 6.25vw, 90px)",
              letterSpacing: "-0.01em",
              lineHeight: "110%",
              marginBottom: "clamp(1.5rem, 2.5vw, 40px)",
            }}
          >
            Fusion Pod
          </motion.h1>

          {/* Content block — Figma: flex-col gap:40px */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 40px)",
            }}
          >
            {/* Subtitle text — Figma: 24px, Bahnschrift 600, 485px wide */}
            <p
              className="text-white"
              style={{
                fontFamily:
                  "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
                fontSize: "clamp(1rem, 1.67vw, 24px)",
                lineHeight: "150%",
                maxWidth: "min(485px, 34vw)",
              }}
            >
              Meet our revolutionary model - High-impact, agile IT teams ready
              when you are.
            </p>

            {/* Action buttons — Figma: flex-row gap:16px */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {/* Primary: white bg, red text */}
              <Link
                to="/contact"
                className="flex items-center justify-center font-semibold rounded-md transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95"
                style={{
                  fontFamily:
                    "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
                  background: "#FFFFFF",
                  color: "#EC3F24",
                  border: "1px solid #FFFFFF",
                  padding: "6px 24px",
                  fontSize: "clamp(0.9rem, 1.25vw, 18px)",
                  lineHeight: "150%",
                  minWidth: "clamp(120px, 13.7vw, 197px)",
                  height: "39px",
                }}
              >
                Get a Pod in 48 hours
              </Link>

              {/* Secondary: outline white */}
              <Link
                to="/success-stories"
                className="flex items-center justify-center font-semibold rounded-md transition-all duration-200 hover:bg-white/15 active:scale-95"
                style={{
                  fontFamily:
                    "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  padding: "6px 24px",
                  fontSize: "clamp(0.9rem, 1.25vw, 18px)",
                  lineHeight: "150%",
                  minWidth: "clamp(100px, 11.3vw, 163px)",
                  height: "39px",
                }}
              >
                See how it works
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right icon group — Figma: left:1001px, top:666px (bottom-right quadrant) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute flex flex-row items-center"
          style={{
            right: "clamp(2rem, 6vw, 100px)",
            bottom: "clamp(3rem, 13vh, 160px)",
            gap: "16px",
          }}
        >
          {/* Icon — Figma: 87×87 */}
          <motion.div variants={fadeUp}>
            <img
              src={icon}
              alt="Fusion Pod"
              style={{
                width: "clamp(3.5rem, 6vw, 87px)",
                height: "clamp(3.5rem, 6vw, 87px)",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </motion.div>

          {/* Sub-heading — Figma: 263px wide, 24px, Bahnschrift 600 */}
          <motion.p
            variants={fadeUp}
            className="text-white font-semibold"
            style={{
              fontFamily:
                "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.9rem, 1.67vw, 24px)",
              lineHeight: "110%",
              letterSpacing: "-0.01em",
              maxWidth: "min(263px, 18vw)",
            }}
          >
            A ready-built delivery team in 48 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
