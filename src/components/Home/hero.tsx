import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/HeroSectionBG.svg";
import { Link } from "@tanstack/react-router";

const GLASS_STRIPS = 16;

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 50, y: 50 }); // percentage coords
  const raf = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = gradientRef.current;
    if (!section || !overlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      mouse.current = {
        x: ((e.clientX - left) / width) * 100,
        y: ((e.clientY - top) / height) * 100,
      };
    };

    // RAF loop for smooth lerp — decouples DOM writes from mousemove firing rate
    let currentX = 50;
    let currentY = 50;
    const LERP = 0.06; // lower = smoother/slower follow
    const IDLE_THRESHOLD = 0.01; // stop RAF when movement is negligible

    const tick = () => {
      const dx = mouse.current.x - currentX;
      const dy = mouse.current.y - currentY;

      // Skip DOM write and reschedule only if there's meaningful movement
      if (Math.abs(dx) < IDLE_THRESHOLD && Math.abs(dy) < IDLE_THRESHOLD) {
        raf.current = requestAnimationFrame(tick);
        return;
      }

      currentX += dx * LERP;
      currentY += dy * LERP;

      const angleRad = Math.atan2(currentY - 50, currentX - 50);
      const angleDeg = angleRad * (180 / Math.PI) + 90;

      overlay.style.background = `linear-gradient(${angleDeg}deg, #ec3f24 0%, #ec3f24 50%, #7300bf 75%, #0a0a90 100%)`;

      raf.current = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", handleMouseMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="hero-section relative w-full overflow-hidden flex flex-col items-center justify-center"
    >
      <style>{`
       .hero-section {
      height: 120vh;
      padding-bottom: 20vh;
    }

    
        .hero-heading {
          font-size: clamp(28px, 8vw, 60px);
          line-height: 88%;
          max-width: 720px;
        }
        @media (min-width: 640px) {
          .hero-heading { font-size: clamp(32px, 5.5vw, 60px); }
        }
        @media (min-width: 1024px) {
          .hero-heading { font-size: clamp(40px, 4.5vw, 60px); }
        }
        @media (min-width: 1536px) {
          .hero-heading {
            font-size: 68px !important;
            line-height: 90% !important;
            max-width: 860px !important;
          }
        }
        .hero-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 39px;
          padding: 0 24px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border-radius: 4px;
          border: 1px solid #fff;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s;
          width: 100%;
          max-width: 280px;
        }
        @media (min-width: 640px) {
          .hero-btn { width: auto; max-width: none; }
        }
        .hero-subtext {
          font-size: clamp(13px, 3.5vw, 15px);
          max-width: 90vw;
        }
        @media (min-width: 640px) {
          .hero-subtext { font-size: clamp(13px, 1.8vw, 15px); max-width: 610px; }
        }
      `}</style>

      {/* Background image — 120vh so it bleeds into the next section */}
      <div
        className="absolute w-full"
        style={{
          top: 0,
          height: "120vh",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mouse-tracking gradient overlay — also 120vh */}
      <div
        ref={gradientRef}
        className="absolute w-full"
        style={{
          top: 0,
          height: "120vh",
          background:
            "linear-gradient(180deg, #ec3f24 0%, #ec3f24 70%, #7300bf 85%, #0a0a90 100%)",
          willChange: "background",
        }}
      />

      {/* Glassmorphism strips — 120vh to match background/overlay */}
      <div className="absolute w-full flex flex-row items-stretch pointer-events-none overflow-hidden" style={{ top: 0, height: "120vh" }}>
        {Array.from({ length: GLASS_STRIPS }).map((_, i) => (
          <div
            key={i}
            className="relative"
            style={{
              flex: "1 0 0",
              height: "100%",
              marginLeft: i === 0 ? 0 : "-5px",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(59,59,59,0.2) 70.67%, rgba(255,255,255,0) 100%)",
                backgroundBlendMode: "overlay",
                backdropFilter: "blur(51px)",
                WebkitBackdropFilter: "blur(51px)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full px-4"
        initial={{ opacity: 0, y: 160, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="hero-heading text-center text-white"
          style={{
            fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif",
            fontWeight: 700,
          }}
        >
          More delivery capacity.
          <br />
          No recruitment. No delay.
        </h1>

        <p
          className="hero-subtext text-center text-white/90 mt-5"
          style={{
            lineHeight: "1.6",
            fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif",
          }}
        >
          Cloud Surge provides pre-formed teams of IT professionals that
          integrate with your existing setup in 48 hours. Whether you are
          scaling delivery for a client, building a product, or modernising a
          platform, we give you the team without the overhead.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full sm:w-auto">
          <Link
            to="/fusion-pods"
            className="hero-btn text-[#EC3F24] bg-white hover:bg-transparent hover:text-white"
            style={{ fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif" }}
          >
            See how a Pod works
          </Link>
          <a
            href="https://bookings.cloud.microsoft/book/FreeScaleUp@cloudsurge.uk" target="_blank"
            className="hero-btn text-white hover:bg-white hover:text-[#EC3F24]"
            style={{ fontFamily: "'Bahnschrift', 'DIN Alternate', sans-serif" }}
          >
            Talk to the team
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
