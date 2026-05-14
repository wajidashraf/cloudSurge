import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────
interface Step {
  number: string;
  heading: string;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────
const steps: Step[] = [
  {
    number: '1',
    heading: 'Define Your Requirements',
    text: 'We start by deeply understanding your project goals, technical stack, and team dynamics — mapping the exact skills and seniority levels your pod will need to deliver from day one.',
  },
  {
    number: '2',
    heading: 'Assemble Your Pod',
    text: 'We rapidly source, vet, and onboard senior engineers, architects, and specialists who are pre-aligned to your culture — fully integrated and shipping within days, not months.',
  },
  {
    number: '3',
    heading: 'Deploy, Iterate & Scale',
    text: 'Your pod operates as a true extension of your team — hitting sprint goals, adapting to feedback, and scaling capacity up or down as your roadmap evolves.',
  },
];

// ─── Animation Variants ────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const circlePop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

// ─── Shared font style ────────────────────────────────────────────────
const bahnschrift = "'Bahnschrift', 'DIN Condensed', 'Arial Narrow', sans-serif";

// ─── Component ────────────────────────────────────────────────────────
const PodModelWorks: React.FC = () => {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: 'clamp(600px, 60vw, 864px)', background: 'rgba(235, 229, 255, 0.8)' }}
    >
      {/* ── Desktop Two-Panel Layout ──────────────────────────── */}
      <div className="hidden md:flex flex-row w-full h-full absolute inset-0">

        <div
          className="relative flex-shrink-0"
          style={{
            width: '42%',
            background: 'rgba(235, 229, 255, 0.8)',
          }}
        />

        {/* Right panel: white */}
        <div className="flex-1 bg-white"  />
      </div>

      
      {[14.7, 39.2, 63.8].map((topPct, i) => (
        <motion.div
          key={i}
          className="hidden md:flex items-center justify-center absolute z-20"
          style={{
            left: '39.5%',
            top: `${topPct}%`,
            transform: 'translateX(-50%)',
            width: 'clamp(56px, 5.7vw, 82px)',
            height: 'clamp(56px, 5.7vw, 82px)',
            background: 'rgba(115, 0, 191, 0.8)',
            border: 'clamp(4px, 0.48vw, 6.86px) solid #FFFFFF',
            borderRadius: '9999px',
            boxShadow: '0 4px 24px rgba(115,0,191,0.25)',
          }}
          variants={circlePop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.15 }}
        >
          <span
            style={{
              fontFamily: bahnschrift,
              fontWeight: 600,
              fontSize: 'clamp(1.25rem, 2.54vw, 36.57px)',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
            }}
          >
            {i + 1}
          </span>
        </motion.div>
      ))}

      {/* ── Main Content Row ──────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-[1280px] mx-auto" style={{ minHeight: 'clamp(600px, 60vw, 864px)' }}>

        {/* ── Left Panel: Title ─────────────────────────────── */}
        <motion.div
          className="w-full md:w-[40.6%] flex-shrink-0 flex items-center justify-center px-6 py-12 md:py-0"
          style={{ background: 'rgba(235, 229, 255, 0.8)' }}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-center md:text-left"
            style={{
              fontFamily: bahnschrift,
              fontWeight: 350,
              fontSize: 'clamp(2.25rem, 5.56vw, 80px)',
              lineHeight: '113%',
              letterSpacing: '-0.01em',
              color: '#575656',
              maxWidth: 'min(380px, 90%)',
            }}
          >
            How the <br /> <strong>Pod Model Works</strong>
          </h2>
        </motion.div>

        {/* ── Right Panel: Steps ───────────────────────────── */}
        <div className="flex-1 bg-white flex items-center justify-start px-6 md:px-0 py-12 md:py-0">
          <motion.div
            className="flex flex-col w-full"
            style={{
              paddingLeft: 'clamp(1.5rem, 7.7vw, 111px)',  // 697 - 585 = 112px offset from boundary
              paddingRight: 'clamp(1.5rem, 4vw, 56px)',
              paddingTop: '9px',
              paddingBottom: '9px',
              gap: 'clamp(1.5rem, 2.54vw, 36.57px)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeRight}
                className="flex flex-row items-start gap-4 md:gap-0"
                style={{
                  minHeight: 'clamp(100px, 12.3vw, 177px)',
                }}
              >
                {/* Mobile circle */}
                <div
                  className="md:hidden flex-shrink-0 flex items-center justify-center rounded-full mt-1"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(115, 0, 191, 0.8)',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 2px 12px rgba(115,0,191,0.2)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: bahnschrift,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: '#FFFFFF',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Text content */}
                <div
                  className="flex flex-col"
                  style={{ gap: 'clamp(0.6rem, 1.27vw, 18.29px)' }}
                >
                  {/* Heading — Figma: 36.57px, Bahnschrift 600, #5D5D5D */}
                  <h3
                    style={{
                      fontFamily: bahnschrift,
                      fontWeight: 'semibold',
                      fontSize: 'clamp(1rem, 2.14vw, 32.57px)',
                      lineHeight: '130%',
                      letterSpacing: '-0.01em',
                      color: '#5D5D5D',
                      margin: 0,
                    }}
                  >
                    {step.heading}
                  </h3>

                  {/* Body — Figma: 20.57px, Bahnschrift 350, #5D5D5D */}
                  <p
                    style={{
                      fontFamily: bahnschrift,
                      fontWeight: 350,
                      fontSize: 'clamp(0.9rem, 1.43vw, 20.57px)',
                      lineHeight: '150%',
                      color: '#5D5D5D',
                      margin: 0,
                      maxWidth: 'min(638px, 100%)',
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodModelWorks;