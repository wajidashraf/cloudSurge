import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ServiceCard {
  title: string;
  description?: string;
  bgOpacity: number;
  isSolid?: boolean;
}

const cards: ServiceCard[] = [
  { title: "Azure Solutions Delivery", bgOpacity: 0.25 },
  { title: "Power Platform Development", bgOpacity: 0.4 },
  { title: "Modern Web & Cloud Solutions", bgOpacity: 0.58 },
  { title: "Application Development Services", bgOpacity: 0.75 },
  {
    title: "Salesforce Development & Integration",
    bgOpacity: 1,
    description:
      "Customisation, integrations and delivery support that fit your roadmap.",
    isSolid: true,
  },
];

const CARD_HEIGHT = 243;
const OVERLAP = 170;
const DESKTOP_WIDTHS = [453, 470, 486, 502, 518];
const CONTAINER_W = DESKTOP_WIDTHS[DESKTOP_WIDTHS.length - 1];

const MOBILE_WIDTHS = [248, 258, 268, 278, 288];
const MOBILE_CONTAINER_W = MOBILE_WIDTHS[MOBILE_WIDTHS.length - 1];
const MOBILE_CARD_H = 134;
const MOBILE_OVERLAP = 93;

function cardBg(card: ServiceCard): string {
  return card.isSolid
    ? "rgba(0,0,0,0.35)"
    : `rgba(0,0,0,${card.bgOpacity * 0.28})`;
}

function cardBgHovered(): string {
  return "rgba(0,0,0,0.55)";
}

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
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const totalH = cardH + (cards.length - 1) * (cardH - overlap);

  return (
    <div style={{ position: "relative", width: containerW, height: totalH }}>
      {cards.map((card, i) => {
        const w = widths[i];
        const topOffset = i * (cardH - overlap);
        const leftOffset = (containerW - w) / 2;
        const isHovered = hoveredIndex === i;
        const someHovered = hoveredIndex !== null;

        return (
          <motion.div
            key={card.title}
            initial={{ y: 80, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: isHovered ? (small ? -12 : -22) : 0,
                    opacity: someHovered && !isHovered ? 0.4 : 1,
                    scale: isHovered ? 1.02 : 1,
                    background: isHovered ? cardBgHovered() : cardBg(card),
                    boxShadow: isHovered
                      ? "0 24px 56px rgba(0,0,0,0.4)"
                      : "0 4px 24px rgba(0,0,0,0.12)",
                  }
                : { y: 80, opacity: 0 }
            }
            transition={
              someHovered || isHovered
                ? { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                : {
                    duration: 0.55,
                    delay: i * 0.09,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }
            }
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
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
              zIndex: isHovered ? cards.length + 10 : i + 1,
              border: "1px solid rgba(255,255,255,0.18)",
              cursor: "pointer",
            }}
          >
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
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
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

const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const TextBlock = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        flex: "0 1 560px",
        minWidth: 0,
      }}
    >
      <h2
        style={{
          fontFamily: "Bahnschrift, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(40px, 5vw, 60px)",
          lineHeight: "113%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
          textAlign: "left",
        }}
      >
        What we Do
      </h2>
      <p
        style={{
          fontFamily: "Bahnschrift, sans-serif",
          fontSize: "clamp(16px, 1.8vw, 28px)",
          lineHeight: "120%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
          maxWidth: 630,
          textAlign: "left",
        }}
      >
        We strengthen delivery capability for organisations that need to move
        faster than their current team allows.
      </p>
      <p
        style={{
          fontFamily: "Bahnschrift, sans-serif",
          fontSize: "clamp(15px, 1.8vw, 24px)",
          lineHeight: "120%",
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.85)",
          margin: 0,
          maxWidth: 630,
          textAlign: "left",
        }}
      >
        Our Fusion Pods are pre-formed teams of three IT professionals, each
        with a Pod Lead, built-in project management, and QA from the start.
        They work across application development, modern web, cloud solutions,
        Azure, Power Platform, AWS, and Salesforce. Teams can be running in 48
        hours, not the weeks or months a traditional hire or subcontract takes.
      </p>
    </div>
  );

  return (
    <>
      <style>{`
        .wwd-about-section {
          width: 100%;
          background: #EC3F24;
          padding: 120px 0;
          overflow: hidden;
        }
        .wwd-about-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .wwd-about-section { padding: 56px 0; }
          .wwd-about-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 0 24px;
            gap: 40px;
          }
        }
        @media (max-width: 480px) {
          .wwd-about-section { padding: 48px 0; }
          .wwd-about-inner { padding: 0 16px; }
        }
      `}</style>

      <section ref={sectionRef} className="wwd-about-section">
        <div className="wwd-about-inner">
          {isMobile ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 40,
              }}
            >
              {TextBlock}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
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
            </div>
          ) : (
            <>
              {TextBlock}
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

export default WhatWeDo;
