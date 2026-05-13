import React from "react";
import gpTriage from "@/assets/GP-Logo 3.png";
import fawri from "@/assets/Fawrii_logo.png";
import genera from "@/assets/Genaiera_Logo_Green.png";
import zeptica from "@/assets/Zaptica-Logo.png";

// ─── Logo config: Figma sizes per logo ───────────────────────────────────────
const LOGOS = [
  { src: gpTriage, alt: "GP Triage", w: 199, h: 69 },
  { src: fawri, alt: "Fawri", w: 171, h: 61 },
  { src: zeptica, alt: "Zaptica", w: 122, h: 70 },
  { src: genera, alt: "Genaiera", w: 154, h: 50 },
];

const GAP = 54; // px — Figma gap between items

// ─── Single logo item ─────────────────────────────────────────────────────────
const LogoItem: React.FC<(typeof LOGOS)[number]> = ({ src, alt, w, h }) => (
  <div
    className="flex-none flex items-center justify-center"
    style={{ width: w, height: 72 }} // fixed row height = tallest logo (72px)
  >
    <img
      src={src}
      alt={alt}
      draggable={false}
      style={{
        width: w,
        height: h,
        objectFit: "contain",
        userSelect: "none",
        // keep logos visible on any bg — invert if needed per logo
        filter: "brightness(1)",
      }}
    />
  </div>
);

// ─── ProjectsRibbon ───────────────────────────────────────────────────────────
const ProjectsRibbon: React.FC = () => {
  // Duplicate logos 4× so the seamless loop never shows a gap on any screen width
  const repeated = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <>
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ribbon-track {
          /* total width = 2 full sets; animate exactly one set left */
          animation: marquee-rtl 22s linear infinite;
          will-change: transform;
        }

        .ribbon-track:hover {
          animation-play-state: paused;
        }

        /* Fade edges */
        .ribbon-fade::before,
        .ribbon-fade::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(40px, 8vw, 120px);
          z-index: 2;
          pointer-events: none;
        }
        .ribbon-fade::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .ribbon-fade::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }
      `}</style>

      {/* Section wrapper */}
      <section
        className="ribbon-fade relative w-full overflow-hidden bg-white"
        style={{ height: 124 }} // Figma: height 124px
        aria-label="Client logos"
      >
        {/* Scrolling track */}
        <div
          className="ribbon-track absolute top-0 left-0 flex items-center"
          style={{
            gap: GAP,
            paddingTop: 26,
            paddingBottom: 26,
            // track must be wide enough to contain 4× logo sets comfortably
            width: "max-content",
          }}
        >
          {repeated.map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsRibbon;
