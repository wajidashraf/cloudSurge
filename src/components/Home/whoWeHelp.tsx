import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import ITPartnerImage from "@/assets/IT Partners and MSP.jpg";
import EnterpriseImage from "@/assets/Enterprise and in house team.jpg";
import TechImage from "@/assets/Tech Product Companies.jpg";

const FONT = "'Bahnschrift', 'DIN Alternate', sans-serif";

const TAGS = ["Digital", "Operations", "Finance", "Customer Experience", "Data", "IT & Security"];
const TICKER_TAGS = [...TAGS, ...TAGS, ...TAGS, ...TAGS];

const CARDS = [
  {
    title: "IT Partners\n& MSPs",
    image: ITPartnerImage,
    alt: "IT Partners and MSPs",
    content:
      "Scaling client delivery without growing headcount? We give you pre-formed teams that plug directly into your service model — no recruitment, no ramp-up time.",
  },
  {
    title: "Tech Product\nCompanies",
    image: TechImage,
    alt: "Tech Product Companies",
    content:
      "Spent money on a build that did not deliver? Or trying to move faster than your current team can manage? We provide outcome-focused delivery teams that integrate with your roadmap, not against it.",
  },
  {
    title: "Enterprise &\nIn-House IT Teams",
    image: EnterpriseImage,
    alt: "Enterprise and In-House IT Teams",
    content:
      "Backlog growing? Internal teams stretched thin? We embed experienced professionals alongside your team — no handoff friction, no vendor overhead.",
  },
];

const TEXT_PANEL_W = 292; // width of the revealed text panel on hover

