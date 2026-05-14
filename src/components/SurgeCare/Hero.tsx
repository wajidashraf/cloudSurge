import React from "react";
import img from "@/assets/hand right.png";
import { Link } from "@tanstack/react-router";

const Hero: React.FC = () => {
  return (
    <section style={styles.section}>
      {/* Gradient overlay */}
      <div style={styles.gradientOverlay} />

      {/* Dark overlay for readability */}
      <div style={styles.darkOverlay} />

      {/* Content */}
      <div style={styles.contentWrapper}>
        {/* Headline */}
        <h1 style={styles.headline}>Surge Care</h1>

        {/* Subheadline */}
        <p style={styles.subheadline}>
          Your platform, looked after all year. 
        </p>
        <p style={styles.subheadline}>
        
          Small problems left unchecked
          become expensive ones. We catch them before they do - so your team
          focuses on building, not fixing. 
        
        </p>
        <p style={styles.subheadline}>
          We keep your platform secure, stable and performing, 24/7.
        </p>

        {/* Actions */}
        <div style={styles.actions}>
          {/* Icon */}
          <span style={styles.iconWrap}>
            <img src={img} alt="" />
          </span>

          {/* CTA Button */}
          <Link to="/fusion-pods" style={styles.ctaButton} className="hero-cta-btn">
            <span style={styles.ctaText}>Find out if Surge Care is right for you</span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-headline {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.1s;
        }
        .hero-sub {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.25s;
        }
        .hero-actions {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.4s;
        }

        .hero-cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .hero-cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(236,63,36,0.35) !important;
        }
        .hero-cta-btn:active {
          transform: translateY(0px) !important;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: clamp(36px, 9vw, 60px) !important;
          }
          .hero-sub {
            font-size: clamp(14px, 3.5vw, 20px) !important;
            width: 90% !important;
          }
          .hero-actions {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            max-width: 300px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 520px !important;
            padding: 60px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "clamp(480px, 55vw, 706px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontFamily:
      "'Bahnschrift', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
   
  },

  /* Gradient overlay left-to-right as specified */
  gradientOverlay: {
    position: "absolute",
    inset: 0,

    zIndex: 1,
  },

  /* Subtle dark vignette for text readability */
  darkOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(115deg, rgba(236,63,36,1) 50%, rgba(190,30,120,1) 60%, rgba(115,0,191,1) 75%, rgba(10,10,144,1) 100%)",
    zIndex: 2,
  },

  /* All content sits above overlays */
  contentWrapper: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "clamp(48px, 8vw, 120px) clamp(16px, 5vw, 80px)",
    gap: "clamp(14px, 2.5vw, 24px)",
    width: "100%",
  },

  headline: {
    margin: 0,
    fontSize: "clamp(40px, 6.5vw, 76px)",
    fontWeight: 700,
    lineHeight: "110%",
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
    maxWidth: "700px",
    textShadow: "0 2px 16px rgba(0,0,0,0.18)",
  },

  subheadline: {
    margin: 0,
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: 400,
    lineHeight: "130%",
    color: "#FFFFFF",
    maxWidth: "500px",
    opacity: 0.93,
    textShadow: "0 1px 8px rgba(0,0,0,0.15)",
  },

  /* Actions row */
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    marginTop: "clamp(8px, 1.5vw, 16px)",
  },

  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "34px",
    height: "34px",
    flexShrink: 0,
    filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.2))",
  },

  ctaButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 20px",
    gap: "8px",
    height: "39px",
    background: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "6px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  ctaText: {
    fontFamily:
      "'Bahnschrift', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontSize: "clamp(14px, 1.4vw, 18px)",
    fontWeight: 600,
    lineHeight: "150%",
    color: "#EC3F24",
    letterSpacing: "-0.01em",
  },
};

export default Hero;
