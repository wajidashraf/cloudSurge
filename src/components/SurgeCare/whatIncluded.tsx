import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import search from "@/assets/search.png";
import candle from "@/assets/candle.png";
import uploadarrow from "@/assets/upload.png";
import shield from "@/assets/shield.png";
import openfile from "@/assets/openFile.png";

const FONT = "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif";

const items = [
  {
    icon: search,
    alt: "Search",
    title: "Incident resolution for existing functionality",
    detail:
      "When something breaks, we fix it. No lengthy escalation processes.",
  },
  {
    icon: candle,
    alt: "Performance",
    title: "Performance enhancements and minor refinements",
    detail:
      "Regular reviews to keep your platform running at its best, without waiting for a full project cycle.",
  },
  {
    icon: shield,
    alt: "Security",
    title: "Security reviews and patching",
    detail:
      "Proactive vulnerability scanning and dependency updates to keep your platform compliant and protected.",
  },
  {
    icon: uploadarrow,
    alt: "Upgrade",
    title: "Upgrade and dependency management",
    detail:
      "Version upgrades and dependency updates planned and executed without disrupting your team.",
  },
  {
    icon: openfile,
    alt: "Recommendations",
    title: "Proactive recommendations",
    detail:
      "We do not just maintain. We look ahead. Regular recommendations on platform health so you can make informed decisions before problems arise.",
  },
];

interface AccordionItemProps {
  icon: string;
  alt: string;
  title: string;
  detail: string;
  index: number;
  open: boolean;
  onToggle: () => void;
  inView: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const AccordionItem = ({ icon, alt, title, detail, index, open, onToggle, inView }: AccordionItemProps) => {
  return (
    <motion.div
      className={`wi-item${open ? " wi-item--open" : ""}`}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <button
        className="wi-item-header"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`wi-detail-${index}`}
      >
        <div className="wi-icon-wrap" aria-hidden="true">
          <img src={icon} alt={alt} className="wi-icon-img" />
        </div>
        <span className="wi-item-title">{title}</span>
        <div className="wi-chevron" aria-hidden="true">
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L12 12L22 2"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        id={`wi-detail-${index}`}
        className="wi-item-detail"
        role="region"
      >
        <p className="wi-item-detail-text">{detail}</p>
      </div>
    </motion.div>
  );
};

const WhatsIncluded = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });

  const rightRef = useRef<HTMLDivElement>(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        .wi-section {
          background: #FFFFFF;
          width: 100%;
          padding: 110px 64px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
        }

        .wi-inner {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 80px;
        }

        /* ── LEFT COLUMN ── */
        .wi-left {
          flex: 0 0 450px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          
        }

        .wi-heading {
          font-family: ${FONT};
          font-weight: 600;
          font-size: 50px;
          line-height: 1.1;
          letter-spacing: 1.5px;
          color: #EC3F24;
          margin: 0;
        }

        .wi-description {
          font-family: ${FONT};
          font-weight: 350;
          font-size: 20px;
          line-height: 1.4;
          color: #727272;
          margin: 0;
          max-width: 380px;
        }

        /* ── RIGHT COLUMN ── */
        .wi-right {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
        }

        /* ── ITEM ── */
        .wi-item {
          display: flex;
          flex-direction: column;
        }

        .wi-item-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          padding: 18px 0;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .wi-icon-wrap {
          flex: 0 0 40px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #EC3F24;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .wi-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .wi-item-title {
          flex: 1 1 0;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 24px;
          line-height: 1.2;
          color: #000000;
        }

        .wi-chevron {
          flex: 0 0 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .wi-item--open .wi-chevron {
          transform: rotate(180deg);
        }

        /* Accordion detail */
        .wi-item-detail {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease;
        }

        .wi-item--open .wi-item-detail {
          max-height: 200px;
        }

        .wi-item-detail-text {
          min-height: 0;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 17px;
          line-height: 1.55;
          color: #555555;
          margin: 0;
          padding-left: 56px;
          padding-right: 56px;
          padding-bottom: 18px;
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .wi-section {
            padding: 80px 40px;
          }
          .wi-inner {
            gap: 56px;
          }
          .wi-left {
            flex: 0 0 280px;
          }
          .wi-heading {
            font-size: 46px;
          }
          .wi-description {
            font-size: 17px;
          }
          .wi-item-title {
            font-size: 20px;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .wi-section {
            padding: 64px 24px;
          }
          .wi-inner {
            flex-direction: column;
            gap: 48px;
            align-items: flex-start;
          }
          .wi-left {
            flex: none;
            width: 100%;
            gap: 16px;
          }
          .wi-heading {
            font-size: 40px;
          }
          .wi-description {
            font-size: 16px;
            max-width: 100%;
          }
          .wi-right {
            width: 100%;
          }
          .wi-item-title {
            font-size: 18px;
          }
          .wi-item-detail-text {
            font-size: 15px;
            padding-left: 0;
          }
        }

        /* ── SMALL MOBILE ── */
        @media (max-width: 480px) {
          .wi-section {
            padding: 48px 20px;
          }
          .wi-heading {
            font-size: 34px;
          }
          .wi-item-title {
            font-size: 16px;
          }
          .wi-icon-wrap {
            flex: 0 0 34px;
            width: 34px;
            height: 34px;
          }
          .wi-icon-img {
            width: 18px;
            height: 18px;
          }
          .wi-item-header {
            gap: 12px;
          }
        }
      `}</style>

      <section className="wi-section" aria-labelledby="wi-heading">
        <div className="wi-inner">
          {/* LEFT */}
          <motion.div
            ref={leftRef}
            className="wi-left"
            initial={{ opacity: 0, x: -24 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="wi-heading" id="wi-heading">
              What's Included
            </h2>
            <p className="wi-description">
              Surge Care is a structured annual support service. Here is what it covers.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div ref={rightRef} className="wi-right " role="list">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                {...item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                inView={rightInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatsIncluded;
