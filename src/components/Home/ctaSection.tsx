import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

const FONT = "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif";

const CtaSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        fontFamily: FONT,
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 62px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          box-sizing: border-box;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 768px;
        }

        .cta-heading {
          font-family: ${FONT};
          font-weight: 700;
          font-size: clamp(28px, 4vw, 45px);
          line-height: 120%;
          text-align: center;
          color: #5D5D5D;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cta-body {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: clamp(15px, 1.8vw, 20px);
          line-height: 150%;
          text-align: center;
          color: #5D5D5D;
          margin: 0;
          max-width: 768px;
          width: 100%;
        }

        .cta-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 28px;
          height: 39px;
          background: linear-gradient(90deg, #EC3F24 0%, #EC3F24 20%, #7300BF 65%, #0A0A9A 100%);
          border-radius: 6px;
          font-family: ${FONT};
          
          font-size: clamp(14px, 1.4vw, 18px);
          line-height: 150%;
          color: #FFFFFF;
          text-decoration: none;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          min-width: 240px;
        }
        .cta-btn-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 24px;
          height: 39px;
          background: transparent;
          border: 1.5px solid #EC3F24;
          border-radius: 6px;
          font-family: ${FONT};
          font-weight: 600;
          font-size: clamp(14px, 1.4vw, 18px);
          line-height: 150%;
          color: #EC3F24;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .cta-btn-secondary:hover {
          background: #EC3F24;
          color: #fff;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .cta-inner {
            padding: 48px 20px;
            gap: 24px;
          }
          .cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            min-width: unset;
            justify-content: center;
          }
        }
      `}</style>

      <div className="cta-inner">
        <div className="cta-content">
          {/* Heading */}
          <motion.h2
            className="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Ready to scale delivery?
          </motion.h2>

          {/* Body */}
          <motion.p
            className="cta-body"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Tell us what you are working on. We will come back within one business day with a view on whether and how we can help.
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <a href="https://bookings.cloud.microsoft/book/FreeScaleUp@cloudsurge.uk" target="_blank" className="cta-btn-primary">
            Book a free delivery assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
