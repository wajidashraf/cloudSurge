import React from "react";
import {
  AzureIcon,
  AWSIcon,
  CloudIcon,
  GitHubIcon,
  MicrosoftIcon,
  VSCodeIcon,
  FigmaIcon,
  SalesForceIcon,
  PowerAutomateIcon,
  PowerBIIcon,
} from "@/components/common/svgIcons";

// Square container so rotate+translateY(-R) always lands exactly on the circle
const R   = 238;   // orbit radius
const SZ  = 551;   // container side length (square)

const ICONS = [
  { id: "microsoft", angle: 0,   Icon: MicrosoftIcon,     size: 71 },
  { id: "azure",     angle: 36,  Icon: AzureIcon,         size: 56 },
  { id: "cloud",     angle: 72,  Icon: CloudIcon,         size: 71 },
  { id: "vscode",    angle: 108, Icon: VSCodeIcon,        size: 58 },
  { id: "automate",  angle: 144, Icon: PowerAutomateIcon, size: 61 },
  { id: "github",    angle: 180, Icon: GitHubIcon,        size: 71 },
  { id: "powerbi",   angle: 216, Icon: PowerBIIcon,       size: 61 },
  { id: "aws",       angle: 252, Icon: AWSIcon,           size: 71 },
  { id: "salesforce",angle: 288, Icon: SalesForceIcon,    size: 71 },
  { id: "figma",     angle: 324, Icon: FigmaIcon,         size: 68 },
];

const DURATION = "22s";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes whatwedo-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes whatwedo-counter {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .wwd-orbit-ring {
          animation: whatwedo-orbit ${DURATION} linear infinite;
        }
        .wwd-icon-upright {
          animation: whatwedo-counter ${DURATION} linear infinite;
        }
      `}</style>

      <section className="relative w-full bg-[#EC3F24] overflow-hidden py-25 px-8">
        <div className="relative xl:px-6 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center  gap-16 min-h-[600px]">

          {/* ── Left: Text ── */}
          <div className="px-2 md:px-0 flex-1 min-w-[400px] flex flex-col gap-10 z-10">
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "Bahnschrift, sans-serif",
                fontSize: "clamp(40px, 5vw, 60px)",
                lineHeight: "113%",
                letterSpacing: "-0.01em",
              }}
            >
              What we Do
            </h2>
            <p
              className="text-white max-w-[630px]"
              style={{
                fontFamily: "Bahnschrift, sans-serif",
                fontSize: "clamp(16px, 1.8vw, 28px)",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
              }}
            >
              We strengthen delivery capability for organisations that need to
              move faster than their current team allows.
            </p>
            <p
              className="text-white max-w-[630px]"
              style={{
                fontFamily: "Bahnschrift, sans-serif",
                fontSize: "clamp(15px, 1.8vw, 24px)",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
              }}
            >
              Our Fusion Pods are pre-formed teams of three IT professionals,
              each with a Pod Lead, built-in project management, and QA from
              the start. They work across application development, modern web,
              cloud solutions, Azure, Power Platform, AWS, and Salesforce.
              Teams can be running in 48 hours, not the weeks or months a
              traditional hire or subcontract takes.
            </p>
          </div>

          {/* ── Right: Orbit Visual ──
              Outer wrapper shrinks/grows the whole graphic via scale().
              The inner graphic is always SZ × SZ so the maths stay exact. */}
          <div
            className="relative flex-shrink-0 mt-8 flex items-start justify-center lg:justify-start
              h-[303px] sm:h-[358px] md:h-[441px] lg:h-[496px] xl:h-[551px]
              w-full xl:w-[551px]"
          >
            <div
              className="absolute origin-top
                scale-[0.55] sm:scale-[0.65] md:scale-[0.8] lg:scale-[0.9] xl:scale-100"
              style={{ width: `${SZ}px`, height: `${SZ}px` }}
            >

              {/* Static dashed orbit ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width:  `${R * 2}px`,
                  height: `${R * 2}px`,
                  left:   `${SZ / 2 - R}px`,
                  top:    `${SZ / 2 - R}px`,
                  border: "1.7px dashed rgba(255,255,255,0.75)",
                }}
              />

              {/* Rotating wrapper — spins the icon positions around the circle */}
              <div
                className="wwd-orbit-ring absolute"
                style={{ width: `${SZ}px`, height: `${SZ}px`, left: 0, top: 0 }}
              >
                {ICONS.map(({ id, angle, Icon, size }) => (
                  /*
                   * Layer 1 — anchored to the circle center
                   * Layer 2 — rotated to angle, pushed out by R
                   * Layer 3 — centered on the icon
                   * Layer 4 — counter-spins so the icon face stays upright
                   */
                  <div
                    key={id}
                    className="absolute"
                    style={{ left: "50%", top: "50%", width: 0, height: 0 }}
                  >
                    {/* push icon out to the circle at its starting angle */}
                    <div
                      style={{
                        position: "absolute",
                        transform: `rotate(${angle}deg) translateY(-${R}px)`,
                      }}
                    >
                      {/* cancel the starting-angle tilt so icon faces up at rest */}
                      <div
                        style={{
                          position: "absolute",
                          transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
                        }}
                      >
                        {/* cancel the ongoing orbit rotation so icon stays upright */}
                        <div className="wwd-icon-upright">
                          <Icon width={size} height={size} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
