import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── CtaSection ───────────────────────────────────────────────────────────────
const CareerCta: React.FC = () => {
  const ref     = useRef<HTMLElement>(null);
  // trigger once when 30 % of the section enters viewport
  const inView  = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      <style>{`
        .cta-section1 {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
        }
        .cta-btn-primary {
          /* Brand gradient — matches Hero */
          background: linear-gradient(105deg, #ec3f24 0%, #ec3f24 40%, #7300bf 75%, #0a0a90 100%);
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          height: 39px;
          min-width: 188px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .cta-btn-primary:hover  { opacity: 0.88; transform: translateY(-1px); }
        .cta-btn-primary:active { opacity: 1;    transform: translateY(0);    }

        .cta-btn-secondary {
          background: transparent;
          border: 1px solid #EC3F24;
          border-radius: 6px;
          padding: 6px 12px;
          height: 39px;
          min-width: 156px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .cta-btn-secondary:hover  {
          background: #EC3F24;
          transform: translateY(-1px);
        }
        .cta-btn-secondary:hover span { color: #fff; }
        .cta-btn-secondary:active { transform: translateY(0); }

        @media (max-width: 480px) {
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 180px !important;
          }
        }
      `}</style>

      <section
        ref={ref}
        className="cta-section1"
        style={{
          width:      "100%",
          background: "#FFFFFF",
          /* Figma: 384px tall; let padding create that on mobile too */
          minHeight:  380,
          display:    "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── Max-width container — Figma: 1280px ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            width:   "100%",
            maxWidth: 1280,
            padding: "0 24px",
            display: "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            80,
          }}
        >
          {/* ── Content block — Figma: max-width 768px, gap 32px ── */}
          <div
            style={{
              width:   "100%",
              maxWidth: 768,
              display: "flex",
              flexDirection:  "column",
              alignItems:     "center",
              gap:            32,
            }}
          >
            {/* Text group — gap 16px */}
            <div
              style={{
                width:   "100%",
                display: "flex",
                flexDirection: "column",
                alignItems:    "center",
                gap:           16,
              }}
            >
              {/* Heading — Figma: Bahnschrift 700 45px #5D5D5D */}
              <motion.h2
                variants={fadeUp}
                style={{
                  fontWeight:  600,
                  fontSize:    "clamp(22px, 3vw, 45px)",
                  lineHeight:  "54px",
                  textAlign:   "center",
                  color:       "#5D5D5D",
                  margin:      0,
                }}
              >
                Be a Part of Something Bigger
              </motion.h2>

              
            </div>

            {/* ── Actions — Figma: row, gap 16px ── */}
            <motion.div
              variants={fadeUp}
              style={{
                display:    "flex",
                flexDirection: "row",
                alignItems: "center",
                gap:        16,
                flexWrap:   "wrap",
                justifyContent: "center",
              }}
            >
              <Link to="/contact" className="cta-btn-primary" >
                <span
                  style={{
                    fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif",
                    fontWeight: 400,
                    fontSize:   17,
                    lineHeight: "150%",
                    color:      "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Grow your business
                </span>
              </Link>
              <Link to="/careers" className="cta-btn-secondary">
                <span
                  style={{
                    fontWeight: 400,
                    fontSize:   17,
                    lineHeight: "150%",
                    // color:      "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Explore Careers
                </span>
              </Link>

             
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CareerCta;