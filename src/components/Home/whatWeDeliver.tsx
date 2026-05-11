import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DeliveryCard {
  title: string;
  description?: string;
  bgOpacity: number;
  isSolid?: boolean;
}

const cards: DeliveryCard[] = [
  {
    title: "Azure Solutions Delivery",
    bgOpacity: 0.4,
    description:
      "Strong cloud foundations, secure environments, integrations and data setups built to handle pressure.",
  },
  {
    title: "Power Platform Development",
    bgOpacity: 0.55,
    description:
      "Rapid internal tools, automations and business apps built and delivered with proper governance.",
  },
  {
    title: "Modern Web & Cloud Solutions",
    bgOpacity: 0.75,
    description:
      "Secure and scalable web platforms and cloud-native services built for growth.",
  },
  {
    title: "Application Development Services",
    bgOpacity: 0.9,
    description:
      "Build and modernise applications that scale - from MVP to enterprise-grade systems.",
  },
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
const CONTAINER_W = DESKTOP_WIDTHS[DESKTOP_WIDTHS.length - 1]; // 518

const MOBILE_WIDTHS = [248, 258, 268, 278, 288];
const MOBILE_CONTAINER_W = MOBILE_WIDTHS[MOBILE_WIDTHS.length - 1]; // 288
const MOBILE_CARD_H = 134;
const MOBILE_OVERLAP = 93;

/* Returns the base background string for a card (used in initial & non-hovered state) */
function cardBg(card: DeliveryCard): string {
  return card.isSolid
    ? "#F03717"
    : `linear-gradient(0deg,rgba(236,63,36,${card.bgOpacity}),rgba(236,63,36,${card.bgOpacity})),#FFFFFF`;
}

/* ── Arrow icon ── */
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

/* ── Card text ── */
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
   Card Stack
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
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const totalH = cardH + (cards.length - 1) * (cardH - overlap);
  const someHovered = hoveredIndex !== null;

  return (
    <div style={{ position: "relative", width: containerW, height: totalH }}>
      {cards.map((card, i) => {
        const w = widths[i];
        const topOffset = i * (cardH - overlap);
        const leftOffset = (containerW - w) / 2;
        const isHovered = hoveredIndex === i;

        // Stagger from the BOTTOM card upward: last card has delay 0, first card has max delay
        const staggerDelay = (cards.length - 1 - i) * 0.1;

        return (
          <motion.div
            key={card.title}
            initial={{ y: 60, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: isHovered ? (small ? -12 : -22) : 0,
                    opacity: someHovered && !isHovered ? 0.25 : 1,
                    scale: isHovered ? 1.02 : 1,
                  }
                : { y: 60, opacity: 0 }
            }
            transition={
              // Fast, responsive transition during hover; staggered on entry
              someHovered || isHovered
                ? { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }
                : {
                    duration: 0.55,
                    delay: staggerDelay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }
            }
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              // ── Position & Size ──────────────────────────
              position: "absolute",
              top: topOffset,
              left: leftOffset,
              width: w,
              height: cardH,
              // ── z-index: hovered card always on top ──────
              // Applied directly (not via framer animate) so it takes effect instantly
              zIndex: isHovered ? cards.length + 10 : i + 1,
              // ── Background: managed here, NOT in animate ─
              background: isHovered ? "#EF4123" : cardBg(card),
              boxShadow: isHovered
                ? "0 24px 56px rgba(239,65,35,0.15)"
                : "0 4px 24px rgba(0,0,0,0.08)",
              // ── Layout ───────────────────────────────────
              borderRadius: 12,
              padding: small ? "14px 16px" : "26px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: small ? 6 : 12,
              cursor: "pointer",
              // Smooth background & shadow on hover (CSS transition covers what framer doesn't)
              transition: "background 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <CardContent card={card} small={small} />
          </motion.div>
        );
      })}
    </div>
  );
};

/* ── Media query hook ── */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
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

/* ── CTA Links — no animation, just static ── */
const CTALinks: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {["Book a consultation today", "Explore Fusion Pods"].map((label) => (
      <a
        key={label}
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
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
  </div>
);

/* ── Static left-side text panel ── */
const LeftPanel: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <div
    style={{
      textAlign: "left",
      ...(mobile ? { width: "100%", maxWidth: 520 } : {}),
    }}
  >
    <h2
      style={{
        fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
        fontWeight: 600,
        fontSize: mobile ? "clamp(34px, 8vw, 52px)" : "clamp(36px, 5vw, 72px)",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        color: "#EC3F24",
        margin: "0 0 16px",
        textAlign: "left",
      }}
    >
      What we Deliver?
    </h2>

    <p
      style={{
        fontFamily: "'Bahnschrift','Segoe UI',sans-serif",
        fontWeight: 350,
        fontSize: mobile ? "clamp(14px, 3.5vw, 18px)" : "clamp(15px, 1.8vw, 20px)",
        lineHeight: 1.5,
        color: "#727272",
        margin: mobile ? "0 0 24px" : "0 0 36px",
        maxWidth: 520,
        textAlign: "left",
      }}
    >
      We take your AI-generated code and transform it into a secure, scalable
      application that you own and control.
    </p>

    <CTALinks />
  </div>
);

/* ════════════════════════════════════════════════
   Main component
════════════════════════════════════════════════ */
const WhatWeDeliver: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

        @media (max-width: 1024px) {
          .wwd-section  { padding: 56px 0; }
          .wwd-inner    {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 0 24px;
          }
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
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
              }}
            >
              {/* Static text — no animation */}
              <LeftPanel mobile />

              {/* Card stack animates in */}
              <CardStack
                isInView={isInView}
                widths={MOBILE_WIDTHS}
                containerW={MOBILE_CONTAINER_W}
                cardH={MOBILE_CARD_H}
                overlap={MOBILE_OVERLAP}
                small
              />
            </div>
          ) : (
            <>
              {/* Static text left — no animation */}
              <div className="wwd-left">
                <LeftPanel />
              </div>

              {/* Card stack animates in */}
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