const WhoWeHelp: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background: "#fff",
        padding: "52px 0 60px",
        fontFamily: FONT,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes tickerRTL {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wwh-ticker-track {
          display: flex;
          flex-direction: row;
          gap: 16px;
          animation: tickerRTL 22s linear infinite;
          width: max-content;
        }
        .wwh-ticker-outer:hover .wwh-ticker-track {
          animation-play-state: paused;
        }

        /* ── Cards row ── */
        .wwh-cards-row {
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: flex-start;
          width: 100%;
        }

        /* ── Card shell: flex-grow fills space equally at rest ── */
        .wwh-card {
          background: #DEDEDE;
          /* flex: 1 0 0 means all 3 share space equally when not expanded */
          flex: 1 0 0;
          min-width: 0;
          height: 295px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          /* Only transition flex-grow so siblings shrink as hovered card grows */
          transition: flex-grow 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          // box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
          // // border-radius: 6px;
        }

        /* Expanded card gets extra flex-grow to claim the text panel width */
        .wwh-card.expanded {
          flex-grow: 2.2;
        }

        /* ── Left pane: fills whatever width the card has ── */
        .wwh-card-left {
          /* Takes all space not used by the (hidden) right panel */
          flex: 1 1 auto;
          min-width: 0;
          height: 295px;
          position: relative;
          z-index: 1;
        }

        /* Title */
        .wwh-card-title {
          position: absolute;
          left: 2.5%;
          top: 23px;
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 600;
          color: #5D5D5D;
          line-height: 1.13;
          letter-spacing: -0.01em;
          white-space: pre-line;
          z-index: 2;
          font-family: ${FONT};
          text-align: left;
        }

        /* Image: centred horizontally, pinned to bottom, fills ~87% of card */
        .wwh-card-img {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 10px;
          width: 95%;
          max-width: 95%;
          height: 180px;
          object-fit: cover;
          object-position: center top;
          transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      max-width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      bottom 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Shrink image when card is expanded to give text panel visual breathing room */
        .wwh-card.expanded .wwh-card-img {
          height: 180px;
          bottom: 12px;
          width: calc(100% - 16px);
          max-width: calc(100% - 16px);
        }

        /* ── Right pane: fixed width text panel, hidden until expanded ── */
        .wwh-card-right {
          flex-shrink: 0;
          width: 0;
          height: 295px;
          overflow: hidden;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(12px);
          transition:
            width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.3s 0.15s,
            transform 0.35s 0.1s;
        }
        .wwh-card.expanded .wwh-card-right {
          width: ${TEXT_PANEL_W}px;
          opacity: 1;
          transform: translateX(0);
        }

        .wwh-card-content {
          font-size: clamp(14px, 1.1vw, 17px);
          color: #5D5D5D;
          line-height: 1.6;
          font-family: ${FONT};
          font-weight: 400;
          padding: 24px 24px 24px 20px;
          width: ${TEXT_PANEL_W}px;
          flex-shrink: 0;
          text-align: left;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .wwh-cards-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .wwh-card {
            flex: none !important;
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
          }
          /* Card left: tall enough for title + full image */
          .wwh-card-left {
            width: 100% !important;
            height: auto !important;
            min-height: 260px;
            padding-bottom: 0 !important;
          }
          /* Title: single line, smaller so it never wraps */
          .wwh-card-title {
            font-size: 18px !important;
            white-space: nowrap !important;
            top: 16px !important;
            left: 16px !important;
          }
          /* Image: relative flow so card expands to contain it */
          .wwh-card-img {
            position: relative !important;
            left: unset !important;
            bottom: unset !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 200px !important;
            display: block;
            margin-top: 52px;
            object-fit: cover;
            object-position: center top;
          }
          /* Text panel: always visible, full width */
          .wwh-card-right {
            width: 100% !important;
            height: auto !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .wwh-card-content {
            width: 100% !important;
            padding: 16px 20px 20px !important;
          }
          .wwh-header-wrap {
            flex-wrap: wrap !important;
            gap: 12px !important;
          }
          /* Ticker: stack title on top, track below full width */
          .wwh-ticker-row {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start !important;
          }
          .wwh-ticker-divider { display: none !important; }
          .wwh-ticker-outer   { width: 100% !important; flex: unset !important; }
        }

        @media (max-width: 540px) {
          .wwh-ticker-heading { font-size: 16px !important; }
          .wwh-ticker-tag    { font-size: 14px !important; padding: 6px 12px !important; }
          .wwh-title         { font-size: 36px !important; }
          .wwh-subtitle      { font-size: 16px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1216, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div
          className="wwh-header-wrap"
          style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 12 }}
        >
          <span
            className="wwh-title"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 600,
              color: "#EF4123",
              lineHeight: 1.13,
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              fontFamily: FONT,
            }}
          >
            Who we help
          </span>
          <div style={{ width: 0, height: 61, borderLeft: "1.5px solid #EF4123", flexShrink: 0 }} />
          <span
            className="wwh-subtitle"
            style={{
              fontSize: "clamp(20px, 2vw, 27.5px)",
              fontWeight: 350,
              color: "#EF4123",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              fontFamily: FONT,
              textAlign: "left",
            }}
          >
            Built for Teams<br />
            That Need Capacity.{" "}
            <strong style={{ fontWeight: 700 }}>Now!</strong>
          </span>
        </div>

        {/* ── Tagline ── */}
        <p
          style={{
            fontSize: "clamp(17px, 1.3vw, 20px)",
            fontWeight: 350,
            color: "#EF4123",
            letterSpacing: "-0.01em",
            margin: "60px 0 28px",
            fontFamily: FONT,
            textAlign: "left",
          }}
        >
          If you're growing rapidly and trying to scale delivery,<br />
          you'll recognise these challenges.
        </p>

        {/* ── Cards ── */}
        <div className="wwh-cards-row">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`wwh-card${expandedIdx === i ? " expanded" : ""}`}
              onMouseEnter={() => setExpandedIdx(i)}
              onMouseLeave={() => setExpandedIdx(null)}
            >
              {/* Left pane — fills card width, title + image always visible */}
              <div className="wwh-card-left">
                <div className="wwh-card-title">{card.title}</div>
                <img className="wwh-card-img" src={card.image} alt={card.alt} />
              </div>

              {/* Right pane — text panel, width animates 0 → 292px on hover */}
              <div className="wwh-card-right">
                <p className="wwh-card-content">{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Ticker ── */}
        <div style={{ marginTop: 48, borderTop: "1px solid #e0e0e0", paddingTop: 24 }}>
          <div className="wwh-ticker-row" style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <span
              className="wwh-ticker-heading"
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#5D5D5D",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontFamily: FONT,
              }}
            >
              Common teams we support
            </span>
            <div className="wwh-ticker-divider" style={{ width: 0, height: 46, borderLeft: "1.5px solid #DEDEDE", flexShrink: 0 }} />
            <div
              className="wwh-ticker-outer"
              style={{ overflow: "hidden", flex: 1, position: "relative" }}
            >
              <div className="wwh-ticker-track">
                {TICKER_TAGS.map((tag, idx) => (
                  <div
                    key={idx}
                    className="wwh-ticker-tag"
                    style={{
                      background: "#DEDEDE",
                      padding: "8px 16px",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#858585",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: FONT,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="wwh-ticker-divider" style={{ width: 0, height: 46, borderLeft: "1.5px solid #DEDEDE", flexShrink: 0 }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeHelp;