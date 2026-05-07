import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DeliveryCard {
  title: string;
  description?: string;
  bgOpacity: number;
  isSolid?: boolean;
}

const cards: DeliveryCard[] = [
  { title: "Azure Solutions Delivery", bgOpacity: 0.4 },
  { title: "Power Platform Development", bgOpacity: 0.55 },
  { title: "Modern Web & Cloud Solutions", bgOpacity: 0.75 },
  { title: "Application Development Services", bgOpacity: 0.9 },
  {
    title: "Salesforce Development & Integration", bgOpacity: 1,
    description:
      "Customisation, integrations and delivery support that fit your roadmap.",
    isSolid: true,
  },
];

const CARD_HEIGHT = 243;
const OVERLAP = 170; // cards overlap by this many px

// Each card is progressively wider; widest (last) = container width
const DESKTOP_WIDTHS = [453, 470, 486, 502, 518];
const CONTAINER_W = DESKTOP_WIDTHS[DESKTOP_WIDTHS.length - 1]; // 518

// Mobile uses the same proportions but scaled down to fit narrow screens
const MOBILE_WIDTHS = [248, 258, 268, 278, 288];
const MOBILE_CONTAINER_W = MOBILE_WIDTHS[MOBILE_WIDTHS.length - 1]; // 288
const MOBILE_CARD_H = 134;
const MOBILE_OVERLAP = 93; // keeps same ratio as desktop (170/243 ≈ 0.7)

function cardBg(card: DeliveryCard): string {
  return card.isSolid
    ? "#F03717"
    : `linear-gradient(0deg,rgba(236,63,36,${card.bgOpacity}),rgba(236,63,36,${card.bgOpacity})),#FFFFFF`;
}

