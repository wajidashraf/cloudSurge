import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import GrowwImage from "@/assets/Growww.svg";

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [locked, setLocked] = useState(true);
  const [unmaskingComplete, setUnmaskingComplete] = useState(false);

  /* ── Responsive tracking ── */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setDimensions({ width: w, height: window.innerHeight });
      setIsMobile(w < 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Scroll-driven unmask (0.5 → 1) ── */
  const unmaskProgress = useMotionValue(0.5);
  const unmaskSpring = useSpring(unmaskProgress, {
    stiffness: 100,
    damping: 25,
  });

  // Image clip – bottom-to-top reveal
  const clipPath = useTransform(
    unmaskSpring,
    [0, 1],
    [
      "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0% 0%,   100% 0%,   100% 100%, 0% 100%)",
    ],
  );

  // Text fades in after image is 80% revealed
  const contentOpacity = useTransform(unmaskSpring, [0, 0.8, 1], [0, 0, 1]);
  const textClipPath = useTransform(
    unmaskSpring,
    [0, 0.8, 1],
    [
      "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0% 0%,   100% 0%,   100% 100%, 0% 100%)",
    ],
  );

  /* ── Notify Lenis to stop/start scrolling ── */
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(locked ? "hero:lock" : "hero:unlock"));
  }, [locked]);

  /* ── Unlock after unmasking completes ── */
  useEffect(() => {
    const unsub = unmaskSpring.on("change", (v) => {
      if (v >= 0.999) setUnmaskingComplete(true);
    });
    return unsub;
  }, [unmaskSpring]);

  useEffect(() => {
    if (!unmaskingComplete) return;
    const t = setTimeout(() => setLocked(false), 300);
    return () => clearTimeout(t);
  }, [unmaskingComplete]);

  /* ── Reset hero when user scrolls back to the very top ── */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 2 && unmaskingComplete && !locked) {
        unmaskProgress.set(0.5);
        setUnmaskingComplete(false);
        setLocked(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [locked, unmaskingComplete, unmaskProgress]);

  /* ── Auto-reveal on mobile ── */
  useEffect(() => {
    if (!isMobile || dimensions.width === 0) return;
    const t = setTimeout(() => {
      unmaskProgress.set(1);
      setUnmaskingComplete(true);
    }, 400);
    return () => clearTimeout(t);
  }, [isMobile, dimensions.width, unmaskProgress]);

  /* ── Wheel / touch handlers (active only while locked) ── */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!locked) return;
      e.preventDefault();
      const step = e.deltaY > 0 ? 0.3 : -0.3;
      unmaskProgress.set(
        Math.max(0.5, Math.min(1, unmaskProgress.get() + step)),
      );
    };

    let lastY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      if (!locked) return;
      lastY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!locked || lastY == null) return;
      e.preventDefault();
      const dy = lastY - e.touches[0].clientY;
      lastY = e.touches[0].clientY;
      const step = dy > 0 ? 0.3 : -0.3;
      unmaskProgress.set(
        Math.max(0.5, Math.min(1, unmaskProgress.get() + step)),
      );
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [locked, unmaskProgress]);

  return (
    <>
      <style>{`
        .hero-section {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
        }

        .hero-text-heading {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 3.75vw, 54px);
          line-height: 85%;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }

        .hero-text-desc {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-weight: 300;
          font-size: clamp(14px, 1.39vw, 20px);
          line-height: 104%;
          color: #FFFFFF;
        }

        /* Mobile overrides */
        @media (max-width: 767px) {
          .hero-text-heading {
            font-size: clamp(26px, 7vw, 36px);
            line-height: 90%;
            margin-bottom: 10px;
          }
          .hero-text-desc {
            font-size: 14px;
          }
        }
      `}</style>

      <section
        className="hero-section relative w-full overflow-hidden"
        style={{ height: "100vh", maxWidth: "100%" }}
      >
        {/* ── Background gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, #ec3f24 0%, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)",
          }}
        />

        {/* ── Centred content wrapper ── */}
        <div className="absolute inset-0 flex justify-center lg:pt-10 xl:pt-12 2xl:pt-35">
          <div className="relative w-full max-w-[1440px] h-full">
            {/* ── Groww SVG ── */}
            <motion.div
              className="absolute z-10"
              style={{
                left:
                  dimensions.width < 768
                    ? "50%"
                    : `clamp(40px, ${(137 / 1440) * 100}vw, 137px)`,
                top:
                  dimensions.width < 768
                    ? "0px"
                    : `clamp(-16px, ${(-31 / 600) * 100}%, -10px)`,
                width:
                  dimensions.width < 768
                    ? "85vw"
                    : `clamp(260px, ${(693 / 1440) * 100}vw, 693px)`,
                transform: dimensions.width < 768 ? "translateX(-50%)" : "none",
                clipPath: clipPath,
              }}
            >
              <img
                src={GrowwImage}
                alt="Grow Success Stories"
                className="w-full h-auto object-contain select-none"
                draggable={false}
              />
            </motion.div>

            {/* ── Text block ── */}
            <motion.div
              className="absolute z-20"
              style={{
                left:
                  dimensions.width < 768
                    ? "20px"
                    : `clamp(260px, 52.08%, 750px)`,
                right:
                  dimensions.width < 768
                    ? "20px"
                    : `clamp(100px, 22.15%, 319px)`,
                top:
                  dimensions.width < 768
                    ? "auto"
                    : `clamp(400px, 50.17%, 301px)`,
                bottom:
                  dimensions.width < 768 ? "clamp(28px, 6vh, 60px)" : "auto",
                opacity: contentOpacity,
                clipPath: textClipPath,
              }}
            >
              <h2 className="hero-text-heading text-left">
                Real projects.
                <br />
                Real outcomes.
              </h2>
              <p
                className="hero-text-desc text-left"
                style={{
                  maxWidth:
                    dimensions.width < 768
                      ? "min(340px, 100%)"
                      : `clamp(200px, ${(375 / 1440) * 100}vw, 375px)`,
                }}
              >
                A selection of what we have delivered across partners, product
                teams, and enterprise environments.
              </p>
            </motion.div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
