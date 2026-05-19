import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

const FONT = "'Bahnschrift', 'DIN Alternate', sans-serif";


const ArrowIcon: React.FC = () => (
  <svg
    width="17"
    height="20"
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

const CARDS = [
  {
    title: "Fusion Pods",
    tagline: "Get a pre-formed delivery team in 48 hours.",
    description: "Built for projects, scale-up delivery, and ongoing capacity.",
    linkLabel: "Explore Fusion Pods",
    to: "/fusion-pods",
  },
  {
    title: "Surge Care",
    tagline: "Ongoing platform maintenance, monitoring, and support.",
    description:
      "Fewer incidents. Lower long-term cost. A team that already knows your system.",
    linkLabel: "Explore Surge Care",
    to: "/surge-care",
  },
];

const WhatWeOffer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(252, 226, 225, 0.8), rgba(252, 226, 225, 0.8)), #FFFFFF",
        padding: "80px 0 80px",
        fontFamily: FONT,
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .wwo-inner {
          max-width: 1216px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Cards row ── */
        .wwo-cards {
          display: flex;
          flex-direction: row;
          gap: 16px;
          width: 100%;
          max-width: 980px;
          margin-top: 48px;
        }

        /* ── Single card ── */
        .wwo-card {
          background: #FFFFFF;
          flex: 1 1 0;
          min-width: 0;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-sizing: border-box;
        }

        .wwo-card-body {
          display: flex;
          flex-direction: column;
          gap: 32px;
          flex: 1;
        }

        .wwo-card-texts {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .wwo-card-title {
          font-family: ${FONT};
          font-weight: 700;
          font-size: 32px;
          line-height: 38px;
          color: #5D5D5D;
          margin: 0;
          text-align: left;
        }

        .wwo-card-tagline {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #5D5D5D;
          margin: 0;
          text-align: left;
        }

        .wwo-card-desc {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #858585;
          margin: 0;
        }

        /* ── Link ── */
        .wwo-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 56px;
          text-decoration: none;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 18px;
          line-height: 19px;
          letter-spacing: -0.04em;
          color: #E94227;
          transition: gap 0.2s;
        }
        .wwo-link:hover {
          gap: 12px;
        }

        /* ── Responsive ── */
        @media (max-width: 720px) {
          .wwo-cards {
            flex-direction: column;
            max-width: 100%;
          }
          .wwo-card-title  { font-size: 26px; line-height: 32px; }
          .wwo-card-tagline,
          .wwo-card-desc   { font-size: 17px; line-height: 22px; }
          .wwo-link        { margin-top: 32px; }
        }

        @media (max-width: 480px) {
          .wwo-heading { font-size: 40px !important; line-height: 1.15 !important; }
          .wwo-card    { padding: 20px; }
          .wwo-card-title  { font-size: 22px; }
          .wwo-card-tagline,
          .wwo-card-desc   { font-size: 15px; }
        }
      `}</style>

      <div className="wwo-inner">
        {/* Heading */}
        <motion.h2
          className="wwo-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: FONT,
            fontWeight: 600,
            fontSize: 60,
            lineHeight: "72px",
            textAlign: "center",
            color: "#EC3F24",
            margin: 0,
          }}
        >
          What We Offer
        </motion.h2>

        {/* Cards */}
        <div className="wwo-cards">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="wwo-card"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: "easeOut" }}
            >
              <div className="wwo-card-body">
                <div className="wwo-card-texts">
                  <h3 className="wwo-card-title">{card.title}</h3>
                  <p className="wwo-card-tagline">{card.tagline}</p>
                  <p className="wwo-card-desc">{card.description}</p>
                </div>
              </div>

              <Link to={card.to} className="wwo-link flex align-start ">
                <ArrowIcon />
                <span className="-mb-1">
                {card.linkLabel}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;