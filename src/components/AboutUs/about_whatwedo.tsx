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

// Container dimensions (from Figma): 547.6 × 551
// Ellipse: 476.17 × 476.17, left 21.39, top = 50% - 238.085 - 16.03 = 21.39
// Circle center within container: (259.5, 259.5)
// Radius: 238px
const CX = 259.5;
const CY = 259.5;
const R = 238;
const W = 547.6;
const H = 551;

const toRad = (deg: number) => (deg * Math.PI) / 180;

// Returns { left, top } as percentage strings, icon centered via translate(-50%,-50%)
const circlePos = (angleDeg: number) => {
  const rad = toRad(angleDeg);
  const left = ((CX + R * Math.sin(rad)) / W) * 100;
  const top = ((CY - R * Math.cos(rad)) / H) * 100;
  return { left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` };
};

// 10 icons evenly spaced at 36° each, starting from 12 o'clock
const ICONS = [
  { id: "microsoft",     angle: 0,   Icon: MicrosoftIcon,    size: 71 },
  { id: "azure",         angle: 36,  Icon: AzureIcon,        size: 56 },
  { id: "cloud",         angle: 72,  Icon: CloudIcon,        size: 71 },
  { id: "vscode",        angle: 108, Icon: VSCodeIcon,       size: 58 },
  { id: "automate",      angle: 144, Icon: PowerAutomateIcon,size: 61 },
  { id: "github",        angle: 180, Icon: GitHubIcon,       size: 71 },
  { id: "powerbi",       angle: 216, Icon: PowerBIIcon,      size: 61 },
  { id: "aws",           angle: 252, Icon: AWSIcon,          size: 71 },
  { id: "salesforce",    angle: 288, Icon: SalesForceIcon,   size: 71 },
  { id: "figma",         angle: 324, Icon: FigmaIcon,        size: 68 },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="relative w-full bg-[#EC3F24] overflow-hidden pt-25 pb-10 px-8">
      <div className="relative xl:px-6 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[600px]">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-10 z-10 item-cnter ">
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
           Our Fusion Pods are
            pre-formed teams of three IT professionals, each with a Pod Lead,
            built-in project management, and QA from the start. They work across
            application development, modern web, cloud solutions, Azure, Power
            Platform, AWS, and Salesforce. Teams can be running in 48 hours, not
            the weeks or months a traditional hire or subcontract takes.
          </p>
        </div>

        {/* Right: Visual */}
        <div
          className="relative flex-shrink-0 mt-8"
          style={{ width: "547.6px", height: "551px" }}
        >
          {/* Dashed orbit ellipse */}
          <div
            className="absolute rounded-full"
            style={{
              width: "476.17px",
              height: "476.17px",
              left: "21.39px",
              top: "21.39px",
              border: "1.7px dashed rgba(255,255,255,0.75)",
              transform: "rotate(-4deg)",
            }}
          />

          {/* Tech icons — centered on the circle via translate(-50%,-50%) */}
          {ICONS.map(({ id, angle, Icon, size }) => {
            const pos = circlePos(angle);
            return (
              <div
                key={id}
                className="absolute"
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Icon width={size} height={size} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