/* ── Arrow icon from uploaded SVG ── */
const ArrowIcon: React.FC = () => (
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

/* ── Shared card text ── */
const CardContent: React.FC<{ card: DeliveryCard; small?: boolean }> = ({
  card,
  small,
}) => (
  <>
    <h3
      style={{
        fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
        fontWeight: 600,
        fontSize: small ? 15 : "clamp(16px, 2.2vw, 32px)",
        lineHeight: "130%",
        letterSpacing: "-0.01em",
        color: "#FFFFFF",
        margin: 0,
      }}
    >
      {card.title}
    </h3>
    {card.description && (
      <p
        style={{
          fontFamily: "'Inter',sans-serif",
          fontWeight: 400,
          fontSize: small ? 11 : 14.6,
          lineHeight: "150%",
          color: "#FFFFFF",
          margin: 0,
          textShadow: "0px 0.8px 1.6px rgba(0,0,0,0.25)",
        }}
      >
        {card.description}
      </p>
    )}
  </>
);

/* ────────────────────────────────────────────────
   Stacked card stack — reused for both desktop and
   mobile (widths / heights differ via props)
──────────────────────────────────────────────── */
interface StackProps {
  isInView: boolean;
  widths: number[];
  containerW: number;
  cardH: number;
  overlap: number;
  small?: boolean;
}

const CardStack: React.FC<StackProps> = ({
  isInView,
  widths,
  containerW,
  cardH,
  overlap,
  small,
}) => {
  const totalH = cardH + (cards.length - 1) * (cardH - overlap);

  return (
    <div style={{ position: "relative", width: containerW, height: totalH }}>
      {cards.map((card, i) => {
        const w = widths[i];
        const topOffset = i * (cardH - overlap);
        // Center every card horizontally inside the container
        const leftOffset = (containerW - w) / 2;

        return (
          <motion.div
            key={card.title}
            initial={{ x: 160, opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: 160, opacity: 0 }
            }
            whileHover={{
              y: small ? -8 : -18,
              background: "#EF4123",
              boxShadow: "0 18px 48px rgba(239,65,35,0.38)",
            }}
            transition={{
              duration: 0.55,
              delay: i * 0.09,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: "absolute",
              top: topOffset,
              left: leftOffset,
              width: w,
              height: cardH,
              background: cardBg(card),
              borderRadius: 12,
              padding: small ? "14px 16px" : "26px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: small ? 6 : 12,
              zIndex: i + 1,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <CardContent card={card} small={small} />
          </motion.div>
        );
      })}
    </div>
  );
};

/* ── Tiny matchMedia hook ── */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia(query).matches
        : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

/* ── CTA links ── */
const CTALinks: React.FC<{ isInView: boolean; delay?: number }> = ({
  isInView,
  delay = 0.2,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    style={{ display: "flex", flexDirection: "column", gap: 16 }}
  >
    {["Book a consultation today", "Explore Fusion Pods"].map((label) => (
      <a
        key={label}
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: 10,
          fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
          fontWeight: 600,
          fontSize: "clamp(16px, 2vw, 22px)",
          letterSpacing: "-0.04em",
          color: "#E94227",
          textDecoration: "none",
        }}
      >
        <ArrowIcon />
        {label}
      </a>
    ))}
  </motion.div>
);

/* ════════════════════════════════════════════════
   Main component
════════════════════════════════════════════════ */
const WhatWeDeliver: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // once: false → animates back out when section leaves viewport
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <style>{`
        .wwd-section {
          width: 100%;
          background: #fff;
          padding: 120px 0;
          overflow: hidden;
          max-height: 1125px;
          
        }
        /* Desktop: side-by-side */
        .wwd-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 8px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .wwd-left { flex: 0 1 560px; min-width: 0; }

        /* ── Tablet / Mobile ── */
        @media (max-width: 1024px) {
          .wwd-section  { padding: 56px 0; }
          .wwd-inner    {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 0 24px;
          }
          /* On mobile the left panel goes ABOVE the cards */
          .wwd-left {
            flex: unset;
            width: 100%;
            max-width: 520px;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .wwd-section  { padding: 48px 0; }
          .wwd-inner    { padding: 0 16px; }
        }
      `}</style>

      <section ref={sectionRef} className="wwd-section">
        <div className="wwd-inner">

          {isMobile ? (
            /* ══ MOBILE LAYOUT: heading → text → cards → links ══ */
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
              }}
            >
              {/* 1. Avatar + Heading + Body */}
              <div style={{ width: "100%", maxWidth: 520 }}>
                

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{
                    fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(34px, 8vw, 52px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#EC3F24",
                    margin: "0 0 16px",
                  }}
                >
                  What we Deliver?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                  style={{
                    fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
                    fontWeight: 350,
                    fontSize: "clamp(14px, 3.5vw, 18px)",
                    lineHeight: 1.5,
                    color: "#727272",
                    margin: 0,
                  }}
                >
                  We take your AI-generated code and transform it into a secure,
                  scalable application that you own and control.
                </motion.p>
              </div>

              {/* 2. Stacked cards — same layered design, scaled for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <CardStack
                  isInView={isInView}
                  widths={MOBILE_WIDTHS}
                  containerW={MOBILE_CONTAINER_W}
                  cardH={MOBILE_CARD_H}
                  overlap={MOBILE_OVERLAP}
                  small
                />
              </motion.div>

              {/* 3. CTA links */}
              <div style={{ width: "100%", maxWidth: 520 }}>
                <CTALinks isInView={isInView} delay={0.3} />
              </div>
            </div>
          ) : (
            /* ══ DESKTOP LAYOUT: text left | cards right ══ */
            <>
              <div className="wwd-left">
                {/* Avatar badge */}
               

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(36px, 5vw, 72px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#EC3F24",
                    margin: "0 0 20px",
                  }}
                >
                  What we Deliver?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                  }
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  style={{
                    fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
                    fontWeight: 350,
                    fontSize: "clamp(15px, 1.8vw, 20px)",
                    lineHeight: 1.5,
                    color: "#727272",
                    margin: "0 0 36px",
                    maxWidth: 520,
                  }}
                >
                  We take your AI-generated code and transform it into a secure,
                  scalable application that you own and control.
                </motion.p>

                <CTALinks isInView={isInView} delay={0.2} />
              </div>

              {/* Desktop card stack — centered pyramid */}
              <CardStack
                isInView={isInView}
                widths={DESKTOP_WIDTHS}
                containerW={CONTAINER_W}
                cardH={CARD_HEIGHT}
                overlap={OVERLAP}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default WhatWeDeliver;